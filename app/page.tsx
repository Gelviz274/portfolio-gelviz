import React from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/pages/HeroSection';
import Projects from '@/components/pages/ProjectsSection';
import MySkilsSection from '@/components/pages/MySkillsSection';
import ContactSection from '@/components/pages/ContactSection';

function Homepage() {
  return (
    <main className="relative">
        <Header />
      {/* Hero Section */}
        <HeroSection />
      {/* Skills Section */}
        <MySkilsSection />
      {/* Projects Section */}
        <Projects />
        <ContactSection />
    </main>
  );
}export default Homepage;

