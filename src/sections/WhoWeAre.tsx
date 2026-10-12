import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionReveal from "../components/SectionReveal";
import { aboutImages } from "../data/properties";

const stats = [
  { icon: "home", label: "Premium Listings", value: "250+" },
  { icon: "users", label: "Happy Clients", value: "500+" },
  { icon: "award", label: "Years of Excellence", value: "15" },
];

export default function WhoWeAre() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-canvas">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <SectionReveal>
            <span className="label-text mb-4 block">About Us</span>
            <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-6">
              Who We Are
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-8 max-w-lg">
              At Horizon Properties, we connect people with extraordinary homes
              and smart investments. Integrity, transparency, and client
              satisfaction are at the heart of everything we do.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <StatIcon name={s.icon} />
                  <div className="mt-2">
                    <div className="text-2xl font-bold text-navy">{s.value}</div>
                    <div className="text-xs text-navy/50 uppercase tracking-label">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              <span>Learn More</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </SectionReveal>

          {/* Right: asymmetric image composition */}
          <SectionReveal delay={0.15}>
            <div className="relative grid grid-cols-12 gap-4">
              <div className="col-span-8 img-zoom rounded-2xl overflow-hidden">
                <img
                  src={aboutImages.main}
                  alt="Luxury modern home with pool — architectural photography"
                  loading="lazy"
                  className="w-full h-[420px] lg:h-[520px] object-cover"
                />
              </div>
              <div className="col-span-4 flex flex-col gap-4">
                <div className="img-zoom rounded-2xl overflow-hidden flex-1">
                  <img
                    src={aboutImages.secondary}
                    alt="Modern architectural detail"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl bg-navy p-5 flex items-center justify-center"
                >
                  <Link
                    to="/properties"
                    className="flex flex-col items-center gap-2 text-champagne"
                    aria-label="Browse all properties"
                  >
                    <span className="w-12 h-12 rounded-full border border-champagne/40 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[11px] uppercase tracking-label">View All</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function StatIcon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "#C5A059",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "home")
    return (
      <svg {...common}>
        <path d="M3 12l9-9 9 9M5 10v10h14V10" />
      </svg>
    );
  if (name === "users")
    return (
      <svg {...common}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5" />
    </svg>
  );
}
