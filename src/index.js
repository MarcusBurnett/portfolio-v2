import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'normalize.css';
import 'main.css/dist/_base.css';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import AppProviders from './context';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const articleStructuredData = {
  __html: JSON.stringify({
    '@context': 'http://schema.org',
    '@type': 'Person',
    name: 'Marcus Burnett',
    url: 'https://www.marcus-burnett-portfolio.web.app',
    sameAs: [
      'https://www.linkedin.com/in/marcus-burnett',
      'https://github.com/marcusburnett',
    ],
    jobTitle: 'Senior Product Designer | Front-End Developer | UX Engineer',
    description:
      'I am a passionate senior product designer, front-end developer, and UX engineer with a focus on creating user-centered and visually appealing digital experiences.',
    image:
      'https://marcus-burnett-portfolio.web.app/static/media/ProfilePicture.be9f633b2571814bcf7e.png',
    memberOf: {
      '@type': 'Organisation',
      name: 'Sendcloud',
      url: 'https://www.sendcloud.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.marcus-burnett-portfolio.web.app',
    },
  }),
};

root.render(
  <React.StrictMode>
    <script type="application/ld+json">
      {JSON.stringify(articleStructuredData)}
    </script>
    <AppProviders>
      <GlobalStyles />
      <Typography />
      <App />
    </AppProviders>
  </React.StrictMode>
);
