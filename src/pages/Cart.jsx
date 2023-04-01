import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Indie Flower', cursive;
  margin-top: 50px;
`;

const CartTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 50px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 20px;
`;

const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CartItemName = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const CartItemPrice = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const CartItemQuantity = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const CartItemTotalPrice = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.handleCart);

  const handleRemoveCartItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  }

  const handleQuantityChange = (e, id) => {
    dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id, quantity: e.target.value } });
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  const addProductToCart = (product) => {
	return { type: 'ADD_TO_CART', payload: product };
  }

  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      {cartItems.length === 0 ?
        <p>Your cart is currently empty.</p> :
        cartItems.map(item => (
          <CartItem key={item.id}>
            <CartItemImage src={item.image} alt={item.name} />
            <CartItemDetails>
              <CartItemName>{item.name}</CartItemName>
              <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
              <CartItemQuantity>
                <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                <input type="number" id={`quantity-${item.id}`} min="1" max="10" value={item.quantity} onChange={(e) => handleQuantityChange(e, item.id)} />
              </CartItemQuantity>
            </CartItemDetails>
            <CartItemTotalPrice>${(item.price * item.quantity).toFixed(2)}</CartItemTotalPrice>
            <button onClick={() => handleRemoveCartItem(item.id)}>Remove</button>
          </CartItem>
        ))
      }
      {cartItems.length > 0 &&
        <div>
          <p>Total: ${calculateTotalPrice().toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      }
    </CartContainer>
  );
}

export default Cart;

export const addProductToCart = (product) => ({ type: 'ADD_TO_CART', payload: product });