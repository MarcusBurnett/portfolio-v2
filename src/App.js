import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Pages from './pages/Pages';

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Pages />
        <ToastContainer />
      </Wrapper>
    </Router>
  );
}

export default App;
