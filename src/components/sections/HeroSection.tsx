import React, { useState } from 'react';
import { ArrowDown, Download, Mail, Check, MapPin, Radio } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SignalOrbitalCanvas } from '../common/SignalOrbitalCanvas';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center bg-tech-grid overflow-hidden border-b border-surface-border/40"
    >
      {/* Background atmospheric lighting accents */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Identity & Editorial Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* System Telemetry Label */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface/40 border border-surface-border text-[11px] font-mono text-muted-text">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
              <span className="text-primary-text font-semibold">SIGNAL // 01</span>
              <span className="text-muted-dim">•</span>
              <span>UNDERGRADUATE SOFTWARE ENGINEER</span>
            </div>

            {/* Main Typographic Hierarchy */}
            <div className="space-y-2">
              <span className="font-mono text-xs tracking-widest text-accent-cyan uppercase block">
                Gokulaselvan I
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-text leading-[1.12]">
                Building software.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-rose to-accent-cyan">
                  Thinking in systems.
                </span>
              </h1>
            </div>

            {/* Editorial Story Intro (Comfortable 15px reading size, max-w-xl) */}
            <p className="text-[14.5px] sm:text-[15.5px] text-muted-text max-w-xl leading-[1.75] font-sans">
              I architect and implement software solutions across backend and full-stack development, with an interest in the engineering decisions that make systems dependable. Focusing on API boundaries, transactional integrity, agentic workflows, and cloud-native infrastructure.
            </p>

            {/* Focus Pillars (Restrained Technical Badges) */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
              <span className="px-2.5 py-1 border border-surface-border/80 bg-surface/30 text-primary-text">
                ASP.NET Core 8 & Spring Boot 3
              </span>
              <span className="px-2.5 py-1 border border-surface-border/80 bg-surface/30 text-primary-text">
                PostgreSQL & Data Integrity
              </span>
              <span className="px-2.5 py-1 border border-surface-border/80 bg-surface/30 text-primary-text">
                Agentic AI & Deterministic Guardrails
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-violet hover:bg-accent-violet/90 text-obsidian font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-surface-border bg-surface/50 hover:bg-surface text-primary-text font-mono text-xs tracking-wider transition-colors"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>Download CV</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 border border-surface-border/80 hover:bg-surface/40 text-muted-text hover:text-primary-text font-mono text-xs transition-colors"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-accent-cyan" /> : <Mail className="w-4 h-4 text-accent-rose" />}
                <span>{copiedEmail ? 'Email Copied' : 'algodove77@gmail.com'}</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-surface-border/40 text-xs font-mono text-muted-dim">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-text hover:text-accent-cyan transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/AlgoDove</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-text hover:text-accent-violet transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <div className="inline-flex items-center gap-1.5 text-muted-dim">
                <MapPin className="w-3.5 h-3.5 text-accent-rose" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>

          </div>

          {/* Right Column: Signal & Orbital Telemetry Stage (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square border border-surface-border/80 bg-midnight/60 p-4 shadow-2xl backdrop-blur-sm">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 border-b border-surface-border/50 text-[10.5px] font-mono text-muted-dim">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                  <span className="text-primary-text font-semibold uppercase">ORBITAL SIGNAL MOTIF</span>
                </div>
                <div className="flex items-center gap-1.5 text-accent-violet">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>AZIMUTH LIVE</span>
                </div>
              </div>

              {/* The Signature Orbital Canvas */}
              <div className="relative w-full h-[250px] sm:h-[270px] my-2">
                <SignalOrbitalCanvas className="w-full h-full" />
              </div>

              {/* Telemetry Coordinate Readout Footnote */}
              <div className="pt-3 border-t border-surface-border/50 grid grid-cols-2 gap-2 text-[9.5px] font-mono text-muted-dim">
                <div>
                  <span className="text-accent-violet block font-semibold">COORDINATES: 06°55'N 79°51'E</span>
                  <span>COLOMBO SYSTEM NODE</span>
                </div>
                <div className="text-right">
                  <span className="text-accent-cyan block font-semibold">STATUS: ACTIVE ENG</span>
                  <span>SRI LANKA JSC INTERN</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
