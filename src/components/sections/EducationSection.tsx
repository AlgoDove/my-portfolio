import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { ScrollReveal } from '../common/ScrollReveal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-obsidian/90 border-b border-surface-border/40 relative scroll-mt-20 overflow-hidden">
      {/* Atmospheric lighting accents */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[380px] bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
            <div className="space-y-1">
              <span className="font-mono text-xs sm:text-[12.5px] text-accent-violet tracking-[0.25em] uppercase block font-semibold">
                06 // ACADEMIC RECORD & SCHOLARSHIP
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary-text tracking-[-0.02em]">
                Education & Academic Excellence
              </h2>
            </div>
            <div className="font-mono text-xs text-muted-dim tracking-wider uppercase">
              THEORETICAL & APPLIED FOUNDATIONS
            </div>
          </div>
        </ScrollReveal>

        {/* Academic Ledger Grid */}
        <ScrollReveal delayMs={60}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Main Institution & Honors (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="border border-surface-border/80 bg-midnight/80 p-4 sm:p-8 backdrop-blur-sm space-y-6 rounded-sm">
                
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-border/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded bg-accent-violet/10 border border-accent-violet/20 text-accent-violet">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary-text">
                        {EDUCATION_DATA.institution}
                      </h3>
                      <p className="font-mono text-[13px] text-accent-violet">
                        {EDUCATION_DATA.specialisation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[12px] text-muted-dim">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>EXP. GRADUATION: {EDUCATION_DATA.expectedGraduation}</span>
                  </div>
                </div>

                <div className="font-heading text-lg sm:text-xl font-semibold text-primary-text">
                  {EDUCATION_DATA.degree}
                </div>

                {/* Verified Highlights */}
                <div className="space-y-3">
                  {EDUCATION_DATA.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 border-l-2 border-accent-cyan/60 bg-surface/20 flex items-start gap-3 rounded-r-sm"
                    >
                      <Award className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <p className="text-[13.5px] sm:text-[14.5px] text-primary-text/95 leading-relaxed font-sans">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Academic Standing Metric Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              
              <div className="border border-surface-border/80 bg-midnight/90 p-4 sm:p-6 text-center space-y-3 backdrop-blur-sm rounded-sm">
                <span className="font-mono text-[11px] text-muted-dim uppercase tracking-wider block">
                  CUMULATIVE ACADEMIC STANDING
                </span>

                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-violet via-accent-rose to-accent-cyan">
                  {EDUCATION_DATA.wgpa}
                </div>

                <span className="font-mono text-[13px] text-accent-cyan block font-semibold">
                  WEIGHTED GPA (WGPA)
                </span>

                <div className="pt-3 border-t border-surface-border/50 space-y-2 text-[12.5px] sm:text-[13px] font-mono text-muted-dim text-left">
                  <div className="flex justify-between py-1 border-b border-surface-border/30">
                    <span>DEAN'S LIST:</span>
                    <span className="text-primary-text font-semibold">3-Time Recipient</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-surface-border/30">
                    <span>SCHOLARSHIP:</span>
                    <span className="text-accent-violet font-semibold">Merit Fee Waiver</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>SPECIALIZATION:</span>
                    <span className="text-primary-text font-semibold">Software Eng.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
