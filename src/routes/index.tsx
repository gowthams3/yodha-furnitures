import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import {
  categories,
  collections,
  images,
  products,
} from "@/data/products";

import {
  articles,
  projects,
  testimonials,
} from "@/data/content";

import { site } from "@/data/site";

import {
  LinkButton,
} from "@/components/Primitives";

import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Yodha Furniture's | Premium Furniture for Modern Indian Homes",
      },
      {
        name: "description",
        content:
          "Explore premium furniture from Yodha Furniture's, including beds, sofas, dining furniture, chairs, storage and more. Thoughtfully designed furniture for beautiful, comfortable homes.",
      },
      {
        property: "og:title",
        content:
          "Yodha Furniture's | Premium Furniture for Modern Indian Homes",
      },
      {
        property: "og:description",
        content:
          "Premium furniture designed for beautiful, comfortable homes.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products
    .filter((product) => product.featured)
    .slice(0, 6);

  const bestSellers = products
    .filter((product) => product.bestSeller)
    .slice(0, 4);

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative isolate min-h-[88svh] overflow-hidden bg-[#241811] lg:min-h-[92svh]">
        <img
          src={images.showroom}
          alt="Yodha Furniture's showroom interior"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Warm photographic overlay */}
        <div className="absolute inset-0 -z-10 bg-[#1b110c]/45" />

        {/* Soft bottom fade for readability */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[70%] bg-gradient-to-t from-[#241811]/90 via-[#241811]/30 to-transparent" />

        <div className="mx-auto flex min-h-[88svh] max-w-[1400px] items-end px-5 pb-14 sm:px-7 md:pb-20 lg:min-h-[92svh] lg:px-10 lg:pb-24">
          <div className="max-w-4xl">
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#B66A2A]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#E8D9C8] sm:text-[11px]">
                  Premium Furniture for Beautiful Homes
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="max-w-4xl font-display text-[clamp(2.7rem,5.4vw,5.5rem)] font-normal leading-[0.98] tracking-[-0.025em] text-[#FCFAF6] text-balance">
                Furniture that Makes
                <span className="block text-[#D39A68]">
                  Your Home Feel Yours.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#F2E8DC]/85 sm:text-base">
                Thoughtfully designed furniture for bedrooms,
                living rooms, dining spaces and every corner of
                your home. Made with attention to detail, comfort
                and lasting quality.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-3">
                <LinkButton
                  to="/shop"
                  withArrow
                >
                  Explore Furniture
                </LinkButton>

                <LinkButton
                  to="/contact"
                  variant="outline"
                  className="text-[#FCFAF6]"
                >
                  Visit Our Showroom
                </LinkButton>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6">
                <TrustPoint>
                  Quality Furniture
                </TrustPoint>

                <TrustPoint>
                  Custom Options
                </TrustPoint>

                <TrustPoint>
                  Showroom Experience
                </TrustPoint>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================= */}

      <section className="border-b border-[#241811]/10 bg-[#FCFAF6]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          <TrustCard
            icon={<ShieldCheck />}
            title="Quality Assured"
            description="Furniture made with care"
          />

          <TrustCard
            icon={<Wrench />}
            title="Custom Options"
            description="Made to suit your space"
          />

          <TrustCard
            icon={<Truck />}
            title="Safe Delivery"
            description="Handled with attention"
          />

          <TrustCard
            icon={<MapPin />}
            title="Visit Our Showroom"
            description="See and feel the furniture"
          />
        </div>
      </section>

      {/* =========================================================
          BRAND INTRO
      ========================================================= */}

      <section className="bg-[#F7F2EA] py-24 md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-10">
          <Reveal>
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                Welcome to Yodha Furniture's
              </p>

              <h2 className="max-w-xl font-display text-[clamp(2.2rem,3.8vw,3.9rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811] text-balance">
                Furniture made for
                <span className="block text-[#9A4F20]">
                  real homes.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="max-w-2xl lg:pt-8">
              <p className="text-[17px] leading-8 text-[#241811]/75">
                Your home deserves furniture that looks beautiful,
                feels comfortable and works naturally with the way
                you live. At Yodha Furniture's, thoughtful design,
                quality materials and careful finishing come together
                to create pieces you will be happy to live with.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#241811]/60">
                From a comfortable bed for your bedroom to a dining
                table where everyone gathers, each piece is chosen
                to bring warmth, comfort and character into the home.
              </p>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.13em] text-[#9A4F20]"
              >
                Know More About Yodha

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SHOP BY CATEGORY
      ========================================================= */}

      <section className="bg-[#F7F2EA] pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                  Explore Our Furniture
                </p>

                <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.9rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811]">
                  Shop by category
                </h2>
              </div>

              <Link
                to="/shop"
                className="group flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.13em] text-[#241811]/65 transition-colors hover:text-[#9A4F20]"
              >
                View All Furniture

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.slice(0, 6).map((category, index) => (
              <Reveal
                key={category.slug}
                delay={index * 70}
              >
                <Link
                  to="/category/$slug"
                  params={{
                    slug: category.slug,
                  }}
                  className="group relative block aspect-[1/1.08] overflow-hidden bg-[#E8DED3]"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#241811]/75 via-[#241811]/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display text-[27px] font-normal leading-none text-white sm:text-[31px]">
                          {category.name}
                        </h3>

                        <p className="mt-2 max-w-xs text-[13px] leading-5 text-white/75">
                          {category.intro}
                        </p>
                      </div>

                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 bg-black/10 text-white transition-all duration-300 group-hover:border-[#9A4F20] group-hover:bg-[#9A4F20]">
                        <ChevronRight
                          className="h-4 w-4"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PRODUCTS
      ========================================================= */}

      <section className="bg-[#FCFAF6] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-7">
            <Reveal>
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                  Featured Furniture
                </p>

                <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.9rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811]">
                  Made to be lived with.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <LinkButton
                to="/shop"
                variant="ghost"
                withArrow
              >
                View All Products
              </LinkButton>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, index) => (
              <Reveal
                key={product.id}
                delay={(index % 3) * 70}
              >
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY YODHA
      ========================================================= */}

      <section className="border-y border-[#241811]/10 bg-[#EFE6DC] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
            <Reveal>
              <div>
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                  Why Yodha
                </p>

                <h2 className="font-display text-[clamp(2.3rem,4vw,4.1rem)] font-normal leading-[1] tracking-[-0.02em] text-[#241811]">
                  More than furniture.
                  <span className="block text-[#9A4F20]">
                    It belongs in your home.
                  </span>
                </h2>

                <p className="mt-7 max-w-lg text-[15px] leading-7 text-[#241811]/65">
                  Furniture becomes part of everyday life — the
                  morning coffee, family meals, quiet evenings and
                  celebrations shared at home. We focus on pieces
                  that feel natural in those moments.
                </p>

                <LinkButton
                  to="/about"
                  variant="outline"
                  withArrow
                  className="mt-8 border-[#241811]/30 text-[#241811] hover:border-[#9A4F20] hover:bg-[#9A4F20]/5"
                >
                  Discover Yodha
                </LinkButton>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid border-l border-[#241811]/15">
                <FeatureRow
                  number="01"
                  title="Thoughtful Design"
                  description="Comfortable proportions and practical designs made for everyday living."
                />

                <FeatureRow
                  number="02"
                  title="Quality Materials"
                  description="Carefully selected materials and finishes that bring warmth and character to your home."
                />

                <FeatureRow
                  number="03"
                  title="Made for Your Space"
                  description="Selected pieces and custom options to suit different rooms, dimensions and lifestyles."
                />

                <FeatureRow
                  number="04"
                  title="Personal Service"
                  description="From choosing your furniture to delivery, our team is here to help."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          CRAFTSMANSHIP
      ========================================================= */}

      <section className="bg-[#241811] py-24 md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24 lg:px-10">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src={images.craftsmanship}
                alt="Craftsmanship and furniture finishing at Yodha Furniture's"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-[5/4]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#C98B58]">
                Craftsmanship
              </p>

              <h2 className="font-display text-[clamp(2.3rem,4vw,4.2rem)] font-normal leading-[1] tracking-[-0.02em] text-[#FCFAF6]">
                Details you can
                <span className="block text-[#C98B58]">
                  see and feel.
                </span>
              </h2>

              <p className="mt-7 text-[15px] leading-7 text-[#E8D9C8]/70">
                Good furniture is about more than how it looks.
                It is about the feel of the material, the strength
                of the construction, the finishing and the small
                details you notice every day.
              </p>

              <div className="mt-10 space-y-0 border-t border-white/15">
                <CraftPoint
                  title="Material"
                  text="Selected for durability, character and everyday use."
                />

                <CraftPoint
                  title="Construction"
                  text="Built with attention to strength, stability and finish."
                />

                <CraftPoint
                  title="Finishing"
                  text="Carefully finished to bring out the character of every piece."
                />
              </div>

              <Link
                to="/craftsmanship"
                className="group mt-9 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FCFAF6]"
              >
                Explore Our Craftsmanship

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          COLLECTIONS
      ========================================================= */}

      <section className="bg-[#F7F2EA] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                Collections
              </p>

              <h2 className="font-display text-[clamp(2.3rem,4vw,4rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811]">
                Find a style that feels like home.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {collections.map((collection, index) => (
              <Reveal
                key={collection.slug}
                delay={index * 70}
              >
                <Link
                  to="/collection/$slug"
                  params={{
                    slug: collection.slug,
                  }}
                  className="group relative block aspect-[16/10] overflow-hidden"
                >
                  <img
                    src={collection.image}
                    alt={collection.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#241811]/75 via-[#241811]/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <h3 className="font-display text-[29px] font-normal leading-none text-white sm:text-[35px]">
                          {collection.name}
                        </h3>

                        <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                          {collection.description}
                        </p>
                      </div>

                      <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-[#B66A2A] group-hover:bg-[#9A4F20] sm:grid">
                        <ArrowRight
                          className="h-4 w-4"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          BEST SELLERS
      ========================================================= */}

      <section className="bg-[#FCFAF6] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                Customer Favourites
              </p>

              <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.9rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811]">
                Popular with our customers
              </h2>
            </div>

            <LinkButton
              to="/shop"
              variant="ghost"
              withArrow
            >
              Shop Everything
            </LinkButton>
          </div>

          <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product, index) => (
              <Reveal
                key={product.id}
                delay={(index % 4) * 70}
              >
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section className="bg-[#EFE6DC] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                Our Projects
              </p>

              <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.9rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811]">
                Furniture in real homes.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#241811]/60">
                Explore spaces furnished with Yodha Furniture's
                and discover ideas for your own home.
              </p>
            </div>

            <LinkButton
              to="/projects"
              variant="ghost"
              withArrow
            >
              View All Projects
            </LinkButton>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 60}
              >
                <Link
                  to="/project/$slug"
                  params={{
                    slug: project.slug,
                  }}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#DDD1C4]">
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                  </div>

                  <div className="mt-5">
                    <h3 className="font-display text-[22px] font-normal leading-tight text-[#241811]">
                      {project.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#9A4F20]">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}

      <section className="bg-[#FCFAF6] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                Our Customers
              </p>

              <h2 className="font-display text-[clamp(2.3rem,4vw,4rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811]">
                Chosen for their homes.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={index}
                delay={index * 80}
              >
                <article className="h-full border border-[#241811]/10 bg-[#F7F2EA] p-7 sm:p-8">
                  <div className="flex gap-1 text-[#9A4F20]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>

                  <p className="mt-7 font-display text-[21px] font-normal leading-[1.4] text-[#241811]">
                    “{testimonial.quote}”
                  </p>

                  <div className="mt-8 border-t border-[#241811]/10 pt-5">
                    <p className="text-sm font-semibold text-[#241811]">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#9A4F20]">
                      {testimonial.city}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNAL / BUYING GUIDES
      ========================================================= */}

      <section className="bg-[#F7F2EA] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                Inspiration & Advice
              </p>

              <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.9rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811]">
                Ideas for your home.
              </h2>
            </div>

            <LinkButton
              to="/journal"
              variant="ghost"
              withArrow
            >
              View All Articles
            </LinkButton>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article, index) => (
              <Reveal
                key={article.slug}
                delay={index * 70}
              >
                <Link
                  to="/journal/$slug"
                  params={{
                    slug: article.slug,
                  }}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#E4D9CE]">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                  </div>

                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#9A4F20]">
                    {article.category}
                  </p>

                  <h3 className="mt-2 font-display text-[24px] font-normal leading-tight text-[#241811] transition-colors group-hover:text-[#9A4F20]">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#241811]/60">
                    {article.excerpt}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#241811]/70">
                    Read More

                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SHOWROOM CTA
      ========================================================= */}

      <section className="relative isolate overflow-hidden bg-[#241811] py-28 md:py-36">
        <img
          src={images.projectResidence}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-[#241811]/72" />

        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-7 lg:px-10">
          <Reveal>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#D39A68]">
              Visit Yodha Furniture's
            </p>

            <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.5rem,4.8vw,5rem)] font-normal leading-[0.98] tracking-[-0.025em] text-[#FCFAF6]">
              See the furniture.
              <span className="block text-[#D39A68]">
                Feel the difference.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-[15px] leading-7 text-[#F2E8DC]/75">
              Visit our showroom to explore furniture in person,
              compare finishes and speak with our team about your
              space.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <LinkButton
                to="/contact"
                variant="ivory"
                withArrow
              >
                Plan a Showroom Visit
              </LinkButton>

              <LinkButton
                to="/shop"
                variant="outline"
                className="text-[#FCFAF6]"
              >
                Browse Furniture
              </LinkButton>
            </div>

            <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[12px] text-[#F2E8DC]/70">
              <span className="flex items-center gap-2">
                <MapPin
                  className="h-3.5 w-3.5 text-[#C98B58]"
                  strokeWidth={1.5}
                />
                {site.address}
              </span>

              {site.phone && (
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone
                    className="h-3.5 w-3.5 text-[#C98B58]"
                    strokeWidth={1.5}
                  />

                  {site.phone}
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ===============================================================
   SMALL COMPONENTS
=============================================================== */

function TrustPoint({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="flex items-center gap-2 text-[11px] font-medium text-white/75">
      <span className="grid h-4 w-4 place-items-center rounded-full border border-[#C98B58]">
        <Check
          className="h-2.5 w-2.5 text-[#C98B58]"
          strokeWidth={2}
        />
      </span>

      {children}
    </span>
  );
}

function TrustCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 border-r border-[#241811]/10 px-5 py-6 last:border-r-0 sm:px-7 lg:px-8">
      <div className="shrink-0 text-[#9A4F20]">
        {icon}
      </div>

      <div>
        <p className="text-[12px] font-semibold text-[#241811]">
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-4 text-[#241811]/55">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureRow({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-[#241811]/15 px-7 py-7 first:pt-0 last:border-b-0 lg:px-9">
      <div className="flex gap-5">
        <span className="pt-1 text-[10px] font-semibold tracking-[0.15em] text-[#9A4F20]">
          {number}
        </span>

        <div>
          <h3 className="font-display text-[24px] font-normal leading-tight text-[#241811]">
            {title}
          </h3>

          <p className="mt-2 max-w-lg text-sm leading-6 text-[#241811]/60">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CraftPoint({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-white/15 py-5">
      <div className="flex gap-5">
        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B66A2A]" />

        <div>
          <p className="text-sm font-semibold text-[#FCFAF6]">
            {title}
          </p>

          <p className="mt-1 text-sm leading-6 text-[#E8D9C8]/60">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}