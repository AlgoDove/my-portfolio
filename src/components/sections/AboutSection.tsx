import React from 'react';
import { Compass, Layers, ShieldCheck, Terminal, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {

  return (
    <section id="about" className="py-24 bg-midnight/30 relative border-b border-surface-border/40 scroll-mt-16">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent-violet/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-4 border-b border-surface-border/50 gap-2">
          <div className="space-y-1">
            <span className="font-mono text-xs sm:text-[13px] text-accent-violet tracking-[0.2em] uppercase block font-semibold">
              01 // ENGINEERING PHILOSOPHY & STORY
            </span>
            <h2 className="font-heading text-3xl sm:text-[36px] lg:text-[42px] font-bold text-primary-text tracking-tight">
              The Person Behind the Code
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-dim tracking-wider uppercase">
            SYSTEM BOUNDARIES & METHODICAL IMPLEMENTATION
          </div>
        </div>

        {/* Lead Editorial Statement */}
        <div className="mb-14 border-l-2 border-accent-cyan/80 pl-6 sm:pl-8 pr-4 sm:pr-8 py-2 max-w-4xl bg-surface/10 rounded-r-sm">
          <blockquote className="font-heading text-xl sm:text-2xl text-primary-text font-normal leading-[1.6]">
            “Software development is not simply writing code. It begins with understanding a problem, identifying requirements and domain constraints, choosing an appropriate design, implementing it, testing it, and continually improving it.”
          </blockquote>
        </div>

        {/* Asymmetric Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Narrative Essay & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-8 px-1 sm:px-2">
            
            <div className="space-y-5 text-muted-text font-sans leading-[1.7] editorial-body-prose">
              <p className="text-primary-text font-medium text-[16px] sm:text-[17.5px] leading-[1.65]">
                As an undergraduate software engineer studying at SLIIT and currently interning at the Sri Lanka Judicial Service Commission, I approach software engineering through the lens of systems: where boundaries lie, how data moves across tiers, what happens when transactions fail, and how authorization is enforced at every layer.
              </p>
              
              <p className="editorial-body leading-[1.65]">
                I am particularly drawn to backend systems, APIs, and data persistence. In my projects—such as architecting the procurement request lifecycle in ASP.NET Core or building multi-step approval state machines in Spring Boot—I spend considerable time evaluating engineering trade-offs. Rather than reaching for tools out of novelty, I focus on why a specific architecture fits the operational problem.
              </p>

              <p className="editorial-body leading-[1.65]">
                When integrating AI and agentic workflows, I believe strongly in <span className="text-accent-cyan font-mono font-medium">deterministic guardrails</span>. Large language models excel at interpreting unstructured human requests, but enterprise software demands strict validation before persisting entities to a database. Bridging those two worlds reliably is where interesting engineering happens.
              </p>
            </div>

            {/* Principles: Editorial Horizontal Flow instead of 4 boxed cards */}
            <div className="pt-6 border-t border-surface-border/50 space-y-6">
              <span className="font-mono text-xs text-muted-dim uppercase tracking-wider block font-semibold">
                CORE OPERATIONAL PRINCIPLES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Principle 01 */}
                <div className="space-y-2 border-l-2 border-accent-violet/60 pl-4 sm:pl-5 pr-2 py-1">
                  <div className="flex items-center gap-2 font-mono text-sm sm:text-[14.5px] font-semibold text-primary-text">
                    <Compass className="w-4 h-4 text-accent-violet shrink-0" />
                    <span>01. Requirements Precedence</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-muted-text leading-[1.6] font-sans">
                    Clarifying operational realities, domain roles, and edge conditions before committing to database schemas or framework choices.
                  </p>
                </div>

                {/* Principle 02 */}
                <div className="space-y-2 border-l-2 border-accent-cyan/60 pl-4 sm:pl-5 pr-2 py-1">
                  <div className="flex items-center gap-2 font-mono text-sm sm:text-[14.5px] font-semibold text-primary-text">
                    <Layers className="w-4 h-4 text-accent-cyan shrink-0" />
                    <span>02. Pragmatic Boundaries</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-muted-text leading-[1.6] font-sans">
                    Choosing modular monoliths and clean layered boundaries over premature microservice distribution that introduces unnecessary network failure modes.
                  </p>
                </div>

                {/* Principle 03 */}
                <div className="space-y-2 border-l-2 border-accent-rose/60 pl-4 sm:pl-5 pr-2 py-1">
                  <div className="flex items-center gap-2 font-mono text-sm sm:text-[14.5px] font-semibold text-primary-text">
                    <ShieldCheck className="w-4 h-4 text-accent-rose shrink-0" />
                    <span>03. Defensive Invariants</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-muted-text leading-[1.6] font-sans">
                    Validating ownership, role permissions, and concurrency stamps server-side so clients cannot bypass business invariants.
                  </p>
                </div>

                {/* Principle 04 */}
                <div className="space-y-2 border-l-2 border-accent-violet/60 pl-4 sm:pl-5 pr-2 py-1">
                  <div className="flex items-center gap-2 font-mono text-sm sm:text-[14.5px] font-semibold text-primary-text">
                    <Terminal className="w-4 h-4 text-accent-violet shrink-0" />
                    <span>04. Verification Rigor</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-muted-text leading-[1.6] font-sans">
                    Backing domain rules with rigorous automated test suites (such as 217 xUnit tests in Procura) to verify system behavior matches specifications.
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Right: Technical Engineer Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="relative border border-surface-border bg-midnight/70 p-5 sm:p-7 backdrop-blur-sm rounded-sm shadow-lg">
              
              {/* Profile Header Line */}
              <div className="flex items-center justify-between pb-3 border-b border-surface-border/50 text-[10px] font-mono text-muted-dim">
                <span>ENGINEER PROFILE</span>
                <span className="text-accent-cyan">COLOMBO, LK</span>
              </div>

              {/* Profile Summary Block */}
              <div className="w-full p-5 sm:p-6 flex flex-col justify-between bg-surface/30 border border-surface-border/50 rounded select-none my-4">
                <div className="flex justify-between text-[10px] font-mono text-muted-dim border-b border-surface-border/40 pb-2">
                  <span>SUMMARY</span>
                  <span className="text-accent-violet">{PERSONAL_INFO.wordmark}</span>
                </div>

                <div className="my-4 space-y-1.5">
                  <span className="font-mono text-[11px] text-accent-cyan uppercase tracking-widest block">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-primary-text block tracking-tight">
                    {PERSONAL_INFO.wordmark}
                  </span>
                  <p className="text-xs text-muted-text pt-2 leading-relaxed max-w-xs font-sans">
                    Undergraduate Software Engineer focused on backend architecture and dependable systems.
                  </p>
                </div>

                <div className="text-[10px] font-mono text-muted-dim pt-2 border-t border-surface-border/40 flex justify-between">
                  <span>COLOMBO, SRI LANKA</span>
                  <span>SLIIT / JSC</span>
                </div>
              </div>

              {/* Profile Metadata Items */}
              <div className="space-y-2 text-xs font-mono pt-1">
                <div className="flex justify-between py-1 border-b border-surface-border/40">
                  <span className="text-muted-dim">NAME:</span>
                  <span className="text-primary-text font-semibold">{PERSONAL_INFO.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-border/40">
                  <span className="text-muted-dim">DESIGNATION:</span>
                  <span className="text-accent-violet">Software Engineer</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-border/40">
                  <span className="text-muted-dim">ACTIVE ROLE:</span>
                  <span className="text-primary-text text-right">Sri Lanka JSC Intern</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-border/40">
                  <span className="text-muted-dim">ACADEMICS:</span>
                  <span className="text-primary-text text-right">SLIIT (WGPA 3.85 / 4.00)</span>
                </div>
                <div className="flex items-center justify-between py-1 text-[10.5px]">
                  <span className="text-muted-dim flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-accent-rose" />
                    LOCATION:
                  </span>
                  <span className="text-accent-cyan">Colombo, Sri Lanka</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
