import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const glow = document.getElementById('mouse-glow');
    if (!glow) return;
    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.style.opacity = '1';
    };
    const leave = () => { glow.style.opacity = '0'; };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div className="bg-bg text-on-surface overflow-x-hidden">
      {/* Mouse follow glow */}
      <div
        id="mouse-glow"
        className="fixed pointer-events-none z-[1] rounded-full opacity-0 transition-opacity duration-300"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(183,109,255,0.07) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
