import React from 'react';
import styled from 'styled-components/macro';
import { small } from '../styles/breakpoints';
import { useTheme } from '../context/theme';
import ToolTip from './ToolTip';

const StyledIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
`;

const IconsItem = styled.img`
  width: 60%;
  height: 60%;
`;

const Link = styled.a`
  width: 3.8rem;
  height: 3.8rem;
  transition: all 0.2s ease-in-out;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.1);

    .tooltip {
      display: flex;
      opacity: 1;
    }
  }

  .tooltip {
    top: 4.1rem;
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  @media screen and (max-width: ${small}) {
    width: 4.4rem;
    height: 4.4rem;
    margin: 0;
  }
`;

function Icons({ className }) {
  const { theme } = useTheme();
  const icons = [
    {
      url: 'https://www.github.com/marcusburnett',
      icon: theme.icons?.selected?.downloadCVIcon,
      name: 'Download CV',
    },
    {
      url: 'mailto:marco95bwfc@gmail.com',
      icon: theme.icons?.selected?.emailIcon,
      name: 'Email',
    },
    {
      url: 'tel: +31619714087',
      icon: theme.icons?.selected?.phoneIcon,
      name: 'Phone',
    },
    {
      url: 'https://www.linkedin.com/in/marcus-burnett/',
      icon: theme.icons?.selected?.linkedInIcon,
      name: 'LinkedIn',
    },
  ];

  return (
    <StyledIcons className={className}>
      {icons.map((icon) => (
        <Link
          key={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          href={icon.url}
          aria-label={`open link ${icon.url}`}
          $backgroundColor={theme.contactIcons}
          border={theme.border.icon}
          borderRadius={theme.borderRadius.icon}
        >
          <IconsItem src={icon.icon} alt={icon.name} />
          <ToolTip className="tooltip">{icon.name}</ToolTip>
        </Link>
      ))}
    </StyledIcons>
  );
}

export default Icons;
