import React from 'react';
import { Home, User, Folder, Award, GraduationCap, Mail } from 'lucide-react';

const Sidebar = () => {
  return (
    <nav className="sticky-sidebar">
      <a href="#home" className="nav-link" aria-label="Home">
        <span className="nav-icon"><Home size={24} /></span>
        <span className="nav-label">Home</span>
      </a>
      <a href="#experience" className="nav-link" aria-label="Experience">
        <span className="nav-icon"><User size={24} /></span>
        <span className="nav-label">Experience</span>
      </a>
      <a href="#projects" className="nav-link" aria-label="Projects">
        <span className="nav-icon"><Folder size={24} /></span>
        <span className="nav-label">Projects</span>
      </a>
      <a href="#certificates" className="nav-link" aria-label="Certificates">
        <span className="nav-icon"><Award size={24} /></span>
        <span className="nav-label">Certificates</span>
      </a>
      <a href="#education" className="nav-link" aria-label="Education">
        <span className="nav-icon"><GraduationCap size={24} /></span>
        <span className="nav-label">Education</span>
      </a>
      <a href="#contact" className="nav-link" aria-label="Contact">
        <span className="nav-icon"><Mail size={24} /></span>
        <span className="nav-label">Contact</span>
      </a>
    </nav>
  );
};

export default Sidebar;
