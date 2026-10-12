export interface Property {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  country: string;
  price: number;
  priceLabel: string;
  type: "Villa" | "House" | "Penthouse" | "Estate" | "Residence";
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  featured: boolean;
  description: string;
  features: string[];
  amenities: string[];
  images: string[];
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    photo: string;
  };
}

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    id: "lakeside-modern-villa",
    name: "Lakeside Modern Villa",
    location: "Austin, Texas, USA",
    city: "Austin",
    state: "Texas",
    country: "USA",
    price: 2350000,
    priceLabel: "$2.35 Million",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 6200,
    lotSize: "0.8 acres",
    yearBuilt: 2021,
    featured: true,
    description:
      "A stunning modern villa set on the shores of Lake Austin, featuring floor-to-ceiling glass walls that dissolve the boundary between interior and landscape. The open-plan living space flows seamlessly to an infinity-edge pool and private dock, while imported Italian marble and white oak floors anchor the interiors in understated luxury.",
    features: [
      "Infinity-edge pool overlooking the lake",
      "Floor-to-ceiling glass walls",
      "Private dock with boat lift",
      "Smart home automation system",
      "Wine cellar with climate control",
      "3-car garage with EV charging",
    ],
    amenities: [
      "Home theater",
      "Fitness center",
      "Spa bathroom",
      "Outdoor kitchen",
      "Fire pit lounge",
      "Solar panels",
    ],
    images: [
      img("1600607687939-ce8a6c25118c"),
      img("1600573472550-8090b5e0745e", 800),
      img("1502672260266-1c1ef2d93688", 800),
      img("1486718448742-163732cd1544", 800),
    ],
    agent: {
      name: "Daniel Morgan",
      role: "Managing Director",
      phone: "(555) 246-7890",
      email: "daniel@horizonproperties.com",
      photo: img("1599566150163-29194dcaad36", 400),
    },
  },
  {
    id: "pacific-glass-house",
    name: "Pacific Glass House",
    location: "Malibu, California, USA",
    city: "Malibu",
    state: "California",
    country: "USA",
    price: 4800000,
    priceLabel: "$4.8 Million",
    type: "Residence",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 8400,
    lotSize: "1.2 acres",
    yearBuilt: 2022,
    featured: true,
    description:
      "Perched above the Pacific Ocean, this architectural masterpiece wraps itself in glass to capture 270-degree ocean views. Designed by an award-winning architect, the home features cantilevered terraces, a heated infinity pool, and interiors that blend raw concrete with warm walnut.",
    features: [
      "270-degree ocean views",
      "Heated infinity pool",
      "Cantilevered terrace decks",
      "Architect-designed interiors",
      "Private path to beach",
      "Subterranean garage",
    ],
    amenities: [
      "Home theater",
      "Wine room",
      "Sauna",
      "Chef's kitchen",
      "Outdoor shower",
      "Backup generator",
    ],
    images: [
      img("1512917774080-9991f1c4c750"),
      img("1502672260266-1c1ef2d93688", 800),
      img("1600047509807-ba8f99d2cdde", 800),
      img("1582268611958-ebfd161ef9cf", 800),
    ],
    agent: {
      name: "Olivia Carter",
      role: "Luxury Property Advisor",
      phone: "(555) 246-7891",
      email: "olivia@horizonproperties.com",
      photo: img("1573497019940-1c28c88b4f3e", 400),
    },
  },
  {
    id: "desert-horizon-estate",
    name: "Desert Horizon Estate",
    location: "Scottsdale, Arizona, USA",
    city: "Scottsdale",
    state: "Arizona",
    country: "USA",
    price: 3150000,
    priceLabel: "$3.15 Million",
    type: "Estate",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 7100,
    lotSize: "2.5 acres",
    yearBuilt: 2020,
    featured: true,
    description:
      "A desert modern estate that harmonizes with its rugged surroundings through warm stucco walls, steel-framed glass, and native landscaping. The great room opens to a resort-style pool and fire features, while a detached casita offers a private guest retreat.",
    features: [
      "Resort-style pool with spa",
      "Detached guest casita",
      "Native desert landscaping",
      "Outdoor living room with fireplace",
      "Solar-powered home",
      "3-car garage",
    ],
    amenities: [
      "Putting green",
      "Wine cellar",
      "Home gym",
      "Outdoor kitchen",
      "Smart irrigation",
      "Security system",
    ],
    images: [
      img("1518780664697-55e3ad937233"),
      img("1486718448742-163732cd1544", 800),
      img("1502005229762-cf1b2da7c5d6", 800),
      img("1600573472550-8090b5e0745e", 800),
    ],
    agent: {
      name: "James Wilson",
      role: "Investment Consultant",
      phone: "(555) 246-7892",
      email: "james@horizonproperties.com",
      photo: img("1463453091185-61582044d556", 400),
    },
  },
  {
    id: "oceanfront-residence",
    name: "Oceanfront Residence",
    location: "Miami, Florida, USA",
    city: "Miami",
    state: "Florida",
    country: "USA",
    price: 5200000,
    priceLabel: "$5.2 Million",
    type: "Residence",
    bedrooms: 7,
    bathrooms: 6,
    sqft: 9500,
    lotSize: "0.5 acres",
    yearBuilt: 2023,
    featured: true,
    description:
      "A waterfront showpiece on Biscayne Bay with a deep-water dock, this residence combines Miami's indoor-outdoor lifestyle with European finishes. The rooftop terrace offers panoramic skyline views, while the ground level opens to a vanishing-edge pool and private beach access.",
    features: [
      "Deep-water dock for yacht",
      "Rooftop terrace with city views",
      "Vanishing-edge pool",
      "Private beach access",
      "Elevator to all levels",
      "Impact-resistant glass",
    ],
    amenities: [
      "Rooftop pool",
      "Summer kitchen",
      "Home theater",
      "Wellness spa",
      "Staff quarters",
      "Smart home system",
    ],
    images: [
      img("1600047509807-ba8f99d2cdde"),
      img("1502005229762-cf1b2da7c5d6", 800),
      img("1582268611958-ebfd161ef9cf", 800),
      img("1600607687939-ce8a6c25118c", 800),
    ],
    agent: {
      name: "Sophia Bennett",
      role: "Senior Property Specialist",
      phone: "(555) 246-7893",
      email: "sophia@horizonproperties.com",
      photo: img("1438761681033-6461ffad8d80", 400),
    },
  },
  {
    id: "modern-hillside-retreat",
    name: "Modern Hillside Retreat",
    location: "Los Angeles, California, USA",
    city: "Los Angeles",
    state: "California",
    country: "USA",
    price: 3750000,
    priceLabel: "$3.75 Million",
    type: "House",
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5800,
    lotSize: "0.6 acres",
    yearBuilt: 2021,
    featured: false,
    description:
      "Nestled in the Hollywood Hills, this retreat captures sweeping city views through walls of glass that retract completely. The home's minimalist palette of white oak, limestone, and blackened steel creates a gallery-like backdrop for the outdoor pool and fire lounge.",
    features: [
      "Panoramic city views",
      "Retractable glass walls",
      "Infinity pool",
      "Fire lounge terrace",
      "2-car showcase garage",
      "Home office with view",
    ],
    amenities: [
      "Home theater",
      "Bar lounge",
      "Spa bathroom",
      "Wine storage",
      "Smart lighting",
      "Security system",
    ],
    images: [
      img("1582268611958-ebfd161ef9cf"),
      img("1486718448742-163732cd1544", 800),
      img("1600607687939-ce8a6c25118c", 800),
      img("1600047509807-ba8f99d2cdde", 800),
    ],
    agent: {
      name: "Olivia Carter",
      role: "Luxury Property Advisor",
      phone: "(555) 246-7891",
      email: "olivia@horizonproperties.com",
      photo: img("1573497019940-1c28c88b4f3e", 400),
    },
  },
  {
    id: "palm-garden-residence",
    name: "Palm Garden Residence",
    location: "Beverly Hills, California, USA",
    city: "Beverly Hills",
    state: "California",
    country: "USA",
    price: 6400000,
    priceLabel: "$6.4 Million",
    type: "Estate",
    bedrooms: 7,
    bathrooms: 8,
    sqft: 12000,
    lotSize: "1.5 acres",
    yearBuilt: 2022,
    featured: true,
    description:
      "A grand estate in the heart of Beverly Hills, surrounded by mature palms and manicured gardens. The residence features a dual staircase entry, a screening room, and a primary suite with private terrace. The resort-style backyard includes a lap pool, tennis court, and pool house.",
    features: [
      "Resort-style lap pool",
      "Tennis court",
      "Pool house with kitchen",
      "Dual staircase entry",
      "Screening room",
      "6-car garage",
    ],
    amenities: [
      "Home theater",
      "Wine cellar",
      "Fitness center",
      "Massage room",
      "Staff quarters",
      "Smart home system",
    ],
    images: [
      img("1502005229762-cf1b2da7c5d6"),
      img("1600047509807-ba8f99d2cdde", 800),
      img("1486718448742-163732cd1544", 800),
      img("1518780664697-55e3ad937233", 800),
    ],
    agent: {
      name: "Daniel Morgan",
      role: "Managing Director",
      phone: "(555) 246-7890",
      email: "daniel@horizonproperties.com",
      photo: img("1599566150163-29194dcaad36", 400),
    },
  },
  {
    id: "contemporary-lake-house",
    name: "Contemporary Lake House",
    location: "Lake Tahoe, Nevada, USA",
    city: "Lake Tahoe",
    state: "Nevada",
    country: "USA",
    price: 2950000,
    priceLabel: "$2.95 Million",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 4800,
    lotSize: "0.4 acres",
    yearBuilt: 2020,
    featured: false,
    description:
      "A warm contemporary lake house clad in cedar and stone, designed for year-round mountain living. The great room features a double-height stone fireplace and walls of glass facing the water. A private hot deck and boathouse complete the lakefront experience.",
    features: [
      "Lakefront with boathouse",
      "Double-height stone fireplace",
      "Hot deck with lake views",
      "Cedar and stone exterior",
      "Heated driveway",
      "2-car garage",
    ],
    amenities: [
      "Sauna",
      "Mud room",
      "Wine storage",
      "Game room",
      "Heated floors",
      "Snow-melt system",
    ],
    images: [
      img("1600573472550-8090b5e0745e"),
      img("1486718448742-163732cd1544", 800),
      img("1582268611958-ebfd161ef9cf", 800),
      img("1600607687939-ce8a6c25118c", 800),
    ],
    agent: {
      name: "James Wilson",
      role: "Investment Consultant",
      phone: "(555) 246-7892",
      email: "james@horizonproperties.com",
      photo: img("1463453091185-61582044d556", 400),
    },
  },
  {
    id: "architectural-downtown-penthouse",
    name: "Architectural Downtown Penthouse",
    location: "Austin, Texas, USA",
    city: "Austin",
    state: "Texas",
    country: "USA",
    price: 1850000,
    priceLabel: "$1.85 Million",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 3600,
    lotSize: "N/A",
    yearBuilt: 2023,
    featured: false,
    description:
      "A full-floor penthouse in downtown Austin with 360-degree views through floor-to-ceiling glass. The open layout features a chef's kitchen, a primary suite with a private terrace, and a rooftop garden accessible via a glass staircase.",
    features: [
      "360-degree city views",
      "Private rooftop garden",
      "Chef's kitchen with island",
      "Primary suite with terrace",
      "2 reserved parking spots",
      "Private elevator entry",
    ],
    amenities: [
      "Concierge service",
      "Rooftop pool",
      "Fitness center",
      "Wine storage",
      "Smart home system",
      "24/7 security",
    ],
    images: [
      img("1486718448742-163732cd1544"),
      img("1502005229762-cf1b2da7c5d6", 800),
      img("1600047509807-ba8f99d2cdde", 800),
      img("1582268611958-ebfd161ef9cf", 800),
    ],
    agent: {
      name: "Sophia Bennett",
      role: "Senior Property Specialist",
      phone: "(555) 246-7893",
      email: "sophia@horizonproperties.com",
      photo: img("1438761681033-6461ffad8d80", 400),
    },
  },
];

