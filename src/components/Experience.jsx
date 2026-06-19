import { useState, useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Desk Nine Pvt Ltd',
    location: 'Bengaluru, India',
    role: 'Associate Software Engineer',
    duration: 'July 2025 – Present',
    badge: { label: 'Full-Time', type: 'accent' },
    tabs: [
      {
        id: 'backend',
        label: 'Backend & Microservices',
        bullets: [
          { title: 'Microservices Architecture', detail: 'Worked on transitioning server-side systems to a containerized microservices architecture using Docker, improving scalability and deployment efficiency.' },
          { title: 'Real-Time Communication', detail: 'Built and maintained real-time features using WebSockets and event-driven processing with Redis and message queues.' },
          { title: 'Database & Storage', detail: 'Worked with relational and NoSQL databases alongside cloud object storage solutions to optimize data access patterns and system performance.' },
          { title: 'API Development', detail: 'Designed and developed RESTful APIs for various platform features, integrating third-party services and communication channels.' },
        ],
      },
      {
        id: 'reliability',
        label: 'Production & Reliability',
        bullets: [
          { title: 'Performance Optimization', detail: 'Diagnosed and resolved production issues in high-concurrency environments, including connection management and background job processing.' },
          { title: 'Security Hardening', detail: 'Implemented encryption mechanisms for sensitive data and enforced API rate limiting and security best practices across services.' },
          { title: 'System Stability', detail: 'Contributed to improving system stability and reducing recurring incidents through targeted engineering improvements and better resource management.' },
        ],
      },
      {
        id: 'auth',
        label: 'Authentication & Identity',
        bullets: [
          { title: 'Auth Server Development', detail: 'Designed and built a standalone authentication server using Java Spring Boot for centralized identity and access management across microservices.' },
          { title: 'SSO & Identity Integration', detail: 'Integrated multiple identity providers to support Social and enterprise Single Sign-On workflows.' },
          { title: 'Token Security', detail: 'Built APIs for token generation and secure inter-service communication with encryption and payload authorization.' },
          { title: 'Deployment', detail: 'Containerized the authentication service with unit and integration test coverage.' },
        ],
      },
    ],
  },
  {
    company: 'Desk Nine Pvt Ltd',
    location: 'Bengaluru, India',
    role: 'Software Engineer Intern',
    duration: 'February 2025 – June 2025',
    badge: { label: 'Internship', type: 'outlined' },
    bullets: [
      { detail: 'Gained practical expertise in Node.js, Oracle DB, Redis, AWS S3, and Docker through hands-on training.' },
      { detail: 'Contributed to 3+ internal modules and proof-of-concepts.' },
      { detail: 'Worked on high-concurrency, banking-grade system design under senior mentorship.' },
    ],
  },
  {
    company: 'Center for System Design, NITK Surathkal',
    subLabel: 'National Institute of Technology Karnataka, India',
    mentor: 'Prof. K. V. Gangadharan',
    role: 'Virtual Reality Intern',
    duration: 'October 2023 – November 2023',
    badge: { label: 'Internship', type: 'outlined' },
    bullets: [
      { title: 'Virtual 3D Object Manipulation System', detail: 'Designed and developed a system for virtual 3D object manipulation using rotational data from the MPU6050 sensor, enabling real-time interaction between physical motion and virtual environments.' },
      { title: 'Hardware–Software Integration', detail: 'Integrated MPU6050 sensor and ESP8266 module with Unity, demonstrating seamless embedded systems ↔ virtual application communication.' },
      { title: 'Immersive Simulation', detail: 'Implemented real-time data processing and visualization within Unity for physical-input-driven 3D object manipulation.' },
    ],
  },
];

function ExperienceEntry({ exp, isLast }) {
  const [activeTab, setActiveTab] = useState(exp.tabs?.[0]?.id ?? null);

  const bullets = exp.tabs
    ? exp.tabs.find(t => t.id === activeTab)?.bullets ?? []
    : exp.bullets ?? [];

  return (
    <article className={`exp-entry reveal-left${isLast ? '' : ''}`}>
      <div className="exp-timeline-dot" aria-hidden="true" />

      <div className="exp-card card">
        <div className="exp-header">
          <div className="exp-meta">
            <h3 className="exp-company">{exp.company}</h3>
            {exp.subLabel && <span className="exp-sublabel">{exp.subLabel}</span>}
            {exp.mentor && <span className="exp-sublabel">Mentor: {exp.mentor}</span>}
            <span className="exp-role">{exp.role}</span>
            <span className="exp-duration">{exp.location} · {exp.duration}</span>
          </div>
          <span className={`badge-${exp.badge.type}`}>{exp.badge.label}</span>
        </div>

        {/* Tabs (only for first experience) */}
        {exp.tabs && (
          <div className="exp-tabs" role="tablist" aria-label="Experience sub-sections">
            {exp.tabs.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`exp-tab${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Bullet list */}
        <ul className="exp-bullets">
          {bullets.map((b, i) => (
            <li key={i} className="exp-bullet">
              <span className="exp-bullet-dot" aria-hidden="true">▸</span>
              <span>
                {b.title && <strong className="exp-bullet-title">{b.title}: </strong>}
                {b.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-left').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
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
    <section id="experience" aria-label="Work Experience" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-heading">Work Experience</h2>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <ExperienceEntry key={i} exp={exp} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
