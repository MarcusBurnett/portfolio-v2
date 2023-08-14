import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useTheme } from '../context/theme';
import Card from './Card';
import CollapseIcon from './CollapseIcon';
import { small } from '../styles/breakpoints';
import { fadeInAndSlideLeft } from '../keyframes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  margin: 60px 0 20px 0;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideLeft} 0.8s ease forwards;

  @media screen and (max-width: ${small}) {
    padding: 0 0 0 20px;
  }
`;

const Data = styled.div`
  display: flex;
  gap: 20px;
  position: relative;
  align-items: flex-end;
  overflow-x: auto;
  overscroll-behavior: auto;
  padding: 0 30px 30px 30px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Background = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: ${({ width }) => `${width}rem`};
  min-width: 100%;
  position: absolute;
  left: 0;
  top: 4rem;
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  z-index: -1;
  transition: background-color 0.4s ease;
  height: calc(100% - 4rem);
`;

const Step = styled(Card)`
  .card {
    width: 45rem;
    max-width: 90vw;
    box-shadow: none;
    gap: 5px;
  }
`;

const StepTitle = styled.h5`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 700;
`;

const Content = styled.div`
  padding-left: 15px;
`;

const SectionHeader = styled.div`
  display: flex;
  gap: 5px;
  transform: rotate(-90deg);
  width: 2.2rem;
  height: 100%;
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    h5 {
      transform: scale(1.05);
    }
  }

  h5 {
    transition: all 0.2s ease;
    font-size: 1.6rem;
    text-transform: uppercase;
    transform-origin: left;
    font-weight: 400;
  }
`;

const Steps = styled.div`
  display: flex;
  /* opacity: ${({ collapsed }) => (collapsed ? 0 : 1)}; */
  gap: 2rem;
  overflow: hidden;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  min-width: ${({ collapsed, width }) =>
    collapsed ? '2.2rem' : `${width}rem`};
  width: ${({ collapsed, width }) => (collapsed ? '2.2rem' : `${width}rem`)};
  transition: all 0.6s ease;
  gap: 20px;
  position: relative;
  align-items: flex-end;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 2rem;

  @media screen and (max-width: ${small}) {
    font-size: 2.2rem;
  }
`;

export default function HowIWork() {
  const { theme } = useTheme();
  const [data, setData] = useState([
    {
      name: 'Research',
      collapsed: false,
      numberOfSteps: 2,
      steps: [
        {
          name: '1. Initial Analysis',
          content: (
            <span>
              I start by clarifying what we know and don’t know, which helps to
              understand both scope and initial direction. I do this by;
              <ul>
                <li>Analysing existing research and data</li>
                <li>Discussing with experienced colleagues</li>
              </ul>
            </span>
          ),
        },
        {
          name: '2. User Journey Mapping',
          content: (
            <span>
              Next, I plot out the full user journey, including all
              possibilities and interactions, both physical and digital.
            </span>
          ),
        },
      ],
    },
    {
      name: 'Design',
      collapsed: false,
      numberOfSteps: 2,
      steps: [
        {
          name: '1. Initial Analysis',
          content: (
            <span>
              I start by clarifying what we know and don’t know, which helps to
              understand both scope and initial direction. I do this by;
              <ul>
                <li>Analysing existing research and data</li>
                <li>Discussing with experienced colleagues</li>
              </ul>
            </span>
          ),
        },
        {
          name: '2. User Journey Mapping',
          content: (
            <span>
              Next, I plot out the full user journey, including all
              possibilities and interactions, both physical and digital.
            </span>
          ),
        },
      ],
    },
    {
      name: 'Develop',
      collapsed: false,
      numberOfSteps: 2,
      steps: [
        {
          name: '1. Initial Analysis',
          content: (
            <span>
              I start by clarifying what we know and don’t know, which helps to
              understand both scope and initial direction. I do this by;
              <ul>
                <li>Analysing existing research and data</li>
                <li>Discussing with experienced colleagues</li>
              </ul>
            </span>
          ),
        },
        {
          name: '2. User Journey Mapping',
          content: (
            <span>
              Next, I plot out the full user journey, including all
              possibilities and interactions, both physical and digital.
            </span>
          ),
        },
      ],
    },
  ]);

  const toggleCollapse = (section) => {
    setData((prev) => {
      const index = prev.findIndex((x) => x.name === section);

      return prev.map((r, i) =>
        i === index ? { ...r, collapsed: !r.collapsed } : r
      );
    });
  };

  const calculateBackgroundWidth = () => {
    const stepWidth = 46;
    const gap = 2;

    const sectionWidths = data.map((section) =>
      section.collapsed ? 2.2 : section.steps.length * (stepWidth + gap)
    );

    return sectionWidths.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };

  return (
    <Container>
      <Title>How I Work</Title>
      <Data>
        <Background
          borderRadius={theme.borderRadius.default}
          backgroundColor={theme.boxShadow}
          width={calculateBackgroundWidth()}
          border={theme.border.background}
        />
        {data.map((section) => (
          <Section
            width={section.steps.length * (46 + 2.2)}
            collapsed={section.collapsed}
          >
            <SectionHeader
              collapsed={section.collapsed}
              onClick={() => toggleCollapse(section.name)}
            >
              <CollapseIcon collapsed={section.collapsed} />
              <h5>{section.name}</h5>
            </SectionHeader>
            <Steps collapsed={section.collapsed}>
              {section.steps.map((step) => (
                <Step>
                  <StepTitle>{step.name}</StepTitle>
                  <Content>{step.content}</Content>
                </Step>
              ))}
            </Steps>
          </Section>
        ))}
      </Data>
    </Container>
  );
}
