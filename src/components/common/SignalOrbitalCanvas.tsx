import React, { useEffect, useRef } from 'react';

interface SignalOrbitalCanvasProps {
  className?: string;
  intensity?: 'subtle' | 'vibrant';
}

export const SignalOrbitalCanvas: React.FC<SignalOrbitalCanvasProps> = ({ 
  className = '',
  intensity = 'subtle'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Orbital configuration
    const orbits = [
      { radiusRatio: 0.22, speed: 0.0024, angle: 0, color: '#A987F5', nodeCount: 2, size: 2.2 },
      { radiusRatio: 0.35, speed: -0.0018, angle: Math.PI / 4, color: '#79C9DF', nodeCount: 3, size: 1.8 },
      { radiusRatio: 0.46, speed: 0.0012, angle: Math.PI / 2, color: '#D77CCB', nodeCount: 1, size: 2.6 },
    ];

    let pulseRadius = 0;
    let systemRotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const minDimension = Math.min(width, height);
      const maxPulse = minDimension * 0.48;

      if (!prefersReducedMotion) {
        systemRotation += 0.0005; // Slow, subtle global rotation
      }

      ctx.save();
      // Apply system-wide slow rotation around center
      ctx.translate(centerX, centerY);
      ctx.rotate(systemRotation);
      ctx.translate(-centerX, -centerY);

      // Coordinate Crosshairs (Subtle technical axes)
      ctx.strokeStyle = 'rgba(169, 135, 245, 0.07)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.moveTo(centerX - maxPulse, centerY);
      ctx.lineTo(centerX + maxPulse, centerY);
      ctx.moveTo(centerX, centerY - maxPulse);
      ctx.lineTo(centerX, centerY + maxPulse);
      ctx.stroke();

      // Expanding Signal Pulse Wave
      if (!prefersReducedMotion) {
        pulseRadius += 0.35;
        if (pulseRadius > maxPulse) {
          pulseRadius = 0;
        }
      } else {
        pulseRadius = maxPulse * 0.5;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      const pulseAlpha = Math.max(0, 0.22 * (1 - pulseRadius / maxPulse));
      ctx.strokeStyle = `rgba(121, 201, 223, ${pulseAlpha})`;
      ctx.lineWidth = 1.2;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.restore();

      // Technical azimuth tick marks & outer telemetry ring
      ctx.strokeStyle = 'rgba(169, 135, 245, 0.16)';
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 12) {
        const isCardinal = a % (Math.PI / 2) === 0;
        const tickLength = isCardinal ? 8 : 4;
        const x1 = centerX + Math.cos(a) * (maxPulse - tickLength);
        const y1 = centerY + Math.sin(a) * (maxPulse - tickLength);
        const x2 = centerX + Math.cos(a) * maxPulse;
        const y2 = centerY + Math.sin(a) * maxPulse;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Draw Orbit Tracks & Travelling Nodes
      orbits.forEach((orbit, index) => {
        const radius = minDimension * orbit.radiusRatio;

        // Orbit line
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = index === 1 ? 'rgba(121, 201, 223, 0.1)' : 'rgba(169, 135, 245, 0.1)';
        ctx.lineWidth = 1;
        ctx.setLineDash(index % 2 === 0 ? [2, 6] : [5, 5]);
        ctx.stroke();

        // Increment orbit position
        if (!prefersReducedMotion) {
          orbit.angle += orbit.speed;
        }

        // Draw nodes on this orbit
        for (let i = 0; i < orbit.nodeCount; i++) {
          const nodeAngle = orbit.angle + (i * (Math.PI * 2 / orbit.nodeCount));
          const nodeX = centerX + Math.cos(nodeAngle) * radius;
          const nodeY = centerY + Math.sin(nodeAngle) * radius;

          // Outer halo
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, orbit.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = orbit.color === '#79C9DF' ? 'rgba(121, 201, 223, 0.12)' : 'rgba(169, 135, 245, 0.12)';
          ctx.fill();

          // Core node
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, orbit.size, 0, Math.PI * 2);
          ctx.fillStyle = orbit.color;
          ctx.fill();
        }
      });

      // Restore system rotation for non-rotating center coordinates
      ctx.restore();

      // Central Signal Core (Stationary hub)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(169, 135, 245, 0.12)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#A987F5';
      ctx.fill();

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity]);

  return (
    <div className={`relative overflow-hidden pointer-events-none select-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
