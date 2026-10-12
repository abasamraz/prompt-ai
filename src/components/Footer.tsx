import { Link } from "react-router-dom";
import { useState } from "react";
import { cafeConfig, contactInfo, openingHours } from "../data/cafe";
import {
  CupIcon,
  InstagramIcon,
  FacebookIcon,
  PinterestIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  ArrowUpRight,
} from "./Icons";

const footerNav = [
  { label: "Home", path: "/" },
  { label: "Our Story", path: "/#story" },
  { label: "Menu", path: "/menu" },
  { label: "Coffee", path: "/coffee" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const menuLinks = [
  { label: "Espresso", path: "/menu" },
  { label: "Signature Coffee", path: "/menu" },
  { label: "Iced Drinks", path: "/menu" },
  { label: "Pastries", path: "/menu" },
  { label: "Desserts", path: "/menu" },
  { label: "Light Bites", path: "/menu" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <footer className="bg-[var(--espresso)] text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="container-canvas py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-md">
              <h3 className="heading-serif text-2xl md:text-3xl mb-2">
                Join Our Coffee Circle
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Subscribe for seasonal menus, new brews, and members-only offers.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex gap-3 w-full md:w-auto md:min-w-[360px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[var(--terracotta)] transition-colors"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="btn-primary shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
          {status === "success" && (
            <p className="mt-3 text-sm text-[var(--terracotta)]">
              Thank you! Please check your email to confirm. (Newsletter delivery requires backend integration.)
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-300">
              Please enter a valid email address.
            </p>
          )}
        </div>
      </div>

      {/* Main footer */}
      <div className="container-canvas py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <CupIcon className="w-7 h-7 text-[var(--terracotta)]" />
              <span className="heading-serif text-lg tracking-wide">
                CAFÉ HORIZON
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Exceptional coffee, thoughtfully crafted. A place where quality, comfort, and community come together.
            </p>
            <div className="flex gap-3">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-[var(--terracotta)] hover:border-[var(--terracotta)] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-[var(--terracotta)] hover:border-[var(--terracotta)] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-[var(--terracotta)] hover:border-[var(--terracotta)] transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-[var(--terracotta)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
              Menu
            </h4>
            <ul className="space-y-2.5">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-[var(--terracotta)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <PinIcon className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-[var(--terracotta)] transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MailIcon className="w-4 h-4 mt-0.5 shrink-0 text-white/40" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[var(--terracotta)] transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            <a
              href={contactInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-sm text-[var(--terracotta)] hover:gap-2 transition-all"
            >
              Get Directions <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Opening hours strip */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <ClockIcon className="w-4 h-4 text-white/40" />
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40">
              Opening Hours
            </h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-2">
            {openingHours.map((entry) => (
              <div key={entry.day} className="flex flex-col">
                <span className="text-xs font-medium text-white/70">{entry.day}</span>
                <span className="text-xs text-white/40">{entry.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-canvas py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © 2025 {cafeConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms & Conditions
            </a>
          </div>
          <p className="text-xs text-white/30 tracking-[0.15em] uppercase">
            {cafeConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
