import React from 'react';
import styled from 'styled-components/macro';
import { fadeIn } from '../keyframes';
import { large, small } from '../styles/breakpoints';
import { useTheme } from '../context/theme';

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
    min-height: fit-content;
  }

  .Toastify__toast {
    border-radius: ${({ $borderRadius }) => $borderRadius};
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: ${({ color }) => color};
    border: ${({ border }) => border};
    font-family: ${({ font }) => font};
  }
`;

function Wrapper({ children }) {
  const { theme } = useTheme();

  return (
    <StyledWrapper
      id="wrapper"
      $backgroundColor={theme.card}
      color={theme.color}
      border={theme.border.default}
      $borderRadius={theme.borderRadius.small}
      font={theme.font}
    >
      {children}
    </StyledWrapper>
  );
}

export default Wrapper;
