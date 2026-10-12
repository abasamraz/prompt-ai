import { useRef } from "react";
import SectionReveal from "../components/SectionReveal";
import DrinkCard from "../components/DrinkCard";
import { signatureDrinks } from "../data/cafe";
import { ArrowLeftIcon, ArrowRightIcon } from "../components/Icons";

export default function SignatureDrinks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.querySelector("[data-card]")?.clientWidth ?? 320;
    const gap = 24;
    container.scrollBy({
      left: dir === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding bg-[var(--cream)] overflow-hidden">
      <div className="container-canvas">
        {/* Header */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="label-text mb-3">Signature Drinks</p>
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-balance">
                Drinks Worth Discovering
              </h2>
            </div>
            {/* Desktop controls */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-11 h-11 rounded-full border border-[var(--line-strong)] flex items-center justify-center text-[var(--espresso)] hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] transition-colors"
                aria-label="Previous drinks"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-11 h-11 rounded-full border border-[var(--line-strong)] flex items-center justify-center text-[var(--espresso)] hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] transition-colors"
                aria-label="Next drinks"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Carousel */}
      <SectionReveal>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-2 px-4 md:px-[max(2rem,calc((100vw-110rem)/2+2rem))]"
        >
          {signatureDrinks.map((drink) => (
            <div
              key={drink.id}
              data-card
              className="snap-start shrink-0 w-[260px] sm:w-[280px]"
            >
              <DrinkCard drink={drink} />
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Mobile controls */}
      <div className="container-canvas md:hidden mt-6 flex justify-center gap-3">
        <button
          onClick={() => scroll("left")}
          className="w-11 h-11 rounded-full border border-[var(--line-strong)] flex items-center justify-center text-[var(--espresso)] hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] transition-colors"
          aria-label="Previous drinks"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-11 h-11 rounded-full border border-[var(--line-strong)] flex items-center justify-center text-[var(--espresso)] hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] transition-colors"
          aria-label="Next drinks"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
