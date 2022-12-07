import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ButtonPrimary } from "../Button/ButtonPrimary";
// import { TbTrash } from "react-icons/tb";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // const reset = () => {
  //   setCount(initial);
  // };

  return (
    <Counter>
      <ButtonPrimary onClick={() => decrease()}>-</ButtonPrimary>
      {count}
      <ButtonPrimary onClick={() => increment()}>+</ButtonPrimary>
      {/* <ButtonPrimary onClick={() => reset()}>
        <TbTrash />
      </ButtonPrimary> */}
      <ButtonPrimary onClick={() => onAdd(count)} disabled={count === 0}>
        Agregar al carrito
      </ButtonPrimary>
    </Counter>
  );
}

export default ItemCount;

const Counter = styled.div`
  display: flex;
  align-items: center;
`;
