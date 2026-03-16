import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Certificates />
          <Education />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;
