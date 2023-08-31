import React from 'react';
import styled from 'styled-components/macro';
import { medium } from '../../styles/breakpoints';
import { useTheme } from '../../context/theme';

const Menu = styled.div`
  padding: 1rem;
  border-radius: 50%;
  width: 4.2rem;
  min-height: 4.2rem;
  min-width: 4.2rem;
  display: ${({ collapsible }) => (collapsible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  z-index: 3;

  &:hover {
    background-color: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor};
  }

  @media screen and (max-width: ${medium}) {
    display: flex;
  }
`;

const Line = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  height: 0.3rem;
  width: ${({ $active }) => ($active ? '130%' : '100%')};
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
  border-radius: 0.1rem;
`;

const Line1 = styled(Line)`
  width: ${({ $active }) => ($active ? undefined : '60%')};
  transform-origin: 82% 150%;
  transform: ${({ $active }) => `rotate(${$active ? '-45deg' : '0deg'})`};
`;

const Line2 = styled(Line)`
  width: 100%;
  transform: ${({ $active }) => `rotateY(${$active ? '-90deg' : '0deg'})`};
`;

const Line3 = styled(Line)`
  width: ${({ $active }) => ($active ? undefined : '60%')};
  transform-origin: 86% -50%;
  transform: ${({ $active }) => `rotate(${$active ? '45deg' : '0deg'})`};
`;

function NavbarMenuIcon({ menuOpen, setMenuOpen, collapsible }) {
  const { theme } = useTheme();

  return (
    <Menu
      collapsible={collapsible}
      $active={menuOpen}
      onClick={() => setMenuOpen((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 13 && setMenuOpen((prev) => !prev)}
      $hoverBackgroundColor={theme.button.secondary.backgroundColor}
    >
      <Line1
        $active={menuOpen}
        $backgroundColor={menuOpen ? theme.color : theme.accent}
      />
      <Line2
        $active={menuOpen}
        $backgroundColor={menuOpen ? theme.color : theme.accent}
      />
      <Line3
        $active={menuOpen}
        $backgroundColor={menuOpen ? theme.color : theme.accent}
      />
    </Menu>
  );
}

export default NavbarMenuIcon;
