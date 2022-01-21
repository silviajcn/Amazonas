import { typesCart } from '../types/types';

export const initialState = {
    cart: [],
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case typesCart.addcart: {
            let newItem = action.payload
            //console.log(newItem);

            let itemInCart = state.cart.find((item) => item.codeproduct === newItem.codeproduct);

           return itemInCart
           ? {
                ...state,
                cart: state.cart.map((item) =>
                item.codeproduct === newItem.codeproduct
                ? { ...item, quantity: item.quantity + 1 }
                : item
                ),
             }
             : {
                ...state,
                cart: [...state.cart, { ...newItem, quantity: 1 }],
             };
    

        }
        
        case typesCart.removeone: {

            let itemToDelete = state.cart.find((item) => item.codeproduct === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                    item.codeproduct === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                :    item
                    ),
                  }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item.codeproduct !== action.payload),
                  };
        }
        
        case typesCart.removeall: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.codeproduct !== action.payload),
            };
        }
        
        case typesCart.clearcart: {
            return initialState;
        } 
            
    
        default:
            return state;
    }
}
