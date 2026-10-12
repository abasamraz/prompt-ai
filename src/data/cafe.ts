// ============================================================
// Café Horizon — Centralized Configuration & Data
// All menu items, prices, hours, and contact details are
// editable here. Replace with real data as needed.
// ============================================================

// --- Image URL helpers ---
const px = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const us = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// --- Brand Configuration ---
export const cafeConfig = {
  name: "CAFÉ HORIZON",
  shortName: "Horizon",
  tagline: "COFFEE • BAKERY • GOOD VIBES",
  heroHeadline: "Your Daily Ritual, Elevated.",
  heroSubtext:
    "Exceptional coffee, thoughtfully crafted. Discover a place where quality, comfort, and community come together.",
  storyHeadline: "More Than Just Coffee",
  storyBody:
    "We believe a great cup of coffee is more than a drink — it's a moment. From carefully sourced beans to the hands that craft each cup, every detail matters. Our baristas pour passion into every espresso, our kitchen bakes fresh every morning, and our doors open to a space designed for connection, focus, and the simple joy of slowing down.",
};

// --- Contact Information (replace with real details) ---
export const contactInfo = {
  address: "123 Horizon Street, Arts District",
  city: "Your City, 00000",
  phone: "+1 (555) 123-4567",
  email: "hello@cafehorizon.com",
  mapUrl: "https://maps.google.com/?q=123+Horizon+Street",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
  },
};

// --- Opening Hours ---
export const openingHours: { day: string; hours: string; isToday?: boolean }[] = [
  { day: "Monday", hours: "7:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "7:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "7:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "7:00 AM – 9:00 PM" },
  { day: "Friday", hours: "7:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 10:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 6:00 PM" },
];

// --- Menu Categories ---
export const menuCategories = [
  "All",
  "Espresso",
  "Signature Coffee",
  "Filter Coffee",
  "Iced Drinks",
  "Tea",
  "Pastries",
  "Desserts",
  "Light Bites",
] as const;

// --- Menu Item Interface ---
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  dietary?: string[];
  available: boolean;
  sizes?: { name: string; modifier: number }[];
  milkOptions?: string[];
  extras?: { name: string; price: number }[];
}

// --- Size presets ---
const coffeeSizes = [
  { name: "Small (8oz)", modifier: 0 },
  { name: "Medium (12oz)", modifier: 0.5 },
  { name: "Large (16oz)", modifier: 1.0 },
];
const milkOpts = ["Whole Milk", "Oat Milk (+$0.50)", "Almond Milk (+$0.50)", "Skim Milk", "Soy Milk (+$0.50)"];
const coffeeExtras = [
  { name: "Extra Shot", price: 0.8 },
  { name: "Vanilla Syrup", price: 0.5 },
  { name: "Caramel Syrup", price: 0.5 },
  { name: "Whipped Cream", price: 0.5 },
];

