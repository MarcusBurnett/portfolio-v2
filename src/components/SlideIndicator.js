import React from 'react';
import styled from 'styled-components/macro';
import chrevronIcon from '../images/Icons/Light/Chevron.svg';
import { useTheme } from '../context/theme';

const Arrow = styled.img`
  width: 40px;
  height: 40px;
  transform: ${({ side }) =>
    ` scale(1) rotate(${side === 'left' ? '0deg' : '180deg'})`};
  transition: transform 0.1s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const ArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 10px;
  height: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const ArrowLeft = styled(ArrowButton)`
  left: 0;
`;

const ArrowRight = styled(ArrowButton)`
  right: 0;
`;

function SlideIndicator({ handleClick }) {
  const { theme } = useTheme();

  return (
    <div className="arrows">
      <ArrowLeft
        onClick={() => handleClick('left')}
        aria-label="change slide left"
        $backgroundColor={theme.accent}
      >
        <Arrow src={chrevronIcon} side="left" alt="arrow up" />
      </ArrowLeft>
      <ArrowRight
        onClick={() => handleClick('right')}
        aria-label="change slide right"
        $backgroundColor={theme.accent}
        side="right"
      >
        <Arrow src={chrevronIcon} side="right" alt="arrow down" />
      </ArrowRight>
    </div>
  );
}

export default SlideIndicator;
