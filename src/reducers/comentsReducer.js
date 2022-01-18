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
                coments: [...action.payload]
            }
        
        case typesComents.update:
            return {
                ...state,
                coments: action.payload
            }
        
        case typesComents.delete:
            return {
                coments: state.coments.filter(com => com.emailuser !== action.payload)
            }
    
        default:
            return state;
    }
}