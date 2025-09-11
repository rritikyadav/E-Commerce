(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/(checkOut)/contextLogic.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CheckoutProvider": ()=>CheckoutProvider,
    "useCheckout": ()=>useCheckout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CheckoutContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function CheckoutProvider(param) {
    let { children } = param;
    _s();
    const [Cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutProvider.useEffect": ()=>{
            const get_Cart = JSON.parse(localStorage.getItem("cart")) || [];
            setCart(get_Cart);
        }
    }["CheckoutProvider.useEffect"], []);
    // Functions
    const handleQuantity = (index, value)=>{
        setCart((prevCart)=>prevCart.map((item, i)=>i === index ? {
                    ...item,
                    quantity: value
                } : item));
    };
    const handleIncreaseQuantity = (index)=>{
        setCart((prevCart)=>prevCart.map((item, i)=>i === index ? {
                    ...item,
                    quantity: item.quantity + 1
                } : item));
    };
    const handleDecreaseQuantity = (index)=>{
        setCart((prevCart)=>prevCart.map((item, i)=>i === index ? {
                    ...item,
                    quantity: item.quantity > 1 ? item.quantity - 1 : 1
                } : item));
    };
    const handleRemove = (idx)=>{
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.splice(idx, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckoutContext.Provider, {
        value: {
            Cart,
            handleQuantity,
            handleIncreaseQuantity,
            handleDecreaseQuantity,
            handleRemove
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(checkOut)/contextLogic.js",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(CheckoutProvider, "vNx75lnXAMdUVLYMywJ9P0vnOWg=");
_c = CheckoutProvider;
const useCheckout = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CheckoutContext);
};
_s1(useCheckout, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "CheckoutProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_%28checkOut%29_contextLogic_13c2e17c.js.map