// HorizontalScrollContainer.tsx
"use client";

import { useEffect, useRef, ReactNode } from "react";

interface HorizontalScrollContainerProps {
  children: ReactNode;
}

export const HorizontalScrollContainer = ({
  children,
}: HorizontalScrollContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      
      // Find the scrollable element (marked with data-scrollable="true")
      const scrollableElement = target.closest('[data-scrollable="true"]') as HTMLElement;
      
      // If we're inside a scrollable element that can scroll vertically
      if (scrollableElement) {
        const isScrollingDown = e.deltaY > 0;
        const isScrollingUp = e.deltaY < 0;
        
        const canScrollDown = scrollableElement.scrollTop < 
          (scrollableElement.scrollHeight - scrollableElement.clientHeight - 5); // 5px threshold
        const canScrollUp = scrollableElement.scrollTop > 5; // 5px threshold
        
        // If we can scroll vertically in the current direction, let it happen
        if ((isScrollingDown && canScrollDown) || (isScrollingUp && canScrollUp)) {
          return; // Allow vertical scrolling
        }
        
        // If we're at the top scrolling up or at the bottom scrolling down,
        // prevent default and handle horizontal scrolling
        e.preventDefault();
        
        // Prevent multiple rapid scrolls
        if (!isScrollingRef.current) {
          isScrollingRef.current = true;
          
          // Scroll horizontally
          container.scrollLeft += e.deltaY * 1.5;
          
          // Reset scrolling flag after animation
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 50);
        }
      } else {
        // If not in a scrollable element, always scroll horizontally
        e.preventDefault();
        container.scrollLeft += e.deltaY * 1.5;
      }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        container.scrollLeft += window.innerWidth;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        container.scrollLeft -= window.innerWidth;
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
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