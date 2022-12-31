import React from "react";
import styled from "styled-components";

function ConfirmedOrder({ id }) {
  return (
    <CheckoutStyle>
      <h1>¡Felicidades! Compra realizada con éxito</h1>
      <h4>El id de tu compra es "{id}"</h4>
      <img src="/images/shopdone.png" alt="shopping-girl" />
    </CheckoutStyle>
  );
}

const CheckoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  img {
    width: 600px;
    height: auto;
  }
`;

export default ConfirmedOrder;
