import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "../data/cafe";
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "./Icons";

export default function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}) {
  const current = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white p-2 transition-colors"
          aria-label="Close gallery"
        >
          <CloseIcon className="w-7 h-7 md:w-8 md:h-8" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2 transition-colors"
          aria-label="Previous image"
        >
          <ArrowLeftIcon className="w-7 h-7 md:w-8 md:h-8" />
        </button>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-w-full max-h-[75vh] object-contain rounded-lg"
          />
          <p className="text-white/60 text-sm mt-4 text-center max-w-lg px-4">
            {current.alt}
          </p>
          <p className="text-white/30 text-xs mt-1">
            {index + 1} / {images.length}
          </p>
        </motion.div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2 transition-colors"
          aria-label="Next image"
        >
          <ArrowRightIcon className="w-7 h-7 md:w-8 md:h-8" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
