import React from 'react'
import {useState, useEffect} from 'react'
import { getItem } from '../Products/Products'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [ProductsDetail, setProductsDetail] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItem
        .then(res => {
            setProductsDetail(res.find(element => element.id === 1))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])


    return (
        <>
        {loading ? <h2>Cargando...</h2> :
        <ItemDetail Item={ProductsDetail} />}
        </>
    )
}

export default ItemDetailContainer
