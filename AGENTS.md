# Horizon Properties — Base44 Dev Environment

## Stack
- **Framework:** Vite + React 18 + TypeScript
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS v3 (custom design tokens)
- **Animations:** Framer Motion (subtle, luxury-feeling)
- **Fonts:** Plus Jakarta Sans (body) + Playfair Display (headings) via Google Fonts

## Running the app
```
docker compose -f docker-compose.base44.yml up -d --build
```
The dev server binds `0.0.0.0:3000` with live reload. Source is bind-mounted so edits hot-apply.

## Architecture
- `src/data/properties.ts` — all property, service, and team data (structured for future DB connection)
- `src/components/` — reusable UI: Header, Footer, PropertyCard, PropertyCarousel, PropertyGallery, SectionReveal
- `src/sections/` — homepage sections: Hero, WhoWeAre, FeaturedProperties, ServicesSection, WhyChooseHorizon, TeamSection, CTASection
- `src/pages/` — routed pages: Home, Properties, PropertyDetail, About, Services, Team, Contact, NotFound

## Design system
- Navy `#050B16` / Ivory `#FAF9F6` / Champagne `#C5A059` / Cloud `#F2F2F2`
- `.container-canvas` = 110rem max width
- `.section-padding` = 6rem mobile / 8rem desktop
- `.heading-serif` = Playfair Display
- `.label-text` = uppercase champagne label
- `.btn-primary` / `.btn-outline` / `.btn-champagne` = reusable button styles

## Verification
- Visit `/` for the homepage
- Visit `/properties` for the filterable catalog
- Click any property card to reach `/properties/:id` (detail page with gallery, agent card, schedule viewing modal)
- Test mobile menu via hamburger at <1024px
- Carousel supports drag/swipe + arrow buttons on the homepage Featured section
