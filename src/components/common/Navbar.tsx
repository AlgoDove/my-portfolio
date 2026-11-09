import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'work', 'experience', 'stack', 'cloud', 'education', 'beyond', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: '01. Philosophy', href: '#about', id: 'about' },
    { label: '02. Systems', href: '#work', id: 'work' },
    { label: '03. Operational', href: '#experience', id: 'experience' },
    { label: '04. Stack', href: '#stack', id: 'stack' },
    { label: '05. Cloud', href: '#cloud', id: 'cloud' },
    { label: '06. Academic', href: '#education', id: 'education' },
    { label: '07. Beyond', href: '#beyond', id: 'beyond' },
    { label: '08. Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300 bg-obsidian/80 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] border-b py-3 shadow-lg ${
        isScrolled
          ? 'border-surface-border/80 shadow-obsidian/60'
          : 'border-surface-border/40 shadow-obsidian/30'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Gokulaselvan I Homepage"
          >
            <div className="w-8 h-8 rounded bg-surface border border-surface-border flex items-center justify-center text-accent-violet font-mono font-bold text-sm group-hover:border-accent-violet group-hover:shadow-[0_0_12px_rgba(169,135,245,0.35)] transition-all">
              G.
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wider text-primary-text group-hover:text-accent-violet transition-colors">
                {PERSONAL_INFO.wordmark}
              </span>
              <span className="font-mono text-[10px] text-muted-dim leading-none">
                SOFTWARE ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded font-mono text-xs transition-all ${
                  activeSection === link.id
                    ? 'text-accent-cyan bg-surface/60 border border-accent-cyan/40 shadow-[0_0_12px_rgba(121,201,223,0.22)] font-semibold'
                    : 'text-muted-text hover:text-primary-text hover:bg-surface/30'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Available Status & Download Résumé Button */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface/40 border border-surface-border font-mono text-[11px] text-muted-text">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span>COLOMBO, LK</span>
            </div>

            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-surface hover:bg-surface-elevated border border-surface-border text-primary-text font-mono text-xs font-medium hover:border-accent-violet transition-all"
            >
              <Download className="w-3.5 h-3.5 text-accent-violet" />
              <span>Download Résumé (PDF)</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle - 44px tap targets */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCvModal}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded bg-surface/60 border border-surface-border text-accent-violet"
              title="Download Résumé (PDF)"
              aria-label="Download Résumé (PDF)"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded bg-surface/60 border border-surface-border text-muted-text hover:text-primary-text"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent-rose" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-midnight/95 backdrop-blur-xl border border-surface-border rounded-lg space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-surface-border text-xs font-mono text-muted-dim">
              <span>SECTION NAVIGATION</span>
              <span className="text-accent-cyan flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                ONLINE
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[44px] flex items-center px-4 py-2.5 rounded font-mono text-xs sm:text-[13px] transition-colors ${
                  activeSection === link.id
                    ? 'text-accent-cyan bg-surface border border-accent-cyan/30 font-semibold'
                    : 'text-muted-text hover:text-primary-text hover:bg-surface/50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-surface-border">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-accent-violet hover:bg-accent-violet/90 text-obsidian font-mono text-xs sm:text-[13px] font-bold shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Résumé (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
