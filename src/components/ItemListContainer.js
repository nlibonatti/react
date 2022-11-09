
import Coin from '../components/Coin'
import { useState, useEffect } from 'react'
import { data } from '../utils/data'
import { customFetch } from '../utils/customFetch'


const ItemListContainer = () => {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    customFetch (2000, data)
    .then(response => setDatos(response))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
    {
      datos.map(item => (
        <Coin
        key={item.id}
        name={item.name}
        cost={item.cost}
        stock={item.stock}
        image={item.image} />
      ))
    }
    </>
  )
}

export default ItemListContainer;