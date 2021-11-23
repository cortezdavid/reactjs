import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './ItemCount.css';

const GoToCart = () => {
    return <Link to='/cart'><button className='btn btn-success'>Ir al carrito</button></Link>
}

const AddButton = ({confirmButton}) => {
    return <button className='btn btn-primary' onClick={confirmButton}>Agregar al carrito</button>
}

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    const [inputType, setinputType] = useState(true)

    const addCounter = () => {
        setCount(count + 1)
    }
    const subtractCounter = () => {
        setCount(count - 1)
    }

    const changeStatus = () => {
        onAdd(count)
        setinputType(false)
    }

    return (
        <div className = 'containerItemCount d-flex'>
            <div className = 'containerCounter d-flex justify-content-between'>
                <button className = {"btn btn-primary " + (count === initial && "disabled")} onClick={subtractCounter}>-</button>
                <label> {count} </label>
                <button className = {"btn btn-primary " + (count >= stock && "disabled")} onClick= {addCounter}>+</button>
            </div>
            <div className = 'containerButton'>
                {inputType ? <AddButton confirmButton={changeStatus}/> : <GoToCart />}
            </div>  
        </div>
    )
}

export default ItemCount
