import { typesProducts } from '../types/types';
import { addDoc, collection, getDocs, query, where, doc, deleteDoc, updateDoc } from "@firebase/firestore";
import { db } from '../firebase/firebaseConfig';

//CATEGORIES PRODUCTS ---------------------------------------------

//Action CATEGORY Product Async
export const categoryProductAsync = (category) => {

    return async (dispatch) => {
        const prodCollections = collection(db, "productos");
        const q = query(prodCollections, where("categoryproduct", "==", category))
        const datos = await getDocs(q);
        //console.log(datos);

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        console.log(producto);
        dispatch(categoryProductSync(producto))
    }
}

//Action Category Product Sync
export const categoryProductSync = (category) => {
    return {
        type: typesProducts.category,
        payload: category
    }
}




//LIST CATEGORIES ---------------------------------------------

//Action List CATEGORIES Async
 export const listCategoriesAsync = () => {
     return async (dispatch) => {

         const querySnapshot = await getDocs(collection(db, "categories"));
         //console.log(querySnapshot);

         const categories = [];
         querySnapshot.forEach((doc) => {
            //console.log(doc);
            //console.log(doc.data());
             categories.push({
                 ...doc.data()
             })
         });
         //console.log(productos);
         dispatch(listCategoriesSync(categories));
     }
 }


//Action List Product Sync
export const listCategoriesSync = (categories) => {
    return {
        type: typesProducts.categories,
        payload: categories
    }
}






//SEARCH PRODUCT ---------------------------------------------

//Action Search Product Async
export const searchProductAsync = (product) => {

    return async (dispatch) => {
        const prodCollections = collection(db, "productos");
        const q = query(prodCollections, where("categoryproduct", "==", product))
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


//SHOW DETAILS PRODUCT ---------------------------------------------

//Action Show Detail Product Async
export const showDetailProductAsync = (code) => {

    return async (dispatch) => {
        const prodCollections = collection(db, "productos");
        const q = query(prodCollections, where("codeproduct", "==", code))
        const datos = await getDocs(q);
        //console.log(datos);

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        //console.log(producto);
        dispatch(showDetailProductSync(producto))
    }
}

//Action Show Detail Product Sync
export const showDetailProductSync = (product) => {
    return {
        type: typesProducts.detail,
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



//UPDATE PRODUCT ---------------------------------------------

//Action Update Product Async
 export const updateProductsAsync = (code) => {
    console.log(code);
     
    return async (dispatch) => {
        
    }
 }


//UPDATE PRODUCT ---------------------------------------------

//Action update Product Sync
export const updateProduct = (products) =>{
    return{
        type: typesProducts.update,
        payload: products
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
            //console.log(doc.data());
             productos.push({
                 ...doc.data()
             })
         });
         //console.log(productos);
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