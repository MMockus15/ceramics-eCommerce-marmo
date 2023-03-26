import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
