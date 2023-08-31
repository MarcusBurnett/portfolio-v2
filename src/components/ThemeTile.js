import React from 'react';
import { styled } from 'styled-components';
import Card from './Card';
import { useTheme } from '../context/theme';
import { small } from '../styles/breakpoints';

const StyledCard = styled(Card)`
  flex: 1;
  height: 16rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-basis: calc(50% - 1rem);

  .card {
    box-shadow: none;
    flex: 1;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.card};
    box-shadow: 0 0.4rem 0.8rem 0.4rem #0000000d;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: ${small}) {
    flex-basis: 100%;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.font};
  font-size: 2.6rem;
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  align-self: flex-end;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Check = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  transition: all 0.4s ease;
`;

export default function ThemeTile({ theme, selected }) {
  const { toggleTheme } = useTheme();

  return (
    <StyledCard theme={theme} onClick={() => toggleTheme(theme.key)}>
      <Icon src={theme.icons.selected.paletteIcon} />
      <TitleContainer>
        <Title theme={theme}>{theme.title}</Title>
        <Check src={theme.icons.check.checkIcon} selected={selected} />
      </TitleContainer>
    </StyledCard>
  );
}
