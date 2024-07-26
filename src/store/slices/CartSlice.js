import { createSlice } from "@reduxjs/toolkit";



const initialState = []
const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action);
            state.push(action.payload)
            console.log(state);
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

    }
})


export const { addToCart, removeFromCart } = CartSlice.actions
export default CartSlice.reducer