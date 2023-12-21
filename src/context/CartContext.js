import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const isInCart = (itemId) => {
        return cart.some(product => product.id === itemId )
    }

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error("product is already in your shopping cart")
        }
    }

    const deleteItem = (itemId) => {
        const cartUpdated = cart.filter( product => product.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }
    
    const totalQuantity = () => {
        return cart.reduce((acumulator, productActual) => acumulator + productActual.quantity, 0)
        
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{cart, addItem, deleteItem, clearCart, totalPrice, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}