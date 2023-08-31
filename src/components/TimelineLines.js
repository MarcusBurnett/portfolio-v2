import React, { Fragment, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useTheme } from '../context/theme';
import { large, medium } from '../styles/breakpoints';
import { fadeInAndSlideLeft } from '../keyframes';

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.6rem;
  width: 2rem;
  height: 100%;
  position: absolute;
  right: 2rem;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideLeft} 1.6s ease forwards;

  @media screen and (max-width: ${large}) {
    overflow: hidden;
  }

  @media screen and (max-width: ${medium}) {
    right: 1rem;
  }
`;

const StyledLine = styled.div`
  width: ${({ width }) => `${width / 10}rem`};
  min-height: 0.2rem;
  border-radius: 0.1rem;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  transition: width 0.3s ease;

  @media screen and (max-width: ${large}) {
    width: auto;
    min-width: 0.2rem;
  }
`;

function Line({ $backgroundColor, itemPositions }) {
  const ref = useRef();
  const [width, setWidth] = useState(2);

  useEffect(() => {
    const lineY = ref.current?.getBoundingClientRect().y;
    const linePosition = lineY - 100;

    if (
      itemPositions.find(
        (x) =>
          Math.round(x) > linePosition - 5 && Math.round(x) < linePosition + 5
      )
    ) {
      setWidth(20);
    } else if (
      itemPositions.find(
        (x) =>
          Math.round(x) > linePosition - 10 && Math.round(x) < linePosition + 10
      )
    ) {
      setWidth(12);
    } else if (
      itemPositions.find(
        (x) =>
          Math.round(x) > linePosition - 15 && Math.round(x) < linePosition + 15
      )
    ) {
      setWidth(8);
    } else if (
      itemPositions.find(
        (x) =>
          Math.round(x) > linePosition - 20 && Math.round(x) < linePosition + 20
      )
    ) {
      setWidth(6);
    } else if (
      itemPositions.find(
        (x) =>
          Math.round(x) > linePosition - 25 && Math.round(x) < linePosition + 25
      )
    ) {
      setWidth(4);
    } else {
      setWidth(2);
    }
  }, [itemPositions]);

  return (
    <StyledLine ref={ref} $backgroundColor={$backgroundColor} width={width} />
  );
}

export default function TimelineLines({ numberOfLines, itemPositions }) {
  const { theme } = useTheme();
  const arr = [];

  for (let i = 0; i < numberOfLines; i += 1) {
    arr.push(i);
  }

  return (
    <Timeline>
      {arr.map((l) => (
        <Fragment key={l}>
          <Line $backgroundColor={theme.accent} itemPositions={itemPositions} />
        </Fragment>
      ))}
    </Timeline>
  );
}
