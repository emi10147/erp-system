(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/radix-ui/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$radix$2d$ui$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/alert-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertDialog",
    ()=>AlertDialog,
    "AlertDialogAction",
    ()=>AlertDialogAction,
    "AlertDialogCancel",
    ()=>AlertDialogCancel,
    "AlertDialogContent",
    ()=>AlertDialogContent,
    "AlertDialogDescription",
    ()=>AlertDialogDescription,
    "AlertDialogFooter",
    ()=>AlertDialogFooter,
    "AlertDialogHeader",
    ()=>AlertDialogHeader,
    "AlertDialogMedia",
    ()=>AlertDialogMedia,
    "AlertDialogOverlay",
    ()=>AlertDialogOverlay,
    "AlertDialogPortal",
    ()=>AlertDialogPortal,
    "AlertDialogTitle",
    ()=>AlertDialogTitle,
    "AlertDialogTrigger",
    ()=>AlertDialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript) <export * as AlertDialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function AlertDialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__["AlertDialog"].Root, {
        "data-slot": "alert-dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = AlertDialog;
function AlertDialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__["AlertDialog"].Trigger, {
        "data-slot": "alert-dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = AlertDialogTrigger;
function AlertDialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__["AlertDialog"].Portal, {
        "data-slot": "alert-dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = AlertDialogPortal;
function AlertDialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__["AlertDialog"].Overlay, {
        "data-slot": "alert-dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = AlertDialogOverlay;
function AlertDialogContent({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__["AlertDialog"].Content, {
                "data-slot": "alert-dialog-content",
                "data-size": size,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 ring-1 ring-foreground/10 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/alert-dialog.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c4 = AlertDialogContent;
function AlertDialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c5 = AlertDialogHeader;
function AlertDialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c6 = AlertDialogFooter;
function AlertDialogMedia({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-dialog-media",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c7 = AlertDialogMedia;
function AlertDialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__["AlertDialog"].Title, {
        "data-slot": "alert-dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c8 = AlertDialogTitle;
function AlertDialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__["AlertDialog"].Description, {
        "data-slot": "alert-dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c9 = AlertDialogDescription;
function AlertDialogAction({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: variant,
        size: size,
        asChild: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__["AlertDialog"].Action, {
            "data-slot": "alert-dialog-action",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/alert-dialog.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c10 = AlertDialogAction;
function AlertDialogCancel({ className, variant = "outline", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: variant,
        size: size,
        asChild: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__AlertDialog$3e$__["AlertDialog"].Cancel, {
            "data-slot": "alert-dialog-cancel",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/alert-dialog.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/alert-dialog.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_c11 = AlertDialogCancel;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "AlertDialog");
__turbopack_context__.k.register(_c1, "AlertDialogTrigger");
__turbopack_context__.k.register(_c2, "AlertDialogPortal");
__turbopack_context__.k.register(_c3, "AlertDialogOverlay");
__turbopack_context__.k.register(_c4, "AlertDialogContent");
__turbopack_context__.k.register(_c5, "AlertDialogHeader");
__turbopack_context__.k.register(_c6, "AlertDialogFooter");
__turbopack_context__.k.register(_c7, "AlertDialogMedia");
__turbopack_context__.k.register(_c8, "AlertDialogTitle");
__turbopack_context__.k.register(_c9, "AlertDialogDescription");
__turbopack_context__.k.register(_c10, "AlertDialogAction");
__turbopack_context__.k.register(_c11, "AlertDialogCancel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript) <export * as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Root, {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Group, {
        "data-slot": "select-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("scroll-my-1 p-1", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Value, {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Trigger, {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Icon, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "pointer-events-none size-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "item-aligned", align = "center", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Content, {
            "data-slot": "select-content",
            "data-align-trigger": position === "item-aligned",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            align: align,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Viewport, {
                    "data-position": position,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)", position === "popper" && ""),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Label, {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-1.5 py-1 text-xs text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Item, {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ItemText, {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].Separator, {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none -mx-1 my-1 h-px bg-border", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollUpButton, {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Select$3e$__["Select"].ScrollDownButton, {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {}, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript) <export * as Label>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Label$3e$__["Label"].Root, {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:2800f4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProduct",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40f99851acaf51f4275ba87ed8f5cf3aef51b60d63":"createProduct"},"app/actions/inventory.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40f99851acaf51f4275ba87ed8f5cf3aef51b60d63", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProduct");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3QoZGF0YToge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHNrdTogc3RyaW5nXHJcbiAgY2F0ZWdvcnk6IFwiUkFXX01BVEVSSUFMXCIgfCBcIkZJTklTSEVEX0dPT0RcIiB8IFwiUEFDS0FHSU5HXCJcclxuICB0eXBlPzogXCJDUklOS0xFX0NVVFwiIHwgXCJTVEVBS0hPVVNFX0NVVFwiIHwgXCJOT1JNQUxfQ1VUXCJcclxuICBsb2NhdGlvbj86IFwiQ1VBUlRPX0ZSSU9fMVwiIHwgXCJDVUFSVE9fRlJJT18yXCIgfCBcIkFMTUFDRU5fR0VORVJBTFwiXHJcbiAgY3VycmVudF9zdG9jazogbnVtYmVyXHJcbiAgdW5pdF9jb3N0PzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWYWxpZGF0ZSBzdG9jayBpcyBub3QgbmVnYXRpdmVcclxuICAgIGlmIChkYXRhLmN1cnJlbnRfc3RvY2sgPCAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yOiBFbCBzdG9jayBubyBwdWVkZSBzZXIgbWVub3IgYSBjZXJvXCIgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF1dG8tYXNzaWduIEFMTUFDRU5fR0VORVJBTCBmb3IgUEFDS0FHSU5HIChJbnN1bW9zKVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkYXRhLmNhdGVnb3J5ID09PSBcIlBBQ0tBR0lOR1wiID8gXCJBTE1BQ0VOX0dFTkVSQUxcIiA6IChkYXRhLmxvY2F0aW9uIHx8IG51bGwpXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBza3U6IGRhdGEuc2t1LFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgIHR5cGU6IGRhdGEudHlwZSB8fCBcIk5PUk1BTF9DVVRcIixcclxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXHJcbiAgICAgICAgY3VycmVudF9zdG9jazogZGF0YS5jdXJyZW50X3N0b2NrLFxyXG4gICAgICAgIHVuaXRfY29zdDogZGF0YS51bml0X2Nvc3QgfHwgbnVsbCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9pbnZlbnRvcnlcIilcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKVxyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcm9kdWN0LCBtZXNzYWdlOiBcIlByb2R1Y3RvIGd1YXJkYWRvIGV4aXRvc2FtZW50ZVwiIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHByb2R1Y3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiTm8gc2UgcHVkbyBndWFyZGFyIGVsIHByb2R1Y3RvXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3QoZGF0YToge1xyXG4gIGlkOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICBza3U6IHN0cmluZ1xyXG4gIGNhdGVnb3J5OiBcIlJBV19NQVRFUklBTFwiIHwgXCJGSU5JU0hFRF9HT09EXCIgfCBcIlBBQ0tBR0lOR1wiXHJcbiAgdHlwZTogXCJDUklOS0xFX0NVVFwiIHwgXCJTVEVBS0hPVVNFX0NVVFwiIHwgXCJOT1JNQUxfQ1VUXCJcclxuICBsb2NhdGlvbj86IFwiQ1VBUlRPX0ZSSU9fMVwiIHwgXCJDVUFSVE9fRlJJT18yXCIgfCBcIkFMTUFDRU5fR0VORVJBTFwiXHJcbiAgY3VycmVudF9zdG9jazogbnVtYmVyXHJcbiAgdW5pdF9jb3N0PzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWYWxpZGF0ZSBzdG9jayBpcyBub3QgbmVnYXRpdmVcclxuICAgIGlmIChkYXRhLmN1cnJlbnRfc3RvY2sgPCAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yOiBFbCBzdG9jayBubyBwdWVkZSBzZXIgbWVub3IgYSBjZXJvXCIgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBkYXRhLmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgc2t1OiBkYXRhLnNrdSxcclxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUsXHJcbiAgICAgICAgbG9jYXRpb246IGRhdGEubG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBjdXJyZW50X3N0b2NrOiBkYXRhLmN1cnJlbnRfc3RvY2ssXHJcbiAgICAgICAgdW5pdF9jb3N0OiBkYXRhLnVuaXRfY29zdCB8fCBudWxsLFxyXG4gICAgICAgIHByb3ZpZGVyOiBkYXRhLnByb3ZpZGVyIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2ludmVudG9yeVwiKVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByb2R1Y3QsIG1lc3NhZ2U6IFwiUHJvZHVjdG8gYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZVwiIH1cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcHJvZHVjdDpcIiwgZXJyb3IpXHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSB1bmlxdWUgY29uc3RyYWludCBlcnJvciBmb3IgU0tVXHJcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gXCJQMjAwMlwiICYmIGVycm9yLm1ldGE/LnRhcmdldD8uaW5jbHVkZXMoXCJza3VcIikpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRWwgU0tVIHlhIGV4aXN0ZS4gUG9yIGZhdm9yLCB1c2EgdW5vIGRpZmVyZW50ZS5cIiB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5vIHNlIHB1ZG8gYWN0dWFsaXphciBlbCBwcm9kdWN0b1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIENoZWNrIGlmIHByb2R1Y3QgaGFzIGFueSBhc3NvY2lhdGVkIHByb2R1Y3Rpb24gYmF0Y2hlc1xyXG4gICAgY29uc3QgZXhpc3RpbmdCYXRjaGVzID0gYXdhaXQgZGIucHJvZHVjdGlvbkJhdGNoLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICAvLyBEZXBlbmRpbmcgb24geW91ciBzY2hlbWEsIHlvdSBtYXkgbmVlZCB0byBhZGp1c3QgdGhpcyBxdWVyeVxyXG4gICAgICAgIC8vIFRoaXMgYXNzdW1lcyB0aGVyZSdzIGEgcmVsYXRpb25zaGlwIGJldHdlZW4gUHJvZHVjdGlvbkJhdGNoIGFuZCBQcm9kdWN0XHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIElmIHRoZXJlIGFyZSBiYXRjaGVzLCBwcmV2ZW50IGRlbGV0aW9uXHJcbiAgICBpZiAoZXhpc3RpbmdCYXRjaGVzICYmIGV4aXN0aW5nQmF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICBtZXNzYWdlOiBcIk5vIHNlIHB1ZWRlIGVsaW1pbmFyIGVzdGUgcHJvZHVjdG8gcG9ycXVlIHRpZW5lIGxvdGVzIGRlIHByb2R1Y2Npw7NuIGFzb2NpYWRvcy5cIiBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERlbGV0ZSB0aGUgcHJvZHVjdFxyXG4gICAgYXdhaXQgZGIucHJvZHVjdC5kZWxldGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogcHJvZHVjdElkIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2ludmVudG9yeVwiKVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJvZHVjdG8gZWxpbWluYWRvIGNvcnJlY3RhbWVudGVcIiB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHByb2R1Y3Q6XCIsIGVycm9yKVxyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgZm9yZWlnbiBrZXkgY29uc3RyYWludCBlcnJvclxyXG4gICAgaWYgKGVycm9yLmNvZGUgPT09IFwiUDIwMTRcIiB8fCBlcnJvci5jb2RlID09PSBcIlAyMDAzXCIpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiTm8gc2UgcHVlZGUgZWxpbWluYXIgZXN0ZSBwcm9kdWN0byBwb3JxdWUgdGllbmUgZGF0b3MgYXNvY2lhZG9zLlwiIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5vIHNlIHB1ZG8gZWxpbWluYXIgZWwgcHJvZHVjdG9cIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFJBS3NCLDBMQUFBIn0=
}),
"[project]/app/actions/data:1adf95 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProduct",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"404bc9d5285b0ff210595ef44b7cc1eed1f61b1a10":"updateProduct"},"app/actions/inventory.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("404bc9d5285b0ff210595ef44b7cc1eed1f61b1a10", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProduct");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3QoZGF0YToge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHNrdTogc3RyaW5nXHJcbiAgY2F0ZWdvcnk6IFwiUkFXX01BVEVSSUFMXCIgfCBcIkZJTklTSEVEX0dPT0RcIiB8IFwiUEFDS0FHSU5HXCJcclxuICB0eXBlPzogXCJDUklOS0xFX0NVVFwiIHwgXCJTVEVBS0hPVVNFX0NVVFwiIHwgXCJOT1JNQUxfQ1VUXCJcclxuICBsb2NhdGlvbj86IFwiQ1VBUlRPX0ZSSU9fMVwiIHwgXCJDVUFSVE9fRlJJT18yXCIgfCBcIkFMTUFDRU5fR0VORVJBTFwiXHJcbiAgY3VycmVudF9zdG9jazogbnVtYmVyXHJcbiAgdW5pdF9jb3N0PzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWYWxpZGF0ZSBzdG9jayBpcyBub3QgbmVnYXRpdmVcclxuICAgIGlmIChkYXRhLmN1cnJlbnRfc3RvY2sgPCAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yOiBFbCBzdG9jayBubyBwdWVkZSBzZXIgbWVub3IgYSBjZXJvXCIgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF1dG8tYXNzaWduIEFMTUFDRU5fR0VORVJBTCBmb3IgUEFDS0FHSU5HIChJbnN1bW9zKVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkYXRhLmNhdGVnb3J5ID09PSBcIlBBQ0tBR0lOR1wiID8gXCJBTE1BQ0VOX0dFTkVSQUxcIiA6IChkYXRhLmxvY2F0aW9uIHx8IG51bGwpXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBza3U6IGRhdGEuc2t1LFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgIHR5cGU6IGRhdGEudHlwZSB8fCBcIk5PUk1BTF9DVVRcIixcclxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXHJcbiAgICAgICAgY3VycmVudF9zdG9jazogZGF0YS5jdXJyZW50X3N0b2NrLFxyXG4gICAgICAgIHVuaXRfY29zdDogZGF0YS51bml0X2Nvc3QgfHwgbnVsbCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9pbnZlbnRvcnlcIilcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKVxyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcm9kdWN0LCBtZXNzYWdlOiBcIlByb2R1Y3RvIGd1YXJkYWRvIGV4aXRvc2FtZW50ZVwiIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHByb2R1Y3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiTm8gc2UgcHVkbyBndWFyZGFyIGVsIHByb2R1Y3RvXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3QoZGF0YToge1xyXG4gIGlkOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICBza3U6IHN0cmluZ1xyXG4gIGNhdGVnb3J5OiBcIlJBV19NQVRFUklBTFwiIHwgXCJGSU5JU0hFRF9HT09EXCIgfCBcIlBBQ0tBR0lOR1wiXHJcbiAgdHlwZTogXCJDUklOS0xFX0NVVFwiIHwgXCJTVEVBS0hPVVNFX0NVVFwiIHwgXCJOT1JNQUxfQ1VUXCJcclxuICBsb2NhdGlvbj86IFwiQ1VBUlRPX0ZSSU9fMVwiIHwgXCJDVUFSVE9fRlJJT18yXCIgfCBcIkFMTUFDRU5fR0VORVJBTFwiXHJcbiAgY3VycmVudF9zdG9jazogbnVtYmVyXHJcbiAgdW5pdF9jb3N0PzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWYWxpZGF0ZSBzdG9jayBpcyBub3QgbmVnYXRpdmVcclxuICAgIGlmIChkYXRhLmN1cnJlbnRfc3RvY2sgPCAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yOiBFbCBzdG9jayBubyBwdWVkZSBzZXIgbWVub3IgYSBjZXJvXCIgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBkYXRhLmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgc2t1OiBkYXRhLnNrdSxcclxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUsXHJcbiAgICAgICAgbG9jYXRpb246IGRhdGEubG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBjdXJyZW50X3N0b2NrOiBkYXRhLmN1cnJlbnRfc3RvY2ssXHJcbiAgICAgICAgdW5pdF9jb3N0OiBkYXRhLnVuaXRfY29zdCB8fCBudWxsLFxyXG4gICAgICAgIHByb3ZpZGVyOiBkYXRhLnByb3ZpZGVyIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2ludmVudG9yeVwiKVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByb2R1Y3QsIG1lc3NhZ2U6IFwiUHJvZHVjdG8gYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZVwiIH1cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcHJvZHVjdDpcIiwgZXJyb3IpXHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSB1bmlxdWUgY29uc3RyYWludCBlcnJvciBmb3IgU0tVXHJcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gXCJQMjAwMlwiICYmIGVycm9yLm1ldGE/LnRhcmdldD8uaW5jbHVkZXMoXCJza3VcIikpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRWwgU0tVIHlhIGV4aXN0ZS4gUG9yIGZhdm9yLCB1c2EgdW5vIGRpZmVyZW50ZS5cIiB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5vIHNlIHB1ZG8gYWN0dWFsaXphciBlbCBwcm9kdWN0b1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIENoZWNrIGlmIHByb2R1Y3QgaGFzIGFueSBhc3NvY2lhdGVkIHByb2R1Y3Rpb24gYmF0Y2hlc1xyXG4gICAgY29uc3QgZXhpc3RpbmdCYXRjaGVzID0gYXdhaXQgZGIucHJvZHVjdGlvbkJhdGNoLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICAvLyBEZXBlbmRpbmcgb24geW91ciBzY2hlbWEsIHlvdSBtYXkgbmVlZCB0byBhZGp1c3QgdGhpcyBxdWVyeVxyXG4gICAgICAgIC8vIFRoaXMgYXNzdW1lcyB0aGVyZSdzIGEgcmVsYXRpb25zaGlwIGJldHdlZW4gUHJvZHVjdGlvbkJhdGNoIGFuZCBQcm9kdWN0XHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIElmIHRoZXJlIGFyZSBiYXRjaGVzLCBwcmV2ZW50IGRlbGV0aW9uXHJcbiAgICBpZiAoZXhpc3RpbmdCYXRjaGVzICYmIGV4aXN0aW5nQmF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICBtZXNzYWdlOiBcIk5vIHNlIHB1ZWRlIGVsaW1pbmFyIGVzdGUgcHJvZHVjdG8gcG9ycXVlIHRpZW5lIGxvdGVzIGRlIHByb2R1Y2Npw7NuIGFzb2NpYWRvcy5cIiBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERlbGV0ZSB0aGUgcHJvZHVjdFxyXG4gICAgYXdhaXQgZGIucHJvZHVjdC5kZWxldGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogcHJvZHVjdElkIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2ludmVudG9yeVwiKVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJvZHVjdG8gZWxpbWluYWRvIGNvcnJlY3RhbWVudGVcIiB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHByb2R1Y3Q6XCIsIGVycm9yKVxyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgZm9yZWlnbiBrZXkgY29uc3RyYWludCBlcnJvclxyXG4gICAgaWYgKGVycm9yLmNvZGUgPT09IFwiUDIwMTRcIiB8fCBlcnJvci5jb2RlID09PSBcIlAyMDAzXCIpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiTm8gc2UgcHVlZGUgZWxpbWluYXIgZXN0ZSBwcm9kdWN0byBwb3JxdWUgdGllbmUgZGF0b3MgYXNvY2lhZG9zLlwiIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5vIHNlIHB1ZG8gZWxpbWluYXIgZWwgcHJvZHVjdG9cIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFJBK0NzQiwwTEFBQSJ9
}),
"[project]/app/actions/data:120a1d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProduct",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"404e873b18bcda2faabb28b9c7f3da3f7a80b427fc":"deleteProduct"},"app/actions/inventory.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("404e873b18bcda2faabb28b9c7f3da3f7a80b427fc", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProduct");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW52ZW50b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXHJcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3QoZGF0YToge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHNrdTogc3RyaW5nXHJcbiAgY2F0ZWdvcnk6IFwiUkFXX01BVEVSSUFMXCIgfCBcIkZJTklTSEVEX0dPT0RcIiB8IFwiUEFDS0FHSU5HXCJcclxuICB0eXBlPzogXCJDUklOS0xFX0NVVFwiIHwgXCJTVEVBS0hPVVNFX0NVVFwiIHwgXCJOT1JNQUxfQ1VUXCJcclxuICBsb2NhdGlvbj86IFwiQ1VBUlRPX0ZSSU9fMVwiIHwgXCJDVUFSVE9fRlJJT18yXCIgfCBcIkFMTUFDRU5fR0VORVJBTFwiXHJcbiAgY3VycmVudF9zdG9jazogbnVtYmVyXHJcbiAgdW5pdF9jb3N0PzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWYWxpZGF0ZSBzdG9jayBpcyBub3QgbmVnYXRpdmVcclxuICAgIGlmIChkYXRhLmN1cnJlbnRfc3RvY2sgPCAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yOiBFbCBzdG9jayBubyBwdWVkZSBzZXIgbWVub3IgYSBjZXJvXCIgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEF1dG8tYXNzaWduIEFMTUFDRU5fR0VORVJBTCBmb3IgUEFDS0FHSU5HIChJbnN1bW9zKVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkYXRhLmNhdGVnb3J5ID09PSBcIlBBQ0tBR0lOR1wiID8gXCJBTE1BQ0VOX0dFTkVSQUxcIiA6IChkYXRhLmxvY2F0aW9uIHx8IG51bGwpXHJcblxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGRiLnByb2R1Y3QuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBza3U6IGRhdGEuc2t1LFxyXG4gICAgICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgICAgIHR5cGU6IGRhdGEudHlwZSB8fCBcIk5PUk1BTF9DVVRcIixcclxuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXHJcbiAgICAgICAgY3VycmVudF9zdG9jazogZGF0YS5jdXJyZW50X3N0b2NrLFxyXG4gICAgICAgIHVuaXRfY29zdDogZGF0YS51bml0X2Nvc3QgfHwgbnVsbCxcclxuICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlciB8fCBudWxsLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9pbnZlbnRvcnlcIilcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKVxyXG4gICAgXHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBwcm9kdWN0LCBtZXNzYWdlOiBcIlByb2R1Y3RvIGd1YXJkYWRvIGV4aXRvc2FtZW50ZVwiIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHByb2R1Y3Q6XCIsIGVycm9yKVxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiTm8gc2UgcHVkbyBndWFyZGFyIGVsIHByb2R1Y3RvXCIgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3QoZGF0YToge1xyXG4gIGlkOiBzdHJpbmdcclxuICBuYW1lOiBzdHJpbmdcclxuICBza3U6IHN0cmluZ1xyXG4gIGNhdGVnb3J5OiBcIlJBV19NQVRFUklBTFwiIHwgXCJGSU5JU0hFRF9HT09EXCIgfCBcIlBBQ0tBR0lOR1wiXHJcbiAgdHlwZTogXCJDUklOS0xFX0NVVFwiIHwgXCJTVEVBS0hPVVNFX0NVVFwiIHwgXCJOT1JNQUxfQ1VUXCJcclxuICBsb2NhdGlvbj86IFwiQ1VBUlRPX0ZSSU9fMVwiIHwgXCJDVUFSVE9fRlJJT18yXCIgfCBcIkFMTUFDRU5fR0VORVJBTFwiXHJcbiAgY3VycmVudF9zdG9jazogbnVtYmVyXHJcbiAgdW5pdF9jb3N0PzogbnVtYmVyXHJcbiAgcHJvdmlkZXI/OiBzdHJpbmdcclxufSkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBWYWxpZGF0ZSBzdG9jayBpcyBub3QgbmVnYXRpdmVcclxuICAgIGlmIChkYXRhLmN1cnJlbnRfc3RvY2sgPCAwKSB7XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkVycm9yOiBFbCBzdG9jayBubyBwdWVkZSBzZXIgbWVub3IgYSBjZXJvXCIgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBkYi5wcm9kdWN0LnVwZGF0ZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiBkYXRhLmlkIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgc2t1OiBkYXRhLnNrdSxcclxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcclxuICAgICAgICB0eXBlOiBkYXRhLnR5cGUsXHJcbiAgICAgICAgbG9jYXRpb246IGRhdGEubG9jYXRpb24gfHwgbnVsbCxcclxuICAgICAgICBjdXJyZW50X3N0b2NrOiBkYXRhLmN1cnJlbnRfc3RvY2ssXHJcbiAgICAgICAgdW5pdF9jb3N0OiBkYXRhLnVuaXRfY29zdCB8fCBudWxsLFxyXG4gICAgICAgIHByb3ZpZGVyOiBkYXRhLnByb3ZpZGVyIHx8IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2ludmVudG9yeVwiKVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHByb2R1Y3QsIG1lc3NhZ2U6IFwiUHJvZHVjdG8gYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZVwiIH1cclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcHJvZHVjdDpcIiwgZXJyb3IpXHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSB1bmlxdWUgY29uc3RyYWludCBlcnJvciBmb3IgU0tVXHJcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gXCJQMjAwMlwiICYmIGVycm9yLm1ldGE/LnRhcmdldD8uaW5jbHVkZXMoXCJza3VcIikpIHtcclxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRWwgU0tVIHlhIGV4aXN0ZS4gUG9yIGZhdm9yLCB1c2EgdW5vIGRpZmVyZW50ZS5cIiB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5vIHNlIHB1ZG8gYWN0dWFsaXphciBlbCBwcm9kdWN0b1wiIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9kdWN0KHByb2R1Y3RJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIENoZWNrIGlmIHByb2R1Y3QgaGFzIGFueSBhc3NvY2lhdGVkIHByb2R1Y3Rpb24gYmF0Y2hlc1xyXG4gICAgY29uc3QgZXhpc3RpbmdCYXRjaGVzID0gYXdhaXQgZGIucHJvZHVjdGlvbkJhdGNoLmZpbmRNYW55KHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICAvLyBEZXBlbmRpbmcgb24geW91ciBzY2hlbWEsIHlvdSBtYXkgbmVlZCB0byBhZGp1c3QgdGhpcyBxdWVyeVxyXG4gICAgICAgIC8vIFRoaXMgYXNzdW1lcyB0aGVyZSdzIGEgcmVsYXRpb25zaGlwIGJldHdlZW4gUHJvZHVjdGlvbkJhdGNoIGFuZCBQcm9kdWN0XHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIElmIHRoZXJlIGFyZSBiYXRjaGVzLCBwcmV2ZW50IGRlbGV0aW9uXHJcbiAgICBpZiAoZXhpc3RpbmdCYXRjaGVzICYmIGV4aXN0aW5nQmF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB7IFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLCBcclxuICAgICAgICBtZXNzYWdlOiBcIk5vIHNlIHB1ZWRlIGVsaW1pbmFyIGVzdGUgcHJvZHVjdG8gcG9ycXVlIHRpZW5lIGxvdGVzIGRlIHByb2R1Y2Npw7NuIGFzb2NpYWRvcy5cIiBcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERlbGV0ZSB0aGUgcHJvZHVjdFxyXG4gICAgYXdhaXQgZGIucHJvZHVjdC5kZWxldGUoe1xyXG4gICAgICB3aGVyZTogeyBpZDogcHJvZHVjdElkIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2ludmVudG9yeVwiKVxyXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpXHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiUHJvZHVjdG8gZWxpbWluYWRvIGNvcnJlY3RhbWVudGVcIiB9XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHByb2R1Y3Q6XCIsIGVycm9yKVxyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgZm9yZWlnbiBrZXkgY29uc3RyYWludCBlcnJvclxyXG4gICAgaWYgKGVycm9yLmNvZGUgPT09IFwiUDIwMTRcIiB8fCBlcnJvci5jb2RlID09PSBcIlAyMDAzXCIpIHtcclxuICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgc3VjY2VzczogZmFsc2UsIFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiTm8gc2UgcHVlZGUgZWxpbWluYXIgZXN0ZSBwcm9kdWN0byBwb3JxdWUgdGllbmUgZGF0b3MgYXNvY2lhZG9zLlwiIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk5vIHNlIHB1ZG8gZWxpbWluYXIgZWwgcHJvZHVjdG9cIiB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiMFJBOEZzQiwwTEFBQSJ9
}),
"[project]/app/inventory/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InventoryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$2800f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:2800f4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$1adf95__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:1adf95 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$120a1d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:120a1d [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const TABS = [
    {
        id: "PACKAGING",
        label: "Insumos",
        description: "Aceite, sal y empaques"
    },
    {
        id: "RAW_MATERIAL",
        label: "Materia Prima",
        description: "Papas crudas y materiales"
    },
    {
        id: "FINISHED_GOOD",
        label: "Producto Terminado",
        description: "Productos listos para vender"
    }
];
function InventoryPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("PACKAGING");
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSheetOpen, setIsSheetOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditSheetOpen, setIsEditSheetOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [productToDelete, setProductToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        sku: "",
        category: "",
        type: "NORMAL_CUT",
        location: "",
        current_stock: "",
        unit_cost: "",
        provider: ""
    });
    const [editFormData, setEditFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "",
        sku: "",
        category: "",
        type: "NORMAL_CUT",
        location: "",
        current_stock: "",
        unit_cost: "",
        provider: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InventoryPage.useEffect": ()=>{
            fetchProducts();
        }
    }["InventoryPage.useEffect"], []);
    const fetchProducts = async ()=>{
        try {
            setIsLoading(true);
            const response = await fetch("/api/inventory");
            if (response.ok) {
                const data = await response.json();
                setProducts(data.products || []);
            }
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally{
            setIsLoading(false);
        }
    };
    const filteredProducts = products.filter((p)=>p.category === activeTab);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!formData.name || !formData.sku || !formData.category || !formData.current_stock) {
            alert("Por favor, completa todos los campos requeridos");
            return;
        }
        try {
            setIsSubmitting(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$2800f4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProduct"])({
                name: formData.name,
                sku: formData.sku,
                category: formData.category,
                type: formData.type,
                location: formData.location || undefined,
                current_stock: parseInt(formData.current_stock),
                unit_cost: formData.unit_cost ? parseFloat(formData.unit_cost) : undefined,
                provider: formData.provider || undefined
            });
            if (result.success) {
                setFormData({
                    name: "",
                    sku: "",
                    category: "",
                    type: "NORMAL_CUT",
                    location: "",
                    current_stock: "",
                    unit_cost: "",
                    provider: ""
                });
                setIsSheetOpen(false);
                fetchProducts();
                alert(result.message);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error al crear el producto");
        } finally{
            setIsSubmitting(false);
        }
    };
    const openEditSheet = (product)=>{
        setEditFormData({
            id: product.id,
            name: product.name,
            sku: product.sku,
            category: product.category,
            type: product.type,
            location: product.location || "",
            current_stock: product.current_stock.toString(),
            unit_cost: product.unit_cost?.toString() || "",
            provider: product.provider || ""
        });
        setIsEditSheetOpen(true);
    };
    const handleEditSubmit = async (e)=>{
        e.preventDefault();
        if (!editFormData.name || !editFormData.sku || !editFormData.category || !editFormData.current_stock) {
            alert("Por favor, completa todos los campos requeridos");
            return;
        }
        try {
            setIsSubmitting(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$1adf95__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProduct"])({
                id: editFormData.id,
                name: editFormData.name,
                sku: editFormData.sku,
                category: editFormData.category,
                type: editFormData.type,
                location: editFormData.location || undefined,
                current_stock: parseInt(editFormData.current_stock),
                unit_cost: editFormData.unit_cost ? parseFloat(editFormData.unit_cost) : undefined,
                provider: editFormData.provider || undefined
            });
            if (result.success) {
                setEditFormData({
                    id: "",
                    name: "",
                    sku: "",
                    category: "",
                    type: "NORMAL_CUT",
                    location: "",
                    current_stock: "",
                    unit_cost: "",
                    provider: ""
                });
                setIsEditSheetOpen(false);
                fetchProducts();
                alert(result.message);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error al actualizar el producto");
        } finally{
            setIsSubmitting(false);
        }
    };
    const openDeleteAlert = (product)=>{
        setProductToDelete(product);
        setIsDeleteAlertOpen(true);
    };
    const handleConfirmDelete = async ()=>{
        if (!productToDelete) return;
        try {
            setIsSubmitting(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$120a1d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProduct"])(productToDelete.id);
            if (result.success) {
                setIsDeleteAlertOpen(false);
                setProductToDelete(null);
                fetchProducts();
                alert(result.message);
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error al eliminar el producto");
        } finally{
            setIsSubmitting(false);
        }
    };
    const getFriesTypeLabel = (type)=>{
        switch(type){
            case "CRINKLE_CUT":
                return "Corte Ondulado";
            case "STEAKHOUSE_CUT":
                return "Corte Steakhouse";
            case "NORMAL_CUT":
                return "Corte Normal";
            default:
                return type;
        }
    };
    const getFriesTypeColor = (type)=>{
        switch(type){
            case "CRINKLE_CUT":
                return "bg-purple-500/20 text-purple-400 border-purple-500/30";
            case "STEAKHOUSE_CUT":
                return "bg-pink-500/20 text-pink-400 border-pink-500/30";
            case "NORMAL_CUT":
                return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
            default:
                return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
        }
    };
    const getLocationLabel = (location)=>{
        switch(location){
            case "CUARTO_FRIO_1":
                return "Cuarto Frío 1";
            case "CUARTO_FRIO_2":
                return "Cuarto Frío 2";
            case "ALMACEN_GENERAL":
                return "Almacén General";
            default:
                return "Sin ubicación";
        }
    };
    const getLocationColor = (location)=>{
        switch(location){
            case "CUARTO_FRIO_1":
                return "bg-blue-500/20 text-blue-400 border-blue-500/30";
            case "CUARTO_FRIO_2":
                return "bg-indigo-500/20 text-indigo-400 border-indigo-500/30";
            case "ALMACEN_GENERAL":
                return "bg-orange-500/20 text-orange-400 border-orange-500/30";
            default:
                return "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen p-4 sm:p-6 lg:p-8 bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.push("/"),
                className: "mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300",
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/app/inventory/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-sm",
                        children: "Volver al Panel"
                    }, void 0, false, {
                        fileName: "[project]/app/inventory/page.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/inventory/page.tsx",
                lineNumber: 289,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 lg:mb-10 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 lg:mb-3 flex items-center gap-3 tracking-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-blue-500/20 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                            className: "w-7 sm:w-8 lg:w-9 h-7 sm:h-8 lg:h-9 text-blue-400",
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/inventory/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    "Gestión de Inventario"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base lg:text-lg text-slate-400 font-medium",
                                children: "Administra productos separados por categoría"
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/inventory/page.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                        open: isSheetOpen,
                        onOpenChange: setIsSheetOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-lg hover:shadow-blue-500/30 text-white w-full lg:w-auto min-h-[48px] rounded-lg transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-5 h-5 mr-2",
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        "Agregar Producto"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                className: "bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 w-full sm:max-w-md shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                        className: "mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                className: "text-white text-2xl font-bold",
                                                children: "Agregar Nuevo Producto"
                                            }, void 0, false, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                                className: "text-slate-400 font-medium",
                                                children: "Crea un nuevo producto en tu inventario"
                                            }, void 0, false, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/inventory/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-5 mt-8 max-h-[calc(100vh-150px)] overflow-y-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "name",
                                                        className: "text-slate-300 text-sm font-semibold",
                                                        children: "Nombre del Producto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "name",
                                                        placeholder: "Ej: Papas Fritas",
                                                        value: formData.name,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                name: e.target.value
                                                            }),
                                                        className: "input-modern"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "sku",
                                                        className: "text-slate-300 text-sm font-semibold",
                                                        children: "SKU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "sku",
                                                        placeholder: "Ej: POT-001",
                                                        value: formData.sku,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                sku: e.target.value
                                                            }),
                                                        className: "input-modern"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "category",
                                                        className: "text-slate-300 text-sm font-semibold",
                                                        children: "Categoría"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: formData.category,
                                                        onValueChange: (value)=>setFormData({
                                                                ...formData,
                                                                category: value,
                                                                location: value === "PACKAGING" ? "ALMACEN_GENERAL" : ""
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                className: "input-modern",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "Selecciona una categoría"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 355,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                className: "bg-slate-800/90 border-slate-700/50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "PACKAGING",
                                                                        className: "text-white",
                                                                        children: "Insumos"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "RAW_MATERIAL",
                                                                        className: "text-white",
                                                                        children: "Materia Prima"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 359,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "FINISHED_GOOD",
                                                                        className: "text-white",
                                                                        children: "Producto Terminado"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 360,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 15
                                            }, this),
                                            (formData.category === "RAW_MATERIAL" || formData.category === "FINISHED_GOOD") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "type",
                                                        className: "text-slate-300 text-sm font-semibold",
                                                        children: formData.category === "RAW_MATERIAL" ? "Variedad" : "Tipo de Corte"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: formData.type,
                                                        onValueChange: (value)=>setFormData({
                                                                ...formData,
                                                                type: value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                className: "input-modern",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: formData.category === "RAW_MATERIAL" ? "Selecciona variedad" : "Selecciona tipo de corte"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 373,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 372,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                className: "bg-slate-800/90 border-slate-700/50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "CRINKLE_CUT",
                                                                        className: "text-white",
                                                                        children: "Corte Ondulado"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "STEAKHOUSE_CUT",
                                                                        className: "text-white",
                                                                        children: "Corte Steakhouse"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 377,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "NORMAL_CUT",
                                                                        className: "text-white",
                                                                        children: "Corte Normal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 378,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 375,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this),
                                            formData.category === "FINISHED_GOOD" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "location",
                                                        className: "text-slate-300 text-sm font-semibold",
                                                        children: "Ubicación (Cuarto Frío)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                        value: formData.location,
                                                        onValueChange: (value)=>setFormData({
                                                                ...formData,
                                                                location: value
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                className: "input-modern",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                    placeholder: "Selecciona cuarto frío"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                className: "bg-slate-800/90 border-slate-700/50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "CUARTO_FRIO_1",
                                                                        className: "text-white",
                                                                        children: "Cuarto Frío 1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 395,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                        value: "CUARTO_FRIO_2",
                                                                        className: "text-white",
                                                                        children: "Cuarto Frío 2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 396,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 394,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "stock",
                                                        className: "text-slate-300 text-sm font-semibold",
                                                        children: [
                                                            "Existencias ",
                                                            formData.category === "RAW_MATERIAL" ? "(KG)" : "(kg)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "stock",
                                                        type: "number",
                                                        placeholder: "0",
                                                        min: "0",
                                                        value: formData.current_stock,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                current_stock: e.target.value
                                                            }),
                                                        className: "input-modern"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this),
                                            formData.category === "PACKAGING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "unitCost",
                                                        className: "text-slate-300 text-sm font-semibold",
                                                        children: "Costo Unitario"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "unitCost",
                                                        type: "number",
                                                        placeholder: "0.00",
                                                        min: "0",
                                                        step: "0.01",
                                                        value: formData.unit_cost,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                unit_cost: e.target.value
                                                            }),
                                                        className: "input-modern"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 419,
                                                columnNumber: 17
                                            }, this),
                                            formData.category === "PACKAGING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "provider",
                                                        className: "text-slate-300 text-sm font-semibold",
                                                        children: "Proveedor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        id: "provider",
                                                        placeholder: "Ej: Proveedor A",
                                                        value: formData.provider,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                provider: e.target.value
                                                            }),
                                                        className: "input-modern"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                className: "w-full btn-primary h-12",
                                                children: isSubmitting ? "Guardando..." : "Crear Producto"
                                            }, void 0, false, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/inventory/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/inventory/page.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/inventory/page.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                open: isEditSheetOpen,
                onOpenChange: setIsEditSheetOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                    className: "bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 w-full sm:max-w-md shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                            className: "mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                    className: "text-white text-2xl font-bold",
                                    children: "Editar Producto"
                                }, void 0, false, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                    className: "text-slate-400 font-medium",
                                    children: "Actualiza los detalles del producto"
                                }, void 0, false, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/inventory/page.tsx",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleEditSubmit,
                            className: "space-y-5 mt-8 max-h-[calc(100vh-150px)] overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "edit-name",
                                            className: "text-slate-300 text-sm font-semibold",
                                            children: "Nombre del Producto"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "edit-name",
                                            placeholder: "Ej: Papas Fritas",
                                            value: editFormData.name,
                                            onChange: (e)=>setEditFormData({
                                                    ...editFormData,
                                                    name: e.target.value
                                                }),
                                            className: "input-modern"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 478,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 474,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "edit-sku",
                                            className: "text-slate-300 text-sm font-semibold",
                                            children: "SKU"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 488,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "edit-sku",
                                            placeholder: "Ej: POT-001",
                                            value: editFormData.sku,
                                            onChange: (e)=>setEditFormData({
                                                    ...editFormData,
                                                    sku: e.target.value
                                                }),
                                            className: "input-modern"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "edit-category",
                                            className: "text-slate-300 text-sm font-semibold",
                                            children: "Categoría"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 501,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: editFormData.category,
                                            onValueChange: (value)=>setEditFormData({
                                                    ...editFormData,
                                                    category: value,
                                                    location: value === "PACKAGING" ? "ALMACEN_GENERAL" : editFormData.location
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "input-modern",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "Selecciona una categoría"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/inventory/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    className: "bg-slate-800/90 border-slate-700/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "PACKAGING",
                                                            className: "text-white",
                                                            children: "Insumos"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "RAW_MATERIAL",
                                                            className: "text-white",
                                                            children: "Materia Prima"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "FINISHED_GOOD",
                                                            className: "text-white",
                                                            children: "Producto Terminado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/inventory/page.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 504,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 13
                                }, this),
                                (editFormData.category === "RAW_MATERIAL" || editFormData.category === "FINISHED_GOOD") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "edit-type",
                                            className: "text-slate-300 text-sm font-semibold",
                                            children: editFormData.category === "RAW_MATERIAL" ? "Variedad" : "Tipo de Corte"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: editFormData.type,
                                            onValueChange: (value)=>setEditFormData({
                                                    ...editFormData,
                                                    type: value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "input-modern",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: editFormData.category === "RAW_MATERIAL" ? "Selecciona variedad" : "Selecciona tipo de corte"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/inventory/page.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    className: "bg-slate-800/90 border-slate-700/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "CRINKLE_CUT",
                                                            className: "text-white",
                                                            children: "Corte Ondulado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "STEAKHOUSE_CUT",
                                                            className: "text-white",
                                                            children: "Corte Steakhouse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "NORMAL_CUT",
                                                            className: "text-white",
                                                            children: "Corte Normal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/inventory/page.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 522,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 518,
                                    columnNumber: 15
                                }, this),
                                editFormData.category === "FINISHED_GOOD" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "edit-location",
                                            className: "text-slate-300 text-sm font-semibold",
                                            children: "Ubicación (Cuarto Frío)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                            value: editFormData.location,
                                            onValueChange: (value)=>setEditFormData({
                                                    ...editFormData,
                                                    location: value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                    className: "input-modern",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                        placeholder: "Selecciona cuarto frío"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/inventory/page.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                    className: "bg-slate-800/90 border-slate-700/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "CUARTO_FRIO_1",
                                                            className: "text-white",
                                                            children: "Cuarto Frío 1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 546,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                            value: "CUARTO_FRIO_2",
                                                            className: "text-white",
                                                            children: "Cuarto Frío 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 547,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/inventory/page.tsx",
                                                    lineNumber: 545,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 537,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "edit-stock",
                                            className: "text-slate-300 text-sm font-semibold",
                                            children: [
                                                "Existencias ",
                                                editFormData.category === "RAW_MATERIAL" ? "(KG)" : "(kg)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "edit-stock",
                                            type: "number",
                                            placeholder: "0",
                                            min: "0",
                                            value: editFormData.current_stock,
                                            onChange: (e)=>setEditFormData({
                                                    ...editFormData,
                                                    current_stock: e.target.value
                                                }),
                                            className: "input-modern"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 557,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this),
                                editFormData.category === "PACKAGING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "edit-unitCost",
                                            className: "text-slate-300 text-sm font-semibold",
                                            children: "Costo Unitario"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "edit-unitCost",
                                            type: "number",
                                            placeholder: "0.00",
                                            min: "0",
                                            step: "0.01",
                                            value: editFormData.unit_cost,
                                            onChange: (e)=>setEditFormData({
                                                    ...editFormData,
                                                    unit_cost: e.target.value
                                                }),
                                            className: "input-modern"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 574,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 15
                                }, this),
                                editFormData.category === "PACKAGING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "edit-provider",
                                            className: "text-slate-300 text-sm font-semibold",
                                            children: "Proveedor"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 590,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "edit-provider",
                                            placeholder: "Ej: Proveedor A",
                                            value: editFormData.provider,
                                            onChange: (e)=>setEditFormData({
                                                    ...editFormData,
                                                    provider: e.target.value
                                                }),
                                            className: "input-modern"
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 593,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 589,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    className: "w-full btn-primary h-12",
                                    children: isSubmitting ? "Guardando..." : "Actualizar Producto"
                                }, void 0, false, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/inventory/page.tsx",
                            lineNumber: 473,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/inventory/page.tsx",
                    lineNumber: 466,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/inventory/page.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
                open: isDeleteAlertOpen,
                onOpenChange: setIsDeleteAlertOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
                    className: "bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700/50 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                                    className: "text-white text-xl font-bold",
                                    children: "¿Estás seguro?"
                                }, void 0, false, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                                    className: "text-slate-400 font-medium",
                                    children: "Esta acción es irreversible. Se eliminará permanentemente el producto de la base de datos."
                                }, void 0, false, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 619,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/inventory/page.tsx",
                            lineNumber: 617,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                                    className: "glass-card text-slate-300 border-slate-700/50 hover:bg-slate-800/50 font-medium",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 624,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                                    onClick: handleConfirmDelete,
                                    disabled: isSubmitting,
                                    className: "bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-lg hover:shadow-red-500/30 font-medium disabled:opacity-50 transition-all duration-300",
                                    children: isSubmitting ? "Eliminando..." : "Eliminar"
                                }, void 0, false, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 627,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/inventory/page.tsx",
                            lineNumber: 623,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/inventory/page.tsx",
                    lineNumber: 616,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/inventory/page.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-card-premium w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6 lg:p-8 border-b border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2 overflow-x-auto",
                                children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(tab.id),
                                        className: `px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${activeTab === tab.id ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30" : "text-slate-400 hover:text-slate-200 hover:bg-blue-500/10 border border-blue-500/20"}`,
                                        children: tab.label
                                    }, tab.id, false, {
                                        fileName: "[project]/app/inventory/page.tsx",
                                        lineNumber: 644,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 642,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-slate-500 mt-3",
                                children: TABS.find((t)=>t.id === activeTab)?.description
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 657,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/inventory/page.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6 lg:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-14 w-full bg-slate-800/50 rounded-lg"
                                }, i, false, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 667,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/inventory/page.tsx",
                            lineNumber: 665,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/inventory/page.tsx",
                        lineNumber: 664,
                        columnNumber: 11
                    }, this) : filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 glass-card rounded-2xl flex items-center justify-center mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    className: "w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-slate-500",
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 674,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 673,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3",
                                children: "Sin Productos"
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 676,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base lg:text-lg text-slate-400 text-center mb-8 max-w-md font-medium",
                                children: "No hay productos en esta categoría. Crea uno nuevo para comenzar."
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 677,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/inventory/page.tsx",
                        lineNumber: 672,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block overflow-x-auto w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                className: "border-white/10 hover:bg-transparent",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "text-slate-300 text-xs lg:text-sm font-semibold",
                                                        children: "Nombre"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 21
                                                    }, this),
                                                    activeTab === "PACKAGING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "text-slate-300 text-xs lg:text-sm font-semibold",
                                                                children: "Proveedor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 691,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "text-right text-slate-300 text-xs lg:text-sm font-semibold",
                                                                children: "Costo Unitario"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    activeTab === "RAW_MATERIAL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "text-slate-300 text-xs lg:text-sm font-semibold",
                                                                children: "Tipo de Corte"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 697,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "text-right text-slate-300 text-xs lg:text-sm font-semibold",
                                                                children: "Stock (kg)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    activeTab === "FINISHED_GOOD" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "text-slate-300 text-xs lg:text-sm font-semibold",
                                                                children: "SKU"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 703,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                                className: "text-slate-300 text-xs lg:text-sm font-semibold",
                                                                children: "Cuarto Frío"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 704,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                        className: "text-slate-300 text-xs lg:text-sm font-semibold",
                                                        children: "Acciones"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 687,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 686,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                            children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                                    className: "border-white/5 hover:bg-blue-500/5 transition-colors duration-200 table-row-hover",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: "text-white font-medium text-xs lg:text-sm",
                                                            children: product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 713,
                                                            columnNumber: 23
                                                        }, this),
                                                        activeTab === "PACKAGING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-slate-300 text-xs lg:text-sm",
                                                                    children: product.provider || "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 716,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-right text-blue-400 font-semibold text-xs lg:text-sm",
                                                                    children: [
                                                                        "$",
                                                                        product.unit_cost?.toFixed(2) || "0.00"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 717,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        activeTab === "RAW_MATERIAL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-xs lg:text-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        className: `${getFriesTypeColor(product.type)} border text-xs font-medium`,
                                                                        children: getFriesTypeLabel(product.type)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 724,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-right text-blue-400 font-bold text-xs lg:text-sm",
                                                                    children: [
                                                                        product.current_stock,
                                                                        " kg"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 729,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        activeTab === "FINISHED_GOOD" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "font-mono text-slate-300 text-xs lg:text-sm",
                                                                    children: product.sku
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 736,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                                    className: "text-xs lg:text-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        className: `${getLocationColor(product.location)} border text-xs font-medium`,
                                                                        children: getLocationLabel(product.location)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 738,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 737,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                            className: "text-xs lg:text-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>openEditSheet(product),
                                                                        className: "p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200 min-h-[40px] min-w-[40px] flex items-center justify-center",
                                                                        title: "Editar producto",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                            className: "w-4 h-4",
                                                                            strokeWidth: 2.5
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/inventory/page.tsx",
                                                                            lineNumber: 751,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 746,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>openDeleteAlert(product),
                                                                        className: "p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 min-h-[40px] min-w-[40px] flex items-center justify-center",
                                                                        title: "Eliminar producto",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                            className: "w-4 h-4",
                                                                            strokeWidth: 2.5
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/inventory/page.tsx",
                                                                            lineNumber: 758,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 753,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 745,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 744,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, product.id, true, {
                                                    fileName: "[project]/app/inventory/page.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/inventory/page.tsx",
                                            lineNumber: 710,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/inventory/page.tsx",
                                    lineNumber: 685,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 684,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden p-3 sm:p-4 lg:p-6 space-y-4 w-full",
                                children: filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-card p-4 sm:p-5 space-y-4 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start gap-2 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-white text-base sm:text-lg truncate",
                                                            children: product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/inventory/page.tsx",
                                                            lineNumber: 774,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 flex-shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openEditSheet(product),
                                                                className: "p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center",
                                                                title: "Editar producto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 782,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 777,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>openDeleteAlert(product),
                                                                className: "p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center",
                                                                title: "Eliminar producto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/inventory/page.tsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 784,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/inventory/page.tsx",
                                                        lineNumber: 776,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 772,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2 text-xs",
                                                children: [
                                                    activeTab === "PACKAGING" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-zinc-400",
                                                                        children: "Proveedor"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 798,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-white font-semibold mt-1",
                                                                        children: product.provider || "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 799,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 797,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-zinc-400",
                                                                        children: "Costo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 802,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-blue-400 font-bold mt-1",
                                                                        children: [
                                                                            "$",
                                                                            product.unit_cost?.toFixed(2) || "0.00"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 803,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    activeTab === "RAW_MATERIAL" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-zinc-400",
                                                                        children: "Tipo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 810,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        className: `${getFriesTypeColor(product.type)} border text-xs mt-1`,
                                                                        children: getFriesTypeLabel(product.type)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 811,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 809,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-zinc-400",
                                                                        children: "Stock"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 816,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-blue-400 font-bold mt-1",
                                                                        children: [
                                                                            product.current_stock,
                                                                            " kg"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 817,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 815,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true),
                                                    activeTab === "FINISHED_GOOD" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-zinc-400",
                                                                        children: "SKU"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 824,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-white font-mono text-sm mt-1",
                                                                        children: product.sku
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 825,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 823,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-zinc-400",
                                                                        children: "Cuarto Frío"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 828,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        className: `${getLocationColor(product.location)} border text-xs mt-1`,
                                                                        children: getLocationLabel(product.location)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/inventory/page.tsx",
                                                                        lineNumber: 829,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/inventory/page.tsx",
                                                                lineNumber: 827,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/inventory/page.tsx",
                                                lineNumber: 794,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, product.id, true, {
                                        fileName: "[project]/app/inventory/page.tsx",
                                        lineNumber: 771,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/inventory/page.tsx",
                                lineNumber: 769,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/inventory/page.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/inventory/page.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
_s(InventoryPage, "rlWF8affjm+RjZLzDuJoGIB8WVg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = InventoryPage;
var _c;
__turbopack_context__.k.register(_c, "InventoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d97ae499._.js.map