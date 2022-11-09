
import CartWidget from '../components/CartWidget' 
import { TbCurrencyBitcoin } from 'react-icons/tb'
import '../index.css'

const NavBar = () =>{
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand fs-3" href="#"> <TbCurrencyBitcoin />Cripto Comm</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Stablecoins</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blockchain</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Defi</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link d-flex" href="#"></a>
                </li>
              </ul>
             </div>
             <h1 className="d-flex"><CartWidget /></h1>
          </div>
        </nav>
    </>
  )
}
export default NavBar;