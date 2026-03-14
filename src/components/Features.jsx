import React, { useEffect, useRef } from 'react';

const icons = {
  structure: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  lightning: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  palette: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
    </svg>
  )
};

const FEATURES = [
  {
    title: 'Proper File Structure',
    description: 'Separation of concerns with organized folders for components, hooks, services, context, and utilites. Everything in its right place.',
    icon: 'structure',
    alt: false
  },
  {
    title: 'Dynamic Aesthetics',
    description: 'Vibrant gradients, translucent glassmorphism effects, and smooth CSS keyframe animations designed to grab user attention.',
    icon: 'palette',
    alt: true
  },
  {
    title: 'Vite Performance',
    description: 'Lightning fast Hot Module Replacement (HMR) ensuring a delightful developer experience and optimized production bundles.',
    icon: 'lightning',
    alt: false
  }
];

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      for (const card of cardsRef.current) {
        if (!card) continue;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="features-section animate-fade-in" id="features">
      {FEATURES.map((feature, idx) => (
        <div 
          key={idx} 
          className={`glass-panel feature-card ${feature.alt ? 'alt' : ''}`}
          ref={el => cardsRef.current[idx] = el}
        >
          <div className="feature-icon-wrapper">
            {icons[feature.icon]}
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
