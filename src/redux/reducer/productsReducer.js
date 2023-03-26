// productsReducer.js

import products from "./products";

const initialState = {
  products: products,
  loading: false,
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    case "UPDATE_PRODUCT":
      const updatedProducts = state.products.map(product => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            ...action.payload
          };
        }
        return product;
      });
      return {
        ...state,
        products: updatedProducts
      };
    default:
      return state;
  }
};

export default productsReducer;
