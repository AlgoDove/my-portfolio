import React from 'react';
import { Activity, BookOpen, PenTool } from 'lucide-react';
import { BEYOND_ENGINEERING } from '../../data/portfolioData';

export const BeyondEngineeringSection: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Athletics')) return <Activity className="w-4 h-4 text-accent-cyan" />;
    if (title.includes('Reading')) return <BookOpen className="w-4 h-4 text-accent-violet" />;
    return <PenTool className="w-4 h-4 text-accent-rose" />;
  };

  return (
    <section id="beyond" className="py-20 bg-midnight/20 border-b border-surface-border/40 relative scroll-mt-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-xs sm:text-[13px] text-accent-cyan tracking-[0.2em] uppercase block font-semibold">
              07 // BEYOND ENGINEERING
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[38px] font-bold text-primary-text tracking-tight">
              Discipline, Inquiry & Narrative Craft
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-dim tracking-wider uppercase">
            PERSONAL PURSUITS
          </div>
        </div>

        {/* 3 Pillars Editorial Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BEYOND_ENGINEERING.map((item, idx) => (
            <div
              key={idx}
              className="border-l-2 border-accent-violet/50 pl-5 space-y-3 py-1"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded bg-surface/60 border border-surface-border">
                  {getIcon(item.title)}
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-primary-text">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-[13.5px] text-muted-text leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
