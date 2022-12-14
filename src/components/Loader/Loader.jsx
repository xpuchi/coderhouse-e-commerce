import React from "react";
import styled, { keyframes } from "styled-components";

function Loader() {
  return (
    <>
      <LoaderSpinner />
    </>
  );
}

const LoaderAnimation = keyframes`
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #c9405b, 1.8em -1.8em 0 0em rgba(201,64,91, 0.2), 2.5em 0em 0 0em rgba(201,64,91, 0.2), 1.75em 1.75em 0 0em rgba(201,64,91, 0.2), 0em 2.5em 0 0em rgba(201,64,91, 0.2), -1.8em 1.8em 0 0em rgba(201,64,91, 0.2), -2.6em 0em 0 0em rgba(201,64,91, 0.5), -1.8em -1.8em 0 0em rgba(201,64,91, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(201,64,91, 0.7), 1.8em -1.8em 0 0em #c9405b, 2.5em 0em 0 0em rgba(201,64,91, 0.2), 1.75em 1.75em 0 0em rgba(201,64,91, 0.2), 0em 2.5em 0 0em rgba(201,64,91, 0.2), -1.8em 1.8em 0 0em rgba(201,64,91, 0.2), -2.6em 0em 0 0em rgba(201,64,91, 0.2), -1.8em -1.8em 0 0em rgba(201,64,91, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(201,64,91, 0.5), 1.8em -1.8em 0 0em rgba(201,64,91, 0.7), 2.5em 0em 0 0em #c9405b, 1.75em 1.75em 0 0em rgba(201,64,91, 0.2), 0em 2.5em 0 0em rgba(201,64,91, 0.2), -1.8em 1.8em 0 0em rgba(201,64,91, 0.2), -2.6em 0em 0 0em rgba(201,64,91, 0.2), -1.8em -1.8em 0 0em rgba(201,64,91, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(201,64,91, 0.2), 1.8em -1.8em 0 0em rgba(201,64,91, 0.5), 2.5em 0em 0 0em rgba(201,64,91, 0.7), 1.75em 1.75em 0 0em #c9405b, 0em 2.5em 0 0em rgba(201,64,91, 0.2), -1.8em 1.8em 0 0em rgba(201,64,91, 0.2), -2.6em 0em 0 0em rgba(201,64,91, 0.2), -1.8em -1.8em 0 0em rgba(201,64,91, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(201,64,91, 0.2), 1.8em -1.8em 0 0em rgba(201,64,91, 0.2), 2.5em 0em 0 0em rgba(201,64,91, 0.5), 1.75em 1.75em 0 0em rgba(201,64,91, 0.7), 0em 2.5em 0 0em #c9405b, -1.8em 1.8em 0 0em rgba(201,64,91, 0.2), -2.6em 0em 0 0em rgba(201,64,91, 0.2), -1.8em -1.8em 0 0em rgba(201,64,91, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(201,64,91, 0.2), 1.8em -1.8em 0 0em rgba(201,64,91, 0.2), 2.5em 0em 0 0em rgba(201,64,91, 0.2), 1.75em 1.75em 0 0em rgba(201,64,91, 0.5), 0em 2.5em 0 0em rgba(201,64,91, 0.7), -1.8em 1.8em 0 0em #c9405b, -2.6em 0em 0 0em rgba(201,64,91, 0.2), -1.8em -1.8em 0 0em rgba(201,64,91, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(201,64,91, 0.2), 1.8em -1.8em 0 0em rgba(201,64,91, 0.2), 2.5em 0em 0 0em rgba(201,64,91, 0.2), 1.75em 1.75em 0 0em rgba(201,64,91, 0.2), 0em 2.5em 0 0em rgba(201,64,91, 0.5), -1.8em 1.8em 0 0em rgba(201,64,91, 0.7), -2.6em 0em 0 0em #c9405b, -1.8em -1.8em 0 0em rgba(201,64,91, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(201,64,91, 0.2), 1.8em -1.8em 0 0em rgba(201,64,91, 0.2), 2.5em 0em 0 0em rgba(201,64,91, 0.2), 1.75em 1.75em 0 0em rgba(201,64,91, 0.2), 0em 2.5em 0 0em rgba(201,64,91, 0.2), -1.8em 1.8em 0 0em rgba(201,64,91, 0.5), -2.6em 0em 0 0em rgba(201,64,91, 0.7), -1.8em -1.8em 0 0em #c9405b;
  }
`;

const LoaderSpinner = styled.div`
  margin: 100px auto;
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation-name: ${LoaderAnimation};
  animation-duration: 1.1s;
  animation-iteration-count: infinite;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
`;

export default Loader;
