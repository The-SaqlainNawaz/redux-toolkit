import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    total_X: 0,
    total_price: 0,
    isLoading: true
}

const cart = createSlice({
    name: "cart_redux",
    initialState
})


// console.log(cart);

export default cart.reducer