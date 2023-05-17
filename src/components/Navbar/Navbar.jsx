import { CartWidget } from "../CartWidget/CartWidget"
import { Categorias } from "./Categorias/Categorias";

export const Navbar = () => {
  return (
      <nav className="navbar">
          <div className="container-fluid container-nav">
              <a className="navbar-brand" href="./index.html">
                  <img className="navbar-logo-img" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-39655-suchanmauro.appspot.com/o/logo.png?alt=media&token=8ae8531f-c852-48eb-a584-dcb88482282a" alt="Logo"/>
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

