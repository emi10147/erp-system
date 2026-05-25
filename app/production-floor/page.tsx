"use client"

import { FormEvent, useMemo, useState } from "react"
import { CheckCircle2, ClipboardList, Factory, PackageCheck, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getProductionOrderMaterials, type PotatoQualityKey } from "@/lib/production-floor"

export default function ProductionFloorPage() {
  const [targetLabel, setTargetLabel] = useState("Produce 100 boxes for Supermaxi")
  const [boxesTarget, setBoxesTarget] = useState("100")
  const [potatoQuality, setPotatoQuality] = useState<PotatoQualityKey>("PAPA_GRUESA")
  const [potatoWeightKg, setPotatoWeightKg] = useState("250")
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const materials = useMemo(
    () => getProductionOrderMaterials(Math.max(Number(boxesTarget) || 0, 0)),
    [boxesTarget]
  )

  const submitOrder = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    const response = await fetch("/api/production-orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        targetLabel,
        boxesTarget: Number(boxesTarget),
        potatoQuality,
        potatoWeightKg: Number(potatoWeightKg),
        notes,
      }),
    })

    const data = await response.json()
    if (response.ok) {
      setMessage(`Orden enviada: ${data.order.targetLabel}`)
      setNotes("")
    } else {
      setMessage(data.error || "No se pudo enviar la orden.")
    }

    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-6 md:p-8 shadow-[0_0_40px_rgba(0,234,255,0.12)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Tablet de planta
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">
                Production Floor
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-slate-300">
                Registra ordenes de produccion desde la planta. Optimizado para toque y uso en
                tablets.
              </p>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400 text-black">
              <Factory className="h-11 w-11" strokeWidth={2.5} />
            </div>
          </div>
        </section>

        <form onSubmit={submitOrder} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-5 rounded-3xl border border-white/10 bg-slate-950 p-5 md:p-7">
            <div>
              <Label className="text-lg font-bold text-cyan-300">Objetivo de produccion</Label>
              <Input
                value={targetLabel}
                onChange={(event) => setTargetLabel(event.target.value)}
                className="mt-3 min-h-14 rounded-2xl border-cyan-500/30 bg-black text-lg text-white"
                placeholder="Produce 100 boxes for Supermaxi"
                required
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Label className="text-lg font-bold text-cyan-300">Cajas objetivo</Label>
                <Input
                  type="number"
                  min="1"
                  step="1"
                  value={boxesTarget}
                  onChange={(event) => setBoxesTarget(event.target.value)}
                  className="mt-3 min-h-16 rounded-2xl border-cyan-500/30 bg-black text-3xl font-black text-white"
                  required
                />
              </div>

              <div>
                <Label className="text-lg font-bold text-cyan-300">Peso papa usada (kg)</Label>
                <Input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={potatoWeightKg}
                  onChange={(event) => setPotatoWeightKg(event.target.value)}
                  className="mt-3 min-h-16 rounded-2xl border-cyan-500/30 bg-black text-3xl font-black text-white"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="text-lg font-bold text-cyan-300">Calidad de papa</Label>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                {[
                  ["PAPA_GRUESA", "Papa Gruesa"],
                  ["PAPA_SEGUNDA", "Papa Segunda"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setPotatoQuality(value as PotatoQualityKey)}
                    className={`min-h-16 rounded-2xl border px-5 text-left text-xl font-black transition ${
                      potatoQuality === value
                        ? "border-cyan-300 bg-cyan-400 text-black shadow-[0_0_28px_rgba(0,234,255,0.35)]"
                        : "border-slate-700 bg-black text-slate-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-lg font-bold text-cyan-300">Notas</Label>
              <Input
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                className="mt-3 min-h-14 rounded-2xl border-cyan-500/30 bg-black text-lg text-white"
                placeholder="Linea, turno, observaciones"
              />
            </div>

            <Button
              disabled={isSubmitting}
              className="min-h-16 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-black text-black"
            >
              {isSubmitting ? "Enviando..." : "Enviar orden a dashboard"}
            </Button>

            {message && (
              <div className="flex items-center gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-cyan-100">
                <CheckCircle2 className="h-6 w-6 text-cyan-300" />
                <p className="text-lg font-semibold">{message}</p>
              </div>
            )}
          </section>

          <section className="space-y-5 rounded-3xl border border-cyan-500/20 bg-slate-950 p-5 md:p-7">
            <div className="flex items-center gap-3">
              <ClipboardList className="h-7 w-7 text-cyan-300" />
              <h2 className="text-2xl font-black">Materiales calculados</h2>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-black p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-500">Cajas carton</p>
                    <p className="mt-2 text-4xl font-black text-white">{materials.cardboardBoxes}</p>
                  </div>
                  <PackageCheck className="h-12 w-12 text-cyan-300" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-500">Etiquetas</p>
                    <p className="mt-2 text-4xl font-black text-white">{materials.labels}</p>
                  </div>
                  <Tag className="h-12 w-12 text-cyan-300" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5 text-slate-200">
              <p className="font-bold text-cyan-200">Resumen</p>
              <p className="mt-2 text-lg">
                {boxesTarget || 0} cajas -{" "}
                {potatoQuality === "PAPA_GRUESA" ? "Papa Gruesa" : "Papa Segunda"} -{" "}
                {potatoWeightKg || 0} kg
              </p>
            </div>
          </section>
        </form>
      </div>
    </main>
  )
}
