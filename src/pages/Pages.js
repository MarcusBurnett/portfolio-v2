import React from 'react';
import styled from 'styled-components/macro';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { fadeIn } from '../keyframes';
import { medium } from '../styles/breakpoints';
import routes from '../data/routes';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  animation: 1s ${fadeIn} ease forwards;
  overflow: hidden;
  margin-left: 2rem;
  min-height: 100vh;
  width: 100%;
  overflow: auto;

  @media screen and (max-width: ${medium}) {
    margin-left: 0;
  }

  .page {
    height: 100%;
    width: 100%;
  }

  .page-enter {
    opacity: 0;
    transform: translateY(-2rem);
  }

  .page-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 500ms, transform 500ms;
    position: absolute;
    left: 0;
    top: 0;
  }

  .page-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .page-exit-active {
    opacity: 0;
    transform: translateY(-2rem);
    transition: opacity 500ms, transform 500ms;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

function Pages() {
  const location = useLocation();

  return (
    <StyledContent role="main">
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
          <Routes location={location}>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate to="/about-me" />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </StyledContent>
  );
}

export default Pages;
