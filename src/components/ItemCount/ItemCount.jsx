import { useCount } from "../../hooks/useCount"

export const ItemCount = ({ValInicial, min, max, onAdd}) => {
     const {count, res, sum, reset} = useCount(ValInicial, min, max)
    return (
     <>
          <button className="btn btn-dark" onClick={res}>-</button>
                 {count}
          <button className="btn btn-dark" onClick={sum}>+</button>
          <button className="btn btn-light" onClick={reset}>Resetear contador</button>
          <button className="btn btn-dark" onClick={() => onAdd(count)}>Agregar a compra</button>
     </>
   )
}