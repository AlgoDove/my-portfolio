import React, { useState } from 'react';
import { Download, FileText, Check, Copy, X, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadTriggered(true);
    // Programmatically trigger download link
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvPath;
    link.download = PERSONAL_INFO.cvFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyPath = () => {
    navigator.clipboard.writeText(`public/files/${PERSONAL_INFO.cvFilename}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-midnight border border-surface-border rounded-lg shadow-2xl p-6 font-sans text-primary-text"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-muted-text hover:text-primary-text hover:bg-surface transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4 border-b border-surface-border/60 pb-3">
          <div className="p-2.5 rounded bg-accent-violet/10 border border-accent-violet/20 text-accent-violet">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="cv-modal-title" className="font-heading text-lg font-semibold text-primary-text">
              Download Résumé (PDF)
            </h3>
            <p className="font-mono text-xs text-muted-text">
              Gokulaselvan I — Software Engineer
            </p>
          </div>
        </div>

        {/* Content Details */}
        <div className="space-y-4 text-sm text-muted-text">
          <p>
            Download the engineering résumé for Gokulaselvan I, covering backend architecture, academic record at SLIIT (WGPA 3.85), and technical internship work at the Sri Lanka Judicial Service Commission.
          </p>

          <div className="p-3.5 rounded bg-surface/50 border border-surface-border text-xs font-mono space-y-1.5">
            <div className="flex items-center justify-between text-muted-dim">
              <span>TARGET FILE:</span>
              <span className="text-accent-cyan">{PERSONAL_INFO.cvFilename}</span>
            </div>
            <div className="flex items-center justify-between text-muted-dim">
              <span>FORMAT:</span>
              <span>Portable Document Format (.pdf)</span>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-accent-violet hover:bg-accent-violet/90 text-obsidian font-semibold transition-all shadow-md font-mono text-xs uppercase tracking-wider"
            >
              <Download className="w-4 h-4" />
              Download Résumé (PDF)
            </button>
            <button
              onClick={copyPath}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded border border-surface-border hover:bg-surface text-primary-text font-mono text-xs transition-colors"
              title="Copy exact file upload path"
            >
              {copied ? <Check className="w-4 h-4 text-accent-cyan" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Path Copied' : 'Copy File Path'}
            </button>
          </div>

          {downloadTriggered && (
            <div className="p-2.5 rounded bg-accent-cyan/10 border border-accent-cyan/25 font-mono text-xs text-accent-cyan flex items-center gap-2">
              <Check className="w-3.5 h-3.5" />
              <span>Download initiated: {PERSONAL_INFO.cvPath}</span>
            </div>
          )}

          {/* Verification Notice / Instructions */}
          <div className="flex items-start gap-2 pt-2 text-[11px] text-muted-dim border-t border-surface-border/40">
            <AlertCircle className="w-4 h-4 shrink-0 text-accent-violet mt-0.5" />
            <p>
              If the physical PDF has not yet been copied to the web server, place <code className="text-accent-violet font-mono px-1 py-0.5 bg-surface rounded">Gokulaselvan-I-Resume.pdf</code> into <code className="text-accent-cyan font-mono px-1 py-0.5 bg-surface rounded">public/files/</code>. The application is wired to serve it immediately without code modifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
