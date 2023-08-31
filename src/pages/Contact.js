import React from 'react';
import styled from 'styled-components/macro';
import { medium, small } from '../styles/breakpoints';
import ContactForm from '../forms/ContactForm';
import { fadeInAndSlideUp } from '../keyframes';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 20px;
  position: relative;
  max-width: 850px;
  height: fit-content;

  @media screen and (max-width: ${medium}) {
    min-height: 100vh;
    padding: 70px 20px 40px;
  }

  @media screen and (max-width: ${small}) {
    margin-bottom: 100px;
    gap: 40px;
    padding-top: 12rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.4s ease forwards;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;

  @media screen and (max-width: ${small}) {
    font-size: 3.6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;

  @media screen and (max-width: ${small}) {
    font-size: 2.6rem;
  }
`;

const MobileBreak = styled.br`
  display: none;

  @media screen and (max-width: ${small}) {
    display: block;
  }
`;

function Contact() {
  return (
    <Container>
      <TitleContainer>
        <Title>Get in touch</Title>
        <Subtitle>
          Do you want to work together? <MobileBreak />
          Send me a message
        </Subtitle>
      </TitleContainer>
      <ContactForm />
    </Container>
  );
}

export default Contact;
