import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Error from '../Error/Error'
import { useParams } from 'react-router'
import { Spinner } from 'react-bootstrap'
import { getFirestore } from '../../service/getFirestore'


const ItemDetailContainer = () => {
    const [ProductsDetail, setProductsDetail] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorDetail, setErrorDetail] = useState(false)
    const {productID} = useParams()

    useEffect(() => {

        const dbQuery = getFirestore()

        dbQuery.collection('Productos').doc(productID).get()
        .then(resp => {if (resp.exists) setProductsDetail({ id: resp.id, ...resp.data() })
                      else setErrorDetail(true)})
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    },[productID])


    return (
        <>
        {!loading && !errorDetail && <ItemDetail Item={ProductsDetail} />}
        {!loading && errorDetail && <Error />}
        {loading && <Spinner animation="border" />}
        </>
    )
}

export default ItemDetailContainer
