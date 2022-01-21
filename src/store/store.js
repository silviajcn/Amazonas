import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import { productsReducer } from '../reducers/productsReducer';
//import { comentsReducer } from '../reducers/comentsReducer';
import { comReducer } from '../reducers/comReducer';
import { carReducer } from '../reducers/carReducer';
import { categoriesReducer } from '../reducers/categoriesReducer';

//Redux Devtools
const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    products: productsReducer,
    car: carReducer,
    coments: comReducer,
    categories: categoriesReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)