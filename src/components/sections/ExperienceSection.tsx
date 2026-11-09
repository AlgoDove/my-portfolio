import React from 'react';
import { Calendar, MapPin, ShieldAlert, FileCode2, Terminal, Users } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-midnight/40 border-b border-surface-border/40 relative bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-accent-violet tracking-[0.2em] uppercase block">
              03 // OPERATIONAL ENGINEERING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-text tracking-tight">
              Where Software Meets Real Operations
            </h2>
          </div>
          <div className="font-mono text-[11px] text-muted-dim">
            JUDICIAL ADMINISTRATION DIGITALISATION
          </div>
        </div>

        {/* Editorial Ledger Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Organization & Operational Context (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status & Dates */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/25 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                {EXPERIENCE_DATA.status}
              </span>
              <div className="flex items-center gap-1 font-mono text-xs text-muted-dim">
                <Calendar className="w-3.5 h-3.5 text-accent-violet" />
                <span>{EXPERIENCE_DATA.period}</span>
              </div>
            </div>

            {/* Role & Org */}
            <div className="space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-text">
                {EXPERIENCE_DATA.role}
              </h3>
              <div className="text-base text-accent-violet font-medium">
                {EXPERIENCE_DATA.organization}
              </div>
              <div className="font-mono text-[11px] text-muted-dim">
                {EXPERIENCE_DATA.programme}
              </div>
            </div>

            {/* Context Paragraph */}
            <div className="border-l-2 border-accent-violet/60 pl-4 py-1">
              <p className="editorial-body leading-relaxed text-muted-text">
                {EXPERIENCE_DATA.context}
              </p>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 font-mono text-xs text-muted-dim pt-1">
              <MapPin className="w-3.5 h-3.5 text-accent-rose" />
              <span>STATION: {EXPERIENCE_DATA.location}</span>
            </div>

            {/* Credible Scope Framing */}
            <div className="p-4 border border-surface-border/70 bg-surface/20 text-xs text-muted-dim space-y-2">
              <div className="flex items-center gap-2 font-mono text-[10.5px] text-accent-violet font-semibold uppercase">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Credible Technical Framing</span>
              </div>
              <p className="leading-relaxed font-sans text-[11.5px]">
                {EXPERIENCE_DATA.disclaimer}
              </p>
            </div>

          </div>

          {/* Right Column: Technical Ledger of Direct Activities (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="border border-surface-border/80 bg-midnight/80 p-6 backdrop-blur-sm space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-surface-border/50 text-xs font-mono text-muted-dim">
                <div className="flex items-center gap-2 font-semibold text-primary-text">
                  <Terminal className="w-4 h-4 text-accent-cyan" />
                  <span>DIRECT TECHNICAL RESPONSIBILITIES</span>
                </div>
                <span>LOGGED ACTIVITIES</span>
              </div>

              {/* Direct Activities Ledger */}
              <div className="space-y-3">
                {EXPERIENCE_DATA.keyActivities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="p-3 border-l border-surface-border/80 bg-surface/10 hover:bg-surface/25 transition-colors flex items-start gap-3"
                  >
                    <span className="font-mono text-[10.5px] text-accent-cyan font-semibold shrink-0 mt-0.5">
                      ACT_{String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="editorial-body leading-relaxed">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Operational System Scope Tags */}
              <div className="pt-4 border-t border-surface-border/50 space-y-3">
                <div className="font-mono text-[11px] text-muted-dim uppercase flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5 text-accent-violet" />
                  <span>OPERATIONAL SYSTEMS SCOPE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EXPERIENCE_DATA.technicalScope.map((scope, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 border border-surface-border/60 bg-surface/30 font-mono text-xs text-primary-text flex items-center justify-between"
                    >
                      <span>{scope}</span>
                      <span className="text-[9.5px] text-accent-cyan">VERIFIED</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Knowledge Transfer Note */}
              <div className="p-3.5 border-l-2 border-accent-rose bg-surface/15 text-xs text-muted-dim space-y-1">
                <div className="flex items-center gap-1.5 font-mono text-accent-rose text-[10.5px] font-semibold">
                  <Users className="w-3.5 h-3.5" />
                  <span>REGIONAL COURT KNOWLEDGE TRANSFER</span>
                </div>
                <p className="leading-relaxed">
                  Translating operational procedures into software requirements and supporting judicial staff onboarding across regional court registries.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
