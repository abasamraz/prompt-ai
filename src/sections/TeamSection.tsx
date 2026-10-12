import SectionReveal from "../components/SectionReveal";
import { team } from "../data/properties";

export default function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-canvas">
        <SectionReveal className="text-center mb-16">
          <span className="label-text mb-3 block">Our People</span>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-navy">
            Meet the Team
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 0.08}>
              <article className="group">
                <div className="img-zoom rounded-2xl overflow-hidden aspect-[3/4] mb-5">
                  <img
                    src={member.photo}
                    alt={`${member.name} — ${member.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-navy group-hover:text-champagne-dark transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-champagne font-medium mt-1">{member.role}</p>
                <div className="flex gap-3 mt-3">
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="text-navy/40 hover:text-champagne transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/[()\- ]/g, "")}`}
                    aria-label={`Call ${member.name}`}
                    className="text-navy/40 hover:text-champagne transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
