"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { RECIPES } from "@/config/manufacturing"
import type { FriesType } from "@prisma/client"

// ==================== TYPES ====================
export interface RecipeItem {
  name: string
  alternatives: string[]
  quantity: number
  unit: string
  actualQuantity?: number
}

export interface StockGroup {
  name: string
  totalStock: number
  items: Array<{
    id: string
    sku: string
    stock: number
    createdAt: Date
  }>
}

export interface FeasibilityResult {
  canProduce: boolean
  summary: {
    needed: number
    available: number
    lacks: number
  }
  stockGroups: StockGroup[]
  shortages: Array<{
    ingredient: string
    unit: string
    needed: number
    available: number
    lacks: number
  }>
}

// ==================== HELPER FUNCTIONS ====================

/**
 * Get grouped stock by product name (sum all SKU variants)
 */
async function getGroupedStock(productNames: string[]): Promise<
  Record<
    string,
    {
      total: number
      items: Array<{
        id: string
        sku: string
        current_stock: number
        createdAt: Date
      }>
    }
  >
> {
  const products = await db.product.findMany({
    where: {
      name: { in: productNames },
    },
    select: {
      id: true,
      name: true,
      sku: true,
      current_stock: true,
      createdAt: true,
    },
  })

  const grouped: Record<
    string,
    {
      total: number
      items: Array<{
        id: string
        sku: string
        current_stock: number
        createdAt: Date
      }>
    }
  > = {}

  for (const product of products) {
    if (!grouped[product.name]) {
      grouped[product.name] = { total: 0, items: [] }
    }
    grouped[product.name].total += product.current_stock
    grouped[product.name].items.push({
      id: product.id,
      sku: product.sku,
      current_stock: product.current_stock,
      createdAt: product.createdAt,
    })
  }

  return grouped
}

/**
 * Find the best available product considering alternatives
 */
async function findAvailableProduct(
  itemNames: string[]
): Promise<StockGroup | null> {
  for (const name of itemNames) {
    const grouped = await getGroupedStock([name])
    if (grouped[name] && grouped[name].total > 0) {
      return {
        name,
        totalStock: grouped[name].total,
        items: grouped[name].items,
      }
    }
  }
  return null
}

// ==================== MAIN FUNCTIONS ====================

/**
 * Check if production is feasible (pre-validation)
 */
export async function checkProductionFeasibility(
  productType: FriesType,
  targetQuantity: number
): Promise<FeasibilityResult> {
  const recipe = RECIPES[productType as keyof typeof RECIPES]

  if (!recipe) {
    return {
      canProduce: false,
      summary: { needed: 0, available: 0, lacks: 0 },
      stockGroups: [],
      shortages: [{ ingredient: productType, unit: "unit", needed: 1, available: 0, lacks: 1 }],
    }
  }

  const allItems = [
    ...recipe.rawMaterials,
    ...recipe.liquids,
    ...recipe.solids,
    ...recipe.packaging,
  ]

  const shortages: FeasibilityResult["shortages"] = []
  const stockGroups: StockGroup[] = []
  let canProduce = true

  for (const item of allItems) {
    const needed = item.quantity * targetQuantity
    const available = await findAvailableProduct([item.name, ...item.alternatives])

    if (!available) {
      shortages.push({
        ingredient: item.name,
        unit: item.unit,
        needed,
        available: 0,
        lacks: needed,
      })
      canProduce = false
    } else {
      stockGroups.push(available)
      if (available.totalStock < needed) {
        const lacks = needed - available.totalStock
        shortages.push({
          ingredient: item.name,
          unit: item.unit,
          needed,
          available: available.totalStock,
          lacks,
        })
        canProduce = false
      }
    }
  }

  return {
    canProduce,
    summary: {
      needed: allItems.reduce((acc, item) => acc + item.quantity * targetQuantity, 0),
      available: stockGroups.reduce((acc, sg) => acc + sg.totalStock, 0),
      lacks: shortages.reduce((acc, s) => acc + s.lacks, 0),
    },
    stockGroups,
    shortages,
  }
}

/**
 * Execute production with FIFO inventory deduction
 */
