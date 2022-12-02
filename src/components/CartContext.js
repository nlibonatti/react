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
        let qtyTotal = cartList.map(item => item.qtyItem)
        return qtyTotal.reduce(((valueI, valueT) => valueI + valueT), 0 )
    }

    const totalCart = (idItem) => {
        let totalSale = cartList.map(item => item.idItem).indexOf(idItem)
        return cartList[totalSale].costItem * cartList[totalSale].qtyItem 
    }

    const totalBuy = () => {
        let totalPerItem = cartList.map(item => totalCart(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, cartQty, totalCart, totalBuy}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;