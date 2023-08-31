import React from 'react';
import styled from 'styled-components/macro';
import Spinner from './Spinner';
import { small as smallBreakpoint } from '../styles/breakpoints';
import { useTheme } from '../context/theme';

const StyledButton = styled.button`
  font-weight: 700;
  color: ${({ color }) => color};
  position: relative;
  min-height: ${({ small }) => (small ? '3rem' : '4.4rem')};
  width: ${({ small }) => (small ? 'auto' : '100%')};
  padding: 0 2.5rem;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  font-size: 1.4rem;
  border: ${({ border }) => border};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor};
    box-shadow: ${({ boxShadow }) => boxShadow};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ focusBorderColor }) => focusBorderColor};
  }

  @media screen and (max-width: ${smallBreakpoint}) {
    font-size: 1.8rem;
    min-height: ${({ small }) => (small ? '3.5rem' : '5rem')};
  }
`;

const Children = styled.div`
  visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
  display: contents;
`;

function Button({
  onClick,
  disabled,
  loading,
  children,
  type = 'button',
  small,
  secondary,
  className,
}) {
  const {
    theme,
    theme: { button },
  } = useTheme();

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      $backgroundColor={
        secondary
          ? button.secondary.backgroundColor
          : button.primary.backgroundColor
      }
      color={secondary ? button.secondary.color : button.primary.color}
      $hoverBackgroundColor={
        secondary ? button.secondary.hover : button.primary.hover
      }
      focusBorderColor={
        secondary
          ? button.secondary.focusBorderColor
          : button.primary.focusBorderColor
      }
      $borderRadius={
        secondary ? button.secondary.borderRadius : button.primary.borderRadius
      }
      border={secondary ? theme.border.default : theme.border.default}
      small={small}
      secondary={secondary}
      className={className}
    >
      {loading && <Spinner />}
      <Children $isLoading={loading}>{children}</Children>
    </StyledButton>
  );
}

export default Button;
