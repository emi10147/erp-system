import { db } from "@/lib/db"
import { budgetCategories, getBudgetProgress } from "@/lib/operational-costs"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const now = new Date()
    const year = Number(searchParams.get("year") || now.getUTCFullYear())
    const month = Number(searchParams.get("month") || now.getUTCMonth() + 1)

    if (month < 1 || month > 12) {
      return NextResponse.json({ error: "Month must be between 1 and 12" }, { status: 400 })
    }

    const budgets = await getBudgetProgress(year, month)

    return NextResponse.json({
      year,
      month,
      budgets,
    })
  } catch (error) {
    console.error("Budgets API error:", error)
    return NextResponse.json({ error: "Failed to fetch budgets" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const year = Number(body.year)
    const month = Number(body.month)
    const category = String(body.category || "")
    const allocatedAmount = Number(body.allocatedAmount || 0)

    if (!year || month < 1 || month > 12) {
      return NextResponse.json({ error: "Invalid budget period" }, { status: 400 })
    }

    if (!budgetCategories.includes(category as any)) {
      return NextResponse.json({ error: "Invalid budget category" }, { status: 400 })
    }

    if (allocatedAmount < 0) {
      return NextResponse.json({ error: "Budget amount cannot be negative" }, { status: 400 })
    }

    await db.monthlyBudget.upsert({
      where: {
        year_month_category: {
          year,
          month,
          category: category as any,
        },
      },
      create: {
        year,
        month,
        category: category as any,
        allocated_amount: allocatedAmount,
        notes: body.notes || null,
      },
      update: {
        allocated_amount: allocatedAmount,
        notes: body.notes || null,
      },
    })

    const budgets = await getBudgetProgress(year, month)

    return NextResponse.json({
      year,
      month,
      budgets,
    })
  } catch (error) {
    console.error("Save budget error:", error)
    return NextResponse.json({ error: "Failed to save budget" }, { status: 500 })
  }
}
