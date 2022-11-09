const Coin = (props) => {

  return (
    <>
    <div className="card" style="width: 18rem;">
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
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
  </div>
  </>
  )
}
export default Coin;