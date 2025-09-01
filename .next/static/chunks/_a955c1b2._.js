(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Components/apicall.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ApiCall
});
async function ApiCall() {
    const response = await fetch('https://fakestoreapi.com/products', {
        method: "GET"
    });
    const products = await response.json();
    return products;
}
_c = ApiCall;
var _c;
__turbopack_context__.k.register(_c, "ApiCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/Product/[id]/layout.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ProductLayout,
    "generatemetadata": ()=>generatemetadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$apicall$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Components/apicall.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const generatemetadata = {
    title: "Product Page",
    description: "Product Description Page"
};
function ProductLayout(param) {
    let { children } = param;
    _s();
    const [products_1, setproducts_1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const ref_Container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fetching = async ()=>{
        const fetched_products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$apicall$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
        setproducts_1(fetched_products);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductLayout.useEffect": ()=>{
            fetching();
        }
    }["ProductLayout.useEffect"], []);
    const handleleftScroll = ()=>{
        var _ref_Container_current;
        (_ref_Container_current = ref_Container.current) === null || _ref_Container_current === void 0 ? void 0 : _ref_Container_current.scrollBy({
            left: -ref_Container.current.clientWidth,
            behaviour: "smooth"
        });
    };
    const handleRightScroll = ()=>{
        var _ref_Container_current;
        (_ref_Container_current = ref_Container.current) === null || _ref_Container_current === void 0 ? void 0 : _ref_Container_current.scrollBy({
            left: ref_Container.current.clientWidth,
            behaviour: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " relative w-[95%] h-[50vh] bg-red-900 m-auto my-5 pt-2 box-border text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold mb-5 ml-5",
                        children: "All Products : "
                    }, void 0, false, {
                        fileName: "[project]/app/Product/[id]/layout.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleleftScroll,
                        className: "w-[2.5vw] h-[15vh] bg-gray-600 rounded-r-md absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer",
                        children: "<"
                    }, void 0, false, {
                        fileName: "[project]/app/Product/[id]/layout.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ref_Container,
                        className: " w-[100%] h-[40vh] pl-2 box-border grid gap-5 grid-flow-col auto-cols-[22.5vw] overflow-hidden overflow-x-auto scroll-smooth snap-align-center",
                        children: products_1.map((pro)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/Product/".concat(pro.id),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-[100%] h-[33vh] snap-mandatory hover:scale-102",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "w-full h-[80%] object-contain",
                                            src: pro.image,
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/layout.jsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "line-clamp-1 text-center mt-7",
                                            children: pro.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/Product/[id]/layout.jsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-center",
                                            children: [
                                                "Rs . ",
                                                pro.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Product/[id]/layout.jsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Product/[id]/layout.jsx",
                                    lineNumber: 44,
                                    columnNumber: 62
                                }, this)
                            }, pro.id, false, {
                                fileName: "[project]/app/Product/[id]/layout.jsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/Product/[id]/layout.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: handleRightScroll,
                        className: "w-[2.5vw] h-[15vh] bg-gray-600 rounded-l-md absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer",
                        children: ">"
                    }, void 0, false, {
                        fileName: "[project]/app/Product/[id]/layout.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Product/[id]/layout.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProductLayout, "t0YKz2xgtcBNznJVAGHHFBUmswQ=");
_c = ProductLayout;
var _c;
__turbopack_context__.k.register(_c, "ProductLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_a955c1b2._.js.map