import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
import { TbBook } from "react-icons/tb";
import { Button } from "../";

export function Navbar() {
  return (
    <Nav>
      <Home>
        <TbBook />
        Bookstore
      </Home>

      <div>
        <Button>Inicio</Button>
        <Button>Productos</Button>
        <Button>Bestsellers</Button>
        <Button>Contacto</Button>
      </div>

      <div>
        <CartWidget />
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #ff9e9e;
  padding: 1rem 2rem;
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  font-weight: 600;
`;

// const Button = styled.button`
//   border: none;
//   cursor: pointer;
//   background: none;
//   font-size: 1rem;
//   font-family: "Quicksand", sans-serif;

//   &:hover {
//     color: #ffdddd;
//   }
// `;
