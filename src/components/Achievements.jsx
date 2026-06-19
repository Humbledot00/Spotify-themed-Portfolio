import { useEffect, useRef } from 'react';
import './Achievements.css';

const achievements = [
  {
    icon: '🥇',
    title: '1st Place — Primed Hackathon',
    venue: 'Mangalore, Karnataka | June 2024',
    description: 'Outperformed 200+ students in a placement-themed competitive hackathon.',
    badge: { label: '1st Place', type: 'accent' },
  },
  {
    icon: '🥈',
    title: '2nd Prize — IEEE I2CONECCT 2025',
    venue: 'Mangalore Institute of Technology & Engineering',
    description: 'Project Competition for BodhiMent: AI-Powered Mnemonics & Smart Learning Hub.',
    badge: { label: '2nd Prize', type: 'outlined' },
  },
  {
    icon: '🥇',
    title: '1st Place — Intra-College Hackathon',
    venue: 'Puttur, Karnataka | December 2023',
    description: 'Developed the Sankalp AI Chatbot — ranked 1st among 20+ competing teams.',
    badge: { label: '1st Place', type: 'accent' },
  },
  {
    icon: '🏛️',
    title: 'Branch Figure — CSE-CoRE',
    venue: 'Puttur, Karnataka | December 2022 – Present',
    description: 'Led 17+ club activities and 5+ projects involving 250+ participants.',
    badge: { label: 'Leadership', type: 'dark' },
  },
  {
    icon: '🗄️',
    title: 'IEEE VCET Student Branch — Database Development',
    venue: 'Puttur, Karnataka | January 2023 – Present',
    description: 'Developed and maintained a secure database system supporting 217+ student members.',
    badge: { label: 'Technical', type: 'dark' },
  },
];

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.achievement-card').forEach((el, i) => {
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
    <section id="achievements" aria-label="Achievements and Awards" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Achievements</p>
        <h2 className="section-heading">Recognition &amp; Awards</h2>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <article key={i} className="achievement-card card">
              <div className="achievement-top">
                <span className="achievement-icon" aria-hidden="true">{item.icon}</span>
                <span className={`badge-${item.badge.type}`}>{item.badge.label}</span>
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-venue">{item.venue}</p>
              <p className="achievement-desc">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
