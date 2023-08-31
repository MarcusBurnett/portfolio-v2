import React, { useState } from 'react';
import styled from 'styled-components/macro';
import projects from '../../data/projects';
import { medium, small } from '../../styles/breakpoints';
import Card from '../../components/Card';
import { useTheme } from '../../context/theme';
import Spacer from '../../components/Spacer';
import HowIWork from '../../components/HowIWork';
import ProjectList from '../../components/ProjectList';
import Project from './Project';
import { fadeInAndSlideUp } from '../../keyframes';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 0 0.4rem 4rem;
  gap: 2rem;
  position: relative;

  @media screen and (max-width: ${medium}) {
    min-height: 100vh;
    height: auto;
    padding: 4rem 0;
  }

  @media screen and (max-width: ${small}) {
    gap: 4rem;
    padding-top: 12rem;
  }
`;

const ProjectContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} 1s ease forwards;

  @media screen and (max-width: ${small}) {
    opacity: 1;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.4s ease forwards;

  @media screen and (max-width: ${small}) {
    padding: 2rem 4rem 0 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;

  @media screen and (max-width: ${small}) {
    font-size: 3.6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${small}) {
    font-size: 2.6rem;
    flex-direction: column;
  }
`;

const QuoteCard = styled(Card)`
  margin-right: 6rem;
  max-width: 100rem;
  transform: translateY(2rem);

  .card.quote {
    opacity: 0;
    box-shadow: ${({ boxShadow }) => `3rem 6rem 0 0 ${boxShadow}`};
    padding: 2rem 3rem;
    animation: 0.6s ${fadeInAndSlideUp} 0.8s ease forwards;

    h2 {
      font-size: 1.6rem;
      line-height: 3rem;
    }

    @media screen and (max-width: ${medium}) {
      box-shadow: ${({ boxShadow }) => `2rem 8rem 0 0 ${boxShadow}`};
    }
  }

  @media screen and (max-width: ${small}) {
    margin-right: 1rem;
    padding: 0 2rem;
  }
`;

const ExternalLinkIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 0.8rem;
  margin-bottom: 0.2rem;
  object-fit: contain;
`;

const Quoted = styled.a`
  position: absolute;
  bottom: -4rem;
  right: 0;
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: underline;
  text-align: right;
  padding-left: 2rem;
  color: ${({ color }) => color};

  @media screen and (max-width: ${medium}) {
    bottom: -6rem;
    right: 1rem;
  }
`;

const H3 = styled.h3`
  font-size: 2rem;

  @media screen and (max-width: ${small}) {
    margin: 0 2rem;
    font-size: 2.2rem;
  }
`;

function Experience() {
  const { theme } = useTheme();
  const [transition, setTransition] = useState('in');
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [previousProject, setPreviousProject] = useState(projects[0]);

  const handleProjectChange = (project) => {
    setTransition('out');
    setPreviousProject(currentProject);
    setCurrentProject(project);
    setTimeout(() => {
      setTransition('in');
    }, 400);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>My experience</Title>
        <Subtitle>
          <span>Here&apos;s what I can do, </span>
          <span>and how I do it </span>
        </Subtitle>
      </TitleContainer>

      <QuoteCard boxShadow={theme.boxShadow} cardClassName="quote">
        <h2>
          Marcus has a range of skills in both design and development which give
          him the distinct ability to take an initial concept and turn it into a
          finished product.
        </h2>
        <Quoted
          target="_blank"
          rel="noopener noreferrer"
          href="https://uk.linkedin.com/in/apamphilon"
          color={theme.storyColor}
        >
          Alex Pamphilon - FE Team Lead, Airtime Rewards
          <ExternalLinkIcon
            src={theme.icons.default.externalLinkIcon}
            alt="external link"
          />
        </Quoted>
      </QuoteCard>
      <Spacer size="xxxl" />
      <HowIWork />
      <ProjectContainer>
        <H3>My Projects</H3>
        <Spacer size="l" />
        <ProjectList
          currentProject={currentProject}
          setCurrentProject={handleProjectChange}
        />
      </ProjectContainer>
      <Project
        transition={transition}
        project={transition === 'out' ? previousProject : currentProject}
      />
    </Container>
  );
}

export default Experience;
