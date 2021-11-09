import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <>{products.map(prod => <div className='card' key={prod.id}>
                                    <Item prod = {prod} />
                                </div>)}
        </>
    )
}

export default ItemList
