import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Fetch production batches
    const batches = await db.productionBatch.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    })

    // Fetch products for raw stock calculation
    const rawMaterials = await db.product.findMany({
      where: { category: "RAW_MATERIAL" },
    })

    // Fetch all products for cold storage grouping
    const allProducts = await db.product.findMany()

    // Helper function to consolidate products by name
    const consolidateByName = (products: typeof allProducts) => {
      const grouped = new Map<string, number>()
      for (const p of products) {
        grouped.set(p.name, (grouped.get(p.name) || 0) + p.current_stock)
      }
      return Array.from(grouped.entries()).map(([name, stock]) => ({ name, stock }))
    }

    // Group products by location and consolidate by name
    const cuartoFrio1Products = allProducts.filter((p) => p.location === "CUARTO_FRIO_1")
    const cuartoFrio1Consolidated = consolidateByName(cuartoFrio1Products).sort(
      (a, b) => b.stock - a.stock
    )
    const cuartoFrio1Total = cuartoFrio1Consolidated.reduce((sum, p) => sum + p.stock, 0)
    const cuartoFrio1TopProducts = cuartoFrio1Consolidated.slice(0, 3)

    const cuartoFrio2Products = allProducts.filter((p) => p.location === "CUARTO_FRIO_2")
    const cuartoFrio2Consolidated = consolidateByName(cuartoFrio2Products).sort(
      (a, b) => b.stock - a.stock
    )
    const cuartoFrio2Total = cuartoFrio2Consolidated.reduce((sum, p) => sum + p.stock, 0)
    const cuartoFrio2TopProducts = cuartoFrio2Consolidated.slice(0, 3)

    // Calculate stats (consolidated by name)
    const rawStockConsolidated = consolidateByName(rawMaterials).reduce(
      (sum, p) => sum + p.stock,
      0
    )
    const activeBatches = batches.filter(
      (b) => b.status === "FRYING" || b.status === "PACKAGING"
    ).length

    // Fetch orders for pending count
    const orders = await db.order.findMany({
      where: { status: "PENDING" },
    })

    return NextResponse.json({
      batches: batches.map((b) => ({
        ...b,
        input_weight_kg: b.input_weight_kg.toString(),
        output_weight_kg: b.output_weight_kg.toString(),
        waste_weight_kg: b.waste_weight_kg.toString(),
      })),
      stats: {
        rawStock: rawStockConsolidated,
        activeBatches,
        coldStorage: cuartoFrio1Total + cuartoFrio2Total,
        pendingOrders: orders.length,
      },
      coldStorage: {
        cuartoFrio1: {
          total: cuartoFrio1Total,
          topProducts: cuartoFrio1TopProducts,
        },
        cuartoFrio2: {
          total: cuartoFrio2Total,
          topProducts: cuartoFrio2TopProducts,
        },
      },
    })
  } catch (error) {
    console.error("Dashboard API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    )
  }
}
