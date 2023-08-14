import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Card from './Card';
import friends from '../images/Gallery/Friends.png';
import SlideIndicator from './SlideIndicator';
import { small } from '../styles/breakpoints';
import { fadeInAndSlideUp } from '../keyframes';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-bottom: 20px;
  max-height: 400px;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} 0.8s ease forwards;
`;

const StyledGallery = styled(Card)`
  flex: 1;
  min-height: 250px;
  /* height: 100%; */
  position: relative;

  .card.gallery {
    /* flex: 1; */
    box-shadow: none;
    padding: 0;
    overflow: hidden;
    max-height: 500px;
    position: relative;
  }
`;

const Images = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
`;

const Image = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  transition: transform 0.5s ease, transform-origin 0.2s ease;

  &:hover {
    transform: scale(1.05);
    transform-origin: ${({ x, y }) => `${x}px ${y}px`};
  }

  @media screen and (max-width: ${small}) {
    &:hover {
      transform: none;
    }
  }
`;

const images = [
  { src: friends, title: 'friends' },
  { src: friends, title: 'family' },
  { src: friends, title: 'animals' },
];

export default function Gallery() {
  const [selected, setSelected] = useState(0);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const ref = useRef();
  const prevWidth = useRef(0);
  const initialRender = useRef(true);

  const onMouseMove = (x) => {
    const { x: containerX, y: containerY } =
      ref.current?.getBoundingClientRect() ?? {};

    setMouseCoordinates({
      x: x.pageX - containerX,
      y: x.pageY - containerY,
    });
  };

  useEffect(() => {
    const section = document.querySelector(`.image-${selected}`);

    if (!initialRender.current) {
      section.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const width = entry.borderBoxSize?.[0].inlineSize;

        if (
          !initialRender.current &&
          typeof width === 'number' &&
          width !== prevWidth.current
        ) {
          prevWidth.current = width;
          section.scrollIntoView();
        }

        if (typeof width === 'number' && width !== prevWidth.current)
          initialRender.current = false;
      });
    });

    resizeObserver.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return () => resizeObserver.disconnect();
  }, [selected]);

  return (
    <Container ref={ref}>
      <StyledGallery cardClassName="gallery">
        <Images>
          {images.map((image, i) => (
            <Image
              key={image.title}
              className={`image-${selected === i ? i : ''}`}
              alt={image.title}
              src={image.src}
              x={mouseCoordinates.x}
              y={mouseCoordinates.y}
              onMouseMove={onMouseMove}
            />
          ))}
        </Images>
      </StyledGallery>
      <SlideIndicator
        className="indicator"
        slides={images}
        selected={selected}
        setSelected={setSelected}
      />
    </Container>
  );
}
