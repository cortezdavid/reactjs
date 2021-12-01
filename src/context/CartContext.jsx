import {createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addItem =(Item, cant) => {
        const index = cartList.findIndex(i => i.id === Item.id)
        if (index > -1){
            cartList[index].quantity += cant
            cartList.splice(index, 1, cartList[index])                
            setCartList(cartList)
        } else {
            setCartList([...cartList, {...Item, quantity: cant}])
        }
    }

    const quantityItems = () => {
        return cartList.reduce((acum, Item) => acum += Item.quantity, 0)
    }

    const totalPrice = () => {
        return cartList.reduce((total, Item) => total = total + (Item.quantity * Item.price), 0)
    }

    const clear = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter((i) => i.id !== id));
    }
    
    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            deleteItem,
            quantityItems,
            totalPrice,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
