import { configureStore } from '@reduxjs/toolkit'
import cart_reducer from '../features/cart'


export const store = configureStore({
    reducer: {
        cart: cart_reducer
    },
})