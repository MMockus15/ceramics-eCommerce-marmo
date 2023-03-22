import React from 'react';
import ReactDOM from 'react-dom/client';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import Products from './components/Product/Products';


import { Home } from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      <Routes>
        <Route path ="/" element={<Home />} />
        {/* <Route path ="/product" element={<Products />} />
        <Route path ="/" element={<Home />} />
        <Route path ="/" element={<Home />} />
        <Route path ="/" element={<Home />} />
        <Route path ="/" element={<Home />} />
        <Route path ="/" element={<Home />} />
        <Route path ="/" element={<Home />} />
        <Route path ="/" element={<Home />} /> */}
      </Routes>
      {/* </Provider> */}
  </BrowserRouter>
);
