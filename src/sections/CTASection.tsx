import SectionReveal from "../components/SectionReveal";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-cloud">
      <div className="container-canvas">
        <SectionReveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left: icon + text */}
            <div className="flex items-center gap-6 lg:gap-8 flex-1">
              <div className="shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-champagne/40 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-champagne">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <h2 className="heading-serif text-2xl sm:text-3xl lg:text-4xl text-navy mb-2">
                  Ready to Find Your Perfect Property?
                </h2>
                <p className="text-navy/50 text-base lg:text-lg">
                  Let our experts guide you to the right home or investment.
                </p>
              </div>
            </div>

            {/* Right: button */}
            <Link to="/contact" className="btn-primary shrink-0">
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
