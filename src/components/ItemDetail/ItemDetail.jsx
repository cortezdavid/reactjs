import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

const ItemDetail = ({Item}) => {

    const quantityToAdd = (cant) => {
        console.log(`${cant} elementos agregados`);
    }

    return (
            <div className='cardDetail d-flex'>
                <div className='imgDetail d-flex align-items-center'>
                    <img src={Item.pictureUrl} alt="" />
                </div>
                <div className='informationDetail'>
                    <h2>{Item.title}</h2>
                    <label>{Item.description}</label>
                    <h2>${Item.price}</h2>
                    <div className='d-flex justify-content-around'>
                        <ItemCount stock = {5} initial = {1} onAdd = {quantityToAdd} />
                        <Link to='/'><button className='btn btn-secondary'>Volver al inicio</button></Link>
                    </div>
                    
                </div>
            </div>
    )
}

export default ItemDetail
