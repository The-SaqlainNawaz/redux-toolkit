import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { remove_cart, increase_amount, decrease_amount } from '../features/cart'
import { useDispatch } from 'react-redux'

const CartItem = (props) => {
    const dispatch = useDispatch()
    return (
        <article className='cart-item'>
            <img src={props.img} alt='Helo'></img>
            <div>
                <h4>{props.title}</h4>
                <h4 className='item-price'>${props.price}</h4>
                <button className='remove-btn' onClick={() => dispatch(remove_cart(props.id))}>remove</button>
            </div>
            <div>
                <button className='amount-btn' onClick={() => dispatch(increase_amount(props.id))}>
                    <ChevronUp />
                </button>
                <p className='amount'>{props.amount}</p>
                <button className='amount-btn' onClick={() => {
                    if (props.amount === 1) {
                        dispatch(remove_cart(props.id))
                    }
                    dispatch(decrease_amount(props.id))
                }}>
                    <ChevronDown />
                </button>

            </div>
        </article>
    )
}

export default CartItem
