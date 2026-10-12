import SectionReveal from "../components/SectionReveal";
import { Link } from "react-router-dom";
import { aboutImages } from "../data/properties";

const values = [
  { title: "Integrity", description: "We operate with complete transparency and honesty in every transaction." },
  { title: "Excellence", description: "We pursue the highest standard of service and representation." },
  { title: "Client Focus", description: "Your goals and satisfaction drive every decision we make." },
  { title: "Expertise", description: "Deep market knowledge and architectural understanding inform our guidance." },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="container-canvas text-center">
          <SectionReveal>
            <span className="label-text mb-3 block">About Horizon</span>
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl">
              More Than Just Property
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-ivory">
        <div className="container-canvas">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <span className="label-text mb-4 block">Our Story</span>
              <h2 className="heading-serif text-3xl sm:text-4xl text-navy mb-6">
                Connecting People With Extraordinary Places
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-6">
                Founded in 2009, Horizon Properties began with a simple vision: to
                redefine the real estate experience through trust, expertise, and
                an unwavering commitment to quality. Over fifteen years, we have
                grown into one of the most respected names in luxury property sales
                and investment advisory.
              </p>
              <p className="text-navy/60 text-lg leading-relaxed mb-8">
                Our team of seasoned professionals brings together decades of
                experience in architecture, finance, and real estate, allowing us
                to offer a level of insight and service that goes far beyond a
                typical agency.
              </p>
              <Link to="/contact" className="btn-primary">
                <span>Get in Touch</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="img-zoom rounded-2xl overflow-hidden">
                <img src={aboutImages.main} alt="Luxury modern home architectural photography" loading="lazy" className="w-full h-[480px] object-cover" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-canvas">
          <SectionReveal className="text-center mb-16">
            <span className="label-text mb-3 block">Our Values</span>
            <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-navy">
              What We Stand For
            </h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.08}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border border-champagne/30 flex items-center justify-center mx-auto mb-5">
                    <span className="text-champagne text-lg font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-2">{v.title}</h3>
                  <p className="text-sm text-navy/50 leading-relaxed">{v.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
