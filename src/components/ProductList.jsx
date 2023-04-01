import React from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector(state => state.products.products);

  return (
    <div>
      <h2>Hand-thrown Ceramics</h2>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
