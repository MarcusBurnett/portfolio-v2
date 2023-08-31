import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useTheme } from '../../context/theme';
import Spacer from '../../components/Spacer';
import Tooltip from '../../components/ToolTip';
import Card from '../../components/Card';
import { medium, small } from '../../styles/breakpoints';
import { fadeInAndSlideUp } from '../../keyframes';
import Links from '../../components/Links';

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem 4rem 0;
  margin-bottom: 4rem;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} 1s ease forwards;

  .in {
    transform: translateY(0);
    transition: all 0.4s 0.2s ease;
    opacity: 1;
  }

  .out {
    transform: translateY(3rem);
    opacity: 0;
  }

  @media screen and (max-width: ${medium}) {
    padding: 0 2rem;
    margin-bottom: 10rem;
  }

  @media screen and (max-width: ${small}) {
    opacity: 1;
    animation: none;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 4rem;
  position: relative;
  flex-wrap: wrap;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(0);

  @media screen and (max-width: ${medium}) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  position: relative;
  gap: 2rem;
  height: fit-content;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 8rem;
  max-width: 80%;
`;

const Image = styled.img`
  width: 100%;
  min-height: 30rem;
  min-width: 40rem;
  max-height: 50rem;
  object-fit: contain;
  transition: all 0.5s ease;
  transform-origin: 50% 30%;
  visibility: ${({ $loaded }) => ($loaded ? 'visible' : 'hidden')};

  &:hover {
    transform: perspective(5rem) rotateY(-0.2deg) rotateX(0.1deg) scale(1.05);
  }

  @media screen and (max-width: ${medium}) {
    min-width: 0;
  }
`;

const Background = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  width: 100%;
  max-width: 40rem;
  min-width: 100%;
  position: absolute;
  left: -2rem;
  top: 3rem;
  bottom: -2rem;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  z-index: -1;
  border: ${({ border }) => border};
`;

const ImageBackground = styled(Background)`
  left: -2rem;
  top: 2rem;

  @media screen and (max-width: ${medium}) {
    left: 0rem;
    width: 90%;
    min-width: 90%;
    height: calc(90% - 2rem);
    margin-top: 2rem;
  }
`;

const ToolImage = styled.img`
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
  object-fit: cover;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: ${medium}) {
    min-width: 4.5rem;
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const Tools = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  max-height: 5rem;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Tool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:hover {
    .tooltip {
      display: flex;
      opacity: 1;
    }
  }

  .tooltip {
    top: 6rem;
    opacity: 0;
    transition: opacity 0.1s ease;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  gap: 0.4rem;
  margin-left: 1rem;
`;

const Description = styled.p`
  margin-right: 2rem;
  max-width: 75rem;
  line-height: 200%;

  @media screen and (max-width: ${medium}) {
    max-width: 100%;
  }
`;

const H3 = styled.h3`
  font-size: 1.6rem;

  @media screen and (max-width: ${small}) {
    font-size: 1.8rem;
  }
`;

const Achievements = styled(Card)`
  width: 100%;

  .card {
    box-shadow: none;
    flex: 1;
    align-items: flex-start;
  }
`;

const Lessons = styled.div`
  padding: 2rem;
  margin: 4rem 4rem 0 0;
  color: ${({ color }) => color};

  @media screen and (max-width: ${medium}) {
    margin: 0 4rem 0 0;
    padding: 0 2rem;
  }
`;

export default function Project({ project, transition }) {
  const { theme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  return (
    <StyledProject>
      <Container className={`${transition || ''}`}>
        <Section>
          <Logo src={project.logos[theme.key]} />
          <List>
            {project.bullets?.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </List>
          <Description>{project.description}</Description>
          <Links project={project} />
          <H3>Frequently used tools</H3>
          <Tools>
            {project.tools?.map((tool) => (
              <Tool key={tool.name}>
                <ToolImage
                  src={tool.img}
                  $borderRadius={theme.borderRadius.tab}
                />
                <Tooltip className="tooltip">{tool.name}</Tooltip>
              </Tool>
            ))}
          </Tools>
        </Section>
        <Section>
          <ImageBackground
            $backgroundColor={theme.boxShadow}
            $borderRadius={theme.borderRadius.default}
            border={theme.border.background}
          />
          <Image
            $loaded={loaded}
            src={project.image}
            onLoad={() => setLoaded(true)}
          />
        </Section>
      </Container>
      <Spacer size="l" />
      <Spacer size="l" />
      <Container className={`${transition || ''}`}>
        <Background
          $backgroundColor={theme.boxShadow}
          $borderRadius={theme.borderRadius.default}
          border={theme.border.background}
        />
        <Section>
          <Achievements>
            <H3>My biggest accomplishment</H3>
            <Spacer size="s" />
            {project.achievement}
          </Achievements>
        </Section>
        <Section>
          <Lessons color={theme.storyColor}>
            <H3>My biggest lesson</H3>
            <Spacer size="s" />
            {project.lesson}
          </Lessons>
        </Section>
      </Container>
    </StyledProject>
  );
}
