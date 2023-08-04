import { createRef } from 'react';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import AboutMe from '../pages/AboutMe';
import Theme from '../pages/Theme';
import Experience from '../pages/Experience';

export default [
  {
    path: '/about-me',
    Component: AboutMe,
    name: 'About Me',
    nodeRef: createRef(),
  },
  { path: '/skills', Component: Skills, name: 'Skills', nodeRef: createRef() },
  {
    path: '/experience',
    Component: Experience,
    name: 'Experience',
    nodeRef: createRef(),
  },
  {
    path: '/contact',
    Component: Contact,
    name: 'Contact',
    nodeRef: createRef(),
  },
  {
    path: '/theme',
    Component: Theme,
    name: 'Theme',
    nodeRef: createRef(),
  },
];
