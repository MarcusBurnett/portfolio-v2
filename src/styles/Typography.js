import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import { useTheme } from '../context/theme';
import { small } from './breakpoints';

const StyledTypography = createGlobalStyle`
html {
  font-size: 62.5%; /* Allows for easy rem conversion i.e 16px = 1.6rem */
}

body {
  font-family: ${({ font }) => `"${font}", sans-serif`};
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({ color }) => color};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (max-width: ${small}) {
    font-size: 1.6rem;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color: ${({ color }) => color};
  margin: 0;
}

h1, h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.6rem;
}

p, span {
  margin: 0;
  line-height: 170%;
}

a {
  color: ${({ color }) => color};
  font-weight: 400;
  font-size: 1.4rem;
}
`;

export default function Typography() {
  const { theme } = useTheme();

  return <StyledTypography color={theme.color} font={theme.font} />;
}
