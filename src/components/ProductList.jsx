import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  margin: 20px 0;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #332e2c;
    font-family: "Indie Flower", cursive;
  }

  img {
    max-width: 100%;
  }

  h3 {
    margin: 10px 0;
    color: #332e2c;
    font-size: 1.5rem;
    font-family: "Indie Flower", cursive;
  }

  p {
    color: #332e2c;
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-family: "Indie Flower", cursive;
  }

  button {
    background-color: #332e2c;
    color: #e1c8ab;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    margin: 10px 0;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e1c8ab;
      color: #332e2c;
    }
  }
`;

const ProductList = () => {
  const products = useSelector(state => state.products.products);

  return (
    <ProductContainer>
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
    </ProductContainer>
  );
};

export default ProductList;

