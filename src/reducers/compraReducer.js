import { typesCompras } from "../types/types";

const initialState = {
    compras: []
}

export const compraReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCompras.register:
            return {
                compras: [action.payload]
            }
        case typesCompras.list:
            return {
                compras: [...action.payload]
            }

        default:
            return state

    }
}