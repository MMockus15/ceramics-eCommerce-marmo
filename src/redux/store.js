import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducer/userReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
