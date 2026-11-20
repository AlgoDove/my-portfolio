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
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const updateDimensions = () => {
      const rect = canvas.parentElement?.getBoundingClientRect() || { width: 200, height: 200 };
      const w = Math.max(rect.width, 100);
      const h = Math.max(rect.height, 100);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
      return { width: w, height: h };
    };

    let { width, height } = updateDimensions();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      const dims = updateDimensions();
      width = dims.width;
      height = dims.height;
    };

    window.addEventListener('resize', handleResize);

    // Orbital configuration with enhanced contrast and clear geometry
    const orbits = [
      { radiusRatio: 0.24, speed: 0.0028, angle: 0, color: '#A987F5', strokeColor: 'rgba(169, 135, 245, 0.45)', nodeCount: 2, size: 2.8, dash: [4, 6] },
      { radiusRatio: 0.36, speed: -0.0020, angle: Math.PI / 4, color: '#79C9DF', strokeColor: 'rgba(121, 201, 223, 0.50)', nodeCount: 3, size: 2.4, dash: [6, 4] },
      { radiusRatio: 0.46, speed: 0.0014, angle: Math.PI / 2, color: '#D77CCB', strokeColor: 'rgba(215, 124, 203, 0.42)', nodeCount: 2, size: 3.0, dash: [2, 5] },
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
        systemRotation += 0.0006;
      }

      ctx.save();
      // Apply system-wide slow rotation around center
      ctx.translate(centerX, centerY);
      ctx.rotate(systemRotation);
      ctx.translate(-centerX, -centerY);

      // Coordinate Crosshairs (Crisp technical axes)
      ctx.strokeStyle = 'rgba(169, 135, 245, 0.22)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 6]);
      ctx.beginPath();
      ctx.moveTo(centerX - maxPulse, centerY);
      ctx.lineTo(centerX + maxPulse, centerY);
      ctx.moveTo(centerX, centerY - maxPulse);
      ctx.lineTo(centerX, centerY + maxPulse);
      ctx.stroke();

      // Expanding Signal Pulse Wave (Radar sweep)
      if (!prefersReducedMotion) {
        pulseRadius += 0.38;
        if (pulseRadius > maxPulse) {
          pulseRadius = 0;
        }
      } else {
        pulseRadius = maxPulse * 0.5;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
      const pulseAlpha = Math.max(0, 0.38 * (1 - pulseRadius / maxPulse));
      ctx.strokeStyle = `rgba(121, 201, 223, ${pulseAlpha})`;
      ctx.lineWidth = 1.3;
      ctx.setLineDash([]);
      ctx.stroke();
      ctx.restore();

      // Technical azimuth tick marks & outer telemetry ring
      ctx.strokeStyle = 'rgba(169, 135, 245, 0.32)';
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 12) {
        const isCardinal = a % (Math.PI / 2) === 0;
        const tickLength = isCardinal ? 7 : 3.5;
        const x1 = centerX + Math.cos(a) * (maxPulse - tickLength);
        const y1 = centerY + Math.sin(a) * (maxPulse - tickLength);
        const x2 = centerX + Math.cos(a) * maxPulse;
        const y2 = centerY + Math.sin(a) * maxPulse;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = isCardinal ? 'rgba(121, 201, 223, 0.65)' : 'rgba(169, 135, 245, 0.32)';
        ctx.lineWidth = isCardinal ? 1.4 : 1;
        ctx.stroke();
      }

      // Outer bounding boundary ring
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxPulse, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(169, 135, 245, 0.28)';
      ctx.lineWidth = 1;
      ctx.setLineDash([1, 8]);
      ctx.stroke();

      // Draw Orbit Tracks & Travelling Nodes
      orbits.forEach((orbit) => {
        const radius = minDimension * orbit.radiusRatio;

        // Orbit line with noticeable contrast
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = orbit.strokeColor;
        ctx.lineWidth = 1.2;
        ctx.setLineDash(orbit.dash);
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

          // Outer luminous halo
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, orbit.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = orbit.color === '#79C9DF' 
            ? 'rgba(121, 201, 223, 0.28)' 
            : orbit.color === '#D77CCB'
            ? 'rgba(215, 124, 203, 0.28)'
            : 'rgba(169, 135, 245, 0.28)';
          ctx.fill();

          // Crisp core node
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, orbit.size, 0, Math.PI * 2);
          ctx.fillStyle = orbit.color;
          ctx.fill();
        }
      });

      ctx.restore();

      // Central Signal Core (Stationary hub with high-contrast target rings)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 9, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(169, 135, 245, 0.20)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 5.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(121, 201, 223, 0.65)';
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
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
