import React from "react";
import styled from "styled-components";
import { TbCreditCard, TbTruck, TbBrandTelegram } from "react-icons/tb";

export function Banner() {
  return (
    <BannerInfo>
      <div>
        <TbBrandTelegram />
        <p>
          <b>Envíos a todo el país</b>
          <br />
          Recibí tu libro donde quieras
        </p>
      </div>
      <div>
        <TbTruck />
        <p>
          <b>Envío gratis</b>
          <br />
          Para compras desde $4500
        </p>
      </div>
      <div>
        <TbCreditCard />
        <p>
          <b>3 cuotas sin interés</b>
          <br />
          Todas las tarjetas de crédito
        </p>
      </div>
    </BannerInfo>
  );
}

const BannerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 10rem;
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  gap: 3rem;
  background-color: #dedede;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background-color: #dedede;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
  p {
    font-size: 15px;
  }
`;
