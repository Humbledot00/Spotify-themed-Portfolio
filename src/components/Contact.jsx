import { useEffect, useRef } from 'react';
import './Contact.css';

const contactItems = [
  {
    icon: '📧',
    label: 'Email',
    value: 'shreyasrao012@gmail.com',
    href: 'mailto:shreyasrao012@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/helloshreyass',
    href: 'https://linkedin.com/in/helloshreyass',
    external: true,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Humbledot00',
    href: 'https://github.com/Humbledot00',
    external: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bengaluru, India',
    href: null,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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
    <section id="contact" aria-label="Contact Information" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Contact</p>
        <h2 className="section-heading reveal">Get In Touch</h2>

        <div className="contact-wrapper">
          {/* Availability badge */}
          <div className="contact-availability reveal">
            <span className="badge-accent">Open to Opportunities</span>
          </div>

          <p className="contact-subtext reveal">
            Open to backend engineering opportunities and interesting collaborations.
          </p>

          {/* Contact rows */}
          <div className="contact-list">
            {contactItems.map((item, i) => (
              <div key={i} className="contact-row reveal">
                <span className="contact-icon" aria-hidden="true">{item.icon}</span>
                <span className="contact-label">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="contact-value"
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-value">{item.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="contact-ctas reveal">
            <a href="mailto:shreyasrao012@gmail.com" className="btn-primary">
              Send Email
            </a>
            <a
              href="/resume.pdf"
              download="Shreyas_MRao_Resume.pdf"
              className="btn-secondary"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/Humbledot00"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outlined"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
