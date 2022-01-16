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
                products: [...action.payload]
            }
        
        case typesProducts.delete:
            return {
                products: state.products.filter(prod => prod.codeproduct !== action.payload)
            }
    
        default:
            return state;
    }
}


