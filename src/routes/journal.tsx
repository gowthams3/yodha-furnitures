import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/data/content";
import { images } from "@/data/products";
import { PageHero } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Materials, Care & Design | Yodha Furniture's" },
      {
        name: "description",
        content:
          "Short, practical notes on choosing timber, planning rooms and caring for handcrafted furniture, from the Yodha Furniture's studio.",
      },
      { property: "og:title", content: "Journal — Yodha Furniture's" },
      { property: "og:description", content: "Notes on materials, care and interior design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

function JournalPage() {
  return (
    <main>
      <PageHero
        eyebrow="Journal"
        title="Notes from the studio"
        intro="Practical writing on materials, care and the rooms furniture has to live in."
        image={images.craftsmanship}
      />
      <section className="theme-ivory bg-background py-20 md:py-28">
        <div className="container-y grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 60}>
              <Link to="/journal/$slug" params={{ slug: a.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-6">{a.category}</p>
                <h2 className="mt-3 font-display text-2xl leading-snug">{a.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
                <p className="mt-4 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {new Date(a.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {a.readingTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
