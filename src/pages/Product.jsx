import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../pages/Cart"


const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state) => state.cart);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button disabled={isInCart} onClick={handleAddToCart}>
        {isInCart ? "In Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;

