import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../service/getFirestore'
import ModalConfirm from '../ModalConfirm/ModalConfirm'
import FormError from './FormError'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState(null)
    const [modalShow, setModalShow] = useState(false);
    const [classError, setClassError] = useState('')

    const {cartList, totalPrice} = useCartContext()

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

    const comprobar = (e) => {
        (e.target.value) !== email ? setClassError('error') : setClassError('')
    }

    return (
        <div>
            {totalPrice() === 0 ? <FormError /> :
            <form onSubmit = {generateOrder}>
                <label>Nombre</label>
                <input type="text" 
                value = {name}
                onChange = {(e) => setName(e.target.value)}/>
                <label>Confirmar Email</label>
                <input type = "email"
                value = {email}
                onChange = { (e) => setEmail(e.target.value)}
                onBlur = {comprobar}/>
                <label>Confirmar Email</label>
                <input type="email"
                onBlur = {comprobar}
                className = {classError}/>
                <label>teléfono</label>
                <input type="tel"
                value = {phone}
                onChange = {(e) => setPhone(e.target.value)}/>
                <button className='btn btn-success' onClick={() => setModalShow(true)}>Comprar</button>
                {orderId !== null && <ModalConfirm
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    order={orderId}/>}
            </form>}
        </div>
    )
}

export default Form
