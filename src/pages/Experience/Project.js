import React from 'react';
import { styled } from 'styled-components';
import { useTheme } from '../../context/theme';
import Spacer from '../../components/Spacer';
import Tooltip from '../../components/ToolTip';
import Card from '../../components/Card';
import { medium } from '../../styles/breakpoints';

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px 40px 0;
  margin-bottom: 40px;

  @media screen and (max-width: ${medium}) {
    padding: 0 20px;
    margin-bottom: 100px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  position: relative;
  flex-wrap: wrap;

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
  gap: 20px;
  height: fit-content;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 5rem;
`;

const Image = styled.img`
  width: 100%;
  min-height: 30rem;
  min-width: 40rem;
  max-height: 50rem;
  object-fit: contain;
  transition: transform 0.5s ease;
  transform-origin: 60% 30%;

  &:hover {
    transform: perspective(20px) rotateY(0.2deg) rotateX(-0.1deg) scale(1.05);
  }
`;

const Background = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  max-width: 40rem;
  min-width: 100%;
  position: absolute;
  left: -2rem;
  top: 3rem;
  bottom: -2rem;
  border-radius: ${({ borderRadius }) => borderRadius};
  z-index: -1;
  border: ${({ border }) => border};
`;

const ImageBackground = styled(Background)`
  left: -2rem;
  top: 2rem;

  @media screen and (max-width: ${medium}) {
    left: 0rem;
  }
`;

const ToolImage = styled.img`
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
  object-fit: cover;
  border-radius: ${({ borderRadius }) => borderRadius};
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
  gap: 15px;
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

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const Description = styled.p`
  margin-right: 2rem;
  max-width: 75rem;
  line-height: 200%;
  margin-bottom: 10px;

  @media screen and (max-width: ${medium}) {
    max-width: 100%;
  }
`;

const H3 = styled.h3`
  font-size: 1.6rem;
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
  padding: 20px;
  margin: 40px 40px 0 0;
  color: ${({ color }) => color};

  @media screen and (max-width: ${medium}) {
    margin: 0 40px 0 0;
    padding: 0 20px;
  }
`;

export default function Project({ project }) {
  const { theme } = useTheme();

  return (
    <StyledProject>
      <Container>
        <Section>
          <Logo src={project.logos[theme.key]} />
          <List>
            {project.bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </List>
          <Description>{project.description}</Description>
          <H3>Frequently used tools</H3>
          <Tools>
            {project.tools?.map((tool) => (
              <Tool>
                <ToolImage
                  src={tool.img}
                  borderRadius={theme.borderRadius.tab}
                />
                <Tooltip className="tooltip">{tool.name}</Tooltip>
              </Tool>
            ))}
          </Tools>
        </Section>
        <Section>
          <ImageBackground
            backgroundColor={theme.boxShadow}
            borderRadius={theme.borderRadius.default}
            border={theme.border.background}
          />
          <Image src={project.image} />
        </Section>
      </Container>
      <Spacer size="xl" />
      <Spacer size="xl" />
      <Container>
        <Background
          backgroundColor={theme.boxShadow}
          borderRadius={theme.borderRadius.default}
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
