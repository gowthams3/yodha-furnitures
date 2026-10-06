import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { images } from "@/data/products";
import { whatsappLink } from "@/data/site";
import { ActionButton, PageHero, SectionHeading } from "@/components/Primitives";
import { Field } from "@/components/Overlays";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "Custom Furniture — Commission A Piece | Yodha Furniture's" },
      {
        name: "description",
        content:
          "Commission furniture made to your dimensions, timber and finish. From a sketch or reference photo to a finished piece, with Yodha Furniture's.",
      },
      { property: "og:title", content: "Custom Furniture — Yodha Furniture's" },
      { property: "og:description", content: "Made to your dimensions, your timber and your finish." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/custom" }],
  }),
  component: CustomPage,
});

const steps = [
  { title: "Brief", body: "Share a sketch, a photo or the room measurements. We ask the questions that matter and confirm the brief in writing." },
  { title: "Design", body: "We develop the design with you — proportions, timber, finish — and agree a quotation and timeline before anything is cut." },
  { title: "Making", body: "The piece is built at the studio. You get updates while it is on the bench, and nothing is sealed until the finish is right." },
  { title: "Delivery", body: "We deliver, place the piece in the room and take the packaging away. Aftercare advice comes with it." },
];

function CustomPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHero
        eyebrow="Custom furniture"
        title="Built for your room, not for a shelf"
        intro="A commission starts with a conversation and ends with a piece that fits — the wall, the room and the way you live."
        image={images.craftsmanship}
      >
        <a
          href={whatsappLink("Hello, I'd like to discuss a custom furniture commission.")}
          target="_blank"
          rel="noreferrer"
          className="link-line text-[0.7rem] uppercase tracking-[0.24em] text-copper"
        >
          Discuss on WhatsApp
        </a>
      </PageHero>

      <section className="theme-ivory bg-background py-20 md:py-28">
        <div className="container-y">
          <SectionHeading eyebrow="How a commission works" title="Four stages, one piece of furniture" />
          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="grain bg-ink py-20 md:py-28">
        <div className="container-y grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-6">Start a commission</p>
            <h2 className="display-md text-ivory text-balance">Tell us what the room needs</h2>
            <p className="mt-6 max-w-md text-beige/75">
              Dimensions help, a photo of the room helps more. Send what you have and we will take it from there.
            </p>
          </div>
          <div className="border border-ivory/15 p-7 md:p-9">
            {sent ? (
              <div>
                <p className="font-display text-2xl text-ivory">Thank you.</p>
                <p className="mt-3 text-sm text-beige/75">
                  Your brief has been noted. For a faster conversation, continue on WhatsApp.
                </p>
                <a
                  href={whatsappLink("Hello, I'd like to discuss a custom furniture commission.")}
                  target="_blank"
                  rel="noreferrer"
                  className="link-line mt-6 inline-block text-[0.68rem] uppercase tracking-[0.24em] text-copper"
                >
                  Continue on WhatsApp
                </a>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field label="Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" />
                <Field label="City" name="city" />
                <label className="flex flex-col gap-2">
                  <span className="eyebrow">What would you like made?</span>
                  <textarea
                    name="brief"
                    rows={5}
                    required
                    placeholder="A bed, a dining table, a wardrobe — rough dimensions or a reference are welcome."
                    className="border border-input bg-transparent px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/40 focus:border-copper"
                  />
                </label>
                <ActionButton type="submit" variant="ivory" withArrow className="mt-2">
                  Send brief
                </ActionButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
