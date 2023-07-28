import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Pages from './pages/Pages';

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Pages />
      </Wrapper>
    </Router>
  );
}

export default App;
