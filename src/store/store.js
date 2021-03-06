import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { productsReducer } from '../reducers/productsReducer';
import { comentsReducer } from '../reducers/comentsReducer';
import { cartReducer } from '../reducers/cartReducer';
import { categoriesReducer } from '../reducers/categoriesReducer';
import { compraReducer } from '../reducers/compraReducer';

//Redux Devtools
const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    products: productsReducer,
    shopping: cartReducer,
    coments: comentsReducer,
    categories: categoriesReducer,
    compras: compraReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)