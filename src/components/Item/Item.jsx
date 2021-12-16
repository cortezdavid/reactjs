import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
    return (
      <>
        <div className='card d-flex justify-content-between'>
          <img src={prod.pictureUrl} alt=" " />
          <div className='d-flex flex-column'>
            <h5>{prod.title}</h5>
            <label>${prod.price}</label>
            <Link to={`/detail/${prod.id}`}>
              <button className='btn btn-detail'>detalles</button>
            </Link>
          </div>
        </div>
      </>
    )
}

export default Item
