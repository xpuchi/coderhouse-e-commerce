import styled from "styled-components";
import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getProductsByCategory(categoryId)
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);

  const title = greeting ? greeting : categoryId;

  return (
    <>
      <Title>
        <h1>{title}</h1>
      </Title>
      <ListContainer>
        <ItemList products={products} />
      </ListContainer>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template: 420px / auto auto auto auto;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin: 30px;

  @media (max-width: 500px) {
    display: grid;
    grid-template: 250px / auto auto;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 30px;
  }
`;
