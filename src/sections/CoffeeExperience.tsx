import SectionReveal from "../components/SectionReveal";
import { coffeeBlocks } from "../data/cafe";

export default function CoffeeExperience() {
  return (
    <section className="section-padding bg-[var(--warm-white)]">
      <div className="container-canvas">
        {/* Header */}
        <SectionReveal className="text-center mb-14 max-w-2xl mx-auto">
          <p className="label-text mb-3">The Coffee Experience</p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            From Bean to Cup, Every Step Matters
          </h2>
        </SectionReveal>

        {/* Blocks */}
        <div className="space-y-16 md:space-y-24">
          {coffeeBlocks.map((block, i) => {
            const reversed = i % 2 === 1;
            return (
              <SectionReveal key={block.id}>
                <div
                  className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={block.image}
                      alt={block.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Text */}
                  <div>
                    <p className="label-text mb-3">{block.label}</p>
                    <h3 className="heading-serif text-2xl md:text-3xl mb-4">
                      {block.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-md">
                      {block.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
