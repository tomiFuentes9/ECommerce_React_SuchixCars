import { CartWidget } from "../CartWidget/CartWidget"
import { Categorias } from "./Categorias/Categorias";

export const Navbar = () => {
  return (
      <nav className="navbar">
          <div className="container-fluid container-nav">
              <a className="navbar-brand" href="./index.html">
                  <img className="navbar-logo-img" src="./img/logo.png" alt="Logo"/>
              </a>
              
              <h2>Suchix Cars</h2>

              <CartWidget number={0}/>
          </div>
          <div className="navbar-categorias">
              <Categorias />
          </div>
      </nav>
  )
};

