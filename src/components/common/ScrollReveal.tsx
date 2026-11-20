import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

/**
 * High-performance GPU-composited entrance reveal wrapper.
 * Animates strictly `opacity` and `transform` using a smooth cubic-bezier(0.22, 1, 0.36, 1).
 * Uses once: true intersection observer behavior and disconnects immediately after reveal.
 * Respects `prefers-reduced-motion: reduce`.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (revealed) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          if (delayMs > 0) {
            setTimeout(() => setRevealed(true), delayMs);
          } else {
            setRevealed(true);
          }
          observer.unobserve(entry.target);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [delayMs, revealed]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${revealed ? 'is-revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
