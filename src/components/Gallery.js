import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Card from './Card';
import Friends from '../images/Gallery/Friends.png';
import Boat from '../images/Gallery/Boat.jpg';
import Bernabeu from '../images/Gallery/Bernabeu.jpg';
import Chess from '../images/Gallery/Chess.jpg';
import Football from '../images/Gallery/Football.jpg';
import Skydive from '../images/Gallery/Skydive.jpg';
import Working from '../images/Gallery/Working.jpeg';
import Jake from '../images/Gallery/Jake.jpg';
import LazerQuest from '../images/Gallery/LazerQuest.jpg';
import Pompei from '../images/Gallery/Pompei.jpg';
import Swimming from '../images/Gallery/Swimming.jpg';
import Bucky from '../images/Gallery/Bucky.jpg';
import Bucky2 from '../images/Gallery/Bucky2.jpg';
import SlideIndicator from './SlideIndicator';
import { small } from '../styles/breakpoints';
import { fadeInAndSlideUp } from '../keyframes';
import { useWindowDimensions } from '../hooks';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  max-height: ${({ $maxHeight }) => `${$maxHeight / 10}rem`};
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} 0.8s ease forwards;

  .arrows {
    opacity: 0;
    transition: opacity 0.3s ease;
    width: 100%;
  }

  &:hover {
    .arrows {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${small}) {
    max-height: 30rem;
  }

  @media screen and (max-width: ${small}) {
    &:hover {
      .images {
        transform: none;
      }
    }
  }
`;

const StyledGallery = styled(Card)`
  flex: 1;
  min-height: 25rem;
  height: 100%;
  position: relative;

  .card.gallery {
    box-shadow: none;
    padding: 0;
    overflow: hidden;
    position: relative;
  }
`;

const Images = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  transition: transform 6s linear;
  filter: ${({ filter }) => filter};

  &.selected {
    transform: scale(1.1);
  }
`;

const images = [
  { src: Friends, title: 'Friends' },
  { src: Boat, title: 'Family' },
  { src: Bernabeu, title: 'Bernabeu' },
  { src: Chess, title: 'Chess' },
  { src: Skydive, title: 'Skydive' },
  { src: Football, title: 'Football' },
  { src: Working, title: 'Working' },
  { src: Jake, title: 'Jake' },
  { src: LazerQuest, title: 'Lazer Quest' },
  { src: Bucky, title: 'Bucky' },
  { src: Bucky2, title: 'Bucky 2' },
  { src: Pompei, title: 'Pompei' },
  { src: Swimming, title: 'Swimming' },
];

export default function Gallery() {
  const [selected, setSelected] = useState();
  const ref = useRef();
  const prevWidth = useRef(0);
  const initialRender = useRef(true);
  const { width: windowWidth } = useWindowDimensions();
  const maxHeight = Math.min(windowWidth * 0.21, 500);
  const selectedRef = useRef(0);
  const [isInViewport, setIsInViewport] = useState(true);

  useEffect(() => {
    setSelected(0);
  }, []);

  const handleClick = (direction) => {
    setSelected((prev) => {
      let newSelected;

      if (direction === 'left') {
        newSelected = prev - 1 < 0 ? images.length - 1 : prev - 1;
      } else {
        newSelected = prev + 1 > images.length - 1 ? 0 : prev + 1;
      }

      return newSelected;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current?.getBoundingClientRect().top;
      const height = ref.current?.getBoundingClientRect().height;

      setIsInViewport(top + height > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const section = document.querySelector(`.image-${selected}`);

    if (!initialRender.current) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
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
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest',
          });
        }

        if (typeof width === 'number' && width !== prevWidth.current)
          initialRender.current = false;
      });
    });

    resizeObserver.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return () => resizeObserver.disconnect();
  }, [selected]);

  useEffect(() => {
    const startInterval = () =>
      setInterval(() => {
        handleClick('right');
      }, 6000);
    let interval = startInterval();

    if (selectedRef.current !== selected) {
      clearInterval(interval);
      interval = startInterval();
    }

    if (!isInViewport) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [selected, isInViewport]);

  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  return (
    <Container $maxHeight={maxHeight} ref={ref}>
      <StyledGallery cardClassName="gallery">
        <Images>
          {images.map((image, i) => (
            <Image
              key={image.title}
              className={`image-${selected === i ? i : ''}${
                selected === i ? ' selected' : ''
              }`}
              alt={image.title}
              src={image.src}
            />
          ))}
        </Images>
      </StyledGallery>
      <SlideIndicator handleClick={handleClick} />
    </Container>
  );
}
