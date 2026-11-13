import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
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

  // Tracking pointer drag vs click for backdrop closing
  const pointerStartPos = useRef<{ x: number; y: number } | null>(null);
  const hasDragged = useRef(false);

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
      document.body.style.overflow = originalOverflow || '';
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
    pointerStartPos.current = { x: e.clientX, y: e.clientY };
    hasDragged.current = false;
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (pointerStartPos.current) {
      const dist = Math.hypot(
        e.clientX - pointerStartPos.current.x,
        e.clientY - pointerStartPos.current.y
      );
      if (dist > 6) {
        hasDragged.current = true;
      }
    }
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    pointerStartPos.current = null;
  };

  // Touch gesture handlers (Pinch-to-zoom + 1-finger pan)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // 2-finger pinch
      hasDragged.current = true;
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialPinchDist.current = dist;
      initialScale.current = scale;
      setIsDragging(false);
    } else if (e.touches.length === 1) {
      pointerStartPos.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      hasDragged.current = false;
      if (scale > 1) {
        // 1-finger pan
        setIsDragging(true);
        dragStart.current = {
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y,
        };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDist.current !== null) {
      hasDragged.current = true;
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = currentDist / initialPinchDist.current;
      const nextScale = Math.min(Math.max(initialScale.current * ratio, 1), 4);
      setScale(nextScale);
      if (nextScale === 1) setPosition({ x: 0, y: 0 });
    } else if (e.touches.length === 1) {
      if (pointerStartPos.current) {
        const dist = Math.hypot(
          e.touches[0].clientX - pointerStartPos.current.x,
          e.touches[0].clientY - pointerStartPos.current.y
        );
        if (dist > 6) {
          hasDragged.current = true;
        }
      }
      if (isDragging && scale > 1) {
        setPosition({
          x: e.touches[0].clientX - dragStart.current.x,
          y: e.touches[0].clientY - dragStart.current.y,
        });
      }
    }
  };

  const handleTouchEnd = () => {
    initialPinchDist.current = null;
    setIsDragging(false);
    pointerStartPos.current = null;
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // If a drag/pan gesture happened, do not trigger close
    if (hasDragged.current) {
      hasDragged.current = false;
      return;
    }
    // Only close if clicking directly on the backdrop container
    if (e.target === containerRef.current) {
      onClose();
    }
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-[200] bg-obsidian/95 backdrop-blur-xl flex flex-col select-none animate-in fade-in duration-200"
    >
      {/* Lightbox Header Bar */}
      <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3.5 border-b border-surface-border/70 bg-midnight/95 backdrop-blur-md shrink-0 z-30 gap-2">
        {/* Title container with responsive truncation so controls are never pushed off-screen */}
        <div className="flex items-center gap-2 min-w-0 flex-1 mr-1 sm:mr-3">
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shrink-0" aria-hidden="true" />
          <span
            id="lightbox-title"
            className="font-mono text-xs sm:text-sm font-bold text-primary-text uppercase tracking-wider truncate min-w-0"
            title={`TOPOLOGY // ${projectId.toUpperCase()} — ${title}`}
          >
            TOPOLOGY // {projectId.toUpperCase()} — {title}
          </span>
          <span className="hidden lg:inline-block font-mono text-[10px] text-accent-violet px-2 py-0.5 rounded bg-accent-violet/10 border border-accent-violet/20 shrink-0">
            FULLSCREEN INSPECT
          </span>
        </div>

        {/* Zoom Controls & Prominent Top-Right Close Button */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Zoom Percentage */}
          <div className="px-2 py-1 rounded bg-surface/60 border border-surface-border/60 font-mono text-xs text-accent-cyan hidden md:inline-flex items-center">
            {Math.round(scale * 100)}%
          </div>

          {/* Zoom In */}
          <button
            onClick={handleZoomIn}
            className="min-h-[44px] min-w-[36px] sm:min-w-[40px] flex items-center justify-center p-2 rounded bg-surface/60 hover:bg-surface active:scale-95 border border-surface-border text-muted-text hover:text-primary-text transition-all"
            title="Zoom In (+)"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4 text-accent-cyan" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={handleZoomOut}
            className="min-h-[44px] min-w-[36px] sm:min-w-[40px] flex items-center justify-center p-2 rounded bg-surface/60 hover:bg-surface active:scale-95 border border-surface-border text-muted-text hover:text-primary-text transition-all"
            title="Zoom Out (-)"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4 text-accent-violet" />
          </button>

          {/* Reset / 1:1 */}
          <button
            onClick={handleReset}
            className="min-h-[44px] min-w-[36px] sm:min-w-[40px] flex items-center justify-center p-2 rounded bg-surface/60 hover:bg-surface active:scale-95 border border-surface-border text-muted-text hover:text-primary-text transition-all"
            title="Reset Zoom (100%)"
            aria-label="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4 text-muted-text" />
          </button>

          {/* Visual Divider */}
          <div className="h-6 w-px bg-surface-border/80 mx-0.5 sm:mx-1 shrink-0" aria-hidden="true" />

          {/* Clearly Visible Top-Right X Close Button */}
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] w-11 h-11 flex items-center justify-center rounded-lg bg-accent-rose/15 hover:bg-accent-rose/25 active:bg-accent-rose/35 border border-accent-rose/40 hover:border-accent-rose text-accent-rose hover:text-rose-200 transition-all duration-150 active:scale-95 shadow-[0_0_12px_rgba(244,63,94,0.3)] hover:shadow-[0_0_18px_rgba(244,63,94,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-rose focus-visible:ring-offset-2 focus-visible:ring-offset-midnight shrink-0 ml-0.5 cursor-pointer"
            title="Close Lightbox (Esc)"
            aria-label="Close architecture diagram lightbox"
          >
            <X className="w-5 h-5 transition-transform duration-150 hover:scale-110" />
          </button>
        </div>
      </div>

      {/* Interactive Diagram Canvas */}
      <div
        ref={containerRef}
        onClick={handleBackdropClick}
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
          onClick={(e) => e.stopPropagation()}
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
            Use mouse wheel or buttons to zoom • Drag to pan when enlarged • Click backdrop or press Esc to close
          </span>
          <span className="sm:hidden">
            Pinch to zoom • Drag to pan • Tap ✕ or backdrop to close
          </span>
        </div>
        <span className="text-accent-violet">NOCTURNE // SIGNAL INSPECTOR</span>
      </div>
    </div>,
    document.body
  );
};
