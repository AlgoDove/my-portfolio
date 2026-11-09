import React, { useState } from 'react';
import { 
  Network, 
  Server, 
  Database, 
  ShieldCheck, 
  ChevronRight, 
  Compass, 
  Cpu,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AWS_EXPLORATION_SCOPE } from '../../data/portfolioData';
import type { AwsServiceItem } from '../../types/portfolio';

interface InfraZone {
  code: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  zoneId: string;
}

export const CloudInfrastructureSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>('vpc');

  const infraZones: InfraZone[] = [
    {
      code: 'ZONE_01 // INGRESS',
      title: 'Networking & Ingress Gateway',
      description: 'Network perimeter, subnet isolation, route tables, and load distribution.',
      icon: <Network className="w-4 h-4 text-accent-cyan" />,
      zoneId: 'ZONE_01 // INGRESS'
    },
    {
      code: 'ZONE_02 // COMPUTE',
      title: 'Compute & Container Runtime',
      description: 'Managed container orchestration, serverless execution, and container image registries.',
      icon: <Server className="w-4 h-4 text-accent-violet" />,
      zoneId: 'ZONE_02 // COMPUTE'
    },
    {
      code: 'ZONE_03 // PERSISTENCE',
      title: 'Persistence & Object Store',
      description: 'Relational ACID persistence, automated backups, and encrypted asset storage.',
      icon: <Database className="w-4 h-4 text-accent-rose" />,
      zoneId: 'ZONE_03 // PERSISTENCE'
    },
    {
      code: 'ZONE_04 // GOVERNANCE',
      title: 'Governance, Secrets & Observability',
      description: 'Zero-trust IAM policy trees, automated credential rotation, and telemetry logging.',
      icon: <ShieldCheck className="w-4 h-4 text-accent-cyan" />,
      zoneId: 'ZONE_04 // GOVERNANCE'
    }
  ];

  const activeService: AwsServiceItem = 
    AWS_EXPLORATION_SCOPE.find(s => s.id === activeServiceId) || AWS_EXPLORATION_SCOPE[0];

  const handleSelectService = (id: string) => {
    setActiveServiceId(id);
    // On mobile, scroll the telemetry panel into view after a brief delay
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const el = document.getElementById('telemetry-readout');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 80);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveServiceId(id);
    }
  };

  // Helper to find service by partial string for interactive related tags
  const findMatchingService = (relString: string): AwsServiceItem | undefined => {
    return AWS_EXPLORATION_SCOPE.find(s => 
      relString.toLowerCase().includes(s.name.toLowerCase()) ||
      relString.toLowerCase().includes(s.category.toLowerCase()) ||
      (s.id === 'secrets-manager' && relString.toLowerCase().includes('secrets manager')) ||
      (s.id === 'ecs-fargate' && relString.toLowerCase().includes('ecs')) ||
      (s.id === 'alb' && relString.toLowerCase().includes('load balancer'))
    );
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Hands-on Lab Exploration':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'Architecture Blueprinting':
        return 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30';
      case 'Configuration & Policy Design':
        return 'bg-accent-violet/15 text-accent-violet border-accent-violet/30';
      case 'Local-to-Cloud Migration':
        return 'bg-accent-rose/15 text-accent-rose border-accent-rose/30';
      default:
        return 'bg-surface text-muted-text border-surface-border';
    }
  };

  return (
    <section id="cloud" className="py-24 bg-midnight/35 relative border-b border-surface-border/40 scroll-mt-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-xs sm:text-[13px] text-accent-rose tracking-[0.2em] uppercase block font-semibold">
              05 // CLOUD INFRASTRUCTURE & ACTIVE LEARNING
            </span>
            <h2 className="font-heading text-3xl sm:text-[36px] lg:text-[42px] font-bold text-primary-text tracking-tight">
              Systems Hosting & Operational Topologies
            </h2>
          </div>
          <div className="font-mono text-xs text-accent-rose px-3 py-1.5 rounded bg-accent-rose/10 border border-accent-rose/30 inline-flex items-center gap-2 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-accent-rose animate-pulse" />
            <span className="font-semibold tracking-wider">LEARNING SCOPE // HANDS-ON ROADMAP</span>
          </div>
        </div>

        {/* Narrative & Clear Staging Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-[13px] text-primary-text font-semibold uppercase">
              <Compass className="w-4 h-4 text-accent-rose" />
              <span>Production Experience vs. Active Labs</span>
            </div>
            
            <p className="editorial-body editorial-body-prose leading-relaxed">
              While my completed projects demonstrate hands-on containerization with <strong className="text-primary-text font-semibold">Docker</strong>, continuous integration via <strong className="text-primary-text font-semibold">GitHub Actions</strong>, and managed persistence on <strong className="text-primary-text font-semibold">Neon PostgreSQL</strong>, I am actively expanding into cloud-native AWS architecture.
            </p>
            
            <p className="editorial-secondary max-w-xl leading-relaxed">
              I distinguish strictly between technologies verified in production/internship work and cloud services currently explored in laboratory environments. The 10 services below constitute my focused infrastructure learning roadmap.
            </p>
          </div>

          {/* 3-Tier Experience Distinction Badges */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 border border-surface-border bg-surface/25 space-y-1.5 rounded-sm">
              <span className="font-mono text-[11px] text-accent-cyan uppercase font-bold tracking-wider block">01. REPO PROVEN</span>
              <div className="font-mono text-[13px] font-bold text-primary-text">Docker & CI/CD</div>
              <p className="text-xs text-muted-text leading-relaxed">Multi-stage builds, GitHub Actions pipelines, Neon DB.</p>
            </div>

            <div className="p-4 border border-surface-border bg-surface/25 space-y-1.5 rounded-sm">
              <span className="font-mono text-[11px] text-accent-violet uppercase font-bold tracking-wider block">02. JSC INTERNSHIP</span>
              <div className="font-mono text-[13px] font-bold text-primary-text">Judicial ERP</div>
              <p className="text-xs text-muted-text leading-relaxed">Operational court registries, test suites, legacy data migration.</p>
            </div>

            <div className="p-4 border border-accent-rose/35 bg-surface/25 space-y-1.5 rounded-sm shadow-sm">
              <span className="font-mono text-[11px] text-accent-rose uppercase font-bold tracking-wider block">03. ACTIVE LABS</span>
              <div className="font-mono text-[13px] font-bold text-primary-text">AWS Native</div>
              <p className="text-xs text-muted-text leading-relaxed">Hands-on architecture labs across 10 core services.</p>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* STRUCTURED TECHNICAL VISUALIZATION / INFRASTRUCTURE MAP        */}
        {/* ============================================================== */}
        <div className="border border-surface-border/80 bg-midnight/80 p-5 sm:p-8 backdrop-blur-sm shadow-xl rounded-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-surface-border/50 gap-2 font-mono text-xs text-muted-dim">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-rose animate-pulse" />
              <span className="text-primary-text font-bold tracking-wider uppercase text-xs sm:text-[13px]">
                INFRASTRUCTURE TOPOLOGY MAP
              </span>
            </div>
            <span className="text-accent-rose font-semibold tracking-wide flex items-center gap-1.5 text-xs">
              <span>SELECT ANY SERVICE TO INSPECT LAB TELEMETRY</span>
              <ChevronRight className="w-3.5 h-3.5 inline animate-pulse" />
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left 4 Grouped Zones (7 cols on desktop, full width on mobile) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5" role="region" aria-label="AWS Infrastructure Zones">
              {infraZones.map((zone) => {
                const zoneServices = AWS_EXPLORATION_SCOPE.filter(s => s.zone === zone.zoneId);
                return (
                  <div
                    key={zone.code}
                    className="border border-surface-border/70 bg-surface/20 p-4 sm:p-5 space-y-3.5 rounded-sm transition-colors hover:border-surface-border-strong"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded bg-surface/60 border border-surface-border">
                          {zone.icon}
                        </div>
                        <span className="font-heading font-bold text-sm sm:text-[15px] text-primary-text tracking-tight">
                          {zone.title}
                        </span>
                      </div>
                      <span className="font-mono text-[10.5px] text-muted-dim tracking-wider uppercase bg-midnight px-2 py-0.5 border border-surface-border/40 rounded">
                        {zone.code}
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-muted-text leading-relaxed">
                      {zone.description}
                    </p>

                    {/* Service Buttons: Minimum 44px tap targets */}
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {zoneServices.map((svc) => {
                        const isSelected = activeService.id === svc.id;
                        return (
                          <button
                            key={svc.id}
                            onClick={() => handleSelectService(svc.id)}
                            onKeyDown={(e) => handleKeyDown(e, svc.id)}
                            role="button"
                            tabIndex={0}
                            aria-pressed={isSelected}
                            aria-label={`Inspect ${svc.name} telemetry`}
                            className={`min-h-[44px] px-4 py-2.5 font-mono text-xs sm:text-[12.5px] transition-all flex items-center gap-2 rounded-sm select-none outline-none focus-visible:ring-2 focus-visible:ring-accent-rose ${
                              isSelected
                                ? 'bg-accent-rose text-obsidian font-bold shadow-[0_0_16px_rgba(215,124,203,0.45)] ring-1 ring-accent-rose transform scale-[1.02]'
                                : 'bg-surface/60 border border-surface-border text-primary-text hover:text-white hover:border-accent-rose/60 hover:bg-surface/80'
                            }`}
                          >
                            <Cpu className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-obsidian' : 'text-accent-rose'}`} />
                            <span className="font-medium tracking-tight">{svc.name}</span>
                            {isSelected && <ChevronRight className="w-3.5 h-3.5 shrink-0 ml-0.5" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Service Inspector Telemetry Readout (5 cols on desktop, sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 w-full order-2 lg:order-none" id="telemetry-readout" aria-live="polite">
              {/* Mobile: Small hint bar above telemetry */}
              <div className="lg:hidden mb-3 py-2 px-3 bg-accent-rose/10 border border-accent-rose/25 rounded-sm flex items-center gap-2 font-mono text-xs text-accent-rose">
                <ChevronRight className="w-3.5 h-3.5 rotate-90 shrink-0" />
                <span>Telemetry for selected service below</span>
              </div>
              <div className="border border-accent-rose/50 bg-midnight/95 p-6 sm:p-7 space-y-5 rounded-sm relative shadow-[0_0_30px_-5px_rgba(215,124,203,0.18)] overflow-hidden backdrop-blur-md">
                
                {/* Subtle visual glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-rose/10 rounded-full blur-2xl pointer-events-none" />

                {/* Telemetry Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-surface-border/60 text-[11px] font-mono text-muted-dim">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent-rose" />
                    <span className="text-accent-rose uppercase font-bold tracking-wider">
                      SERVICE LAB TELEMETRY
                    </span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getStatusBadgeColor(activeService.learningStatus)}`}>
                    {activeService.learningStatus}
                  </span>
                </div>

                {/* 1. Service Name & Category */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-muted-dim uppercase tracking-wider">
                      {activeService.category}
                    </span>
                    <span className="font-mono text-[10.5px] text-accent-cyan">
                      {activeService.zone.split('//')[1]?.trim() || 'CLOUD'}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-[26px] font-bold text-primary-text tracking-tight flex items-center justify-between">
                    <span>{activeService.name}</span>
                  </h3>
                </div>

                {/* 2. Plain-English Beginner-Friendly Explanation */}
                <div className="space-y-1.5 bg-surface/30 p-3.5 border border-surface-border/60 rounded-sm">
                  <div className="font-mono text-[11px] text-accent-violet font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Plain English Overview</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-primary-text/90 leading-relaxed font-sans">
                    {activeService.explanation}
                  </p>
                </div>

                {/* 3. Purpose in Proposed Architecture */}
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] text-accent-cyan uppercase font-semibold tracking-wider">
                    ROLE IN PORTFOLIO ARCHITECTURE
                  </div>
                  <p className="editorial-secondary text-xs sm:text-[13px] leading-relaxed">
                    {activeService.purpose}
                  </p>
                </div>

                {/* 4. Current Hands-on Lab Focus Area */}
                <div className="p-3.5 border-l-2 border-accent-rose bg-surface/20 space-y-1.5 rounded-r-sm">
                  <div className="font-mono text-[10.5px] text-accent-rose uppercase font-bold tracking-wider">
                    CURRENT HANDS-ON LAB FOCUS
                  </div>
                  <p className="text-xs text-primary-text leading-relaxed font-mono">
                    {activeService.focusArea}
                  </p>
                </div>

                {/* 5. Explored Concepts Tags */}
                <div className="space-y-2">
                  <div className="font-mono text-[11px] text-muted-dim uppercase font-semibold tracking-wider">
                    CORE CONCEPTS UNDER LAB STUDY
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.concepts.map((concept, cIdx) => (
                      <span
                        key={cIdx}
                        className="font-mono text-[11px] px-2.5 py-1 bg-surface/50 border border-surface-border text-primary-text/90 rounded-sm"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 6. Connected & Related Services (Clickable for discovery) */}
                <div className="space-y-2 pt-1 border-t border-surface-border/50">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-muted-dim uppercase font-semibold tracking-wider">
                      CONNECTED SERVICES
                    </span>
                    <span className="font-mono text-[10px] text-muted-dim">TAP TO INSPECT</span>
                  </div>
                  <div className="space-y-1.5">
                    {activeService.relatedServices.map((rel, rIdx) => {
                      const matched = findMatchingService(rel);
                      return (
                        <div
                          key={rIdx}
                          onClick={() => matched && handleSelectService(matched.id)}
                          role={matched ? 'button' : undefined}
                          tabIndex={matched ? 0 : undefined}
                          onKeyDown={(e) => matched && handleKeyDown(e, matched.id)}
                          className={`text-xs p-2 rounded-sm border transition-all flex items-start justify-between gap-2 ${
                            matched
                              ? 'border-surface-border bg-surface/20 hover:border-accent-rose/60 hover:bg-surface/40 cursor-pointer text-primary-text'
                              : 'border-surface-border/40 bg-surface/10 text-muted-text'
                          }`}
                        >
                          <span className="leading-snug text-xs sm:text-[12.5px] font-sans">
                            {rel}
                          </span>
                          {matched && (
                            <ArrowRight className="w-3.5 h-3.5 text-accent-rose shrink-0 mt-0.5" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="pt-3 border-t border-surface-border/60 flex items-center justify-between text-[10.5px] font-mono text-muted-dim">
                  <span>SYSTEM: AWS ARCHITECTURE LABS</span>
                  <span className="text-accent-rose font-semibold">UNDERGRADUATE SCOPE</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
