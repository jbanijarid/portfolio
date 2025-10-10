import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Navbar />
      <Projects />
    </div>
  );
}

export default App;