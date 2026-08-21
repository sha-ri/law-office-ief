import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoverageServices } from './components/CoverageServices';
import { AttorneyProfile } from './components/AttorneyProfile';
import { Footer } from './components/Footer';
import { DisclaimerModal } from './components/DisclaimerModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);

  const handleAcceptDisclaimer = () => {
    setIsDisclaimerOpen(false);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Intersection Observer to highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'venues', 'profile'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfaf7] text-slate-800 selection:bg-[#c59b27]/20 selection:text-[#0f2238]">
      {/* Firm Policies & Disclaimers Modal */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        onAccept={handleAcceptDisclaimer}
      />

      {/* Main Header & Navigation */}
      <Header
        activeTab={activeSection}
        setActiveTab={handleNavigate}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
      />

      {/* Consolidated Single Page Application */}
      <main className="grow">
        <Hero onNavigate={handleNavigate} />
        <CoverageServices />
        <AttorneyProfile />
      </main>

      {/* Legal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
      />
    </div>
  );
}
