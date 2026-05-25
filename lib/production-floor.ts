export type PotatoQualityKey = "PAPA_GRUESA" | "PAPA_SEGUNDA"

export function getProductionOrderMaterials(boxesTarget: number) {
  return {
    cardboardBoxes: boxesTarget,
    labels: boxesTarget,
  }
}

export function buildTargetLabel(input: {
  boxesTarget: number
  targetLabel?: string
}) {
  return input.targetLabel?.trim() || `Produce ${input.boxesTarget} boxes`
}

export const potatoQualityLabels: Record<PotatoQualityKey, string> = {
  PAPA_GRUESA: "Papa Gruesa",
  PAPA_SEGUNDA: "Papa Segunda",
}
