import {useState, useEffect} from 'react'
// import ItemCount from '../ItemCount/ItemCount'
import { getFetch } from '../Products/Products'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getFetch
        .then(res => {
            setProducts(res)
        })
        .catch(err => console.log(err))
        .finally(() => console.log("fin"))
    },[])
    
    return (
        <div>
            <h1>{greeting}</h1>
            {/* <ItemCount stock = {5} initial = {1}  /> */}
            <div className='containerCards d-flex justify-content-around'>
                <ItemList products = {products} />
            </div>
            
        </div>
    )
}

export default ItemListContainer
