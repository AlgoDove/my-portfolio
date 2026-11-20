import React from 'react';
import { Activity, BookOpen, PenTool } from 'lucide-react';
import { BEYOND_ENGINEERING } from '../../data/portfolioData';
import { ScrollReveal } from '../common/ScrollReveal';

export const BeyondEngineeringSection: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Athletics')) return <Activity className="w-4 h-4 text-accent-cyan" />;
    if (title.includes('Reading')) return <BookOpen className="w-4 h-4 text-accent-violet" />;
    return <PenTool className="w-4 h-4 text-accent-rose" />;
  };

  const getPillarMeta = (idx: number) => {
    switch (idx) {
      case 0: return { code: 'PILLAR 01 // DISCIPLINE', accent: 'text-accent-cyan' };
      case 1: return { code: 'PILLAR 02 // PERSPECTIVE', accent: 'text-accent-violet' };
      default: return { code: 'PILLAR 03 // CLARITY', accent: 'text-accent-rose' };
    }
  };

  return (
    <section id="beyond" className="py-24 bg-midnight/20 border-b border-surface-border/40 relative scroll-mt-20 overflow-hidden">
      {/* Atmospheric lighting accents */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[350px] bg-accent-rose/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
            <div className="space-y-1">
              <span className="font-mono text-xs sm:text-[12.5px] text-accent-cyan tracking-[0.25em] uppercase block font-semibold">
                07 // BEYOND ENGINEERING
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-bold text-primary-text tracking-[-0.02em]">
                Discipline, Inquiry & Narrative Craft
              </h2>
            </div>
            <div className="font-mono text-xs text-muted-dim tracking-wider uppercase">
              PERSONAL PURSUITS • PRINCIPLES IN ACTION
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Pillars Editorial Cards Spread */}
        <ScrollReveal delayMs={60}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {BEYOND_ENGINEERING.map((item, idx) => {
              const meta = getPillarMeta(idx);
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 border border-surface-border/80 bg-midnight/80 rounded backdrop-blur-sm space-y-4 hover:border-accent-violet/50 hover:shadow-[0_0_20px_rgba(169,135,245,0.1)] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-surface-border/40 pb-3">
                      <div className="p-2 rounded bg-surface/60 border border-surface-border">
                        {getIcon(item.title)}
                      </div>
                      <span className={`font-mono text-[11px] sm:text-[12px] ${meta.accent} font-semibold tracking-wider`}>
                        {meta.code}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-primary-text">
                      {item.title}
                    </h3>

                    <p className="editorial-body text-[14px] sm:text-[15px] text-[#D1C8DF] leading-[1.7] font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-surface-border/40 flex items-center justify-between text-[11.5px] font-mono text-muted-dim">
                    <span>TRANSFERABLE RIGOR</span>
                    <span className="text-accent-violet font-semibold">ENGINEERING FOUNDATION</span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
