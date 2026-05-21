import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function updateCosts() {
  try {
    console.log("Iniciando actualización de costos...");

    // Update Papa Chola with unit cost
    await db.product.updateMany({
      where: { name: "Papa Chola" },
      data: { unit_cost: 0.50 },
    });
    console.log("✓ Papa Chola actualizada con unit_cost = 0.50");

    // Update Papa Superchola with unit cost
    await db.product.updateMany({
      where: { name: "Papa Superchola" },
      data: { unit_cost: 0.60 },
    });
    console.log("✓ Papa Superchola actualizada con unit_cost = 0.60");

    // Update Papa Nativa with unit cost
    await db.product.updateMany({
      where: { name: "Papa Nativa" },
      data: { unit_cost: 0.55 },
    });
    console.log("✓ Papa Nativa actualizada con unit_cost = 0.55");

    // Update Papa with unit cost
    await db.product.updateMany({
      where: { name: "Papa" },
      data: { unit_cost: 0.48 },
    });
    console.log("✓ Papa actualizada con unit_cost = 0.48");

    // Also update inventory logs for papas with unit_cost
    const papas = await db.product.findMany({
      where: {
        name: {
          in: ["Papa Chola", "Papa Superchola", "Papa Nativa", "Papa"],
        },
      },
    });

    for (const papa of papas) {
      const unitCostMap = {
        "Papa Chola": 0.50,
        "Papa Superchola": 0.60,
        "Papa Nativa": 0.55,
        Papa: 0.48,
      };

      await db.inventoryLog.updateMany({
        where: { productId: papa.id },
        data: { unit_cost: unitCostMap[papa.name] },
      });
      console.log(`✓ InventoryLogs de ${papa.name} actualizados con unit_cost`);
    }

    console.log("\n✅ Actualización completada exitosamente");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

updateCosts();
