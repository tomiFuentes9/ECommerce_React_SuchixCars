import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './ItemListContainer/ItemListContainer'
import { Navbar } from './Navbar/Navbar'


export const App = () => {
  //Aqui irian los hooks
   return (
     <div>
        <BrowserRouter>
          <Navbar/>
            <Routes>
             <Route path='/' element={<ItemListContainer/>}/>
             <Route path='/category/:category' element={<ItemListContainer/>}/>
             <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
     </div>
   )
}








//export const App = () => {
   /*
     HTML                                 JSX
    ------------------------------------------------------------------------------------
     class                          ->   className
     <input>                        ->   <input />
     `${valor}`                     ->   {valor}
     style = "nombreProp: valor"    ->   style = {{"nombreProp": "valor"}}
     mayor parte de las propiedades ->   camelCase
    */
/*
const valor = 21
    return (
     <div className='divGeneral' style = {{color: "#FF5733"}}>
         <h1>Hola!!</h1>
         <p>{valor}</p>
         <input type="text" /> 
     </div>
   )
}*/
