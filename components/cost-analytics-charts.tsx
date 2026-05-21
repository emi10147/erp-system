"use client"

import { useEffect, useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import { Skeleton } from "@/components/ui/skeleton"
import { TrendingDown, DollarSign } from "lucide-react"

interface ProductCostData {
  productName: string
  history: Array<{
    date: string
    unitCost: number
    totalCostThatDay: number
    quantity: number
  }>
}

interface DailyInvestment {
  date: string
  totalInvestment: number
}

interface CostAnalyticsResponse {
  productCostAnalysis: ProductCostData[]
  dailyInvestmentAnalysis: DailyInvestment[]
}

interface CostAnalyticsChartsProps {
  category: "RAW_MATERIAL" | "PACKAGING" | "FINISHED_GOOD"
  refreshTrigger?: number
  showSelector?: boolean
}

export function CostAnalyticsCharts({ category, refreshTrigger = 0 }: CostAnalyticsChartsProps) {
  const [costData, setCostData] = useState<CostAnalyticsResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const fetchCostAnalytics = async () => {
      try {
        const response = await fetch(`/api/cost-analytics?category=${category}`)
        if (response.ok) {
          const data: CostAnalyticsResponse = await response.json()
          setCostData(data)
        }
      } catch (error) {
        console.error("Failed to fetch cost analytics:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCostAnalytics()
  }, [category, refreshTrigger])

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="glass-card-premium p-6 rounded-xl">
            <Skeleton className="h-10 w-1/3 bg-slate-800/50 rounded mb-4" />
            <Skeleton className="h-80 w-full bg-slate-800/50 rounded" />
          </div>
        ))}
      </div>
    )
  }

  if (!costData || costData.dailyInvestmentAnalysis.length === 0) {
    return (
      <div className="space-y-8 mt-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <DollarSign className="w-6 h-6 text-red-400" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Análisis de Costos</h2>
            <p className="text-sm sm:text-base text-slate-400 font-medium">Seguimiento de inversión en insumos</p>
          </div>
        </div>
        <div className="glass-card-premium p-12 rounded-xl flex flex-col items-center justify-center">
          <DollarSign className="w-12 h-12 text-red-400/60 mb-4" strokeWidth={1.5} />
          <p className="text-slate-400 font-medium text-center">No hay datos de costos aún. Agrega insumos con costos para ver el análisis.</p>
        </div>
      </div>
    )
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-black/90 border border-cyan-500/50 rounded-lg p-3 shadow-lg backdrop-blur-xl"
          style={{ boxShadow: "0 0 20px rgba(0, 234, 255, 0.4)" }}
        >
          <p className="text-cyan-300 text-sm font-medium">{payload[0].payload.date}</p>
          <p className="text-cyan-400 font-bold">${payload[0].value.toFixed(2)}</p>
        </div>
      )
    }
    return null
  }

  const RedTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-black/90 border border-red-500/50 rounded-lg p-3 shadow-lg backdrop-blur-xl"
          style={{ boxShadow: "0 0 20px rgba(255, 0, 0, 0.4)" }}
        >
          <p className="text-red-300 text-sm font-medium">{payload[0].payload.date}</p>
          <p className="text-red-400 font-bold">${payload[0].value.toFixed(2)}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-8 mt-12">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 bg-red-500/20 rounded-lg">
          <DollarSign className="w-6 h-6 text-red-400" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Análisis de Costos</h2>
          <p className="text-sm sm:text-base text-slate-400 font-medium">Seguimiento de inversión en insumos</p>
        </div>
      </div>

      {/* Gráfico Principal: INVERSIÓN TOTAL DIARIA (ROJO) */}
      <div className="glass-card-premium p-6 rounded-xl">
        <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          Inversión Total Diaria
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={costData.dailyInvestmentAnalysis}>
            <defs>
              <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="date"
              stroke="#9ca3af"
              tick={{ fill: "#d1d5db", fontSize: 12 }}
            />
            <YAxis
              stroke="#9ca3af"
              tick={{ fill: "#d1d5db", fontSize: 12 }}
              label={{ value: "USD", angle: -90, position: "insideLeft" }}
            />
            <Tooltip content={<RedTooltip />} />
            <Area
              type="monotone"
              dataKey="totalInvestment"
              stroke="#ef4444"
              strokeWidth={3}
              fill="url(#redGradient)"
              dot={{ fill: "#ef4444", r: 4 }}
              activeDot={{ r: 6, fill: "#ff6b6b" }}
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-slate-400 text-sm mt-4">
          Suma total diaria de (Costo Unitario × Cantidad) para todos los insumos registrados
        </p>
      </div>

      {/* Gráficos Individuales: EVOLUCIÓN DE COSTO POR CADA INSUMO (AZUL) */}
      <div className="space-y-6">
        {costData.productCostAnalysis.map((product) => (
          <div key={product.productName} className="glass-card-premium p-6 rounded-xl">
            <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <TrendingDown className="w-5 h-5" />
              Evolución de Costos: {product.productName}
            </h3>
            {product.history.length > 0 ? (
              <>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={product.history}>
                    <defs>
                      <linearGradient id={`blueGradient-${product.productName}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      dataKey="date"
                      stroke="#9ca3af"
                      tick={{ fill: "#d1d5db", fontSize: 12 }}
                    />
                    <YAxis
                      stroke="#9ca3af"
                      tick={{ fill: "#d1d5db", fontSize: 12 }}
                      label={{ value: "USD (Valor Total)", angle: -90, position: "insideLeft" }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="totalCostThatDay"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ fill: "#3b82f6", r: 5 }}
                      activeDot={{ r: 7, fill: "#60a5fa" }}
                      isAnimationActive={true}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-black/30 p-3 rounded-lg border border-cyan-500/20">
                    <p className="text-cyan-300/60 text-xs font-medium">Costo Último Ingreso</p>
                    <p className="text-cyan-400 font-bold">
                      ${product.history[product.history.length - 1]?.totalCostThatDay.toFixed(2) || "0.00"}
                    </p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg border border-cyan-500/20">
                    <p className="text-cyan-300/60 text-xs font-medium">Ingreso Menor</p>
                    <p className="text-cyan-400 font-bold">
                      ${Math.min(...product.history.map((h) => h.totalCostThatDay)).toFixed(2)}
                    </p>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg border border-cyan-500/20">
                    <p className="text-cyan-300/60 text-xs font-medium">Ingreso Mayor</p>
                    <p className="text-cyan-400 font-bold">
                      ${Math.max(...product.history.map((h) => h.totalCostThatDay)).toFixed(2)}
                    </p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mt-4">
                  Valor total de cada ingreso (cantidad × costo unitario). Muestra cuánto dinero se invierte en bodega por transacción.
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center p-8">
                <DollarSign className="w-8 h-8 text-cyan-400/40 mb-2" />
                <p className="text-slate-400 text-sm">No hay datos de costos para este insumo</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
