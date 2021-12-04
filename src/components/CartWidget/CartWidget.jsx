import React from 'react'
import { BsCart3 } from 'react-icons/bs';
import { useCartContext } from '../../context/CartContext'
import './CartWidget.css';


const CartWidget = () => {

    const { quantityItems } = useCartContext()

    return (
        <div className='cart position-relative'>
            <BsCart3 />
            <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                {quantityItems() !== 0 && quantityItems()}
            </span>   
        </div>
    )
}

export default CartWidget
