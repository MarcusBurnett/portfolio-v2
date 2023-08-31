import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { useTheme } from '../context/theme';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import TimelineLines from './TimelineLines';
import { large, medium, small, xlarge } from '../styles/breakpoints';
import { fadeInAndSlideLeft, fadeInAndSlideUp } from '../keyframes';
import { useWindowDimensions } from '../hooks';

const StyledStory = styled.div`
  flex: 1;
  position: relative;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  @media screen and (max-width: ${large}) {
    flex: auto;
    overflow: visible;
    height: fit-content;
  }

  @media screen and (max-width: ${small}) {
    /* flex-direction: row;
    align-items: flex-start;
    width: 100vw; */
    overflow: hidden;
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  width: 40vw;
  height: 100vh;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;

  @media screen and (max-width: ${large}) {
    position: relative;
    height: fit-content;
    overflow: visible;
    width: 100%;
  }

  @media screen and (max-width: ${small}) {
    position: relative;
    height: auto;
    overflow: hidden;
    width: 100vw;
  }]
`;

const Background = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  position: fixed;
  width: 32vw;
  top: ${({ $scrollY }) => `${Math.max(-40, 125 - $scrollY / 2)}px`};
  right: 90px;
  bottom: 0px;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  border: ${({ border }) => border};
  z-index: -1;
  transition: transform 0.2s ease;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.6s ease forwards;

  @media screen and (max-width: ${xlarge}) {
    width: 30vw;
  }
  @media screen and (max-width: ${large}) {
    position: absolute;
    width: 85%;
    right: 80px;
    top: 160px;
  }

  @media screen and (max-width: ${medium}) {
    right: 80px;
    width: 80%;
  }

  @media screen and (max-width: ${small}) {
    top: 100px;
    right: 50px;
    left: 10px;
    width: auto;
  }
`;

const List = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  /* overflow: auto; */
  padding: 40px 100px 40px 40px;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideLeft} 1s ease forwards;

  @media screen and (max-width: ${large}) {
    padding: 40px 80px 40px 40px;
    flex: auto;
  }

  @media screen and (max-width: ${small}) {
    padding: 0 30px 0 30px;
  }
`;

const Title = styled.h2`
  margin-right: -50px;
  transform: ${({ $scrollY }) =>
    `scale(${Math.max(0, (200 - $scrollY) / 200)})`};
  transform-origin: right;

  @media screen and (max-width: ${large}) {
    /* position: sticky;
    left: 0;
    top: 0; */
    transform: none;
    margin-right: 0;
    font-size: 2.4rem;
  }
`;

export default function Story() {
  const { theme } = useTheme();
  const ref = useRef();
  const [height, setHeight] = useState();
  const [scrollY, setScrollY] = useState(0);
  const [itemPositions, setItemPositions] = useState([]);
  const { width } = useWindowDimensions();
  const isDesktop = width > Number.parseInt(small.replace('px', ''), 10);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setHeight(ref.current?.getBoundingClientRect().height ?? 0);
    });

    resizeObserver.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return () => resizeObserver.disconnect();
  }, []);

  const handleScroll = (e) => {
    if (isDesktop) {
      setScrollY(e.target.scrollTop);
    }
  };

  return (
    <Container ref={ref}>
      <StyledStory onScroll={handleScroll}>
        <Background
          $borderRadius={theme.borderRadius.default}
          $scrollY={scrollY}
          $backgroundColor={theme.boxShadow}
          border={theme.border.background}
        />
        <List>
          <Title $scrollY={scrollY}>My Story</Title>
          {timeline.map((item, index) => (
            <TimelineItem
              item={item}
              key={item.title}
              $scrollY={scrollY}
              setPosition={setItemPositions}
              index={index}
            />
          ))}
        </List>
      </StyledStory>
      <TimelineLines
        numberOfLines={Math.floor(height / 6)}
        itemPositions={itemPositions}
      />
    </Container>
  );
}
