import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js"
import productReducer from "./productSlice.js"

const store = configureStore({
    reducer:{
        Cart : cartReducer,
        Products : productReducer,
    }
})

store.subscribe(()=>{
    const state = store.getState()
    localStorage.setItem("cart" , JSON.stringify(state.Cart.items))
})

export default store;