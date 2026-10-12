import SectionReveal from "../components/SectionReveal";

const reasons = [
  {
    title: "Curated Selection",
    description:
      "Every property is hand-selected for architectural merit, location, and investment potential.",
  },
  {
    title: "Expert Guidance",
    description:
      "Our advisors bring decades of combined experience in luxury real estate and investment strategy.",
  },
  {
    title: "Transparent Process",
    description:
      "Full visibility at every step — from search to closing — with no hidden fees or surprises.",
  },
  {
    title: "Global Network",
    description:
      "Access to off-market listings and an international network of buyers, sellers, and partners.",
  },
];

export default function WhyChooseHorizon() {
  return (
    <section className="section-padding bg-navy text-white relative overflow-hidden">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-champagne/40 to-transparent" />

      <div className="container-canvas">
        <SectionReveal className="text-center mb-16">
          <span className="label-text mb-3 block">Why Horizon</span>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl">
            Why Choose Horizon
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <SectionReveal key={reason.title} delay={i * 0.1}>
              <div className="text-center lg:text-left">
                <div className="w-12 h-12 rounded-full border border-champagne/30 flex items-center justify-center mb-5 mx-auto lg:mx-0">
                  <span className="text-champagne text-lg font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
