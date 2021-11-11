import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({Item}) => {
    return (
            <div className='cardDetail d-flex'>
                <img src={Item.pictureUrl} alt="" />
                <div className='informationDetail'>
                    <h2>{Item.title}</h2>
                    <label>{Item.description}</label>
                    <label>{Item.price}</label>
                    <button className='btn btn-primary'>Comprar</button>
                </div>
            </div>
    )
}

export default ItemDetail
