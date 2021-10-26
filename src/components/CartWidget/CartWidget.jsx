import React from 'react'
import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className='cart'>
            <FaShoppingCart />
        </div>
    )
}

export default CartWidget
