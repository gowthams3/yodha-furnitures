import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/products";
import { LinkButton, PageHero, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/craftsmanship")({
  head: () => ({
    meta: [
      { title: "Craftsmanship — How Yodha Furniture Is Made" },
      {
        name: "description",
        content:
          "Timber selection, seasoning, joinery, upholstery and hand finishing — how every Yodha Furniture's piece is made, step by step.",
      },
      { property: "og:title", content: "Craftsmanship — How Yodha Furniture Is Made" },
      {
        property: "og:description",
        content: "From seasoned timber to hand-rubbed finish: our making process.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CraftsmanshipPage,
});

const steps = [
  {
    title: "Timber selection",
    body: "Boards are chosen for grain, stability and how they will age in an Indian home. Anything that will move badly is set aside before it reaches the bench.",
  },
  {
    title: "Seasoning",
    body: "Timber is seasoned before cutting so the finished piece holds its shape through changes in humidity. This is the step that decides whether a joint stays tight in five years.",
  },
  {
    title: "Joinery",
    body: "Frames are cut and assembled with traditional joints where the load demands it, rather than relying on fasteners alone.",
  },
  {
    title: "Upholstery",
    body: "Hardwood frames are webbed and sprung by hand, then covered so seams follow the line of the piece instead of cutting across it.",
  },
  {
    title: "Hand finishing",
    body: "Surfaces are sanded through progressive grits and finished by hand, so the grain stays readable under the sheen.",
  },
  {
    title: "Inspection and delivery",
    body: "Every piece is checked, wrapped and delivered by a team who can place it in the room and take the packaging away.",
  },
];

function CraftsmanshipPage() {
  return (
    <main>
      <PageHero
        eyebrow="Craftsmanship"
        title="Made slowly, on purpose"
        intro="Every piece passes through the same six stages. Nothing is rushed, and nothing leaves the workshop unfinished."
        image={images.craftsmanship}
      />

      <section className="theme-ivory bg-background py-20 md:py-28">
        <div className="container-y">
          <SectionHeading eyebrow="Process" title="Six stages, one bench at a time" />
          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="border-t border-foreground/15 pt-6">
                  <p className="eyebrow mb-4">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="font-display text-2xl">{s.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative isolate overflow-hidden bg-ink py-24 md:py-32">
        <img src={images.craftsmanship} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div className="container-y max-w-3xl text-center">
          <p className="eyebrow mb-6">Materials</p>
          <p className="display-md text-ivory text-balance">
            Solid timber, natural stone, linen and boucl&eacute;, bronze hardware — chosen for how they age, not how they photograph.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <LinkButton to="/custom" variant="ivory" withArrow>
              Commission a piece
            </LinkButton>
            <LinkButton to="/shop" variant="outline" className="text-ivory">
              Browse the catalogue
            </LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}
