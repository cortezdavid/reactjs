import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../service/getFirestore'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState(null)

    const {cartList, totalPrice, clear} = useCartContext()

    const generateOrder = (e)=> {
        e.preventDefault()
        const buyer = {name, phone, email}
        const db = getFirestore()

        const order = {}
        order.buyer = { buyer }
        order.total = totalPrice()
        order.items = cartList.map((cartItem) => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price * cartItem.quantity
            return {id, title, price}
        })

        db.collection('orders').add(order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit = {generateOrder}>
                <label>Nombre</label>
                <input type="text" 
                value = {name}
                onChange = {(e) => setName(e.target.value)}/>
                <label>Email</label>
                <input type="text"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}/>
                <label>teléfono</label>
                <input type="text"
                value = {phone}
                onChange = {(e) => setPhone(e.target.value)}/>
                <button className='btn btn-success'>Comprar</button>
            </form>
            <button className='btn btn-danger' onClick={clear}>Borrar todo</button>
            {orderId !== null &&<p>su orden de compra es: {orderId}</p>}
        </div>
    )
}

export default Form
