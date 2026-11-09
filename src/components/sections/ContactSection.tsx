import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-obsidian relative bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-xs sm:text-[13px] text-accent-violet tracking-[0.2em] uppercase block font-semibold">
              08 // START A CONVERSATION
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary-text tracking-tight">
              Direct Contact & Channels
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-dim tracking-wider uppercase">
            TRANSPARENT COMMUNICATIONS
          </div>
        </div>

        {/* 2-Column Contact Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Editorial Narrative & Statement (6 cols) */}
          <div className="lg:col-span-6 border border-surface-border/80 bg-midnight/80 p-8 sm:p-10 backdrop-blur-sm flex flex-col justify-between space-y-6 rounded-sm shadow-xl">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface/50 border border-surface-border text-xs font-mono text-accent-cyan">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                <span className="font-semibold tracking-wider">INQUIRIES WELCOME</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-bold text-primary-text leading-snug">
                Let’s talk software architecture, backend engineering, or opportunities.
              </h3>

              <p className="editorial-body editorial-body-prose leading-relaxed">
                Whether you are exploring potential software engineering roles, technical internships, collaborating on open-source systems, or discussing architecture trade-offs, my inbox is open.
              </p>
            </div>

            <div className="pt-6 border-t border-surface-border/50 space-y-2 text-xs font-mono text-muted-dim">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-accent-violet" />
                <span>PREFERRED CHANNEL: DIRECT EMAIL</span>
              </div>
              <div>TYPICAL RESPONSE TIME: WITHIN 24 HOURS</div>
            </div>

          </div>

          {/* Right: Direct Connection Channels (6 cols) */}
          <div className="lg:col-span-6 space-y-3.5 flex flex-col justify-between">
            
            {/* Email Channel */}
            <div className="p-4 sm:p-5 border border-surface-border/80 bg-midnight/80 hover:border-accent-violet/40 transition-colors flex items-center justify-between gap-4 rounded-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded bg-surface/60 border border-surface-border text-accent-violet shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10.5px] text-muted-dim uppercase block tracking-wider font-semibold">
                    ELECTRONIC MAIL
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs sm:text-sm font-semibold text-primary-text hover:text-accent-cyan transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded bg-surface/60 hover:bg-surface border border-surface-border text-muted-text hover:text-primary-text transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-accent-cyan" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Channel */}
            <div className="p-4 sm:p-5 border border-surface-border/80 bg-midnight/80 hover:border-accent-violet/40 transition-colors flex items-center justify-between gap-4 rounded-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-3 rounded bg-surface/60 border border-surface-border text-accent-cyan shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10.5px] text-muted-dim uppercase block tracking-wider font-semibold">
                    TELEPHONE
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-xs sm:text-sm font-semibold text-primary-text hover:text-accent-cyan transition-colors truncate block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={copyPhone}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded bg-surface/60 hover:bg-surface border border-surface-border text-muted-text hover:text-primary-text transition-colors shrink-0"
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-accent-cyan" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Grid (LinkedIn & GitHub) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] p-4 border border-surface-border/80 bg-midnight/80 hover:border-accent-cyan/40 transition-all flex items-center justify-between group rounded-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-surface/60 border border-surface-border text-muted-text group-hover:text-primary-text transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-muted-dim block uppercase font-semibold">
                      CODEBASE
                    </span>
                    <span className="font-mono text-xs sm:text-[13px] font-semibold text-primary-text">
                      GitHub Profile
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-dim group-hover:text-accent-cyan transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] p-4 border border-surface-border/80 bg-midnight/80 hover:border-accent-violet/40 transition-all flex items-center justify-between group rounded-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-surface/60 border border-surface-border text-muted-text group-hover:text-accent-violet transition-colors">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-muted-dim block uppercase font-semibold">
                      NETWORK
                    </span>
                    <span className="font-mono text-xs sm:text-[13px] font-semibold text-primary-text">
                      LinkedIn Profile
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-dim group-hover:text-accent-violet transition-colors" />
              </a>

            </div>

            {/* Location Strip */}
            <div className="p-3 border border-surface-border/60 bg-surface/20 flex items-center justify-between text-xs font-mono text-muted-dim">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-rose" />
                <span>LOCATION: COLOMBO, SRI LANKA</span>
              </div>
              <span className="text-accent-cyan">UTC +05:30</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
