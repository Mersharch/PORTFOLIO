import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      
    </div>
  );
}

export default App;
