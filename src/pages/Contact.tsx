import { useState } from "react";
import SectionReveal from "../components/SectionReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="container-canvas text-center">
          <SectionReveal>
            <span className="label-text mb-3 block">Get in Touch</span>
            <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl">Contact Us</h1>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Let our experts guide you to the right home or investment.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-canvas">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <SectionReveal>
              <h2 className="heading-serif text-3xl text-navy mb-6">Let's Talk</h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-10">
                Whether you're looking for your dream home, a smart investment, or
                expert advice, our team is ready to help. Reach out through any of
                the channels below.
              </p>

              <div className="space-y-6">
                <ContactItem
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  }
                  label="Phone"
                  value="(555) 246-7890"
                  href="tel:5552467890"
                />
                <ContactItem
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  }
                  label="Email"
                  value="info@horizonproperties.com"
                  href="mailto:info@horizonproperties.com"
                />
                <ContactItem
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  }
                  label="Office"
                  value="1200 Architectural Way, Suite 500, New York, NY 10001"
                />
              </div>
            </SectionReveal>

            {/* Form */}
            <SectionReveal delay={0.15}>
              <div className="bg-white rounded-2xl border border-navy/5 p-6 lg:p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-champagne/15 flex items-center justify-center mx-auto mb-4">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-champagne">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">Message Sent!</h3>
                    <p className="text-navy/50 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-navy mb-2">Send a Message</h3>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-cloud border border-navy/10 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-champagne/50 focus:outline-none transition-colors"
                      aria-label="Full name"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-cloud border border-navy/10 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-champagne/50 focus:outline-none transition-colors"
                      aria-label="Email address"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-cloud border border-navy/10 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-champagne/50 focus:outline-none transition-colors"
                      aria-label="Phone number"
                    />
                    <textarea
                      placeholder="Tell us about your property needs..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-cloud border border-navy/10 rounded-xl px-4 py-3 text-sm text-navy placeholder:text-navy/30 focus:border-champagne/50 focus:outline-none transition-colors resize-none"
                      aria-label="Message"
                    />
                    <button type="submit" className="btn-primary w-full justify-center">
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full border border-champagne/30 flex items-center justify-center text-champagne shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-navy/40 uppercase tracking-label mb-1">{label}</div>
        <div className="text-navy font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-70 transition-opacity">{content}</a> : content;
}
