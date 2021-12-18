import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { Spinner } from 'react-bootstrap'
import { getFirestore } from '../../service/getFirestore'



const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryID} = useParams()

    useEffect(() => {

        const db = getFirestore()
        const dbQuery = categoryID ? db.collection('Productos').where('category', '==', categoryID ) : db.collection('Productos')

        dbQuery.get()
        .then(resp => setProducts( resp.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
            
    },[categoryID])
    
    return (
        <>
        {loading ? <Spinner animation="border" /> :
        <div className='container'>
             <h1>{greeting}{categoryID}</h1>
             <div className='containerCards d-flex justify-content-around flex-wrap'>
                 <ItemList products = {products} />
             </div>
        </div>}
        </>
    )
}

export default ItemListContainer
