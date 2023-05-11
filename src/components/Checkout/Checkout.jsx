import { useRef } from "react"
import { Form } from "react-router-dom"
export const Checkout = () => {
   
    const datForm = useRef()

    const consultarForm = (e) => {
        e.preventDefault()
        const datosForm = new FormData(datForm.current)
        const formCliente = Object.fromEntries(datosForm)
        e.target.reset()
    }
    return (
     <div className="container" style={{margin: 2}}>
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
   )
}