import { images } from "./products";

export type Project = {
  slug: string;
  name: string;
  location: string;
  story: string;
  furniture: string[];
  image: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "modern-residence",
    name: "Modern Residence",
    // [PLACEHOLDER] Replace with the real project location.
    location: "Private residence, India",
    story:
      "A full living and dining fit-out for a family home. The brief asked for warmth without heaviness, so we kept the timber dark and the upholstery pale, and let the window line do the rest.",
    furniture: ["Yodha Atelier Sofa", "Yodha Stone Centre Table", "Yodha Heritage Sideboard"],
    image: images.projectResidence,
    gallery: [images.projectResidence, images.coffeeTable, images.sofa],
  },
  {
    slug: "luxury-bedroom",
    name: "Luxury Bedroom",
    location: "Private residence, India",
    story:
      "A primary bedroom built around a single commissioned bed. Storage was concealed in the platform so the room could stay uncluttered.",
    furniture: ["Yodha Royale Storage Bed", "Yodha Fluted Wardrobe"],
    image: images.storageBed,
    gallery: [images.storageBed, images.wardrobe, images.heritageBed],
  },
  {
    slug: "classic-dining",
    name: "Classic Dining",
    location: "Private residence, India",
    story:
      "An oval table was chosen over a rectangle so the room could seat eight without crowding the walkway.",
    furniture: ["Yodha Classic Dining Set", "Yodha Heritage Sideboard"],
    image: images.diningSet,
    gallery: [images.diningSet, images.wardrobe, images.craftsmanship],
  },
  {
    slug: "boutique-interior",
    name: "Boutique Interior",
    location: "Commercial space, India",
    story:
      "A small retail interior furnished with seating and display cabinetry made to the exact footprint of the shop.",
    furniture: ["Yodha Heritage Armchair", "Yodha Custom Commission"],
    image: images.showroom,
    gallery: [images.showroom, images.armchair, images.craftsmanship],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  city: string;
};

/* [PLACEHOLDER] Sample testimonials — replace with real, attributable customer feedback. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The craftsmanship, finish and attention to detail were beyond what we expected.",
    name: "Customer name",
    city: "City",
  },
  {
    quote:
      "They measured the room, changed the proportions of the table for us, and it fits as if the room was built around it.",
    name: "Customer name",
    city: "City",
  },
  {
    quote: "Six months in, the finish still looks the way it did on delivery day.",
    name: "Customer name",
    city: "City",
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "choosing-timber-for-indian-homes",
    title: "Choosing Timber For Indian Homes",
    category: "Materials",
    excerpt:
      "Humidity, sunlight and daily use all shape how a timber ages. A practical guide to picking the right one.",
    date: "2026-01-18",
    readingTime: "6 min read",
    image: images.craftsmanship,
    body: [
      "Timber is not a single material. Two boards from the same tree can behave differently once they are seasoned, cut and finished, which is why we season everything before it reaches the workshop floor.",
      "In most Indian homes the two things that matter more than species are seasoning and finish. A well-seasoned board in a modest species will outlast a poorly dried board in a celebrated one.",
      "If you are choosing between options for a dining table, ask about the moisture content and the joint used at the apron before you ask about the species.",
    ],
  },
  {
    slug: "how-to-plan-a-dining-room",
    title: "How To Plan A Dining Room",
    category: "Interior Design",
    excerpt: "Table length, walkway clearance and light height — the three measurements that decide the room.",
    date: "2026-02-04",
    readingTime: "5 min read",
    image: images.diningSet,
    body: [
      "Start with the walkway. You need clear space behind a pulled-out chair for someone to pass; without it, the most beautiful table in the world becomes an obstacle.",
      "Then the table. An oval or round top buys you circulation in a narrow room, while a rectangle seats more along the same length.",
      "Finally the light. Hang it so the lower edge sits above eye level of a seated guest, and centre it on the table rather than the room.",
    ],
  },
  {
    slug: "caring-for-solid-wood-furniture",
    title: "Caring For Solid Wood Furniture",
    category: "Care Guide",
    excerpt: "A short routine that keeps a hand-finished surface looking the way it did on delivery day.",
    date: "2026-02-22",
    readingTime: "4 min read",
    image: images.heritageBed,
    body: [
      "Dust with a soft dry cloth. Anything abrasive will dull a hand-rubbed finish faster than daily use will.",
      "Keep standing water off timber and stone. Coasters are unglamorous and they work.",
      "Rotate cushions and keep upholstery out of direct afternoon sun; fading is almost always a light problem, not a fabric problem.",
    ],
  },
  {
    slug: "the-case-for-made-to-order",
    title: "The Case For Made To Order",
    category: "Craftsmanship",
    excerpt: "Why waiting a few weeks usually produces furniture you keep for decades.",
    date: "2026-03-09",
    readingTime: "5 min read",
    image: images.showroom,
    body: [
      "Ready stock is designed for the average room. Your room is not average — it has a door that swings, a window that dictates the seating, a ceiling height that changes the proportions.",
      "Made to order lets us set the dimension to the space rather than the shelf, and it lets you choose the timber and the finish rather than accept them.",
      "The trade is time. Most commissions take a few weeks; the piece then stays with you far longer than that.",
    ],
  },
];

export const faqs = [
  {
    q: "Do you make furniture to custom dimensions?",
    a: "Yes. Most of our pieces can be made to your dimensions, timber and finish. Start with the custom furniture enquiry form and our team will take it from there.",
  },
  {
    q: "How long does a made-to-order piece take?",
    a: "Timelines depend on the piece, the timber and the finish. We confirm a specific timeline with you in writing before work begins.",
  },
  {
    q: "Do you deliver outside your city?",
    a: "Delivery coverage and charges are confirmed at the time of enquiry, based on your location. Please ask us before ordering.",
  },
  {
    q: "Can I see the furniture before ordering?",
    a: "Yes. You can visit the showroom, and we recommend booking an appointment so a member of the team is free to take you through the pieces.",
  },
  {
    q: "Is there a warranty?",
    a: "Warranty terms are shared with you in writing at the time of enquiry, and vary by piece and material.",
  },
  {
    q: "Can I buy directly online?",
    a: "Some pieces can be added to the cart directly. Others — commissions and large made-to-order items — are enquiry only, so we can confirm specification and delivery with you first.",
  },
];
