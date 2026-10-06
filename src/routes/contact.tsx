import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { site, whatsappLink } from "@/data/site";
import { images } from "@/data/products";
import {
  ActionButton,
  LinkButton,
  PageHero,
} from "@/components/Primitives";
import { Field } from "@/components/Overlays";
import { Reveal } from "@/components/Reveal";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Contact Yodha Furniture's | Showroom & Furniture Enquiries",
      },
      {
        name: "description",
        content:
          "Contact Yodha Furniture's for furniture enquiries, custom furniture, showroom visits and product assistance. Find our address, opening hours, phone, email and WhatsApp details.",
      },
      {
        property: "og:title",
        content:
          "Contact Yodha Furniture's | Showroom & Furniture Enquiries",
      },
      {
        property: "og:description",
        content:
          "Visit the Yodha Furniture's showroom or get in touch with our team for furniture enquiries and custom requirements.",
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
        href: "/contact",
      },
    ],
  }),

  component: ContactPage,
});

function ContactPage() {
  const { openEnquiry } = useStore();
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-[#FCFAF6]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <PageHero
        eyebrow="Contact Yodha Furniture's"
        title="Let's create a home you love coming back to."
        intro="Visit our showroom, speak with our team or send us your furniture requirements. We're here to help you choose pieces that work beautifully in your space."
        image={images.showroom}
      />

      {/* =========================================================
          CONTACT INTRO
      ========================================================= */}

      <section className="bg-[#F7F2EA] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                Visit • Call • Connect
              </p>

              <h2 className="font-display text-[clamp(2.3rem,4vw,4rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811] text-balance">
                Good furniture starts with
                <span className="text-[#9A4F20]">
                  {" "}
                  the right conversation.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#241811]/65">
                Whether you're furnishing a new home, refreshing a
                room or looking for something made to suit a specific
                space, our team can help you explore the right
                furniture, materials and options.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CONTACT DETAILS + FORM
      ========================================================= */}

      <section className="bg-[#FCFAF6] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">

          {/* LEFT */}
          <Reveal>
            <div className="space-y-10">

              {/* Showroom */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EFE2D5] text-[#9A4F20]">
                    <MapPin
                      className="h-4 w-4"
                      strokeWidth={1.5}
                    />
                  </span>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                    Showroom
                  </p>
                </div>

                <p className="max-w-md text-[16px] leading-7 text-[#241811]">
                  {site.address}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#241811]/55">
                  Visit us to explore furniture in person, compare
                  finishes and discuss your requirements with our team.
                </p>
              </div>

              {/* Hours */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EFE2D5] text-[#9A4F20]">
                    <Clock3
                      className="h-4 w-4"
                      strokeWidth={1.5}
                    />
                  </span>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                    Opening Hours
                  </p>
                </div>

                <div className="max-w-md">
                  {site.hours.map((hour) => (
                    <div
                      key={hour.day}
                      className="flex justify-between gap-6 border-b border-[#241811]/10 py-3 text-sm first:pt-0"
                    >
                      <span className="text-[#241811]">
                        {hour.day}
                      </span>

                      <span className="text-right text-[#241811]/55">
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EFE2D5] text-[#9A4F20]">
                    <Phone
                      className="h-4 w-4"
                      strokeWidth={1.5}
                    />
                  </span>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                    Get in Touch
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <a
                    href={site.phoneHref}
                    className="group flex items-center gap-3 text-[#241811] transition-colors hover:text-[#9A4F20]"
                  >
                    <Phone
                      className="h-4 w-4 text-[#9A4F20]"
                      strokeWidth={1.5}
                    />

                    <span>{site.phone}</span>
                  </a>

                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-center gap-3 text-[#241811] transition-colors hover:text-[#9A4F20]"
                  >
                    <Mail
                      className="h-4 w-4 text-[#9A4F20]"
                      strokeWidth={1.5}
                    />

                    <span>{site.email}</span>
                  </a>

                  <a
                    href={whatsappLink(
                      "Hello, I'd like to know more about Yodha Furniture's."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 text-[#9A4F20] transition-colors hover:text-[#241811]"
                  >
                    <MessageCircle
                      className="h-4 w-4"
                      strokeWidth={1.5}
                    />

                    <span>Message us on WhatsApp</span>

                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </a>
                </div>
              </div>

              {/* Appointment */}
              <div className="border border-[#241811]/12 bg-[#F7F2EA] p-6 md:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                  Showroom Appointment
                </p>

                <h3 className="mt-3 font-display text-[25px] leading-tight text-[#241811]">
                  Planning a furniture project?
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#241811]/60">
                  Share your preferred day and time with us and our
                  team will help arrange your showroom visit.
                </p>

                <ActionButton
                  variant="solid"
                  className="mt-6"
                  withArrow
                  onClick={() => openEnquiry("general")}
                >
                  Request an Appointment
                </ActionButton>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — FORM */}
          <Reveal delay={120}>
            <div className="border border-[#241811]/12 bg-[#F7F2EA] p-7 sm:p-9 md:p-11">

              <div className="mb-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                  Send an Enquiry
                </p>

                <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3.3rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#241811]">
                  Tell us what you're looking for.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-6 text-[#241811]/60">
                  Share a few details about your requirement and
                  we'll get back to you.
                </p>
              </div>

              {sent ? (
                <div className="border border-[#9A4F20]/20 bg-[#EFE2D5] p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#9A4F20] text-white">
                    <span className="text-sm">✓</span>
                  </div>

                  <h3 className="mt-6 font-display text-3xl text-[#241811]">
                    Thank you.
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-[#241811]/65">
                    Your enquiry has been received. For an immediate
                    response, you can also call or message us on
                    WhatsApp.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={site.phoneHref}
                      className="inline-flex items-center gap-2 border border-[#241811]/20 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#241811] transition-colors hover:border-[#9A4F20]"
                    >
                      <Phone
                        className="h-3.5 w-3.5"
                        strokeWidth={1.5}
                      />
                      Call Us
                    </a>

                    <a
                      href={whatsappLink(
                        "Hello, I'd like to follow up on my furniture enquiry."
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#9A4F20] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#7F3F1B]"
                    >
                      <MessageCircle
                        className="h-3.5 w-3.5"
                        strokeWidth={1.5}
                      />
                      WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-5"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSent(true);
                  }}
                >
                  <Field
                    label="Name"
                    name="name"
                    required
                  />

                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                  />

                  <label className="flex flex-col gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                      Message
                    </span>

                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about the furniture or space you have in mind..."
                      className="resize-y border border-[#241811]/15 bg-[#FCFAF6] px-4 py-3.5 text-sm text-[#241811] outline-none transition-colors placeholder:text-[#241811]/35 focus:border-[#9A4F20]"
                    />
                  </label>

                  <ActionButton
                    type="submit"
                    withArrow
                    className="mt-1 w-full sm:w-auto"
                  >
                    Send Enquiry
                  </ActionButton>

                  <p className="text-[11px] leading-5 text-[#241811]/45">
                    By submitting this form, you agree that our team
                    may contact you regarding your enquiry.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SHOWROOM CTA
      ========================================================= */}

      <section className="relative isolate overflow-hidden bg-[#241811] py-24 md:py-32">
        <img
          src={images.projectResidence}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-[#241811]/75" />

        <div className="mx-auto max-w-[900px] px-5 text-center sm:px-7">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D39A68]">
              Visit the Showroom
            </p>

            <h2 className="mt-5 font-display text-[clamp(2.5rem,4.8vw,5rem)] font-normal leading-[0.98] tracking-[-0.025em] text-[#FCFAF6]">
              See the furniture.
              <span className="block text-[#D39A68]">
                Experience it in person.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-[#F2E8DC]/75">
              Explore our furniture, compare finishes and talk
              through your requirements with our team.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionButton
                variant="ivory"
                withArrow
                onClick={() => openEnquiry("general")}
              >
                Plan a Visit
              </ActionButton>

              <a
                href={whatsappLink(
                  "Hello, I'd like to visit the Yodha Furniture's showroom."
                )}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 border border-white/35 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                WhatsApp Us

                <MessageCircle
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}