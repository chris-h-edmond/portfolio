import React, { useRef, useEffect } from 'react';

const FlyingDots = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let dots = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      // Use window.innerWidth to ensure it spans the whole screen width
      // Use parentElement.offsetHeight for the exact section height
      width = window.innerWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      initDots();
    };

    const initDots = () => {
      dots = [];
      // Adjust density based on screen size
      const numDots = Math.floor((width * height) / 12000); 
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4 - 0.2, // slight upward bias to "float"
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Wrap around screen boundaries
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        // Using the same orange highlight color
        ctx.fillStyle = `rgba(249, 115, 22, ${dot.alpha})`; 
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Delay initialization slightly to let DOM flex layouts settle
    const timeoutId = setTimeout(() => {
      window.addEventListener('resize', resize);
      resize();
      draw();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default FlyingDots;