// --- Menu Items ---
export const menuItems: MenuItem[] = [
  // Espresso
  {
    id: "espresso",
    name: "Espresso",
    description: "Rich, concentrated shot of our house blend with a velvety crema.",
    price: 2.8,
    category: "Espresso",
    image: px(302896),
    bestseller: true,
    available: true,
    sizes: coffeeSizes,
    milkOptions: milkOpts,
    extras: coffeeExtras,
  },
  {
    id: "flat-white",
    name: "Flat White",
    description: "Double ristretto with silky steamed milk and a thin layer of microfoam.",
    price: 3.8,
    category: "Espresso",
    image: px(302899),
    featured: true,
    available: true,
    sizes: coffeeSizes,
    milkOptions: milkOpts,
    extras: coffeeExtras,
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso with steamed milk and a thick layer of velvety foam.",
    price: 3.5,
    category: "Espresso",
    image: px(302900),
    available: true,
    sizes: coffeeSizes,
    milkOptions: milkOpts,
    extras: coffeeExtras,
  },
  {
    id: "caffe-latte",
    name: "Caffè Latte",
    description: "Espresso with steamed milk and a light layer of foam. Smooth and creamy.",
    price: 4.5,
    category: "Espresso",
    image: us("photo-1509042239860-f550ce710b93"),
    bestseller: true,
    available: true,
    sizes: coffeeSizes,
    milkOptions: milkOpts,
    extras: coffeeExtras,
  },
  {
    id: "spanish-latte",
    name: "Spanish Latte",
    description: "Espresso with condensed milk for a smooth, sweet, and indulgent cup.",
    price: 4.8,
    category: "Espresso",
    image: px(302901),
    available: true,
    sizes: coffeeSizes,
    milkOptions: milkOpts,
    extras: coffeeExtras,
  },
  // Signature Coffee
  {
    id: "horizon-special",
    name: "Horizon Special",
    description: "Our signature blend with house-made vanilla syrup and a hint of orange zest.",
    price: 5.2,
    category: "Signature Coffee",
    image: px(302902),
    featured: true,
    bestseller: true,
    available: true,
    sizes: coffeeSizes,
    milkOptions: milkOpts,
    extras: coffeeExtras,
  },
  {
    id: "honey-cinnamon-latte",
    name: "Honey Cinnamon Latte",
    description: "Espresso, raw honey, cinnamon, and steamed milk. Warm and comforting.",
    price: 5.0,
    category: "Signature Coffee",
    image: px(302903),
    available: true,
    sizes: coffeeSizes,
    milkOptions: milkOpts,
    extras: coffeeExtras,
  },
  {
    id: "cardamom-rose-latte",
    name: "Cardamom Rose Latte",
    description: "Espresso, cardamom, rose water, and steamed milk. Aromatic and floral.",
    price: 5.4,
    category: "Signature Coffee",
    image: px(312418),
    available: true,
    sizes: coffeeSizes,
    milkOptions: milkOpts,
    extras: coffeeExtras,
  },
  // Filter Coffee
  {
    id: "pour-over",
    name: "Pour Over",
    description: "Single-origin, hand-brewed to order. Clean, bright, and full of character.",
    price: 4.0,
    category: "Filter Coffee",
    image: px(312420),
    available: true,
    sizes: coffeeSizes,
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    description: "18-hour steeped for a smooth, low-acid, and naturally sweet profile.",
    price: 4.2,
    category: "Filter Coffee",
    image: px(1189864),
    available: true,
  },
  // Iced Drinks
  {
    id: "vanilla-cold-brew",
    name: "Vanilla Cold Brew",
    description: "Cold brew with house-made vanilla syrup over ice. Refreshing and smooth.",
    price: 4.8,
    category: "Iced Drinks",
    image: px(1189866),
    featured: true,
    available: true,
    sizes: coffeeSizes,
    extras: [{ name: "Extra Shot", price: 0.8 }, { name: "Vanilla Syrup", price: 0.5 }],
  },
  {
    id: "iced-matcha-latte",
    name: "Iced Matcha Latte",
    description: "Stone-ground ceremonial matcha with milk over ice. Earthy and vibrant.",
    price: 5.0,
    category: "Iced Drinks",
    image: px(1583312),
    available: true,
    dietary: ["Vegan Option"],
    sizes: coffeeSizes,
    milkOptions: milkOpts,
  },
  {
    id: "iced-caramel-macchiato",
    name: "Iced Caramel Macchiato",
    description: "Espresso, caramel, milk, and ice. Layered, sweet, and bold.",
    price: 5.2,
    category: "Iced Drinks",
    image: px(1813465),
    available: true,
    sizes: coffeeSizes,
    milkOptions: milkOpts,
    extras: coffeeExtras,
  },
  // Tea
  {
    id: "earl-grey",
    name: "Earl Grey",
    description: "Classic bergamot-infused black tea. Full-bodied and aromatic.",
    price: 3.5,
    category: "Tea",
    image: px(1813466),
    available: true,
  },
  {
    id: "chamomile-mint",
    name: "Chamomile Mint",
    description: "Soothing herbal blend of chamomile, mint, and a touch of honey.",
    price: 3.8,
    category: "Tea",
    image: px(1813470),
    available: true,
    dietary: ["Caffeine-Free"],
  },
  // Pastries
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    description: "Flaky, buttery, and baked fresh every morning. A classic done right.",
    price: 3.5,
    category: "Pastries",
    image: us("photo-1555507036-ab1f4038808a"),
    featured: true,
    bestseller: true,
    available: true,
    dietary: ["Vegetarian"],
  },
  {
    id: "almond-croissant",
    name: "Almond Croissant",
    description: "Almond cream filling topped with toasted almonds and powdered sugar.",
    price: 4.2,
    category: "Pastries",
    image: px(1855214),
    available: true,
    dietary: ["Vegetarian"],
  },
  {
    id: "chocolate-croissant",
    name: "Chocolate Croissant",
    description: "Dark chocolate folded into flaky, buttery pastry.",
    price: 3.9,
    category: "Pastries",
    image: px(2074120),
    available: true,
    dietary: ["Vegetarian"],
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    description: "Warm, gooey cinnamon swirl with a cream cheese glaze.",
    price: 4.0,
    category: "Pastries",
    image: px(2074122),
    available: true,
    dietary: ["Vegetarian"],
  },
  // Desserts
  {
    id: "basque-cheesecake",
    name: "Basque Cheesecake",
    description: "Caramelized top, creamy center. Rich, slightly burnt, and irresistible.",
    price: 4.9,
    category: "Desserts",
    image: us("photo-1565958011703-44f9829ba187"),
    featured: true,
    bestseller: true,
    available: true,
    dietary: ["Vegetarian"],
  },
  {
    id: "chocolate-brownie",
    name: "Chocolate Brownie",
    description: "Rich, fudgy dark chocolate brownie with a sprinkle of sea salt.",
    price: 3.8,
    category: "Desserts",
    image: px(2074126),
    available: true,
    dietary: ["Vegetarian"],
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Cheesecake",
    description: "Fresh blueberry compote on a creamy vanilla cheesecake base.",
    price: 4.9,
    category: "Desserts",
    image: px(230477),
    available: true,
    dietary: ["Vegetarian"],
  },
  // Light Bites
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    description: "Sourdough, smashed avocado, chili flakes, lemon, and microgreens.",
    price: 7.5,
    category: "Light Bites",
    image: px(2474638),
    available: true,
    dietary: ["Vegetarian", "Vegan Option"],
  },
  {
    id: "egg-cheese-croissant",
    name: "Egg & Cheese Croissant",
    description: "Scrambled eggs and melted cheddar on a warm butter croissant.",
    price: 6.5,
    category: "Light Bites",
    image: px(2474639),
    available: true,
  },
];

