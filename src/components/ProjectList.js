import React from 'react';
import { styled } from 'styled-components';
import projects from '../data/projects';
import { useTheme } from '../context/theme';
import { medium, small } from '../styles/breakpoints';

const StyledProjectList = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 100rem;
  position: relative;
  width: 100%;
  overflow: visible;
  margin-left: -2rem;

  @media screen and (max-width: ${medium}) {
    margin-left: 0;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 100rem;
  padding: 0 2rem 4rem 3rem;
  position: relative;
  width: calc(100% + 4rem);
  overflow-x: auto;
  overscroll-behavior: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media screen and (max-width: ${medium}) {
    gap: 2rem;
  }
`;

const Project = styled.img`
  border-radius: ${({ $borderRadius }) => $borderRadius};
  transform: ${({ selected }) => selected && 'scale(1.1) translateY(0.5rem)'};
  transition: all 0.4s ease;
  width: 80%;
  min-width: 7rem;
  aspect-ratio: 1 / 1;
  transform-origin: top;
  cursor: pointer;

  &:hover {
    transform: ${({ selected }) =>
      selected ? 'scale(1.1) translateY(0.5rem)' : 'scale(1.08)'};
  }

  @media screen and (max-width: ${small}) {
    min-width: 20vw;
  }
`;

const Indicator = styled.div`
  width: 4rem;
  height: 0.5rem;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  position: absolute;
  bottom: -3rem;
  transition: all 0.4s ease;
`;

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  width: calc(100% - 1rem);
  position: absolute;
  left: 1rem;
  top: 2rem;
  bottom: 0;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  z-index: -1;
  transition: background-color 0.4s ease;
  border: ${({ border }) => border};
`;

export default function ProjectList({ currentProject, setCurrentProject }) {
  const { theme } = useTheme();

  return (
    <StyledProjectList>
      <Background
        $borderRadius={theme.borderRadius.default}
        $backgroundColor={theme.boxShadow}
        border={theme.border.background}
      />

      <Container>
        {projects.map((project) => {
          const selected = currentProject.title === project.title;

          return (
            <ProjectContainer
              key={project.title}
              onClick={() => setCurrentProject(project)}
            >
              <Project
                src={project.tile}
                $borderRadius={theme.borderRadius.medium}
                selected={selected}
              />
              <Indicator
                $backgroundColor={theme.accent}
                $borderRadius={theme.borderRadius.tooltip}
                $isVisible={selected}
              />
            </ProjectContainer>
          );
        })}
      </Container>
    </StyledProjectList>
  );
}
