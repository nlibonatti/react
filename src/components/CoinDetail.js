import React from 'react'
const DetailCoin = ({item}) => {

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
                  <a href="/" className="card-link">Add to Cart</a>
                  <a href="/" className="card-link">Rate</a>
                </div>
                </div>
                </div>
    </>
      )
    }
    export default DetailCoin;