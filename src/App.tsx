import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ParticleBackground } from './components/ParticleBackground/ParticleBackground';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  React.useEffect(() => {
    console.log('Welcome to EddieMoger.com - Built with React 18, TypeScript & Framer Motion 🚀');
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <ParticleBackground />
      <Navigation scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
