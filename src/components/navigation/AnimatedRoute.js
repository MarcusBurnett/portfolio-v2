import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// import styled from 'styled-components/macro';

// const StyledRoute = styled.div`
//   width: 100%;
//   min-height: 100%;
// `;

function AnimatedRoute({ Component }) {
  const ref = useRef();
  const { match } = useLocation();

  return (
    <CSSTransition
      nodeRef={ref}
      in={match != null}
      timeout={500}
      classNames="page"
      unmountOnExit
    >
      <div ref={ref} className="page">
        <h1>Yo</h1>
        <Component />
      </div>
    </CSSTransition>
  );
}

export default AnimatedRoute;
