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
    <section id="stack" className="py-24 bg-obsidian border-b border-surface-border/40 relative bg-tech-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-accent-cyan tracking-[0.2em] uppercase block">
              04 // TECHNICAL PROFILE & FOUNDATIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-text tracking-tight">
              The Tools Behind the Work
            </h2>
          </div>
          <p className="font-mono text-[11px] text-muted-dim max-w-sm text-left sm:text-right">
            STRUCTURED BY DOMAIN APPLICATION • NO ARBITRARY PERCENTAGE GAUGES
          </p>
        </div>

        {/* Master-Detail Index Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Domain Category Index (4 cols) */}
          <div className="lg:col-span-4 space-y-1.5">
            <div className="font-mono text-[10px] text-muted-dim uppercase tracking-wider pb-2 border-b border-surface-border/40 mb-2">
              CATALOGUE DIRECTORY ({TECHNICAL_SKILLS.length} DOMAINS)
            </div>

            {TECHNICAL_SKILLS.map((cat, idx) => {
              const isActive = selectedCategoryIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategoryIndex(idx)}
                  className={`w-full flex items-center justify-between p-3 text-left font-mono text-xs transition-all border-l-2 ${
                    isActive
                      ? 'border-accent-violet bg-surface/40 text-primary-text font-semibold'
                      : 'border-transparent text-muted-text hover:text-primary-text hover:bg-surface/15'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] text-muted-dim">0{idx + 1}.</span>
                    <span className={isActive ? 'text-accent-violet' : 'text-muted-dim'}>
                      {getIcon(cat.title)}
                    </span>
                    <span className="text-xs">{cat.title}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-0.5 text-accent-violet' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Technical Catalogue Detail (8 cols) */}
          <div className="lg:col-span-8">
            <div className="border border-surface-border/80 bg-midnight/80 p-6 sm:p-8 backdrop-blur-sm space-y-6">
              
              {/* Category Header */}
              <div className="border-b border-surface-border/50 pb-4">
                <div className="flex items-center justify-between font-mono text-[10.5px] text-accent-violet mb-1.5">
                  <div className="flex items-center gap-2">
                    {getIcon(activeCategory.title)}
                    <span className="uppercase tracking-wider">DOMAIN SPECIFICATION</span>
                  </div>
                  <span className="text-muted-dim">{activeCategory.skills.length} TOOLS DOCUMENTED</span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-primary-text">
                  {activeCategory.title}
                </h3>
                
                <p className="editorial-body text-muted-dim mt-1 max-w-xl">
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
                      <span className="font-mono text-xs font-bold text-primary-text">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[9px] text-accent-cyan px-1.5 py-0.2 rounded bg-accent-cyan/10 uppercase">
                        VERIFIED
                      </span>
                    </div>

                    <div className="sm:w-2/3 text-xs text-muted-dim leading-relaxed font-sans">
                      {skill.context}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verification Stamp Footnote */}
              <div className="pt-3 border-t border-surface-border/40 flex items-center justify-between text-[10px] font-mono text-muted-dim">
                <span>SELECTION CRITERIA: GENUINELY EMPLOYED IN SOURCE CODE</span>
                <span className="text-accent-violet">SLIIT / JSC / REPOSITORIES</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
