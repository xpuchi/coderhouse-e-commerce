import React from "react";
import styled from "styled-components";
import { TbSearch } from "react-icons/tb";

export function SearchContainer() {
  return (
    <SearchCntainer>
      <SearchBar type="text" placeholder="Buscar.." />
      <Button>
        <TbSearch />
      </Button>
    </SearchCntainer>
  );
}

const SearchCntainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 10rem;
`;
const SearchBar = styled.input`
  border: 2px solid #da6868;
  padding: 1rem;
  border-radius: 6px 0 0 6px;
  width: 30rem;
  height: 1rem;
  font-family: "Quicksand", sans-serif;
  font-size: 1rem;
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: #da6868;
  color: white;
  font-size: 1rem;
  font-family: "Quicksand", sans-serif;
  padding: 1rem;
  border-radius: 0 6px 6px 0;

  &:hover {
    background-color: #ed9c9c;
  }
`;
