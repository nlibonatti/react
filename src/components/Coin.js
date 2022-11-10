const Coin = (props) => {

  return (
  <>  
              <div className="col">
              <div className="card">
              <img src={props.image} className="card-img-top" alt={props.name}/>
              <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.name}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Price: {props.cost}</li>
                <li className="list-group-item">Stock: {props.stock}</li>
              </ul>
              <div className="card-body">
                <a href="/" className="card-link">Add</a>
                <a href="/" className="card-link">Rate</a>
              </div>
              </div>
              </div>
  </>
  )
}
export default Coin;