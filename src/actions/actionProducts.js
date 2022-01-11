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

        const products = [];
        querySnapshot.forEach((doc) => {
            //console.log(doc);
            //console.log(doc.data());
            products.push({
                ...doc.data()
            })
        });
        console.log(products);
        dispatch(listProductsSync(products));
    }
}

//Action List Product Sync
export const listProductsSync = (products) => {
    return {
        type: typesProducts.list,
        payload: products
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
        .catch(e => {
            console.log(e);
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