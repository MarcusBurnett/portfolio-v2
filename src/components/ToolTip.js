import React from 'react';
import styled from 'styled-components/macro';
import { useTheme } from '../context/theme';

const StyledTooltip = styled.div`
  position: absolute;
  padding: 0.15rem 1rem;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid ${({ $backgroundColor }) => $backgroundColor};
    top: -0.4rem;
  }
`;

const Text = styled.span`
  font-size: 1.1rem;
  margin-top: 0.2rem;
  text-align: center;
  font-weight: 700;
  color: ${({ color }) => color};
  white-space: nowrap;
`;

export default function Tooltip({ children, className }) {
  const { theme } = useTheme();

  return (
    <StyledTooltip
      $borderRadius={theme.borderRadius.tooltip}
      $backgroundColor={theme.accent}
      className={className}
    >
      <Text color={theme.selected}>{children}</Text>
    </StyledTooltip>
  );
}
