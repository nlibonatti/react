import React from 'react'
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    costItem: item.cost,
                    qtyItem: qty,
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.qtyItem += qty;
        }
    }
    
    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const cartQty = () => {
        let qtyTotal = cartList.map (item => item.qtyItem)
        return qtyTotal.reduce(((valueI, valueT) => valueI + valueT), 0 )
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, cartQty}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;