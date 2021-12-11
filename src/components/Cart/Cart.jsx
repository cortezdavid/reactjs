import React from "react"
import { useCartContext } from '../../context/CartContext'
import {Table} from 'react-bootstrap'
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './Cart.css'

const Cart = () => {

    const {cartList, deleteItem, totalPrice, clear} = useCartContext()

    return (
        <div>
            {cartList.length === 0 ? <h1>Carrito Vacio</h1> : 
            <>
            <h1>Carrito</h1>
            <Table striped bordered hover className='container'>
                <thead>
                    <tr>
                    <th>nombre</th>
                    <th>cantidad</th>
                    <th>precio</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(product =>
                    <tr key={product.id}>
                        <th>{product.title}</th>
                        <th>{product.quantity}</th>
                        <th>${product.price}</th>
                        <th><button><FaRegTimesCircle onClick={() => {deleteItem(product.id)}} /></button></th>
                    </tr>)}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>PRECIO TOTAL:</th>
                        <th>${totalPrice()}</th>
                    </tr>
                </tfoot>
            </Table>
            <div className='containerButtons d-flex justify-content-center'>
                <div className='buttons d-flex justify-content-between'>
                    <Link to='/form'><button className='btn btn-secondary'>Checkout</button></Link>
                    <button className='btn btn-danger' onClick={clear}>Borrar todo</button>
                </div>
            </div>
            
            </>}  
        </div>
    )
}

export default Cart
