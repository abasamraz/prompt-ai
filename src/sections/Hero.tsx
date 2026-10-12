import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cafeConfig, featureBar } from "../data/cafe";
import { FeatureIcon, ArrowUpRight } from "../components/Icons";

const heroImg =
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Café Horizon interior with warm lighting and coffee counter"
          className="w-full h-full object-cover"
          data-fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="container-canvas pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="label-text text-white/80 mb-4">
              Premium Coffee & Fresh Bites
            </p>
            <h1 className="heading-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5 text-balance">
              {cafeConfig.heroHeadline}
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mb-8 text-balance">
              {cafeConfig.heroSubtext}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-primary">
                Explore Our Menu
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-ghost-light">
                Visit Our Café
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature bar */}
      <div className="relative bg-[var(--cream)]">
        <div className="container-canvas">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--line)]">
            {featureBar.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 py-5 px-3 md:px-6"
              >
                <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <FeatureIcon
                    name={item.icon}
                    className="w-5 h-5 text-[var(--terracotta)]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-[var(--espresso)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-snug">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
