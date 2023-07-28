import React from 'react';
import styled from 'styled-components/macro';
import { small } from '../styles/breakpoints';
import Spacer from './Spacer';
import { useTheme } from '../context/theme';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const InputField = styled.input`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 2rem;
  min-height: 5rem;
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  -webkit-appearance: none;
  color: ${({ color }) => color};
  transition: all 0.4s ease;

  &:hover {
    background-color: ${({ hover }) => hover};
  }

  &:focus {
    outline: none;
    border: ${({ focusBorder }) => focusBorder};
    box-shadow: ${({ focusBorder }) => focusBorder};
  }

  @media screen and (max-width: ${small}) {
    font-size: 2rem;
    min-height: 5rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const LabelContainer = styled.div`
  padding-right: 0.5rem;
  margin-left: -0.1rem;
  font-size: 1.3rem;
  border-radius: 3px 3px 3px 0;
  transition: background-color 0.4s ease;
`;

const Label = styled.label`
  color: ${({ color }) => color};
  font-weight: 700;
  transition: color 0.4s ease;

  @media screen and (max-width: ${small}) {
    font-size: 1.6rem;
  }
`;

const Error = styled.span`
  color: ${({ color }) => color};
  visibility: ${({ error }) => (error ? 'auto' : 'hidden')};
  font-weight: 700;
`;

function Input({ name, label, onChange, value, error, valid }) {
  const { theme } = useTheme();

  return (
    <StyledInput>
      <LabelContainer backgroundColor={theme.backgroundColor}>
        <Label
          error={error}
          color={theme.input?.label}
          className={label}
          htmlFor={name}
        >
          {label}
        </Label>
      </LabelContainer>
      <Spacer />
      <InputContainer>
        <InputField
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          error={error}
          focusBorder={theme.input?.focusBorder}
          color={theme.input?.color}
          borderRadius={theme.input?.borderRadius}
          border={
            (error && theme.input?.errorBorder) ||
            (valid && theme.input?.validBorder) ||
            theme.input?.border
          }
          backgroundColor={theme.input?.backgroundColor}
          hover={theme.input?.hover}
        />
      </InputContainer>
      <Spacer />
      <Error color={theme.input?.errorColor} error={error}>
        {error || '-'}
      </Error>
    </StyledInput>
  );
}

export default Input;
