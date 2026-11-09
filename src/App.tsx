import { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SelectedWorkSection } from './components/sections/SelectedWorkSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { TechnicalProfileSection } from './components/sections/TechnicalProfileSection';
import { CloudInfrastructureSection } from './components/sections/CloudInfrastructureSection';
import { EducationSection } from './components/sections/EducationSection';
import { BeyondEngineeringSection } from './components/sections/BeyondEngineeringSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/common/Footer';
import { CvModal } from './components/common/CvModal';
import { ProjectModal } from './components/common/ProjectModal';
import { CursorGlow } from './components/common/CursorGlow';
import type { Project } from './types/portfolio';

export function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    /*
     * site-grid-bg: single continuous background grid that spans the full page.
     * Individual sections use semi-transparent bg overlays so the grid bleeds through.
     * CursorGlow sits at z-0 behind all content via fixed positioning.
     */
    <div className="site-grid-bg min-h-screen text-primary-text selection:bg-accent-violet/30 selection:text-white font-sans antialiased overflow-x-hidden relative">

      {/* Background cursor spotlight — stays behind everything */}
      <CursorGlow />

      {/* Editorial Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Single-Page Editorial Content */}
      <main id="main-content" className="relative z-10">
        <HeroSection onOpenCvModal={() => setCvModalOpen(true)} />
        <AboutSection />
        <SelectedWorkSection onSelectProject={(project) => setActiveProject(project)} />
        <ExperienceSection />
        <TechnicalProfileSection />
        <CloudInfrastructureSection />
        <EducationSection />
        <BeyondEngineeringSection />
        <ContactSection />
      </main>

      {/* Editorial Technical Footer */}
      <Footer onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Interactive Modals */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

    </div>
  );
}

export default App;
