"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createProduct(data: {
  name: string
  sku: string
  category: "RAW_MATERIAL" | "FINISHED_GOOD" | "PACKAGING"
  type?: "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT"
  location?: "CUARTO_FRIO_1" | "CUARTO_FRIO_2" | "ALMACEN_GENERAL"
  current_stock: number
}) {
  try {
    const product = await db.product.create({
      data: {
        name: data.name,
        sku: data.sku,
        category: data.category,
        type: data.type || "NORMAL_CUT",
        location: data.location || null,
        current_stock: data.current_stock,
      },
    })

    revalidatePath("/inventory")
    revalidatePath("/")
    
    return { success: true, product, message: "Producto guardado exitosamente" }
  } catch (error) {
    console.error("Error creating product:", error)
    return { success: false, message: "No se pudo guardar el producto" }
  }
}

export async function updateProduct(data: {
  id: string
  name: string
  sku: string
  category: "RAW_MATERIAL" | "FINISHED_GOOD" | "PACKAGING"
  type: "CRINKLE_CUT" | "STEAKHOUSE_CUT" | "NORMAL_CUT"
  location?: "CUARTO_FRIO_1" | "CUARTO_FRIO_2" | "ALMACEN_GENERAL"
  current_stock: number
}) {
  try {
    const product = await db.product.update({
      where: { id: data.id },
      data: {
        name: data.name,
        sku: data.sku,
        category: data.category,
        type: data.type,
        location: data.location || null,
        current_stock: data.current_stock,
      },
    })

    revalidatePath("/inventory")
    revalidatePath("/")
    
    return { success: true, product, message: "Producto actualizado correctamente" }
  } catch (error: any) {
    console.error("Error updating product:", error)
    
    // Handle unique constraint error for SKU
    if (error.code === "P2002" && error.meta?.target?.includes("sku")) {
      return { success: false, message: "El SKU ya existe. Por favor, usa uno diferente." }
    }
    
    return { success: false, message: "No se pudo actualizar el producto" }
  }
}

export async function deleteProduct(productId: string) {
  try {
    // Check if product has any associated production batches
    const existingBatches = await db.productionBatch.findMany({
      where: {
        // Depending on your schema, you may need to adjust this query
        // This assumes there's a relationship between ProductionBatch and Product
      },
    })

    // If there are batches, prevent deletion
    if (existingBatches && existingBatches.length > 0) {
      return { 
        success: false, 
        message: "No se puede eliminar este producto porque tiene lotes de producción asociados." 
      }
    }

    // Delete the product
    await db.product.delete({
      where: { id: productId },
    })

    revalidatePath("/inventory")
    revalidatePath("/")
    
    return { success: true, message: "Producto eliminado correctamente" }
  } catch (error: any) {
    console.error("Error deleting product:", error)
    
    // Handle foreign key constraint error
    if (error.code === "P2014" || error.code === "P2003") {
      return { 
        success: false, 
        message: "No se puede eliminar este producto porque tiene datos asociados." 
      }
    }
    
    return { success: false, message: "No se pudo eliminar el producto" }
  }
}
