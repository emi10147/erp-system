"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { startOfDay, endOfDay } from "date-fns"

/**
 * Consolidate or create a finished good product entry.
 * If a product with the same name has an inventory log on the same date,
 * consolidate (sum quantities). Otherwise, create a new entry with a new timeline point.
 */
export async function consolidateOrCreateProduct(data: {
  name: string
  sku: string
  current_stock: number
  category: "FINISHED_GOOD"
  type?: "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT"
  location?: "CUARTO_FRIO_1" | "CUARTO_FRIO_2" | "ALMACEN_GENERAL"
  unit_cost?: number
  provider?: string
  ingresoDate: Date
}) {
  try {
    if (data.current_stock < 0) {
      return { success: false, message: "Error: El stock no puede ser menor a cero" }
    }

    // Get start and end of the specified date
    const dateStart = startOfDay(data.ingresoDate)
    const dateEnd = endOfDay(data.ingresoDate)

    // Find products with the same name
    const existingProducts = await db.product.findMany({
      where: { name: data.name, category: "FINISHED_GOOD" },
      include: {
        inventoryLogs: {
          where: {
            createdAt: {
              gte: dateStart,
              lte: dateEnd,
            },
          },
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    })

    // Check if there's a product with a log on the same date
    const existingProductWithSameDate = existingProducts.find(
      (p) => p.inventoryLogs.length > 0
    )

    if (existingProductWithSameDate) {
      // CONSOLIDATE: Same product, same date → sum quantities
      const newStock = existingProductWithSameDate.current_stock + data.current_stock
      
      const updated = await db.product.update({
        where: { id: existingProductWithSameDate.id },
        data: {
          current_stock: newStock,
          sku: data.sku, // Update SKU if provided
        },
      })

      // Update the inventory log with the new quantity
      const lastLog = existingProductWithSameDate.inventoryLogs[0]
      if (lastLog) {
        const newLogQuantity = lastLog.quantity + data.current_stock
        await db.inventoryLog.update({
          where: { id: lastLog.id },
          data: { quantity: newLogQuantity },
        })
      }

      revalidatePath("/inventory")
      revalidatePath("/")

      return {
        success: true,
        product: updated,
        message: `Consolidado: se sumó ${data.current_stock} unidades a ${data.name}. Stock total: ${newStock}`,
      }
    } else {
      // NEW ENTRY: Different date or first time → create new record
      const location =
        data.category === "PACKAGING"
          ? "ALMACEN_GENERAL"
          : (data.location || null)

      // Check if product exists at all (any date)
      const existingProduct = existingProducts[0]

      let product

      if (existingProduct) {
        // Product exists but on different date: just update stock
        // The InventoryLog will track the date separation
        product = await db.product.update({
          where: { id: existingProduct.id },
          data: {
            current_stock: existingProduct.current_stock + data.current_stock,
            sku: data.sku,
          },
        })
      } else {
        // First time creating this product
        product = await db.product.create({
          data: {
            name: data.name,
            sku: data.sku,
            category: data.category,
            type: data.type || "NORMAL_CUT",
            location: location,
            current_stock: data.current_stock,
            unit_cost: data.unit_cost || null,
            provider: data.provider || null,
          },
        })
      }

      // Create new inventory log entry for this date
      await db.inventoryLog.create({
        data: {
          product_id: product.id,
          quantity: data.current_stock,
          reason: "Ingreso de producto terminado",
          createdAt: data.ingresoDate,
        },
      })

      revalidatePath("/inventory")
      revalidatePath("/")

      return {
        success: true,
        product,
        message: `Nuevo registro: ${data.name} agregado con ${data.current_stock} unidades en la fecha ${data.ingresoDate.toLocaleDateString()}`,
      }
    }
  } catch (error) {
    console.error("Error consolidating product:", error)
    return { success: false, message: "No se pudo guardar el producto terminado" }
  }
}

export async function createProduct(data: {
  name: string
  sku: string
  category: "RAW_MATERIAL" | "FINISHED_GOOD" | "PACKAGING"
  type?: "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT"
  location?: "CUARTO_FRIO_1" | "CUARTO_FRIO_2" | "ALMACEN_GENERAL"
  current_stock: number
  unit_cost?: number
  provider?: string
  ingresoDate?: Date
}) {
  try {
    // Validate stock is not negative
    if (data.current_stock < 0) {
      return { success: false, message: "Error: El stock no puede ser menor a cero" }
    }

    // Auto-assign ALMACEN_GENERAL for PACKAGING (Insumos)
    const location = data.category === "PACKAGING" ? "ALMACEN_GENERAL" : (data.location || null)

    const product = await db.product.create({
      data: {
        name: data.name,
        sku: data.sku,
        category: data.category,
        type: data.type || "NORMAL_CUT",
        location: location,
        current_stock: data.current_stock,
        unit_cost: data.unit_cost || null,
        provider: data.provider || null,
      },
    })

    // Create inventory log entry for initial stock
    if (data.current_stock > 0) {
      const logDate = data.ingresoDate || new Date()
      await db.inventoryLog.create({
        data: {
          product_id: product.id,
          quantity: data.current_stock,
          reason: "Ingreso inicial",
          unit_cost: data.unit_cost || null,
          createdAt: logDate,
        },
      })
    }

    revalidatePath("/inventory")
    revalidatePath("/")
    
    return { success: true, product, message: "Producto guardado exitosamente" }
  } catch (error) {
    console.error("Error creating product:", error)
    return { success: false, message: "No se pudo guardar el producto" }
  }
}

export async function updateProduct(data: {
  id: string
  name: string
  sku: string
  category: "RAW_MATERIAL" | "FINISHED_GOOD" | "PACKAGING"
  type: "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT"
  location?: "CUARTO_FRIO_1" | "CUARTO_FRIO_2" | "ALMACEN_GENERAL"
  current_stock: number
  unit_cost?: number
  provider?: string
}) {
  try {
    // Validate stock is not negative
    if (data.current_stock < 0) {
      return { success: false, message: "Error: El stock no puede ser menor a cero" }
    }

    // Auto-assign ALMACEN_GENERAL for PACKAGING (Insumos)
    const location = data.category === "PACKAGING" ? "ALMACEN_GENERAL" : (data.location || null)

    const product = await db.product.update({
      where: { id: data.id },
      data: {
        name: data.name,
        sku: data.sku,
        category: data.category,
        type: data.type,
        location: location,
        current_stock: data.current_stock,
        unit_cost: data.unit_cost || null,
        provider: data.provider || null,
      },
    })

    revalidatePath("/inventory")
    revalidatePath("/")
    
    return { success: true, product, message: "Producto actualizado correctamente" }
  } catch (error: any) {
    console.error("Error updating product:", error)
    
    // Handle unique constraint error for SKU
    if (error.code === "P2002" && error.meta?.target?.includes("sku")) {
      return { success: false, message: "El SKU ya existe. Por favor, usa uno diferente." }
    }
    
    return { success: false, message: "No se pudo actualizar el producto" }
  }
}

export async function deleteProduct(productId: string) {
  try {
    // Check if product has any associated production batches
    const existingBatches = await db.productionBatch.findMany({
      where: {
        // Depending on your schema, you may need to adjust this query
        // This assumes there's a relationship between ProductionBatch and Product
      },
    })

    // If there are batches, prevent deletion
    if (existingBatches && existingBatches.length > 0) {
      return { 
        success: false, 
        message: "No se puede eliminar este producto porque tiene lotes de producción asociados." 
      }
    }

    // Delete the product
    await db.product.delete({
      where: { id: productId },
    })

    revalidatePath("/inventory")
    revalidatePath("/")
    
    return { success: true, message: "Producto eliminado correctamente" }
  } catch (error: any) {
    console.error("Error deleting product:", error)
    
    // Handle foreign key constraint error
    if (error.code === "P2014" || error.code === "P2003") {
      return { 
        success: false, 
        message: "No se puede eliminar este producto porque tiene datos asociados." 
      }
    }
    
    return { success: false, message: "No se pudo eliminar el producto" }
  }
}
