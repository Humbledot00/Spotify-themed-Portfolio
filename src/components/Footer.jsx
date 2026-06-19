import './Footer.css';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

function handleNav(e, href) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer role="contentinfo" className="footer">
      <div className="footer-separator" aria-hidden="true" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-name">Shreyas M Rao</span>
          <span className="footer-role">Backend Software Engineer</span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="footer-nav-link"
              onClick={e => handleNav(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a
            href="https://linkedin.com/in/helloshreyass"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Humbledot00"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="mailto:shreyasrao012@gmail.com"
            className="footer-social-link"
            aria-label="Email"
          >
            Email
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Shreyas M Rao. Built with React.js
        </p>
      </div>
    </footer>
  );
}