// --- Signature Drinks ---
export interface SignatureDrink {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  temperature: "Hot" | "Iced";
  dietary?: string[];
}

export const signatureDrinks: SignatureDrink[] = [
  {
    id: "horizon-special",
    name: "Horizon Special",
    description: "Our signature blend with house-made vanilla syrup and orange zest.",
    price: 5.2,
    image: px(302902),
    temperature: "Hot",
  },
  {
    id: "honey-cinnamon-latte",
    name: "Honey Cinnamon Latte",
    description: "Espresso, raw honey, cinnamon, and steamed milk.",
    price: 5.0,
    image: px(302903),
    temperature: "Hot",
  },
  {
    id: "cardamom-rose-latte",
    name: "Cardamom Rose Latte",
    description: "Espresso, cardamom, rose water, and steamed milk.",
    price: 5.4,
    image: px(312418),
    temperature: "Hot",
  },
  {
    id: "vanilla-cold-brew",
    name: "Vanilla Cold Brew",
    description: "Cold brew with house-made vanilla syrup over ice.",
    price: 4.8,
    image: px(1189866),
    temperature: "Iced",
  },
  {
    id: "iced-matcha-latte",
    name: "Iced Matcha Latte",
    description: "Stone-ground ceremonial matcha with milk over ice.",
    price: 5.0,
    image: px(1583312),
    temperature: "Iced",
    dietary: ["Vegan Option"],
  },
  {
    id: "spanish-latte",
    name: "Spanish Latte",
    description: "Espresso with condensed milk — smooth, sweet, and indulgent.",
    price: 4.8,
    image: px(302901),
    temperature: "Hot",
  },
];

// --- Gallery Images ---
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: "tall" | "wide" | "normal";
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: px(2789327, 1000), alt: "Café interior with warm lighting and wooden furniture", span: "tall" },
  { id: "g2", src: px(3033209, 800), alt: "Barista preparing espresso at the counter", span: "normal" },
  { id: "g3", src: px(3219529, 800), alt: "Latte art in a ceramic cup on a wooden table", span: "normal" },
  { id: "g4", src: px(414645, 1000), alt: "Freshly baked pastries on display", span: "wide" },
  { id: "g5", src: px(3033210, 800), alt: "Coffee beans being ground for brewing", span: "normal" },
  { id: "g6", src: px(3219530, 1000), alt: "Cozy seating area with natural light", span: "tall" },
  { id: "g7", src: px(414646, 800), alt: "Iced coffee drinks lined up on the counter", span: "normal" },
  { id: "g8", src: px(3033211, 800), alt: "Barista pouring milk into espresso for latte art", span: "normal" },
  { id: "g9", src: px(414647, 1000), alt: "Assorted desserts and cakes on a marble counter", span: "wide" },
  { id: "g10", src: px(3219531, 800), alt: "Coffee cup with steam rising in morning light", span: "normal" },
  { id: "g11", src: px(4226869, 800), alt: "Café storefront with outdoor seating", span: "normal" },
  { id: "g12", src: px(2789328, 1000), alt: "Interior detail with plants and warm textures", span: "tall" },
];

