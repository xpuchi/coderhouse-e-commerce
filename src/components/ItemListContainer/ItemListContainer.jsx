import React from "react";
import styled from "styled-components";

export const ItemListContainer = ({ greeting }) => {
  // const {greeting} = props;
  return (
    <Container>
      <h1>{greeting}</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #da6868;
`;
