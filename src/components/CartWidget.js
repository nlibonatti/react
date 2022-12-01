import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Link } from 'react-router-dom' 

const CartWidget = () => {
    return(
        <>
        <Link to="/cart"><BsCart4 /></Link>
        </>
    )
}
export default CartWidget;
