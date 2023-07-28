import React from 'react';
import styled from 'styled-components/macro';
import chrevronIcon from '../images/Icons/Light/Chevron.svg';
import { medium } from '../styles/breakpoints';
import { useTheme } from '../context/theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  gap: 5px;

  @media screen and (max-width: ${medium}) {
    gap: 8px;
  }
`;

const Indicator = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  transition: background-color 0.2s ease;

  @media screen and (max-width: ${medium}) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const Arrow = styled.img`
  width: 20px;
  height: 20px;
  transform: ${({ side }) =>
    ` scale(1) rotate(${side === 'top' ? '0deg' : '180deg'})`};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.1s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    transform: ${({ side, disabled }) =>
      `scale(${disabled ? 1 : 1.1}) rotate(${
        side === 'top' ? '0deg' : '180deg'
      })`};
  }

  @media screen and (max-width: ${medium}) {
    width: 24px;
    height: 24px;
  }
`;

const ArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SlideIndicator({ slides, selected, setSelected, className }) {
  const { theme } = useTheme();

  return (
    <Container className={className}>
      <ArrowButton
        disabled={selected === 0}
        onClick={() => setSelected((prev) => Math.max(prev - 1, 0))}
        aria-label="change slide"
        $backgroundColor={theme.accent}
      >
        <Arrow src={chrevronIcon} side="top" alt="arrow up" />
      </ArrowButton>
      {slides.map((slide, i) => (
        <Indicator
          key={slide.title}
          selected={i === selected}
          $backgroundColor={
            i === selected ? theme.accent : theme.backgroundColor
          }
        />
      ))}
      <ArrowButton
        disabled={selected === slides.length - 1}
        onClick={() =>
          setSelected((prev) => Math.min(prev + 1, slides.length - 1))
        }
        aria-label="change slide"
        $backgroundColor={theme.accent}
      >
        <Arrow src={chrevronIcon} side="bottom" alt="arrow down" />
      </ArrowButton>
    </Container>
  );
}

export default SlideIndicator;
