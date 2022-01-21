import { typesProducts } from '../types/types';

const initialState = {
    categories: []
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case typesProducts.categories:
            return {
                categories: [...action.payload]
            }
    
        default:
            return state;
    }
}
