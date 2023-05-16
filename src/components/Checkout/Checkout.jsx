import { useRef } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createOrdenDeCompra, getOrdenDeCompra, getProduct, updateProd } from "../../firebase/firebase"
export const Checkout = () => {

    const datForm = useRef()
    const { totalPrice, cleanCart, cartList } = useCartContext()
    let navigate = useNavigate()

    const consultarForm = (e) => {
        e.preventDefault()
        const datosForm = new FormData(datForm.current)
        const formCliente = Object.fromEntries(datosForm)
        
        const cart = [...cartList]

        cart.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBBD => {
                if (prodBBD.stock >= prodCarrito.quantity) {
                    prodBBD.stock -= prodCarrito.quantity
                    updateProd(prodBBD.id, prodBBD) 
                } else {
                    console.log("La cantidad de autos que selecciono supera el stock actual")
                }
            })
        })
        
        const cartFiltered = cart.map(prod => ({ id: prod.id, quantity: prod.quantity, precio: prod.precio }));

        createOrdenDeCompra(formCliente, totalPrice(), cartFiltered, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {toast(`Muchas gracias por comprar con nosotros!!!  Tu compra fue por un total de ${totalPrice()}, nos contactaremos en breve a los datos indicados, para acercarte el NRO de orden y coordinar el envio/retiro de el/los vehiculos`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                cleanCart()
                e.target.reset() 
                navigate("/") 
            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <>
            {
                cartList.length === 0 ?
                    <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                    </>

                    :

                    <div className="container" style={{ margin: 2 }}>
                        <form onSubmit={consultarForm} ref={datForm}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label"> Nombre Completo</label>
                                <input type="text" className="form-control" name="nombre" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label"> Mail</label>
                                <input type="email" className="form-control" name="mail" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Repetir Mail</label>
                                <input type="email" className="form-control" name="mailRep" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dni" className="form-label">DNI o nro de documento</label>
                                <input type="number" className="form-control" name="nroDoc" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tel" className="form-label">Telefono de contacto</label>
                                <input type="number" className="form-control" name="cel" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direc" className="form-label">Direccion</label>
                                <input type="text" className="form-control" name="direc" />
                            </div>
                            <button type="submit" className="btn btn-dark">Terminar compra</button>
                        </form>
                    </div>
            }
        </>

    )
}