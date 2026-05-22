import { db } from "@/lib/db"

export type BudgetCategoryKey = "RAW_MATERIALS" | "INSUMOS" | "UTILITIES"

export const budgetCategories: BudgetCategoryKey[] = [
  "RAW_MATERIALS",
  "INSUMOS",
  "UTILITIES",
]

export function getMonthRange(year: number, month: number) {
  return {
    start: new Date(Date.UTC(year, month - 1, 1)),
    end: new Date(Date.UTC(year, month, 1)),
  }
}

export function getRequestedPeriod(searchParams: URLSearchParams) {
  const now = new Date()
  const year = Number(searchParams.get("year") || now.getUTCFullYear())
  const month = Number(searchParams.get("month") || now.getUTCMonth() + 1)
  const startParam = searchParams.get("start")
  const endParam = searchParams.get("end")

  if (startParam && endParam) {
    return {
      year,
      month,
      start: new Date(`${startParam}T00:00:00.000Z`),
      end: new Date(`${endParam}T23:59:59.999Z`),
    }
  }

  return {
    year,
    month,
    ...getMonthRange(year, month),
  }
}

export function toMoney(value: unknown) {
  return Number(Number(value || 0).toFixed(2))
}

async function getProductionLedgerSpend(
  start: Date,
  end: Date,
  category: "RAW_MATERIALS" | "INSUMOS"
) {
  const aggregate = await db.productionConsumption.aggregate({
    where: {
      cost_category: category,
      consumedAt: {
        gte: start,
        lt: end,
      },
    },
    _sum: {
      total_cost: true,
    },
  })

  return toMoney(aggregate._sum.total_cost)
}

async function getFallbackInventorySpend(
  start: Date,
  end: Date,
  productCategory: "RAW_MATERIAL" | "PACKAGING"
) {
  const logs = await db.inventoryLog.findMany({
    where: {
      quantity: {
        lt: 0,
      },
      createdAt: {
        gte: start,
        lt: end,
      },
      product: {
        category: productCategory,
      },
    },
    include: {
      product: {
        select: {
          unit_cost: true,
        },
      },
    },
  })

  return toMoney(
    logs.reduce((sum, log) => {
      const unitCost = log.unit_cost ? Number(log.unit_cost) : Number(log.product.unit_cost || 0)
      return sum + Math.abs(log.quantity) * unitCost
    }, 0)
  )
}

export async function getCategorySpend(start: Date, end: Date) {
  const [rawLedger, insumosLedger, utilityAggregate] = await Promise.all([
    getProductionLedgerSpend(start, end, "RAW_MATERIALS"),
    getProductionLedgerSpend(start, end, "INSUMOS"),
    db.utilityExpense.aggregate({
      where: {
        expense_date: {
          gte: start,
          lt: end,
        },
      },
      _sum: {
        amount: true,
      },
    }),
  ])

  const [rawFallback, insumosFallback] = await Promise.all([
    rawLedger > 0 ? Promise.resolve(0) : getFallbackInventorySpend(start, end, "RAW_MATERIAL"),
    insumosLedger > 0 ? Promise.resolve(0) : getFallbackInventorySpend(start, end, "PACKAGING"),
  ])

  return {
    RAW_MATERIALS: toMoney(rawLedger + rawFallback),
    INSUMOS: toMoney(insumosLedger + insumosFallback),
    UTILITIES: toMoney(utilityAggregate._sum.amount),
  } satisfies Record<BudgetCategoryKey, number>
}

export async function getProducedKilos(start: Date, end: Date) {
  const aggregate = await db.productionBatch.aggregate({
    where: {
      status: "COMPLETED",
      createdAt: {
        gte: start,
        lt: end,
      },
    },
    _sum: {
      output_weight_kg: true,
    },
  })

  return toMoney(aggregate._sum.output_weight_kg)
}

export async function getBudgetProgress(year: number, month: number) {
  const { start, end } = getMonthRange(year, month)
  const [budgets, spent] = await Promise.all([
    db.monthlyBudget.findMany({
      where: {
        year,
        month,
      },
    }),
    getCategorySpend(start, end),
  ])

  return budgetCategories.map((category) => {
    const budget = budgets.find((item) => item.category === category)
    const allocated = toMoney(budget?.allocated_amount)
    const currentSpent = spent[category]
    const percentUsed = allocated > 0 ? Math.round((currentSpent / allocated) * 100) : 0

    return {
      category,
      allocated,
      currentSpent,
      percentUsed,
      alertLevel:
        allocated > 0 && percentUsed >= 100 ? "exceeded" : percentUsed >= 90 ? "warning" : "ok",
      notes: budget?.notes || "",
    }
  })
}
