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
export const deleteCartSync = (id, all = false) =>
    all
        ? { type: typesCart.removeall, payload: id }  
        : { type: typesCart.removeone, payload: id };
    
////Action DELETE Product Sync
export const clearCartSync = () => {
    return {
        type: typesCart.clearcart
    }
}
