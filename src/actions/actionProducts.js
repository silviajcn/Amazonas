import { typesProducts } from '../types/types';

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

//Action List Product Sync
export const listProductsSync = (products) => {
    return {
        type: typesProducts.list,
        payload: products
    }
}



//CREATE PRODUCT ----------------------------------------------

//Action Create Product Async

//Action Create Product Sync
export const registerProductSync = (product) => {
    return {
        type: typesProducts.register,
        payload: product
    }
}