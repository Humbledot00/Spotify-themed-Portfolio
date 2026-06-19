import './styles/globals.css';
import './styles/animations.css';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Skills       from './components/Skills';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Achievements from './components/Achievements';
import Education    from './components/Education';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
