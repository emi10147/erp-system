"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function MateriaPrimaAnalisisPage() {
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
            <h1 className="text-3xl font-bold text-cyan-400">Análisis de Costos - Materia Prima</h1>
            <p className="text-cyan-300/70 text-sm">Gráficos de inversión diaria y evolución de costos de Papas</p>
          </div>
        </div>
      </div>

      {/* Charts removed - moved to Insumos section */}
    </div>
  )
}
