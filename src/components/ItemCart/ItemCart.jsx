import { useCartContext } from "../../context/CartContext"
export const ItemCart = ({ item }) => {
    const { deleteProduct } = useCartContext()
    return (
        <div className="card mb-3 cardCart" sx={{margin: 2}}>
            <div className="row g-0" >
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt={`Imagen de ${item.nombre}`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                        <p className="card-text">Cantidad: {item.quantity}</p>
                        <p className="card-text">Precio Unitario:$ {item.precio}</p>
                        <p className="card-text">Subtotal: ${item.precio * item.quantity}</p>
                        <button className="btn btn-danger" onClick={() => deleteProduct(item.id)}>Eliminar producto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}