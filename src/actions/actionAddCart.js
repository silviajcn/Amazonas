import { typesCart } from '../types/types';

//Action CREATE Product Sync
export const addCartSync = (item) => {
    //console.log(item);
    return {
        type: typesCart.addcart,
        payload: item
    }
}

//Action CREATE Product Sync
export const deleteCartSync = (codeproduct, all = false) =>
    all
        ? { type: typesCart.removeall, payload: codeproduct }  
        : { type: typesCart.removeone, payload: codeproduct };
    
////Action DELETE Product Sync
export const clearCartSync = () => {
    return {
        type: typesCart.clearcart
    }
}
