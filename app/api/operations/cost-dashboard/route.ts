import {
  getBudgetProgress,
  getCategorySpend,
  getProducedKilos,
  getRequestedPeriod,
  toMoney,
} from "@/lib/operational-costs"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const { year, month, start, end } = getRequestedPeriod(searchParams)
    const [spent, producedKilos, budgets] = await Promise.all([
      getCategorySpend(start, end),
      getProducedKilos(start, end),
      getBudgetProgress(year, month),
    ])

    const grandTotal = toMoney(spent.RAW_MATERIALS + spent.INSUMOS + spent.UTILITIES)
    const costPerKilo = producedKilos > 0 ? toMoney(grandTotal / producedKilos) : 0

    return NextResponse.json({
      period: {
        year,
        month,
        start: start.toISOString().split("T")[0],
        end: end.toISOString().split("T")[0],
      },
      costs: {
        rawMaterials: spent.RAW_MATERIALS,
        insumos: spent.INSUMOS,
        utilities: spent.UTILITIES,
        grandTotal,
      },
      production: {
        totalKilosProduced: producedKilos,
        costPerKilo,
      },
      budgets,
    })
  } catch (error) {
    console.error("Operations cost dashboard error:", error)
    return NextResponse.json({ error: "Failed to fetch operations dashboard" }, { status: 500 })
  }
}
