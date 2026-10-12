# Café Horizon — Base44 Dev Environment

## Stack
- **Framework:** Vite + React 18 + TypeScript
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS v3 (custom design tokens)
- **Animations:** Framer Motion (subtle, premium feel)
- **Fonts:** Plus Jakarta Sans (body) + Playfair Display (headings) + Caveat (script accents) via Google Fonts

## Running the app
```
docker compose -f docker-compose.base44.yml up -d
```
The dev server binds `0.0.0.0:3000` with live reload. Source is bind-mounted so edits hot-apply.

## Architecture
- `src/data/cafe.ts` — all café config: menu items, prices, categories, signature drinks, gallery, reviews, features, opening hours, contact info
- `src/context/CartContext.tsx` — cart state with localStorage persistence
- `src/components/` — reusable UI: Header, Footer, MenuCard, DrinkCard, MenuItemModal, GalleryLightbox, CartDrawer, ReservationForm, ContactForm, NewsletterForm, Icons, SectionReveal
- `src/sections/` — homepage sections: Hero, OurStory, FeaturedMenu, CoffeeExperience, SignatureDrinks, GallerySection, WhyChooseUs, Reviews, ReservationCTA
- `src/pages/` — routed pages: Home, MenuPage, CoffeePage, GalleryPage, ContactPage, NotFound

## Design system
- Espresso `#262623` / Cream `#F7F2ED` / Terracotta `#D3855E` / Caramel `#C49A6C` / Warm White `#FFFFFF`
- `.container-canvas` = 110rem max width
- `.section-padding` = 4.5rem mobile / 7rem desktop
- `.heading-serif` = Playfair Display
- `.script-text` = Caveat (hand-drawn accents)
- `.label-text` = uppercase terracotta label
- `.btn-primary` (terracotta) / `.btn-dark` (espresso) / `.btn-outline` / `.btn-ghost-light` = reusable button styles
- `.input-field` / `.input-label` = form elements

## Routes
- `/` — Home (all sections)
- `/menu` — Full menu with category filters and search
- `/coffee` — Coffee experience page
- `/gallery` — Full gallery with lightbox
- `/contact` — Reservation form, contact form, visit info

## Cart
- Cart state via React Context, persisted to localStorage
- Cart drawer slides in from right
- Menu item modal for customization (size, milk, extras)
- Demo checkout — no payment processed

## Verification
- Visit `/` for the homepage
- Visit `/menu` for the filterable menu catalog
- Click any menu card to open the item detail modal
- Add items to cart via the + button or modal
- Click the cart icon in the header to open the cart drawer
- Visit `/gallery` and click any image to open the lightbox
- Visit `/contact` to test the reservation and contact forms
- Test mobile menu via hamburger at <1024px
