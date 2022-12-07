import React from "react";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import styled from "styled-components";

export function Contact() {
  return (
    <ContactForm>
      <h2>Formulario de Contacto</h2>
      <p>Dejanos tu mensaje para que podamos contactarnos con vos.</p>

      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Apellido" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Teléfono" />
      <textarea name="message" placeholder="Mensaje" />
      <ButtonPrimary>Enviar</ButtonPrimary>
    </ContactForm>
  );
}

const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  input,
  textarea {
    border: #da6868 solid;
    width: 400px;
    border-radius: 10px;
    padding: 15px;
    font-family: "Quicksand", sans-serif;
  }
`;
