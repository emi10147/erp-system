import { db } from "@/lib/db"
import { NextResponse } from "next/server"

interface GroupedData {
  date: string
  stock: number
}

export async function GET() {
  try {
    const products = await db.product.findMany({
      select: {
        category: true,
        current_stock: true,
        createdAt: true,
      },
    })

    // Group data by category and date
    const insumoData: GroupedData[] = []
    const materiaData: GroupedData[] = []
    const productoData: GroupedData[] = []

    // Create a map to aggregate stock by date and category
    const insumoMap = new Map<string, number>()
    const materiaMap = new Map<string, number>()
    const productoMap = new Map<string, number>()

    products.forEach((product) => {
      const dateStr = product.createdAt.toISOString().split("T")[0] // YYYY-MM-DD format

      if (product.category === "PACKAGING") {
        const current = insumoMap.get(dateStr) || 0
        insumoMap.set(dateStr, current + product.current_stock)
      } else if (product.category === "RAW_MATERIAL") {
        const current = materiaMap.get(dateStr) || 0
        materiaMap.set(dateStr, current + product.current_stock)
      } else if (product.category === "FINISHED_GOOD") {
        const current = productoMap.get(dateStr) || 0
        productoMap.set(dateStr, current + product.current_stock)
      }
    })

    // Convert maps to sorted arrays
    const insumoDataArray = Array.from(insumoMap.entries())
      .map(([date, stock]) => ({ date, stock }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const materiaDataArray = Array.from(materiaMap.entries())
      .map(([date, stock]) => ({ date, stock }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const productoDataArray = Array.from(productoMap.entries())
      .map(([date, stock]) => ({ date, stock }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return NextResponse.json({
      success: true,
      insumos: insumoDataArray,
      materiasPrimas: materiaDataArray,
      productosTerminados: productoDataArray,
    })
  } catch (error) {
    console.error("Failed to fetch analytics:", error)
    return NextResponse.json(
      { success: false, message: "Failed to fetch analytics data" },
      { status: 500 }
    )
  }
}
