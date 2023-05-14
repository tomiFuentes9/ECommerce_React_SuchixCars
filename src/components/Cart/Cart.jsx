import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const { cartList, totalPrice, deleteProduct, cleanCart } = useCartContext()
    return (
        <>
            {
                cartList.length === 0 ?
                    <>
                        <h1>Todavia no agregaste un producto al carrito</h1>
                        <button className="btn btn-dark"><Link to={"/"}>Continuar con la compra</Link></button>
                    </>
                    :
                    <div className="container cartContainer">
                        {<ItemList productos={cartList} plantilla={"ItemCart"} />}
                        <div className="cartButtons" sx={{margin: 2}}>
                            <p>Resumen de la compra: ${totalPrice()}</p>
                            <button className="btn btn-danger" onClick={() => cleanCart()}>Limpiar Carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar Comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
                        </div>
                    </div>
            }
        </>
    )
}