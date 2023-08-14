import React from 'react';
import styled from 'styled-components/macro';
import { medium, small } from '../styles/breakpoints';
import { useTheme } from '../context/theme';
import ThemeTile from '../components/ThemeTile';
import { fadeInAndSlideUp } from '../keyframes';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 32px;
  position: relative;

  @media screen and (max-width: ${medium}) {
    min-height: 100vh;
    padding: 70px 20px 40px;
  }

  @media screen and (max-width: ${small}) {
    margin-bottom: 100px;
    gap: 40px;
    padding-top: 12rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.4s ease forwards;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;

  @media screen and (max-width: ${small}) {
    font-size: 3.6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;

  @media screen and (max-width: ${small}) {
    font-size: 3rem;
  }
`;

const Themes = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  opacity: 0;
  animation: 1s ${fadeInAndSlideUp} 0.6s ease forwards;
`;

const Background = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 40px;
  right: 40px;
  bottom: 0px;
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  z-index: -1;
  transition: background-color 0.4s ease;
  opacity: 0;
  animation: 1.8s ${fadeInAndSlideUp} 0.6s ease forwards;

  @media screen and (max-width: ${small}) {
    right: 20px;
    width: 110%;
  }
`;

function Theme() {
  const { theme, themes } = useTheme();

  return (
    <Container>
      <TitleContainer>
        <Title>Theme</Title>
        <Subtitle>Choose your preferred style.</Subtitle>
      </TitleContainer>
      <Themes>
        <Background
          borderRadius={theme.borderRadius.default}
          backgroundColor={theme.boxShadow}
          border={theme.border.background}
        />
        {themes?.map((t) => (
          <ThemeTile theme={t} selected={t.title === theme.title} />
        ))}
      </Themes>
    </Container>
  );
}

export default Theme;
