import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";
import { ButtonPrimary } from "../Button/ButtonPrimary";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user, login, logout } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  if (user) {
    return (
      <LoginCard>
        <h1>Logout</h1>
        <ButtonPrimary onClick={() => logout()}>Logout</ButtonPrimary>
      </LoginCard>
    );
  }

  return (
    <LoginCard>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonPrimary type="submit">Login</ButtonPrimary>
      </form>
    </LoginCard>
  );
}

const LoginCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;

    input {
      padding: 0.5rem;
      margin: 5px;
      border-radius: 10px;
      border: #da6868 solid;
    }
  }
`;
