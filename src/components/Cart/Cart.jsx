import React from "react"
import { useCartContext } from '../../context/CartContext'
import {Table} from 'react-bootstrap'

const Cart = () => {

    const {cartList, clear} = useCartContext()

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
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(product =>
                    <tr key={product.id}>
                        <th>{product.title}</th>
                        <th>{product.quantity}</th>
                        <th>${product.price}</th>
                    </tr>)}
                </tbody>
                </Table>
            <button className='btn btn-success' onClick={clear}>Comprar</button>
            <button className='btn btn-danger' onClick={clear}>Borrar todo</button>
            </>
            }
            
        </div>
    )
}

export default Cart
