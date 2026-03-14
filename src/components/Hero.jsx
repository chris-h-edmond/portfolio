import React, { useState } from 'react';
import chris from "../assets/chris1.jpeg";
import { MeshGradient } from "@paper-design/shaders-react";

const Hero = () => {
  const [speed] = useState(1.0);

  return (
    <section className="relative min-h-[calc(100vh-100px)] flex items-center w-full py-16" id="home">
      <div className="absolute inset-0 -z-10 w-[100vw] h-full left-[50%] -translate-x-[50%] overflow-hidden pointer-events-none bg-black">
         <MeshGradient
          className="w-full h-full absolute inset-0 mix-blend-screen opacity-80"
          colors={["#111111", "#5c3317", "#1e2a38", "#2a1810"]}
          speed={speed * 0.8}
          wireframe={false}
          backgroundColor="#000000"
        />
        
        {/* Lighting overlay effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: `${3 / speed}s` }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse"
            style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/10 rounded-full blur-xl animate-pulse"
            style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
          />
        </div>
      </div>
      
      <div className="hero-section container relative z-10 bg-[#ffffff08] backdrop-blur-[40px] border border-white/10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05),0_0_40px_rgba(255,255,255,0.05)] overflow-hidden">
        <div className="hero-content">
          <h1 className="tracking-tight drop-shadow-lg">Chris Harris Edmond</h1>
          <p className="hero-subtitle">
            Student Developer specializing in AI, Machine Learning, Web and Android Development.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="https://drive.google.com/drive/folders/1qVMl65xTtMjz2yre3JZRjq-tm74qEu5r?usp=sharing" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className="hero-image-wrapper relative z-10">
          <img
            src={chris}
            alt="Chris Harris Edmond - Student Developer"
            className="hero-image blur-[1.5px] scale-[1.02] brightness-90 saturate-[0.85] contrast-125"
            onError={(e) => {
              e.target.onerror = null;
              // Fallback to a placeholder if image missing
              e.target.src = 'https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-default-avatar-profile-icon-gray-placeholder-vector-png-image_16213764.png';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
