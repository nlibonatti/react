import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom' 
import { CartContext } from './CartContext'

const CartWidget = () => {
    const totalCart = useContext(CartContext);

    return(
        <>
        <Link to="/cart"><BsCart4 />{totalCart.cartQty()}</Link>
        </>
    )
}
export default CartWidget;
