import React, { useEffect, useRef, useState } from 'react';

/**
 * CursorGlow — a subtle mouse-following background spotlight.
 *
 * Rules:
 * - z-index: 0 (background layer only)
 * - pointer-events: none (never blocks interaction)
 * - Disabled on touch devices and when prefers-reduced-motion is set
 * - Low opacity: restrained, not neon
 */
export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on non-touch, no-reduced-motion environments
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!motionOk || !hasPointer) return;

    setEnabled(true);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.06);
      currentY = lerp(currentY, targetY, 0.06);

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at center, rgba(169, 135, 245, 0.045) 0%, rgba(169, 135, 245, 0.012) 40%, transparent 70%)',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default CursorGlow;
