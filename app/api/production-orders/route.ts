import { db } from "@/lib/db"
import {
  buildTargetLabel,
  getProductionOrderMaterials,
  potatoQualityLabels,
  type PotatoQualityKey,
} from "@/lib/production-floor"
import { NextRequest, NextResponse } from "next/server"

const validQualities: PotatoQualityKey[] = ["PAPA_GRUESA", "PAPA_SEGUNDA"]

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

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const includeCompleted = searchParams.get("includeCompleted") === "true"
    const take = Number(searchParams.get("take") || 25)

    const orders = await db.productionOrder.findMany({
      where: includeCompleted
        ? {}
        : {
            status: {
              in: ["PENDING", "IN_PROGRESS"],
            },
          },
      orderBy: {
        createdAt: "desc",
      },
      take: Math.min(Math.max(take, 1), 100),
    })

    return NextResponse.json({ orders: orders.map(serializeOrder) })
  } catch (error) {
    console.error("Production orders GET error:", error)
    return NextResponse.json({ error: "Failed to fetch production orders" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const boxesTarget = Number(body.boxesTarget || 0)
    const potatoWeightKg = Number(body.potatoWeightKg || 0)
    const potatoQuality = String(body.potatoQuality || "") as PotatoQualityKey

    if (!Number.isInteger(boxesTarget) || boxesTarget <= 0) {
      return NextResponse.json({ error: "Boxes target must be a positive whole number" }, { status: 400 })
    }

    if (potatoWeightKg <= 0) {
      return NextResponse.json({ error: "Potato weight must be greater than zero" }, { status: 400 })
    }

    if (!validQualities.includes(potatoQuality)) {
      return NextResponse.json({ error: "Invalid potato quality" }, { status: 400 })
    }

    const materials = getProductionOrderMaterials(boxesTarget)
    const order = await db.productionOrder.create({
      data: {
        target_label: buildTargetLabel({
          boxesTarget,
          targetLabel: body.targetLabel,
        }),
        boxes_target: boxesTarget,
        potato_quality: potatoQuality,
        potato_weight_kg: potatoWeightKg,
        cardboard_boxes: materials.cardboardBoxes,
        labels: materials.labels,
        notes: body.notes || null,
      },
    })

    return NextResponse.json({ order: serializeOrder(order) }, { status: 201 })
  } catch (error) {
    console.error("Production orders POST error:", error)
    return NextResponse.json({ error: "Failed to create production order" }, { status: 500 })
  }
}
