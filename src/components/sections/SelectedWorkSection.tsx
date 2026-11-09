import React from 'react';
import { ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import { SELECTED_PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';
import { ProjectSchematic } from '../common/ProjectSchematic';
import { GithubIcon } from '../common/Icons';

interface SelectedWorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onSelectProject }) => {
  const procura = SELECTED_PROJECTS.find(p => p.id === 'procura') || SELECTED_PROJECTS[0];
  const approvalEngine = SELECTED_PROJECTS.find(p => p.id === 'approval-workflow') || SELECTED_PROJECTS[1];
  const fixMyArea = SELECTED_PROJECTS.find(p => p.id === 'fixmyarea') || SELECTED_PROJECTS[2];
  const fraudDetection = SELECTED_PROJECTS.find(p => p.id === 'fraud-detection') || SELECTED_PROJECTS[3];

  return (
    <section id="work" className="py-24 bg-obsidian relative border-b border-surface-border/40 bg-tech-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-20 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-xs sm:text-[13px] text-accent-cyan tracking-[0.2em] uppercase block font-semibold">
              02 // SELECTED SYSTEMS & CODEBASES
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-primary-text tracking-tight">
              Software Built Around Real Problems
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-dim max-w-sm text-left sm:text-right tracking-wide">
            ARCHITECTURAL SCHEMATICS, TRADE-OFFS & VERIFIED REPOSITORY EVIDENCE
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. FEATURED SYSTEM: PROCURA (Expansive Open Layout)             */}
        {/* ============================================================== */}
        <div className="mb-28">
          
