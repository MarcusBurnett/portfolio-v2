import React from 'react';
import styled from 'styled-components/macro';
import { Routes, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/theme';

const StyledAnimatedRouteContainer = styled(Routes)`
  width: 100%;
  height: 100%;
  position: relative;
  /* background-color: ${({ page }) => page}; */
  /* transition: background-color 0.4s ease; */
  /* overflow: hidden; */
`;

function AnimatedRouteContainer({ children }) {
  const { page } = useTheme();
  const location = useLocation();

  return (
    <StyledAnimatedRouteContainer location={location} backgroundColor={page}>
      {children}
    </StyledAnimatedRouteContainer>
  );
}

export default AnimatedRouteContainer;
