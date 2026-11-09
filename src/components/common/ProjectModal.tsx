import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2, Split } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { ProjectSchematic } from './ProjectSchematic';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-obsidian/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-midnight border border-surface-border rounded-lg shadow-2xl p-6 sm:p-8 font-sans text-primary-text overflow-y-auto my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 p-2 rounded-full text-muted-text hover:text-primary-text hover:bg-surface transition-colors z-20 bg-midnight/90"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-mono text-xs text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/25">
            {project.category}
          </span>
          <span className="font-mono text-xs text-accent-violet px-2 py-0.5 rounded bg-accent-violet/10 border border-accent-violet/25">
            {project.statusBadge}
          </span>
        </div>

        <h2 id="project-modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-primary-text mb-2">
          {project.title}
        </h2>
        <p className="text-base text-accent-violet/90 mb-6 font-medium">
          {project.tagline}
        </p>

        {/* Schematic View */}
        <div className="mb-8">
          <ProjectSchematic
            projectId={project.id}
            imagePath={project.imagePath}
            title={project.title}
            className="w-full min-h-[220px]"
          />
        </div>

        {/* Verified Metrics Row if present */}
        {project.verifiedMetrics && project.verifiedMetrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {project.verifiedMetrics.map((metric, i) => (
              <div key={i} className="p-3.5 rounded bg-surface/50 border border-surface-border">
                <div className="font-mono text-[11px] text-muted-dim uppercase tracking-wider mb-1">
                  {metric.label}
                </div>
                <div className="font-heading text-lg font-bold text-primary-text">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-text mt-0.5">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem & Solution Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 rounded bg-surface/30 border border-surface-border">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-rose uppercase tracking-wider mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-rose" />
              The Problem Context
            </div>
            <p className="text-sm text-muted-text leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded bg-surface/30 border border-surface-border">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan uppercase tracking-wider mb-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              Architectural Solution
            </div>
            <p className="text-sm text-muted-text leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Individual Contribution */}
        <div className="mb-8">
          <div className="flex items-center gap-2 font-heading text-lg font-semibold text-primary-text mb-4">
            <CheckCircle2 className="w-5 h-5 text-accent-violet" />
            <h3>Direct Engineering Contribution</h3>
          </div>
          <div className="space-y-2.5">
            {project.individualContribution.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded bg-surface/20 border border-surface-border/60">
                <span className="font-mono text-xs text-accent-violet font-semibold mt-0.5 shrink-0">
                  [{String(index + 1).padStart(2, '0')}]
                </span>
                <p className="text-sm text-muted-text leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Trade-Offs & Decisions */}
        <div className="mb-8">
          <div className="flex items-center gap-2 font-heading text-lg font-semibold text-primary-text mb-4">
            <Split className="w-5 h-5 text-accent-cyan" />
            <h3>Key Engineering Decisions & Trade-Offs</h3>
          </div>
          <div className="space-y-4">
            {project.engineeringDecisions.map((trade, idx) => (
              <div key={idx} className="p-4 rounded bg-surface/30 border border-surface-border space-y-2">
                <div className="font-mono text-sm font-semibold text-primary-text">
                  Decision: {trade.decision}
                </div>
                <div className="text-xs text-muted-text leading-relaxed">
                  <strong className="text-accent-cyan font-mono">Rationale:</strong> {trade.rationale}
                </div>
                <div className="text-xs text-muted-dim leading-relaxed border-t border-surface-border/40 pt-2">
                  <strong className="text-accent-rose font-mono">Trade-off Accepted:</strong> {trade.tradeOff}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Layers Breakdown */}
        {project.architectureLayers && (
          <div className="mb-8">
            <div className="flex items-center gap-2 font-heading text-lg font-semibold text-primary-text mb-4">
              <Layers className="w-5 h-5 text-accent-violet" />
              <h3>System Boundaries & Layering</h3>
            </div>
            <div className="border border-surface-border rounded overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-surface text-muted-text border-b border-surface-border">
                  <tr>
                    <th className="p-3">Layer</th>
                    <th className="p-3">Technology</th>
                    <th className="p-3">Responsibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border/60">
                  {project.architectureLayers.map((layer, lIdx) => (
                    <tr key={lIdx} className="hover:bg-surface/30">
                      <td className="p-3 font-semibold text-accent-violet">{layer.layer}</td>
                      <td className="p-3 text-accent-cyan">{layer.technology}</td>
                      <td className="p-3 text-muted-text">{layer.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Technology Stack List */}
        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-wider text-muted-dim mb-3">
            TECHNOLOGIES EMPLOYED
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, tIdx) => (
              <div
                key={tIdx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface/60 border border-surface-border text-xs"
              >
                <span className="font-medium text-primary-text">{tech.name}</span>
                <span className="text-[10px] text-muted-dim font-mono">({tech.role})</span>
              </div>
            ))}
          </div>
        </div>

        {/* External Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-surface-border">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-surface hover:bg-surface-elevated border border-surface-border text-primary-text font-mono text-xs tracking-wide transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-accent-violet" />
            Inspect GitHub Repository
            <ExternalLink className="w-3.5 h-3.5 text-muted-dim" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-muted-text hover:text-primary-text font-mono text-xs transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
