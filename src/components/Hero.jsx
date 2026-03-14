import React, { useState, useRef, useEffect } from 'react';
import chris from "../assets/chris1.jpeg";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const skillsCategories = [
  {
    title: "Languages",
    items: ["C++", "C", "Python", "Java", "Kotlin", "HTML", "CSS", "JavaScript", "TypeScript"]
  },
  {
    title: "Frameworks",
    items: ["Jetpack Compose", "Spring Boot", "ReactJS"]
  },
  {
    title: "Tools & Platforms",
    items: ["Android Studio", "Gemini API", "TensorFlow", "PyTorch", "OpenCV", "Postman", "Git/GitHub/GitLab", "GA4", "Google Colab"]
  },
  {
    title: "Core Skills",
    items: ["Problem-Solving", "Logical Reasoning", "Leadership", "Effective Planning", "Communication"]
  }
];

const Hero = () => {
  const [speed] = useState(1.0);
  const containerRef = useRef(null);
  const placeholderRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade out left text
  const leftOpacity = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const leftX = useTransform(scrollYProgress, [0, 0.33], [0, -50]);

  // Fade in skills grid
  const skillsOpacity = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const skillsY = useTransform(scrollYProgress, [0.33, 0.66], [40, 0]);
  const skillsPointerEvents = useTransform(scrollYProgress, p => p > 0.45 ? 'auto' : 'none');

  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    const measure = () => {
      const ph = placeholderRef.current;
      if (!ph || !containerRef.current) return;
      const rect = ph.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Calculate true viewport top position as if the container has exactly stuck to top:0
      const simulatedStTop = rect.top - containerRect.top;

      let targetLeft = 24;
      let targetTop = 24;
      let targetSize = 44;
      
      const headerLogo = document.getElementById("header-profile-circle");
      if (headerLogo) {
        const lRect = headerLogo.getBoundingClientRect();
        targetLeft = lRect.left;
        targetTop = lRect.top;
        targetSize = lRect.width;
      } else {
        targetLeft = Math.max(24, window.innerWidth / 2 - 600 + 24);
      }

      setBounds({
        stTop: simulatedStTop, stLeft: rect.left, stW: rect.width, stH: rect.height,
        enTop: targetTop, enLeft: targetLeft, enSize: targetSize
      });
    };
    
    // Slight delay for font/layout paints
    const tm = setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    return () => { clearTimeout(tm); window.removeEventListener('resize', measure); };
  }, []);

  // Use progress to fade out header initial text
  useEffect(() => {
     const unsubscribe = scrollYProgress.on('change', (v) => {
        const txt = document.getElementById("header-logo-text");
        if (txt) {
           txt.style.opacity = v > 0.6 ? 0 : 1;
        }
     });
     return () => unsubscribe();
  }, [scrollYProgress]);

  // Instantly cross-fade placeholder and animated image exactly when scroll reaches the sticky point
  const placeOpacity = useTransform(scrollYProgress, [0, 0.001], [1, 0]);
  const fixedOpacity = useTransform(scrollYProgress, [0, 0.001], [0, 1]);

  const imgTop = useTransform(scrollYProgress, [0, 0.66], [bounds?.stTop || 0, bounds?.enTop || 0]);
  const imgLeft = useTransform(scrollYProgress, [0, 0.66], [bounds?.stLeft || 0, bounds?.enLeft || 0]);
  const imgWidth = useTransform(scrollYProgress, [0, 0.66], [bounds?.stW || 0, bounds?.enSize || 0]);
  const imgHeight = useTransform(scrollYProgress, [0, 0.66], [bounds?.stH || 0, bounds?.enSize || 0]);
  const imgRadius = useTransform(scrollYProgress, [0, 0.66], ["16px", "50%"]);

  return (
    <section ref={containerRef} className="relative h-[220vh] w-full" id="home">
      {/* Sticky container that locks during scroll */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pb-20">
        
        {/* Shaders and lights inside sticky container */}
        <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none bg-black">
          <MeshGradient
            className="w-full h-full absolute inset-0 mix-blend-screen opacity-80"
            colors={["#111111", "#5c3317", "#1e2a38", "#2a1810"]}
            speed={speed * 0.8}
            wireframe={false}
            backgroundColor="#000000"
          />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: `${3 / speed}s` }} />
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }} />
            <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }} />
          </div>
        </div>

        {/* Hero Card */}
        <div className="container relative z-10 w-full">
          {/* We apply hero-section exactly on the glass card like the original layout */}
          <div className="hero-section relative bg-[#ffffff08] backdrop-blur-[40px] border border-white/10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05),0_0_40px_rgba(255,255,255,0.05)] overflow-hidden min-h-[550px]">
            
            {/* 1. Left Text Column */}
            <motion.div className="hero-content" style={{ opacity: leftOpacity, x: leftX }}>
              <h1 className="tracking-tight drop-shadow-lg">Chris Harris Edmond</h1>
              <p className="hero-subtitle">
                Student Developer specializing in AI, Machine Learning, Web and Android Development.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="https://drive.google.com/drive/folders/1qVMl65xTtMjz2yre3JZRjq-tm74qEu5r?usp=sharing" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Resume</a>
              </div>
            </motion.div>

            {/* 2. Right Image Column */}
            <div className="hero-image-wrapper relative z-10">
              <motion.img
                 ref={placeholderRef}
                 src={chris}
                 alt="Chris Harris Edmond - Student Developer"
                 className="hero-image"
                 style={{ 
                   opacity: bounds ? placeOpacity : 1,
                   pointerEvents: "none"
                 }}
              />
            </div>

            {/* 3. Skills overlay layout layer (visible late). Overlays entire card */}
            <motion.div 
               className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#00000040] z-20 backdrop-blur-md"
               style={{ opacity: skillsOpacity, y: skillsY, pointerEvents: skillsPointerEvents }}
            >
               <h2 className="text-3xl font-bold text-white mb-6">Technical Stack & Skills</h2>
               <div className="flex flex-col gap-6 w-full max-w-4xl max-h-[85%] overflow-y-auto pr-2" style={{ scrollbarWidth: 'none' }}>
                 {skillsCategories.map(category => (
                   <div key={category.title} className="flex flex-col gap-3">
                     <h3 className="text-lg font-semibold text-white/80 border-b border-white/10 pb-2">{category.title}</h3>
                     <div className="flex flex-wrap gap-2">
                       {category.items.map(item => (
                         <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-orange-500 transition-colors shadow-sm">
                           {item}
                         </span>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* The Animated Fixed Image, detached from normal flow to allow overlapping the header safely. */}
      {bounds && (
         <motion.img
            src={chris}
            className="fixed z-[1001] shadow-2xl"
            style={{
               top: imgTop,
               left: imgLeft,
               width: imgWidth,
               height: imgHeight,
               borderRadius: imgRadius,
               opacity: fixedOpacity,
               pointerEvents: 'none',
               objectFit: 'cover'
            }}
         />
      )}
    </section>
  );
};

export default Hero;
