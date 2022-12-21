import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
import { TbBook } from "react-icons/tb";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TbUser } from "react-icons/tb";

export function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <Nav>
      <Link to="/">
        <Home>
          <TbBook />
          <span>Bookstore</span>
        </Home>
      </Link>

      <div>
        <Link to="/">
          <Button>Inicio</Button>
        </Link>
        <Link to="/category/novedades">
          <Button>Novedades</Button>
        </Link>
        <Link to="/category/bestsellers">
          <Button>Bestsellers</Button>
        </Link>
        <Link to="/category/clasicos">
          <Button>Clásicos</Button>
        </Link>
        <Link to="contact">
          <Button>Contacto</Button>
        </Link>
      </div>

      <div className="login-cart">
        <Link to="/login">
          <Button className="login">
            <TbUser />
            {user ? "Logout" : "Login"}
          </Button>
        </Link>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #da6868;
  padding: 1rem;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 1rem;
  }

  a {
    text-decoration: none;
  }

  .login-cart {
    display: flex;
    flex-direction: row;
    gap: 0.3rem;
    align-items: flex-start;

    .login {
      display: flex;
      flex-direction: row;
      gap: 0.3rem;
      align-items: center;
    }
  }
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  font-weight: 600;
  color: white;

  span {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;
