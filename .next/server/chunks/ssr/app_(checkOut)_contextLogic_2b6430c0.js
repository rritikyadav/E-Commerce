module.exports = {

"[project]/app/(checkOut)/contextLogic.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CheckoutProvider": ()=>CheckoutProvider,
    "useCheckout": ()=>useCheckout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CheckoutContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
function CheckoutProvider({ children }) {
    const [Cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const get_Cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(get_Cart);
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckoutContext.Provider, {
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
const useCheckout = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CheckoutContext);
}),

};

//# sourceMappingURL=app_%28checkOut%29_contextLogic_2b6430c0.js.map