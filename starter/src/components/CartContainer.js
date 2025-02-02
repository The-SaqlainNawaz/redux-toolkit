import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clear_Cart_Reducer } from '../features/cart'


const CartContainer = () => {
    const dispatch = useDispatch()
    const { cartItems, amount, total } = useSelector((store) => store.cart)

    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>is currenty empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
            <header>
                <h2>Your BAG</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.key} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={() => dispatch(clear_Cart_Reducer())}>Clear Cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
