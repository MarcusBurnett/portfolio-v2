import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Card from '../Card';
import { small } from '../../styles/breakpoints';
import { useWindowDimensions, useTabs } from '../../hooks';
import { fadeIn } from '../../keyframes';
import { useTheme } from '../../context/theme';

const StyledTabs = styled.ul`
  opacity: 0;
  animation: 0.8s ${fadeIn} ease forwards;
  width: ${({ $collapsed }) =>
    $collapsed ? 'calc(100% + 1rem)' : 'calc(100% + 5rem)'};
  margin-left: ${({ $collapsed }) => ($collapsed ? '-2rem' : '-5rem')};
  gap: 0.4rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  padding: 1rem;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  border: ${({ border }) => border};
  box-shadow: 0 0.4rem 0.4rem 0 #0000000d;
  box-sizing: border-box;
  transition: all 0.4s ease;
  z-index: 10;
  box-shadow: ${({ $displayShadow }) => !$displayShadow && 'none'};

  @media screen and (max-width: ${small}) {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    display: flex;
    margin-left: 0;
    height: 7rem;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.4rem;
    box-shadow: 0 0.4rem 0.8rem 0 #0000001a;
  }
`;

const Indicator = styled.div`
  position: absolute;
  width: ${({ selected, $collapsed }) =>
    (selected && $collapsed && '0.4rem') || (selected && '0.8rem') || '0'};
  left: 0;
  top: ${({ $collapsed }) => ($collapsed ? '1.2rem' : '0')};
  bottom: ${({ $collapsed }) => ($collapsed ? '1.2rem' : '0')};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  transition: all 0.4s ease;

  @media screen and (max-width: ${small}) {
    width: 100%;
    height: ${({ selected }) => (selected ? '0.4rem' : '0')};
    top: auto;
    right: 0;
  }
`;

const Tab = styled.li`
  display: flex;
  transform: ${({ selected, $collapsed }) =>
    selected ? `translate(${$collapsed ? '0.4rem' : '1rem'})` : 'translate(0)'};
  transition: all 0.4s ease;
  margin-right: 0.1rem;
  width: ${({ selected, $collapsed }) =>
    (selected && $collapsed && '140%') || (selected && '105%') || '100%'};
  margin-left: ${({ selected, $collapsed }) =>
    !selected && $collapsed && '-0.4rem'};

  @media screen and (max-width: ${small}) {
    width: 100%;
    transform: translateX(0);
    flex-direction: column;
    margin-bottom: 0;
  }

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${small}) {
    &:hover {
      width: ${({ $collapsed }) => $collapsed && '420%'};

      .title {
        opacity: 1;
      }
    }
  }
`;

const StyledCard = styled(Card)`
  flex: 1;
  min-width: 4.5rem;
  height: 4.5rem;
  transition: all 0.4s ease;

  .background {
    border-color: ${({ colors, showBackground }) =>
      (showBackground && colors?.backgroundBorder) || 'transparent'};
    border-width: 0.1rem;

    @media screen and (max-width: ${small}) {
      border-width: 0;
    }
  }

  .card {
    display: flex;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    box-shadow: ${({ selected, $displayShadow }) =>
      selected && $displayShadow ? '0 0.4rem 0.8rem 0 #0000000D' : 'none'};
    transition: all 0.4s ease;
    padding: 0;
    border-radius: ${({ $borderRadius }) => $borderRadius};
    border: ${({ border }) => border};
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    width: 100%;

    @media screen and (max-width: ${small}) {
      box-shadow: ${({ selected }) =>
        selected ? '0 -0.4rem 0.8rem 0 #0000000D' : 'none'};
      flex-direction: column;
      overflow: hidden;
    }

    &:hover {
      background-color: ${({ hoverBackground }) => hoverBackground};
      box-shadow: ${({ $displayShadow }) =>
        $displayShadow && '0 0.4rem 0.8rem 0 #0000000d'};
      border: ${({ borderHover }) => borderHover};

      .tooltip {
        display: flex;
        opacity: 1;
      }
    }

    .tooltip {
      left: 4.8rem;
      opacity: 0;
      transition: opacity 0.1s ease;

      &::before {
        border-top: 0.4rem solid transparent;
        border-bottom: 0.4rem solid transparent;
        border-right: 0.4rem solid
          ${({ tooltipBackgroundColor }) => tooltipBackgroundColor};
        left: -0.8rem;
        top: auto;
      }
    }
  }
`;

const Icon = styled.img`
  margin-right: 1rem;
  width: 2.4rem;
  height: 2.4rem;
  transition: margin-right 0.4s ease;

  @media screen and (max-width: ${small}) {
    margin-right: 0;
    margin-bottom: 0.4rem;
  }
`;

const StyledLink = styled(Link)`
  padding: ${({ selected, $collapsed }) =>
    (selected && $collapsed && '1rem 1rem 1rem 1.4rem') ||
    (selected && '1rem 2rem') ||
    '1rem'};
  text-decoration: none;
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  font-weight: ${({ fontWeight }) => fontWeight};
  transition: all 0.4s ease;
  pointer-events: ${({ selected }) => (selected ? 'none' : 'auto')};

  @media screen and (max-width: ${small}) {
    padding: ${({ selected }) =>
      selected ? '1rem 0.2rem' : '1rem 0.2rem 0rem 0.2rem'};
    font-size: 1.2rem;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

const Title = styled.span`
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  opacity: ${({ $collapsed }) => ($collapsed ? '0' : '1')};
  overflow: hidden;
  transition: all 0.4s ease;
  white-space: nowrap;
  margin-top: 0.2rem;
`;

function Tabs({ collapsed }) {
  const { tabs } = useTabs();
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const isMobile = width <= Number.parseInt(small.replace('px', ''), 10);

  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledTabs
      $collapsed={collapsed}
      $backgroundColor={isMobile ? theme.secondary : theme.backgroundColor}
      $borderRadius={theme.borderRadius.small}
      border={theme.border.default}
      $displayShadow={theme.shadow}
    >
      {tabs.map((tab) => (
        <Tab $collapsed={collapsed} key={tab.title} selected={tab.selected}>
          <StyledCard
            selected={tab.selected}
            aria-selected={tab.selected}
            role="tab"
            tabindex={tab.selected ? 0 : -1}
            $backgroundColor={tab.selected ? theme.selected : 'transparent'}
            hoverBackground={theme.selected}
            $collapsed={collapsed}
            tooltipBackgroundColor={theme.accent}
            $borderRadius={theme.borderRadius.tab}
            border={tab.selected ? theme.border.tabSelected : theme.border.tab}
            borderHover={theme.border.tabSelected}
            $displayShadow={theme.shadow}
          >
            <Indicator
              $backgroundColor={tab.selected ? theme.accent : 'transparent'}
              selected={tab.selected}
              $collapsed={collapsed}
              $borderRadius={
                collapsed
                  ? theme.borderRadius.indicatorCollapsed
                  : theme.borderRadius.indicator
              }
            />
            <StyledLink
              onClick={handleOnClick}
              selected={tab.selected}
              to={tab.path}
              $collapsed={collapsed}
            >
              <Icon
                selected={tab.selected}
                src={tab.selected ? tab.selectedIcon : tab.icon}
                alt={`${tab.title} icon`}
                $collapsed={collapsed}
              />
              <Title
                className="title"
                $collapsed={collapsed}
                selected={tab.selected}
              >
                {tab.title}
              </Title>
            </StyledLink>
          </StyledCard>
        </Tab>
      ))}
    </StyledTabs>
  );
}

export default Tabs;
