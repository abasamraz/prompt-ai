import type { SignatureDrink } from "../data/cafe";

export default function DrinkCard({ drink }: { drink: SignatureDrink }) {
  return (
    <div className="card-lift bg-white rounded-2xl overflow-hidden border border-[var(--line)] shrink-0 w-full">
      <div className="img-zoom relative aspect-[3/4]">
        <img
          src={drink.image}
          alt={drink.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <span className="badge badge-featured absolute top-3 left-3">
          {drink.temperature}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-base text-[var(--espresso)] mb-1">
          {drink.name}
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 line-clamp-2">
          {drink.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[var(--terracotta)]">
            ${drink.price.toFixed(2)}
          </span>
          {drink.dietary && drink.dietary.length > 0 && (
            <div className="flex gap-1.5">
              {drink.dietary.map((d) => (
                <span
                  key={d}
                  className="text-[11px] text-[var(--text-muted)] px-2 py-0.5 rounded-full bg-[var(--cream)]"
                >
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
