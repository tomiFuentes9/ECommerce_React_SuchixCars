import { memo } from "react"
import { Link } from "react-router-dom"

export const Categorias = memo(() => {
    return (
        <ul>
            <li className='nav-item'>
                <Link className="nav-link" to={"/"}>Inicio</Link>
            </li>
            <li className='nav-item'>
                <Link className="nav-link" to={"/category/1"}>Clasicos</Link>
            </li>
            <li className='nav-item'>
                <Link className="nav-link" to={"/category/2"}>Deportivos</Link>
            </li>
            <li className='nav-item'>
                <Link className="nav-link" to={"/category/3"}>Estandar</Link>
            </li>            
        </ul>
    )
  });