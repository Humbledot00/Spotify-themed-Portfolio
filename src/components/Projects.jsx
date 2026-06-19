import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'BodhiMent',
    subtitle: 'AI-Driven Mnemonic Generation System',
    date: 'August 2024',
    tech: ['Python', 'React.js', 'Node.js'],
    description: 'An AI-driven system that analyzed 500+ educational resources to automatically generate 500+ mnemonics for improved concept retention. Built a responsive web interface using React with a Node.js backend for seamless mnemonic retrieval and interaction.',
    highlights: ['500+ Educational Resources Processed', 'AI-Generated Mnemonics', 'React + Node.js Full Stack', 'Optimized Content Pipeline'],
    achievement: '2nd Prize — IEEE I2CONECCT 2025',
    github: 'https://github.com/Humbledot00',
  },
  {
    title: 'Facial Feature Image Sorter',
    subtitle: 'Automated Photo Classification System',
    date: 'August 2024',
    tech: ['React.js', 'Python'],
    description: 'Designed an image sorting system that categorized 1,000+ images into folders based on facial feature recognition. Identified and grouped photos of 50+ distinct individuals — achieving high accuracy across diverse image sets.',
    highlights: ['1,000+ Images Classified', '50+ Distinct Individuals', 'Automated Facial Recognition', 'High Classification Accuracy'],
    github: 'https://github.com/Humbledot00',
  },
  {
    title: 'Sankalp Chatbot',
    subtitle: 'AI-Powered NLP Conversational System',
    date: 'December 2023',
    tech: ['Node.js', 'Python', 'NLP'],
    description: 'Built an AI-powered chatbot leveraging NLP and a pretrained Python model for dynamic conversational responses. Integrated Node.js and Python backend servers for real-time input handling and context-aware output generation. Enabled tokenization and adaptive learning for improved personalization.',
    highlights: ['NLP-Powered Conversations', 'Node.js + Python Dual Backend', 'Real-Time Context-Aware Responses', 'Adaptive Learning'],
    achievement: '1st Place — Intra-College Hackathon 2023',
    github: 'https://github.com/Humbledot00',
  },
];

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.project-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" aria-label="Featured Projects" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-heading">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article key={i} className="project-card">
              {/* Top accent strip */}
              <div className="project-accent-strip" aria-hidden="true" />

              <div className="project-body">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <time className="project-date">{project.date}</time>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  {project.highlights.map((h, j) => (
                    <span key={j} className="tech-tag">{h}</span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-tag">{t}</span>
                  ))}
                </div>

                {project.achievement && (
                  <div className="project-achievement">
                    <span className="badge-accent">🏆 {project.achievement}</span>
                  </div>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outlined project-github-btn"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GitHubIcon /> View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
