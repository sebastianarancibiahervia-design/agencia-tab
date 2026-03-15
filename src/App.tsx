import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { Portfolio } from './pages/Portfolio';
import { ProjectDetail } from './pages/ProjectDetail';
import { Services } from './pages/Services';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Global event listener to open contact modal from any component
  useEffect(() => {
    const handleOpenContact = () => setIsContactOpen(true);
    window.addEventListener('open-contact', handleOpenContact);
    return () => window.removeEventListener('open-contact', handleOpenContact);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen selection:bg-neon/30 selection:text-ghost">
        {/* Global CSS noise filter */}
        <div className="noise-overlay" />
        
        <Header onOpenContact={() => setIsContactOpen(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/servicios/:serviceId" element={<ServicePage />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/portafolio/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
        
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

