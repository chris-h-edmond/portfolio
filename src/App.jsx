import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

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
