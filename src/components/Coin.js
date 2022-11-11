import React from 'react'
import { Link } from 'react-router-dom'

const Coin = (props) => {

  return (
  <>  
              <div className="col">
              <div className="card">
              <img src={props.image} className="card-img-top" alt={props.name}/>
              <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.id}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {props.cost}</li>
                <li className="list-group-item">Stock: {props.stock}</li>
              </ul>
              <div className="card-body">
                <a href="/" className="card-link">Add to Cart</a>
                <Link to={`/item/${props.id}`}><div href="/" className="card-link">Details</div></Link>
              </div>
              </div>
              </div>
  </>
  )
}
export default Coin;