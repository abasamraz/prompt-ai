import SectionReveal from "../components/SectionReveal";
import { features } from "../data/cafe";
import { FeatureIcon } from "../components/Icons";

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[var(--cream)]">
      <div className="container-canvas">
        {/* Header */}
        <SectionReveal className="text-center mb-12 max-w-2xl mx-auto">
          <p className="label-text mb-3">Why Café Horizon</p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            More Than a Coffee Shop
          </h2>
        </SectionReveal>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((f, i) => (
            <SectionReveal key={f.id} delay={(i % 3) * 0.1}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <FeatureIcon
                    name={f.icon}
                    className="w-5 h-5 text-[var(--terracotta)]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-[var(--espresso)] mb-1">
                    {f.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
