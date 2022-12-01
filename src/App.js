import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer' 
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import './index.css'
import CartContextProvider from './components/CartContext'

const App = () =>{
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/cart/' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}
export default App;
