export const CartWidget = ({ number }) => {
   return (
     <>
          
          <button className="btn btn-primary cart" type="button">
                <i className="fa-solid fa-cart-shopping"></i>
                <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle" >{number}</span>
          </button>
     </>
   )
}