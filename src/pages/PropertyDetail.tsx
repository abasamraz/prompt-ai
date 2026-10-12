import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { getProperty, getSimilarProperties } from "../data/properties";
import type { Property } from "../data/properties";
import PropertyGallery from "../components/PropertyGallery";
import PropertyCard from "../components/PropertyCard";
import SectionReveal from "../components/SectionReveal";
import NotFound from "./NotFound";

const featureIcons: Record<string, React.ReactNode> = {
  bedrooms: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10M2 17h20M2 17v2M22 17v2M6 7v4h12V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bathrooms: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 12V5a2 2 0 012-2 2 2 0 012 2v1M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3zM20 12V8a2 2 0 00-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sqft: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  type: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 12l9-9 9 9M5 10v10h14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = id ? getProperty(id) : undefined;
  const [saved, setSaved] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  if (!property) return <NotFound />;

  const similar = getSimilarProperties(property.id, 3);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="container-canvas py-6">
        <nav className="flex items-center gap-2 text-sm text-navy/40" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-champagne transition-colors">Home</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-champagne transition-colors">Properties</Link>
          <span>/</span>
          <span className="text-navy/70 truncate">{property.name}</span>
        </nav>
      </div>

      {/* Gallery */}
      <div className="container-canvas pb-8">
        <PropertyGallery images={property.images} alt={property.name} />
      </div>

      {/* Main content */}
      <div className="container-canvas pb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: details */}
          <div className="lg:col-span-2">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-champagne font-semibold tracking-label uppercase">{property.type}</span>
                {property.featured && (
                  <span className="bg-champagne/15 text-champagne-dark text-[11px] font-semibold tracking-label uppercase px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-3">
                {property.name}
              </h1>
              <p className="text-navy/50 flex items-center gap-2 mb-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                {property.location}
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-navy/10 mb-8">
                <Stat icon="bedrooms" label="Bedrooms" value={String(property.bedrooms)} />
                <Stat icon="bathrooms" label="Bathrooms" value={String(property.bathrooms)} />
                <Stat icon="sqft" label="Sq Ft" value={property.sqft.toLocaleString()} />
                <Stat icon="type" label="Built" value={String(property.yearBuilt)} />
              </div>

              {/* Description */}
              <h2 className="text-xl font-bold text-navy mb-4">About This Property</h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10">{property.description}</p>

              {/* Features */}
              <h2 className="text-xl font-bold text-navy mb-4">Key Features</h2>
              <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                {property.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-navy/60">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-champagne">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Amenities */}
              <h2 className="text-xl font-bold text-navy mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-2.5 mb-10">
                {property.amenities.map((a) => (
                  <span key={a} className="text-sm text-navy/60 bg-cloud px-4 py-2 rounded-full border border-navy/5">
                    {a}
                  </span>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right: sticky contact card */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <SectionReveal delay={0.1}>
                <div className="bg-white rounded-2xl border border-navy/5 p-6 lg:p-8 shadow-sm">
                  <div className="flex items-baseline justify-between mb-6">
                    <div>
                      <span className="block text-xs text-navy/40 uppercase tracking-label mb-1">Price</span>
                      <span className="text-2xl font-bold text-champagne">{property.priceLabel}</span>
                    </div>
                    <button
                      onClick={() => setSaved(!saved)}
                      className="w-11 h-11 rounded-full border border-navy/10 flex items-center justify-center transition-all duration-300 hover:border-champagne"
                      aria-label={saved ? "Remove from favorites" : "Add to favorites"}
                      aria-pressed={saved}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill={saved ? "#C5A059" : "none"} className={saved ? "text-champagne" : "text-navy/40"}>
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  {/* Agent */}
                  <div className="flex items-center gap-4 pb-6 border-b border-navy/5 mb-6">
                    <img src={property.agent.photo} alt={property.agent.name} className="w-14 h-14 rounded-full object-cover" loading="lazy" />
                    <div>
                      <div className="font-semibold text-navy text-sm">{property.agent.name}</div>
                      <div className="text-xs text-navy/40">{property.agent.role}</div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowSchedule(true)}
                      className="btn-primary w-full justify-center"
                    >
                      <span>Schedule a Viewing</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <a href={`tel:${property.agent.phone.replace(/[()\- ]/g, "")}`} className="btn-champagne w-full justify-center">
                      <span className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Contact Agent
                      </span>
                    </a>
                  </div>

                  {/* Quick info */}
                  <div className="mt-6 pt-6 border-t border-navy/5 space-y-2 text-sm">
                    <div className="flex justify-between text-navy/50">
                      <span>Lot Size</span>
                      <span className="text-navy font-medium">{property.lotSize}</span>
                    </div>
                    <div className="flex justify-between text-navy/50">
                      <span>Year Built</span>
                      <span className="text-navy font-medium">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between text-navy/50">
                      <span>Property Type</span>
                      <span className="text-navy font-medium">{property.type}</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Similar properties */}
      <section className="section-padding bg-ivory">
        <div className="container-canvas">
          <SectionReveal className="mb-12">
            <span className="label-text mb-3 block">You May Also Like</span>
            <h2 className="heading-serif text-3xl sm:text-4xl text-navy">Similar Properties</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similar.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule modal */}
      {showSchedule && (
        <ScheduleModal property={property} onClose={() => setShowSchedule(false)} />
      )}
    </div>
  );
}

function Stat({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-champagne shrink-0">{featureIcons[icon]}</span>
      <div>
        <div className="text-lg font-bold text-navy">{value}</div>
        <div className="text-xs text-navy/40 uppercase tracking-label">{label}</div>
      </div>
    </div>
  );
}

function ScheduleModal({ property, onClose }: { property: Property; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-navy/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="bg-white rounded-2xl p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-champagne/15 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-champagne">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Request Sent!</h3>
            <p className="text-navy/50 text-sm">We'll contact you shortly to confirm your viewing of {property?.name}.</p>
            <button onClick={onClose} className="btn-primary mt-6 mx-auto">
              <span>Done</span>
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-navy mb-2">Schedule a Viewing</h3>
            <p className="text-sm text-navy/50 mb-6">{property?.name}</p>
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-4"
            >
              <input type="text" placeholder="Your Name" required className="w-full bg-cloud border border-navy/10 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-champagne/50 focus:outline-none transition-colors" aria-label="Your name" />
              <input type="email" placeholder="Your Email" required className="w-full bg-cloud border border-navy/10 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-champagne/50 focus:outline-none transition-colors" aria-label="Your email" />
              <input type="date" required className="w-full bg-cloud border border-navy/10 rounded-xl px-4 py-3 text-sm text-navy focus:border-champagne/50 focus:outline-none transition-colors" aria-label="Preferred date" />
              <textarea placeholder="Message (optional)" rows={3} className="w-full bg-cloud border border-navy/10 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-champagne/50 focus:outline-none transition-colors resize-none" aria-label="Message" />
              <button type="submit" className="btn-primary w-full justify-center">
                <span>Request Viewing</span>
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
