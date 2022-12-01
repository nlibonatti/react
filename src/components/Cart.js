import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';


const Cart = () => {

    const { cartList } = useContext(CartContext)
    console.log(cartList)

    return (
        <>
            <h1> Esto es un Carrito</h1>

        {
            cartList.length === 0
            ? <p>no hay productos en el carro de compras</p>
            : cartList.map(item => <p>{item.nameItem}</p>)
        }

        </>
    )
}

export default Cart;