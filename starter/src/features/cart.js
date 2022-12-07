import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: true
}

const cart_reducer = createSlice({
    name: "cart_redux",
    initialState,
    reducers: {
        clear_Cart_Reducer: (state) => {
            state.cartItems = []
        },
        remove_cart: (state, action) => {
            const id = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== id)
            state.amount = state.amount - 1
        },
        increase_amount: (state, { payload }) => {
            const item = state.cartItems.find((items) => items.id === payload)
            item.amount = item.amount + 1
        },
        decrease_amount: (state, { payload }) => {
            const item = state.cartItems.find((items) => items.id === payload)
            item.amount = item.amount - 1
        },
        calculate_the_money: (state) => {
            let amount = 0
            let price = 0
            state.cartItems.forEach((item) => {
                amount += item.amount
                price += item.amount * item.price
            })
            state.amount = amount
            state.total = price
        }
    }
})


// console.log(cart);
export const { clear_Cart_Reducer, remove_cart, increase_amount, decrease_amount, calculate_the_money } = cart_reducer.actions
export default cart_reducer.reducer