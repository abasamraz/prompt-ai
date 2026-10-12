import { useState } from "react";
import SectionReveal from "../components/SectionReveal";
import GalleryLightbox from "../components/GalleryLightbox";
import { galleryImages } from "../data/cafe";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-10 bg-[var(--cream)]">
        <div className="container-canvas text-center">
          <SectionReveal>
            <p className="label-text mb-3">Gallery</p>
            <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-balance">
              The Café Horizon Experience
            </h1>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              A look inside our space, our craft, and the moments that make Café
              Horizon special. Click any image to view full size.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-padding bg-[var(--warm-white)]">
        <div className="container-canvas">
          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
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
        </div>
      </section>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
