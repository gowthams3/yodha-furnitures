import heritageBed from "@/assets/heritage-bed.jpg";
import storageBed from "@/assets/storage-bed.jpg";
import diningSet from "@/assets/classic-dining-set.jpg";
import armchair from "@/assets/classic-armchair.jpg";
import sofa from "@/assets/signature-sofa.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import coffeeTable from "@/assets/coffee-table.jpg";
import showroom from "@/assets/hero-showroom.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";
import projectResidence from "@/assets/project-residence.jpg";

export const images = {
  heritageBed,
  storageBed,
  diningSet,
  armchair,
  sofa,
  wardrobe,
  coffeeTable,
  showroom,
  craftsmanship,
  projectResidence,
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string; // category slug
  collection: string; // collection slug
  shortDescription: string;
  description: string;
  price?: number;
  comparePrice?: number;
  images: string[];
  thumbnail: string;
  materials: string[];
  colors: string[];
  dimensions: string;
  finish: string;
  availability: "in-stock" | "made-to-order";
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  customizable?: boolean;
  enquiryOnly?: boolean;
  sku: string;
  warranty: string;
  careInstructions: string;
  deliveryInfo: string;
  style: string;
  tags: string[];
};

export type Category = {
  slug: string;
  name: string;
  intro: string;
  image: string;
};

export type Collection = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "living-room",
    name: "Living Room",
    intro:
      "Pieces built for the room where the day slows down — grounded proportions, warm textiles and wood that ages beautifully.",
    image: coffeeTable,
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    intro:
      "Quiet, substantial furniture for rest. Solid frames, considered joinery and finishes chosen to soften with time.",
    image: heritageBed,
  },
  {
    slug: "dining",
    name: "Dining Room",
    intro: "Tables and seating made for long evenings and the conversations that outlast the meal.",
    image: diningSet,
  },
  { slug: "sofas", name: "Sofas", intro: "Deep, tailored seating with hardwood frames and hand-finished upholstery.", image: sofa },
  { slug: "chairs", name: "Chairs", intro: "Accent and dining seating, shaped by hand and built to be sat in daily.", image: armchair },
  { slug: "tables", name: "Tables", intro: "Dining, centre and side tables in solid timber and natural stone.", image: coffeeTable },
  { slug: "beds", name: "Beds", intro: "King, queen and custom beds with upholstered or solid timber headboards.", image: storageBed },
  { slug: "wardrobes", name: "Wardrobes", intro: "Fitted and freestanding storage detailed down to the handle.", image: wardrobe },
  { slug: "storage", name: "Storage", intro: "Sideboards, consoles and cabinets that carry the room quietly.", image: wardrobe },
  { slug: "office", name: "Office Furniture", intro: "Desks and seating with the calm of a study rather than a workstation.", image: coffeeTable },
  { slug: "accent", name: "Accent Furniture", intro: "The smaller pieces that finish a room.", image: armchair },
  { slug: "custom", name: "Custom Furniture", intro: "Made to your dimensions, your timber and your finish.", image: craftsmanship },
];

export const collections: Collection[] = [
  {
    slug: "heritage",
    name: "Heritage",
    description:
      "Traditional joinery and carved detail, reworked in proportions that suit contemporary homes.",
    image: heritageBed,
  },
  {
    slug: "royale",
    name: "Royale",
    description: "Deeper tones, fuller volumes and upholstery-led silhouettes for formal spaces.",
    image: storageBed,
  },
  {
    slug: "atelier",
    name: "Atelier",
    description: "Quiet modern pieces — clean lines, honest materials, minimal ornament.",
    image: sofa,
  },
  {
    slug: "studio-custom",
    name: "Studio Custom",
    description: "One-off commissions developed with our studio from sketch to delivery.",
    image: craftsmanship,
  },
];

const base = {
  warranty: "Warranty terms shared at the time of enquiry.",
  careInstructions:
    "Dust with a soft dry cloth. Avoid direct sunlight and standing moisture. Use coasters on timber and stone surfaces.",
  deliveryInfo:
    "Delivery timelines and coverage are confirmed at the time of enquiry, based on your location.",
};

