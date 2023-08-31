import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components/macro';
import Tabs from './navigation/Tabs';
import profilePicture from '../images/ProfilePicture.png';
import Card from './Card';
import Icons from './Icons';
import Button from './Button';
import { useScrollPosition, useWindowDimensions } from '../hooks';
import { small } from '../styles/breakpoints';
import NavbarMenuIcon from './navigation/NavbarMenuIcon';
import { useTheme } from '../context/theme';
import { fadeInAndSlideRight } from '../keyframes';

const StyledNavbar = styled.nav`
  padding: ${({ $collapsed }) =>
    $collapsed ? '10px 10px 30px 25px' : '10px 10px 30px 45px'};
  width: 25%;
  min-width: ${({ $collapsed }) => ($collapsed ? '10rem' : '260px')};
  max-width: ${({ $collapsed }) => ($collapsed ? '10rem' : '300px')};
  position: relative;
  z-index: 2;
  display: flex;
  transition: all 0.4s ease;
  opacity: 0;
  animation: 1.2s ${fadeInAndSlideRight} ease forwards;

  @media screen and (max-width: ${small}) {
    padding: ${({ $scrollPosition }) =>
      $scrollPosition > 250 ? '1rem 2rem' : '2rem'};

    width: 100%;
    max-width: none;
    position: fixed;
    z-index: 20;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    opacity: 1;
    animation: none;
  }
`;

const StyledCard = styled(Card)`
  min-height: 100%;
  height: fit-content;
  width: ${({ $collapsed }) => ($collapsed ? '7rem' : '100%')};
  transition: all 0.4s ease;

  .card {
    gap: ${({ $collapsed }) => ($collapsed ? '12px' : '16px')};
    width: 100%;
    transition: all 0.4s ease;
  }

  .card.container {
    padding-bottom: 2rem;
    padding: ${({ $collapsed }) =>
      $collapsed ? '1rem 1rem 2rem' : '2rem 3rem'};
    box-shadow: ${({ $collapsed, $boxShadow }) =>
      $collapsed
        ? `-20px 20px 0px 0px ${$boxShadow}`
        : `-35px 20px 0px 0px ${$boxShadow}`};
    align-items: center;
    border-radius: ${({ $collapsed, $borderRadius }) =>
      $collapsed ? $borderRadius : $borderRadius};
    transition: all 0.4s ease;
  }
`;

const ProfilePicture = styled.img`
  width: ${({ $collapsed }) => ($collapsed ? '5rem' : '10rem')};
  max-height: ${({ $collapsed }) => ($collapsed ? '5rem' : '10rem')};
  object-fit: contain;
  transition: all 0.4s ease;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  filter: ${({ filter }) => filter};

  @media screen and (max-width: ${small}) {
    width: ${({ $scrollPosition }) =>
      $scrollPosition > 250 ? '4rem' : '6rem'};
    max-height: ${({ $scrollPosition }) =>
      $scrollPosition > 250 ? '4rem' : '6rem'};
  }
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4px;

  h2 {
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
  }

  @media screen and (max-width: ${small}) {
    align-items: flex-start;
    gap: 0;
    height: ${({ $scrollPosition }) => ($scrollPosition > 250 ? '0' : '4rem')};
    transition: all 0.4s ease;

    h2 {
      font-size: 1.4rem;
      text-align: left;
    }
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $collapsed }) => ($collapsed ? 'flex-start' : 'center')};
  gap: 8px;
  min-width: ${({ $collapsed }) => ($collapsed ? '5rem' : '18rem')};
  width: ${({ $collapsed }) => ($collapsed ? '5rem' : '18rem')};
  transition: all 0.4s ease;

  h1 {
    font-size: 1.8rem;
    text-align: center;
  }

  @media screen and (max-width: ${small}) {
    align-items: flex-start;
    flex: 1;

    h1 {
      font-size: 2rem;
      text-align: left;
      margin-top: 6px;
      line-height: 2.2rem;
    }
  }
`;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  height: ${({ $collapsed }) => ($collapsed ? '0rem' : '6.68rem')};
  opacity: ${({ $collapsed }) => ($collapsed ? '0' : '1')};
  transform: ${({ $collapsed }) => ($collapsed ? 'scale(0)' : 'scale(1)')};
  transition: transform 0.4s ease, height 0.4s ease,
    opacity 0.6s ${({ $collapsed }) => ($collapsed ? '0s' : '0.2s')} ease;
  overflow: hidden;
  width: 100%;

  @media screen and (max-width: ${small}) {
    align-items: flex-start;
    gap: 2px;
    flex: 1;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ $collapsed }) => ($collapsed ? '10px' : '15px')};
  transition: all 0.4s ease;
  z-index: 11;

  @media screen and (max-width: ${small}) {
    flex-direction: row;
    flex: 1;
  }
`;

const MobileMenu = styled.div`
  width: 4.8rem;
  height: ${({ $menuOpen }) => ($menuOpen ? '25.4rem' : '4.8rem')};
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: ${({ $menuOpen, $backgroundColor }) =>
    $menuOpen ? $backgroundColor : 'transparent'};
  box-shadow: ${({ $menuOpen }) => $menuOpen && '-2px 8px 8px 0px #0000001a'};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  align-items: center;
  padding: 2px 4px 4px 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: ${({ border }) => border};

  @media screen and (max-width: ${small}) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const CollapsedMenu = styled.div`
  height: 100%;
  min-width: ${({ $menuOpen }) => ($menuOpen ? '25.4rem' : '4.8rem')};
  display: flex;
  gap: 12px;
  background-color: ${({ $menuOpen, $backgroundColor }) =>
    $menuOpen ? $backgroundColor : 'transparent'};
  box-shadow: ${({ $menuOpen }) => $menuOpen && '-2px 8px 8px 0px #0000001a'};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  align-items: center;
  padding: 4px;
  overflow: ${({ $menuOpen }) => ($menuOpen ? 'visible' : 'hidden')};
  /* overflow: hidden; */
  transition: all 0.3s ease;
`;

