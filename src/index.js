import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPage } from "./pages";

import ReactDOM from "react-dom/client";



import productsReducer from "./redux/reducer/productsReducer";
import cartReducer from "./redux/reducer/cartReducer";
import { Home, Products, Product, AboutPage, Cart, Checkout, Login, Register, PageNotFound } from "./pages";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = configureStore({
  reducer: rootReducer
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:productId" element={<Product />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
