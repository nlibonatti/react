
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