export const products: Product[] = [
  {
    id: "yf-001",
    name: "Yodha Heritage Bed",
    slug: "yodha-heritage-bed",
    category: "beds",
    collection: "heritage",
    shortDescription: "Solid timber king bed with a tall channelled headboard.",
    description:
      "A grounded, generous bed built around a solid timber frame with a tall channelled upholstered headboard. The panelled footboard is assembled with traditional joinery and hand-finished so the grain stays visible.",
    price: 189000,
    images: [heritageBed, storageBed],
    thumbnail: heritageBed,
    materials: ["Solid timber", "Linen-blend upholstery"],
    colors: ["Walnut", "Warm ivory"],
    dimensions: "Dimensions available on enquiry",
    finish: "Hand-rubbed matte",
    availability: "made-to-order",
    featured: true,
    bestSeller: true,
    customizable: true,
    sku: "YF-BED-001",
    style: "Traditional",
    tags: ["bed", "king", "teak", "bedroom"],
    ...base,
  },
  {
    id: "yf-002",
    name: "Yodha Royale Storage Bed",
    slug: "yodha-royale-storage-bed",
    category: "beds",
    collection: "royale",
    shortDescription: "Dark timber storage bed with a velvet-look headboard.",
    description:
      "A formal bed with concealed storage beneath the platform. Carved crest detail, deep espresso timber and a full-height upholstered headboard.",
    images: [storageBed, heritageBed],
    thumbnail: storageBed,
    materials: ["Solid timber", "Velvet-look upholstery"],
    colors: ["Espresso", "Antique bronze"],
    dimensions: "Dimensions available on enquiry",
    finish: "Deep polish",
    availability: "made-to-order",
    featured: true,
    enquiryOnly: true,
    customizable: true,
    sku: "YF-BED-002",
    style: "Classic",
    tags: ["storage bed", "bedroom", "royale"],
    ...base,
  },
  {
    id: "yf-003",
    name: "Yodha Classic Dining Set",
    slug: "yodha-classic-dining-set",
    category: "dining",
    collection: "heritage",
    shortDescription: "Six-seater dining table with upholstered chairs.",
    description:
      "An oval solid-timber top over a fluted pedestal base, paired with six curved-back upholstered chairs. Built to seat a family every day, not only on occasions.",
    price: 264000,
    comparePrice: 289000,
    images: [diningSet, coffeeTable],
    thumbnail: diningSet,
    materials: ["Solid timber", "Textured upholstery"],
    colors: ["Walnut", "Sand"],
    dimensions: "Dimensions available on enquiry",
    finish: "Satin lacquer",
    availability: "made-to-order",
    featured: true,
    bestSeller: true,
    customizable: true,
    sku: "YF-DIN-003",
    style: "Transitional",
    tags: ["dining table", "dining chairs", "six seater"],
    ...base,
  },
  {
    id: "yf-004",
    name: "Yodha Heritage Armchair",
    slug: "yodha-heritage-armchair",
    category: "chairs",
    collection: "heritage",
    shortDescription: "Hand-carved armchair in natural linen.",
    description:
      "A classic rolled-arm chair with hand-carved cabriole legs and a natural linen cover. Coil-sprung seat, hardwood frame, finished by hand at the studio.",
    price: 68000,
    images: [armchair, sofa],
    thumbnail: armchair,
    materials: ["Hardwood frame", "Natural linen"],
    colors: ["Oat", "Walnut"],
    dimensions: "Dimensions available on enquiry",
    finish: "Hand-carved, waxed",
    availability: "in-stock",
    featured: true,
    newArrival: true,
    customizable: true,
    sku: "YF-CHR-004",
    style: "Classic",
    tags: ["armchair", "accent chair", "linen"],
    ...base,
  },
  {
    id: "yf-005",
    name: "Yodha Atelier Sofa",
    slug: "yodha-atelier-sofa",
    category: "sofas",
    collection: "atelier",
    shortDescription: "Three-seater bouclé sofa on a solid walnut plinth.",
    description:
      "A soft, low three-seater in textured bouclé, raised on a solid timber plinth. Feather-blend cushioning over a kiln-dried hardwood frame.",
    price: 212000,
    images: [sofa, coffeeTable],
    thumbnail: sofa,
    materials: ["Kiln-dried hardwood", "Bouclé"],
    colors: ["Ivory", "Walnut"],
    dimensions: "Dimensions available on enquiry",
    finish: "Matte oil",
    availability: "made-to-order",
    featured: true,
    bestSeller: true,
    newArrival: true,
    customizable: true,
    sku: "YF-SOF-005",
    style: "Modern",
    tags: ["sofa", "three seater", "boucle", "living room"],
    ...base,
  },
  {
    id: "yf-006",
    name: "Yodha Fluted Wardrobe",
    slug: "yodha-fluted-wardrobe",
    category: "wardrobes",
    collection: "atelier",
    shortDescription: "Full-height wardrobe with fluted doors and bronze pulls.",
    description:
      "A full-height wardrobe in dark timber with fluted door panels and solid bronze pulls. Interior configuration is made to order.",
    images: [wardrobe, storageBed],
    thumbnail: wardrobe,
    materials: ["Solid timber", "Bronze hardware"],
    colors: ["Espresso"],
    dimensions: "Dimensions available on enquiry",
    finish: "Matte",
    availability: "made-to-order",
    enquiryOnly: true,
    customizable: true,
    newArrival: true,
    sku: "YF-WRD-006",
    style: "Modern",
    tags: ["wardrobe", "storage", "bedroom"],
    ...base,
  },
  {
    id: "yf-007",
    name: "Yodha Stone Centre Table",
    slug: "yodha-stone-centre-table",
    category: "tables",
    collection: "atelier",
    shortDescription: "Round centre table in dark stone and burl timber.",
    description:
      "A round centre table pairing a dark veined stone top with a sculpted burl timber drum base. Each top varies with the stone.",
    price: 96000,
    images: [coffeeTable, sofa],
    thumbnail: coffeeTable,
    materials: ["Natural stone", "Burl timber"],
    colors: ["Noir", "Walnut"],
    dimensions: "Dimensions available on enquiry",
    finish: "Honed stone, matte timber",
    availability: "in-stock",
    bestSeller: true,
    customizable: true,
    sku: "YF-TBL-007",
    style: "Modern",
    tags: ["coffee table", "centre table", "marble", "living room"],
    ...base,
  },
  {
    id: "yf-008",
    name: "Yodha Royale Dining Table",
    slug: "yodha-royale-dining-table",
    category: "tables",
    collection: "royale",
    shortDescription: "Eight-seater dining table in solid dark timber.",
    description:
      "A long eight-seater table in solid dark timber with a chamfered edge and twin pedestal base. Made to order in your length.",
    images: [diningSet, craftsmanship],
    thumbnail: diningSet,
    materials: ["Solid timber"],
    colors: ["Espresso", "Walnut"],
    dimensions: "Dimensions available on enquiry",
    finish: "Deep polish",
    availability: "made-to-order",
    enquiryOnly: true,
    customizable: true,
    sku: "YF-TBL-008",
    style: "Classic",
    tags: ["dining table", "eight seater"],
    ...base,
  },
  {
    id: "yf-009",
    name: "Yodha Atelier Lounge Chair",
    slug: "yodha-atelier-lounge-chair",
    category: "chairs",
    collection: "atelier",
    shortDescription: "Low lounge chair in linen with a timber base.",
    description:
      "A low, wide lounge chair with a softly tailored linen shell over a solid timber base. Comfortable enough to read in for hours.",
    price: 54000,
    images: [armchair, sofa],
    thumbnail: armchair,
    materials: ["Solid timber", "Linen"],
    colors: ["Oat"],
    dimensions: "Dimensions available on enquiry",
    finish: "Matte oil",
    availability: "in-stock",
    newArrival: true,
    customizable: true,
    sku: "YF-CHR-009",
    style: "Modern",
    tags: ["lounge chair", "accent", "linen"],
    ...base,
  },
  {
    id: "yf-010",
    name: "Yodha Heritage Sideboard",
    slug: "yodha-heritage-sideboard",
    category: "storage",
    collection: "heritage",
    shortDescription: "Low sideboard with panelled doors and bronze detail.",
    description:
      "A low sideboard in solid timber with panelled doors, bronze detailing and an adjustable interior. Sits well behind a dining table or along a hallway.",
    price: 124000,
    images: [wardrobe, diningSet],
    thumbnail: wardrobe,
    materials: ["Solid timber", "Bronze hardware"],
    colors: ["Walnut"],
    dimensions: "Dimensions available on enquiry",
    finish: "Hand-rubbed matte",
    availability: "made-to-order",
    customizable: true,
    sku: "YF-STR-010",
    style: "Traditional",
    tags: ["sideboard", "storage", "dining"],
    ...base,
  },
  {
    id: "yf-011",
    name: "Yodha Studio Writing Desk",
    slug: "yodha-studio-writing-desk",
    category: "office",
    collection: "atelier",
    shortDescription: "Slim writing desk in solid timber.",
    description:
      "A slim writing desk with a single drawer and tapered legs, sized to sit in a bedroom or study without dominating it.",
    price: 72000,
    images: [coffeeTable, craftsmanship],
    thumbnail: coffeeTable,
    materials: ["Solid timber"],
    colors: ["Walnut"],
    dimensions: "Dimensions available on enquiry",
    finish: "Matte oil",
    availability: "made-to-order",
    customizable: true,
    sku: "YF-OFF-011",
    style: "Modern",
    tags: ["desk", "study", "office"],
    ...base,
  },
  {
    id: "yf-012",
    name: "Yodha Custom Commission",
    slug: "yodha-custom-commission",
    category: "custom",
    collection: "studio-custom",
    shortDescription: "A piece designed and made entirely to your brief.",
    description:
      "Start from a sketch, a reference photograph or a room measurement. We develop the design with you, agree the timber and finish, and build it at the studio.",
    images: [craftsmanship, projectResidence],
    thumbnail: craftsmanship,
    materials: ["Your choice of timber", "Your choice of upholstery"],
    colors: ["Custom"],
    dimensions: "Made to your dimensions",
    finish: "Custom",
    availability: "made-to-order",
    enquiryOnly: true,
    customizable: true,
    featured: true,
    sku: "YF-CUS-012",
    style: "Custom",
    tags: ["custom", "bespoke", "commission"],
    ...base,
  },
];

export const materials = Array.from(new Set(products.flatMap((p) => p.materials))).sort();
export const colorOptions = Array.from(new Set(products.flatMap((p) => p.colors))).sort();
export const styles = Array.from(new Set(products.map((p) => p.style))).sort();

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) =>
    [p.name, p.category, p.collection, p.style, ...p.materials, ...p.tags]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}
