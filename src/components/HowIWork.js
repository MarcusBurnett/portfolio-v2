import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useTheme } from '../context/theme';
import Card from './Card';
import CollapseIcon from './CollapseIcon';
import { medium, small } from '../styles/breakpoints';
import { fadeInAndSlideLeft } from '../keyframes';
import { useWindowDimensions } from '../hooks';
import howIWork from '../data/howIWork';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: relative;
  margin: 8rem 0 2rem 0;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideLeft} 0.6s ease forwards;

  @media screen and (max-width: ${small}) {
    margin-top: 4rem;
    animation: 0.4s ${fadeInAndSlideLeft} 0.4s ease forwards;
  }

  ul {
    list-style: disc;
    margin: 1rem 0 0 1rem;
  }
`;

const Data = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  align-items: flex-end;
  overflow-x: auto;
  overscroll-behavior: auto;
  padding: 0 3rem 3rem 3rem;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Background = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  width: ${({ width }) => `${width / 10}rem`};
  min-width: 100%;
  position: absolute;
  left: 0;
  top: 4rem;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  border: ${({ border }) => border};
  z-index: -1;
  transition: background-color 0.4s ease;
  height: calc(100% - 4rem);

  @media screen and (max-width: ${small}) {
    left: 1rem;
  }
`;

const Step = styled(Card)`
  .card {
    width: 55rem;
    max-width: 90vw;
    box-shadow: none;
    gap: 0.4rem;

    @media screen and (max-width: ${small}) {
      padding: 2.4rem;
    }
  }
`;

const StepTitle = styled.h5`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 700;

  @media screen and (max-width: ${small}) {
    font-size: 1.8rem;
  }
`;

const Content = styled.div`
  padding-left: 1.6rem;

  @media screen and (max-width: ${small}) {
    padding-left: 0;
    font-size: 1.4rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  gap: 0.4rem;
  transform: rotate(-90deg);
  width: 2.4rem;
  height: 100%;
  cursor: pointer;
  letter-spacing: 0.1rem;

  @media screen and (max-width: ${small}) {
    width: 2.4rem;
  }

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
    color: ${({ color }) => color};

    @media screen and (max-width: ${small}) {
      font-size: 1.8rem;
    }
  }
`;

const Steps = styled.div`
  display: flex;
  gap: 2rem;
  overflow: hidden;
  height: 100%; */
`;

const Section = styled.div`
  display: flex;
  min-width: ${({ $collapsed, width }) =>
    $collapsed ? '2.2rem' : `${width / 10}rem`};
  width: ${({ $collapsed, width }) =>
    $collapsed ? '2.2rem' : `${width / 10}rem`};
  transition: all 1s ease-in-out;
  gap: 2rem;
  position: relative;
  align-items: flex-end;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 2rem;

  @media screen and (max-width: ${small}) {
    font-size: 2.2rem;
    margin-left: 2rem;
  }
`;

export default function HowIWork() {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width <= Number.parseInt(medium.replace('px', ''), 10);
  const [data, setData] = useState(howIWork);

  const toggleCollapse = (section) => {
    setData((prev) => {
      const index = prev.findIndex((x) => x.name === section);

      return prev.map((r, i) =>
        i === index ? { ...r, collapsed: !r.collapsed } : r
      );
    });
  };

  const calculateBackgroundWidth = () => {
    const stepWidth = isMobile ? Math.min(550, width * 0.95) : 550;
    const gap = 25;

    const sectionWidths = data.map((section) =>
      section.collapsed ? 2.2 : section.steps.length * (stepWidth + gap)
    );

    return sectionWidths.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };

  const calculateSectionWidth = (numberOfSteps) => {
    const stepWidth = isMobile ? Math.min(550, width * 0.95) : 550;

    const gap = 25;

    return numberOfSteps * (stepWidth + gap);
  };

  return (
    <Container>
      <Title>How I Work</Title>
      <Data>
        <Background
          $borderRadius={theme.borderRadius.default}
          $backgroundColor={theme.boxShadow}
          width={calculateBackgroundWidth()}
          border={theme.border.background}
        />
        {data.map((section) => (
          <Section
            width={calculateSectionWidth(section.steps.length)}
            $collapsed={section.collapsed}
            key={section.name}
          >
            <SectionHeader
              $collapsed={section.collapsed}
              onClick={() => toggleCollapse(section.name)}
              color={theme.storyColor}
            >
              <CollapseIcon collapsed={section.collapsed} />
              <h5>{section.name}</h5>
            </SectionHeader>
            <Steps $collapsed={section.collapsed}>
              {section.steps.map((step) => (
                <Step key={step.name}>
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
