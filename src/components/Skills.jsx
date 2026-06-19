import { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'Java', 'SQL', 'C/C++', 'HTML', 'CSS'],
  },
  {
    title: 'Backend Frameworks',
    skills: ['Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Angular'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (S3)', 'Docker', 'Nginx'],
  },
  {
    title: 'Real-Time Systems',
    skills: ['WebSockets', 'Socket.IO', 'WebRTC'],
  },
  {
    title: 'AI & Developer Tools',
    skills: ['Claude Code', 'GitHub Copilot', 'OpenAI Codex', 'Agentic AI'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Postman', 'PM2', 'BullMQ', 'OAuth2', 'JWT'],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="skills" aria-label="Technical Skills" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-heading">Technical Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <article key={i} className="skill-card reveal">
              <h3 className="skill-card-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <span key={j} className="tech-tag">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
