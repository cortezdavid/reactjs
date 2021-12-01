import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { getFirestore } from '../../service/getFirestore'



const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {cID} = useParams()

    useEffect(() => {

        const dbQuery = getFirestore()

        if (cID) {
            dbQuery.collection('Productos').where('category', '==', cID ).get()
            .then(resp => setProducts( resp.docs.map(pro => ( { id: pro.id, ...pro.data() } ) )))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            dbQuery.collection('Productos').get()
            .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        
    },[cID])
    
    return (
        <>
        {loading ? <h2>Cargando...</h2> :
        <div className='container'>
             <h1>{greeting}{cID}</h1>
             <div className='containerCards d-flex justify-content-around flex-wrap'>
                 <ItemList products = {products} />
             </div>            
        </div>}
        </>
    )
}

export default ItemListContainer
