"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CostAnalyticsCharts } from "@/components/cost-analytics-charts"

interface CostAnalyticsTabsProps {
  refreshTrigger: number
}

export function CostAnalyticsTabs({ refreshTrigger }: CostAnalyticsTabsProps) {
  const [activeTab, setActiveTab] = useState("materia-prima")

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6 bg-black/50 border border-cyan-500/30 p-1">
          <TabsTrigger
            value="materia-prima"
            className="text-sm font-medium data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 data-[state=active]:border-b-2 data-[state=active]:border-cyan-400"
          >
            Análisis de Costos Materia Prima
          </TabsTrigger>
          <TabsTrigger
            value="insumos"
            className="text-sm font-medium data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 data-[state=active]:border-b-2 data-[state=active]:border-cyan-400"
          >
            Análisis de Costo Insumos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="materia-prima" className="mt-0">
          <div className="w-full">
            <CostAnalyticsCharts
              category="RAW_MATERIAL"
              refreshTrigger={refreshTrigger}
            />
          </div>
        </TabsContent>

        <TabsContent value="insumos" className="mt-0">
          <div className="w-full">
            <CostAnalyticsCharts
              category="PACKAGING"
              refreshTrigger={refreshTrigger}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
