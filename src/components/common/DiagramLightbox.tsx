import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';

interface DiagramLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  projectId: string;
  children: React.ReactNode;
}

export const DiagramLightbox: React.FC<DiagramLightboxProps> = ({
  isOpen,
  onClose,
  title,
  projectId,
  children,
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // Touch pinch references
  const initialPinchDist = useRef<number | null>(null);
  const initialScale = useRef(1);

  const containerRef = useRef<HTMLDivElement>(null);

  // Reset transform
  const handleReset = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.5, 4));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle native wheel zoom with passive: false to prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.25 : -0.25;
      setScale((prev) => {
        const next = Math.min(Math.max(prev + delta, 1), 4);
        if (next === 1) setPosition({ x: 0, y: 0 });
        return next;
      });
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [isOpen]);

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      handleReset();
    }
  }, [isOpen, handleReset]);

  if (!isOpen) return null;

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch gesture handlers (Pinch-to-zoom + 1-finger pan)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // 2-finger pinch
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDist.current = dist;
      initialScale.current = scale;
      setIsDragging(false);
    } else if (e.touches.length === 1 && scale > 1) {
      // 1-finger pan
      setIsDragging(true);
      dragStart.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDist.current !== null) {
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = currentDist / initialPinchDist.current;
      const nextScale = Math.min(Math.max(initialScale.current * ratio, 1), 4);
      setScale(nextScale);
      if (nextScale === 1) setPosition({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.current.x,
        y: e.touches[0].clientY - dragStart.current.y,
      });
    }
  };

  const handleTouchEnd = () => {
    initialPinchDist.current = null;
    setIsDragging(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-[110] bg-obsidian/95 backdrop-blur-xl flex flex-col select-none animate-in fade-in duration-200"
    >
      {/* Lightbox Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-surface-border/70 bg-midnight/90 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span
              id="lightbox-title"
              className="font-mono text-xs sm:text-sm font-bold text-primary-text uppercase tracking-wider"
            >
              TOPOLOGY // {projectId.toUpperCase()} — {title}
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[10px] text-accent-violet px-2 py-0.5 rounded bg-accent-violet/10 border border-accent-violet/20">
            FULLSCREEN INSPECT
          </span>
        </div>

        {/* Zoom Controls & Close */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Zoom Percentage */}
          <div className="px-2.5 py-1 rounded bg-surface/50 border border-surface-border/60 font-mono text-xs text-accent-cyan hidden xs:block">
            {Math.round(scale * 100)}%
          </div>

          {/* Zoom In */}
          <button
            onClick={handleZoomIn}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded bg-surface/60 hover:bg-surface border border-surface-border text-muted-text hover:text-primary-text transition-colors"
            title="Zoom In (+)"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4 text-accent-cyan" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={handleZoomOut}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded bg-surface/60 hover:bg-surface border border-surface-border text-muted-text hover:text-primary-text transition-colors"
            title="Zoom Out (-)"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4 text-accent-violet" />
          </button>

          {/* Reset / 1:1 */}
          <button
            onClick={handleReset}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded bg-surface/60 hover:bg-surface border border-surface-border text-muted-text hover:text-primary-text transition-colors"
            title="Reset Zoom (100%)"
            aria-label="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4 text-muted-text" />
          </button>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 ml-1 rounded bg-accent-rose/15 hover:bg-accent-rose/25 border border-accent-rose/30 text-accent-rose transition-colors"
            title="Close Lightbox (Esc)"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Interactive Diagram Canvas */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        className={`flex-1 relative overflow-hidden flex items-center justify-center p-4 sm:p-8 touch-none ${
          scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
        }`}
      >
        {/* Subtle grid background inside modal for technical ambiance */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
          }}
          className="max-w-5xl w-full select-none"
        >
          {children}
        </div>
      </div>

      {/* Footer Instruction Hint */}
      <div className="px-4 py-2 bg-midnight/90 border-t border-surface-border/60 flex items-center justify-between text-[11px] font-mono text-muted-dim shrink-0">
        <div className="flex items-center gap-2">
          <Maximize2 className="w-3.5 h-3.5 text-accent-cyan" />
          <span className="hidden sm:inline">
            Use mouse wheel or buttons to zoom • Drag to pan when enlarged • Press Esc to close
          </span>
          <span className="sm:hidden">
            Pinch to zoom • Drag to pan • Tap ✕ to close
          </span>
        </div>
        <span className="text-accent-violet">NOCTURNE // SIGNAL INSPECTOR</span>
      </div>
    </div>
  );
};
