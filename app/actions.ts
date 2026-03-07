"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function addToProductStock() {
  try {
    const product = await db.product.findUnique({
      where: { sku: "POT-001" },
    })

    if (!product) {
      throw new Error("Product with SKU 'POT-001' not found")
    }

    await db.product.update({
      where: { id: product.id },
      data: {
        current_stock: {
          increment: 500,
        },
      },
    })

    revalidatePath("/")
    return { success: true, message: "Added 500kg to POT-001 stock" }
  } catch (error) {
    console.error("Error updating stock:", error)
    return { success: false, message: "Failed to update stock" }
  }
}
