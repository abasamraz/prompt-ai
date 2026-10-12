import { useState, useMemo } from "react";
import SectionReveal from "../components/SectionReveal";
import MenuCard from "../components/MenuCard";
import MenuItemModal from "../components/MenuItemModal";
import { menuItems, menuCategories, type MenuItem } from "../data/cafe";
import { SearchIcon } from "../components/Icons";

export default function MenuPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      {/* Page header */}
      <section className="pt-24 md:pt-32 pb-10 bg-[var(--cream)]">
        <div className="container-canvas text-center">
          <SectionReveal>
            <p className="label-text mb-3">Our Menu</p>
            <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-balance">
              Crafted for Every Craving
            </h1>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              Explore our full selection of coffee, pastries, and light bites.
              Every item is made fresh with the finest ingredients.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-y border-[var(--line)]">
        <div className="container-canvas py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto hide-scrollbar w-full md:w-auto -mx-1 px-1">
              {menuCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    category === cat
                      ? "bg-[var(--espresso)] text-white"
                      : "bg-[var(--cream)] text-[var(--espresso)] hover:bg-[var(--cream-dark)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full md:w-64 shrink-0">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search menu..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-[var(--line-strong)] text-sm bg-[var(--cream)] focus:outline-none focus:border-[var(--terracotta)] transition-colors"
                aria-label="Search menu items"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu grid */}
      <section className="section-padding bg-[var(--warm-white)]">
        <div className="container-canvas">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[var(--text-muted)] text-lg">
                No items found. Try a different search or category.
              </p>
              <button
                onClick={() => {
                  setCategory("All");
                  setQuery("");
                }}
                className="btn-outline mt-4"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-[var(--text-muted)] mb-6">
                {filtered.length} {filtered.length === 1 ? "item" : "items"}
                {category !== "All" && ` in ${category}`}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((item, i) => (
                  <SectionReveal key={item.id} delay={(i % 4) * 0.05}>
                    <MenuCard
                      item={item}
                      onClick={() => setSelectedItem(item)}
                    />
                  </SectionReveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
