
import React from 'react'
import CartWidget from '../components/CartWidget' 
import { TbCurrencyBitcoin } from 'react-icons/tb'
import '../index.css'
import { Link } from 'react-router-dom' 

const NavBar = () =>{
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-secondary">
          <div className="container-fluid">
          <Link to="/"><a className="navbar-brand fs-3"> <TbCurrencyBitcoin /> Cripto Comm</a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/category/1"><a className="nav-link" href="/category/1">Blockchain</a></Link>
                </li>
                <li className="nav-item">
                <Link to="/category/2"><a className="nav-link" href="/category/2">Stablecoins</a></Link>
                </li>
                <li className="nav-item">
                <Link to="/category/3"><a className="nav-link" href="/category/3">Defi</a></Link>
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