export const services = [
  {
    title: "Luxury Home Sales",
    description:
      "Curated representation for buyers and sellers of exceptional residential properties.",
    image: img("1600607687939-ce8a6c25118c", 800),
  },
  {
    title: "Property Investment",
    description:
      "Strategic acquisition of high-yield investment properties with long-term growth potential.",
    image: img("1600047509807-ba8f99d2cdde", 800),
  },
  {
    title: "Property Marketing",
    description:
      "Editorial-grade photography, film, and digital campaigns that position your property above the market.",
    image: img("1582268611958-ebfd161ef9cf", 800),
  },
  {
    title: "Real Estate Advisory",
    description:
      "Personalized guidance through every stage of the property lifecycle, from search to closing.",
    image: img("1518780664697-55e3ad937233", 800),
  },
  {
    title: "Property Valuation",
    description:
      "Precise, market-driven appraisals backed by deep local data and architectural expertise.",
    image: img("1486718448742-163732cd1544", 800),
  },
  {
    title: "Relocation Services",
    description:
      "End-to-end relocation support for clients moving across cities, states, or continents.",
    image: img("1502005229762-cf1b2da7c5d6", 800),
  },
];

export const team = [
  {
    name: "Daniel Morgan",
    role: "Managing Director",
    photo: img("1599566150163-29194dcaad36", 600),
    email: "daniel@horizonproperties.com",
    phone: "(555) 246-7890",
  },
  {
    name: "Olivia Carter",
    role: "Luxury Property Advisor",
    photo: img("1573497019940-1c28c88b4f3e", 600),
    email: "olivia@horizonproperties.com",
    phone: "(555) 246-7891",
  },
  {
    name: "James Wilson",
    role: "Investment Consultant",
    photo: img("1463453091185-61582044d556", 600),
    email: "james@horizonproperties.com",
    phone: "(555) 246-7892",
  },
  {
    name: "Sophia Bennett",
    role: "Senior Property Specialist",
    photo: img("1438761681033-6461ffad8d80", 600),
    email: "sophia@horizonproperties.com",
    phone: "(555) 246-7893",
  },
];

export const heroImage = img("1600607687939-ce8a6c25118c", 2000);

export const aboutImages = {
  main: img("1512917774080-9991f1c4c750", 1000),
  secondary: img("1486718448742-163732cd1544", 600),
};

export const ctaImage = img("1502005229762-cf1b2da7c5d6", 1600);

export function getProperty(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getSimilarProperties(id: string, limit = 3): Property[] {
  const current = getProperty(id);
  if (!current) return properties.slice(0, limit);
  return properties
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      const aScore =
        (a.city === current.city ? 2 : 0) + (a.type === current.type ? 1 : 0);
      const bScore =
        (b.city === current.city ? 2 : 0) + (b.type === current.type ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
}

export const locations = [...new Set(properties.map((p) => p.city))];
export const propertyTypes = [...new Set(properties.map((p) => p.type))];
