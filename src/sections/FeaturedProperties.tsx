import SectionReveal from "../components/SectionReveal";
import PropertyCarousel from "../components/PropertyCarousel";
import { properties } from "../data/properties";
import { Link } from "react-router-dom";

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-white">
      <div className="container-canvas">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <SectionReveal>
            <span className="label-text mb-3 block">Featured</span>
            <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-navy">
              Featured Properties
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Link
              to="/properties"
              className="text-sm font-medium text-navy/60 hover:text-champagne transition-colors duration-300 flex items-center gap-2 group"
            >
              View All Properties
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </SectionReveal>
        </div>

        {/* Carousel */}
        <SectionReveal delay={0.15}>
          <PropertyCarousel properties={properties} />
        </SectionReveal>
      </div>
    </section>
  );
}
