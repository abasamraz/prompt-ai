import { Link } from "react-router-dom";
import SectionReveal from "../components/SectionReveal";
import { coffeeBlocks, cafeConfig } from "../data/cafe";
import { ArrowUpRight } from "../components/Icons";

const heroImg =
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1920&q=80";

export default function CoffeePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Coffee beans at Café Horizon"
            className="w-full h-full object-cover"
            data-fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container-canvas pt-20">
          <SectionReveal>
            <p className="label-text text-white/80 mb-3">Our Craft</p>
            <h1 className="heading-serif text-white text-4xl md:text-5xl lg:text-6xl text-balance max-w-2xl">
              The Art Behind Every Cup
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-[var(--warm-white)]">
        <div className="container-canvas">
          <SectionReveal className="max-w-2xl mx-auto text-center">
            <p className="text-[var(--text-muted)] text-lg leading-relaxed">
              Great coffee doesn't happen by accident. It's the result of
              careful sourcing, precise roasting, and baristas who treat every
              cup as a craft. Here's how we do it.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Coffee blocks */}
      <section className="pb-16 md:pb-24 bg-[var(--warm-white)]">
        <div className="container-canvas">
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
                    <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/3]">
                      <img
                        src={block.image}
                        alt={block.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
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

      {/* CTA */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-canvas text-center max-w-2xl mx-auto">
          <SectionReveal>
            <h2 className="heading-serif text-3xl md:text-4xl mb-4 text-balance">
              Taste the Difference
            </h2>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
              Experience coffee the way it was meant to be. Visit us or explore
              our full menu.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/menu" className="btn-primary">
                Explore Menu
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Visit Our Café
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
