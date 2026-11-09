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
import type { Project } from './types/portfolio';

export function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-obsidian text-primary-text selection:bg-accent-violet/30 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Editorial Navigation */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Single-Page Editorial Content */}
      <main id="main-content">
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
