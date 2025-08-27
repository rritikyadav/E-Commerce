module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Components/apicall.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ApiCall
});
async function ApiCall() {
    const response = await fetch('https://fakestoreapi.com/products?limit=60', {
        method: "GET"
    });
    const products = await response.json();
    console.log(products);
    return products;
}
}),
"[project]/Components/categoryCard.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CategoryCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$apicall$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Components/apicall.jsx [app-rsc] (ecmascript)");
;
;
async function CategoryCard(props) {
    const products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$apicall$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[98vw] h-[35vh] m-auto mt-[5vh] bg-white overflow-hidden grid gap-1 items-center grid-cols-1 lg:grid-cols-4 xl:grid-cols-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-6 text-xl ml-2 mb-4 mt-2 capitalize",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: props.category
                }, void 0, false, {
                    fileName: "[project]/Components/categoryCard.jsx",
                    lineNumber: 8,
                    columnNumber: 75
                }, this)
            }, void 0, false, {
                fileName: "[project]/Components/categoryCard.jsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            products.filter((product)=>product.category === props.category).map((product)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " w-[100%] h-[28vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "w-full h-[60%] object-contain mb-5",
                            src: product.image,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/Components/categoryCard.jsx",
                            lineNumber: 14,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "w-full h-[10%] text-center line-clamp-1",
                            children: product.title
                        }, void 0, false, {
                            fileName: "[project]/Components/categoryCard.jsx",
                            lineNumber: 15,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center",
                            children: [
                                "RS.",
                                product.price
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Components/categoryCard.jsx",
                            lineNumber: 16,
                            columnNumber: 25
                        }, this)
                    ]
                }, product.id, true, {
                    fileName: "[project]/Components/categoryCard.jsx",
                    lineNumber: 13,
                    columnNumber: 21
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/Components/categoryCard.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/app/page.jsx'\n\nExpected 'from', got 'export'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}}),
"[project]/app/page.jsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7e81c510._.js.map