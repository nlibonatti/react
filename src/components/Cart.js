import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { collection, serverTimestamp , setDoc , doc } from 'firebase/firestore';
import { db } from "../firebaseConfig"

const Cart = () => {

    const context = useContext(CartContext)
    
    const createOrder = () => {
            let order = {
                buyer: {
                name: "Manuel Rodriguez",
                email: "manuel@rodriguez.com",
                phone: 1160005050
                },
                date: serverTimestamp(),
                items: context.cartList.map(item => ({
                    id: item.idItem,
                    price: item.costItem,
                    title: item.nameItem,
                    qty: item.qtyItem
                })),
                total: context.totalBuy()
            }
        console.log(order)
        
        const createOrdenFirebase = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef
        }

        createOrdenFirebase()
            .then(response => {
                alert ("Orden número: " + response.id)
                context.removeList()
            })
            .catch(err => console.log(err))
        }

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
        <button onClick={createOrder}>Check Out</button>


        </>
    )
}

export default Cart;