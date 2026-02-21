import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import GlobalStyles from './styles/GlobalStyles';

// Pages
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import PitchDeckPage from './pages/PitchDeckPage';

// Client Pitch Pages
import DentalPitch from './pages/pitches/DentalPitch';
import MortgagePitch from './pages/pitches/MortgagePitch';
import TravelPitch from './pages/pitches/TravelPitch';
import EquinePitch from './pages/pitches/EquinePitch';
import GroomingPitch from './pages/pitches/GroomingPitch';
import SalonPitch from './pages/pitches/SalonPitch';
import TransportPitch from './pages/pitches/TransportPitch';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isClientPitchPage = location.pathname.startsWith('/for/');

  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      {!isClientPitchPage && <Navigation />}
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pitch" element={<PitchDeckPage />} />
          
          {/* Private Client Pitch Pages */}
          <Route path="/for/dental" element={<DentalPitch />} />
          <Route path="/for/mortgage" element={<MortgagePitch />} />
          <Route path="/for/travel" element={<TravelPitch />} />
          <Route path="/for/equine" element={<EquinePitch />} />
          <Route path="/for/grooming" element={<GroomingPitch />} />
          <Route path="/for/salon" element={<SalonPitch />} />
          <Route path="/for/transport" element={<TransportPitch />} />
        </Routes>
      </main>
      {!isClientPitchPage && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
