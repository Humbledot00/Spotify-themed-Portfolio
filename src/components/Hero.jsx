import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const typedRef = useRef(null);

  /* Typewriter effect */
  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;

    const text = 'Backend-Focused Engineer specializing in scalable microservices, real-time systems, secure authentication, and banking-grade applications.';
    let i = 0;
    el.textContent = '';

    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 28);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Radial glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content container">
        {/* Badge */}
        <div className="hero-badge animate-fade-in-up delay-100">
          Backend Software Engineer
        </div>

        {/* H1 */}
        <h1 className="hero-title animate-fade-in-up delay-200">
          <span className="hero-name">Shreyas M Rao</span> | Backend Engineer
        </h1>

        {/* H2 typewriter */}
        <h2 className="hero-subtitle animate-fade-in-up delay-300">
          <span ref={typedRef} className="typewriter" />
          <span className="cursor" aria-hidden="true">|</span>
        </h2>

        <p className="hero-description animate-fade-in-up delay-350">
          I build reliable backend systems for fintech, real-time platforms, and secure digital products using Node.js, Java Spring Boot, microservices, and modern authentication.
          My work includes high-volume APIs, real-time communication services, queue-based workflows, and banking-grade platforms designed for performance, resilience, and clean maintainability.
        </p>
        <p className="hero-description animate-fade-in-up delay-360">
          Shreyas M Rao is a Backend Engineer who enjoys turning complex requirements into dependable services that scale well and support business growth. I focus on API design, database performance, authentication, and service reliability for teams building modern software products.
        </p>
        <p className="hero-description animate-fade-in-up delay-370">
          Explore my <a href="#projects">projects</a>, <a href="#experience">experience</a>, <a href="#skills">technical skills</a>, and <a href="#contact">contact details</a> to learn more about my engineering work.
        </p>

        {/* CTA Buttons */}
        <div className="hero-buttons animate-fade-in-up delay-400">
          <button
            className="btn-primary"
            onClick={() => scrollTo('#projects')}
          >
            View Projects
          </button>
          <a
            className="btn-secondary"
            href="/resume.pdf"
            download="Shreyas_MRao_Resume.pdf"
          >
            Download Resume
          </a>
          <button
            className="btn-outlined"
            onClick={() => scrollTo('#contact')}
          >
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div className="hero-socials animate-fade-in-up delay-500">
          <a
            href="https://linkedin.com/in/helloshreyass"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="LinkedIn profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/Humbledot00"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label="GitHub profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            GitHub
          </a>
          <a
            href="mailto:shreyasrao012@gmail.com"
            className="social-btn"
            aria-label="Send email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator animate-fade-in delay-600" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
