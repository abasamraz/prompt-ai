import { useState, useMemo } from "react";
import PropertyCard from "../components/PropertyCard";
import SectionReveal from "../components/SectionReveal";
import { properties, locations, propertyTypes } from "../data/properties";

export default function Properties() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [minBathrooms, setMinBathrooms] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.location.toLowerCase().includes(search.toLowerCase()))
        return false;
      if (location !== "All" && p.city !== location) return false;
      if (type !== "All" && p.type !== type) return false;
      if (p.bedrooms < minBedrooms) return false;
      if (p.bathrooms < minBathrooms) return false;
      if (priceRange !== "all") {
        const [min, max] = priceRange.split("-").map(Number);
        if (max && (p.price < min || p.price > max)) return false;
        if (!max && p.price < min) return false;
      }
      return true;
    });

    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "bedrooms":
        result = [...result].sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      default:
        result = [...result].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return result;
  }, [search, location, type, minBedrooms, minBathrooms, sortBy, priceRange]);

  const resetFilters = () => {
    setSearch("");
    setLocation("All");
    setType("All");
    setMinBedrooms(0);
    setMinBathrooms(0);
    setSortBy("featured");
    setPriceRange("all");
  };

  return (
    <div className="pt-20">
      {/* Page header */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="container-canvas text-center">
          <SectionReveal>
            <span className="label-text mb-3 block">Browse Our Collection</span>
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl">
              Properties
            </h1>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Explore our curated portfolio of premium homes and investment properties.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[60px] z-30 bg-ivory/95 backdrop-blur-md border-b border-navy/5 py-4">
        <div className="container-canvas">
          <div className="flex flex-wrap items-center gap-3 lg:gap-4">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <input
                type="text"
                placeholder="Search properties..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-navy/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:border-champagne/50 focus:outline-none transition-colors"
                aria-label="Search properties"
              />
            </div>

            {/* Location */}
            <FilterSelect label="Location" value={location} onChange={setLocation} options={[{ value: "All", label: "All Locations" }, ...locations.map((l) => ({ value: l, label: l }))]} />
            {/* Type */}
            <FilterSelect label="Type" value={type} onChange={setType} options={[{ value: "All", label: "All Types" }, ...propertyTypes.map((t) => ({ value: t, label: t }))]} />
            {/* Price */}
            <FilterSelect
              label="Price"
              value={priceRange}
              onChange={setPriceRange}
              options={[
                { value: "all", label: "All Prices" },
                { value: "0-2500000", label: "Under $2.5M" },
                { value: "2500000-4000000", label: "$2.5M – $4M" },
                { value: "4000000-0", label: "Over $4M" },
              ]}
            />
            {/* Bedrooms */}
            <FilterSelect
              label="Beds"
              value={String(minBedrooms)}
              onChange={(v) => setMinBedrooms(Number(v))}
              options={[
                { value: "0", label: "Any Beds" },
                { value: "3", label: "3+" },
                { value: "4", label: "4+" },
                { value: "5", label: "5+" },
                { value: "6", label: "6+" },
              ]}
            />
            {/* Sort */}
            <FilterSelect
              label="Sort"
              value={sortBy}
              onChange={setSortBy}
              options={[
                { value: "featured", label: "Featured" },
                { value: "price-low", label: "Price: Low to High" },
                { value: "price-high", label: "Price: High to Low" },
                { value: "bedrooms", label: "Most Bedrooms" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-ivory">
        <div className="container-canvas">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-navy/50">
              <span className="font-semibold text-navy">{filtered.length}</span> propert{filtered.length === 1 ? "y" : "ies"} found
            </p>
            <button
              onClick={resetFilters}
              className="text-sm text-champagne hover:text-champagne-dark transition-colors"
            >
              Reset Filters
            </button>
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-navy/40 text-lg">No properties match your filters.</p>
              <button onClick={resetFilters} className="btn-primary mt-6">
                <span>Clear Filters</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

interface FilterOption {
  value: string;
  label: string;
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: FilterOption[];
}) {
  const normalized = options;
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white border border-navy/10 rounded-full pl-4 pr-9 py-2.5 text-sm text-navy font-medium cursor-pointer focus:border-champagne/50 focus:outline-none transition-colors"
        aria-label={`Filter by ${label}`}
      >
        {normalized.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-navy/40">
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
