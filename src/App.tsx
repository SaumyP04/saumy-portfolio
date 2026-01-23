import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
