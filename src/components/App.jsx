import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';

import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './ItemListContainer/ItemListContainer'
import { Navbar } from './Navbar/Navbar'
import { Checkout } from './Checkout/Checkout'
import { Cart } from './Cart/Cart'

import { crearProds, getProducts } from '../firebase/firebase'

export const App = () => {
   //crearProds()
   getProducts()
   return (
     <div>
        <BrowserRouter>
          <Navbar/>
          <ToastContainer />
            <Routes>
             <Route path='/' element={<ItemListContainer/>}/>
             <Route path='/category/:category' element={<ItemListContainer/>}/>
             <Route path='/product/:id' element={<ItemDetailContainer/>}/>
             <Route path='/cart' element={<Cart />}/>
             <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
     </div>
   )
}

