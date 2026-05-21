// ==================== BILL OF MATERIALS CONFIG ====================
// Recipes based on type (STEAKHOUSE_CUT, CRINKLE_CUT, NORMAL_CUT)
export const RECIPES: Record<string, Recipe> = {
  STEAKHOUSE_CUT: {
    name: "Steakhouse 500g",
    type: "STEAKHOUSE_CUT",
    category: "FINISHED_GOOD",
    rawMaterials: [
      {
        name: "Papa Superchola",
        alternatives: ["Papa Chola"],
        quantity: 0.55, // kg (550 grams per 500g package)
        unit: "kg",
      },
    ],
    liquids: [
      {
        name: "Aceite Vegetal",
        alternatives: [],
        quantity: 0.05, // liters (50 ml per 500g package)
        unit: "L",
      },
    ],
    solids: [
      {
        name: "Sal Industrial",
        alternatives: [],
        quantity: 0.01, // kg (10 grams per 500g package)
        unit: "kg",
      },
    ],
    packaging: [
      {
        name: "Fundas Plásticas",
        alternatives: [],
        quantity: 1,
        unit: "unit",
      },
      {
        name: "Etiquetas",
        alternatives: [],
        quantity: 1,
        unit: "unit",
      },
    ],
  },
  CRINKLE_CUT: {
    name: "Papas Crinkle 500g",
    type: "CRINKLE_CUT",
    category: "FINISHED_GOOD",
    rawMaterials: [
      {
        name: "Papa Superchola",
        alternatives: ["Papa Chola"],
        quantity: 0.55, // kg
        unit: "kg",
      },
    ],
    liquids: [
      {
        name: "Aceite Vegetal",
        alternatives: [],
        quantity: 0.05, // liters
        unit: "L",
      },
    ],
    solids: [
      {
        name: "Sal Industrial",
        alternatives: [],
        quantity: 0.01, // kg
        unit: "kg",
      },
    ],
    packaging: [
      {
        name: "Fundas Plásticas",
        alternatives: [],
        quantity: 1,
        unit: "unit",
      },
      {
        name: "Etiquetas",
        alternatives: [],
        quantity: 1,
        unit: "unit",
      },
    ],
  },
  NORMAL_CUT: {
    name: "Papas Normales 500g",
    type: "NORMAL_CUT",
    category: "FINISHED_GOOD",
    rawMaterials: [
      {
        name: "Papa Superchola",
        alternatives: ["Papa Chola"],
        quantity: 0.55, // kg
        unit: "kg",
      },
    ],
    liquids: [
      {
        name: "Aceite Vegetal",
        alternatives: [],
        quantity: 0.05, // liters
        unit: "L",
      },
    ],
    solids: [
      {
        name: "Sal Industrial",
        alternatives: [],
        quantity: 0.01, // kg
        unit: "kg",
      },
    ],
    packaging: [
      {
        name: "Fundas Plásticas",
        alternatives: [],
        quantity: 1,
        unit: "unit",
      },
      {
        name: "Etiquetas",
        alternatives: [],
        quantity: 1,
        unit: "unit",
      },
    ],
  },
}

export type RecipeItem = {
  name: string
  alternatives: string[]
  quantity: number
  unit: string
}

export type Recipe = {
  name: string
  type: "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT"
  category: "FINISHED_GOOD"
  rawMaterials: RecipeItem[]
  liquids: RecipeItem[]
  solids: RecipeItem[]
  packaging: RecipeItem[]
}
