(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/Components/slider.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Slider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SliderBoxes = [
    {
        id: "1",
        class: "bg-men",
        title: "Shop in Men's Clothing",
        line: "₹ 10.95/- onwards",
        link: "men's clothing"
    },
    {
        id: "2",
        class: "bg-jewelery",
        title: "Biggest Sale on Jeweleries",
        line: "Up To 50% Off",
        link: "jewelery"
    },
    {
        id: "3",
        class: "bg-women",
        title: "Shop in Women's Clothing",
        line: "₹ 20.95/- onwards",
        link: "women's clothing"
    },
    {
        id: "4",
        class: "bg-electronics",
        title: "Grab Your Devices Now",
        line: "From ₹ 50.95/- only",
        link: "electronics"
    }
];
function Slider() {
    _s();
    const scroll_Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleLeftScroll = ()=>{
        var _scroll_Ref_current;
        (_scroll_Ref_current = scroll_Ref.current) === null || _scroll_Ref_current === void 0 ? void 0 : _scroll_Ref_current.scrollBy({
            left: -window.innerWidth,
            behavior: "smooth"
        });
    };
    const handleRightScroll = ()=>{
        var _scroll_Ref_current;
        (_scroll_Ref_current = scroll_Ref.current) === null || _scroll_Ref_current === void 0 ? void 0 : _scroll_Ref_current.scrollBy({
            left: window.innerWidth,
            behavior: "smooth"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider.useEffect": ()=>{
            const interval = setInterval({
                "Slider.useEffect.interval": ()=>{
                    if (scroll_Ref.current) {
                        const maxScroll = scroll_Ref.current.scrollWidth - scroll_Ref.current.clientWidth;
                        if (scroll_Ref.current.scrollLeft >= maxScroll) {
                            scroll_Ref.current.scrollTo({
                                left: 0,
                                behavior: "smooth"
                            });
                        } else {
                            handleRightScroll();
                        }
                    }
                }
            }["Slider.useEffect.interval"], 4000);
            return ({
                "Slider.useEffect": ()=>clearInterval(interval)
            })["Slider.useEffect"];
        }
    }["Slider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[50vh] w-screen mt-5 bg-white overflow-hidden ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                onClick: handleLeftScroll,
                className: "w-[2.5vw] h-[30vh] absolute top-1/2 left-0 -translate-y-1/2   bg-white/20 backdrop-blur-sm z-500 flex items-center justify-center   cursor-pointer text-4xl font-bold",
                children: "<"
            }, void 0, false, {
                fileName: "[project]/Components/slider.jsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scroll_Ref,
                className: "overflow-x-auto scroll-smooth snap-x snap-mandatory h-full flex",
                children: SliderBoxes.map((box)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative ".concat(box.class, " h-full w-screen flex-shrink-0 snap-center"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-xl flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: box.title
                                }, void 0, false, {
                                    fileName: "[project]/Components/slider.jsx",
                                    lineNumber: 83,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: box.line
                                }, void 0, false, {
                                    fileName: "[project]/Components/slider.jsx",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/category/".concat(box.link),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "py-2 px-15 bg-red-900 text-white rounded-md text-lg mt-10 cursor-pointer",
                                        children: "Shop Now"
                                    }, void 0, false, {
                                        fileName: "[project]/Components/slider.jsx",
                                        lineNumber: 86,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Components/slider.jsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Components/slider.jsx",
                            lineNumber: 82,
                            columnNumber: 25
                        }, this)
                    }, box.id, false, {
                        fileName: "[project]/Components/slider.jsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Components/slider.jsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                onClick: handleRightScroll,
                className: "w-[2.5vw] h-[30vh] absolute top-1/2 right-0 -translate-y-1/2   bg-white/20 backdrop-blur-sm z-500 flex items-center justify-center   cursor-pointer text-4xl font-bold",
                children: ">"
            }, void 0, false, {
                fileName: "[project]/Components/slider.jsx",
                lineNumber: 95,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Components/slider.jsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_s(Slider, "f4z/XebleAoZcbaIAmzm24jppa0=");
_c = Slider;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=Components_slider_jsx_87d4aa09._.js.map