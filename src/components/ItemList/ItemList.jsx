import { Item } from "../Item/Item"
export const ItemList = ({productos}) => {
   console.log(productos)
   return (
     <>
       {productos.map(producto => <Item key={producto.id} item={producto}/>)}    
     </>
   )
}