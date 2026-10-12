import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { BagIcon, MenuIcon, CloseIcon, CupIcon } from "./Icons";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/#story", isHash: true },
  { label: "Menu", path: "/menu" },
  { label: "Coffee", path: "/coffee" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleStoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
    setMobileOpen(false);
  };

  const isSolid = scrolled || !isHome;
  const textColor = isSolid ? "text-[var(--espresso)]" : "text-white";
  const bgColor = isSolid
    ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_var(--line)]"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor}`}
      >
        <div className="container-canvas">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`flex items-center gap-2 no-tap-highlight ${textColor}`}
              aria-label="Café Horizon home"
            >
              <CupIcon className="w-7 h-7 shrink-0" />
              <span className="heading-serif text-base md:text-lg tracking-wide">
                CAFÉ HORIZON
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.isHash ? (
                  <a
                    key={link.label}
                    href="/#story"
                    onClick={handleStoryClick}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[var(--terracotta)] ${textColor} ${
                      isHome ? "relative" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[var(--terracotta)] ${
                      location.pathname === link.path
                        ? "text-[var(--terracotta)]"
                        : textColor
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Cart */}
              <button
                onClick={openCart}
                className={`relative p-2 transition-colors duration-300 hover:text-[var(--terracotta)] ${textColor}`}
                aria-label={`Shopping bag with ${totalItems} items`}
              >
                <BagIcon className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[var(--terracotta)] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Reservation Button (desktop) */}
              <Link
                to="/contact"
                className="hidden md:inline-flex btn-primary text-xs"
              >
                Reservation
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className={`lg:hidden p-2 transition-colors ${textColor}`}
                aria-label="Open menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white flex flex-col"
            >
              <div className="flex items-center justify-between h-16 px-6 border-b border-[var(--line)]">
                <span className="heading-serif text-base">CAFÉ HORIZON</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[var(--espresso)]"
                  aria-label="Close menu"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>
              </div>
              <nav
                className="flex flex-col gap-1 p-6"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, i) =>
                  link.isHash ? (
                    <a
                      key={link.label}
                      href="/#story"
                      onClick={handleStoryClick}
                      className="py-3 text-lg font-medium text-[var(--espresso)] border-b border-[var(--line)]"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-3 text-lg font-medium border-b border-[var(--line)] ${
                          location.pathname === link.path
                            ? "text-[var(--terracotta)]"
                            : "text-[var(--espresso)]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>
              <div className="mt-auto p-6">
                <Link
                  to="/contact"
                  className="btn-primary w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Make a Reservation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
