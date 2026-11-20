import React from 'react';
import { Calendar, MapPin, FileCode2, Terminal, Users, Award } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';
import { ArchivalTeamPhoto } from '../common/ArchivalTeamPhoto';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-midnight/35 border-b border-surface-border/40 relative scroll-mt-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-xs sm:text-[12px] text-accent-violet tracking-[0.25em] uppercase block font-semibold">
              03 // OPERATIONAL ENGINEERING
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary-text tracking-[-0.02em]">
              Where Software Meets Real Operations
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-dim tracking-wider uppercase">
            JUDICIAL ADMINISTRATION DIGITALISATION
          </div>
        </div>

        {/* Editorial Ledger Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Organization & Operational Context (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status & Dates */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-accent-cyan px-2.5 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/25 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
                {EXPERIENCE_DATA.status}
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[13px] text-muted-dim">
                <Calendar className="w-3.5 h-3.5 text-accent-violet" />
                <span>{EXPERIENCE_DATA.period}</span>
              </div>
            </div>

            {/* Role & Org */}
            <div className="space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-text">
                {EXPERIENCE_DATA.role}
              </h3>
              <div className="text-base sm:text-lg text-accent-violet font-semibold">
                {EXPERIENCE_DATA.organization}
              </div>
              <div className="font-mono text-[13px] text-muted-dim">
                {EXPERIENCE_DATA.programme}
              </div>
            </div>

            {/* Context Paragraph */}
            <div className="border-l-2 border-accent-violet/70 pl-5 sm:pl-6 pr-4 sm:pr-6 py-2 bg-surface/10 rounded-r-sm">
              <p className="text-[15.5px] sm:text-[16.5px] leading-[1.68] text-[#D1C8DF] font-sans">
                {EXPERIENCE_DATA.context}
              </p>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 font-mono text-[12.5px] text-muted-dim pt-1">
              <MapPin className="w-3.5 h-3.5 text-accent-rose" />
              <span>STATION: {EXPERIENCE_DATA.location}</span>
            </div>

            {/* Operational Context Scope */}
            <div className="p-5 sm:p-6 border border-surface-border/70 bg-surface/25 text-xs text-muted-text rounded-sm shadow-sm">
              <p className="leading-[1.65] font-sans text-[13.5px] sm:text-[14px] text-muted-text">
                {EXPERIENCE_DATA.disclaimer}
              </p>
            </div>

          </div>

          {/* Right Column: Technical Ledger of Direct Activities (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="border border-surface-border/80 bg-midnight/80 p-5 sm:p-8 backdrop-blur-sm space-y-6 rounded-sm shadow-lg">
              
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
                    className="p-3.5 sm:p-4 border-l border-surface-border/80 bg-surface/10 hover:bg-surface/25 transition-colors flex items-start gap-3.5 rounded-r-sm"
                  >
                    <span className="font-mono text-[11.5px] text-accent-cyan font-semibold shrink-0 mt-0.5">
                      ACT_{String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="editorial-body leading-[1.68]">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Operational System Scope Tags */}
              <div className="pt-4 border-t border-surface-border/50 space-y-3">
                <div className="font-mono text-[12px] text-muted-dim uppercase flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5 text-accent-violet" />
                  <span>OPERATIONAL SYSTEMS SCOPE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {EXPERIENCE_DATA.technicalScope.map((scope, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 border border-surface-border/60 bg-surface/30 font-mono text-[12.5px] sm:text-[13px] text-primary-text flex items-center"
                    >
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Knowledge Transfer Note */}
              <div className="p-3.5 border-l-2 border-accent-rose bg-surface/15 text-[13px] text-muted-dim space-y-1">
                <div className="flex items-center gap-1.5 font-mono text-accent-rose text-[11.5px] font-semibold">
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

        {/* ============================================================== */}
        {/* 03.2 FIELD ARCHIVE: CODE JAM HACKATHON STAGING & BACKEND LEADERSHIP */}
        {/* ============================================================== */}
        <div className="mt-20 pt-12 border-t border-surface-border/50">
          
          {/* Sub-header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-3 border-b border-surface-border/40 gap-2">
            <div className="space-y-1">
              <span className="font-mono text-xs text-accent-cyan tracking-[0.2em] uppercase block font-semibold">
                SIGNAL ARCHIVE // 03.B
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-text tracking-tight">
                Engineering Field Notes: Hackathon Infrastructure & Staging
              </h3>
            </div>
            <div className="font-mono text-xs text-muted-dim tracking-wider uppercase">
              CAMPUS TECHNICAL LEADERSHIP • SLIIT
            </div>
          </div>

          {/* Editorial Grid: Photo Artifact (7 cols) + Context & Role Details (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Framed Technical Photograph Artifact (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <ArchivalTeamPhoto />

              {/* Technical Caption Underneath */}
              <p className="text-[12.5px] sm:text-[13px] font-mono text-muted-dim leading-relaxed px-1">
                <span className="text-accent-cyan font-semibold">FIELD NOTE //</span> Genuine archival photograph of the 24-member SLIIT Code Jam technical and organizing team assembled in the command room during the "Project Chronos" sprint. Non-generative color attenuation applied to background whiteboard flare; facial features and archival resolution preserved.
              </p>
            </div>

            {/* Right: Editorial Narrative & Backend Responsibility (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-accent-violet/10 border border-accent-violet/30 text-[11px] font-mono text-accent-violet">
                  <Award className="w-3.5 h-3.5 text-accent-violet" />
                  <span className="font-semibold tracking-wider">HACKATHON OPERATIONS</span>
                </div>

                <h4 className="font-heading text-xl sm:text-2xl font-bold text-primary-text">
                  SLIIT Code Jam — Technical Staging & Evaluation Pipeline
                </h4>

                <p className="editorial-body leading-[1.68] text-muted-text">
                  Collaborated within the command team to coordinate the backend evaluation infrastructure, automated participant submission scoring pipelines, and live test execution workflows for SLIIT’s premier annual algorithmic hackathon.
                </p>
              </div>

              {/* Specific Engineering Contributions */}
              <div className="p-4 sm:p-5 border border-surface-border/70 bg-surface/20 rounded space-y-3">
                <div className="text-[13px] font-mono font-semibold text-primary-text flex items-center gap-2 pb-2 border-b border-surface-border/40">
                  <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>DIRECT INFRASTRUCTURE RESPONSIBILITIES</span>
                </div>

                <ul className="space-y-2.5 text-[13.5px] sm:text-[14px] text-muted-text font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-accent-cyan text-xs font-semibold mt-0.5">•</span>
                    <span>Coordinated submission evaluation runners, ensuring isolation and repeatable time-complexity benchmarking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-accent-cyan text-xs font-semibold mt-0.5">•</span>
                    <span>Monitored live leaderboard data synchronization and handled edge-case re-evaluation queues.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-accent-cyan text-xs font-semibold mt-0.5">•</span>
                    <span>Maintained command-center coordination with judging panels to verify scoring invariants before final announcements.</span>
                  </li>
                </ul>
              </div>

              {/* Metadata Badges */}
              <div className="grid grid-cols-2 gap-2 text-[12px] sm:text-[12.5px] font-mono pt-1">
                <div className="p-2.5 rounded bg-surface/30 border border-surface-border/60">
                  <span className="text-muted-dim block text-[11px]">EVENT PROGRAMME:</span>
                  <span className="text-primary-text font-semibold">SLIIT Code Jam</span>
                </div>
                <div className="p-2.5 rounded bg-surface/30 border border-surface-border/60">
                  <span className="text-muted-dim block text-[11px]">ROLE:</span>
                  <span className="text-accent-cyan font-semibold">Backend & Staging</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
