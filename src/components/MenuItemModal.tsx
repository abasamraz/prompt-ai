import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { MenuItem } from "../data/cafe";
import { useCart } from "../context/CartContext";
import { CloseIcon, PlusIcon, MinusIcon, CheckIcon } from "./Icons";

function extractPrice(label: string): number {
  const match = label.match(/\+\$(\d+\.?\d*)/);
  return match ? parseFloat(match[1]) : 0;
}

export default function MenuItemModal({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedMilk, setSelectedMilk] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);

  useEffect(() => {
    if (item) {
      setQuantity(1);
      setSelectedSize(0);
      setSelectedMilk(0);
      setSelectedExtras([]);
    }
  }, [item]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && item) onClose();
    };
    if (item) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  const sizeModifier = item.sizes?.[selectedSize]?.modifier ?? 0;
  const milkLabel = item.milkOptions?.[selectedMilk] ?? "";
  const milkPrice = extractPrice(milkLabel);
  const extrasPrice = selectedExtras.reduce(
    (sum, idx) => sum + (item.extras?.[idx]?.price ?? 0),
    0
  );
  const unitPrice = item.price + sizeModifier + milkPrice + extrasPrice;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    const size = item.sizes?.[selectedSize];
    const milk = item.milkOptions?.[selectedMilk];
    const extras = selectedExtras.map((idx) => item.extras![idx]);

    addItem({
      id: item.id,
      name: item.name,
      basePrice: item.price,
      quantity,
      image: item.image,
      size: size?.name,
      sizeModifier: size?.modifier ?? 0,
      milk: milk ? milk.replace(/\s*\(\+\$[\d.]+\)/, "") : undefined,
      extras,
      unitPrice,
    });
    onClose();
  };

  const toggleExtra = (idx: number) => {
    setSelectedExtras((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} details`}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--espresso)] hover:bg-white shadow-md transition-colors"
          aria-label="Close"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="aspect-square md:aspect-auto md:min-h-[400px]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              {item.featured && (
                <span className="badge badge-featured">Featured</span>
              )}
              {item.bestseller && (
                <span className="badge badge-bestseller">Bestseller</span>
              )}
            </div>
            <h2 className="heading-serif text-2xl md:text-3xl mb-2">
              {item.name}
            </h2>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
              {item.description}
            </p>

            {/* Sizes */}
            {item.sizes && (
              <div className="mb-4">
                <label className="input-label">Size</label>
                <div className="flex gap-2">
                  {item.sizes.map((size, idx) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(idx)}
                      className={`flex-1 px-3 py-2.5 rounded-lg border text-xs font-medium transition-all ${
                        selectedSize === idx
                          ? "border-[var(--terracotta)] bg-[var(--terracotta)]/10 text-[var(--terracotta)]"
                          : "border-[var(--line-strong)] text-[var(--espresso)] hover:border-[var(--terracotta)]"
                      }`}
                    >
                      {size.name}
                      {size.modifier > 0 && (
                        <span className="block text-[10px] opacity-60 mt-0.5">
                          +${size.modifier.toFixed(2)}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Milk */}
            {item.milkOptions && (
              <div className="mb-4">
                <label className="input-label">Milk Option</label>
                <div className="flex flex-wrap gap-2">
                  {item.milkOptions.map((milk, idx) => (
                    <button
                      key={milk}
                      onClick={() => setSelectedMilk(idx)}
                      className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                        selectedMilk === idx
                          ? "border-[var(--terracotta)] bg-[var(--terracotta)]/10 text-[var(--terracotta)]"
                          : "border-[var(--line-strong)] text-[var(--espresso)] hover:border-[var(--terracotta)]"
                      }`}
                    >
                      {milk}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Extras */}
            {item.extras && (
              <div className="mb-4">
                <label className="input-label">Extras</label>
                <div className="flex flex-wrap gap-2">
                  {item.extras.map((extra, idx) => (
                    <button
                      key={extra.name}
                      onClick={() => toggleExtra(idx)}
                      className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all flex items-center gap-1 ${
                        selectedExtras.includes(idx)
                          ? "border-[var(--terracotta)] bg-[var(--terracotta)]/10 text-[var(--terracotta)]"
                          : "border-[var(--line-strong)] text-[var(--espresso)] hover:border-[var(--terracotta)]"
                      }`}
                    >
                      {extra.name} +${extra.price.toFixed(2)}
                      {selectedExtras.includes(idx) && (
                        <CheckIcon className="w-3.5 h-3.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dietary */}
            {item.dietary && item.dietary.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1.5">
                {item.dietary.map((d) => (
                  <span
                    key={d}
                    className="text-[11px] text-[var(--text-muted)] px-2 py-0.5 rounded-full bg-[var(--cream)]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            )}

            {/* Quantity + Add */}
            <div className="mt-auto pt-4 flex items-center gap-3">
              <div className="flex items-center gap-2 border border-[var(--line-strong)] rounded-full px-1.5 py-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[var(--cream)] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <MinusIcon className="w-4 h-4" />
                </button>
                <span className="font-semibold w-6 text-center text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[var(--cream)] transition-colors"
                  aria-label="Increase quantity"
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!item.available}
                className="btn-primary flex-1"
              >
                Add to Bag — ${totalPrice.toFixed(2)}
              </button>
            </div>

            {!item.available && (
              <p className="text-sm text-red-500 mt-2 text-center">
                Currently unavailable
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
