import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

/*
REACT_APP_apiKey
REACT_APP_authDomain
REACT_APP_projectId
REACT_APP_storageBucket
REACT_APP_messagingSenderId
REACT_APP_appId
Probe utilizar las variables de entorno pero lamentablemente el CORB de google no me permite traer productos de la base de datos :( 

Los errores en cuestion:

Cross-Origin Read Blocking (CORB) blocked cross-origin response https://console.firebase.google.com/project/ecommerce-39655-suchanmauro/storage/ecommerce-39655-suchanmauro.appspot.com/files?hl=es with MIME type text/html. See https://www.chromestatus.com/feature/5629709824032768 for more details.

logger.ts:115 [2023-05-17T00:24:02.048Z]  @firebase/firestore: Firestore (9.22.0): Could not reach Cloud Firestore backend. Connection failed 1 times. Most recent error: FirebaseError: [code=permission-denied]: Permission denied: Consumer 'project:undefined' has been suspended.
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.

*/

const firebaseConfig = {
  apiKey: "AIzaSyCbXb7Boa8OW_MRi1ipUv3rIspDOW7wDHg",
  authDomain: "ecommerce-39655-suchanmauro.firebaseapp.com",
  projectId: "ecommerce-39655-suchanmauro",
  storageBucket: "ecommerce-39655-suchanmauro.appspot.com",
  messagingSenderId: "836046374285",
  appId: "1:836046374285:web:11f0c9fed34b21965aa9c4"
};

const app = initializeApp(firebaseConfig);

//---------------------------------------------------------------

const BDD = getFirestore()

export const crearProds = async () => {
    const promise = await fetch ('./productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(BDD, "productos"), {
            nombre:prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })

}

export const getProducts = async () => {
    const prods = await getDocs(collection(BDD, "productos"))
    const items = prods.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items 
}
  
export const getProduct = async (id) => {
    const prod = await getDoc(doc(BDD, "productos", id))
    const item = { ...prod.data(), id: prod.id}
    return item
}

export const updateProd = async(id, info) => {
    const estado = await updateDoc(doc(BDD, "productos", id), info)
    console.log(estado)
}

export const deleteProducto = async(id) => {
    const estado = await deleteDoc(doc(BDD, "productos", id))
    return estado
}

//----------------------------------------------------------------

export const createOrdenDeCompra = async(cliente, precioTotal, cartList, fecha) => {
    const ordenCompra = await addDoc(collection(BDD, "ordenCompra"),{
        cliente: cliente,
        items: cartList,
        precioTotal:precioTotal,
        fecha: fecha
    })
    console.log(ordenCompra)
}

export const getOrdenDeCompra = async(id) => {
    const ordenCompra = await getDoc(doc(BDD, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    console.log(item)
}

//Para testear
export const deleteOrdenCompra = async (id) => {
    await deleteDoc(doc(BDD, "ordenCompra", id))
}