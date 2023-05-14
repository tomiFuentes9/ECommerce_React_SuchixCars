import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './components/App.jsx';

//---------Context------------
import { CartContextProvider } from './context/CartContext.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);







/**
 * Se borro:

App.test

Webvitals

ogo

*logo

setupTest

Index.js -> Elimino linea 5 y líneas de 14 a 17

Index.css -> Eliminar su contenido

App.css -> Eliminar su contenido

App.js -> Eliminar linea 1 y todo el return()

Agregar en el return un H1

En carpeta public, eliminar logos, maifiesto y robots

Eliminar los links de HTML
 */