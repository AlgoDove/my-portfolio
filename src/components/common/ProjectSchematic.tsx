import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { DiagramLightbox } from './DiagramLightbox';

interface ProjectSchematicProps {
  projectId: string;
  imagePath?: string;
  title: string;
  className?: string;
}

export const ProjectSchematic: React.FC<ProjectSchematicProps> = ({
  projectId,
  imagePath,
  title,
  className = '',
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const renderSvg = () => {
    switch (projectId) {
      case 'procura':
        return (
          <svg viewBox="0 0 460 220" className="w-full h-auto text-primary-text" fill="none">
            {/* Presentation Tier */}
            <rect x="10" y="20" width="100" height="45" rx="3" fill="#27213A" stroke="#79C9DF" strokeWidth="1" />
            <text x="60" y="42" fill="#F4F0FA" fontSize="10" textAnchor="middle" fontWeight="600">React 18 (Vite)</text>
            <text x="60" y="55" fill="#AAA2B9" fontSize="8" textAnchor="middle">TanStack Query</text>

            <rect x="10" y="80" width="100" height="45" rx="3" fill="#27213A" stroke="#A987F5" strokeWidth="1" />
            <text x="60" y="102" fill="#F4F0FA" fontSize="10" textAnchor="middle" fontWeight="600">Flutter 3.x</text>
            <text x="60" y="115" fill="#AAA2B9" fontSize="8" textAnchor="middle">Mobile Client</text>

            {/* Animated Connecting lines */}
            <path d="M 110 42 L 150 75" stroke="#79C9DF" strokeWidth="1.4" className="flow-animated" />
            <path d="M 110 102 L 150 75" stroke="#A987F5" strokeWidth="1.4" className="flow-animated" />

            {/* Central ASP.NET Core Modular Monolith */}
            <rect x="150" y="20" width="170" height="175" rx="5" fill="#1D1930" stroke="#A987F5" strokeWidth="1.5" />
            <rect x="150" y="20" width="170" height="24" rx="3" fill="#27213A" />
            <text x="235" y="36" fill="#F4F0FA" fontSize="9.5" textAnchor="middle" fontWeight="bold">ASP.NET Core 8 Web API</text>

            {/* Sub-modules inside Monolith */}
            <rect x="160" y="52" width="150" height="26" rx="3" fill="#27213A" stroke="#A987F5" strokeOpacity="0.3" />
            <text x="235" y="68" fill="#F4F0FA" fontSize="8.5" textAnchor="middle">JWT Auth & RBAC (4 Roles)</text>

            <rect x="160" y="84" width="150" height="26" rx="3" fill="#27213A" stroke="#79C9DF" strokeOpacity="0.4" />
            <text x="235" y="100" fill="#79C9DF" fontSize="8.5" textAnchor="middle" fontWeight="bold">Procurement Request Module</text>

            <rect x="160" y="116" width="150" height="26" rx="3" fill="#27213A" stroke="#D77CCB" strokeOpacity="0.3" />
            <text x="235" y="132" fill="#F4F0FA" fontSize="8.5" textAnchor="middle">EF Core 8 (AsNoTracking)</text>

            <rect x="160" y="148" width="150" height="38" rx="3" fill="#171426" stroke="#A987F5" strokeDasharray="2 2" />
            <text x="235" y="162" fill="#A987F5" fontSize="8" textAnchor="middle">Deterministic Guardrails</text>
            <text x="235" y="176" fill="#AAA2B9" fontSize="7.5" textAnchor="middle">ValidateDraftDataTool</text>

            {/* Persistence & AI Targets with animated flow paths */}
            <path d="M 320 100 L 355 70" stroke="#79C9DF" strokeWidth="1.4" className="flow-animated" />
            <rect x="355" y="45" width="95" height="45" rx="3" fill="#27213A" stroke="#79C9DF" strokeWidth="1" />
            <text x="402" y="66" fill="#F4F0FA" fontSize="9" textAnchor="middle" fontWeight="600">PostgreSQL</text>
            <text x="402" y="79" fill="#AAA2B9" fontSize="8" textAnchor="middle">Neon / Local</text>

            <path d="M 320 165 L 355 165" stroke="#D77CCB" strokeWidth="1.4" className="flow-animated-reverse" />
            <rect x="355" y="142" width="95" height="45" rx="3" fill="#27213A" stroke="#D77CCB" strokeWidth="1" />
            <text x="402" y="162" fill="#F4F0FA" fontSize="9" textAnchor="middle" fontWeight="600">Google Gemini</text>
            <text x="402" y="175" fill="#D77CCB" fontSize="8" textAnchor="middle">Agentic Subsystem</text>

            {/* Test validation badge */}
            <rect x="10" y="150" width="100" height="40" rx="3" fill="#171426" stroke="#79C9DF" strokeWidth="0.8" />
            <text x="60" y="167" fill="#79C9DF" fontSize="8.5" textAnchor="middle" fontWeight="bold">217 xUnit Tests</text>
            <text x="60" y="179" fill="#AAA2B9" fontSize="7.5" textAnchor="middle">0 Failures Passing</text>
          </svg>
        );

      case 'approval-workflow':
        return (
          <svg viewBox="0 0 460 200" className="w-full h-auto text-primary-text" fill="none">
            {/* Step 1: Employee */}
            <rect x="10" y="60" width="90" height="50" rx="3" fill="#27213A" stroke="#A987F5" strokeWidth="1" />
            <text x="55" y="83" fill="#F4F0FA" fontSize="9" textAnchor="middle" fontWeight="bold">1. Employee</text>
            <text x="55" y="97" fill="#AAA2B9" fontSize="8" textAnchor="middle">POST /requests</text>

            <path d="M 100 85 L 130 85" stroke="#A987F5" strokeWidth="1.5" className="flow-animated" />

            {/* Step 2: Engine */}
            <rect x="130" y="30" width="130" height="120" rx="5" fill="#1D1930" stroke="#79C9DF" strokeWidth="1.2" />
            <rect x="130" y="30" width="130" height="22" rx="3" fill="#27213A" />
            <text x="195" y="45" fill="#79C9DF" fontSize="8.5" textAnchor="middle" fontWeight="bold">Spring Boot 3 Engine</text>

            <rect x="140" y="60" width="110" height="24" rx="3" fill="#27213A" />
            <text x="195" y="75" fill="#F4F0FA" fontSize="8" textAnchor="middle">Spring Security JWT</text>

            <rect x="140" y="90" width="110" height="24" rx="3" fill="#27213A" />
            <text x="195" y="105" fill="#F4F0FA" fontSize="8" textAnchor="middle">Step State Validator</text>

            <rect x="140" y="120" width="110" height="22" rx="3" fill="#171426" stroke="#A987F5" strokeOpacity="0.4" />
            <text x="195" y="134" fill="#A987F5" fontSize="7.5" textAnchor="middle">PENDING → IN_PROG</text>

            <path d="M 260 85 L 290 85" stroke="#79C9DF" strokeWidth="1.5" className="flow-animated" />

            {/* Step 3: Multi-role Approvers */}
            <rect x="290" y="45" width="75" height="36" rx="3" fill="#27213A" stroke="#A987F5" strokeWidth="1" />
            <text x="327" y="62" fill="#F4F0FA" fontSize="8" textAnchor="middle" fontWeight="bold">MANAGER</text>
            <text x="327" y="73" fill="#AAA2B9" fontSize="7" textAnchor="middle">Step 1 Verify</text>

            <rect x="290" y="95" width="75" height="36" rx="3" fill="#27213A" stroke="#D77CCB" strokeWidth="1" />
            <text x="327" y="112" fill="#F4F0FA" fontSize="8" textAnchor="middle" fontWeight="bold">ADMIN</text>
            <text x="327" y="123" fill="#AAA2B9" fontSize="7" textAnchor="middle">Final Decision</text>

            {/* Step 4: Database & Audit */}
            <path d="M 365 65 L 395 75" stroke="#79C9DF" strokeWidth="1.3" className="flow-animated" />
            <path d="M 365 115 L 395 105" stroke="#79C9DF" strokeWidth="1.3" className="flow-animated" />

            <rect x="395" y="60" width="55" height="60" rx="3" fill="#171426" stroke="#79C9DF" strokeWidth="1.2" />
            <text x="422" y="80" fill="#79C9DF" fontSize="8" textAnchor="middle" fontWeight="bold">Postgres</text>
            <text x="422" y="94" fill="#F4F0FA" fontSize="7" textAnchor="middle">Requests</text>
            <text x="422" y="106" fill="#A987F5" fontSize="7" textAnchor="middle">Audit Logs</text>
          </svg>
        );

      case 'fixmyarea':
        return (
          <svg viewBox="0 0 460 200" className="w-full h-auto text-primary-text" fill="none">
            {/* Citizens Form */}
            <rect x="10" y="35" width="115" height="55" rx="3" fill="#27213A" stroke="#79C9DF" strokeWidth="1" />
            <text x="67" y="55" fill="#F4F0FA" fontSize="9" textAnchor="middle" fontWeight="bold">Citizen Reporter</text>
            <text x="67" y="68" fill="#79C9DF" fontSize="7.5" textAnchor="middle">No Sign-up Friction</text>
            <text x="67" y="80" fill="#AAA2B9" fontSize="7" textAnchor="middle">POST /api/issues</text>

            {/* Moderator Form */}
            <rect x="10" y="115" width="115" height="55" rx="3" fill="#27213A" stroke="#D77CCB" strokeWidth="1" />
            <text x="67" y="135" fill="#F4F0FA" fontSize="9" textAnchor="middle" fontWeight="bold">Community Mod</text>
            <text x="67" y="148" fill="#D77CCB" fontSize="7.5" textAnchor="middle">HMAC Token Header</text>
            <text x="67" y="160" fill="#AAA2B9" fontSize="7" textAnchor="middle">PUT /api/issues/id/status</text>

            {/* Backend Server Control */}
            <path d="M 125 62 L 160 85" stroke="#79C9DF" strokeWidth="1.4" className="flow-animated" />
            <path d="M 125 142 L 160 115" stroke="#D77CCB" strokeWidth="1.4" className="flow-animated" />

            <rect x="160" y="25" width="165" height="150" rx="5" fill="#1D1930" stroke="#A987F5" strokeWidth="1.5" />
            <rect x="160" y="25" width="165" height="24" rx="3" fill="#27213A" />
            <text x="242" y="41" fill="#F4F0FA" fontSize="9" textAnchor="middle" fontWeight="bold">ASP.NET Core 8 Web API</text>

            <rect x="170" y="58" width="145" height="28" rx="3" fill="#27213A" stroke="#79C9DF" strokeOpacity="0.4" />
            <text x="242" y="71" fill="#79C9DF" fontSize="8" textAnchor="middle" fontWeight="bold">Server-Authoritative Status</text>
            <text x="242" y="81" fill="#AAA2B9" fontSize="7" textAnchor="middle">Locked to 'Reported' + UTC</text>

            <rect x="170" y="94" width="145" height="28" rx="3" fill="#27213A" stroke="#D77CCB" strokeOpacity="0.4" />
            <text x="242" y="107" fill="#D77CCB" fontSize="8" textAnchor="middle" fontWeight="bold">HMAC Token Verifier</text>
            <text x="242" y="117" fill="#AAA2B9" fontSize="7" textAnchor="middle">Constant-Time Comparison</text>

            <rect x="170" y="130" width="145" height="32" rx="3" fill="#171426" />
            <text x="242" y="144" fill="#A987F5" fontSize="7.5" textAnchor="middle">Multi-Attribute Search</text>
            <text x="242" y="154" fill="#AAA2B9" fontSize="7" textAnchor="middle">Negombo, Kandy, Colombo 05</text>

            {/* Cloud Persistence with animated connection */}
            <path d="M 325 100 L 355 100" stroke="#79C9DF" strokeWidth="1.5" className="flow-animated" />
            <rect x="355" y="65" width="95" height="70" rx="3" fill="#27213A" stroke="#79C9DF" strokeWidth="1" />
            <text x="402" y="88" fill="#79C9DF" fontSize="8.5" textAnchor="middle" fontWeight="bold">Neon DB</text>
            <text x="402" y="101" fill="#F4F0FA" fontSize="7.5" textAnchor="middle">Serverless Postgres</text>
            <text x="402" y="115" fill="#AAA2B9" fontSize="7" textAnchor="middle">+ SQLite Offline</text>
            <text x="402" y="126" fill="#A987F5" fontSize="6.5" textAnchor="middle">Status & Category Index</text>
          </svg>
        );

      case 'fraud-detection':
        return (
          <svg viewBox="0 0 460 200" className="w-full h-auto text-primary-text" fill="none">
            {/* Input Vector */}
            <rect x="10" y="45" width="85" height="100" rx="3" fill="#27213A" stroke="#A987F5" strokeWidth="1" />
            <text x="52" y="65" fill="#F4F0FA" fontSize="8" textAnchor="middle" fontWeight="bold">Raw Payment</text>
            <text x="52" y="82" fill="#AAA2B9" fontSize="7" textAnchor="middle">Amount ($)</text>
            <text x="52" y="98" fill="#AAA2B9" fontSize="7" textAnchor="middle">User 1h Count</text>
            <text x="52" y="114" fill="#AAA2B9" fontSize="7" textAnchor="middle">User 24h Count</text>
            <text x="52" y="130" fill="#AAA2B9" fontSize="7" textAnchor="middle">Velocity Delta</text>

            {/* Flow to Autoencoder with animated stroke */}
            <path d="M 95 95 L 125 95" stroke="#A987F5" strokeWidth="1.4" className="flow-animated" />

            {/* Autoencoder Compression & Decompression */}
            <polygon points="125,50 190,75 190,115 125,140" fill="#1D1930" stroke="#79C9DF" strokeWidth="1" />
            <text x="155" y="98" fill="#79C9DF" fontSize="7.5" textAnchor="middle">Encoder</text>

            {/* Latent Bottleneck */}
            <rect x="190" y="78" width="25" height="34" rx="2" fill="#A987F5" />
            <text x="202" y="98" fill="#0C0B14" fontSize="7" textAnchor="middle" fontWeight="bold">Latent</text>

            <polygon points="215,75 280,50 280,140 215,115" fill="#1D1930" stroke="#79C9DF" strokeWidth="1" />
            <text x="247" y="98" fill="#79C9DF" fontSize="7.5" textAnchor="middle">Decoder</text>

            {/* Reconstruction Vector with animated stroke */}
            <path d="M 280 95 L 305 95" stroke="#79C9DF" strokeWidth="1.4" className="flow-animated" />

            {/* Reconstruction Error Calculation */}
            <circle cx="330" cy="95" r="22" fill="#27213A" stroke="#D77CCB" strokeWidth="1.5" />
            <text x="330" y="92" fill="#D77CCB" fontSize="7.5" textAnchor="middle" fontWeight="bold">MSE Error</text>
            <text x="330" y="103" fill="#AAA2B9" fontSize="6.5" textAnchor="middle">||X - X'||²</text>

            {/* Decision Threshold with animated stroke */}
            <path d="M 352 95 L 375 95" stroke="#D77CCB" strokeWidth="1.4" className="flow-animated" />
            <rect x="375" y="55" width="75" height="80" rx="3" fill="#171426" stroke="#A987F5" strokeWidth="1" />
            <text x="412" y="75" fill="#F4F0FA" fontSize="8" textAnchor="middle" fontWeight="bold">Evaluation</text>
            <text x="412" y="92" fill="#79C9DF" fontSize="7.5" textAnchor="middle">AUC: 0.9999</text>
            <text x="412" y="108" fill="#79C9DF" fontSize="7.5" textAnchor="middle">Recall: 1.0</text>
            <text x="412" y="124" fill="#D77CCB" fontSize="7" textAnchor="middle">Anomaly Flag</text>
          </svg>
        );

      default:
        return null;
    }
  };

  if (imagePath && !imgFailed) {
    return (
      <>
        <div className={`relative overflow-hidden rounded border border-surface-border bg-midnight/80 group ${className}`}>
          <img
            src={imagePath}
            alt={`${title} visual architecture`}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent pointer-events-none" />
          
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute top-2.5 right-2.5 min-h-[36px] min-w-[36px] p-2 rounded bg-obsidian/80 hover:bg-obsidian border border-surface-border text-accent-cyan hover:text-white transition-all shadow-md flex items-center gap-1.5 font-mono text-[11px]"
            title="Inspect full diagram in lightbox"
            aria-label="Inspect full diagram in lightbox"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">INSPECT</span>
          </button>

          <div className="absolute bottom-2 left-3 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="font-mono text-[10px] text-muted-text uppercase tracking-wider">
              Verified Architecture
            </span>
          </div>
        </div>

        <DiagramLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          title={title}
          projectId={projectId}
        >
          <div className="relative rounded-lg overflow-hidden border border-surface-border bg-midnight shadow-2xl p-2 sm:p-4">
            <img
              src={imagePath}
              alt={`${title} visual architecture`}
              className="max-h-[75vh] w-auto mx-auto object-contain rounded"
            />
          </div>
        </DiagramLightbox>
      </>
    );
  }

  return (
    <>
      <div className={`relative overflow-hidden rounded border border-surface-border bg-midnight/90 p-4 font-mono select-none flex flex-col justify-between ${className}`}>
        {/* Background technical grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
        
        {/* Header status line */}
        <div className="relative z-10 flex items-center justify-between border-b border-surface-border/60 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[10px] font-semibold text-primary-text tracking-wider uppercase">
              TELEMETRY // {projectId.toUpperCase()}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Visual indicator to expand/inspect fullscreen */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="min-h-[32px] inline-flex items-center gap-1.5 text-[10px] text-accent-cyan hover:text-white px-2.5 py-1 rounded bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 transition-all font-mono font-semibold"
              title="Inspect full diagram in interactive zoomable lightbox"
              aria-label={`Inspect ${title} diagram in fullscreen lightbox`}
            >
              <Maximize2 className="w-3 h-3 text-accent-cyan" />
              <span>EXPAND</span>
            </button>
            <span className="text-[9.5px] text-accent-cyan/85 px-1.5 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20 hidden xs:inline-block">
              DATAFLOW LIVE
            </span>
          </div>
        </div>

        {/* Dynamic SVG Schematic with Animated Connection Paths */}
        <div className="relative z-10 my-auto py-2">
          {renderSvg()}
        </div>

        {/* Footer metadata line */}
        <div className="relative z-10 flex items-center justify-between border-t border-surface-border/60 pt-2 mt-2 text-[9.5px] text-muted-dim">
          <span>ARCHITECTURAL VECTOR SPEC</span>
          <span className="text-accent-violet">VERIFIED BOUNDARY</span>
        </div>
      </div>

      {/* Interactive Fullscreen Lightbox Modal */}
      <DiagramLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={title}
        projectId={projectId}
      >
        <div className="border border-surface-border/80 bg-midnight/95 p-4 sm:p-8 rounded-lg shadow-2xl">
          {renderSvg()}
        </div>
      </DiagramLightbox>
    </>
  );
};
