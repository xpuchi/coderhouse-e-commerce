import React from "react";
import styled from "styled-components";

import { ButtonPrimary } from "../Button/ButtonPrimary";
import { TbTrash } from "react-icons/tb";

export function ItemCount({ stock, initial, count, setCount }) {
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(initial);
  };

  return (
    <Counter>
      <ButtonPrimary onClick={() => decrease()}>-</ButtonPrimary>
      {count}
      <ButtonPrimary onClick={() => increment()}>+</ButtonPrimary>
      <ButtonPrimary onClick={() => reset()}>
        <TbTrash />
      </ButtonPrimary>

      {/* <ButtonPrimary onClick={() => onAdd(count)} disabled={count === 0}> */}
    </Counter>
  );
}

const Counter = styled.div`
  display: flex;
  align-items: center;
`;
