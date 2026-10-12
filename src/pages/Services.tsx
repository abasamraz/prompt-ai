import SectionReveal from "../components/SectionReveal";
import { services } from "../data/properties";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="container-canvas text-center">
          <SectionReveal>
            <span className="label-text mb-3 block">Our Expertise</span>
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl">Services</h1>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Comprehensive real estate services tailored to buyers, sellers, and investors.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-canvas">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.08}>
                <article className="card-lift bg-white rounded-2xl overflow-hidden border border-black/5 h-full">
                  <div className="img-zoom relative aspect-[16/10] overflow-hidden">
                    <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-champagne font-semibold tracking-label uppercase mb-2 block">
                      0{i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
                    <p className="text-sm text-navy/50 leading-relaxed">{service.description}</p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.2}>
            <div className="mt-16 text-center">
              <Link to="/contact" className="btn-primary">
                <span>Schedule a Consultation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
