import { createFileRoute, Link } from "@tanstack/react-router";
import { collections, images, products } from "@/data/products";
import { PageHero } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Yodha Furniture's" },
      {
        name: "description",
        content:
          "Heritage, Royale, Atelier and Studio Custom — four furniture collections by Yodha Furniture's, each with its own proportions and materials.",
      },
      { property: "og:title", content: "Collections — Yodha Furniture's" },
      {
        property: "og:description",
        content: "Four collections: Heritage, Royale, Atelier and Studio Custom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Collections"
        title="Four ways of working"
        intro="Each collection has its own language — carved and traditional, deep and formal, quiet and modern, or entirely your own."
        image={images.sofa}
      />
      <section className="theme-ivory bg-background py-20 md:py-28">
        <div className="container-y space-y-20 md:space-y-28">
          {collections.map((c, i) => {
            const items = products.filter((p) => p.collection === c.slug);
            return (
              <Reveal key={c.slug} delay={i * 60}>
                <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <Link
                    to="/collection/$slug"
                    params={{ slug: c.slug }}
                    className={`group block overflow-hidden ${i % 2 ? "md:order-2" : ""}`}
                  >
                    <img
                      src={c.image}
                      alt={`${c.name} collection by Yodha Furniture's`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </Link>
                  <div>
                    <p className="eyebrow mb-5">
                      {items.length} {items.length === 1 ? "piece" : "pieces"}
                    </p>
                    <h2 className="display-md">{c.name}</h2>
                    <p className="mt-5 max-w-md text-muted-foreground">{c.description}</p>
                    <Link
                      to="/collection/$slug"
                      params={{ slug: c.slug }}
                      className="link-line mt-8 inline-block text-[0.7rem] uppercase tracking-[0.24em] text-copper"
                    >
                      View collection
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
