import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/products";
import {
  LinkButton,
  PageHero,
  SectionHeading,
} from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Yodha Furniture's — Handcrafted & Custom Furniture",
      },
      {
        name: "description",
        content:
          "Discover Yodha Furniture's approach to handcrafted, custom and made-to-order furniture. Explore our craftsmanship, materials and commitment to creating timeless furniture for modern homes.",
      },
      {
        property: "og:title",
        content:
          "About Yodha Furniture's — Handcrafted & Custom Furniture",
      },
      {
        property: "og:description",
        content:
          "Discover the craftsmanship, materials and thoughtful design behind Yodha Furniture's handcrafted and custom furniture.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/about",
      },
    ],
  }),

  component: AboutPage,
});

const values = [
  {
    title: "Made to Order",
    body: "Furniture crafted to suit your space, style and requirements, with careful attention to every detail.",
  },
  {
    title: "Quality Materials",
    body: "Carefully selected timber, upholstery, natural materials and hardware chosen for durability and lasting beauty.",
  },
  {
    title: "Thoughtful Craftsmanship",
    body: "Attention to proportion, joinery, finish and the small details that make furniture feel exceptional.",
  },
  {
    title: "Built to Last",
    body: "Timeless designs and dependable construction made for years of everyday living.",
  },
];

function AboutPage() {
  return (
    <main className="bg-[#F7F2EA]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="About Yodha Furniture's"
        title="Furniture designed to feel at home."
        intro="Thoughtfully designed and expertly crafted furniture made for beautiful, comfortable spaces."
        image={images.showroom}
      />

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-[#F7F2EA] py-20 md:py-28">
        <div className="container-y grid items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <img
                src={images.craftsmanship}
                alt="Craftsmanship behind Yodha Furniture's handcrafted furniture"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute bottom-0 left-0 bg-[#241811] px-6 py-5 md:px-8 md:py-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C47A3A]">
                  Yodha Furniture's
                </p>

                <p className="mt-1 font-display text-xl text-[#F7F2EA]">
                  Designed with purpose.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={120}>
            <div className="max-w-xl">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A4F20]">
                Our Story
              </p>

              <h2 className="font-display text-4xl leading-[1.08] text-[#241811] md:text-5xl">
                Craftsmanship behind every piece.
              </h2>

              <div className="mt-7 space-y-5 text-[15px] leading-7 text-[#241811]/70 md:text-base">
                <p>
                  At Yodha Furniture's, we believe great furniture should be
                  more than something that fills a room. It should bring
                  comfort, character and a sense of belonging to your home.
                </p>

                <p>
                  Our furniture is thoughtfully designed around the way people
                  live, balancing timeless aesthetics with everyday
                  functionality.
                </p>

                <p>
                  From the proportions of a dining table to the finish of a
                  timber surface, every element is considered before a piece
                  reaches your home.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          BRAND STATEMENT
      ========================================================= */}
      <section className="bg-[#241811] py-20 md:py-28">
        <div className="container-y">
          <Reveal>
            <div className="max-w-4xl">
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C47A3A]">
                Our Approach
              </p>

              <h2 className="font-display text-4xl leading-[1.08] text-[#F7F2EA] md:text-5xl lg:text-6xl">
                Designed with purpose.
                <br />
                Crafted with care.
              </h2>

              <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#F7F2EA]/65 md:text-base">
                We believe beautiful furniture begins with thoughtful design
                and is completed through careful craftsmanship. Every piece is
                considered for comfort, proportion, function and the years it
                will spend in your home.
              </p>
            </div>
          </Reveal>

          {/* Feature blocks */}
          <div className="mt-16 grid gap-px bg-[#F7F2EA]/10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Timeless Design",
                body: "Clean forms, balanced proportions and considered details designed to remain relevant for years.",
              },
              {
                number: "02",
                title: "Honest Materials",
                body: "Carefully selected materials that bring natural character, comfort and durability to every piece.",
              },
              {
                number: "03",
                title: "Everyday Comfort",
                body: "Furniture designed not only to look beautiful, but to feel right in the spaces where life happens.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full bg-[#241811] p-7 md:p-9">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-[#C47A3A]">
                    {item.number}
                  </span>

                  <h3 className="mt-10 font-display text-2xl text-[#F7F2EA]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#F7F2EA]/60">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CRAFTSMANSHIP
      ========================================================= */}
      <section className="bg-[#FCFAF6] py-20 md:py-28">
        <div className="container-y grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          {/* Content */}
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A4F20]">
                The Craft
              </p>

              <h2 className="font-display text-4xl leading-[1.08] text-[#241811] md:text-5xl">
                From the first sketch to the final finish.
              </h2>

              <p className="mt-6 text-[15px] leading-7 text-[#241811]/70">
                Good furniture is built on details. The proportions of a
                frame, the feel of an edge, the balance of a chair and the
                finish of a timber surface all contribute to the experience
                of a piece.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#241811]/70">
                Our approach brings design and craftsmanship together to
                create furniture that looks considered and feels natural in
                everyday use.
              </p>

              <div className="mt-8">
                <LinkButton to="/craftsmanship" withArrow>
                  Explore Our Craftsmanship
                </LinkButton>
              </div>
            </div>
          </Reveal>

          {/* Image */}
          <Reveal delay={120}>
            <img
              src={images.craftsmanship}
              alt="Handcrafted furniture craftsmanship at Yodha Furniture's"
              className="aspect-[16/11] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="bg-[#EDE3D6] py-20 md:py-28">
        <div className="container-y">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A4F20]">
                What Sets Us Apart
              </p>

              <h2 className="font-display text-4xl leading-[1.08] text-[#241811] md:text-5xl">
                A better approach to furniture.
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#241811]/65">
                From material selection to final delivery, we focus on the
                details that make quality furniture worth living with.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article className="border-t border-[#241811]/15 pt-6">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#9A4F20]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-7 font-display text-2xl text-[#241811]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#241811]/65">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <LinkButton to="/contact" withArrow>
              Visit Our Showroom
            </LinkButton>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================= */}
      <section className="bg-[#F7F2EA] py-20 md:py-28">
        <div className="container-y">
          <Reveal>
            <div className="border-t border-[#241811]/15 pt-10 md:flex md:items-end md:justify-between md:gap-12">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A4F20]">
                  Yodha Furniture's
                </p>

                <h2 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-[#241811] md:text-5xl lg:text-6xl">
                  Furniture you'll love
                  <br />
                  living with.
                </h2>
              </div>

              <div className="mt-7 md:mt-0">
                <LinkButton to="/shop" withArrow>
                  Explore Furniture
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}