import React from 'react'
import {useState, useEffect} from 'react'
import { getItem } from '../Products/Products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'


const ItemDetailContainer = () => {
    const [ProductsDetail, setProductsDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const {productID} = useParams()

    useEffect(() => {
        getItem
        .then(res => {
            setProductsDetail(res.filter(asd => asd.id === parseInt(productID)))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[productID])


    return (
        <>
        {loading ? <h2>Cargando...</h2> :
        <ItemDetail Item={ProductsDetail[0]} />}
        </>
    )
}

export default ItemDetailContainer
