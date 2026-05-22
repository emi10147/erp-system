"use client"

import { FormEvent, useEffect, useMemo, useState } from "react"
import {
  AlertTriangle,
  Calculator,
  Factory,
  Flame,
  Gauge,
  WalletCards,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"

type BudgetCategory = "RAW_MATERIALS" | "INSUMOS" | "UTILITIES"
type UtilityType = "GAS" | "ELECTRICITY"

type BudgetProgress = {
  category: BudgetCategory
  allocated: number
  currentSpent: number
  percentUsed: number
  alertLevel: "ok" | "warning" | "exceeded"
  notes: string
}

type DashboardData = {
  costs: {
    rawMaterials: number
    insumos: number
    utilities: number
    grandTotal: number
  }
  production: {
    totalKilosProduced: number
    costPerKilo: number
  }
  budgets: BudgetProgress[]
}

type UtilityExpense = {
  id: string
  type: UtilityType
  measurementUnit: string
  consumption: number | null
  amount: number
  expenseDate: string
  notes: string
}

const categoryLabels: Record<BudgetCategory, string> = {
  RAW_MATERIALS: "Materia Prima (Papas)",
  INSUMOS: "Insumos (Aceite, fundas, cajas)",
  UTILITIES: "Servicios (Gas / Electricidad)",
}

const measurementOptions = [
  { value: "GAS_KG", label: "Gas - kg" },
  { value: "GAS_TANK", label: "Gas - tanques" },
  { value: "GAS_CORPORATE_LITER", label: "Gas - litros corporativos" },
  { value: "ELECTRICITY_KWH", label: "Electricidad - kWh" },
  { value: "USD", label: "Solo valor $" },
]

function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value || 0)
}

