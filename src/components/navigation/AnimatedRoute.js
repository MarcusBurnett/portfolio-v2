import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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
