import React from 'react';
import styled from 'styled-components/macro';
// import AnimatedRoute from '../components/navigation/AnimatedRoute';
import { large, xsmall } from '../styles/breakpoints';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  max-height: 600px;
  display: flex;
  flex: 1;
  overflow: hidden;

  @media screen and (max-width: ${large}) {
    max-height: unset;
  }

  @media screen and (max-width: ${xsmall}) {
    padding-top: 90px;
    flex-direction: column;
  }
`;

const DetailsContainer = styled.ul`
  flex: 1;
  height: 100%;
  width: 70%;
  position: relative;
  min-height: 100vh;

  @media screen and (max-width: ${xsmall}) {
    width: 100%;
  }
`;

function Skills() {
  return (
    <Container>
      <DetailsContainer>
        <h1>Skills</h1>
      </DetailsContainer>
    </Container>
  );
}

export default Skills;
