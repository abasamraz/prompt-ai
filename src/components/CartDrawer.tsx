import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { CloseIcon, PlusIcon, MinusIcon, BagIcon, CheckIcon } from "./Icons";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
  } = useCart();

  const [view, setView] = useState<"cart" | "checkout" | "success">("cart");
  const [form, setForm] = useState({ name: "", phone: "", orderType: "Pickup" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setView("cart");
      setErrors({});
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + tax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    else if (!/^[\d\s+()-]{7,}$/.test(form.phone))
      errs.phone = "Enter a valid phone number";
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setView("success");
    clearCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[75]"
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-5 border-b border-[var(--line)] shrink-0">
              <h2 className="font-semibold text-lg">
                {view === "success" ? "Order Placed" : "Your Bag"}
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-[var(--espresso)] hover:text-[var(--terracotta)] transition-colors"
                aria-label="Close cart"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto hide-scrollbar">
              {view === "success" ? (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--terracotta)]/10 flex items-center justify-center mb-4">
                    <CheckIcon className="w-8 h-8 text-[var(--terracotta)]" />
                  </div>
                  <h3 className="heading-serif text-2xl mb-2">Thank You!</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-1">
                    Your order has been received (demonstration mode).
                  </p>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    No payment has been processed. To enable real ordering and
                    payments, connect a backend and payment provider.
                  </p>
                  <button onClick={closeCart} className="btn-dark">
                    Continue Browsing
                  </button>
                </div>
              ) : items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <BagIcon className="w-12 h-12 text-[var(--text-muted)]/40 mb-4" />
                  <h3 className="font-semibold text-lg mb-1">Your bag is empty</h3>
                  <p className="text-sm text-[var(--text-muted)] mb-6">
                    Browse our menu and add something delicious.
                  </p>
                  <button onClick={closeCart} className="btn-outline">
                    Explore Menu
                  </button>
                </div>
              ) : view === "checkout" ? (
                <form
                  onSubmit={handleCheckout}
                  className="p-5 flex flex-col h-full"
                >
                  <h3 className="font-semibold text-base mb-4">
                    Checkout Details
                  </h3>
                  <div className="space-y-4 flex-1">
                    <div>
                      <label className="input-label">Full Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="input-field"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="input-label">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="input-field"
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="input-label">Order Type</label>
                      <div className="flex gap-2">
                        {["Pickup", "Dine-in"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setForm({ ...form, orderType: type })
                            }
                            className={`flex-1 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                              form.orderType === type
                                ? "border-[var(--terracotta)] bg-[var(--terracotta)]/10 text-[var(--terracotta)]"
                                : "border-[var(--line-strong)] text-[var(--espresso)]"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    {/* Order summary */}
                    <div className="bg-[var(--cream)] rounded-xl p-4 space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-2">
                        Order Summary
                      </p>
                      {items.map((item) => (
                        <div
                          key={item.lineId}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-[var(--text-muted)]">
                            {item.quantity}× {item.name}
                            {item.size ? ` (${item.size})` : ""}
                          </span>
                          <span className="font-medium">
                            ${(item.unitPrice * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                      <div className="border-t border-[var(--line)] pt-2 flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--text-muted)]">Tax (8%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-semibold pt-1">
                        <span>Total</span>
                        <span>${grandTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <button type="submit" className="btn-primary w-full">
                      Place Order — ${grandTotal.toFixed(2)}
                    </button>
                    <p className="text-xs text-center text-[var(--text-muted)]">
                      Demo checkout — no payment is processed.
                    </p>
                    <button
                      type="button"
                      onClick={() => setView("cart")}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--espresso)] transition-colors w-full text-center"
                    >
                      ← Back to bag
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-5 space-y-4">
                  {items.map((item) => (
                    <div key={item.lineId} className="flex gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-[var(--espresso)] truncate">
                          {item.name}
                        </h4>
                        {item.size && (
                          <p className="text-xs text-[var(--text-muted)]">
                            {item.size}
                            {item.milk ? ` · ${item.milk}` : ""}
                          </p>
                        )}
                        {item.extras && item.extras.length > 0 && (
                          <p className="text-xs text-[var(--text-muted)]">
                            + {item.extras.map((e) => e.name).join(", ")}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1.5 border border-[var(--line-strong)] rounded-full px-1 py-0.5">
                            <button
                              onClick={() => updateQuantity(item.lineId, -1)}
                              className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[var(--cream)] transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <MinusIcon className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-sm font-medium w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.lineId, 1)}
                              className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[var(--cream)] transition-colors"
                              aria-label="Increase quantity"
                            >
                              <PlusIcon className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="font-semibold text-sm">
                            ${(item.unitPrice * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-[var(--text-muted)] hover:text-red-500 transition-colors self-start p-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <CloseIcon className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {view === "cart" && items.length > 0 && (
              <div className="border-t border-[var(--line)] p-5 space-y-3 shrink-0">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Subtotal</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-base pt-2 border-t border-[var(--line)]">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => setView("checkout")}
                  className="btn-primary w-full"
                >
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="text-sm text-[var(--text-muted)] hover:text-red-500 transition-colors w-full text-center"
                >
                  Clear bag
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
