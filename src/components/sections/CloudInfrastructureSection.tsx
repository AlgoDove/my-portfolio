import React, { useState } from 'react';
import { Cloud, Compass, Network, Server, Database, ShieldCheck, ChevronRight } from 'lucide-react';
import { AWS_EXPLORATION_SCOPE } from '../../data/portfolioData';

interface InfraZone {
  title: string;
  code: string;
  description: string;
  icon: React.ReactNode;
  services: string[];
}

export const CloudInfrastructureSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(AWS_EXPLORATION_SCOPE[0].name);

  // Grouped Infrastructure Topology Zones
  const infraZones: InfraZone[] = [
    {
      title: 'Networking & Ingress Gateway',
      code: 'ZONE_01 // INGRESS',
      description: 'Network perimeter, subnet isolation, route tables, and load distribution.',
      icon: <Network className="w-4 h-4 text-accent-cyan" />,
      services: ['Amazon VPC', 'Application Load Balancer']
    },
    {
      title: 'Compute & Container Runtime',
      code: 'ZONE_02 // COMPUTE',
      description: 'Managed container orchestration, serverless execution, and container image registries.',
      icon: <Server className="w-4 h-4 text-accent-violet" />,
      services: ['Amazon ECS (Fargate)', 'Amazon EC2', 'Amazon ECR']
    },
    {
      title: 'Persistence & Object Store',
      code: 'ZONE_03 // PERSISTENCE',
      description: 'Relational ACID persistence, automated backups, and encrypted asset storage.',
      icon: <Database className="w-4 h-4 text-accent-rose" />,
      services: ['Amazon RDS', 'Amazon S3']
    },
    {
      title: 'Governance, Secrets & Observability',
      code: 'ZONE_04 // GOVERNANCE',
      description: 'Zero-trust IAM policy trees, automated credential rotation, and telemetry logging.',
      icon: <ShieldCheck className="w-4 h-4 text-accent-cyan" />,
      services: ['AWS IAM', 'AWS Secrets Manager', 'Amazon CloudWatch']
    }
  ];

  const selectedServiceDetail = AWS_EXPLORATION_SCOPE.find(s => s.name === activeService) || AWS_EXPLORATION_SCOPE[0];

  return (
    <section id="cloud" className="py-24 bg-midnight/35 relative border-b border-surface-border/40 bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-[11px] text-accent-rose tracking-[0.2em] uppercase block">
              05 // CLOUD INFRASTRUCTURE & ACTIVE LEARNING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-text tracking-tight">
              Systems Hosting & Operational Topologies
            </h2>
          </div>
          <div className="font-mono text-[10px] text-accent-rose px-2.5 py-1 rounded bg-accent-rose/10 border border-accent-rose/25 inline-flex items-center gap-1.5 self-start sm:self-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-rose animate-pulse" />
            <span>LEARNING SCOPE // ACTIVE HANDS-ON ROADMAP</span>
          </div>
        </div>

        {/* Narrative & Clear Staging Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start">
          
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-primary-text font-semibold uppercase">
              <Compass className="w-4 h-4 text-accent-rose" />
              <span>Honest Technical Scope & Stage Distinctions</span>
            </div>
            
            <p className="editorial-body editorial-body-prose leading-relaxed">
              While my completed projects demonstrate hands-on containerization with <strong className="text-primary-text">Docker</strong>, continuous integration via <strong className="text-primary-text">GitHub Actions</strong>, and managed persistence on <strong className="text-primary-text">Neon PostgreSQL</strong>, I am actively expanding into cloud-native AWS architecture.
            </p>
            
            <p className="text-xs text-muted-dim leading-relaxed max-w-xl">
              I distinguish strictly between technologies verified in production/internship work and cloud services currently explored in laboratory environments. The 10 services below constitute my focused infrastructure learning roadmap.
            </p>
          </div>

          {/* 3-Tier Experience Distinction Badges */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 border border-surface-border bg-surface/20 space-y-1">
              <span className="font-mono text-[10px] text-accent-cyan uppercase font-semibold block">01. REPO PROVEN</span>
              <div className="font-mono text-xs font-bold text-primary-text">Docker & CI/CD</div>
              <p className="text-[11px] text-muted-dim">Multi-stage builds, GitHub Actions pipelines, Neon DB.</p>
            </div>

            <div className="p-3.5 border border-surface-border bg-surface/20 space-y-1">
              <span className="font-mono text-[10px] text-accent-violet uppercase font-semibold block">02. JSC INTERNSHIP</span>
              <div className="font-mono text-xs font-bold text-primary-text">Judicial ERP</div>
              <p className="text-[11px] text-muted-dim">Operational court registries, test suites, legacy data migration.</p>
            </div>

            <div className="p-3.5 border border-accent-rose/30 bg-surface/20 space-y-1">
              <span className="font-mono text-[10px] text-accent-rose uppercase font-semibold block">03. ACTIVE LABS</span>
              <div className="font-mono text-xs font-bold text-primary-text">AWS Native</div>
              <p className="text-[11px] text-muted-dim">Hands-on architecture labs across 10 core services.</p>
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* STRUCTURED TECHNICAL VISUALIZATION / INFRASTRUCTURE MAP        */}
        {/* ============================================================== */}
        <div className="border border-surface-border/80 bg-midnight/80 p-6 sm:p-8 backdrop-blur-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-surface-border/50 gap-2 font-mono text-[11px] text-muted-dim">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-rose animate-pulse" />
              <span className="text-primary-text font-semibold uppercase">INFRASTRUCTURE TOPOLOGY MAP</span>
            </div>
            <span className="text-accent-rose">CLICK ANY SERVICE TO INSPECT LAB FOCUS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 4 Grouped Zones (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {infraZones.map((zone, zIdx) => (
                <div
                  key={zIdx}
                  className="border border-surface-border/60 bg-surface/15 p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {zone.icon}
                      <span className="font-heading font-bold text-sm text-primary-text">
                        {zone.title}
                      </span>
                    </div>
                    <span className="font-mono text-[9.5px] text-muted-dim">
                      {zone.code}
                    </span>
                  </div>

                  <p className="text-xs text-muted-dim leading-relaxed">
                    {zone.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {zone.services.map((svcName) => {
                      const isSelected = activeService === svcName;
                      return (
                        <button
                          key={svcName}
                          onClick={() => setActiveService(svcName)}
                          className={`px-3 py-1.5 font-mono text-xs transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-accent-rose text-obsidian font-bold shadow-md'
                              : 'bg-surface/50 border border-surface-border/80 text-muted-text hover:text-primary-text hover:border-accent-rose/50'
                          }`}
                        >
                          <Cloud className={`w-3 h-3 ${isSelected ? 'text-obsidian' : 'text-accent-rose'}`} />
                          <span>{svcName}</span>
                          {isSelected && <ChevronRight className="w-3 h-3" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Service Inspector Telemetry Readout (5 cols) */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="border border-accent-rose/40 bg-surface/30 p-6 space-y-4 relative">
                
                <div className="flex items-center justify-between pb-3 border-b border-surface-border/50 text-[10px] font-mono text-muted-dim">
                  <span className="text-accent-rose uppercase">SERVICE LAB TELEMETRY</span>
                  <span>STATUS: LAB SIMULATION</span>
                </div>

                <div className="space-y-1">
                  <div className="font-mono text-xs text-muted-dim">SERVICE DESIGNATION</div>
                  <h4 className="font-heading text-2xl font-bold text-primary-text">
                    {selectedServiceDetail.name}
                  </h4>
                </div>

                <div className="space-y-1.5">
                  <div className="font-mono text-[10.5px] text-accent-cyan uppercase font-semibold">
                    ROLE IN DISTRIBUTED ARCHITECTURE
                  </div>
                  <p className="editorial-body leading-relaxed text-xs">
                    {selectedServiceDetail.purpose}
                  </p>
                </div>

                <div className="p-3 border-l-2 border-accent-rose bg-midnight/70 space-y-1">
                  <div className="font-mono text-[10px] text-accent-rose uppercase font-semibold">
                    CURRENT HANDS-ON LAB FOCUS
                  </div>
                  <p className="text-xs text-primary-text leading-relaxed font-mono">
                    {selectedServiceDetail.focusArea}
                  </p>
                </div>

                <div className="pt-2 border-t border-surface-border/50 flex items-center justify-between text-[10px] font-mono text-muted-dim">
                  <span>DISCIPLINE: AWS SOLUTIONS ARCHITECTURE</span>
                  <span className="text-accent-rose">UNDERGRADUATE SCOPE</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
