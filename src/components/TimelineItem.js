import React, { memo, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useWindowDimensions } from '../hooks';
import { large, small } from '../styles/breakpoints';
import { useTheme } from '../context/theme';

const Item = styled.div.attrs((props) => ({
  style: {
    scale: props.$scale,
  },
}))`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;
  transform: ${({ scale }) => `(${scale})`};
  transition: transform 0.2s ease;
  transform-origin: top right;
  max-width: 60rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 50rem;
  height: 18vw;
  max-height: 30rem;
  object-fit: cover;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  margin-right: -5rem;
  position: relative;
  transition: transform 0.5s ease;
  transform-origin: 80%;
  transform: perspective(6rem) rotateY(-0.01deg);

  &:hover {
    transform: perspective(6rem) rotateY(-0.8deg);
  }

  @media screen and (max-width: ${large}) {
    height: 40vh;
    margin-right: -3rem;
  }

  @media screen and (max-width: ${small}) {
    width: 100%;
    margin-right: 0;
    height: 30vh;

    &:hover {
      transform: none;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  padding: 2rem;
  p,
  h3,
  h4 {
    text-align: right;
    color: ${({ color }) => color};
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 300;
  }

  @media screen and (max-width: ${large}) {
    padding-right: 4rem;
    h3 {
      font-size: 2.2rem;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

function TimelineItem({ item, index, $scrollY, setPosition }) {
  const ref = useRef();
  const { height, width } = useWindowDimensions();
  const [transform, setTransform] = useState({ scale: 1 });
  const { theme } = useTheme();

  const isMobile = width <= Number.parseInt(large.replace('px', ''), 10);

  useEffect(() => {
    if (isMobile) {
      if (transform.scale !== 1) {
        setTransform({ scale: 1 });
      }
    } else {
      const itemPosition = ref.current?.getBoundingClientRect().y;
      let scale = 0.5;
      const containerHeight = height * 3;

      if (itemPosition < height) {
        setPosition((prev) => {
          const newArr = [...prev];

          if (itemPosition >= -120) {
            newArr[index] = itemPosition;
          } else {
            newArr.splice(index);
          }

          return newArr.filter((x) => x);
        });
      }

      if (itemPosition > containerHeight) {
        scale = 0.5;
      } else {
        scale = Math.max(
          0.5,
          (containerHeight - Math.max(0, itemPosition)) / containerHeight
        );
      }

      if (scale > 1) scale = 1;
      if (scale < 0) scale = 0;

      setTransform({ scale: scale.toFixed(3) });
    }
  }, [height, $scrollY, setPosition, index, isMobile, transform.scale]);

  return isMobile ? (
    <Item
      ref={ref}
      scale={1}
      translateY={transform.translateY}
      key={item.title}
    >
      <Image
        src={item.image}
        alt={item.title}
        $borderRadius={theme.borderRadius.default}
      />
      <ContentContainer color={theme.storyColor}>
        <h4>{item.year}</h4>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </ContentContainer>
    </Item>
  ) : (
    <Item
      ref={ref}
      $scale={transform.scale}
      translateY={transform.translateY}
      key={item.title}
    >
      <Image
        src={item.image}
        alt={item.title}
        $borderRadius={theme.borderRadius.default}
      />
      <ContentContainer color={theme.storyColor}>
        <h4>{item.year}</h4>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </ContentContainer>
    </Item>
  );
}

export default memo(TimelineItem);
