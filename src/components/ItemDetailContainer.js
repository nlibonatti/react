
import { collection , query , getDocs } from 'firebase/firestore'
import { db } from "../firebaseConfig"
import { useParams } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import { customFetch } from '../utils/customFetch'
import CoinDetail from '../components/CoinDetail'
const { data } = require ('../utils/data')


const ItemDetailContainer = () => {
  const [dato, setDato] = useState({});
  const { id } = useParams();

  useEffect(() => {
    customFetch (2000, data.find(item => item.id == id))
    .then(response => setDato(response))
    .catch(err => console.log(err))
   }, [])

  //useEffect(() => {
    //        const getData = async (id) => {
    //        const queryRef = query(collection(db, 'products' , id))
    //       const response = await getDocs(queryRef);
    //        const productos = response.docs.map((doc) => {
     //               const newProduct = {
       //                 ...doc.data(),
        //                id: doc.id,
         //           };
         //           return newProduct;
          //      });
           //         setDato(productos);

           // };
           // getData();
    
       // }, [])



  return (
    <>
       <div className="container-fluid">
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       <CoinDetail item={dato} />
        </div>
        </div>
    </>
  )
}

export default ItemDetailContainer;