import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {

    const context = useContext(CartContext)
    return (
        <>
            <h1> Esto es un Carrito</h1>

        {
            context.cartList.length > 0 &&
            context.cartList.map(item => 
            <><p>{item.nameItem} {item.costItem} {item.qtyItem}</p><p>{context.totalCart(item.idItem)}</p></>
            )
        }

        {
            context.cartList.length > 0 &&
            <p>{context.totalBuy()}</p>
        }


        </>
    )
}

export default Cart;