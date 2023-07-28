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

root.render(
  <React.StrictMode>
    <AppProviders>
      <GlobalStyles />
      <Typography />
      <App />
    </AppProviders>
  </React.StrictMode>
);
