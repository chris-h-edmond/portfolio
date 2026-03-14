import React, { useRef, useEffect } from 'react';

const FallingBeams = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let beams = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      width = window.innerWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      initBeams();
    };

    const initBeams = () => {
      beams = [];
      const numBeams = Math.floor(width / 60); // Adjust density based on screen width
      for (let i = 0; i < numBeams; i++) {
        beams.push({
          x: Math.random() * width,
          y: Math.random() * height * 2 - height, // Staggered starting positions
          length: Math.random() * 300 + 150, // Beam length
          speed: Math.random() * 1.5 + 0.5, // Fall speed
          opacity: Math.random() * 0.25 + 0.05, // Subtle brightness
          width: Math.random() * 1.5 + 0.5, // Beam thickness
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      beams.forEach(beam => {
        beam.y += beam.speed;

        // Reset beam when it moves completely off screen
        if (beam.y - beam.length > height) {
          beam.y = -Math.random() * 200;
          beam.x = Math.random() * width;
        }

        // Draw the light beam with a fading gradient
        const gradient = ctx.createLinearGradient(beam.x, beam.y - beam.length, beam.x, beam.y);
        gradient.addColorStop(0, `rgba(249, 115, 22, 0)`); // Fade out at the top tail
        gradient.addColorStop(0.8, `rgba(249, 115, 22, ${beam.opacity})`); // Brightest near the head
        gradient.addColorStop(1, `rgba(249, 115, 22, 0)`); // Soft tip

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = beam.width;
        ctx.moveTo(beam.x, beam.y - beam.length);
        ctx.lineTo(beam.x, beam.y);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Delay initialization slightly to let DOM layouts settle
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
      style={{ zIndex: 0, opacity: 0.8 }}
    />
  );
};

export default FallingBeams;
