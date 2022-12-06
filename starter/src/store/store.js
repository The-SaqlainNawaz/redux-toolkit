import { configureStore } from '@reduxjs/toolkit'
import cart_Reducer from '../features/cart'


export const store = configureStore({
    reducer: {
        cart: cart_Reducer
    },
})