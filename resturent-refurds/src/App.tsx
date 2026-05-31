import React from 'react';
import { Hero } from './components/hero';
import { SignatureDishes } from './components/SignatureDishes';
import { AboutPreview } from './components/AboutPreview';
import { Menu } from './components/Menu';
import { Reservation } from './components/Reservation';
import { Contact } from './components/Contact';
import { AdminDashboard } from './components/AdminDashboard';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary antialiased selection:bg-goldAccent selection:text-background">
      {/* Visual Intersect Anchors */}
      <Hero />
      <SignatureDishes />
      <AboutPreview />
      
      {/* Conversions / Operational Flows */}
      <Menu />
      <Reservation />
      <Contact />
      
      {/* Operations Management Ledger Portal */}
      <AdminDashboard />

      {/* Floating Comms Widget Trigger */}
      <WhatsAppButton />
      
      {/* Bottom Structural Grid Baseline */}
      <footer className="border-t border-customBorder bg-black py-12 text-center text-textSecondary text-[10px] tracking-widest">
        L’ÉTOILE • ATELIER ESTABLISHED 2026 • ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}

export default App;