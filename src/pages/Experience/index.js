import React, { useState } from 'react';
import styled from 'styled-components/macro';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import projects from '../../data/projects';
// import Project from './Project';
// import AnimatedRoute from '../../components/navigation/AnimatedRoute';
import { medium, small } from '../../styles/breakpoints';
// import AnimatedRouteContainer from '../../components/navigation/AnimatedRouteContainer';
// import Project from './Project';
import Card from '../../components/Card';
import { useTheme } from '../../context/theme';
import Spacer from '../../components/Spacer';
import HowIWork from '../../components/HowIWork';
import ProjectList from '../../components/ProjectList';
import Project from './Project';
import { fadeInAndSlideUp } from '../../keyframes';

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   gap: 20px;
//   overflow: auto;
//   position: relative;

//   @media screen and (max-width: ${large}) {
//     flex-direction: column;
//   }

//   @media screen and (max-width: ${small}) {
//     margin-bottom: 100px;
//     gap: 40px;
//     padding-top: 12rem;
//   }
// `;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
  padding: 40px 0 4px 40px;
  gap: 20px;
  position: relative;

  @media screen and (max-width: ${medium}) {
    min-height: 100vh;
    height: auto;
    padding: 40px 0;
  }

  @media screen and (max-width: ${small}) {
    /* margin-bottom: 20px; */
    gap: 40px;
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
    /* animation: none; */
    opacity: 1;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.4s ease forwards;

  @media screen and (max-width: ${small}) {
    padding: 20px 40px 0 20px;
    /* animation: none; */
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
  margin-right: 60px;
  max-width: 1000px;
  transform: translateY(20px);

  .card.quote {
    opacity: 0;
    box-shadow: ${({ boxShadow }) => `30px 60px 0px 0px ${boxShadow}`};
    padding: 2rem 3rem;
    animation: 0.6s ${fadeInAndSlideUp} 0.8s ease forwards;

    h2 {
      font-size: 1.6rem;
      line-height: 3rem;
    }

    @media screen and (max-width: ${medium}) {
      box-shadow: ${({ boxShadow }) => `20px 80px 0px 0px ${boxShadow}`};
    }
  }

  @media screen and (max-width: ${small}) {
    margin-right: 10px;
    padding: 0 20px;
  }
`;

const ExternalLinkIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 8px;
  margin-bottom: 2px;
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
  padding-left: 20px;
  color: ${({ color }) => color};

  @media screen and (max-width: ${medium}) {
    bottom: -6rem;
    right: 1rem;
  }
`;

const H3 = styled.h3`
  font-size: 2rem;

  @media screen and (max-width: ${small}) {
    margin: 0 20px;
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
