import React from 'react';
import styled from 'styled-components/macro';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import projects from '../../data/projects';
// import Project from './Project';
// import AnimatedRoute from '../../components/navigation/AnimatedRoute';
import { medium } from '../../styles/breakpoints';
// import AnimatedRouteContainer from '../../components/navigation/AnimatedRouteContainer';
// import Project from './Project';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex: 1;
  padding-left: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};

  @media screen and (max-width: ${medium}) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const ProjectContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;

// const SlideIndicatorContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   justify-content: center;
//   z-index: 2;
//   width: 40px;
//   align-items: center;
//   position: fixed;

//   @media screen and (max-width: ${small}) {
//     width: 100vw;
//     height: 80px;
//     padding-top: 20px;
//     bottom: 0;
//     background: linear-gradient(
//       rgba(26, 27, 41, 0) 0%,
//       rgba(26, 27, 41, 1) 100%
//     );
//   }
// `;

function Experience() {
  const { pathname } = useLocation();

  if (
    pathname === '/experience' ||
    (pathname.includes('/experience') &&
      !projects.find((project) => pathname === project.path))
  ) {
    return <Navigate to="/experience/airtime-rewards" />;
  }

  return (
    <Container>
      <h1>Experience</h1>
      <ProjectContainer>
        <Outlet />
      </ProjectContainer>
    </Container>
  );
}

export default Experience;
