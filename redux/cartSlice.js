import { createSlice } from "@reduxjs/toolkit"

let storedCart = [];
if (typeof window !== "undefined") {
    const local = localStorage.getItem("cart");
    storedCart = local ? JSON.parse(local) : [];
}

const cartSlice = createSlice({
    name: "Cart",
    initialState: { items: storedCart},

    reducers: {
        handleAddItems: (state, action) => {
            const product = action.payload;
            const existingProduct = state.items.find(i => i.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 })
            }
        },
        handleIncreaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) { item.quantity += 1 }
        },
        handleDecreaseQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.quantity > 1) { item.quantity -= 1 }
        },
        handleRemove: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload)
        },
        handleQuantity: (state, action) => {
            const { id, value } = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item) { item.quantity = value > 0 ? value : 1 }
        },
    }
})

export const { handleAddItems, handleIncreaseQuantity, handleDecreaseQuantity, handleRemove, handleQuantity } = cartSlice.actions;

export default cartSlice.reducer;