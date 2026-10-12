import { useState } from "react";
import SectionReveal from "../components/SectionReveal";
import GalleryLightbox from "../components/GalleryLightbox";
import { galleryImages } from "../data/cafe";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "../components/Icons";

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-[var(--warm-white)]">
      <div className="container-canvas">
        {/* Header */}
        <SectionReveal className="text-center mb-10 max-w-2xl mx-auto">
          <p className="label-text mb-3">Gallery</p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            A Glimpse of the Experience
          </h2>
          <p className="text-[var(--text-muted)] mt-4 leading-relaxed">
            Step inside and feel the warmth. Every corner tells a story.
          </p>
        </SectionReveal>

        {/* Asymmetric grid */}
        <SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px]">
            {galleryImages.map((img, i) => (
              <button
                key={img.id}
                onClick={() => setLightboxIndex(i)}
                className={`img-zoom rounded-xl overflow-hidden relative group cursor-pointer ${
                  img.span === "tall"
                    ? "row-span-2"
                    : img.span === "wide"
                    ? "col-span-2"
                    : ""
                }`}
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal className="text-center mt-10">
          <Link to="/gallery" className="btn-outline">
            View Full Gallery
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </SectionReveal>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
