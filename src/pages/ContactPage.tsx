import SectionReveal from "../components/SectionReveal";
import ReservationForm from "../components/ReservationForm";
import ContactForm from "../components/ContactForm";
import { contactInfo, openingHours } from "../data/cafe";
import {
  PinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ArrowUpRight,
} from "../components/Icons";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-10 bg-[var(--cream)]">
        <div className="container-canvas text-center">
          <SectionReveal>
            <p className="label-text mb-3">Get in Touch</p>
            <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-balance">
              Visit, Call, or Write to Us
            </h1>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
              Reserve a table, send us a message, or simply drop by. We'd love to
              hear from you.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Reservation + Info */}
      <section className="section-padding bg-[var(--warm-white)]">
        <div className="container-canvas">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Reservation form */}
            <div className="lg:col-span-3">
              <SectionReveal>
                <h2 className="heading-serif text-2xl md:text-3xl mb-2">
                  Reserve a Table
                </h2>
                <p className="text-[var(--text-muted)] text-sm mb-6">
                  Fill out the form below and we'll confirm your reservation.
                </p>
                <ReservationForm />
              </SectionReveal>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <SectionReveal delay={0.1}>
                <div className="bg-[var(--cream)] rounded-2xl p-6 md:p-8">
                  <h3 className="font-semibold text-lg mb-5">Visit Us</h3>

                  <div className="space-y-5">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                        <PinIcon className="w-5 h-5 text-[var(--terracotta)]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-0.5">Address</h4>
                        <p className="text-sm text-[var(--text-muted)]">
                          {contactInfo.address}
                          <br />
                          {contactInfo.city}
                        </p>
                        <a
                          href={contactInfo.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[var(--terracotta)] mt-1 hover:gap-2 transition-all"
                        >
                          Get Directions <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                        <PhoneIcon className="w-5 h-5 text-[var(--terracotta)]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-0.5">Phone</h4>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-sm text-[var(--text-muted)] hover:text-[var(--terracotta)] transition-colors"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                        <MailIcon className="w-5 h-5 text-[var(--terracotta)]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-0.5">Email</h4>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-sm text-[var(--text-muted)] hover:text-[var(--terracotta)] transition-colors"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                        <ClockIcon className="w-5 h-5 text-[var(--terracotta)]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1.5">
                          Opening Hours
                        </h4>
                        <div className="space-y-0.5">
                          {openingHours.map((entry) => (
                            <div
                              key={entry.day}
                              className="flex justify-between text-xs text-[var(--text-muted)]"
                            >
                              <span>{entry.day}</span>
                              <span>{entry.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-4 rounded-2xl overflow-hidden bg-[var(--cream)] aspect-[4/3] flex items-center justify-center border border-[var(--line)]">
                  <div className="text-center p-6">
                    <PinIcon className="w-8 h-8 text-[var(--terracotta)] mx-auto mb-2" />
                    <p className="text-sm text-[var(--text-muted)]">
                      Map integration available
                    </p>
                    <a
                      href={contactInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--terracotta)] hover:underline"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-padding bg-[var(--cream)]">
        <div className="container-canvas max-w-2xl">
          <SectionReveal className="text-center mb-8">
            <p className="label-text mb-3">Send a Message</p>
            <h2 className="heading-serif text-2xl md:text-3xl">
              Have a Question?
            </h2>
            <p className="text-[var(--text-muted)] mt-2 text-sm">
              For events, catering, partnerships, or anything else — we're all
              ears.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <ContactForm />
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
