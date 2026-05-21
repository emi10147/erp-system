const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async () => {
  try {
    // Find the product 'Etiquetas'
    const product = await prisma.product.findFirst({
      where: {
        name: 'Etiquetas'
      }
    });

    if (!product) {
      console.log('Product Etiquetas not found in database');
      await prisma.\\();
      process.exit(0);
    }

    console.log('\\n===== PRODUCT INFO =====');
    console.log('Product ID:', product.id);
    console.log('Product Name:', product.name);
    console.log('Product SKU:', product.sku);
    console.log('\\n===== INVENTORY LOGS FOR ETIQUETAS =====\\n');

    // Get all inventory logs for this product
    const inventoryLogs = await prisma.inventoryLog.findMany({
      where: {
        product_id: product.id
      },
      select: {
        id: true,
        product_id: true,
        quantity: true,
        reason: true,
        unit_cost: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    if (inventoryLogs.length === 0) {
      console.log('No inventory logs found for this product.');
    } else {
      console.log('Total logs found:', inventoryLogs.length);
      console.log('');
      inventoryLogs.forEach((log, index) => {
        console.log('Log ' + (index + 1) + ':');
        console.log('  ID:', log.id);
        console.log('  Product ID:', log.product_id);
        console.log('  Quantity:', log.quantity);
        console.log('  Reason:', log.reason);
        console.log('  Unit Cost:', log.unit_cost);
        console.log('  Created At:', log.createdAt);
        console.log('');
      });
    }
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.\\();
  }
})();
