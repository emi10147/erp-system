"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function AnalisisCostosPage() {
  const router = useRouter()

  return (
    <div className="w-full space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="hover:bg-cyan-500/10"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-cyan-400">Análisis de Costos</h1>
            <p className="text-cyan-300/70 text-sm">Selecciona qué análisis quieres revisar</p>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 gap-6 mt-12 max-w-md">
        {/* Insumos Card */}
        <button
          onClick={() => router.push("/inventory/analisis/insumos")}
          className="glass-card-premium p-8 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50 cursor-pointer"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="text-4xl">📦</div>
            <h2 className="text-2xl font-bold text-cyan-400">Insumos</h2>
            <p className="text-cyan-300/70 text-sm">Análisis de costos de Insumos</p>
            <p className="text-cyan-300/50 text-xs mt-2">Aceite, Sal, Fundas, Etiquetas, Cajas</p>
          </div>
        </button>
      </div>
    </div>
  )
}
