/**
 * Site-wide brand + contact configuration.
 * PLACEHOLDER CONTENT — replace the contact details below with the real ones.
 */
export const site = {
  name: "Yodha Furniture's",
  tagline: "Furniture crafted for spaces that matter.",
  // [PLACEHOLDER] Replace with the real showroom phone number.
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  // [PLACEHOLDER] Replace with the real WhatsApp business number (digits only, with country code).
  whatsapp: "910000000000",
  // [PLACEHOLDER] Replace with the real email address.
  email: "hello@yodhafurnitures.example",
  // [PLACEHOLDER] Replace with the real showroom address.
  address: "Showroom address line 1, Area, City, State 000000, India",
  hours: [
    { day: "Monday – Saturday", time: "10:00 – 20:00" },
    { day: "Sunday", time: "By appointment" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}
