import React, { useState } from 'react';
import { Code2, Server, Layout, Database, TestTube2, BrainCircuit, Wrench, ChevronRight } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../../data/portfolioData';

export const TechnicalProfileSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const getIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages': return <Code2 className="w-4 h-4" />;
      case 'Backend Engineering & APIs': return <Server className="w-4 h-4" />;
      case 'Frontend & Mobile Engineering': return <Layout className="w-4 h-4" />;
      case 'Databases & Persistence': return <Database className="w-4 h-4" />;
      case 'Testing & Verification': return <TestTube2 className="w-4 h-4" />;
      case 'Machine Learning & AI': return <BrainCircuit className="w-4 h-4" />;
      default: return <Wrench className="w-4 h-4" />;
    }
  };

  const activeCategory = TECHNICAL_SKILLS[selectedCategoryIndex];

  return (
    <section id="stack" className="py-24 bg-obsidian/90 border-b border-surface-border/40 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-xs sm:text-[13px] text-accent-cyan tracking-[0.2em] uppercase block font-semibold">
              04 // TECHNICAL PROFILE & FOUNDATIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-[36px] lg:text-[42px] font-bold text-primary-text tracking-tight">
              The Tools Behind the Work
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-dim max-w-sm text-left sm:text-right tracking-wide">
            STRUCTURED BY DOMAIN APPLICATION • NO ARBITRARY PERCENTAGE GAUGES
          </p>
        </div>

        {/* Mobile Horizontally Scrollable Tabs (Visible only on mobile/tablet) */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between pb-2 font-mono text-[11px] text-muted-dim uppercase">
            <span>SELECT DOMAIN</span>
            <span>{selectedCategoryIndex + 1} OF {TECHNICAL_SKILLS.length}</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
            {TECHNICAL_SKILLS.map((cat, idx) => {
              const isActive = selectedCategoryIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategoryIndex(idx)}
                  className={`min-h-[44px] shrink-0 px-3.5 py-2 font-mono text-xs flex items-center gap-2 rounded-sm snap-start transition-all ${
                    isActive
                      ? 'bg-accent-violet text-obsidian font-bold shadow-md'
                      : 'bg-surface/50 border border-surface-border text-muted-text hover:text-primary-text'
                  }`}
                >
                  <span>{getIcon(cat.title)}</span>
                  <span className="whitespace-nowrap">{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master-Detail Index Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Domain Category Index (Desktop only, 4 cols) */}
          <div className="hidden lg:block lg:col-span-4 space-y-1.5">
            <div className="font-mono text-xs text-muted-dim uppercase tracking-wider pb-2 border-b border-surface-border/40 mb-2 font-semibold">
              CATALOGUE DIRECTORY ({TECHNICAL_SKILLS.length} DOMAINS)
            </div>

            {TECHNICAL_SKILLS.map((cat, idx) => {
              const isActive = selectedCategoryIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategoryIndex(idx)}
                  className={`w-full min-h-[44px] flex items-center justify-between p-3 text-left font-mono text-xs sm:text-[12.5px] transition-all border-l-2 rounded-r-sm ${
                    isActive
                      ? 'border-accent-violet bg-surface/50 text-primary-text font-bold shadow-sm'
                      : 'border-transparent text-muted-text hover:text-primary-text hover:bg-surface/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] text-muted-dim">0{idx + 1}.</span>
                    <span className={isActive ? 'text-accent-violet' : 'text-muted-dim'}>
                      {getIcon(cat.title)}
                    </span>
                    <span className="tracking-tight">{cat.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-0.5 text-accent-violet' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Technical Catalogue Detail (8 cols) */}
          <div className="lg:col-span-8">
            <div className="border border-surface-border/80 bg-midnight/80 p-5 sm:p-8 backdrop-blur-sm space-y-6 rounded-sm shadow-lg">
              
              {/* Category Header */}
              <div className="border-b border-surface-border/50 pb-4">
                <div className="flex items-center justify-between font-mono text-xs text-accent-violet mb-2">
                  <div className="flex items-center gap-2">
                    {getIcon(activeCategory.title)}
                    <span className="uppercase tracking-wider font-semibold">DOMAIN SPECIFICATION</span>
                  </div>
                  <span className="text-muted-dim">{activeCategory.skills.length} TOOLS DOCUMENTED</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-text">
                  {activeCategory.title}
                </h3>
                
                <p className="editorial-secondary text-muted-text mt-1.5 max-w-xl">
                  {activeCategory.description}
                </p>
              </div>

              {/* Editorial Technical List */}
              <div className="divide-y divide-surface-border/40">
                {activeCategory.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="py-3.5 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 hover:bg-surface/10 px-2 -mx-2 transition-colors"
                  >
                    <div className="sm:w-1/3 shrink-0 flex items-center gap-2">
                      <span className="font-mono text-xs sm:text-[13px] font-bold text-primary-text">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[9.5px] text-accent-cyan px-1.5 py-0.5 rounded bg-accent-cyan/10 uppercase font-semibold">
                        VERIFIED
                      </span>
                    </div>

                    <div className="sm:w-2/3 text-xs sm:text-[13px] text-muted-text leading-relaxed font-sans">
                      {skill.context}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verification Stamp Footnote */}
              <div className="pt-3 border-t border-surface-border/40 flex items-center justify-between text-xs font-mono text-muted-dim">
                <span>SELECTION CRITERIA: EMPLOYED IN REPOSITORIES & INTERNSHIP</span>
                <span className="text-accent-violet font-semibold">SLIIT / JSC</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
