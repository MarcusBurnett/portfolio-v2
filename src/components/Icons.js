import React from 'react';
import styled from 'styled-components/macro';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { small } from '../styles/breakpoints';
import { useTheme } from '../context/theme';
import ToolTip from './ToolTip';
import CV from '../CV.pdf';

const StyledIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.8rem;
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
  position: relative;
  border: ${({ border }) => border};
  border-radius: ${({ $borderRadius }) => $borderRadius};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.1);

    .tooltip {
      display: flex;
      opacity: 1;
      cursor: pointer;

      @media screen and (max-width: ${small}) {
        display: none;
      }
    }
  }

  .tooltip {
    bottom: -4.1rem;
    opacity: 0;
    transition: opacity 0.1s ease;
    cursor: none;
  }

  @media screen and (max-width: ${small}) {
    width: 4.4rem;
    height: 4.4rem;
    margin: 0;
  }
`;

function Icons({ className }) {
  const { theme } = useTheme();

  const copy = async (text) => {
    try {
      navigator?.clipboard?.writeText(text);
      toast.success('Email copied to clipboard', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch {
      // handle error
    }
  };

  const icons = [
    {
      url: CV,
      icon: theme.icons?.selected?.downloadCVIcon,
      name: 'Download CV',
      target: '_blank',
    },
    {
      url: 'mailto:m.burnett8@outlook.com',
      icon: theme.icons?.selected?.emailIcon,
      name: 'Email',
      onClick: () => copy('m.burnett8@outlook.com'),
    },
    {
      url: 'tel: +31619714087',
      icon: theme.icons?.selected?.phoneIcon,
      name: 'Phone',
      onClick: () => copy('+31619714087'),
    },
    {
      url: 'https://www.linkedin.com/in/marcus-burnett/',
      icon: theme.icons?.selected?.linkedInIcon,
      name: 'LinkedIn',
      target: '_blank',
    },
  ];

  return (
    <StyledIcons className={className}>
      {icons.map((icon) => (
        <Link
          key={icon.url}
          target={icon.target}
          rel="noopener noreferrer"
          href={icon.url}
          aria-label={`open link ${icon.url}`}
          $backgroundColor={theme.contactIcons}
          border={theme.border.icon}
          $borderRadius={theme.borderRadius.icon}
          onClick={icon.onClick}
        >
          <IconsItem src={icon.icon} alt={icon.name} />
          <ToolTip className="tooltip">{icon.name}</ToolTip>
        </Link>
      ))}
    </StyledIcons>
  );
}

export default Icons;
