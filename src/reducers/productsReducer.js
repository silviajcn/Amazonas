import { typesProducts } from '../types/types';

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducts.register:
            return {
                products: [action.payload]
            }
        
        case typesProducts.list:
            return {
                ...state
            }
        
        case typesProducts.delete:
            return {
                ...state
            }
    
        default:
            return state;
    }
}


