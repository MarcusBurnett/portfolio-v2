import React from 'react';
import { styled } from 'styled-components';
import projects from '../data/projects';
import { useTheme } from '../context/theme';
import { medium } from '../styles/breakpoints';

const StyledProjectList = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1000px;
  position: relative;
  width: 100%;
  /* overflow-x: auto; */
  overflow: visible;
  margin-left: -20px;

  @media screen and (max-width: ${medium}) {
    margin-left: 0;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  max-width: 1000px;
  padding: 0 2rem 4rem 3rem;
  /* margin-bottom: 60px; */
  position: relative;
  width: calc(100% + 40px);
  overflow-x: auto;
  overscroll-behavior: auto;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media screen and (max-width: ${medium}) {
    gap: 20px;
  }
`;

const Project = styled.img`
  border-radius: ${({ borderRadius }) => borderRadius};
  transform: ${({ selected }) => selected && 'scale(1.1) translateY(5px)'};
  transition: all 0.4s ease;
  width: 80%;
  min-width: 7rem;
  aspect-ratio: 1 / 1;
  transform-origin: top;
  cursor: pointer;

  &:hover {
    transform: ${({ selected }) =>
      selected ? 'scale(1.1) translateY(5px)' : 'scale(1.08)'};
  }
`;

const Indicator = styled.div`
  width: 40px;
  height: 5px;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  position: absolute;
  bottom: -30px;
  transition: all 0.4s ease;
`;

const ProjectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: calc(100% - 1rem);
  position: absolute;
  left: 1rem;
  top: 2rem;
  bottom: 0;
  border-radius: ${({ borderRadius }) => borderRadius};
  z-index: -1;
  transition: background-color 0.4s ease;
  border: ${({ border }) => border};
`;

export default function ProjectList({ currentProject, setCurrentProject }) {
  const { theme } = useTheme();

  return (
    <StyledProjectList>
      <Background
        borderRadius={theme.borderRadius.default}
        backgroundColor={theme.boxShadow}
        border={theme.border.background}
      />

      <Container>
        {projects.map((project) => {
          const selected = currentProject.title === project.title;

          return (
            <ProjectContainer onClick={() => setCurrentProject(project)}>
              <Project
                src={project.tile}
                borderRadius={theme.borderRadius.medium}
                selected={selected}
              />
              <Indicator
                backgroundColor={theme.accent}
                borderRadius={theme.borderRadius.tooltip}
                isVisible={selected}
              />
            </ProjectContainer>
          );
        })}
      </Container>
    </StyledProjectList>
  );
}
