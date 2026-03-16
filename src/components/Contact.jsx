import React from 'react';
import { MeshGradient } from "@paper-design/shaders-react";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <Github size={18} />, href: 'https://github.com/chris-h-edmond', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/chris-h-edmond', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:hello@chrisharris.dev', label: 'Email' },
];

const Contact = () => {
  return (
    <footer className="contact-footer" id="contact">
      {/* Shader background — same palette as Hero */}
      <div className="contact-bg">
        <MeshGradient
          className="contact-bg__shader"
          colors={["#111111", "#5c3317", "#1e2a38", "#2a1810"]}
          speed={0.6}
          wireframe={false}
          backgroundColor="#000000"
        />
        <div className="contact-bg__overlay" />
      </div>

      {/* Glass card — mirrors hero-section card */}
      <div className="container contact-inner">
        {/* Top row */}
        <div className="contact-top">
          {/* Left: headline + CTA */}
          <div className="contact-headline-col">
            <p className="contact-eyebrow">Let's work together</p>
            <h2 className="contact-headline">Got a project<br />in mind?</h2>
            <a href="mailto:hello@chrisharris.dev" className="contact-cta-btn">
              Send a message <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Right: nav columns */}
          <nav className="contact-nav" aria-label="Footer navigation">
            <div className="contact-nav-col">
              <span className="contact-nav-heading">Explore</span>
              <ul>
                {navLinks.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="contact-nav-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contact-nav-col">
              <span className="contact-nav-heading">Connect</span>
              <ul>
                {socialLinks.map(s => (
                  <li key={s.label}>
                    <a href={s.href} className="contact-nav-link" target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <div className="contact-divider" />


      </div>

      {/* Large watermark text — Crawford-style */}
      <div className="contact-watermark" aria-hidden="true">
        Chris&nbsp;H&nbsp;Edmond
      </div>
    </footer>
  );
};

export default Contact;
