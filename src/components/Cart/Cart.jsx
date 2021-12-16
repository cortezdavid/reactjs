import React from "react"
import { useCartContext } from '../../context/CartContext'
import {Table} from 'react-bootstrap'
import { BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';

import './Cart.css'

const Cart = () => {

    const {cartList, deleteItem, totalPrice, clear} = useCartContext()

    return (
        <div>
            {cartList.length === 0 ? <h1>Carrito Vacio</h1> : 
            <>
            <h1>Carrito</h1>
            <div className="asd">
                <Table striped bordered hover className='container'>
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.map(product =>
                        <tr key={product.id}>
                            <th>{product.title}</th>
                            <th>{product.quantity}</th>
                            <th>${product.price}</th>
                            <th><button className="btn btn-danger"><BsXLg onClick={() => {deleteItem(product.id)}} /></button></th>
                        </tr>)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>PRECIO TOTAL:</th>
                            <th>${totalPrice()}</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </Table>
            </div>
            
            <div className='containerButtons d-flex justify-content-center'>
                <div className='buttons d-flex justify-content-between'>
                    <Link to='/form'><button className='btn btn-secondary'>Comprar</button></Link>
                    <button className='btn btn-danger' onClick={clear}>Borrar todo</button>
                </div>
            </div>
            
            </>}  
        </div>
    )
}

export default Cart
