import { Link } from "react-router-dom";
import SectionReveal from "../components/SectionReveal";
import { contactInfo, openingHours } from "../data/cafe";
import { ArrowUpRight, PhoneIcon, PinIcon, ClockIcon } from "../components/Icons";

export default function ReservationCTA() {
  return (
    <section className="section-padding bg-[var(--espresso)] text-white">
      <div className="container-canvas">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: CTA */}
          <SectionReveal>
            <p className="label-text mb-4 text-[var(--terracotta)]">Visit Us</p>
            <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-5 text-balance">
              Reserve Your Table at Café Horizon
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Whether it's a quiet morning coffee, a working lunch, or an evening
              with friends — we'd love to host you. Request a table and our team
              will confirm your booking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Make a Reservation
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="btn-ghost-light"
              >
                <PhoneIcon className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </SectionReveal>

          {/* Right: Info card */}
          <SectionReveal delay={0.15}>
            <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
              {/* Address */}
              <div className="flex items-start gap-3 mb-5">
                <PinIcon className="w-5 h-5 text-[var(--terracotta)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Find Us</h3>
                  <p className="text-white/60 text-sm">{contactInfo.address}</p>
                  <p className="text-white/60 text-sm">{contactInfo.city}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 mb-5">
                <PhoneIcon className="w-5 h-5 text-[var(--terracotta)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm mb-1">Call Us</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-white/60 text-sm hover:text-[var(--terracotta)] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-[var(--terracotta)] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm mb-2">Opening Hours</h3>
                  <div className="space-y-1">
                    {openingHours.map((entry) => (
                      <div
                        key={entry.day}
                        className="flex justify-between text-xs text-white/50"
                      >
                        <span>{entry.day}</span>
                        <span>{entry.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
