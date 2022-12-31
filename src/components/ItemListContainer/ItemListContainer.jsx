import styled from "styled-components";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

export const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  const getProductsWithCategory = () => getProducts(categoryId);

  const {
    data: products,
    error,
    isLoading,
  } = useAsync(getProductsWithCategory, [categoryId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

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
