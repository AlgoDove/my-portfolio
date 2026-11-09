import React from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian border-t border-surface-border py-16 text-muted-text font-mono text-xs">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-surface-border/50">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg text-primary-text tracking-wider">
                {PERSONAL_INFO.wordmark}
              </span>
              <span className="text-[10px] text-muted-dim">// NOCTURNE / SIGNAL</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-muted-dim max-w-sm leading-relaxed">
              Software engineering focused on architectural clarity, dependable backend systems, data persistence, and rigorous implementation.
            </p>
            <div className="text-[11px] text-muted-dim">
              Based in Colombo, Sri Lanka • UTC +05:30
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[10px] uppercase text-primary-text font-semibold tracking-wider">
              SECTION INDICES
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[11px]">
              <a href="#about" className="hover:text-accent-cyan transition-colors">01. Philosophy</a>
              <a href="#work" className="hover:text-accent-cyan transition-colors">02. Selected Work</a>
              <a href="#experience" className="hover:text-accent-cyan transition-colors">03. Experience</a>
              <a href="#stack" className="hover:text-accent-cyan transition-colors">04. Technical Stack</a>
              <a href="#cloud" className="hover:text-accent-cyan transition-colors">05. Cloud Scope</a>
              <a href="#education" className="hover:text-accent-cyan transition-colors">06. Education</a>
              <a href="#beyond" className="hover:text-accent-cyan transition-colors">07. Beyond Engineering</a>
              <a href="#contact" className="hover:text-accent-cyan transition-colors">08. Contact</a>
            </div>
            <div className="pt-1">
              <button
                onClick={onOpenCvModal}
                className="text-left text-accent-violet hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>Download Résumé (PDF)</span>
                <Download className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Telemetry & Action (3 cols) */}
          <div className="md:col-span-3 space-y-3 md:text-right flex flex-col justify-between">
            <div className="space-y-1">
              <div className="text-[10px] uppercase text-primary-text font-semibold tracking-wider">
                SYSTEM TELEMETRY
              </div>
              <div className="text-[11px] text-muted-dim">STATUS: RUNNING</div>
              <div className="text-[11px] text-accent-cyan">CLIENT: REACT 18 + TS</div>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface hover:bg-surface-elevated border border-surface-border text-primary-text text-[11px] transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-accent-cyan" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-dim">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed & Built with Nocturne / Signal System.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-text transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-text transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-primary-text transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
