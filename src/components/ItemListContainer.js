
import React from 'react'
import Coin from '../components/Coin'
import { useState, useEffect } from 'react'
import { data } from '../utils/data'
import { customFetch } from '../utils/customFetch'
import { useParams } from 'react-router-dom'
import { collection, getDocs, orderBy } from "firebase/firestore"; 
import { db } from "../firebaseConfig"
import { query , where } from 'firebase/firestore'


const ItemListContainer = () => {
  const [datos, setDatos] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    // creamos una función que va a obtener los datos de firebase
            const getData = async () => {
    // con una condicional, si no tiene categorías, 
                const queryRef = !idCategory
    // va a traer todos los productos
                    ? query(collection(db, 'products'), orderBy('name'))
    // si tiene categorías, firebase va a filtrarlas
                    : query(collection(db, 'products'), where('categoryId', '==', Number(idCategory)))
    // recibimos los datos
                const response = await getDocs(queryRef);
    // y hacemos un map para crear objetos con esos datos.
                const productos = response.docs.map((doc) => {
                    const newProduct = {
                        ...doc.data(),
                        id: doc.id,
                    };
    // lo retornamos
                    return newProduct;
                });
                    setDatos(productos);

            };
    // llamamos a la función
            getData();
    
        }, [idCategory])

        console.log(idCategory)


  return (
    <>
       <div className="container-fluid">
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {
      datos.map(item => (
        <Coin
        key={item.idC}
        id={item.id}
        name={item.name}
        cost={item.cost}
        stock={item.stock}
        image={item.image} />
      ))
    }
        </div>
        </div>
    </>
  )
}

export default ItemListContainer;