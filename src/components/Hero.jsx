import React from 'react';
import chris from "../assets/chris1.jpeg";

const Hero = () => {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-content">
        <h1>Chris Harris Edmond</h1>
        <p className="hero-subtitle">
          Student Developer specializing in AI, Machine Learning, Web and Android Development.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="https://drive.google.com/drive/folders/1qVMl65xTtMjz2yre3JZRjq-tm74qEu5r?usp=sharing" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <div className="hero-bg-shape"></div>
        <img
          src={chris}
          alt="Chris Harris Edmond - Student Developer"
          className="hero-image"
          onError={(e) => {
            e.target.onerror = null;
            // Fallback to a placeholder if image missing
            e.target.src = 'https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-default-avatar-profile-icon-gray-placeholder-vector-png-image_16213764.png';
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
