import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { getFirestore } from '../../service/getFirestore'
import ModalConfirm from '../ModalConfirm/ModalConfirm'
import FormError from './FormError'

import './Form.css'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checkEmail, setCheckEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState(null)
    const [modalShow, setModalShow] = useState(false);

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

    const disabled = () => {
        return (checkEmail !== email)
    }

    const showError = {
        display: 'none'
    }

    const hideError = {
        display: 'block'
    } 

    return (
        <div>
            {totalPrice() === 0 ? <FormError /> :
            <>
            <h1>Fomulario de compra</h1>
            <h4>Deja tus datos y confirma tu compra</h4>
            <form onSubmit = {generateOrder} className='d-flex flex-column'>
                <div className='formBox d-flex flex-column align-items-start'>
                    <label>Nombre</label>
                    <input type="text" 
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    required/>
                </div>
                <div className='formBox d-flex flex-column align-items-start'>
                    <label>Email</label>
                    <input type = "email"
                    value = {email}
                    onChange = { (e) => setEmail(e.target.value)}
                    required/>
                </div>
                <div className='formBox d-flex flex-column align-items-start'>
                    <label>Confirmar Email</label>
                    <input type="email"
                    onChange = { (e) => setCheckEmail(e.target.value)}
                    required
                    className={disabled() ? 'error' : undefined}/>
                    <small style={disabled() ? hideError : showError}>Los correos no coinciden</small>
                </div>
                <div className='formBox d-flex flex-column align-items-start'>
                    <label>teléfono</label>
                    <input type="number"
                    value = {phone}
                    onChange = {(e) => setPhone(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <button className={'btn btn-success ' + (disabled() && "disabled")} onClick={() => setModalShow(true)}>Comprar</button>
                </div>
                {orderId !== null && <ModalConfirm
                                    show={modalShow}
                                    onHide={() => {setModalShow(false); clear();}}
                                    order={orderId}
                                    name={name}
                                    email={email}
                                    />}
            </form>
            </>}
        </div>
    )
}

export default Form