// --- Customer Reviews (sample placeholders — replace with real reviews) ---
export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Sarah Mitchell",
    text: "The flat white here is the best in the city. The atmosphere is warm, the staff is friendly, and the pastries are baked fresh daily. My go-to morning spot.",
    rating: 5,
    date: "March 2025",
  },
  {
    id: "r2",
    name: "James Chen",
    text: "Café Horizon has become my second office. Great coffee, reliable wifi, and the avocado toast is genuinely the best I've had. Highly recommend.",
    rating: 5,
    date: "February 2025",
  },
  {
    id: "r3",
    name: "Elena Rossi",
    text: "As someone who grew up around coffee culture, I'm picky. The pour over here is exceptional — clean, bright, and made with care. The Basque cheesecake is a must.",
    rating: 5,
    date: "January 2025",
  },
  {
    id: "r4",
    name: "Marcus Johnson",
    text: "The Spanish Latte changed my life. The space is beautiful, the music is perfect, and you can tell the baristas genuinely care about what they do.",
    rating: 4,
    date: "December 2024",
  },
];

// --- Why Choose Us Features ---
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: "bean" | "craft" | "bake" | "heart" | "smile" | "space";
}

export const features: Feature[] = [
  {
    id: "f1",
    title: "Quality Coffee",
    description: "Beans sourced from specialty farms, roasted in small batches for peak flavor.",
    icon: "bean",
  },
  {
    id: "f2",
    title: "Thoughtful Preparation",
    description: "Every cup is crafted with precision — from grind to extraction to pour.",
    icon: "craft",
  },
  {
    id: "f3",
    title: "Freshly Prepared Food",
    description: "Pastries and light bites baked in-house every morning. Never frozen, always fresh.",
    icon: "bake",
  },
  {
    id: "f4",
    title: "Welcoming Atmosphere",
    description: "A cozy, beautifully designed space that feels like home from the first sip.",
    icon: "heart",
  },
  {
    id: "f5",
    title: "Friendly Service",
    description: "Warm, knowledgeable baristas who remember your name and your order.",
    icon: "smile",
  },
  {
    id: "f6",
    title: "Space to Work or Meet",
    description: "Comfortable seating, fast wifi, and a layout designed for both focus and connection.",
    icon: "space",
  },
];

// --- Coffee Experience Blocks ---
export interface CoffeeBlock {
  id: string;
  title: string;
  description: string;
  image: string;
  label: string;
}

export const coffeeBlocks: CoffeeBlock[] = [
  {
    id: "c1",
    label: "Bean Selection",
    title: "Carefully Sourced Beans",
    description:
      "We partner with specialty farms across Ethiopia, Colombia, and Guatemala. Each lot is cupped and selected for clarity, balance, and character — never blended for commodity, always roasted for expression.",
    image: us("photo-1559056199-641a0ac8b55e", 1000),
  },
  {
    id: "c2",
    label: "Brewing Methods",
    title: "Methods That Matter",
    description:
      "From precision espresso extraction to slow pour-over and 18-hour cold brew, each method is chosen to highlight what the bean does best. The result is a cup that tastes the way the farmer intended.",
    image: px(4226870, 1000),
  },
  {
    id: "c3",
    label: "Espresso Craftsmanship",
    title: "The Barista's Hand",
    description:
      "Our baristas train for months before pulling a shot for a guest. Dialing in grind, dose, temperature, and time — every variable matters. It's craft you can taste in every cup.",
    image: px(4226871, 1000),
  },
];

// --- Story Side Features ---
export const storyFeatures = [
  { title: "Freshly Brewed Every Day", icon: "craft" as const },
  { title: "Locally Sourced Ingredients", icon: "bean" as const },
  { title: "A Place for Everyone", icon: "heart" as const },
];

// --- Feature Bar (hero feature strip) ---
export const featureBar = [
  { icon: "bean" as const, title: "Premium Beans", text: "Sourced from the best coffee farms." },
  { icon: "craft" as const, title: "Freshly Brewed", text: "Rich flavor, every time." },
  { icon: "bake" as const, title: "Homemade Treats", text: "Baked with love, daily." },
  { icon: "heart" as const, title: "Cozy Ambience", text: "Perfect for work or relax." },
];