export default function OperationsPage() {
  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth() + 1)
  const [dashboard, setDashboard] = useState<DashboardData | null>(null)
  const [utilities, setUtilities] = useState<UtilityExpense[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState("")

  const [utilityForm, setUtilityForm] = useState({
    type: "GAS" as UtilityType,
    measurementUnit: "GAS_KG",
    consumption: "",
    amount: "",
    expenseDate: new Date().toISOString().split("T")[0],
    notes: "",
  })

  const [budgetForm, setBudgetForm] = useState({
    category: "RAW_MATERIALS" as BudgetCategory,
    allocatedAmount: "",
    notes: "",
  })

  const periodQuery = useMemo(() => `year=${year}&month=${month}`, [year, month])

  const refreshData = async () => {
    setIsLoading(true)
    try {
      const [dashboardResponse, utilitiesResponse] = await Promise.all([
        fetch(`/api/operations-cost-dashboard?${periodQuery}`),
        fetch(`/api/utilities?${periodQuery}`),
      ])

      if (dashboardResponse.ok) {
        setDashboard(await dashboardResponse.json())
      }

      if (utilitiesResponse.ok) {
        const utilityData = await utilitiesResponse.json()
        setUtilities(utilityData.expenses || [])
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    refreshData()
  }, [periodQuery])

  const saveUtility = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage("")

    const response = await fetch("/api/utilities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(utilityForm),
    })

    if (response.ok) {
      setMessage("Gasto de servicio registrado.")
      setUtilityForm((current) => ({
        ...current,
        consumption: "",
        amount: "",
        notes: "",
      }))
      refreshData()
    } else {
      const data = await response.json()
      setMessage(data.error || "No se pudo registrar el gasto.")
    }
  }

  const saveBudget = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage("")

    const response = await fetch("/api/budgets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...budgetForm,
        year,
        month,
      }),
    })

    if (response.ok) {
      setMessage("Presupuesto guardado.")
      setBudgetForm((current) => ({
        ...current,
        allocatedAmount: "",
        notes: "",
      }))
      refreshData()
    } else {
      const data = await response.json()
      setMessage(data.error || "No se pudo guardar el presupuesto.")
    }
  }

  const SummaryCard = ({
    title,
    value,
    helper,
    icon: Icon,
  }: {
    title: string
    value: string
    helper: string
    icon: typeof Calculator
  }) => (
    <div className="glass-card-premium p-6 rounded-xl border border-cyan-500/20">
      <div className="flex items-center justify-between mb-5">
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
          <Icon className="w-6 h-6 text-cyan-300" />
        </div>
      </div>
      <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold mb-2">{title}</p>
      <p className="text-3xl font-extrabold text-white">{isLoading ? "..." : value}</p>
      <p className="text-sm text-cyan-300/60 mt-3">{helper}</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <Badge className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 mb-4">
              Control operativo local
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white">
              Costos, Servicios y Presupuestos
            </h1>
            <p className="text-slate-400 mt-3 max-w-3xl">
              Control mensual de papas, insumos, gas, electricidad y costo definitivo por kilo
              producido.
            </p>
          </div>

          <div className="glass-card-premium p-4 rounded-xl flex flex-col sm:flex-row gap-3">
            <div>
              <Label className="text-cyan-300 text-xs">Mes</Label>
              <Input
                type="number"
                min="1"
                max="12"
                value={month}
                onChange={(event) => setMonth(Number(event.target.value))}
                className="input-modern w-28"
              />
            </div>
            <div>
              <Label className="text-cyan-300 text-xs">Ano</Label>
              <Input
                type="number"
                value={year}
                onChange={(event) => setYear(Number(event.target.value))}
                className="input-modern w-32"
              />
            </div>
          </div>
        </div>

        {message && (
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-cyan-200">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <SummaryCard
            title="Papas usadas"
            value={money(dashboard?.costs.rawMaterials || 0)}
            helper="Materia prima consumida en produccion"
            icon={Factory}
          />
          <SummaryCard
            title="Insumos usados"
            value={money(dashboard?.costs.insumos || 0)}
            helper="Aceite, fundas, cajas y sal"
            icon={WalletCards}
          />
          <SummaryCard
            title="Servicios"
            value={money(dashboard?.costs.utilities || 0)}
            helper="Gas y electricidad operativa"
            icon={Zap}
          />
          <SummaryCard
            title="Costo por kilo"
            value={money(dashboard?.production.costPerKilo || 0)}
            helper={`${dashboard?.production.totalKilosProduced || 0} kg producidos`}
            icon={Calculator}
          />
        </div>

        <div className="glass-card-premium p-6 lg:p-8 rounded-xl border border-cyan-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Gauge className="w-7 h-7 text-cyan-300" />
            <div>
              <h2 className="text-2xl font-bold text-white">Resumen maestro de manufactura</h2>
              <p className="text-sm text-slate-400">
                Formula: (Papas + Insumos + Servicios) / kilos terminados
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            <div className="bg-black/40 rounded-xl p-4 border border-white/10">
              <p className="text-slate-400">Papas</p>
              <p className="text-xl font-bold text-cyan-300">{money(dashboard?.costs.rawMaterials || 0)}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4 border border-white/10">
              <p className="text-slate-400">Insumos</p>
              <p className="text-xl font-bold text-cyan-300">{money(dashboard?.costs.insumos || 0)}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4 border border-white/10">
              <p className="text-slate-400">Servicios</p>
              <p className="text-xl font-bold text-cyan-300">{money(dashboard?.costs.utilities || 0)}</p>
            </div>
            <div className="bg-black/40 rounded-xl p-4 border border-white/10">
              <p className="text-slate-400">Total operativo</p>
              <p className="text-xl font-bold text-white">{money(dashboard?.costs.grandTotal || 0)}</p>
            </div>
            <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/30">
              <p className="text-cyan-200">Costo final / kg</p>
              <p className="text-2xl font-extrabold text-cyan-300">
                {money(dashboard?.production.costPerKilo || 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <form onSubmit={saveUtility} className="glass-card-premium p-6 rounded-xl space-y-5">
            <div className="flex items-center gap-3">
              <Flame className="w-6 h-6 text-orange-300" />
              <div>
                <h2 className="text-xl font-bold">Gastos de servicios</h2>
                <p className="text-sm text-slate-400">Gas y electricidad como costos operativos.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-cyan-300">Servicio</Label>
                <select
                  value={utilityForm.type}
                  onChange={(event) =>
                    setUtilityForm((current) => ({
                      ...current,
                      type: event.target.value as UtilityType,
                      measurementUnit:
                        event.target.value === "GAS" ? "GAS_KG" : "ELECTRICITY_KWH",
                    }))
                  }
                  className="input-modern w-full h-10 rounded-md px-3"
                >
                  <option value="GAS">Gas</option>
                  <option value="ELECTRICITY">Electricidad</option>
                </select>
              </div>
              <div>
                <Label className="text-cyan-300">Unidad</Label>
                <select
                  value={utilityForm.measurementUnit}
                  onChange={(event) =>
                    setUtilityForm((current) => ({
                      ...current,
                      measurementUnit: event.target.value,
                    }))
                  }
                  className="input-modern w-full h-10 rounded-md px-3"
                >
                  {measurementOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label className="text-cyan-300">Consumo</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={utilityForm.consumption}
                  onChange={(event) =>
                    setUtilityForm((current) => ({
                      ...current,
                      consumption: event.target.value,
                    }))
                  }
                  className="input-modern"
                  placeholder="Ej. 125"
                />
              </div>
              <div>
                <Label className="text-cyan-300">Valor $</Label>
                <Input
                  type="number"
                  step="0.01"
                  required
                  value={utilityForm.amount}
                  onChange={(event) =>
                    setUtilityForm((current) => ({ ...current, amount: event.target.value }))
                  }
                  className="input-modern"
                  placeholder="0.00"
                />
              </div>
              <div className="sm:col-span-2">
                <Label className="text-cyan-300">Fecha</Label>
                <Input
                  type="date"
                  required
                  value={utilityForm.expenseDate}
                  onChange={(event) =>
                    setUtilityForm((current) => ({
                      ...current,
                      expenseDate: event.target.value,
                    }))
                  }
                  className="input-modern"
                />
              </div>
              <div className="sm:col-span-2">
                <Label className="text-cyan-300">Notas</Label>
                <Input
                  value={utilityForm.notes}
                  onChange={(event) =>
                    setUtilityForm((current) => ({ ...current, notes: event.target.value }))
                  }
                  className="input-modern"
                  placeholder="Factura, proveedor o periodo"
                />
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold">
              Registrar gasto operativo
            </Button>
          </form>

          <form onSubmit={saveBudget} className="glass-card-premium p-6 rounded-xl space-y-5">
            <div className="flex items-center gap-3">
              <WalletCards className="w-6 h-6 text-cyan-300" />
              <div>
                <h2 className="text-xl font-bold">Manejo de presupuestos</h2>
                <p className="text-sm text-slate-400">Define limites mensuales por categoria.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-cyan-300">Categoria</Label>
                <select
                  value={budgetForm.category}
                  onChange={(event) =>
                    setBudgetForm((current) => ({
                      ...current,
                      category: event.target.value as BudgetCategory,
                    }))
                  }
                  className="input-modern w-full h-10 rounded-md px-3"
                >
                  {Object.entries(categoryLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label className="text-cyan-300">Presupuesto asignado $</Label>
                <Input
                  type="number"
                  step="0.01"
                  required
                  value={budgetForm.allocatedAmount}
                  onChange={(event) =>
                    setBudgetForm((current) => ({
                      ...current,
                      allocatedAmount: event.target.value,
                    }))
                  }
                  className="input-modern"
                  placeholder="0.00"
                />
              </div>
              <div>
                <Label className="text-cyan-300">Notas</Label>
                <Input
                  value={budgetForm.notes}
                  onChange={(event) =>
                    setBudgetForm((current) => ({ ...current, notes: event.target.value }))
                  }
                  className="input-modern"
                  placeholder="Meta del mes"
                />
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold">
              Guardar presupuesto
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 glass-card-premium p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-5">Presupuesto vs gasto actual</h2>
            <div className="space-y-5">
              {(dashboard?.budgets || []).map((budget) => (
                <div key={budget.category} className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div>
                      <p className="font-bold text-white">{categoryLabels[budget.category]}</p>
                      <p className="text-sm text-slate-400">
                        {money(budget.currentSpent)} usado de {money(budget.allocated)}
                      </p>
                    </div>
                    {budget.alertLevel !== "ok" && (
                      <Badge className="bg-red-500/15 text-red-300 border border-red-500/30">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        {budget.alertLevel === "exceeded" ? "Excedido" : "90%+"}
                      </Badge>
                    )}
                  </div>
                  <Progress
                    value={Math.min(budget.percentUsed, 100)}
                    className="h-3 bg-slate-800"
                  />
                  <p className="text-xs text-cyan-300/70 mt-2">{budget.percentUsed}% utilizado</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card-premium p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-5">Ultimos servicios</h2>
            <div className="space-y-3">
              {utilities.length === 0 ? (
                <p className="text-sm text-slate-400">Sin gastos de servicios para este periodo.</p>
              ) : (
                utilities.slice(0, 8).map((expense) => (
                  <div key={expense.id} className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-cyan-300">
                        {expense.type === "GAS" ? "Gas" : "Electricidad"}
                      </p>
                      <p className="font-bold text-white">{money(expense.amount)}</p>
                    </div>
                    <p className="text-xs text-slate-400">
                      {expense.expenseDate}
                      {expense.consumption ? ` - ${expense.consumption} ${expense.measurementUnit}` : ""}
                    </p>
                    {expense.notes && <p className="text-xs text-slate-500 mt-1">{expense.notes}</p>}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
