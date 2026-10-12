import type { MenuItem } from "../data/cafe";
import { useCart } from "../context/CartContext";
import { PlusIcon } from "./Icons";

export default function MenuCard({
  item,
  onClick,
}: {
  item: MenuItem;
  onClick: () => void;
}) {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const medium = item.sizes?.find((s) => s.name.includes("Medium"));
    const sizeModifier = medium?.modifier ?? 0;
    addItem({
      id: item.id,
      name: item.name,
      basePrice: item.price,
      quantity: 1,
      image: item.image,
      size: medium?.name,
      sizeModifier,
      unitPrice: item.price + sizeModifier,
    });
  };

  return (
    <div
      className="card-lift cursor-pointer bg-white rounded-2xl overflow-hidden border border-[var(--line)] group"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="img-zoom relative aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.featured && (
            <span className="badge badge-featured">Featured</span>
          )}
          {item.bestseller && (
            <span className="badge badge-bestseller">Bestseller</span>
          )}
        </div>
        {!item.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-medium text-sm">
              Currently Unavailable
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="font-semibold text-base text-[var(--espresso)] leading-snug">
            {item.name}
          </h3>
          <span className="font-bold text-[var(--terracotta)] whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between gap-2">
          {item.dietary && item.dietary.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {item.dietary.map((d) => (
                <span
                  key={d}
                  className="text-[11px] text-[var(--text-muted)] px-2 py-0.5 rounded-full bg-[var(--cream)]"
                >
                  {d}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-xs text-[var(--text-muted)]">
              {item.category}
            </span>
          )}
          <button
            onClick={handleQuickAdd}
            disabled={!item.available}
            className="w-9 h-9 rounded-full bg-[var(--espresso)] text-white flex items-center justify-center hover:bg-[var(--terracotta)] transition-colors shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label={`Add ${item.name} to bag`}
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
