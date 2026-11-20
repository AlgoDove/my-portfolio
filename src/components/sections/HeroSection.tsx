import React, { useState } from 'react';
import { ArrowDown, Download, Mail, Check, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { SignalOrbitalCanvas } from '../common/SignalOrbitalCanvas';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  /**
   * Editorial Portrait Card Component
   * Renders the integrated portrait with ambient lighting, subtle gradient edge-blend,
   * balanced bottom metadata, and graceful fallback.
   */
  const renderPortrait = (isMobile: boolean = false) => (
    <div className={`relative w-full ${isMobile ? 'max-w-[290px] sm:max-w-[320px]' : 'max-w-[320px] xl:max-w-[350px]'} mx-auto select-none`}>
      {/* Ambient background glow consistent with purple/cyan palette */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-accent-violet/20 via-accent-cyan/15 to-transparent rounded-2xl blur-2xl pointer-events-none opacity-75" />

      {/* Portrait Frame with subtle border and gradient bottom mask */}
      <div className="relative aspect-[4/5] w-full rounded border border-surface-border/80 bg-obsidian overflow-hidden shadow-2xl">
        {!portraitFailed ? (
          <div className="relative w-full h-full">
            <img
              src="/images/profile/portrait.jpg"
              alt="Gokulaselvan I Portrait"
              width={400}
              height={500}
              onError={() => setPortraitFailed(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
              loading="eager"
              fetchPriority="high"
            />
            {/* Soft gradient edge blend at the bottom to integrate seamlessly into dark obsidian canvas */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          /* Editorial architectural fallback when image asset is pending */
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-tech-blueprint text-left relative overflow-hidden">
            <div className="flex justify-between items-center text-[12px] font-mono text-muted-dim border-b border-surface-border/40 pb-2">
              <span className="tracking-wider uppercase">PORTRAIT SPEC</span>
              <span className="text-accent-cyan">4:5 RATIO</span>
            </div>

            <div className="my-auto py-4 space-y-2 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-surface/70 border border-accent-violet/40 flex items-center justify-center text-accent-violet font-heading font-extrabold text-2xl shadow-[0_0_20px_rgba(169,135,245,0.25)]">
                G.
              </div>
              <span className="font-mono text-sm text-accent-cyan uppercase tracking-widest block font-semibold pt-1">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[12.5px] text-muted-text block">
                Software Engineer
              </span>
            </div>

            <div className="text-[12px] font-mono text-muted-dim pt-2 border-t border-surface-border/40 flex justify-between items-center">
              <span>public/images/profile/portrait.jpg</span>
            </div>
          </div>
        )}
      </div>

      {/* Grounded Technical Caption: Location & Status with generous clearance and 13–14px readability */}
      <div className="w-full px-4 py-3 mt-3 rounded bg-surface/40 border border-surface-border/70 flex flex-wrap items-center justify-between gap-3 text-[13px] sm:text-[13.5px] font-mono text-muted-text shadow-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-accent-rose shrink-0" />
          <span className="tracking-wide">COLOMBO, SRI LANKA</span>
        </div>
        <div className="flex items-center gap-2 text-accent-cyan font-semibold">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse animate-led-flicker shrink-0" />
          <span className="tracking-wide">STATUS: JSC INTERN</span>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="hero" 
      className="relative pt-6 sm:pt-10 pb-12 lg:pt-20 lg:pb-20 lg:min-h-[85vh] lg:flex lg:items-center lg:justify-center overflow-x-clip border-b border-surface-border/40"
    >
      {/* Background atmospheric lighting accents */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content Container — Disciplined max-w-7xl for optimal 3-column balance */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Desktop 3-part layout: [Left Orbital] --- [Center Hero Content] --- [Right Portrait] */}
        <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr_320px] xl:grid-cols-[210px_1fr_350px] gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Compact Orbital Visual (Desktop only: 12%–16% footprint, max ~190–210px) */}
          <div className="hidden lg:flex flex-col items-center justify-center relative shrink-0">
            <div className="relative w-[180px] h-[180px] xl:w-[200px] xl:h-[200px] rounded-full border border-accent-violet/25 bg-midnight/40 backdrop-blur-sm p-1.5 flex items-center justify-center shadow-[0_0_24px_rgba(169,135,245,0.08)]">
              <SignalOrbitalCanvas className="w-full h-full" />
              {/* Precision corner alignment indicators */}
              <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-accent-cyan/50" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-accent-violet/50" />
              <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-accent-cyan/50" />
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-accent-violet/50" />
            </div>
            <div className="mt-2.5 font-mono text-[11px] text-muted-dim tracking-widest uppercase flex items-center gap-1.5 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
              <span>SYS.ORBITAL</span>
            </div>
          </div>

          {/* Center Column: Primary Hero Typography and Actions */}
          <div className="space-y-4 sm:space-y-4.5 lg:space-y-5 min-w-0">
            
            {/* System Status Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface/50 border border-accent-violet/30 text-[12px] font-mono text-muted-text shadow-[0_0_12px_rgba(169,135,245,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse animate-led-flicker shadow-[0_0_8px_#A987F5]" />
              <span className="text-primary-text font-semibold tracking-wider">ENGINEERING</span>
              <span className="text-muted-dim">•</span>
              <span>UNDERGRADUATE SOFTWARE ENGINEER</span>
            </div>

            {/* Main Typographic Hierarchy */}
            <div className="space-y-1 sm:space-y-1.5">
              <span className="font-mono text-xs sm:text-sm tracking-widest text-accent-cyan uppercase block font-semibold">
                Gokulaselvan I
              </span>
              <h1 className="font-heading text-[28px] xs:text-[32px] sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold tracking-tight text-primary-text leading-[1.12]">
                Building software.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-rose to-accent-cyan">
                  Thinking in systems.
                </span>
              </h1>
            </div>

            {/* Editorial Story Intro (15–17px desktop readable body) */}
            <p className="text-[15.5px] sm:text-[16.5px] text-[#D8D0E5] max-w-xl leading-[1.68] font-sans">
              I architect and implement software solutions across backend and full-stack development, with an interest in the engineering decisions that make systems dependable. Focusing on API boundaries, transactional integrity, agentic workflows, and cloud-native infrastructure.
            </p>

            {/* Focus Pillars (13–14px readable pills) */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-0.5 font-mono text-[13px] sm:text-[13.5px]">
              <span className="px-3 py-1.5 border border-accent-violet/30 bg-surface/40 text-primary-text font-medium rounded-sm shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                <span>ASP.NET Core 8 & Spring Boot 3</span>
              </span>
              <span className="px-3 py-1.5 border border-accent-cyan/30 bg-surface/40 text-primary-text font-medium rounded-sm shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                <span>PostgreSQL & Data Integrity</span>
              </span>
              <span className="px-3 py-1.5 border border-accent-rose/30 bg-surface/40 text-primary-text font-medium rounded-sm shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-rose" />
                <span>Agentic AI & Deterministic Guardrails</span>
              </span>
            </div>

            {/* Primary Action Buttons - 13–14px typography, minimum 44px touch targets */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-accent-violet hover:bg-accent-violet/90 hover:shadow-[0_0_20px_rgba(169,135,245,0.4)] text-obsidian font-mono text-[13px] sm:text-[13.5px] font-bold uppercase tracking-wider transition-all shadow-md rounded-sm"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 border border-surface-border bg-surface/50 hover:bg-surface text-primary-text font-mono text-[13px] sm:text-[13.5px] tracking-wider transition-colors rounded-sm"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>Download Résumé (PDF)</span>
              </button>

              <button
                onClick={copyEmail}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 border border-surface-border/80 hover:bg-surface/40 text-muted-text hover:text-primary-text font-mono text-[13px] sm:text-[13.5px] transition-colors rounded-sm"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-accent-cyan" /> : <Mail className="w-4 h-4 text-accent-rose" />}
                <span>{copiedEmail ? 'Email Copied' : 'algodove77@gmail.com'}</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="pt-3.5 flex flex-wrap items-center gap-5 sm:gap-6 border-t border-surface-border/40 text-[12.5px] sm:text-[13px] font-mono text-muted-dim">
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

            {/* Mobile & Tablet Portrait Placement: Positioned directly below CTAs & links */}
            <div className="lg:hidden mt-8 max-w-sm mx-auto">
              {renderPortrait(true)}
            </div>

          </div>

          {/* Right Column: Desktop Integrated Editorial Portrait Anchor */}
          <div className="hidden lg:flex relative justify-center items-center shrink-0">
            {renderPortrait(false)}
          </div>

        </div>
      </div>
    </section>
  );
};
