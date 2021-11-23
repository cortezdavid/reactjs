import {createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addItem =(Item, cant) => {
        if (cartList.length === 0) {
            setCartList([...cartList, {...Item, quantity: cant}])
        } else {
            for (const iterator of cartList) {
                if (iterator.id === Item.id) {
                    const index = cartList.indexOf(iterator)
                    iterator.quantity += cant
                    cartList.splice(index, 1, iterator)
                    setCartList(cartList)
                } else {
                    setCartList([...cartList, {...Item, quantity: cant}])
                }
            }
        }
    }

    const clear = () => {
        setCartList([])
    }
    
    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
