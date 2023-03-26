import { configureStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";

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
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
