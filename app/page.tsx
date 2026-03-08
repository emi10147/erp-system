"use client"

import { useEffect, useState } from "react"
import { Clock, Plus, Zap, Factory, Beaker, Snowflake } from "lucide-react"
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
    <div className="glass-card p-6">
      <p className="text-sm font-medium text-zinc-300 mb-2">{title}</p>
      {loading ? (
        <Skeleton className="h-8 w-16 bg-zinc-800" />
      ) : (
        <p className="text-3xl font-bold text-emerald-400">{value}</p>
      )}
    </div>
  )

  const handleTestStock = async () => {
    await addToProductStock()
  }

  return (
    <div className="p-8">
      {/* Test Button */}
      <div className="mb-6">
        <button
          onClick={handleTestStock}
          className="px-4 py-2 border border-emerald-500/50 text-emerald-400 rounded-md hover:bg-emerald-500/10 hover:border-emerald-500 transition-colors flex items-center gap-2"
        >
          <Beaker className="w-4 h-4" />
          Prueba: Agregar 500kg
        </button>
      </div>

      {/* Header - Responsive */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 lg:mb-8 gap-4">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-1 lg:mb-2">Panel de Control v1.0</h1>
          <p className="text-xs lg:text-base text-zinc-400">Centro de Comando - Fábrica de Papas Fritas Congeladas</p>
        </div>
        <div className="flex items-center gap-4 glass-card px-4 lg:px-6 py-3 lg:py-4 min-h-[44px]">
          <Clock className="w-5 lg:w-6 h-5 lg:h-6 text-emerald-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-zinc-400">Hora Actual</p>
            <p className="text-lg lg:text-2xl font-mono font-bold text-white">{currentTime}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <StatCard title="Stock Bruto (kg)" value={stats.rawStock} loading={isLoading} />
        <StatCard title="Lotes Activos" value={stats.activeBatches} loading={isLoading} />
        <StatCard title="Almacenamiento en Frío (kg)" value={stats.coldStorage} loading={isLoading} />
        <StatCard title="Pedidos Pendientes" value={stats.pendingOrders} loading={isLoading} />
        <StatCard title="Materia Prima" value={stats.rawStock} loading={isLoading} />
        <StatCard title="Producto Terminado" value={stats.coldStorage} loading={isLoading} />
      </div>

      {/* Cold Storage Detail Section - Responsive */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Snowflake className="w-5 h-5 text-blue-400 flex-shrink-0" />
          <h2 className="text-xl lg:text-2xl font-bold text-white">Estado de Cámaras Frías</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Cuarto Frío 1 */}
          {isLoading ? (
            <>
              <div className="glass-card p-6 border border-blue-500/30 bg-blue-500/10">
                <Skeleton className="h-8 w-32 bg-zinc-800 mb-4" />
                <Skeleton className="h-12 w-24 bg-zinc-800 mb-4" />
                <Skeleton className="h-20 w-full bg-zinc-800" />
              </div>
              <div className="glass-card p-6 border border-blue-500/30 bg-blue-500/10">
                <Skeleton className="h-8 w-32 bg-zinc-800 mb-4" />
                <Skeleton className="h-12 w-24 bg-zinc-800 mb-4" />
                <Skeleton className="h-20 w-full bg-zinc-800" />
              </div>
            </>
          ) : (
            <>
              {/* CF1 Card */}
              <div className="glass-card p-4 lg:p-6 border border-blue-500/30 bg-blue-500/10">
                <h3 className="text-base lg:text-lg font-semibold text-blue-300 mb-3">Cuarto Frío 1</h3>
                <div className="mb-5">
                  <p className="text-xs text-zinc-400 mb-1">Total en Stock</p>
                  <p className="text-3xl lg:text-4xl font-bold text-blue-400">{coldStorageData?.cuartoFrio1.total.toFixed(0)} kg</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-3 font-semibold">Top 3 Productos</p>
                  <div className="space-y-2">
                    {coldStorageData?.cuartoFrio1.topProducts && coldStorageData.cuartoFrio1.topProducts.length > 0 ? (
                      coldStorageData.cuartoFrio1.topProducts.map((product, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/5 rounded-md p-2 text-xs lg:text-sm">
                          <span className="text-zinc-300 truncate">{product.name}</span>
                          <span className="text-blue-300 font-semibold ml-2 flex-shrink-0">{product.stock} kg</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-zinc-500 italic">Sin productos</p>
                    )}
                  </div>
                </div>
              </div>

              {/* CF2 Card */}
              <div className="glass-card p-4 lg:p-6 border border-blue-500/30 bg-blue-500/10">
                <h3 className="text-base lg:text-lg font-semibold text-blue-300 mb-3">Cuarto Frío 2</h3>
                <div className="mb-5">
                  <p className="text-xs text-zinc-400 mb-1">Total en Stock</p>
                  <p className="text-3xl lg:text-4xl font-bold text-blue-400">{coldStorageData?.cuartoFrio2.total.toFixed(0)} kg</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-3 font-semibold">Top 3 Productos</p>
                  <div className="space-y-2">
                    {coldStorageData?.cuartoFrio2.topProducts && coldStorageData.cuartoFrio2.topProducts.length > 0 ? (
                      coldStorageData.cuartoFrio2.topProducts.map((product, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white/5 rounded-md p-2 text-xs lg:text-sm">
                          <span className="text-zinc-300 truncate">{product.name}</span>
                          <span className="text-blue-300 font-semibold ml-2 flex-shrink-0">{product.stock} kg</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-zinc-500 italic">Sin productos</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Active Operations */}
      <div className="glass-card">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                Líneas Activas de Fábrica
              </h2>
              <p className="text-sm text-zinc-400 mt-1">Batches en fabricación</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Lote
            </Button>
          </div>
        </div>

        {/* Table or Zero State */}
        {isLoading ? (
          <div className="p-6">
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-12 w-full bg-zinc-800" />
              ))}
            </div>
          </div>
        ) : batches.length === 0 ? (
          // Zero State
          <div className="p-12 flex flex-col items-center justify-center">
            <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mb-4">
              <Factory className="w-8 h-8 text-zinc-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sin Líneas Activas</h3>
            <p className="text-zinc-400 text-center mb-6 max-w-md">
              Todas las líneas de producción están inactivas. Inicia un nuevo lote para comenzar la fabricación.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Lanzar Nuevo Lote
            </Button>
          </div>
        ) : (
          // Table
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="text-zinc-300">Lote #</TableHead>
                  <TableHead className="text-zinc-300">Estado</TableHead>
                  <TableHead className="text-zinc-300 text-right">Entrada (kg)</TableHead>
                  <TableHead className="text-zinc-300 text-right">Salida (kg)</TableHead>
                  <TableHead className="text-zinc-300 text-right">Desperdicio (kg)</TableHead>
                  <TableHead className="text-zinc-300">Iniciado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {batches.map((batch) => (
                  <TableRow key={batch.id} className="border-white/5 hover:bg-white/5">
                    <TableCell className="font-mono text-white">{batch.batch_number}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`${getStatusColor(batch.status)} border`}>
                        {getStatusLabel(batch.status)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-zinc-300">{Number(batch.input_weight_kg).toFixed(2)}</TableCell>
                    <TableCell className="text-right text-zinc-300">{Number(batch.output_weight_kg).toFixed(2)}</TableCell>
                    <TableCell className="text-right text-zinc-300">{Number(batch.waste_weight_kg).toFixed(2)}</TableCell>
                    <TableCell className="text-zinc-400 text-sm">
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
