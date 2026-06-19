import { useEffect, useRef } from 'react';
import './Education.css';

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" aria-label="Education" ref={sectionRef}>
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-heading reveal">Academic Background</h2>

        <article className="education-card reveal">
          <div className="education-body">
            <div className="education-main">
              <h3 className="education-institution">
                Vivekananda College Of Engineering And Technology
              </h3>
              <p className="education-location">Puttur, Karnataka</p>
              <p className="education-degree">
                Bachelor of Engineering — Computer Science
              </p>
              <p className="education-duration">December 2021 – June 2025</p>

              <div className="education-badges">
                <span className="badge-accent">Computer Science</span>
                <span className="badge-dark">2021 – 2025</span>
                <span className="badge-accent">VCET Puttur</span>
              </div>
            </div>

            <div className="education-cgpa">
              <span className="cgpa-number">9.21</span>
              <span className="cgpa-denom">/10</span>
              <span className="cgpa-label">CGPA</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
