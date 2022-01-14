import { typesAddCar } from '../types/types';

// //Action update car
// export const udateCar = (id, cantidad) => {
//     return {
//         type: typesAddCar.update,
//         payload: id, 
//                  cantidad
//     }
// }

//Action delete item car
export const deleteItemCar = (id) => {
    return {
        type: typesAddCar.delete,
        payload: id, 
    }
}

//Action add item to car
export const addItemCar = (item) => {
    return {
        type: typesAddCar.add,
        payload: item, 
    }
}