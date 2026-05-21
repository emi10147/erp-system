"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertCircle, CheckCircle2, Zap } from "lucide-react"
import {
  checkProductionFeasibility,
  executeProduction,
  type FeasibilityResult,
} from "@/app/actions/manufacturing"
import { RECIPES } from "@/config/manufacturing"
import type { FriesType } from "@prisma/client"

export default function ManufacturingPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<FriesType>("STEAKHOUSE_CUT")
  const [targetQuantity, setTargetQuantity] = useState<string>("100")
  const [isChecking, setIsChecking] = useState(false)
  const [isProducing, setIsProducing] = useState(false)
  const [feasibility, setFeasibility] = useState<FeasibilityResult | null>(null)
  const [showFeasibilityDialog, setShowFeasibilityDialog] = useState(false)
  const [showProductionDialog, setShowProductionDialog] = useState(false)
  const [productionMessage, setProductionMessage] = useState("")
  const [productionSuccess, setProductionSuccess] = useState(false)
  
  const recipes = (Object.keys(RECIPES) as FriesType[])

  const recipe = RECIPES[selectedRecipe]

  const handleCheckFeasibility = async () => {
    if (!targetQuantity || parseInt(targetQuantity) <= 0) {
      alert("Por favor ingresa una cantidad válida")
      return
    }

    setIsChecking(true)
    try {
      const result = await checkProductionFeasibility(
        selectedRecipe as FriesType,
        parseInt(targetQuantity)
      )
      setFeasibility(result)
      setShowFeasibilityDialog(true)
    } catch (error) {
      alert("Error al verificar factibilidad")
    } finally {
      setIsChecking(false)
    }
  }

  const handleProduction = async () => {
    if (!feasibility?.canProduce) {
      alert("No se puede iniciar la producción. Verifica los requerimientos.")
      return
    }

    setIsProducing(true)
    setShowFeasibilityDialog(false)
    setShowProductionDialog(true)
    setProductionMessage("Procesando producción...")
    setProductionSuccess(false)

    try {
      const result = await executeProduction(
        selectedRecipe as FriesType,
        parseInt(targetQuantity)
      )

      if (result.success) {
        setProductionSuccess(true)
        setProductionMessage(
          `✓ ${result.message}\n\nLa gráfica se actualizará automáticamente.`
        )
        setTargetQuantity("100")
        setFeasibility(null)
      } else {
        setProductionSuccess(false)
        setProductionMessage(`❌ Error: ${result.message}`)
      }
    } catch (error) {
      setProductionSuccess(false)
      setProductionMessage("❌ Error al ejecutar la producción")
    } finally {
      setIsProducing(false)
    }
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-black p-4">
        <div className="text-center text-red-400">Receta no encontrada</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
          ⚙️ Motor de Manufactura
        </h1>
        <p className="text-cyan-300/70">
          Validar inventario y ejecutar producción con lógica FIFO
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Left Panel: Recipe Selection */}
        <div className="md:col-span-1 space-y-6">
          {/* Recipe Selector */}
          <div className="glass-card-premium p-6 rounded-xl">
            <h3 className="text-cyan-300 font-bold mb-4">Seleccionar Receta</h3>
            <div className="space-y-2">
              {recipes.map((recType) => {
                const recData = RECIPES[recType]
                return (
                  <button
                    key={recType}
                    onClick={() => {
                      setSelectedRecipe(recType)
                      setFeasibility(null)
                    }}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedRecipe === recType
                        ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold"
                        : "bg-slate-800/50 hover:bg-slate-700/50 text-cyan-300"
                    }`}
                    style={
                      selectedRecipe === recType
                        ? {
                            boxShadow: "0 0 20px rgba(0, 234, 255, 0.4)",
                          }
                        : {}
                    }
                  >
                    {recData.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Quantity Input */}
          <div className="glass-card-premium p-6 rounded-xl">
            <Label htmlFor="quantity" className="text-cyan-300 font-bold mb-3 block">
              Cantidad a Producir
            </Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={targetQuantity}
              onChange={(e) => setTargetQuantity(e.target.value)}
              className="input-modern mb-4"
              placeholder="100"
            />
            <Button
              onClick={handleCheckFeasibility}
              disabled={isChecking}
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold h-10"
              style={{ boxShadow: "0 0 20px rgba(0, 234, 255, 0.3)" }}
            >
              {isChecking ? "Verificando..." : "✓ Verificar Factibilidad"}
            </Button>
          </div>
        </div>

        {/* Middle Panel: Recipe Details */}
        <div className="md:col-span-1 space-y-4">
          <div className="glass-card-premium p-6 rounded-xl">
            <h3 className="text-cyan-300 font-bold mb-4 text-lg">Receta: {recipe.name}</h3>

            {/* Raw Materials */}
            <div className="mb-6">
              <h4 className="text-cyan-200 font-semibold text-sm mb-2">Materias Primas</h4>
              <div className="space-y-2">
                {recipe.rawMaterials.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-3 rounded text-sm">
                    <div className="text-cyan-300">{item.name}</div>
                    <div className="text-xs text-slate-400">
                      {item.quantity} {item.unit} por unidad
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Liquids */}
            <div className="mb-6">
              <h4 className="text-cyan-200 font-semibold text-sm mb-2">Líquidos</h4>
              <div className="space-y-2">
                {recipe.liquids.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-3 rounded text-sm">
                    <div className="text-cyan-300">{item.name}</div>
                    <div className="text-xs text-slate-400">
                      {item.quantity} {item.unit} por unidad
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solids */}
            <div className="mb-6">
              <h4 className="text-cyan-200 font-semibold text-sm mb-2">Sólidos</h4>
              <div className="space-y-2">
                {recipe.solids.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-3 rounded text-sm">
                    <div className="text-cyan-300">{item.name}</div>
                    <div className="text-xs text-slate-400">
                      {item.quantity} {item.unit} por unidad
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging */}
            <div className="mb-4">
              <h4 className="text-cyan-200 font-semibold text-sm mb-2">Empaque</h4>
              <div className="space-y-2">
                {recipe.packaging.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-3 rounded text-sm">
                    <div className="text-cyan-300">{item.name}</div>
                    <div className="text-xs text-slate-400">
                      {item.quantity} {item.unit} por unidad
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Status & Actions */}
        <div className="md:col-span-1 space-y-4">
          {feasibility ? (
            <div className="glass-card-premium p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                {feasibility.canProduce ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    <span className="text-cyan-400">Producción Viable</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-6 h-6 text-red-400" />
                    <span className="text-red-400">Inventario Insuficiente</span>
                  </>
                )}
              </h3>

              {/* Summary */}
              <div className="bg-slate-800/50 p-4 rounded-lg mb-4">
                <div className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Necesario:</span>
                    <span className="text-cyan-300 font-bold">
                      {feasibility.summary.needed} unidades
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Disponible:</span>
                    <span className="text-cyan-300 font-bold">
                      {feasibility.summary.available} unidades
                    </span>
                  </div>
                  {feasibility.summary.lacks > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Falta:</span>
                      <span className="text-red-400 font-bold">
                        {feasibility.summary.lacks} unidades
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Shortages if any */}
              {feasibility.shortages.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-red-300 text-sm font-bold mb-2">Déficit por Insumo:</h4>
                  <div className="space-y-1 text-xs">
                    {feasibility.shortages.map((shortage, idx) => (
                      <div key={idx} className="text-red-400/80">
                        • {shortage.ingredient}: falta{" "}
                        <span className="font-bold">{shortage.lacks}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {feasibility.canProduce && (
                <Button
                  onClick={handleProduction}
                  disabled={isProducing}
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold h-11 mt-4"
                  style={{
                    boxShadow: "0 0 25px rgba(0, 188, 212, 0.4)",
                  }}
                >
                  {isProducing ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Procesando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Finalizar Producción
                    </span>
                  )}
                </Button>
              )}
            </div>
          ) : (
            <div className="glass-card-premium p-6 rounded-xl text-center text-slate-400">
              <p className="text-sm">
                Selecciona una cantidad y haz clic en "Verificar Factibilidad" para validar el
                inventario.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Feasibility Dialog */}
      <Dialog open={showFeasibilityDialog} onOpenChange={setShowFeasibilityDialog}>
        <DialogContent className="bg-gradient-to-b from-black to-black/80 border-cyan-500/30 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl font-bold">
              Verificación de Factibilidad
            </DialogTitle>
            <DialogDescription className="text-cyan-300/70">
              Análisis detallado de inventario disponible
            </DialogDescription>
          </DialogHeader>

          {feasibility && (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {feasibility.canProduce ? (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-400 font-bold">
                    ✓ Hay suficiente inventario para producir {targetQuantity} unidades
                  </p>
                </div>
              ) : (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-red-400 font-bold">
                    ❌ Inventario insuficiente. Se necesita completar stock.
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="text-cyan-300 font-bold">Desglose por Insumo:</h4>
                {feasibility.stockGroups.map((group, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-3 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-cyan-300 font-semibold">{group.name}</span>
                      <span className="text-cyan-400">
                        {group.totalStock} disponible
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      {group.items.length} variante{group.items.length !== 1 ? "s" : ""}
                    </div>
                  </div>
                ))}
              </div>

              {feasibility.shortages.length > 0 && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">Déficits Detectados:</h4>
                  <div className="space-y-2 text-sm">
                    {feasibility.shortages.map((shortage, idx) => (
                      <div key={idx} className="text-red-400">
                        • <span className="font-bold">{shortage.ingredient}</span>: necesita{" "}
                        {shortage.needed}, disponible {shortage.available}, falta{" "}
                        <span className="text-red-300 font-bold">{shortage.lacks}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <Button
              onClick={() => setShowFeasibilityDialog(false)}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white"
            >
              Cancelar
            </Button>
            {feasibility?.canProduce && (
              <Button
                onClick={handleProduction}
                disabled={isProducing}
                className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold"
                style={{
                  boxShadow: "0 0 20px rgba(0, 188, 212, 0.3)",
                }}
              >
                {isProducing ? "Procesando..." : "Iniciar Producción"}
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Production Result Dialog */}
      <Dialog open={showProductionDialog} onOpenChange={setShowProductionDialog}>
        <DialogContent className="bg-gradient-to-b from-black to-black/80 border-cyan-500/30">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl font-bold">
              {isProducing ? "Procesando Producción" : "Resultado de Producción"}
            </DialogTitle>
          </DialogHeader>

          <div className="py-8">
            {isProducing ? (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div
                    className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"
                    style={{ boxShadow: "0 0 30px rgba(0, 234, 255, 0.4)" }}
                  />
                </div>
                <p className="text-cyan-300 font-semibold">Ejecutando transacción...</p>
                <p className="text-slate-400 text-sm">
                  Se están descargando insumos y actualizando inventario
                </p>
              </div>
            ) : (
              <div className="text-center space-y-4">
                {productionMessage.includes("❌") ? (
                  <>
                    <AlertCircle className="w-16 h-16 text-red-400 mx-auto" />
                    <p className="text-red-300 font-semibold whitespace-pre-line">
                      {productionMessage}
                    </p>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto" />
                    <p className="text-cyan-300 font-semibold whitespace-pre-line">
                      {productionMessage}
                    </p>
                  </>
                )}
              </div>
            )}
          </div>

          {!isProducing && (
            <Button
              onClick={() => {
                setShowProductionDialog(false)
                if (!productionMessage.includes("❌")) {
                  setFeasibility(null)
                }
              }}
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-bold"
              style={{
                boxShadow: "0 0 20px rgba(0, 234, 255, 0.3)",
              }}
            >
              Entendido
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
