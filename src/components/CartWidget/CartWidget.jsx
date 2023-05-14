import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
export const CartWidget = () => {
  const { getProdQuantity } = useCartContext()
  return (
    <>
      <button className="btn btn-primary cart" type="button">
        <Link to={"/cart"} className="nav-link">
          <i className="fa-solid fa-cart-shopping"></i>
          {getProdQuantity() > 0 && <span className="cantCart">
            {getProdQuantity()}</span>}
        </Link>
      </button>
    </>
  )
}