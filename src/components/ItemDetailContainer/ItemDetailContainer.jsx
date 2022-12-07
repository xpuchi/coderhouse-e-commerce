import React from "react";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import styled from "styled-components";

export function ItemDetailContainer() {
  return (
    <CardDetail>
      <ItemDetail />
    </CardDetail>
  );
}

const CardDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
