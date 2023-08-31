import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components/macro';
import { large, medium, small, xsmall } from '../styles/breakpoints';
import Card from '../components/Card';
import Countdown from '../components/Countdown';
// import Spacer from '../components/Spacer';
import Story from '../components/Story';
import Gallery from '../components/Gallery';
import { fadeInAndSlideUp } from '../keyframes';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  overflow: auto;
  position: relative;

  @media screen and (max-width: ${large}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${small}) {
    margin-bottom: 100px;
    gap: 40px;
    padding-top: 12rem;
  }
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 40px 0 40px;
  width: 49%;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.4s ease forwards;

  @media screen and (max-width: ${large}) {
    width: 100%;
  }

  @media screen and (max-width: ${small}) {
    width: 100%;
    padding: 0 20px 0 20px;
    gap: 40px;
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
    font-size: 2.8rem;
    flex-direction: column;
  }
`;

const Sub = styled.span``;

const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* align-items: flex-end; */

  @media screen and (max-width: ${xsmall}) {
    margin: 0.5rem 0;
  }
`;

const DetailsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;

  @media screen and (max-width: ${medium}) {
    gap: 4px;
  }
`;

const Label = styled.span`
  font-size: 1.2rem;

  @media screen and (max-width: ${xsmall}) {
    font-size: 1.6rem;
  }
`;

const Text = styled.span`
  font-size: 1.4rem;
  font-weight: 700;

  @media screen and (max-width: ${xsmall}) {
    font-size: 1.8rem;
  }
`;

const Overview = styled(Card)`
  width: 100%;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} 0.6s ease forwards;

  .card {
    width: 100%;
    align-items: flex-start;
    padding: 2rem 3rem;
    box-shadow: none;
  }

  @media screen and (max-width: ${medium}) {
    order: 2;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

// const H3 = styled.h3`
//   font-size: 1.8rem;
// `;

const detailsListItems = [
  { label: 'Age', value: <Countdown date={new Date(1995, 9, 20)} /> },
  { label: 'Nationality', value: <Text>British</Text> },
  { label: 'Lives in', value: <Text>Nijmegen, Netherlands</Text> },
  { label: 'Languages', value: <Text>English (Native), Dutch (Basic)</Text> },
];

function AboutMe() {
  useEffect(() => {
    const page = document.querySelector('.aboutme');

    page.scrollTo(200, 0);
  }, []);

  return (
    <Container className="aboutme">
      <Left>
        <TitleContainer>
          <Title>Hi, I&apos;m Marcus</Title>
          <Subtitle>
            <Sub>I research, </Sub>
            <Sub>I design, </Sub>
            <Sub>I build...</Sub>
          </Subtitle>
        </TitleContainer>
        <Overview>
          {/* <H3>Overview </H3>
          <Spacer size="s" /> */}
          <DetailsList>
            {detailsListItems?.map((item) => (
              <Fragment key={item.label}>
                <DetailsItem>
                  <Label>{item.label}</Label>
                  {item.value}
                </DetailsItem>
              </Fragment>
            ))}
          </DetailsList>
        </Overview>
        <Gallery />
      </Left>
      <Story />
    </Container>
  );
}

export default AboutMe;
