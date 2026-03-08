"use client"

import { useEffect, useState } from "react"
import { Clock, Plus, Zap, Factory, Beaker, Snowflake, Warehouse } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { addToProductStock } from "@/app/actions"

interface ProductionBatch {
  id: string
  batch_number: string
  status: "PLANNING" | "FRYING" | "PACKAGING" | "COMPLETED"
  input_weight_kg: string | number
  output_weight_kg: string | number
  waste_weight_kg: string | number
  createdAt: string
  updatedAt: string
}

interface FreezerData {
  total: number
  topProducts: Array<{ name: string; stock: number }>
}

interface ColdStorageData {
  cuartoFrio1: FreezerData
  cuartoFrio2: FreezerData
}

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState<string>("")
  const [batches, setBatches] = useState<ProductionBatch[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    rawStock: 0,
    activeBatches: 0,
    coldStorage: 0,
    pendingOrders: 0,
  })
  const [coldStorageData, setColdStorageData] = useState<ColdStorageData | null>(null)

  // Real-time clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/dashboard")
        if (response.ok) {
          const data = await response.json()
          setBatches(data.batches || [])
          setStats(data.stats || {})
          setColdStorageData(data.coldStorage || null)
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    // Simulate data loading - replace with real API call
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    fetchData()
    return () => clearTimeout(timer)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
      case "FRYING":
      case "PACKAGING":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30"
      case "PLANNING":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "COMPLETED":
        return "Completado"
      case "FRYING":
        return "Friendo"
      case "PACKAGING":
        return "Empacando"
      case "PLANNING":
        return "Planificación"
      default:
        return status
    }
  }

  const StatCard = ({ title, value, loading }: { title: string; value: string | number; loading: boolean }) => (
    <div className="glass-card p-6 lg:p-7">
      <p className="text-xs lg:text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">{title}</p>
      {loading ? (
        <Skeleton className="h-10 w-20 bg-slate-800/50 rounded-lg" />
      ) : (
        <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">{value}</p>
      )}
    </div>
  )

  const handleTestStock = async () => {
    await addToProductStock()
  }

  return (
    <div className="p-4 lg:p-8 w-full min-h-screen">
      {/* Navigation Buttons - Mobile Friendly */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <a href="/inventory" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg hover:shadow-blue-500/30 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-initial">
          <Warehouse className="w-5 h-5" strokeWidth={2.5} />
          <span>📦 Inventario</span>
        </a>
        <a href="/production" className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:shadow-lg hover:shadow-amber-500/30 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-initial">
          <Factory className="w-5 h-5" strokeWidth={2.5} />
          <span>🏭 Producción</span>
        </a>
        <button
          onClick={handleTestStock}
          className="px-6 py-3 glass-card text-emerald-300 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-initial border-emerald-500/50 active:scale-95"
        >
          <Beaker className="w-5 h-5" strokeWidth={2.5} />
          <span>Prueba: +500kg</span>
        </button>
      </div>

      {/* Header - Responsive */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 lg:mb-10 gap-6">
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight">Panel de Control</h1>
          <p className="text-sm lg:text-base text-slate-400 font-medium">Centro de Comando - Sistema Integrado de Manufactura</p>
        </div>
        <div className="glass-card-premium px-6 lg:px-8 py-4 lg:py-5 flex items-center gap-4 min-h-[60px] backdrop-blur-xl">
          <Clock className="w-6 lg:w-7 h-6 lg:h-7 text-emerald-400 flex-shrink-0 animate-pulse" />
          <div>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Hora Actual</p>
            <p className="text-2xl lg:text-3xl font-mono font-bold text-emerald-300">{currentTime}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mb-8 lg:mb-10">
        <StatCard title="Stock Bruto (kg)" value={stats.rawStock} loading={isLoading} />
        <StatCard title="Lotes Activos" value={stats.activeBatches} loading={isLoading} />
        <StatCard title="Almacenamiento en Frío (kg)" value={stats.coldStorage} loading={isLoading} />
        <StatCard title="Pedidos Pendientes" value={stats.pendingOrders} loading={isLoading} />
        <StatCard title="Materia Prima" value={stats.rawStock} loading={isLoading} />
        <StatCard title="Producto Terminado" value={stats.coldStorage} loading={isLoading} />
      </div>

      {/* Cold Storage Detail Section - Responsive */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Snowflake className="w-5 h-5 text-blue-400" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">Estado de Cámaras Frías</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cuarto Frío 1 */}
          {isLoading ? (
            <>
              <div className="glass-card-dark p-6 lg:p-8">
                <Skeleton className="h-8 w-32 bg-slate-800/50 mb-4 rounded-lg" />
                <Skeleton className="h-12 w-24 bg-slate-800/50 mb-4 rounded-lg" />
                <Skeleton className="h-24 w-full bg-slate-800/50 rounded-lg" />
              </div>
              <div className="glass-card-dark p-6 lg:p-8">
                <Skeleton className="h-8 w-32 bg-slate-800/50 mb-4 rounded-lg" />
                <Skeleton className="h-12 w-24 bg-slate-800/50 mb-4 rounded-lg" />
                <Skeleton className="h-24 w-full bg-slate-800/50 rounded-lg" />
              </div>
            </>
          ) : (
            <>
              {/* CF1 Card */}
              <div className="glass-card-premium p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                  <Snowflake className="w-5 h-5" />
                  Cuarto Frío 1
                </h3>
                <div className="mb-6">
                  <p className="text-xs text-slate-400 mb-2 font-semibold uppercase tracking-wide">Total en Stock</p>
                  <p className="text-4xl lg:text-5xl font-bold text-blue-400">{coldStorageData?.cuartoFrio1.total.toFixed(0)}<span className="text-lg text-slate-400 ml-2">kg</span></p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-4 font-semibold uppercase tracking-wide">Top 3 Productos</p>
                  <div className="space-y-2">
                    {coldStorageData?.cuartoFrio1.topProducts && coldStorageData.cuartoFrio1.topProducts.length > 0 ? (
                      coldStorageData.cuartoFrio1.topProducts.map((product, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/5 hover:bg-white/10 rounded-lg p-3 text-sm transition-colors duration-200">
                          <span className="text-slate-300 truncate font-medium">{product.name}</span>
                          <span className="text-blue-300 font-bold ml-2 flex-shrink-0">{product.stock} kg</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-slate-500 italic">Sin productos</p>
                    )}
                  </div>
                </div>
              </div>

              {/* CF2 Card */}
              <div className="glass-card-premium p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                  <Snowflake className="w-5 h-5" />
                  Cuarto Frío 2
                </h3>
                <div className="mb-6">
                  <p className="text-xs text-slate-400 mb-2 font-semibold uppercase tracking-wide">Total en Stock</p>
                  <p className="text-4xl lg:text-5xl font-bold text-blue-400">{coldStorageData?.cuartoFrio2.total.toFixed(0)}<span className="text-lg text-slate-400 ml-2">kg</span></p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-4 font-semibold uppercase tracking-wide">Top 3 Productos</p>
                  <div className="space-y-2">
                    {coldStorageData?.cuartoFrio2.topProducts && coldStorageData.cuartoFrio2.topProducts.length > 0 ? (
                      coldStorageData.cuartoFrio2.topProducts.map((product, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/5 hover:bg-white/10 rounded-lg p-3 text-sm transition-colors duration-200">
                          <span className="text-slate-300 truncate font-medium">{product.name}</span>
                          <span className="text-blue-300 font-bold ml-2 flex-shrink-0">{product.stock} kg</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-slate-500 italic">Sin productos</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Active Operations */}
      <div className="glass-card-premium">
        <div className="p-6 lg:p-8 border-b border-white/10">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Zap className="w-6 h-6 text-emerald-400" strokeWidth={2.5} />
                </div>
                Líneas Activas de Manufactura
              </h2>
              <p className="text-sm text-slate-400 font-medium">Batches en proceso de fabricación</p>
            </div>
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 text-white rounded-lg transition-all duration-300">
              <Plus className="w-5 h-5 mr-2" />
              Nuevo Lote
            </Button>
          </div>
        </div>

        {/* Table or Zero State */}
        {isLoading ? (
          <div className="p-8">
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-14 w-full bg-slate-800/50 rounded-lg" />
              ))}
            </div>
          </div>
        ) : batches.length === 0 ? (
          // Zero State
          <div className="p-12 flex flex-col items-center justify-center">
            <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center mb-6">
              <Factory className="w-10 h-10 text-slate-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Sin Líneas Activas</h3>
            <p className="text-slate-400 text-center mb-8 max-w-md font-medium">
              Todas las líneas de producción están inactivas. Crea un nuevo lote para iniciar la fabricación.
            </p>
            <Button className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 text-white rounded-lg transition-all duration-300">
              <Plus className="w-5 h-5 mr-2" />
              Lanzar Nuevo Lote
            </Button>
          </div>
        ) : (
          // Table
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="text-slate-300 font-semibold">Lote #</TableHead>
                  <TableHead className="text-slate-300 font-semibold">Estado</TableHead>
                  <TableHead className="text-slate-300 text-right font-semibold">Entrada (kg)</TableHead>
                  <TableHead className="text-slate-300 text-right font-semibold">Salida (kg)</TableHead>
                  <TableHead className="text-slate-300 text-right font-semibold">Desperdicio (kg)</TableHead>
                  <TableHead className="text-slate-300 font-semibold">Iniciado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {batches.map((batch) => (
                  <TableRow key={batch.id} className="border-white/5 hover:bg-emerald-500/5 transition-colors duration-200 table-row-hover">
                    <TableCell className="font-mono text-white font-semibold">{batch.batch_number}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`${getStatusColor(batch.status)} border font-medium`}>
                        {getStatusLabel(batch.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-slate-300 font-medium">{Number(batch.input_weight_kg).toFixed(2)}</TableCell>
                    <TableCell className="text-right text-slate-300 font-medium">{Number(batch.output_weight_kg).toFixed(2)}</TableCell>
                    <TableCell className="text-right text-slate-300 font-medium">{Number(batch.waste_weight_kg).toFixed(2)}</TableCell>
                    <TableCell className="text-slate-400 text-sm font-medium">
                      {new Date(batch.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  )
}
