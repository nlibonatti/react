
import CartWidget from '../components/CartWidget' 

const NavBar = () =>{
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Cripto Comm</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">Bitcoin</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Ether</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sol</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Matic</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link d-flex" href="#"></a>
                </li>
              </ul>
              <ul>
                <h1 class="d-flex"><CartWidget /></h1>
              </ul>  
            </div>
          </div>
        </nav>  
    </>
  )
}
export default NavBar;