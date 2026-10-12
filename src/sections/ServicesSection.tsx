import SectionReveal from "../components/SectionReveal";
import { services } from "../data/properties";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-canvas">
        <SectionReveal className="text-center mb-16">
          <span className="label-text mb-3 block">What We Offer</span>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-navy">
            Our Services
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.08}>
              <Link to="/services" className="group block no-tap-highlight">
                <article className="card-lift bg-white rounded-2xl overflow-hidden border border-black/5 h-full">
                  <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-champagne-dark transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-navy/50 leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-champagne uppercase tracking-label">
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
