import React, { useContext } from 'react'
import CoinCount from '../components/CoinCount'
import { useState } from 'react';
import { Link } from 'react-router-dom' 
import { CartContext } from './CartContext';

const DetailCoin = ({ item }) => {

const [itemCount, setItemCount] = useState(0);

const {addToCart} = useContext(CartContext);

const onAdd = (qty) => {
      alert("Selecionaste " + qty + " items.");
      setItemCount(qty)
      addToCart (item , qty)
  }

    return (
    <>  
                <div className="col">
                <div className="card">
                <img src={item.image} className="card-img-top" alt={item.name}/>
                <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Price: {item.cost}</li>
                  <li className="list-group-item">Stock: {item.stock}</li>
                </ul>
                <div className="card-body">

                {
                        itemCount === 0
                        ? <CoinCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><button>CheckOut</button></Link>
                  }

                </div>
                </div>
                </div>
    </>
      )
    }
    export default DetailCoin;