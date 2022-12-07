import React from "react";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card>
      <h3>{product.title}</h3>
      <img src={product.pictureUrl} alt="" />
      <p>{product.author}</p>
      <p className="price">${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <ButtonPrimary>Ver detalle</ButtonPrimary>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  width: 250px;
  background-color: #d5d5d5;
  border-radius: 20px;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0.5rem;
  }

  .price {
    color: #da6868;
    font-style: bold;
  }

  &:hover {
    background-color: #c2c2c2;
    img {
      opacity: 100%;
    }
  }

  img {
    width: 150px;
    height: 200px;
    border-radius: 5px;
    opacity: 0.5;
  }

  @media (max-width: 500px) {
    width: 180px;
    height: 300px;
    margin: 5px;
    font-size: x-small;

    img {
      height: 150px;
      width: 100px;
    }
  }
`;

export default Item;
