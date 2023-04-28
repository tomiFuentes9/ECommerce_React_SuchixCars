import { Item } from "../Item/Item"
//Recibe array de productos y a cada uno de esos productos los voy a transformar en un componente.
export const ItemList = ({productos}) => {
   console.log(productos)
   return (
     <>
       {productos.map(producto => <Item key={producto.id} item={producto}/>)}    
     </>
   )
}