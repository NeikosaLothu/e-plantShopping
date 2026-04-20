import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
    addToCart: (state, action) => {
        const item = action.payload;
        const existing = state.find(i => i.id === item.id);
        if (existing) {
        existing.quantity += 1;
        } else {
        state.push({ ...item, quantity: 1 });
        }
    },
    increaseQty: (state, action) => {
        state[action.payload].quantity += 1;
    },
    decreaseQty: (state, action) => {
        if (state[action.payload].quantity > 1) {
        state[action.payload].quantity -= 1;
        }
    },
    deleteItem: (state, action) => {
        return state.filter((_, i) => i !== action.payload);
    }
    }
});

export const { addToCart, increaseQty, decreaseQty, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;