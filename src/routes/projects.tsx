import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/content";
import { images } from "@/data/products";
import { PageHero } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Furniture In Real Homes | Yodha Furniture's" },
      {
        name: "description",
        content:
          "Living rooms, bedrooms, dining rooms and commercial interiors furnished by Yodha Furniture's, with the pieces used in each.",
      },
      { property: "og:title", content: "Projects — Furniture In Real Homes" },
      { property: "og:description", content: "Selected residential and commercial fit-outs by Yodha Furniture's." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects"
        title="Rooms we have furnished"
        intro="A selection of residential and commercial spaces, and the pieces made for them."
        image={images.projectResidence}
      />
      <section className="theme-ivory bg-background py-20 md:py-28">
        <div className="container-y grid gap-x-10 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link to="/project/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} — furniture project by Yodha Furniture's`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-6">{p.location}</p>
                <h2 className="mt-3 font-display text-3xl">{p.name}</h2>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">{p.story}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
