import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  categories,
  collections,
  colorOptions,
  images,
  materials,
  products,
  styles,
} from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/Primitives";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Handcrafted Furniture — Yodha Furniture's" },
      {
        name: "description",
        content:
          "Browse beds, sofas, dining, seating, storage and wardrobes by Yodha Furniture's. Filter by category, collection, material, colour and style.",
      },
      { property: "og:title", content: "Shop Handcrafted Furniture — Yodha Furniture's" },
      {
        property: "og:description",
        content: "Beds, sofas, dining, seating and storage — made to order in solid timber.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

type Sort = "featured" | "price-asc" | "price-desc" | "new";

function Toggle({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-3.5 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
        active
          ? "border-copper bg-copper/10 text-copper"
          : "border-foreground/15 text-muted-foreground hover:border-foreground/40"
      }`}
    >
      {label}
    </button>
  );
}

function ShopPage() {
  const [cat, setCat] = useState<string[]>([]);
  const [col, setCol] = useState<string[]>([]);
  const [mat, setMat] = useState<string[]>([]);
  const [colour, setColour] = useState<string[]>([]);
  const [style, setStyle] = useState<string[]>([]);
  const [sort, setSort] = useState<Sort>("featured");

  const toggle = (list: string[], set: (v: string[]) => void, v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const results = useMemo(() => {
    let out = products.filter(
      (p) =>
        (!cat.length || cat.includes(p.category)) &&
        (!col.length || col.includes(p.collection)) &&
        (!mat.length || p.materials.some((m) => mat.includes(m))) &&
        (!colour.length || p.colors.some((c) => colour.includes(c))) &&
        (!style.length || style.includes(p.style)),
    );
    out = [...out].sort((a, b) => {
      if (sort === "price-asc") return (a.price ?? Infinity) - (b.price ?? Infinity);
      if (sort === "price-desc") return (b.price ?? 0) - (a.price ?? 0);
      if (sort === "new") return Number(!!b.newArrival) - Number(!!a.newArrival);
      return Number(!!b.featured) - Number(!!a.featured);
    });
    return out;
  }, [cat, col, mat, colour, style, sort]);

  const clearAll = () => {
    setCat([]);
    setCol([]);
    setMat([]);
    setColour([]);
    setStyle([]);
  };

  return (
    <main>
      <PageHero
        eyebrow="Catalogue"
        title="Every piece, made to order"
        intro="Filter by room, collection, material or finish. Pricing is shown where it is fixed; larger commissions are quoted on enquiry."
        image={images.showroom}
      />

      <section className="theme-ivory bg-background py-16 md:py-24">
        <div className="container-y grid gap-12 lg:grid-cols-[16rem_1fr]">
          <aside className="space-y-8">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Filters</p>
              <button
                type="button"
                onClick={clearAll}
                className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-copper"
              >
                Clear
              </button>
            </div>

            <FilterGroup title="Category">
              {categories.map((c) => (
                <Toggle
                  key={c.slug}
                  label={c.name}
                  active={cat.includes(c.slug)}
                  onClick={() => toggle(cat, setCat, c.slug)}
                />
              ))}
            </FilterGroup>

            <FilterGroup title="Collection">
              {collections.map((c) => (
                <Toggle
                  key={c.slug}
                  label={c.name}
                  active={col.includes(c.slug)}
                  onClick={() => toggle(col, setCol, c.slug)}
                />
              ))}
            </FilterGroup>

            <FilterGroup title="Material">
              {materials.map((m) => (
                <Toggle key={m} label={m} active={mat.includes(m)} onClick={() => toggle(mat, setMat, m)} />
              ))}
            </FilterGroup>

            <FilterGroup title="Colour">
              {colorOptions.map((c) => (
                <Toggle
                  key={c}
                  label={c}
                  active={colour.includes(c)}
                  onClick={() => toggle(colour, setColour, c)}
                />
              ))}
            </FilterGroup>

            <FilterGroup title="Style">
              {styles.map((s) => (
                <Toggle key={s} label={s} active={style.includes(s)} onClick={() => toggle(style, setStyle, s)} />
              ))}
            </FilterGroup>
          </aside>

          <div>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-foreground/10 pb-5">
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                {results.length} {results.length === 1 ? "piece" : "pieces"}
              </p>
              <label className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
                Sort
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                  className="border border-foreground/15 bg-transparent px-3 py-2 text-foreground"
                >
                  <option value="featured">Featured</option>
                  <option value="new">New arrivals</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                </select>
              </label>
            </div>

            {results.length === 0 ? (
              <div className="py-24 text-center">
                <p className="display-md">Nothing matches those filters</p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-6 text-[0.7rem] uppercase tracking-[0.24em] text-copper"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}

            <div className="mt-20 border-t border-foreground/10 pt-8">
              <p className="eyebrow mb-4">Shop by room</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    to="/category/$slug"
                    params={{ slug: c.slug }}
                    className="link-line text-sm text-muted-foreground hover:text-copper"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-[0.7rem] uppercase tracking-[0.24em] text-foreground">{title}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
