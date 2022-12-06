
import React from 'react'
import { db } from "../firebaseConfig"
import { collection , query , getDocs , doc , getDoc} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { customFetch } from '../utils/customFetch'
import CoinDetail from '../components/CoinDetail'
const { data } = require ('../utils/data')

export const firestoreFetchOne = async (idItem) => {
  const docRef = doc(db, "products", idItem);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          return {
              id: idItem,
              ...docSnap.data()
          }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
    } 

    const ItemDetailContainer = () => {
      const [dato, setDato] = useState({});
      const { idItem } = useParams();
  
      useEffect(() => {
          firestoreFetchOne(idItem)
              .then(result => setDato(result))
              .catch(err => console.log(err))
      }, []);

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