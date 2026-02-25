// HorizontalScrollContainer.debug.tsx
"use client";

import { useEffect, useRef, ReactNode, useState } from "react";

interface HorizontalScrollContainerProps {
  children: ReactNode;
}

export const HorizontalScrollContainer = ({
  children,
}: HorizontalScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [debug, setDebug] = useState({ hasScrollable: false, atTop: false, atBottom: false });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Force prevent default for testing
      
      const target = e.target as HTMLElement;
      const scrollableElement = target.closest('[data-scrollable="true"]') as HTMLElement;
      
      console.log('Wheel event:', {
        target: target.tagName,
        hasScrollable: !!scrollableElement,
        deltaY: e.deltaY,
        clientX: e.clientX,
        clientY: e.clientY
      });

      // Force horizontal scroll
      container.scrollLeft += e.deltaY * 1.5;
    };

    // Use capture phase to catch events before they bubble
    container.addEventListener('wheel', handleWheel, { passive: false, capture: true });

    return () => {
      container.removeEventListener('wheel', handleWheel, { capture: true });
    };
  }, []);

  return (
    <div
      id="horizontal-container"
      ref={containerRef}
      className="flex h-screen w-screen overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {children}
    </div>
  );
};