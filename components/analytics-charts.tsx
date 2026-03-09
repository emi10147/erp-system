"use client"

import { useEffect, useState } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { Skeleton } from "@/components/ui/skeleton"
import { BarChart3 } from "lucide-react"

interface AnalyticsData {
  date: string
  stock: number
}

interface AnalyticsResponse {
  success: boolean
  insumos: AnalyticsData[]
  materiasPrimas: AnalyticsData[]
  productosTerminados: AnalyticsData[]
}

export function AnalyticsCharts() {
  const [data, setData] = useState<AnalyticsResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/inventory-analytics")
        if (response.ok) {
          const analyticsData = await response.json()
          setData(analyticsData)
        }
      } catch (error) {
        console.error("Failed to fetch analytics:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAnalytics()
  }, [])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-card-premium p-6 rounded-xl">
              <Skeleton className="h-12 w-1/2 bg-slate-800/50 rounded mb-4" />
              <Skeleton className="h-64 w-full bg-slate-800/50 rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!data) {
    return null
  }

  const EmptyState = ({ title }: { title: string }) => (
    <div className="h-64 flex flex-col items-center justify-center">
      <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center mb-3">
        <BarChart3 className="w-6 h-6 text-slate-500" strokeWidth={1.5} />
      </div>
      <p className="text-slate-400 font-medium">{title}: Sin datos aún</p>
    </div>
  )

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-700/50 rounded-lg p-3 shadow-lg backdrop-blur-sm">
          <p className="text-slate-300 text-sm font-medium">{payload[0].payload.date}</p>
          <p className="text-cyan-400 font-bold">{payload[0].value} unidades</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-8 mt-12">
      {/* Analytics Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-cyan-500/20 rounded-lg">
          <BarChart3 className="w-6 h-6 text-cyan-400" strokeWidth={2.5} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Análisis de Inventario</h2>
          <p className="text-sm sm:text-base text-slate-400 font-medium">Evolución del stock a lo largo del tiempo</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Insumos Chart */}
        <div className="glass-card-premium p-6 rounded-xl overflow-hidden">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white">Insumos</h3>
            <p className="text-xs text-slate-400 font-medium">Aceite, sal y empaques</p>
          </div>
          {data.insumos.length === 0 ? (
            <EmptyState title="Insumos" />
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={data.insumos} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="insumoGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                  axisLine={{ stroke: "#475569" }}
                />
                <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={{ stroke: "#475569" }} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="stock"
                  stroke="#0ea5e9"
                  fill="url(#insumoGradient)"
                  strokeWidth={2}
                  dot={{ fill: "#0ea5e9", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Materia Prima Chart */}
        <div className="glass-card-premium p-6 rounded-xl overflow-hidden">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white">Materia Prima</h3>
            <p className="text-xs text-slate-400 font-medium">Papas crudas y materiales</p>
          </div>
          {data.materiasPrimas.length === 0 ? (
            <EmptyState title="Materia Prima" />
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={data.materiasPrimas} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="materiaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                  axisLine={{ stroke: "#475569" }}
                />
                <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={{ stroke: "#475569" }} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="stock"
                  stroke="#10b981"
                  fill="url(#materiaGradient)"
                  strokeWidth={2}
                  dot={{ fill: "#10b981", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Producto Terminado Chart */}
        <div className="glass-card-premium p-6 rounded-xl overflow-hidden">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white">Producto Terminado</h3>
            <p className="text-xs text-slate-400 font-medium">Papas fritas listas para vender</p>
          </div>
          {data.productosTerminados.length === 0 ? (
            <EmptyState title="Producto Terminado" />
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={data.productosTerminados} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="productoGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                  axisLine={{ stroke: "#475569" }}
                />
                <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={{ stroke: "#475569" }} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="stock"
                  stroke="#a855f7"
                  fill="url(#productoGradient)"
                  strokeWidth={2}
                  dot={{ fill: "#a855f7", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  )
}
