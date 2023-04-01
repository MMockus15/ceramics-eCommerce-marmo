import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #e1c8ab;
  padding: 20px;
  font-family: "Indie Flower", cursive;
  display: flex;
  justify-content: space-between;
`;

const BrandLink = styled(NavLink)`
  color: #332e2c;
  font-size: 2rem;
  font-weight: bold;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
`;

const ButtonLink = styled(NavLink)`
  background-color: #332e2c;
  color: #e1c8ab;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e1c8ab;
    color: #332e2c;
  }
`;

const Navbar = () => {
  const cartItems = useSelector((state) => state.handleCart);

  return (
    <NavbarContainer>
      <BrandLink to="/">React Ecommerce</BrandLink>
      <NavLinks>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/product">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavLinks>
      <div>
        <ButtonLink to="/login">
          <i className="fa fa-sign-in-alt mr-1"></i> Login
        </ButtonLink>
        <ButtonLink to="/register">
          <i className="fa fa-user-plus mr-1"></i> Register
        </ButtonLink>
        <ButtonLink to="/cart">
          <i className="fa fa-cart-shopping mr-1"></i> Cart (
          {cartItems && cartItems.length})
        </ButtonLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
