import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Wraps any child with a scroll-triggered fade + slide-up reveal.
 *
 * Props:
 *   delay  – CSS transition-delay string, e.g. '0.1s' (default: '0s')
 *   y      – starting vertical offset in px (default: 40)
 */
const ScrollReveal = ({ children, delay = '0s', y = 40 }) => {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
