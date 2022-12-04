
import React from 'react'
import Coin from '../components/Coin'
import { useState, useEffect } from 'react'
import { data } from '../utils/data'
import { customFetch } from '../utils/customFetch'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../firebaseConfig"

const ItemListContainer = () => {
  const [datos, setDatos] = useState([])
  const { idCategory } = useParams()

  useEffect(async() => {

    if (idCategory === undefined) {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirebase = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()

        }))
          console.log(dataFromFirebase)
        
        
    } else {
        // customFetch (2000, data.filter(item => item.categoryId == idCategory))
        // .then(response => setDatos(response))
        // .catch(err => console.log(err))

          const querySnapshot = await getDocs(collection(db, "products"));
          querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          });
    }

  }, [idCategory])


  return (
    <>
       <div className="container-fluid">
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {
      datos.map(item => (
        <Coin
        key={item.idC}
        id={item.idC}
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