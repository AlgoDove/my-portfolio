import React, { useState, useEffect, useRef } from 'react';

interface SignalGenesisLoaderProps {
  onComplete?: () => void;
}

export const SignalGenesisLoader: React.FC<SignalGenesisLoaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'emergence' | 'interference' | 'identity' | 'transition' | 'done'>('emergence');
  const [shouldRender, setShouldRender] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check query param (?intro=true or ?replay=true) to force replay for testing/review
    const urlParams = new URLSearchParams(window.location.search);
    const forceReplay = urlParams.get('intro') === 'true' || urlParams.get('replay') === 'true';

    // Check session storage
    const hasViewed = sessionStorage.getItem('signal_genesis_viewed');

    if (hasViewed && !forceReplay) {
      setShouldRender(false);
      onComplete?.();
      return;
    }

    // Expose developer replay helper on window
    (window as unknown as { replayIntro: () => void }).replayIntro = () => {
      sessionStorage.removeItem('signal_genesis_viewed');
      window.location.search = '?intro=true';
    };

    if (prefersReducedMotion) {
      // Gentle instantaneous bypass for reduced motion
      const quickTimer = setTimeout(() => {
        sessionStorage.setItem('signal_genesis_viewed', 'true');
        setPhase('done');
        setShouldRender(false);
        onComplete?.();
      }, 250);
      return () => clearTimeout(quickTimer);
    }

    // Sequence timeline: calibrated to ~1.8s total duration
    // 0.00s: Phase 1 — Signal Emergence (Carrier line sweep, baseline sync)
    // 0.42s: Phase 2 — Harmonic Interference & Orbital Splitting (frequency flutter & flickers)
    // 0.98s: Phase 3 — Identity Formation (G. Monogram, light sweep, wordmark)
    // 1.50s: Phase 4 — Stabilization & Light Expansion (frequency locked 100%)
    // 1.75s: Transition Start — Immediate pointer-events: none, smooth 300ms fade out
    // 2.05s: Unmount & Complete
    const t1 = setTimeout(() => setPhase('interference'), 420);
    const t2 = setTimeout(() => setPhase('identity'), 980);
    const t3 = setTimeout(() => {
      setPhase('transition');
      onComplete?.();
    }, 1750);
    const t4 = setTimeout(() => {
      sessionStorage.setItem('signal_genesis_viewed', 'true');
      setPhase('done');
      setShouldRender(false);
    }, 2050);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (!shouldRender || phase === 'done') return null;

  return (
    <div
      ref={containerRef}
      aria-label="System Initializing: Signal Genesis"
      role="status"
      className={`fixed inset-0 z-[9999] bg-[#0C0B14] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-300 ease-out ${
        phase === 'transition' ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background subtle atmospheric grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Atmospheric center radial glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-accent-violet/15 via-accent-cyan/10 to-transparent blur-[100px] pointer-events-none" />

      {/* Center Motion Stage */}
      <div className="relative w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] flex items-center justify-center">
        
        {/* SVG Vector Motion System */}
        <svg 
          viewBox="0 0 400 400" 
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          fill="none"
        >
          <defs>
            {/* Gradients for dynamic luminous trails */}
            <linearGradient id="cyanTrail" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#79C9DF" stopOpacity="0" />
              <stop offset="50%" stopColor="#79C9DF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#79C9DF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="violetTrail" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#A987F5" stopOpacity="0" />
              <stop offset="70%" stopColor="#A987F5" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A987F5" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="roseTrail" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D77CCB" stopOpacity="0" />
              <stop offset="70%" stopColor="#D77CCB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D77CCB" stopOpacity="1" />
            </linearGradient>

            {/* Radial glow filter */}
            <filter id="genesisGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── PHASE 1: Carrier Signal Entrance Line ── */}
          <line
            x1="0"
            y1="200"
            x2="400"
            y2="200"
            stroke="url(#cyanTrail)"
            strokeWidth="2"
            filter="url(#genesisGlow)"
            className={`transition-all duration-600 ease-out ${
              phase === 'emergence' 
                ? 'opacity-90 stroke-dasharray-[400] animate-carrier-sweep' 
                : 'opacity-20'
            }`}
          />

          {/* ── PHASE 2 & 3: Coordinate Crosshair Technical Axes ── */}
          <g className={`transition-opacity duration-500 ${phase === 'emergence' ? 'opacity-0' : 'opacity-40'}`}>
            <line x1="200" y1="30" x2="200" y2="370" stroke="#A987F5" strokeWidth="0.8" strokeDasharray="3 6" />
            <line x1="30" y1="200" x2="370" y2="200" stroke="#79C9DF" strokeWidth="0.8" strokeDasharray="3 6" />
          </g>

          {/* ── PHASE 2: Harmonic Orbital Rings with Visible Pulses & Flickers ── */}
          {/* Outer Ring: Violet (r=124) */}
          <circle
            cx="200"
            cy="200"
            r="124"
            stroke="#A987F5"
            strokeWidth="1.2"
            strokeDasharray="8 14"
            className={`origin-center transition-all duration-700 animate-signal-flicker ${
              phase === 'emergence' ? 'opacity-0 scale-50' : 'opacity-65 animate-spin-very-slow animate-orbit-dash'
            }`}
          />

          {/* Middle Orbit: Cyan (r=84) */}
          <circle
            cx="200"
            cy="200"
            r="84"
            stroke="#79C9DF"
            strokeWidth="1.6"
            strokeDasharray="160 50"
            className={`origin-center transition-all duration-600 animate-signal-flicker ${
              phase === 'emergence' ? 'opacity-0 scale-75' : 'opacity-85 animate-spin-reverse-medium'
            }`}
            filter="url(#genesisGlow)"
          />

          {/* Inner Resonant Core: Rose (r=50) */}
          <circle
            cx="200"
            cy="200"
            r="50"
            stroke="#D77CCB"
            strokeWidth="1.8"
            className={`origin-center transition-all duration-500 ${
              phase === 'emergence' ? 'opacity-0 scale-50' : 'opacity-95 animate-pulse-gentle'
            }`}
            filter="url(#genesisGlow)"
          />

          {/* Orbital Satellite Pulse Nodes with Luminous Traces */}
          {phase !== 'emergence' && (
            <g className="animate-spin-medium origin-center">
              <circle cx="200" cy="76" r="3.5" fill="#79C9DF" filter="url(#genesisGlow)" />
              <circle cx="324" cy="200" r="3" fill="#A987F5" filter="url(#genesisGlow)" />
              <circle cx="200" cy="324" r="2.5" fill="#D77CCB" />
              <circle cx="116" cy="200" r="2.5" fill="#79C9DF" />
            </g>
          )}

          {/* Frequency Interference Waveform during Phase 2 */}
          {phase === 'interference' && (
            <path
              d="M 110 200 Q 135 175, 160 200 T 200 200 T 240 200 T 290 200"
              stroke="#79C9DF"
              strokeWidth="2"
              fill="none"
              className="animate-wave-flutter opacity-90"
              filter="url(#genesisGlow)"
            />
          )}

          {/* Phase 4 / Transition Expansion Ripple */}
          {phase === 'transition' && (
            <circle
              cx="200"
              cy="200"
              r="190"
              stroke="#79C9DF"
              strokeWidth="2.5"
              className="animate-ping opacity-50 origin-center"
            />
          )}
        </svg>

        {/* ── PHASE 3: Center Monogram & Wordmark Formation ── */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
            phase === 'identity' || phase === 'transition'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-90'
          }`}
        >
          {/* Geometric Monogram Badge */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-midnight/95 border border-accent-violet/60 flex items-center justify-center shadow-[0_0_30px_rgba(169,135,245,0.4)] backdrop-blur-md overflow-hidden">
            {/* Luminous Diagonal Light Sweep across emblem */}
            {(phase === 'identity' || phase === 'transition') && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-emblem-sweep" />
            )}
            
            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-primary-text tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-primary-text via-accent-violet to-accent-cyan select-none">
              G.
            </span>

            {/* Precision Corner Alignment Ticks */}
            <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-accent-cyan shadow-[0_0_8px_#79C9DF]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-accent-cyan shadow-[0_0_8px_#79C9DF]" />
            <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-accent-cyan shadow-[0_0_8px_#79C9DF]" />
            <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-accent-cyan shadow-[0_0_8px_#79C9DF]" />
          </div>

          {/* Wordmark Synthesis */}
          <div className="mt-5 text-center space-y-1">
            <div className="font-heading font-extrabold text-base sm:text-lg tracking-[0.24em] text-primary-text">
              GOKULASELVAN I
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] text-accent-cyan tracking-[0.3em] uppercase flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_6px_#79C9DF]" />
              <span>SIGNAL INITIALIZED // READY</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Telemetry Status Bar */}
      <div className="absolute bottom-6 left-0 right-0 px-6 sm:px-12 flex justify-between items-center text-[10px] font-mono text-muted-dim">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
          <span>NOCTURNE // SIGNAL GENESIS</span>
        </span>
        <span className="hidden sm:inline-block">COLOMBO, LK • SYS_LAT: 06°55'N</span>
        <span className="text-accent-cyan font-semibold">
          {phase === 'emergence' && 'INITIALIZING: 25%'}
          {phase === 'interference' && 'CARRIER LOCK: 65%'}
          {(phase === 'identity' || phase === 'transition') && 'FREQUENCY: 100% // READY'}
        </span>
      </div>
    </div>
  );
};
