import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer' 
import './index.css'

const App = () =>{
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Bienvenido al sitio de compra de criptomonedas" />
    </>
  )
}
export default App;
