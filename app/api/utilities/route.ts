import { db } from "@/lib/db"
import { getRequestedPeriod, toMoney } from "@/lib/operational-costs"
import { NextRequest, NextResponse } from "next/server"

const utilityTypes = ["GAS", "ELECTRICITY"]
const measurementUnits = [
  "GAS_KG",
  "GAS_TANK",
  "GAS_CORPORATE_LITER",
  "ELECTRICITY_KWH",
  "USD",
]

function serializeUtilityExpense(expense: any) {
  return {
    id: expense.id,
    type: expense.type,
    measurementUnit: expense.measurement_unit,
    consumption: expense.consumption ? Number(expense.consumption) : null,
    amount: Number(expense.amount),
    expenseDate: expense.expense_date.toISOString().split("T")[0],
    notes: expense.notes || "",
    createdAt: expense.createdAt.toISOString(),
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const { start, end } = getRequestedPeriod(searchParams)
    const type = searchParams.get("type")

    const expenses = await db.utilityExpense.findMany({
      where: {
        ...(type && utilityTypes.includes(type) ? { type: type as any } : {}),
        expense_date: {
          gte: start,
          lt: end,
        },
      },
      orderBy: {
        expense_date: "desc",
      },
    })

    const totals = expenses.reduce(
      (summary, expense) => {
        const amount = Number(expense.amount)
        summary.total += amount
        if (expense.type === "GAS") summary.gas += amount
        if (expense.type === "ELECTRICITY") summary.electricity += amount
        return summary
      },
      { total: 0, gas: 0, electricity: 0 }
    )

    return NextResponse.json({
      expenses: expenses.map(serializeUtilityExpense),
      totals: {
        total: toMoney(totals.total),
        gas: toMoney(totals.gas),
        electricity: toMoney(totals.electricity),
      },
    })
  } catch (error) {
    console.error("Utilities API error:", error)
    return NextResponse.json({ error: "Failed to fetch utility expenses" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const type = String(body.type || "")
    const measurementUnit = String(body.measurementUnit || "")
    const amount = Number(body.amount || 0)
    const consumption = body.consumption === "" || body.consumption == null
      ? null
      : Number(body.consumption)
    const expenseDate = body.expenseDate ? new Date(`${body.expenseDate}T00:00:00.000Z`) : null

    if (!utilityTypes.includes(type)) {
      return NextResponse.json({ error: "Invalid utility type" }, { status: 400 })
    }

    if (!measurementUnits.includes(measurementUnit)) {
      return NextResponse.json({ error: "Invalid measurement unit" }, { status: 400 })
    }

    if (!expenseDate || Number.isNaN(expenseDate.getTime())) {
      return NextResponse.json({ error: "Invalid expense date" }, { status: 400 })
    }

    if (amount <= 0) {
      return NextResponse.json({ error: "Amount must be greater than zero" }, { status: 400 })
    }

    const expense = await db.utilityExpense.create({
      data: {
        type: type as any,
        measurement_unit: measurementUnit as any,
        consumption,
        amount,
        expense_date: expenseDate,
        notes: body.notes || null,
      },
    })

    return NextResponse.json({ expense: serializeUtilityExpense(expense) }, { status: 201 })
  } catch (error) {
    console.error("Create utility expense error:", error)
    return NextResponse.json({ error: "Failed to create utility expense" }, { status: 500 })
  }
}
