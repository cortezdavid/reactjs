import React from 'react'
import {useState, useEffect} from 'react'
// import { getItem } from '../Products/Products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import { getFirestore } from '../../service/getFirestore'


const ItemDetailContainer = () => {
    const [ProductsDetail, setProductsDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const {productID} = useParams()

    useEffect(() => {

        const dbQuery = getFirestore()

        dbQuery.collection('Productos').doc(productID).get()
        .then(resp => setProductsDetail({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    },[productID])


    return (
        <>
        {loading ? <h2>Cargando...</h2> :
        <ItemDetail Item={ProductsDetail} />}
        </>
    )
}

export default ItemDetailContainer
