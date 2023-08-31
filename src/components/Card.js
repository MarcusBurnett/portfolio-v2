import React from 'react';
import styled from 'styled-components/macro';
import { useTheme } from '../context/theme';

const Container = styled.div`
  display: flex;
  position: relative;
`;

const StyledCard = styled.div`
  position: relative;
  padding: ${({ padding = '3rem' }) => padding};
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#FFFFFF'};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.4s ease;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  border: ${({ border }) => border};
  box-shadow: ${({ $boxShadow }) => `-30px 30px 0px 0px ${$boxShadow}`};
`;

function Card({ children, className, cardClassName, onClick }) {
  const { theme } = useTheme();

  return (
    <Container className={className}>
      <StyledCard
        onClick={onClick}
        className={`card${` ${cardClassName}` || ''}`}
        $backgroundColor={theme.card}
        $boxShadow={theme.boxShadow}
        $borderRadius={theme.borderRadius.default}
        border={theme.border.default}
      >
        {children}
      </StyledCard>
    </Container>
  );
}

export default Card;
