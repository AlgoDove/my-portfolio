import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

type AnimationPhase = 'idle' | 'revealed' | 'dot-active' | 'drawing-line' | 'typing' | 'complete';

export const ArchivalTeamPhoto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [phase, setPhase] = useState<AnimationPhase>('idle');
  const phaseRef = useRef<AnimationPhase>('idle');
  const [typedName, setTypedName] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const timersRef = useRef<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  const FULL_NAME = 'GOKULASELVAN I';

  const updatePhase = (newPhase: AnimationPhase) => {
    phaseRef.current = newPhase;
    setPhase(newPhase);
  };

  // Helper to clear all pending animation timers & intervals
  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reset sequence to idle
    const resetSequence = () => {
      clearAllTimers();
      updatePhase('idle');
      setTypedName('');
      setIsTyping(false);
    };

    // Run cinematic sequence
    const startSequence = () => {
      clearAllTimers();

      if (prefersReducedMotion) {
        updatePhase('complete');
        setTypedName(FULL_NAME);
        setIsTyping(false);
        return;
      }

      // Phase 1: Photo is visible in viewport, slight activation delay
      updatePhase('revealed');

      // Phase 2: Dot activates after photo reveal delay (~220ms)
      const t1 = window.setTimeout(() => {
        updatePhase('dot-active');

        // Phase 3: Connector line begins drawing (~250ms after dot activation)
        const t2 = window.setTimeout(() => {
          updatePhase('drawing-line');

          // Phase 4: Name typing begins once line has extended (~380ms draw duration)
          const t3 = window.setTimeout(() => {
            updatePhase('typing');
            setIsTyping(true);
            let charIndex = 0;
            setTypedName('');

            intervalRef.current = window.setInterval(() => {
              charIndex++;
              setTypedName(FULL_NAME.slice(0, charIndex));

              if (charIndex >= FULL_NAME.length) {
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                  intervalRef.current = null;
                }
                setIsTyping(false);
                updatePhase('complete');
              }
            }, 28);
          }, 380);

          timersRef.current.push(t3);
        }, 250);

        timersRef.current.push(t2);
      }, 220);

      timersRef.current.push(t1);
    };

    // Hysteresis IntersectionObserver: enters at >= 0.35, resets when falling < 0.10
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const ratio = entry.intersectionRatio;

        if (ratio >= 0.35) {
          // If idle, start sequence
          if (phaseRef.current === 'idle') {
            startSequence();
          }
        } else if (ratio < 0.10) {
          // Card scrolled sufficiently out of view -> reset for replay
          if (phaseRef.current !== 'idle') {
            resetSequence();
          }
        }
      },
      {
        threshold: [0, 0.10, 0.35, 0.5],
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(el);

    return () => {
      clearAllTimers();
      observer.disconnect();
    };
  }, []);

  const isDotVisible = phase !== 'idle' && phase !== 'revealed';
  const isLineDrawn = phase === 'drawing-line' || phase === 'typing' || phase === 'complete';

  return (
    <div
      ref={containerRef}
      className="group relative border border-surface-border/80 bg-midnight/90 rounded overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-surface-border-strong hover:shadow-[0_0_24px_rgba(169,135,245,0.08)]"
    >
      {/* Micro Header Bar on Photograph Frame */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-surface-border/60 bg-surface/40 text-[11px] sm:text-[12px] font-mono text-muted-dim">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
          <span className="text-primary-text font-semibold tracking-wider">
            SIGNAL ARCHIVE // REF: CJ-CHRONOS-2023
          </span>
        </div>
        <span className="text-muted-dim hidden xs:inline">SLIIT AUDITORIUM • 1024 × 768 px</span>
      </div>

      {/* Photograph Container with Coordinate Overlay */}
      <div className="relative aspect-[4/3] w-full bg-obsidian overflow-hidden select-none">
        {/* Genuine, untouched group photograph */}
        <img
          src="/images/projects/code-jam/code-jam-team.jpg"
          alt="SLIIT Code Jam Project Chronos Technical Committee"
          loading="lazy"
          width={1024}
          height={768}
          className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[0.98] saturate-[0.88] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
        />

        {/* Whiteboard Spotlight Attenuation Overlay: tames red overhead light flare on whiteboard without modifying faces/skin */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 68% 36% at 50% 14%, rgba(14, 22, 38, 0.52) 0%, rgba(12, 11, 20, 0.20) 65%, transparent 100%)',
            mixBlendMode: 'multiply'
          }}
        />

        {/* Soft subtle gradient to blend smoothly at edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/45 via-transparent to-transparent pointer-events-none" />

        {/* Restrained Indigo/Violet Corner Brackets on the overall frame */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent-violet/40 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent-violet/40 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent-violet/40 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent-violet/40 pointer-events-none" />

        {/* Whiteboard Reference Marker Tag (Chronos Architecture Board) */}
        <div className="absolute top-3.5 left-4 sm:left-6 hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-midnight/85 border border-surface-border/60 text-[10px] font-mono text-muted-dim backdrop-blur-sm pointer-events-none">
          <span className="w-1 h-1 rounded-full bg-accent-rose" />
          <span>BOARD: "PROJECT CHRONOS" SPRINT</span>
        </div>

        {/* ── VECTOR CONNECTOR & LOCATOR OVERLAY ──────────────────────────── */}
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        >
          <defs>
            <linearGradient id="cinematicConnectorGradient" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#79C9DF" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#A987F5" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#79C9DF" stopOpacity="0.9" />
            </linearGradient>

            <filter id="locatorGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Thin cinematic connector line drawn progressively from locator dot to label */}
          <path
            d="M 23.8 64 L 16 53.5 L 5.5 53.5"
            stroke="url(#cinematicConnectorGradient)"
            strokeWidth="0.38"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset={isLineDrawn ? 0 : 100}
            style={{
              transition: 'stroke-dashoffset 380ms cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          />

          {/* Locator Activation System: Precise Reticle on Gokulaselvan I (Right Shoulder/Collar) */}
          {isDotVisible && (
            <g className="transition-all duration-300">
              {/* Outer pulsing tracking ring */}
              <circle 
                cx="23.8" 
                cy="64" 
                r="2.6" 
                stroke="#79C9DF" 
                strokeWidth="0.25" 
                fill="none" 
                className="animate-ping origin-center opacity-70"
                style={{ transformOrigin: '23.8% 64%' }}
              />

              {/* Tactical reticle crosshair ticks */}
              <line x1="23.8" y1="60.6" x2="23.8" y2="61.8" stroke="#79C9DF" strokeWidth="0.3" />
              <line x1="23.8" y1="66.2" x2="23.8" y2="67.4" stroke="#79C9DF" strokeWidth="0.3" />
              <line x1="20.4" y1="64" x2="21.6" y2="64" stroke="#79C9DF" strokeWidth="0.3" />
              <line x1="26.0" y1="64" x2="27.2" y2="64" stroke="#79C9DF" strokeWidth="0.3" />

              {/* Secondary static ring */}
              <circle 
                cx="23.8" 
                cy="64" 
                r="1.8" 
                stroke="#A987F5" 
                strokeWidth="0.25" 
                strokeDasharray="0.8 0.8"
                fill="none" 
              />

              {/* Solid focal dot */}
              <circle 
                cx="23.8" 
                cy="64" 
                r="0.85" 
                fill="#79C9DF" 
                filter="url(#locatorGlow)"
              />
            </g>
          )}
        </svg>

        {/* ── CINEMATIC TYPING NAME BADGE ─────────────────────────────────── */}
        <div 
          style={{ left: '5.5%', top: '53.5%' }}
          className={`absolute z-20 pointer-events-none transform -translate-y-1/2 transition-opacity duration-200 ${
            phase === 'typing' || phase === 'complete' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0C0B14]/94 border border-accent-cyan/60 text-[10px] sm:text-[11px] font-mono shadow-[0_0_16px_rgba(121,201,223,0.30)] backdrop-blur-md">
            <span className={`w-1.5 h-1.5 rounded-full bg-accent-cyan ${phase === 'complete' ? 'animate-pulse' : ''}`} />
            <span className="font-bold text-accent-cyan tracking-wider flex items-center">
              <span>{typedName}</span>
              {isTyping && (
                <span className="inline-block w-1.5 h-3 bg-accent-cyan ml-0.5 animate-pulse align-middle" />
              )}
            </span>
          </div>
          <div className="text-[8.5px] sm:text-[9.5px] font-mono text-muted-dim tracking-wide pl-2 pt-0.5 hidden xs:block">
            SEATED (FOREGROUND-LEFT)
          </div>
        </div>

      </div>

      {/* Micro Footer Bar with Telemetry */}
      <div className="px-3.5 py-2.5 border-t border-surface-border/60 bg-midnight/90 flex flex-wrap items-center justify-between text-[11px] sm:text-[12px] font-mono text-muted-dim gap-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-accent-rose shrink-0" />
          <span>SLIIT AUDITORIUM COMMAND CENTER</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-accent-cyan">STATION // 24 ORGANIZERS</span>
          <span>•</span>
          <span className="text-primary-text font-semibold">17.07.2023</span>
        </div>
      </div>

    </div>
  );
};
