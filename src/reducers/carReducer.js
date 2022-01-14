import { typesAddCar } from '../types/types';

const initialState = {
    car: []
}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesAddCar.add:
            return {
                car: [...state.car, action.payload]
            }
        
        case typesAddCar.delete:
            return {
                car: state.car.filter(product => product.id !== action.payload)
            }
        
        case typesAddCar.update:
            return {
                ...state
            }
    
        default:
            return state;
    }
}
