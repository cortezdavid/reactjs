import React from 'react'
import './Item.css'

const Item = ({prod}) => {
    return (
        <div className='card' key={prod.id}>
             <label>{prod.title}</label>
             <img src={prod.pictureUrl} alt=" " />
             <label>${prod.price}</label>
             <button className='btn btn-primary'>detalles</button>
        </div>
    )
}

export default Item
