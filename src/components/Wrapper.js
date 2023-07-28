import React from 'react';
import styled from 'styled-components/macro';
import { fadeIn } from '../keyframes';
import { large, small } from '../styles/breakpoints';

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
  opacity: 0;
  animation: 1s ${fadeIn} ease forwards;
  overflow: auto;

  @media screen and (max-width: ${large}) {
    overflow: visible;
    height: 100vh;
  }

  @media screen and (max-width: ${small}) {
    flex-direction: column;
    height: auto;
  }

  nav {
    /* height: 100vh; */
    min-height: fit-content;
    /* overflow-y: auto;
    overflow-x: visible; */
  }
`;

function Wrapper({ children }) {
  return <StyledWrapper id="wrapper">{children}</StyledWrapper>;
}

export default Wrapper;
