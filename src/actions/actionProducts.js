import { typesProducts } from '../types/types';
import { addDoc, collection, getDocs, query, where, doc, deleteDoc} from "@firebase/firestore";
import { db } from '../firebase/firebaseConfig';

//DELETE PRODUCT ---------------------------------------------

//Action Delete Product Async

//Action Delete Product Sync
export const deleteProductSync = (email) => {
    return {
        type: typesProducts.delete,
        payload: email
    }
}





//LIST PRODUCT ---------------------------------------------

//Action List Product Async
export const listProductsAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "productos"));
        //console.log(querySnapshot);

        const productos = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc);
            console.log(doc.data());
            productos.push({
                ...doc.data()
            })
        });
        console.log(productos);
        dispatch(listProductsSync(productos));
    }
}

//Action List Product Sync
export const listProductsSync = (productos) => {
    return {
        type: typesProducts.list,
        payload: productos
    }
}



//CREATE PRODUCT ----------------------------------------------

//Action Create Product Async
export const registerProductAsync = (newProduct) => {
    return (dispatch) => {
        addDoc(collection(db,"productos"),newProduct)
        .then(resp => {
            dispatch(registerProductSync(newProduct))
            dispatch(listProductsAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//Action Create Product Sync
export const registerProductSync = (product) => {
    return {
        type: typesProducts.register,
        payload: product
    }
}