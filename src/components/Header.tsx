import { Link, useRouterState } from "@tanstack/react-router";
import {
  ChevronDown,
  Heart,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/data/site";
import { categories, collections } from "@/data/products";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Shop", to: "/shop" },
  { label: "About Us", to: "/about" },
  { label: "Collections", to: "/collections" },
  { label: "Craftsmanship", to: "/craftsmanship" },
  { label: "Our Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const {
    cartCount,
    wishlist,
    setCartOpen,
    setSearchOpen,
  } = useStore();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setShopOpen(false);
  }, [pathname]);

  /*
   * Yodha Furniture uses a light, warm header throughout the site.
   * This works with the dark logo and keeps navigation readable.
   */
  const textColor = "text-[#241811]";
  const mutedTextColor = "text-[#241811]/75";

  return (
    <>
      {/* =========================================================
          DESKTOP / MAIN HEADER
      ========================================================== */}

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "border-b border-[#241811]/10",
          "bg-[#F7F2EA]/95 backdrop-blur-xl",
          "transition-all duration-300",
          scrolled
            ? "shadow-[0_8px_30px_rgba(36,24,17,0.06)]"
            : "shadow-none",
        )}
      >
        {/* -------------------------------------------------------
            TOP TRUST / SHOWROOM STRIP
        -------------------------------------------------------- */}

        {pathname === "/" && !scrolled && (
          <div className="hidden border-b border-[#241811]/10 bg-[#EFE5D9]/60 lg:block">
            <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-6 text-[11px] tracking-[0.08em]">
              <span className={cn(textColor, "opacity-75")}>
                Furniture for Every Home
              </span>

              <div
                className={cn(
                  "flex items-center gap-6",
                  textColor,
                  "opacity-75",
                )}
              >
                <span>Custom Furniture</span>

                <span aria-hidden>•</span>

                <span>Personal Assistance</span>

                {site.phone && (
                  <>
                    <span aria-hidden>•</span>

                    <a
                      href={site.phoneHref}
                      className="transition-colors hover:text-[#9A4F20]"
                    >
                      {site.phone}
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------
            MAIN NAVIGATION BAR
        -------------------------------------------------------- */}

        <div
          className={cn(
            "mx-auto flex max-w-[1400px] items-center",
            "justify-between gap-6 px-5 sm:px-7 lg:px-10",
            scrolled ? "h-[72px]" : "h-[82px]",
          )}
        >
          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className={cn(
              "flex items-center justify-center lg:hidden",
              textColor,
              "transition-colors hover:text-[#9A4F20]",
            )}
          >
            <Menu
              className="h-5 w-5"
              strokeWidth={1.5}
            />
          </button>

          {/* =====================================================
              LOGO
          ====================================================== */}

          <Link
            to="/"
            aria-label="Yodha Furniture's home"
            className="group flex shrink-0 items-center"
          >
            <img
              src="/yodha-logo.png"
              alt="Yodha Furniture's"
              className={cn(
                "w-auto object-contain",
                "transition-all duration-300",
                scrolled
                  ? "h-[44px] sm:h-[48px]"
                  : "h-[48px] sm:h-[54px]",
              )}
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}

          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-7 xl:gap-9">
              {/* -------------------------------------------------
                  SHOP WITH DROPDOWN
              -------------------------------------------------- */}

              <div
                className="relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <Link
                  to="/shop"
                  className={cn(
                    "group flex items-center gap-1.5",
                    "py-2",
                    "text-[13px] font-medium",
                    "transition-colors duration-200",
                    mutedTextColor,
                    "hover:text-[#9A4F20]",
                  )}
                >
                  Shop

                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5",
                      "transition-transform duration-200",
                      shopOpen && "rotate-180",
                    )}
                    strokeWidth={1.5}
                  />
                </Link>

                {/* -------------------------------------------------
                    SHOP MEGA MENU
                -------------------------------------------------- */}

                <div
                  className={cn(
                    "absolute left-1/2 top-full w-[560px]",
                    "-translate-x-1/2 pt-5",
                    "transition-all duration-200",
                    shopOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0",
                  )}
                >
                  <div
                    className={cn(
                      "border border-[#241811]/10",
                      "bg-[#F7F2EA]",
                      "p-7",
                      "shadow-[0_20px_60px_rgba(36,24,17,0.12)]",
                    )}
                  >
                    <div className="grid grid-cols-2 gap-8">
                      {/* Categories */}

                      <div>
                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                          Shop by Category
                        </p>

                        <div className="space-y-2.5">
                          {categories.slice(0, 8).map((category) => (
                            <Link
                              key={category.slug}
                              to="/category/$slug"
                              params={{
                                slug: category.slug,
                              }}
                              className="block text-[14px] text-[#241811]/75 transition-colors hover:text-[#9A4F20]"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Collections */}

                      <div>
                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                          Collections
                        </p>

                        <div className="space-y-2.5">
                          {collections.map((collection) => (
                            <Link
                              key={collection.slug}
                              to="/collection/$slug"
                              params={{
                                slug: collection.slug,
                              }}
                              className="block text-[14px] text-[#241811]/75 transition-colors hover:text-[#9A4F20]"
                            >
                              {collection.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 border-t border-[#241811]/10 pt-5">
                      <Link
                        to="/shop"
                        className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#9A4F20] transition-colors hover:text-[#241811]"
                      >
                        View All Furniture →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------------
                  OTHER NAV ITEMS
              -------------------------------------------------- */}

              {nav
                .filter((item) => item.label !== "Shop")
                .map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "relative py-2",
                      "text-[13px] font-medium",
                      "transition-colors duration-200",
                      mutedTextColor,
                      "hover:text-[#9A4F20]",

                      /*
                       * Restrained underline animation.
                       * Keeps the navigation refined rather than flashy.
                       */
                      "after:absolute after:bottom-0 after:left-0",
                      "after:h-px after:w-0",
                      "after:bg-[#9A4F20]",
                      "after:transition-all after:duration-300",
                      "hover:after:w-full",
                    )}
                    activeProps={{
                      className: cn(
                        "text-[#9A4F20]",
                        "after:w-full",
                      ),
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </nav>

          {/* =====================================================
              RIGHT SIDE ACTIONS
          ====================================================== */}

          <div
            className={cn(
              "flex items-center gap-4 sm:gap-5",
              textColor,
            )}
          >
            {/* Search */}

            <button
              type="button"
              aria-label="Search furniture"
              onClick={() => setSearchOpen(true)}
              className="transition-colors hover:text-[#9A4F20]"
            >
              <Search
                className="h-[19px] w-[19px]"
                strokeWidth={1.5}
              />
            </button>

            {/* Wishlist */}

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative hidden transition-colors hover:text-[#9A4F20] sm:block"
            >
              <Heart
                className="h-[19px] w-[19px]"
                strokeWidth={1.5}
              />

              {wishlist.length > 0 && (
                <Dot n={wishlist.length} />
              )}
            </Link>

            {/* Cart */}

            <button
              type="button"
              aria-label="Shopping bag"
              onClick={() => setCartOpen(true)}
              className="relative transition-colors hover:text-[#9A4F20]"
            >
              <ShoppingBag
                className="h-[19px] w-[19px]"
                strokeWidth={1.5}
              />

              {cartCount > 0 && (
                <Dot n={cartCount} />
              )}
            </button>

            {/* Desktop CTA */}

            <Link
              to="/contact"
              className={cn(
                "hidden lg:flex items-center justify-center",
                "h-10 px-5",
                "text-[11px] font-semibold uppercase tracking-[0.12em]",
                "border border-[#241811]/25 text-[#241811]",
                "transition-all duration-200",
                "hover:border-[#9A4F20]",
                "hover:bg-[#9A4F20]",
                "hover:text-white",
              )}
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================================
          HEADER SPACE
          9px top strip + 82px navigation ≈ 91px.
          124px gives comfortable separation from the fixed header.
      ========================================================== */}

      <div
        className={cn(
          pathname === "/"
            ? "h-[118px] lg:h-[118px]"
            : "h-[82px] lg:h-[82px]",
        )}
        aria-hidden="true"
      />

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}

      <div
        className={cn(
          "fixed inset-0 z-[100] lg:hidden",
          "bg-[#F7F2EA]",
          "transition-opacity duration-300",
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* -----------------------------------------------------
              MOBILE TOP BAR
          ------------------------------------------------------ */}

          <div className="flex h-[82px] items-center justify-between border-b border-[#241811]/10 px-5">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              aria-label="Yodha Furniture's home"
            >
              <img
                src="/yodha-logo.png"
                alt="Yodha Furniture's"
                className="h-[50px] w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="text-[#241811] transition-colors hover:text-[#9A4F20]"
            >
              <X
                className="h-6 w-6"
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* -----------------------------------------------------
              MOBILE NAVIGATION
          ------------------------------------------------------ */}

          <div className="px-6 py-8">
            <nav className="flex flex-col">
              {nav.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-[#241811]/10",
                    "py-4",
                    "text-[20px] font-medium",
                    "text-[#241811]",
                    "transition-colors hover:text-[#9A4F20]",
                  )}
                >
                  <span className="mr-3 text-[10px] text-[#9A4F20]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item.label}
                </Link>
              ))}
            </nav>

            {/* ---------------------------------------------------
                MOBILE FURNITURE CATEGORIES
            ---------------------------------------------------- */}

            <div className="mt-9">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                Furniture
              </p>

              <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                {categories.slice(0, 8).map((category) => (
                  <Link
                    key={category.slug}
                    to="/category/$slug"
                    params={{
                      slug: category.slug,
                    }}
                    onClick={() => setOpen(false)}
                    className="text-[14px] text-[#241811]/70 transition-colors hover:text-[#9A4F20]"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* ---------------------------------------------------
                MOBILE SHOWROOM / CONTACT
            ---------------------------------------------------- */}

            <div className="mt-10 border-t border-[#241811]/10 pt-7">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A4F20]">
                Speak With Us
              </p>

              <div className="space-y-4">
                {site.phoneHref && site.phone && (
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 text-[15px] text-[#241811] transition-colors hover:text-[#9A4F20]"
                  >
                    <Phone
                      className="h-4 w-4 text-[#9A4F20]"
                      strokeWidth={1.5}
                    />

                    {site.phone}
                  </a>
                )}

                <a
                  href="#"
                  className="flex items-center gap-3 text-[15px] text-[#241811] transition-colors hover:text-[#9A4F20]"
                >
                  <MessageCircle
                    className="h-4 w-4 text-[#9A4F20]"
                    strokeWidth={1.5}
                  />

                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* ---------------------------------------------------
                MOBILE CTA
            ---------------------------------------------------- */}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-8 flex h-12 items-center justify-center bg-[#241811] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F7F2EA] transition-colors hover:bg-[#9A4F20]"
            >
              Enquire About Furniture
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===============================================================
   CART / WISHLIST COUNT
================================================================ */

function Dot({ n }: { n: number }) {
  return (
    <span className="absolute -right-2.5 -top-2.5 grid h-[16px] min-w-[16px] place-items-center rounded-full bg-[#9A4F20] px-1 text-[9px] font-medium text-white">
      {n}
    </span>
  );
}