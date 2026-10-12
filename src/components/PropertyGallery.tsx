import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  images: string[];
  alt: string;
}

export default function PropertyGallery({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <>
      {/* Stage layout: large primary + thumbnails */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Main image */}
        <div
          className="lg:col-span-2 relative rounded-2xl overflow-hidden img-zoom cursor-pointer aspect-[16/10]"
          onClick={() => setFullscreen(true)}
        >
          <img
            src={images[activeIndex]}
            alt={`${alt} — image ${activeIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-navy/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Fullscreen
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex-1 rounded-xl overflow-hidden transition-all duration-300 aspect-[4/3] lg:aspect-auto ${
                activeIndex === i
                  ? "ring-2 ring-champagne ring-offset-2 ring-offset-ivory"
                  : "opacity-60 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <img src={img} alt={`${alt} thumbnail ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setFullscreen(false)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"
              onClick={() => setFullscreen(false)}
              aria-label="Close fullscreen"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button
              className="absolute left-4 lg:left-8 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${alt} — fullscreen view`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 lg:right-8 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-champagne hover:text-champagne transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {activeIndex + 1} / {images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
