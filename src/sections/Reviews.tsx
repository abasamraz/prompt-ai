import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { reviews } from "../data/cafe";
import { StarIcon, ArrowLeftIcon, ArrowRightIcon } from "../components/Icons";

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  const review = reviews[current];

  return (
    <section className="section-padding bg-[var(--warm-white)]">
      <div className="container-canvas">
        {/* Header */}
        <SectionReveal className="text-center mb-10">
          <p className="label-text mb-3">Kind Words</p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl">
            What Our Guests Say
          </h2>
        </SectionReveal>

        {/* Review carousel */}
        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-[var(--terracotta)]"
                          : "text-[var(--line-strong)]"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="heading-serif text-xl md:text-2xl leading-relaxed text-[var(--espresso)] mb-6 text-balance">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-semibold text-[var(--espresso)]">
                    {review.name}
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">{review.date}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[var(--line-strong)] flex items-center justify-center text-[var(--espresso)] hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] transition-colors"
                aria-label="Previous review"
              >
                <ArrowLeftIcon className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {reviews.map((r, i) => (
                  <button
                    key={r.id}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === current
                        ? "w-6 bg-[var(--terracotta)]"
                        : "w-2 bg-[var(--line-strong)]"
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[var(--line-strong)] flex items-center justify-center text-[var(--espresso)] hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] transition-colors"
                aria-label="Next review"
              >
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </SectionReveal>

        {/* Disclaimer */}
        <p className="text-xs text-center text-[var(--text-muted)] mt-8 max-w-md mx-auto">
          Sample reviews for demonstration. Replace with real customer feedback.
        </p>
      </div>
    </section>
  );
}
