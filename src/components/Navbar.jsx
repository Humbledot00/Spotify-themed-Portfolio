import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [activeId, setActiveId]   = useState('hero');
  const [menuOpen, setMenuOpen]   = useState(false);
  const observerRef               = useRef(null);

  /* Sticky scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section highlight via IntersectionObserver */
  useEffect(() => {
    const ids = ['hero', ...navLinks.map(l => l.href.slice(1))];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(s => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  /* Close menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-brand" onClick={e => handleNavClick(e, '#hero')}>
          Shreyas M Rao
        </a>

        {/* Desktop nav */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${activeId === link.href.slice(1) ? ' active' : ''}`}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile overlay nav */}
      {menuOpen && (
        <div className="mobile-nav" role="dialog" aria-label="Mobile navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link${activeId === link.href.slice(1) ? ' active' : ''}`}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
