import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  GitBranch, 
  Container, 
  TestTube2, 
  BrainCircuit, 
  Workflow,
  Terminal
} from 'lucide-react';

interface TickerSkill {
  name: string;
  category: string;
  accent: 'violet' | 'cyan' | 'rose';
  icon: React.ReactNode;
  tag?: string;
}

const VERIFIED_SKILLS: TickerSkill[] = [
  {
    name: 'C# 12',
    category: 'LANGUAGE',
    accent: 'violet',
    icon: <Code2 className="w-3.5 h-3.5" />,
    tag: '.NET 8'
  },
  {
    name: 'ASP.NET Core 8',
    category: 'BACKEND',
    accent: 'violet',
    icon: <Server className="w-3.5 h-3.5" />,
    tag: 'MODULAR MONOLITH'
  },
  {
    name: 'Java 17',
    category: 'LANGUAGE',
    accent: 'rose',
    icon: <Code2 className="w-3.5 h-3.5" />,
    tag: 'ENTERPRISE'
  },
  {
    name: 'Spring Boot 3',
    category: 'BACKEND',
    accent: 'rose',
    icon: <Workflow className="w-3.5 h-3.5" />,
    tag: 'WORKFLOW ENGINE'
  },
  {
    name: 'TypeScript',
    category: 'LANGUAGE',
    accent: 'cyan',
    icon: <Code2 className="w-3.5 h-3.5" />,
    tag: 'STRICT CONTRACTS'
  },
  {
    name: 'React 18 / 19',
    category: 'FRONTEND',
    accent: 'cyan',
    icon: <Layers className="w-3.5 h-3.5" />,
    tag: 'SPA & TANSTACK'
  },
  {
    name: 'Python',
    category: 'LANGUAGE',
    accent: 'rose',
    icon: <BrainCircuit className="w-3.5 h-3.5" />,
    tag: 'ML INFERENCE'
  },
  {
    name: 'TensorFlow / Keras',
    category: 'MACHINE LEARNING',
    accent: 'rose',
    icon: <BrainCircuit className="w-3.5 h-3.5" />,
    tag: 'AUTOENCODER AUC: 0.9999'
  },
  {
    name: 'PostgreSQL',
    category: 'DATABASE',
    accent: 'cyan',
    icon: <Database className="w-3.5 h-3.5" />,
    tag: 'ACID & NEON DB'
  },
  {
    name: 'Docker',
    category: 'INFRASTRUCTURE',
    accent: 'cyan',
    icon: <Container className="w-3.5 h-3.5" />,
    tag: 'MULTI-STAGE BUILDS'
  },
  {
    name: 'GitHub Actions',
    category: 'CI/CD',
    accent: 'cyan',
    icon: <GitBranch className="w-3.5 h-3.5" />,
    tag: 'AUTOMATED PIPELINES'
  },
  {
    name: 'Entity Framework Core 8',
    category: 'ORM',
    accent: 'violet',
    icon: <Database className="w-3.5 h-3.5" />,
    tag: 'MIGRATIONS & LINQ'
  },
  {
    name: 'xUnit & Moq',
    category: 'VERIFICATION',
    accent: 'rose',
    icon: <TestTube2 className="w-3.5 h-3.5" />,
    tag: '217 PASSING TESTS'
  },
  {
    name: 'Spring Security',
    category: 'SECURITY',
    accent: 'violet',
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    tag: 'JWT & RBAC'
  },
  {
    name: 'Dart & Flutter',
    category: 'MOBILE',
    accent: 'cyan',
    icon: <Cpu className="w-3.5 h-3.5" />,
    tag: 'CROSS-PLATFORM'
  },
  {
    name: 'REST API Design',
    category: 'ARCHITECTURE',
    accent: 'violet',
    icon: <Server className="w-3.5 h-3.5" />,
    tag: 'IDEMPOTENT & TYPED'
  },
  {
    name: 'SQL & Indexing',
    category: 'PERSISTENCE',
    accent: 'cyan',
    icon: <Database className="w-3.5 h-3.5" />,
    tag: 'OPTIMIZED SCHEMAS'
  },
  {
    name: 'Git',
    category: 'TOOLING',
    accent: 'violet',
    icon: <Terminal className="w-3.5 h-3.5" />,
    tag: 'VERSION CONTROL'
  }
];

export const SkillsTicker: React.FC = () => {
  // Duplicate list once to form a continuous infinite seamless loop
  const tickerItems = [...VERIFIED_SKILLS, ...VERIFIED_SKILLS];

  const getAccentStyles = (accent: 'violet' | 'cyan' | 'rose') => {
    switch (accent) {
      case 'cyan':
        return {
          icon: 'text-accent-cyan',
          tag: 'text-accent-cyan/90 bg-accent-cyan/10 border-accent-cyan/25',
          dot: 'bg-accent-cyan',
          glow: 'neon-glow-cyan'
        };
      case 'rose':
        return {
          icon: 'text-accent-rose',
          tag: 'text-accent-rose/90 bg-accent-rose/10 border-accent-rose/25',
          dot: 'bg-accent-rose',
          glow: 'neon-glow-rose'
        };
      case 'violet':
      default:
        return {
          icon: 'text-accent-violet',
          tag: 'text-accent-violet/90 bg-accent-violet/10 border-accent-violet/25',
          dot: 'bg-accent-violet',
          glow: 'neon-glow-violet'
        };
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden border-y border-surface-border/70 bg-midnight/80 backdrop-blur-md py-3 z-20"
      aria-label="Continuous technical skills ticker"
    >
      {/* Vaporwave / Cyberpunk Top & Bottom Glowing Accent Hairlines */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent-violet/50 via-accent-cyan/40 to-transparent pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/40 via-accent-rose/40 to-transparent pointer-events-none" 
      />

      {/* Left and Right Edge Gradient Masks (Fades items into the dark backdrop) */}
      <div 
        aria-hidden="true" 
        className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent z-10 pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-obsidian via-obsidian/80 to-transparent z-10 pointer-events-none" 
      />

      {/* The Animated Skills Marquee Track */}
      <div className="animate-skills-ticker items-center gap-4 px-4 select-none">
        {tickerItems.map((skill, idx) => {
          const styles = getAccentStyles(skill.accent);
          return (
            <div
              key={`${skill.name}-${idx}`}
              className="shrink-0 flex items-center gap-3 px-3.5 py-1.5 rounded bg-surface/35 border border-surface-border/70 hover:border-surface-border-strong hover:bg-surface/60 transition-all duration-200 group"
            >
              {/* Category Icon */}
              <div className={`${styles.icon} transition-transform group-hover:scale-110 shrink-0`}>
                {skill.icon}
              </div>

              {/* Technology Name */}
              <span className="font-heading font-bold text-xs sm:text-[13px] text-primary-text tracking-tight whitespace-nowrap group-hover:text-white">
                {skill.name}
              </span>

              {/* Monospace Tag / Detail */}
              {skill.tag && (
                <span className={`font-mono text-[9.5px] uppercase tracking-wider px-1.5 py-0.5 rounded border ${styles.tag} whitespace-nowrap font-semibold`}>
                  {skill.tag}
                </span>
              )}

              {/* Cyberpunk Delimiter Pips */}
              <span className="font-mono text-[10px] text-muted-dim/60 ml-1 select-none">
                //
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
