import React from 'react';
import styled from 'styled-components/macro';
import { small } from '../styles/breakpoints';
import Spacer from './Spacer';
import { useTheme } from '../context/theme';

const StyledTextarea = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextareaField = styled.textarea`
  flex: 1;
  overflow-y: scroll;
  padding: 2rem;
  min-height: 4rem;
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  -webkit-appearance: none;
  color: ${({ color }) => color};
  transition: all 0.4s ease;
  background-color: ${({ backgroundColor }) => backgroundColor};

  &:hover {
    background-color: ${({ hover }) => hover};
  }

  &:focus {
    outline: none;
    outline: none;
    border: ${({ focusBorder }) => focusBorder};
    box-shadow: ${({ focusBorder }) => focusBorder};
  }

  @media screen and (max-width: ${small}) {
    font-size: 2rem;
    min-height: 5rem;
  }
`;

const TextareaContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const LabelContainer = styled.div`
  padding-right: 0.5rem;
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

function Textarea({ name, label, onChange, value, error, valid }) {
  const { theme } = useTheme();

  return (
    <StyledTextarea>
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
      <TextareaContainer>
        <TextareaField
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          error={error}
          rows={5}
          color={theme.input?.color}
          borderRadius={theme.input?.borderRadius}
          focusBorder={theme.input?.focusBorder}
          border={
            (error && theme.input?.errorBorder) ||
            (valid && theme.input?.validBorder) ||
            theme.input?.border
          }
          backgroundColor={theme.input?.backgroundColor}
          hover={theme.input?.hover}
        />
      </TextareaContainer>
      <Spacer />
      <Error color={theme.input?.errorColor} error={error}>
        {error || '-'}
      </Error>
    </StyledTextarea>
  );
}

export default Textarea;