          {/* Procura Header Area */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="font-mono text-[11px] text-accent-violet px-2.5 py-1 rounded bg-accent-violet/10 border border-accent-violet/30 font-semibold tracking-wider uppercase">
                  PRIMARY CODEBASE CASE STUDY
                </span>
                <span className="font-mono text-xs text-muted-dim">
                  ASP.NET CORE 8 • C# 12 • EF CORE • POSTGRESQL
                </span>
              </div>
              
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-text tracking-tight">
                {procura.title}
              </h3>
              
              <p className="editorial-lead text-accent-violet/90">
                {procura.tagline}
              </p>
            </div>

            {/* Quick Actions - 44px min touch target */}
            <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
              <a
                href={procura.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-2 font-mono text-xs sm:text-[12.5px] text-muted-text hover:text-accent-cyan transition-colors px-4 py-2.5 border border-surface-border bg-midnight/60 hover:bg-surface rounded-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-dim" />
              </a>

              <button
                onClick={() => onSelectProject(procura)}
                className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-accent-violet hover:bg-accent-violet/90 text-obsidian font-mono text-xs sm:text-[12.5px] font-bold transition-all shadow-md rounded-sm"
              >
                <Layers className="w-4 h-4" />
                <span>Inspect Architecture</span>
              </button>
            </div>
          </div>

          {/* Open Architecture Canvas Stage (Not trapped in a small card) */}
          <div className="mb-10 border border-surface-border/80 bg-midnight/90 p-4 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-surface-border/50 font-mono text-[10.5px] text-muted-dim">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                <span className="text-primary-text font-semibold">SYSTEM TOPOLOGY // MODULAR MONOLITH PIPELINE</span>
              </div>
              <span className="text-accent-cyan">VERIFIED: 217 PASSING XUNIT TESTS</span>
            </div>

            <ProjectSchematic
              projectId={procura.id}
              imagePath={procura.imagePath}
              title={procura.title}
              className="w-full min-h-[280px] sm:min-h-[340px]"
            />
          </div>

          {/* Procura Editorial Deep-Dive Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Problem & Solution (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2 border-l-2 border-accent-rose pl-4">
                <span className="font-mono text-[10.5px] text-accent-rose uppercase tracking-wider font-semibold block">
                  THE OPERATIONAL BOTTLENECK
                </span>
                <p className="editorial-body editorial-body-prose leading-relaxed">
                  {procura.problem}
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-accent-cyan pl-4">
                <span className="font-mono text-[10.5px] text-accent-cyan uppercase tracking-wider font-semibold block">
                  ARCHITECTURAL RESOLUTION
                </span>
                <p className="editorial-body editorial-body-prose leading-relaxed">
                  {procura.solution}
                </p>
              </div>

              {/* Verified Metrics Strip */}
              <div className="pt-2 grid grid-cols-3 gap-3">
                {procura.verifiedMetrics?.map((metric, mIdx) => (
                  <div key={mIdx} className="p-3 border border-surface-border/70 bg-surface/20">
                    <div className="font-heading font-bold text-sm text-primary-text">
                      {metric.value}
                    </div>
                    <div className="font-mono text-[9px] text-muted-dim uppercase mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Engineering Contributions (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-surface-border/50">
                <span className="font-mono text-[11px] uppercase tracking-wider text-primary-text font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-violet" />
                  Direct Contributions in Component 1 (Procurement Request Module)
                </span>
                <span className="font-mono text-[10px] text-muted-dim">CONTROLLER-SERVICE-REPO-DTO</span>
              </div>

              <div className="space-y-2.5">
                {procura.individualContribution.slice(0, 5).map((point, idx) => (
                  <div
                    key={idx}
                    className="p-3 border-l border-surface-border/80 bg-surface/10 hover:bg-surface/25 transition-colors flex items-start gap-3"
                  >
                    <span className="font-mono text-[11px] text-accent-cyan font-semibold shrink-0 mt-0.5">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <p className="editorial-body leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Employed */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {procura.technologies.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10.5px] px-2 py-0.5 border border-surface-border/60 bg-surface/40 text-muted-text"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* 2. DIVERSE COMPOSITIONS FOR SECONDARY SYSTEMS                  */}
        {/* ============================================================== */}

        <div className="space-y-24">
          
          <div className="flex items-center gap-3 pb-2 border-b border-surface-border/40 font-mono text-xs text-muted-dim tracking-wider uppercase">
            <span>VERIFIED SPECIALIZED SYSTEMS</span>
            <div className="flex-1 border-b border-surface-border/30" />
            <span>03 DISTINCT ARCHITECTURES</span>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* Project 2: Enterprise Approval Engine (Horizontal Split)     */}
          {/* ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-surface-border/70 bg-midnight/60 p-6 sm:p-8">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-accent-violet px-2 py-0.5 rounded bg-accent-violet/10 border border-accent-violet/25 font-semibold">
                  JAVA 17 & SPRING BOOT 3
                </span>
                <span className="font-mono text-[10.5px] text-muted-dim">
                  // {approvalEngine.category}
                </span>
              </div>

              <h4 className="font-heading text-2xl sm:text-3xl font-bold text-primary-text">
                {approvalEngine.title}
              </h4>
              
              <p className="text-sm text-accent-violet/90 font-medium">
                {approvalEngine.tagline}
              </p>

              <p className="editorial-body editorial-body-prose">
                {approvalEngine.problem}
              </p>

              {/* Engineering Decision Callout */}
              <div className="p-3.5 border-l-2 border-accent-cyan bg-surface/30 space-y-1">
                <span className="font-mono text-[10px] text-accent-cyan uppercase font-semibold block">
                  KEY ARCHITECTURAL TRADE-OFF:
                </span>
                <p className="text-xs text-muted-text leading-relaxed">
                  {approvalEngine.engineeringDecisions[0]?.rationale}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectProject(approvalEngine)}
                  className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 bg-surface hover:bg-surface-elevated border border-surface-border font-mono text-xs sm:text-[12.5px] text-primary-text transition-colors rounded-sm"
                >
                  <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Inspect Workflow State Machine</span>
                </button>
                <a
                  href={approvalEngine.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3 py-2 border border-surface-border/60 bg-surface/30 rounded-sm font-mono text-xs text-muted-dim hover:text-primary-text transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repo</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ProjectSchematic
                projectId={approvalEngine.id}
                imagePath={approvalEngine.imagePath}
                title={approvalEngine.title}
                className="w-full min-h-[220px]"
              />
            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* Project 3: FixMyArea (Civic Tech Asymmetric Layout)          */}
          {/* ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-surface-border/70 bg-midnight/60 p-6 sm:p-8">
            
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/25 font-semibold">
                  ASP.NET CORE 8 & REACT 19
                </span>
                <span className="font-mono text-[10.5px] text-muted-dim">
                  // {fixMyArea.category}
                </span>
              </div>

              <h4 className="font-heading text-2xl sm:text-3xl font-bold text-primary-text">
                {fixMyArea.title}
              </h4>
              
              <p className="text-sm text-accent-cyan/90 font-medium">
                {fixMyArea.tagline}
              </p>

              <p className="editorial-body editorial-body-prose">
                {fixMyArea.problem}
              </p>

              {/* Engineering Decision Callout */}
              <div className="p-3.5 border-l-2 border-accent-rose bg-surface/30 space-y-1">
                <span className="font-mono text-[10px] text-accent-rose uppercase font-semibold block">
                  SERVER-AUTHORITATIVE INVARIANT:
                </span>
                <p className="text-xs text-muted-text leading-relaxed">
                  {fixMyArea.engineeringDecisions[0]?.rationale}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectProject(fixMyArea)}
                  className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 bg-surface hover:bg-surface-elevated border border-surface-border font-mono text-xs sm:text-[12.5px] text-primary-text transition-colors rounded-sm"
                >
                  <Layers className="w-3.5 h-3.5 text-accent-rose" />
                  <span>Inspect Civic API Architecture</span>
                </button>
                <a
                  href={fixMyArea.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3 py-2 border border-surface-border/60 bg-surface/30 rounded-sm font-mono text-xs text-muted-dim hover:text-primary-text transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repo</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <ProjectSchematic
                projectId={fixMyArea.id}
                imagePath={fixMyArea.imagePath}
                title={fixMyArea.title}
                className="w-full min-h-[220px]"
              />
            </div>

          </div>

          {/* ------------------------------------------------------------ */}
          {/* Project 4: Fraud Detection (Deep Learning Anomaly Layout)     */}
          {/* ------------------------------------------------------------ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-surface-border/70 bg-midnight/60 p-6 sm:p-8">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-accent-rose px-2 py-0.5 rounded bg-accent-rose/10 border border-accent-rose/25 font-semibold">
                  PYTHON & TENSORFLOW / KERAS
                </span>
                <span className="font-mono text-[10.5px] text-muted-dim">
                  // {fraudDetection.category}
                </span>
              </div>

              <h4 className="font-heading text-2xl sm:text-3xl font-bold text-primary-text">
                {fraudDetection.title}
              </h4>
              
              <p className="text-sm text-accent-rose/90 font-medium">
                {fraudDetection.tagline}
              </p>

              <p className="editorial-body editorial-body-prose">
                {fraudDetection.problem}
              </p>

              {/* Metrics & Trade-off */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 border border-surface-border/80 bg-surface/30">
                  <span className="font-mono text-[10px] text-muted-dim uppercase block">AUC-ROC METRIC</span>
                  <span className="font-heading font-bold text-lg text-accent-cyan">0.9999</span>
                </div>
                <div className="p-3 border border-surface-border/80 bg-surface/30">
                  <span className="font-mono text-[10px] text-muted-dim uppercase block">FRAUD RECALL</span>
                  <span className="font-heading font-bold text-lg text-accent-rose">1.0 (100%)</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectProject(fraudDetection)}
                  className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 bg-surface hover:bg-surface-elevated border border-surface-border font-mono text-xs sm:text-[12.5px] text-primary-text transition-colors rounded-sm"
                >
                  <Layers className="w-3.5 h-3.5 text-accent-violet" />
                  <span>Inspect Autoencoder Loss & Latent Dim</span>
                </button>
                <a
                  href={fraudDetection.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3 py-2 border border-surface-border/60 bg-surface/30 rounded-sm font-mono text-xs text-muted-dim hover:text-primary-text transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repo</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ProjectSchematic
                projectId={fraudDetection.id}
                imagePath={fraudDetection.imagePath}
                title={fraudDetection.title}
                className="w-full min-h-[220px]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
