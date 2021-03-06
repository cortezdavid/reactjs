import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({Item}) => {

    const {addItem} = useCartContext()

    const quantityToAdd = (cant) => {
        addItem(Item, cant)
    }

    return (
            <div className='cardDetail d-flex col-12 col-lg-8 col-md-10'>
                <div className='imgDetail d-flex align-items-center'>
                    <img src={Item.pictureUrl} alt="" />
                </div>
                <div className='informationDetail'>
                    <h2>{Item.title}</h2>
                    <label>{Item.description}</label>
                    <h2>Precio: ${Item.price}</h2>
                    <div className='buttonsDetail d-flex justify-content-around'>
                        <ItemCount stock = {Item.stock} initial = {1} onAdd = {quantityToAdd} />
                        <Link to='/'><button className='btn btn-secondary'>Volver al inicio</button></Link>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail
