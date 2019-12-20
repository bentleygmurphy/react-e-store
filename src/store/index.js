import { createStore, combineReducers } from 'redux';
import productReducer from './productReducer';

const reducer = combineReducers({
    products: productReducer,
})

const store = createStore(reducer);

export default store;