export async function executeProduction(
  productType: FriesType,
  targetQuantity: number
): Promise<{ success: boolean; message: string; batchId?: string }> {
  const recipe = RECIPES[productType as keyof typeof RECIPES]

  if (!recipe) {
    return { success: false, message: "Receta no encontrada para el tipo: " + productType }
  }

  try {
    // First, validate feasibility
    const feasibility = await checkProductionFeasibility(productType, targetQuantity)

    if (!feasibility.canProduce) {
      const shortageDetails = feasibility.shortages
        .map((s) => `${s.ingredient}: necesitas ${s.needed.toFixed(2)} ${s.unit}, faltan ${s.lacks.toFixed(2)} ${s.unit}`)
        .join("; ")
      return {
        success: false,
        message: `No hay suficiente inventario. ${shortageDetails}`,
      }
    }

    // Get all items needed
    const allItems = [
      ...recipe.rawMaterials.map((r) => ({ ...r, type: "rawMaterial" })),
      ...recipe.liquids.map((l) => ({ ...l, type: "liquid" })),
      ...recipe.solids.map((s) => ({ ...s, type: "solid" })),
      ...recipe.packaging.map((p) => ({ ...p, type: "packaging" })),
    ]

    // Execute FIFO deduction for each ingredient
    const inventoryReductions: Array<{ productId: string; quantityReduced: number }> = []

    for (const item of allItems) {
      const needed = item.quantity * targetQuantity
      let remaining = needed

      // Find available product (with alternatives)
      const available = await findAvailableProduct([item.name, ...item.alternatives])
      if (!available) {
        return { success: false, message: `No se encontró ${item.name}` }
      }

      // Sort items by createdAt (FIFO: oldest first)
      const sortedItems = [...available.items].sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )

      // Deduct from inventory in FIFO order
      for (const stockItem of sortedItems) {
        if (remaining <= 0) break

        const toDeduct = Math.min(remaining, stockItem.current_stock)

        // Update product stock
        await db.product.update({
          where: { id: stockItem.id },
          data: {
            current_stock: {
              decrement: toDeduct,
            },
          },
        })

        // Create inventory log for deduction
        await db.inventoryLog.create({
          data: {
            product_id: stockItem.id,
            quantity: -toDeduct,
            reason: `Producción: ${recipe.name} (${targetQuantity} unidades)`,
            createdAt: new Date(),
          },
        })

        inventoryReductions.push({
          productId: stockItem.id,
          quantityReduced: toDeduct,
        })

        remaining -= toDeduct
      }

      if (remaining > 0) {
        return { success: false, message: `Error al deducir ${item.name}` }
      }
    }

    // Find or create finished product by type
    let finishedProduct = await db.product.findFirst({
      where: {
        type: productType,
        category: "FINISHED_GOOD",
      },
    })

    if (!finishedProduct) {
      finishedProduct = await db.product.create({
        data: {
          name: recipe.name,
          sku: `PROD-${productType}-${Date.now()}`,
          category: "FINISHED_GOOD",
          type: productType,
          location: "ALMACEN_GENERAL",
          current_stock: 0,
        },
      })
    }

    // Increment finished product stock
    await db.product.update({
      where: { id: finishedProduct.id },
      data: {
        current_stock: {
          increment: targetQuantity,
        },
      },
    })

    // Create inventory log for finish product
    await db.inventoryLog.create({
      data: {
        product_id: finishedProduct.id,
        quantity: targetQuantity,
        reason: `Producción completada: ${recipe.name} (${targetQuantity} unidades)`,
        createdAt: new Date(),
      },
    })

    revalidatePath("/inventory")
    revalidatePath("/manufacturing")
    revalidatePath("/")

    return {
      success: true,
      message: `Producción completada: ${targetQuantity} unidades de ${recipe.name} fabricadas exitosamente`,
      batchId: finishedProduct.id,
    }
  } catch (error) {
    console.error("Error en ejecución de producción:", error)
    return {
      success: false,
      message: "Error al ejecutar la producción. Por favor intenta de nuevo.",
    }
  }
}
