import {useState, useEffect} from 'react'
import { getFetch } from '../Products/Products'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {cID} = useParams()


    useEffect(() => {

        if (cID) {
            getFetch
            .then(res => {
                setProducts(res.filter(product => product.category === cID))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            getFetch
            .then(res => {
                setProducts(res)
            })
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
