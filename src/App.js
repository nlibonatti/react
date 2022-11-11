import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer' 
import ItemDetailContainer from './components/ItemDetailContainer'
import './index.css'

const App = () =>{
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;
