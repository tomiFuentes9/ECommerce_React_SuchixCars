import { createContext, useContext, useState} from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        return cartList.some(p => p.id === id)
    }

    const addToCart = (prod, qty) => {
        if(isInCart(prod.id)){
            const index = cartList.findIndex(item => item.id === prod.id)
            const cart = [...cartList]
            cart[index].quantity = qty
            setCartList(cart)
        }else {
            const newProd = {
                ...prod, 
                quantity: qty
            }
            setCartList([...cartList, newProd])
        }
    }

    const cleanCart = () => {
        setCartList([])
    }

    const deleteProduct = (id) =>{
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const getProdQuantity = () => {
        return cartList.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return cartList.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
    }
    console.log(cartList)
    return (
        <CartContext.Provider value={ {cartList, addToCart, cleanCart, deleteProduct, getProdQuantity, totalPrice} }>
            { props.children }
        </CartContext.Provider>
    );
}
export default CartContextProvider;