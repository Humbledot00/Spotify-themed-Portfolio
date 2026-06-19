import { useEffect, useRef } from 'react';
import './About.css';

const stats = [
  { icon: '📍', label: 'Location',  value: 'Bengaluru, India' },
  { icon: '🎓', label: 'Education', value: 'B.E. Computer Science — CGPA 9.21' },
  { icon: '💼', label: 'Role',      value: 'Associate Software Engineer @ Desk Nine' },
  { icon: '📧', label: 'Email',     value: 'shreyasrao012@gmail.com', href: 'mailto:shreyasrao012@gmail.com' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" aria-label="About Shreyas M Rao" ref={sectionRef}>
      <div className="container">
        <p className="section-label">About</p>
        <div className="about-grid">
          {/* Left: text */}
          <div className="about-text">
            <h2 className="section-heading reveal">Who I Am</h2>

            <p className="about-para reveal">
              I'm a backend-focused software engineer with hands-on experience building
              and scaling banking-grade applications using Node.js and Java Spring Boot.
            </p>
            <p className="about-para reveal">
              I specialize in microservices architecture, real-time communication systems,
              secure authentication platforms, and high-concurrency backend engineering.
              My work spans production-critical systems in the banking and fintech domain,
              where reliability, performance, and security are non-negotiable.
            </p>
            <p className="about-para reveal">
              I enjoy debugging complex distributed systems, optimizing database performance,
              and shipping production-ready containerized services. I'm also deeply
              interested in AI-assisted development workflows and developer tooling.
            </p>
            <p className="about-para reveal">
              Currently at <strong>Desk Nine Pvt Ltd, Bengaluru</strong>, building backend infrastructure
              for banking and KYC platforms.
            </p>
          </div>

          {/* Right: stat cards */}
          <div className="about-stats">
            {stats.map((s, i) => (
              <div key={i} className="stat-card reveal">
                <span className="stat-icon" aria-hidden="true">{s.icon}</span>
                <div className="stat-body">
                  <span className="stat-label">{s.label}</span>
                  {s.href
                    ? <a href={s.href} className="stat-value stat-link">{s.value}</a>
                    : <span className="stat-value">{s.value}</span>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
