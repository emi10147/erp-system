"use client"

import { useEffect, useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Skeleton } from "@/components/ui/skeleton"
import { BarChart3, TrendingUp } from "lucide-react"

interface HistoryItem {
  id: string
  date: string
  quantity: number
  reason: string
  createdAt: string
  timestamp: number
}

interface ProductData {
  product: {
    id: string
    name: string
    sku: string
    category: string
    currentStock: number
  }
  history: HistoryItem[]
}

interface AnalyticsResponse {
  products: ProductData[]
}

type CategoryType = "PACKAGING" | "RAW_MATERIAL" | "FINISHED_GOOD"

const CATEGORY_COLORS: Record<string, { gradient: string; stroke: string }> = {
  PACKAGING: { gradient: "#0ea5e9", stroke: "#0ea5e9" },
  RAW_MATERIAL: { gradient: "#3b82f6", stroke: "#3b82f6" },
  FINISHED_GOOD: { gradient: "#60a5fa", stroke: "#60a5fa" },
}

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    PACKAGING: "Insumo",
    RAW_MATERIAL: "Materia Prima",
    FINISHED_GOOD: "Producto Terminado",
  }
  return labels[category] || category
}

const getColor = (category: string) => {
  return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.PACKAGING
}

interface AnalyticsChartsProps {
  activeCategory: CategoryType
  refreshTrigger?: number
}

export function AnalyticsCharts({ activeCategory, refreshTrigger = 0 }: AnalyticsChartsProps) {
  const [deduplicatedProducts, setDeduplicatedProducts] = useState<ProductData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setDeduplicatedProducts([])
    setIsLoading(true)

    const fetchAndDeduplicate = async () => {
      try {
        const response = await fetch("/api/inventory-history")
        if (response.ok) {
          const analyticsData: AnalyticsResponse = await response.json()

          const filteredByCategory = analyticsData.products.filter(
            (item) => item.product.category === activeCategory
          )

          const processedProducts = filteredByCategory.map((item) => ({
            ...item,
            history: item.history.sort((a, b) => {
              const dateA = new Date(a.createdAt).getTime()
              const dateB = new Date(b.createdAt).getTime()
              return dateA - dateB
            }),
          }))

          setDeduplicatedProducts(processedProducts)
        }
      } catch (error) {
        console.error("Failed to fetch analytics:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAndDeduplicate()
  }, [activeCategory, refreshTrigger])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass-card-premium p-6 rounded-xl">
              <Skeleton className="h-10 w-1/3 bg-slate-800/50 rounded mb-4" />
              <Skeleton className="h-64 w-full bg-slate-800/50 rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (deduplicatedProducts.length === 0) {
    return (
      <div className="space-y-8 mt-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <BarChart3 className="w-6 h-6 text-cyan-400" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Análisis de Costos</h2>
            <p className="text-sm sm:text-base text-slate-400 font-medium">Evolución individual por producto</p>
          </div>
        </div>
        <div className="glass-card-premium p-12 rounded-xl flex flex-col items-center justify-center">
          <BarChart3 className="w-12 h-12 text-cyan-400/60 mb-4" strokeWidth={1.5} />
          <p className="text-slate-400 font-medium text-center">No hay datos de inventario aún. Agrega productos para ver su evolución.</p>
        </div>
      </div>
    )
  }

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/90 border border-cyan-500/50 rounded-lg p-3 shadow-lg backdrop-blur-xl" style={{boxShadow: '0 0 20px rgba(0, 234, 255, 0.4)'}}>
          <p className="text-cyan-300 text-sm font-medium">{payload[0].payload.date}</p>
          <p className="text-cyan-400 font-bold">{payload[0].value} unidades</p>
          <p className="text-cyan-300/60 text-xs">{payload[0].payload.reason}</p>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Análisis de Costos</h2>
          <p className="text-sm sm:text-base text-slate-400 font-medium">
            {getCategoryLabel(activeCategory)} • Evolución individual por producto
          </p>
        </div>
      </div>

      {/* Products Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {deduplicatedProducts.map((product) => {
          const color = getColor(product.product.category)
          const hasData = product.history.length > 0

          return (
            <div
              key={product.product.id}
              className="glass-card-premium p-6 rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300"
              style={{boxShadow: '0 0 20px rgba(0, 234, 255, 0.2), inset 0 0 15px rgba(0, 234, 255, 0.05)'}}
            >
              {/* Encabezado de la tarjeta */}
              <div className="mb-5 pb-4 border-b border-cyan-500/20">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{product.product.name}</h3>
                    <p className="text-xs text-cyan-300/70 font-medium mt-1">
                      {getCategoryLabel(product.product.category)} • SKU: {product.product.sku}
                    </p>
                  </div>
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: color.gradient, boxShadow: `0 0 10px ${color.gradient}` }}
                    title={`${product.product.currentStock} unidades actuales`}
                  />
                </div>
              </div>

              {/* Gráfica o estado vacío */}
              {!hasData ? (
                <div className="h-64 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mb-3 border border-cyan-500/20">
                    <TrendingUp className="w-6 h-6 text-cyan-400/60" strokeWidth={1.5} />
                  </div>
                  <p className="text-cyan-300/70 font-medium">Sin historial disponible</p>
                  <p className="text-cyan-300/40 text-xs mt-1">Los cambios de stock aparecerán aquí</p>
                </div>
              ) : (
                <>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={product.history}>
                      <defs>
                        <linearGradient id={`gradient-${product.product.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={color.gradient} stopOpacity={0.3} />
                          <stop offset="95%" stopColor={color.gradient} stopOpacity={0} />
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
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="quantity"
                        stroke={color.stroke}
                        strokeWidth={2}
                        fill={`url(#gradient-${product.product.id})`}
                        dot={{ fill: color.stroke, r: 3 }}
                        activeDot={{ r: 5, fill: color.stroke }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>

                  <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
                    <div>
                      <p className="text-cyan-300/50">Primera entrada</p>
                      <p className="text-cyan-300 font-medium">{product.history[0]?.date}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-cyan-300/50">Stock actual</p>
                      <p className="text-blue-400 font-bold">{product.product.currentStock}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-300/50">Última entrada</p>
                      <p className="text-cyan-300 font-medium">{product.history[product.history.length - 1]?.date}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {[
          {
            label: "Total de Productos",
            value: deduplicatedProducts.length,
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/10",
            borderColor: "border-cyan-500/30",
          },
          {
            label: "Con Historial",
            value: deduplicatedProducts.filter((p) => p.history.length > 0).length,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/30",
          },
          {
            label: "Total de Registros",
            value: deduplicatedProducts.reduce((sum, p) => sum + p.history.length, 0),
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/10",
            borderColor: "border-cyan-500/30",
          },
        ].map((stat, idx) => (
          <div key={idx} className={`${stat.bgColor} p-4 rounded-lg border ${stat.borderColor} hover:border-opacity-60 transition-all duration-300`} style={{boxShadow: `inset 0 0 10px rgba(0, 234, 255, 0.05)`}}>
            <p className="text-cyan-300/70 text-sm font-medium">{stat.label}</p>
            <p className={`${stat.color} text-2xl font-bold mt-1`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
