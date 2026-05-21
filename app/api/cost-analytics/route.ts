import { db } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryParam = searchParams.get("category") || "RAW_MATERIAL"
    
    // Validate category is one of the valid enum values
    const validCategories = ["RAW_MATERIAL", "PACKAGING", "FINISHED_GOOD"]
    if (!validCategories.includes(categoryParam)) {
      return NextResponse.json(
        { error: "Invalid category" },
        { status: 400 }
      )
    }
    
    const category = categoryParam as "RAW_MATERIAL" | "PACKAGING" | "FINISHED_GOOD"

    // Define which products belong to each category (safety check against DB inconsistencies)
    const rawMaterialNames = ["Papa Chola", "Papa Superchola", "Papa Nativa", "Papa"]
    const packagingNames = ["Aceite Vegetal", "Fundas Plásticas", "Cajas de Cartón", "Sal Industrial", "Etiquetas"]

    // Get all products with inventory logs and their costs - FILTERED BY CATEGORY AND BUSINESS LOGIC
    // Only include entries (ingresos de stock)
    const productWhere: any = {
      category: category,
    }
    
    // Extra safety: apply business logic to ensure no cross-contamination
    if (category === "RAW_MATERIAL") {
      // For Raw Materials: only include potato products
      productWhere.name = {
        in: rawMaterialNames,
      }
    } else if (category === "PACKAGING") {
      // For Packaging: EXCLUDE ALL potato products, only include packaging products
      productWhere.name = {
        in: packagingNames,
      }
    }
    
    const products = await db.product.findMany({
      where: productWhere,
      include: {
        inventoryLogs: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    })

    // Process data for cost analysis
    const costByDate = new Map<string, number>() // For total daily investment
    const costByProduct = new Map<string, Array<{ date: string; unitCost: number; quantity: number }>>()

    products.forEach((product) => {
      if (product.inventoryLogs.length === 0) return

      if (!costByProduct.has(product.name)) {
        costByProduct.set(product.name, [])
      }

      product.inventoryLogs.forEach((log: any) => {
        const dateStr = log.createdAt.toISOString().split("T")[0]
        
        // Use stored unit_cost from log, or fallback to product's current unit_cost
        const unitCost = log.unit_cost ? parseFloat(log.unit_cost.toString()) : (product.unit_cost ? parseFloat(product.unit_cost.toString()) : 0)
        
        // For product-level cost evolution (using unit_cost from log or current product cost)
        const productCosts = costByProduct.get(product.name)!
        productCosts.push({
          date: dateStr,
          unitCost: unitCost,
          quantity: log.quantity,
        })

        // For daily total investment (sum of all costs by date)
        const totalCost = unitCost * log.quantity
        costByDate.set(dateStr, (costByDate.get(dateStr) || 0) + totalCost)
      })
    })

    // Format cost by product (get average unit cost per day per product)
    const productCostData = Array.from(costByProduct.entries()).map(([productName, costs]) => {
      // Group by date and aggregate
      const costByDateMap = new Map<string, { totalCost: number; unitCost: number; quantity: number }>()
      
      costs.forEach(({ date, unitCost, quantity }) => {
        if (!costByDateMap.has(date)) {
          costByDateMap.set(date, { totalCost: 0, unitCost: 0, quantity: 0 })
        }
        const existing = costByDateMap.get(date)!
        existing.totalCost += unitCost * quantity
        existing.unitCost = unitCost // Take the latest unit cost for the day
        existing.quantity += quantity
      })

      // Convert to array and sort by date
      const history = Array.from(costByDateMap.entries())
        .map(([date, data]) => ({
          date,
          unitCost: data.unitCost,
          totalCostThatDay: data.totalCost,
          quantity: data.quantity,
        }))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

      return {
        productName,
        history,
      }
    })

    // Format daily investment (total across all products and items)
    const dailyInvestment = Array.from(costByDate.entries())
      .map(([date, totalCost]) => ({
        date,
        totalInvestment: parseFloat(totalCost.toFixed(2)),
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return NextResponse.json(
      {
        productCostAnalysis: productCostData,
        dailyInvestmentAnalysis: dailyInvestment,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error fetching cost analytics:", error)
    return NextResponse.json(
      { error: "Failed to fetch cost analytics" },
      { status: 500 }
    )
  }
}
