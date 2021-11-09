import React from 'react'
import './Item.css'

const Item = ({prod}) => {
    return (<>
             <label>{prod.title}</label>
             <img src={prod.pictureUrl} alt=" " />
             <label>${prod.price}</label>
             <button className='btn btn-primary'>detalles</button>
             </>
    )
}

export default Item
