import { db } from "@/lib/db"
import { potatoQualityLabels, type PotatoQualityKey } from "@/lib/production-floor"
import { NextRequest, NextResponse } from "next/server"

const statusFlow = ["PENDING", "IN_PROGRESS", "COMPLETED"] as const

function serializeOrder(order: any) {
  return {
    id: order.id,
    targetLabel: order.target_label,
    boxesTarget: order.boxes_target,
    potatoQuality: order.potato_quality,
    potatoQualityLabel: potatoQualityLabels[order.potato_quality as PotatoQualityKey],
    potatoWeightKg: Number(order.potato_weight_kg),
    cardboardBoxes: order.cardboard_boxes,
    labels: order.labels,
    status: order.status,
    notes: order.notes || "",
    completedAt: order.completedAt ? order.completedAt.toISOString() : null,
    createdAt: order.createdAt.toISOString(),
    updatedAt: order.updatedAt.toISOString(),
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json().catch(() => ({}))
    const existing = await db.productionOrder.findUnique({
      where: { id },
    })

    if (!existing) {
      return NextResponse.json({ error: "Production order not found" }, { status: 404 })
    }

    const nextStatus =
      body.status ||
      statusFlow[Math.min(statusFlow.indexOf(existing.status as any) + 1, statusFlow.length - 1)]

    if (!statusFlow.includes(nextStatus)) {
      return NextResponse.json({ error: "Invalid production order status" }, { status: 400 })
    }

    const order = await db.productionOrder.update({
      where: { id },
      data: {
        status: nextStatus,
        completedAt: nextStatus === "COMPLETED" ? new Date() : null,
      },
    })

    return NextResponse.json({ order: serializeOrder(order) })
  } catch (error) {
    console.error("Production order PATCH error:", error)
    return NextResponse.json({ error: "Failed to update production order" }, { status: 500 })
  }
}
