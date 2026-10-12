import { useRef, useState, useCallback } from "react";
import PropertyCard from "./PropertyCard";
import type { Property } from "../data/properties";

interface Props {
  properties: Property[];
}

export default function PropertyCarousel({ properties }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollByAmount = (dir: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.7 * dir;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const container = scrollRef.current;
      if (!container) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const stopDragging = useCallback(() => setIsDragging(false), []);

  return (
    <div className="relative">
      {/* Arrows — desktop */}
      <div className="hidden lg:flex items-center gap-3 absolute -top-16 right-0">
        <button
          onClick={() => scrollByAmount(-1)}
          className="w-12 h-12 rounded-full border border-navy/15 flex items-center justify-center text-navy/60 hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
          aria-label="Previous properties"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={() => scrollByAmount(1)}
          className="w-12 h-12 rounded-full border border-navy/15 flex items-center justify-center text-navy/60 hover:bg-navy hover:text-white hover:border-navy transition-all duration-300"
          aria-label="Next properties"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 select-none cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {properties.map((p, i) => (
          <div
            key={p.id}
            className="shrink-0 w-[300px] sm:w-[340px] lg:w-[380px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <PropertyCard property={p} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
