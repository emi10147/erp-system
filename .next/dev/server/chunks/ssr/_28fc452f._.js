module.exports = [
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const db = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = db;
}),
"[project]/app/actions/inventory.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40199d7246bda28153bd094046d43271c5108547cb":"createProduct","406ea69f67b5df0283fa893aeabe9637fb59c5f6eb":"deleteProduct","407003821151dd09b1ca7568e24b27e31e7098cfdb":"updateProduct"},"",""] */ __turbopack_context__.s([
    "createProduct",
    ()=>createProduct,
    "deleteProduct",
    ()=>deleteProduct,
    "updateProduct",
    ()=>updateProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function createProduct(data) {
    try {
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.create({
            data: {
                name: data.name,
                sku: data.sku,
                category: data.category,
                type: data.type || "NORMAL_CUT",
                location: data.location || null,
                current_stock: data.current_stock
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/inventory");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true,
            product,
            message: "Producto guardado exitosamente"
        };
    } catch (error) {
        console.error("Error creating product:", error);
        return {
            success: false,
            message: "No se pudo guardar el producto"
        };
    }
}
async function updateProduct(data) {
    try {
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.update({
            where: {
                id: data.id
            },
            data: {
                name: data.name,
                sku: data.sku,
                category: data.category,
                type: data.type,
                location: data.location || null,
                current_stock: data.current_stock
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/inventory");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true,
            product,
            message: "Producto actualizado correctamente"
        };
    } catch (error) {
        console.error("Error updating product:", error);
        // Handle unique constraint error for SKU
        if (error.code === "P2002" && error.meta?.target?.includes("sku")) {
            return {
                success: false,
                message: "El SKU ya existe. Por favor, usa uno diferente."
            };
        }
        return {
            success: false,
            message: "No se pudo actualizar el producto"
        };
    }
}
async function deleteProduct(productId) {
    try {
        // Check if product has any associated production batches
        const existingBatches = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].productionBatch.findMany({
            where: {
            }
        });
        // If there are batches, prevent deletion
        if (existingBatches && existingBatches.length > 0) {
            return {
                success: false,
                message: "No se puede eliminar este producto porque tiene lotes de producción asociados."
            };
        }
        // Delete the product
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.delete({
            where: {
                id: productId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/inventory");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            success: true,
            message: "Producto eliminado correctamente"
        };
    } catch (error) {
        console.error("Error deleting product:", error);
        // Handle foreign key constraint error
        if (error.code === "P2014" || error.code === "P2003") {
            return {
                success: false,
                message: "No se puede eliminar este producto porque tiene datos asociados."
            };
        }
        return {
            success: false,
            message: "No se pudo eliminar el producto"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createProduct,
    updateProduct,
    deleteProduct
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProduct, "40199d7246bda28153bd094046d43271c5108547cb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "407003821151dd09b1ca7568e24b27e31e7098cfdb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "406ea69f67b5df0283fa893aeabe9637fb59c5f6eb", null);
}),
"[project]/.next-internal/server/app/inventory/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/inventory.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/inventory.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/inventory/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/inventory.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40199d7246bda28153bd094046d43271c5108547cb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProduct"],
    "406ea69f67b5df0283fa893aeabe9637fb59c5f6eb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"],
    "407003821151dd09b1ca7568e24b27e31e7098cfdb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProduct"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$inventory$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/inventory/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/inventory.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$inventory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/inventory.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_28fc452f._.js.map