import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
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