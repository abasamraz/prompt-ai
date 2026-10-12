import { useState } from "react";
import { Link } from "react-router-dom";
import SectionReveal from "../components/SectionReveal";
import MenuCard from "../components/MenuCard";
import MenuItemModal from "../components/MenuItemModal";
import { menuItems, type MenuItem } from "../data/cafe";
import { ArrowUpRight } from "../components/Icons";

export default function FeaturedMenu() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const featured = menuItems.filter((i) => i.featured).slice(0, 4);

  return (
    <section className="section-padding bg-[var(--cream)]">
      <div className="container-canvas">
        {/* Header */}
        <SectionReveal className="text-center mb-12">
          <p className="label-text mb-3">Our Menu</p>
          <div className="relative inline-block">
            <p className="script-text text-2xl text-[var(--terracotta)] absolute -top-7 -right-12 hidden md:block">
              Made with passion ♥
            </p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-balance">
              Crafted for Every Craving
            </h2>
          </div>
          <p className="text-[var(--text-muted)] mt-4 max-w-xl mx-auto leading-relaxed">
            From perfectly pulled espresso to freshly baked pastries — every item
            is made with care and the finest ingredients.
          </p>
        </SectionReveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, i) => (
            <SectionReveal key={item.id} delay={i * 0.1}>
              <MenuCard item={item} onClick={() => setSelectedItem(item)} />
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal className="text-center mt-10">
          <Link to="/menu" className="btn-dark">
            View Full Menu
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </SectionReveal>
      </div>

      <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