const MobileMenuContainer = styled.div`
  height: 100%;
  width: 4.8rem;
  overflow: visible;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4.8rem;
`;

const CollapsedMenuContainer = styled.div`
  width: 100%;
  height: 4.8rem;
  overflow: visible;
  position: relative;
  display: flex;
  justify-content: flex-start;
`;

const StyledIcons = styled(Icons)`
  opacity: ${({ opacity = 1 }) => opacity};
  transition: all 0.3s ease;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: ${({ $collapsed, $menuOpen }) =>
    ($collapsed && !$menuOpen && 'hidden') || 'visible'};

  @media screen and (max-width: ${small}) {
    flex-wrap: wrap;
  }
`;

const CollapseButton = styled(Button)`
  align-self: flex-end;
  gap: 4px;
  width: 100%;
`;

const TabContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
`;

const ButtonText = styled.span`
  margin-top: 3px;
  width: auto;
  overflow: hidden;
`;

const ArrowIcon = styled.img`
  min-width: 3.2rem;
  height: 3.2rem;
  transform: ${({ $collapsed }) => `rotate(${$collapsed ? '180deg' : '0deg'})`};
  transition: transform 0.4s ease;
`;

const CollapsedMenuIconContainer = styled.div`
  width: ${({ $collapsed }) => ($collapsed ? '4.2rem' : '0rem')};
  min-width: ${({ $collapsed }) => ($collapsed ? '4.2rem' : '0rem')};
  min-height: 4.2rem;
  overflow: hidden;
  transition: all 0.4s ease;
  display: ${({ $collapsed }) => ($collapsed ? 'block' : 'none')};
`;

function Header({ collapsed }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowDimensions();
  const isDesktop = width > Number.parseInt(small.replace('px', ''), 10);
  const { theme } = useTheme();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (!collapsed) setMenuOpen(false);
  }, [collapsed]);

  return (
    <StyledHeader $collapsed={collapsed}>
      <ProfilePicture
        $scrollPosition={scrollPosition}
        $collapsed={collapsed}
        src={profilePicture}
        $borderRadius={
          collapsed ? theme.borderRadius.small : theme.borderRadius.medium
        }
        filter={theme.imageFilter}
      />
      <HeaderContent $collapsed={collapsed}>
        <HeaderTextContainer $collapsed={collapsed}>
          <h1>Marcus Burnett</h1>
          <SubHeader $scrollPosition={scrollPosition}>
            <h2>Snr. Product Designer</h2>
            <h2>Front-end Developer</h2>
          </SubHeader>
        </HeaderTextContainer>
        {isDesktop && (
          <CollapsedMenuContainer>
            <CollapsedMenu
              $backgroundColor={theme.contactIcons}
              $menuOpen={menuOpen}
              $collapsed={collapsed}
              $borderRadius={theme.borderRadius.small}
            >
              <CollapsedMenuIconContainer $collapsed={collapsed}>
                <NavbarMenuIcon
                  collapsible="true"
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
              </CollapsedMenuIconContainer>
              <StyledIcons
                $collapsed={collapsed}
                $menuOpen={menuOpen}
                opacity={!collapsed || (collapsed && menuOpen) ? 1 : 0}
              />
            </CollapsedMenu>
          </CollapsedMenuContainer>
        )}
      </HeaderContent>
      {!isDesktop && (
        <MobileMenuContainer>
          <MobileMenu
            $backgroundColor={theme.contactIcons}
            $menuOpen={menuOpen}
            $borderRadius={theme.borderRadius.small}
            border={theme.border.default}
          >
            <NavbarMenuIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <StyledIcons
              $collapsed={collapsed}
              $menuOpen={menuOpen}
              opacity={!collapsed || (collapsed && menuOpen) ? 1 : 0}
            />
          </MobileMenu>
        </MobileMenuContainer>
      )}
    </StyledHeader>
  );
}

export default function Navbar() {
  const { width } = useWindowDimensions();
  const isMobile = width <= Number.parseInt(small.replace('px', ''), 10);
  const [collapsed, setCollapsed] = useState(false);
  const ref = useRef();
  const { theme } = useTheme();
  const scrollPosition = useScrollPosition();

  return isMobile ? (
    <StyledNavbar
      $scrollPosition={scrollPosition}
      $backgroundColor={theme.backgroundColor}
    >
      <Header />
      <Tabs />
    </StyledNavbar>
  ) : (
    <StyledNavbar ref={ref} $collapsed={collapsed}>
      <StyledCard
        $boxShadow={theme.boxShadow}
        $collapsed={collapsed}
        cardClassName="container"
        $borderRadius={theme.borderRadius.default}
      >
        <Header collapsed={collapsed} />
        <TabContainer>
          <Tabs collapsed={collapsed} />
        </TabContainer>
        <CollapseButton
          $collapsed={collapsed}
          onClick={() => setCollapsed((prev) => !prev)}
          secondary="true"
        >
          <ArrowIcon
            $collapsed={collapsed}
            src={theme.icons?.default?.arrowIcon}
            alt="arrow"
          />
          <ButtonText $collapsed={collapsed}>Collapse</ButtonText>
        </CollapseButton>
      </StyledCard>
    </StyledNavbar>
  );
}
