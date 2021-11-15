import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
    return (<><div className='card'>
                <label>{prod.title}</label>
                <img src={prod.pictureUrl} alt=" " />
                <label>${prod.price}</label>
                <Link to={`/detail/${prod.id}`}>
                  <button className='btn btn-primary'>detalles</button>
                </Link>
              </div>
             </>
    )
}

export default Item
