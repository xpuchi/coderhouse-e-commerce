import React from "react";
import { TbShoppingCart } from "react-icons/tb";
import styled from "styled-components";

function CartWidget() {
  return (
    <Cart>
      <TbShoppingCart />
      <span>2</span>
    </Cart>
  );
}

const Cart = styled.button`
  position: relative;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 0.3rem;
  background: none;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;

  span {
    position: absolute;
    top: -5px;
    right: -3px;
    color: white;
    background-color: red;
    border-radius: 50%;
    padding: 0.1rem 0.3rem;
    font-size: 0.5rem;
  }

  &:hover {
    color: white;
    background-color: #da6868;
  }
`;

export default CartWidget;
