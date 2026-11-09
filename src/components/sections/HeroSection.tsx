import React, { useState } from 'react';
import { ArrowDown, Download, Mail, Check, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

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
   * Editorial Portrait Component
   * Renders the integrated portrait with ambient lighting, subtle gradient edge-blend,
   * or a graceful architectural fallback if the physical photo is missing.
   */
  const renderPortrait = (isMobile: boolean = false) => (
    <div className={`relative w-full ${isMobile ? 'max-w-[280px] sm:max-w-[320px]' : 'max-w-[380px] lg:max-w-[420px]'} mx-auto select-none`}>
      {/* Ambient background glow consistent with purple/cyan palette */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-accent-violet/20 via-accent-cyan/15 to-transparent rounded-2xl blur-2xl pointer-events-none opacity-75" />

      {/* Portrait Frame with subtle border and gradient bottom mask */}
      <div className="relative aspect-[4/5] w-full rounded border border-surface-border/60 bg-obsidian overflow-hidden shadow-2xl">
        {!portraitFailed ? (
          <div className="relative w-full h-full">
            <img
              src="/images/profile/portrait.jpg"
              alt="Gokulaselvan I Portrait"
              onError={() => setPortraitFailed(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
              loading="eager"
            />
            {/* Soft gradient edge blend at the bottom to integrate seamlessly into dark obsidian canvas */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          /* Editorial architectural fallback when image asset is pending */
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-tech-blueprint text-left relative overflow-hidden">
            <div className="flex justify-between items-center text-[10.5px] font-mono text-muted-dim border-b border-surface-border/40 pb-2">
              <span className="tracking-wider uppercase">PORTRAIT SPEC</span>
              <span className="text-accent-cyan">4:5 RATIO</span>
            </div>

            <div className="my-auto py-4 space-y-2 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-surface/70 border border-accent-violet/40 flex items-center justify-center text-accent-violet font-heading font-extrabold text-2xl shadow-[0_0_20px_rgba(169,135,245,0.25)]">
                G.
              </div>
              <span className="font-mono text-xs sm:text-sm text-accent-cyan uppercase tracking-widest block font-semibold pt-1">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[11px] text-muted-dim block">
                Software Engineer
              </span>
            </div>

            <div className="text-[10px] font-mono text-muted-dim pt-2 border-t border-surface-border/40 flex justify-between items-center">
              <span>public/images/profile/portrait.jpg</span>
            </div>
          </div>
        )}
      </div>

      {/* Grounded Technical Caption: Location & Status */}
      <div className="w-full pt-3 flex items-center justify-between text-[11px] font-mono text-muted-dim border-t border-surface-border/40 mt-1">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-accent-rose" />
          <span>COLOMBO, SRI LANKA</span>
        </div>
        <div className="flex items-center gap-1.5 text-accent-cyan font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
          <span>STATUS: JSC INTERN</span>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden border-b border-surface-border/40"
    >
      {/* Background atmospheric lighting accents */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[450px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Identity & Editorial Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* System Status Label */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface/50 border border-accent-violet/30 text-[11px] font-mono text-muted-text shadow-[0_0_12px_rgba(169,135,245,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse shadow-[0_0_8px_#A987F5]" />
              <span className="text-primary-text font-semibold tracking-wider">ENGINEERING</span>
              <span className="text-muted-dim">•</span>
              <span>UNDERGRADUATE SOFTWARE ENGINEER</span>
            </div>

            {/* Main Typographic Hierarchy */}
            <div className="space-y-2">
              <span className="font-mono text-xs sm:text-sm tracking-widest text-accent-cyan uppercase block font-semibold">
                Gokulaselvan I
              </span>
              <h1 className="font-heading text-[34px] sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-text leading-[1.12]">
                Building software.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-rose to-accent-cyan">
                  Thinking in systems.
                </span>
              </h1>
            </div>

            {/* Editorial Story Intro */}
            <p className="text-[16px] sm:text-[17px] text-[#CFC7DC] max-w-xl leading-[1.65] font-sans">
              I architect and implement software solutions across backend and full-stack development, with an interest in the engineering decisions that make systems dependable. Focusing on API boundaries, transactional integrity, agentic workflows, and cloud-native infrastructure.
            </p>

            {/* Focus Pillars */}
            <div className="flex flex-wrap gap-2.5 pt-1.5 font-mono text-xs sm:text-[13px]">
              <span className="px-3.5 py-1.5 border border-accent-violet/30 bg-surface/40 text-primary-text font-medium rounded-sm shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                <span>ASP.NET Core 8 & Spring Boot 3</span>
              </span>
              <span className="px-3.5 py-1.5 border border-accent-cyan/30 bg-surface/40 text-primary-text font-medium rounded-sm shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                <span>PostgreSQL & Data Integrity</span>
              </span>
              <span className="px-3.5 py-1.5 border border-accent-rose/30 bg-surface/40 text-primary-text font-medium rounded-sm shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-rose" />
                <span>Agentic AI & Deterministic Guardrails</span>
              </span>
            </div>

            {/* Mobile Portrait Placement: Situated after introduction and pillars, before action buttons */}
            <div className="lg:hidden py-4">
              {renderPortrait(true)}
            </div>

            {/* Primary Action Buttons - Minimum 44px touch targets */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-accent-violet hover:bg-accent-violet/90 hover:shadow-[0_0_20px_rgba(169,135,245,0.4)] text-obsidian font-mono text-xs sm:text-[12.5px] font-bold uppercase tracking-wider transition-all shadow-md rounded-sm"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 border border-surface-border bg-surface/50 hover:bg-surface text-primary-text font-mono text-xs sm:text-[12.5px] tracking-wider transition-colors rounded-sm"
              >
                <Download className="w-4 h-4 text-accent-cyan" />
                <span>Download Résumé (PDF)</span>
              </button>

              <button
                onClick={copyEmail}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 border border-surface-border/80 hover:bg-surface/40 text-muted-text hover:text-primary-text font-mono text-xs sm:text-[12.5px] transition-colors rounded-sm"
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

          {/* Right Column: Desktop Integrated Editorial Portrait Anchor (5 cols) */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center">
            {renderPortrait(false)}
          </div>

        </div>
      </div>
    </section>
  );
};
