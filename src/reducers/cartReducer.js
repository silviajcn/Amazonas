import { typesCart } from '../types/types';

export const initialState = {
    cart: [],
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case typesCart.addcart: {
            let newItem = action.payload
            //console.log(newItem);

            let itemInCart = state.cart.find((item) => item.id === newItem.id);

           return itemInCart
           ? {
                ...state,
                cart: state.cart.map((item) =>
                item.id === newItem.id
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

            let itemToDelete = state.cart.find((item) => item.id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                    item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                :    item
                    ),
                  }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                  };
        }
        
        case typesCart.removeall: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        
        case typesCart.clearcart: {
            return initialState;
        } 
            
    
        default:
            return state;
    }
}
