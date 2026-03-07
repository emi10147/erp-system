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
    const products = await db.product.findMany({
      where: { category: "RAW_MATERIAL" },
    })

    // Fetch all products for cold storage grouping
    const allProducts = await db.product.findMany()

    // Group products by location and calculate totals
    const cuartoFrio1 = allProducts
      .filter((p) => p.location === "CUARTO_FRIO_1")
      .sort((a, b) => b.current_stock - a.current_stock)
    const cuartoFrio1Total = cuartoFrio1.reduce((sum, p) => sum + p.current_stock, 0)
    const cuartoFrio1TopProducts = cuartoFrio1.slice(0, 3)

    const cuartoFrio2 = allProducts
      .filter((p) => p.location === "CUARTO_FRIO_2")
      .sort((a, b) => b.current_stock - a.current_stock)
    const cuartoFrio2Total = cuartoFrio2.reduce((sum, p) => sum + p.current_stock, 0)
    const cuartoFrio2TopProducts = cuartoFrio2.slice(0, 3)

    // Calculate stats
    const rawStock = products.reduce((sum, p) => sum + p.current_stock, 0)
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
        rawStock,
        activeBatches,
        coldStorage: cuartoFrio1Total + cuartoFrio2Total,
        pendingOrders: orders.length,
      },
      coldStorage: {
        cuartoFrio1: {
          total: cuartoFrio1Total,
          topProducts: cuartoFrio1TopProducts.map((p) => ({
            name: p.name,
            stock: p.current_stock,
          })),
        },
        cuartoFrio2: {
          total: cuartoFrio2Total,
          topProducts: cuartoFrio2TopProducts.map((p) => ({
            name: p.name,
            stock: p.current_stock,
          })),
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
