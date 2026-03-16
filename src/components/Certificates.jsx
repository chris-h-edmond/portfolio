import React, { useState } from 'react';
import { Award } from 'lucide-react';
import FallingBeams from './FallingBeams';

const certs = [
  {
    course: 'Full Stack (MERN) with Gen AI',
    issuer: "Flames '25",
    issued: 'Aug 2025',
    description:
      'End-to-end MERN stack development integrated with Gen AI tools: covering React, Node.js, MongoDB, Express, and applied LLM features.',
  },
  {
    course: 'Java Programming',
    issuer: 'NeoColab',
    issued: 'May 2025',
    description:
      'Core and advanced Java concepts including OOP, collections, multithreading, and building real-world console and GUI applications.',
  },
  {
    course: 'Mastering C: Basic to Beyond',
    issuer: 'CSE Pathshala',
    issued: 'Feb 2025',
    description:
      'Comprehensive C programming from fundamentals to advanced topics like pointers, memory management, and system-level programming.',
  },
  {
    course: 'Data Structures and Algorithms',
    issuer: 'NeoColab',
    issued: 'Dec 2024',
    description:
      'In-depth study of arrays, linked lists, trees, graphs, sorting, and dynamic programming for efficient problem solving.',
  },
  {
    course: 'C++ Programming',
    issuer: 'NeoColab',
    issued: 'May 2024',
    description:
      'Object-oriented programming in C++ covering classes, inheritance, polymorphism, templates, and the STL.',
  },
  {
    course: 'C Programming',
    issuer: 'NeoColab',
    issued: 'May 2024',
    description:
      'Foundational C programming including variables, control flow, functions, arrays, and introductory pointer concepts.',
  },
  {
    course: 'Machine Learning with Python',
    issuer: 'IBM',
    issued: 'Feb 2024',
    description:
      'Hands-on ML with Python covering regression, classification, clustering, and model evaluation using scikit-learn and IBM Watson Studio.',
  },
  {
    course: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    issued: 'Oct 2023',
    description:
      'Fundamentals of HTML and CSS including flexbox, grid, and media queries to build accessible, mobile-first web pages.',
  },
];

const Certificates = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (i) => {
    setFlippedIndex(flippedIndex === i ? null : i);
  };

  return (
    <section className="section relative overflow-hidden" id="certificates">
      <FallingBeams />
      <div className="container relative z-10">
        <h2 className="section-title">Certificates</h2>
        <div className="cert-grid">
          {certs.map((cert, i) => (
            <div
              className={`cert-card${flippedIndex === i ? ' flipped' : ''}`}
              key={i}
              onClick={() => handleFlip(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleFlip(i)}
              aria-label={`${cert.course} certificate by ${cert.issuer}`}
            >
              <div className="cert-inner">
                {/* FRONT */}
                <div className="cert-face cert-front">
                  <span className="cert-badge">
                    <Award size={14} />
                  </span>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <h3 className="cert-course">{cert.course}</h3>
                  <span className="cert-hint">Tap to flip ↻</span>
                </div>

                {/* BACK */}
                <div className="cert-face cert-back">
                  <span className="cert-date">{cert.issued}</span>
                  <h3 className="cert-course cert-back-title">{cert.course}</h3>
                  <p className="cert-desc">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
