import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { faqs } from "@/data/content";
import { images } from "@/data/products";
import { PageHero } from "@/components/Primitives";
import { ChevronDown } from "lucide-react";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Ordering, Delivery & Warranty | Yodha Furniture's" },
      {
        name: "description",
        content:
          "Answers on custom dimensions, made-to-order timelines, delivery coverage, showroom visits, warranty and buying online from Yodha Furniture's.",
      },
      { property: "og:title", content: "FAQ — Yodha Furniture's" },
      { property: "og:description", content: "Ordering, delivery, warranty and custom work — answered." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  const { openEnquiry } = useStore();

  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered plainly"
        intro="Ordering, timelines, delivery and warranty. If your question is not here, ask us directly."
        image={images.showroom}
      />
      <section className="theme-ivory bg-background py-20 md:py-28">
        <div className="container-y max-w-3xl">
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl md:text-2xl">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="pb-7 max-w-xl text-muted-foreground">{f.a}</p>}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-sm text-muted-foreground">Still unsure about something?</p>
            <button
              type="button"
              onClick={() => openEnquiry("general")}
              className="link-line mt-3 text-[0.7rem] uppercase tracking-[0.24em] text-copper"
            >
              Ask us directly
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
