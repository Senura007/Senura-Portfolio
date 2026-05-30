import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pro' | 'enterprise'>('all');
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for sticky navbar header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-bg text-white font-sans selection:bg-cyber-blue/30 selection:text-white">
      {/* Sticky Header Nav */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Skills activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Experience activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Projects />
        <Credentials />
        <Contact />
      </main>

      {/* Footer & Certifications */}
      <Footer />
    </div>
  );
}

export default App;
