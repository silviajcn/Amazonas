import { typesComents } from '../types/types';

const initialState = {
    coments: []
}

export const comentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesComents.register:
            return {
                coments: [action.payload]
            }
        
        case typesComents.list:
            return {
                ...state
            }
        
        case typesComents.delete:
            return {
                ...state
            }
    
        default:
            return state;
    }
}