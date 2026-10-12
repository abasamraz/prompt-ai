import { Link } from "react-router-dom";
import SectionReveal from "../components/SectionReveal";
import { cafeConfig, storyFeatures } from "../data/cafe";
import { FeatureIcon, ArrowUpRight } from "../components/Icons";

const mainImg =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80";
const secondaryImg =
  "https://images.pexels.com/photos/683037/pexels-photo-683037.jpeg?auto=compress&cs=tinysrgb&w=500";

export default function OurStory() {
  return (
    <section id="story" className="section-padding bg-[var(--warm-white)]">
      <div className="container-canvas">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <SectionReveal>
            <p className="label-text mb-4">Our Story</p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-5 text-balance">
              {cafeConfig.storyHeadline}
            </h2>
            <p className="text-[var(--text-muted)] text-base md:text-lg leading-relaxed mb-6 max-w-lg">
              {cafeConfig.storyBody}
            </p>
            <Link to="/coffee" className="btn-dark mb-8">
              Discover Our Story
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Side features */}
            <div className="space-y-3 pt-6 border-t border-[var(--line)]">
              {storyFeatures.map((f) => (
                <div key={f.title} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--cream)] flex items-center justify-center shrink-0">
                    <FeatureIcon
                      name={f.icon}
                      className="w-4 h-4 text-[var(--terracotta)]"
                    />
                  </div>
                  <span className="font-medium text-sm text-[var(--espresso)]">
                    {f.title}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Right: Images */}
          <SectionReveal delay={0.15}>
            <div className="relative">
              {/* Script accent */}
              <p className="script-text text-2xl text-[var(--terracotta)] absolute -top-8 right-4 z-10 rotate-3 hidden md:block">
                Good Coffee, Good Mood ♥
              </p>
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/5] mb-4">
                <img
                  src={mainImg}
                  alt="Barista crafting coffee at Café Horizon"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Secondary image — overlapping */}
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[4/3] w-2/3 -mt-16 ml-auto border-4 border-white shadow-xl relative">
                <img
                  src={secondaryImg}
                  alt="Coffee detail at Café Horizon"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
