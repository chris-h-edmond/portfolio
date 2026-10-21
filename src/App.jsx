import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import ScrollReveal from './components/animations/ScrollReveal';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <Hero />
          <ScrollReveal delay="0s">
            <Experience />
          </ScrollReveal>
          <ScrollReveal delay="0.05s">
            <Projects />
          </ScrollReveal>
          <ScrollReveal delay="0.05s">
            <Certificates />
          </ScrollReveal>
          <ScrollReveal delay="0.05s">
            <Education />
          </ScrollReveal>
        </main>
        <ScrollReveal delay="0.05s" style={{ marginTop: '4rem' }}>
          <Contact />
        </ScrollReveal>
      </div>
    </div>
  );
}

export default App;
