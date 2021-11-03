import React, {useState} from 'react'
import './ItemCount.css';

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial)

    const addCounter = () => {
        setCount(count + 1)
    }
    const subtractCounter = () => {
        setCount(count - 1)
    }

    const onAdd = () => {
        alert(`${count} elementos agregados`)
    }

    return (
        <div className = 'containerItemCount'>
            <div className = 'containerCounter d-flex justify-content-between'>
                <button className = {"btn btn-primary " + (count === initial ? "disabled" : "")} onClick={subtractCounter}>-</button>
                <label> {count} </label>
                <button className = {"btn btn-primary " + (count >= stock ? "disabled" : "")} onClick= {addCounter}>+</button>
            </div>
            <div className = 'containerButton'>
                <button className='btn btn-primary' onClick={onAdd}>agregar</button>
            </div>  
        </div>
    )
}

export default ItemCount
