import { typesProducts } from '../types/types';
import { addDoc, collection, getDocs, query, where, doc, deleteDoc} from "@firebase/firestore";
import { db } from '../firebase/firebaseConfig';

//SEARCH PRODUCT ---------------------------------------------

//Action Search Product Async
export const searchProductAsync = (product) => {

    return async (dispatch) => {
        const prodCollections = collection(db, "productos");
        const q = query(prodCollections, where("nameproduct", "==", product))
        const datos = await getDocs(q);
        //console.log(datos);

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        console.log(producto);
        dispatch(searchProductSync(producto))
    }
}

//Action Search Product Sync
export const searchProductSync = (product) => {
    return {
        type: typesProducts.search,
        payload: product
    }
}






//DELETE PRODUCT ---------------------------------------------

//Action Delete Product Async
export const deleteProductAsync = (code) => {
    return async (dispatch) => {
        
        const prodCollection = collection(db, "productos");
        const q = query(prodCollection, where("codeproduct", "==", code))
        //console.log(q);

        const datos = await getDocs(q);
        //console.log(datos);

        datos.forEach((docu) => {
            //console.log(docu);
            //console.log(docu.id);
            deleteDoc(doc(db, "productos", docu.id));
        })
        dispatch(deleteProductSync(code));
    }
}

//Action Delete Product Sync
export const deleteProductSync = (code) => {
    return {
        type: typesProducts.delete,
        payload: code
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