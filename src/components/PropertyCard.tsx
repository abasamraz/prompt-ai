import { Link } from "react-router-dom";
import type { Property } from "../data/properties";

interface Props {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: Props) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="group block no-tap-highlight"
      aria-label={`View ${property.name}`}
    >
      <article className="card-lift bg-white rounded-2xl overflow-hidden border border-black/5">
        {/* Image */}
        <div className="img-zoom relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={`${property.name} — ${property.location}`}
            loading={index < 2 ? "eager" : "lazy"}
            className="w-full h-full object-cover"
          />
          {property.featured && (
            <span className="absolute top-4 left-4 bg-champagne text-navy text-[11px] font-semibold tracking-label uppercase px-3 py-1.5 rounded-full">
              Featured
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-5 lg:p-6">
          <div className="flex items-center gap-2 text-xs text-champagne font-medium tracking-wide mb-2">
            <span>{property.type}</span>
            <span className="text-navy/20">•</span>
            <span className="text-navy/50">{property.bedrooms} BD</span>
            <span className="text-navy/20">•</span>
            <span className="text-navy/50">{property.bathrooms} BA</span>
          </div>

          <h3 className="text-lg font-bold text-navy mb-1 leading-snug group-hover:text-champagne-dark transition-colors duration-300">
            {property.name}
          </h3>

          <p className="text-sm text-navy/50 mb-4 flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {property.location}
          </p>

          <div className="flex items-end justify-between pt-3 border-t border-navy/5">
            <div>
              <span className="block text-[11px] text-navy/40 uppercase tracking-label mb-0.5">Price</span>
              <span className="text-lg font-bold text-champagne">{property.priceLabel}</span>
            </div>
            <span className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
