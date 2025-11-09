import React, {createContext, useState, useContext} from "react";


const CartContext = createContext();



export function CartProvider ({children}) {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        if(cartItems.find(cartItem => cartItem.id === item.id)) {
            return; 
        }
        setCartItems([...cartItems, item]);
    }

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    }


    const clearCart = () =>{
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}

export function useCart() {
    return useContext(CartContext);
}