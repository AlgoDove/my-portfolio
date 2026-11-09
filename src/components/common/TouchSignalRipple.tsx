import React, { useEffect, useState, useCallback, useRef } from 'react';

interface ActiveRipple {
  id: number;
  x: number;
  y: number;
}

/**
 * TouchSignalRipple
 *
 * Implements a touch-reactive signal ripple for mobile devices:
 * - Detects ONLY touch inputs (never triggers on desktop mouse movement/clicks)
 * - Concentric orbital rings with violet, cyan, and rose signal accents
 * - Fully non-blocking (pointer-events: none, z-50)
 * - Automatically cleans up elements after animation completion (700ms)
 * - Respects prefers-reduced-motion
 */
export const TouchSignalRipple: React.FC = () => {
  const [ripples, setRipples] = useState<ActiveRipple[]>([]);
  const idCounter = useRef(0);
  const lastTouchTime = useRef(0);

  const addRipple = useCallback((clientX: number, clientY: number) => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const newId = ++idCounter.current;
    setRipples((prev) => {
      // Keep at most 6 simultaneous ripples to prevent visual or DOM clutter
      const trimmed = prev.slice(-5);
      return [...trimmed, { id: newId, x: clientX, y: clientY }];
    });

    // Clean up after 700ms
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newId));
    }, 700);
  }, []);

  useEffect(() => {
    // 1. PointerEvent listener (modern mobile browsers)
    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') return;
      lastTouchTime.current = Date.now();
      addRipple(e.clientX, e.clientY);
    };

    // 2. TouchEvent listener (safeguard for iOS Safari or webviews)
    const handleTouchStart = (e: TouchEvent) => {
      // Prevent double firing if pointerdown already caught this touch
      if (Date.now() - lastTouchTime.current < 80) return;
      lastTouchTime.current = Date.now();

      if (e.touches && e.touches.length > 0) {
        // Multi-touch: support up to 2 simultaneous touch points per gesture
        const touchCount = Math.min(e.touches.length, 2);
        for (let i = 0; i < touchCount; i++) {
          const touch = e.touches[i];
          addRipple(touch.clientX, touch.clientY);
        }
      }
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [addRipple]);

  if (ripples.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none"
    >
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          style={{
            position: 'absolute',
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
          className="pointer-events-none"
        >
          {/* Central Luminous Signal Point */}
          <div
            className="signal-ripple-core absolute w-2.5 h-2.5 rounded-full bg-accent-cyan shadow-[0_0_12px_#79C9DF,0_0_20px_#A987F5]"
          />

          {/* Inner Orbital Ring (Cyan stroke, 52px) */}
          <div
            style={{ width: '52px', height: '52px' }}
            className="signal-ripple-ring1 absolute rounded-full border-2 border-accent-cyan/90 shadow-[0_0_12px_rgba(121,201,223,0.6)]"
          />

          {/* Mid Orbital Ring (Violet dashed stroke, 96px) */}
          <div
            style={{ width: '96px', height: '96px' }}
            className="signal-ripple-ring2 absolute rounded-full border border-dashed border-accent-violet/85 shadow-[0_0_14px_rgba(169,135,245,0.45)]"
          />

          {/* Outer Orbital Ring (Rose stroke, 136px) */}
          <div
            style={{ width: '136px', height: '136px' }}
            className="signal-ripple-ring3 absolute rounded-full border border-accent-rose/70 shadow-[0_0_16px_rgba(215,124,203,0.35)]"
          />

          {/* Technical Cardinal Crosshair Ticks (N, S, E, W reticle accents) */}
          <div
            style={{ width: '80px', height: '80px' }}
            className="signal-ripple-ticks absolute flex items-center justify-center"
          >
            {/* Top tick */}
            <span className="absolute top-0 w-1 h-2 bg-accent-cyan/90 rounded-full shadow-[0_0_6px_#79C9DF]" />
            {/* Bottom tick */}
            <span className="absolute bottom-0 w-1 h-2 bg-accent-cyan/90 rounded-full shadow-[0_0_6px_#79C9DF]" />
            {/* Left tick */}
            <span className="absolute left-0 h-1 w-2 bg-accent-violet/90 rounded-full shadow-[0_0_6px_#A987F5]" />
            {/* Right tick */}
            <span className="absolute right-0 h-1 w-2 bg-accent-violet/90 rounded-full shadow-[0_0_6px_#A987F5]" />
          </div>
        </div>
      ))}
    </div>
  );
};
