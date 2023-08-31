import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import appStoreIcon from '../images/Download/AppStore.svg';
import googlePlayIcon from '../images/Download/GooglePlay.svg';
import { fadeInAndSlideUp } from '../keyframes';
import Spacer from './Spacer';
import { xsmall } from '../styles/breakpoints';
import Button from './Button';
import { useTheme } from '../context/theme';

const LinksContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 1s forwards;
  position: relative;

  @media screen and (max-width: ${xsmall}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const DownloadLink = styled.a`
  img {
    transform: scale(1);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const DownloadLinkImage = styled.img`
  max-height: 4rem;
  margin: 0 20px 20px 0;

  @media screen and (max-width: ${xsmall}) {
    max-height: 4.8rem;
    margin: 0 10px 10px 0;
  }
`;

const Website = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ color }) => color};

  &:hover {
    text-decoration: none;
  }

  @media screen and (max-width: ${xsmall}) {
    font-size: 2rem;
  }
`;

function Links({ project }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <LinksContainer>
      {project.website && (
        <Website
          target="_blank"
          rel="noopener noreferrer"
          href={project.website}
          color={theme.accent}
        >
          {project.website}
        </Website>
      )}
      <Spacer size={project.downloadLinks?.length > 0 ? 'xl' : 's'} />
      <div>
        {project.downloadLinks?.map((link) => (
          <DownloadLink
            target="_blank"
            rel="noopener noreferrer"
            key={link.store}
            href={link.url}
          >
            <DownloadLinkImage
              src={link.store === 'apple' ? appStoreIcon : googlePlayIcon}
              alt={link.store}
            />
          </DownloadLink>
        ))}
      </div>
      {project.contact && (
        <>
          <Spacer size="l" />
          <Button
            small
            secondary
            onClick={() =>
              navigate('/contact', {
                message: `I would like to request a demo of ${project.title}`,
              })
            }
          >
            {project.contact}
          </Button>
        </>
      )}
    </LinksContainer>
  );
}

export default Links;
