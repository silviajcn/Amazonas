import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { typesCompras } from '../types/types'

//CREATE PRODUCT ----------------------------------------------

// Asyn action register compra
export const registerCompraAsync = (newCompra) => {
    return (dispatch) => {
        addDoc(collection(db,"compras"),newCompra)
        .then(resp => {
            dispatch(registerCompraSync(newCompra))
            dispatch(listComprasAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//Action Create Product Sync
export const registerCompraSync = (compra) => {
    return {
        type: typesCompras.register,
        payload: compra
    }
}




// Asyn action list compras
export const listComprasAsync = () => {

    return async (dispatch)  => {
        const querySnapshot = await getDocs(collection(db, "compras"));

        const compras = []
        querySnapshot.forEach((doc)=> {
        compras.push({
                ...doc.data()
            })
        })
        //console.log(compras);
        dispatch(listComprasSync(compras))
    }
}

// Sycn action list compras ------------------------------------------
export const listComprasSync = (compra) =>{
    return{
        type: typesCompras.list,
        payload: compra
    }
}