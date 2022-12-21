import React, { useContext } from "react";
import { TbShoppingCart } from "react-icons/tb";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
  const { count } = useContext(CartContext);

  // const totalQuantity = getQuantity();

  return (
    <Cart>
      <TbShoppingCart />
      {count > 0 ? <span>{count}</span> : null}
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
  color: white;
  background-color: #ffa6a6;

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
`;

export default CartWidget;
