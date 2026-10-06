import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories, getCategory, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/Primitives";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Category not found — Yodha Furniture's" }, { name: "robots", content: "noindex" }] };
    }
    const { category } = loaderData;
    const title = `${category.name} Furniture — Yodha Furniture's`;
    return {
      meta: [
        { title },
        { name: "description", content: category.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: category.intro },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CategoryNotFound,
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = products.filter((p) => p.category === category.slug);

  return (
    <main>
      <PageHero eyebrow="Category" title={category.name} intro={category.intro} image={category.image} />

      <section className="theme-ivory bg-background py-16 md:py-24">
        <div className="container-y">
          {items.length ? (
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              Pieces in this category are made to order. Tell us what you need and we&rsquo;ll develop it with you.
            </p>
          )}

          <div className="mt-20 border-t border-foreground/10 pt-8">
            <p className="eyebrow mb-4">Other categories</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {categories
                .filter((c) => c.slug !== category.slug)
                .map((c) => (
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
      </section>
    </main>
  );
}

function CategoryNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="eyebrow mb-5">404</p>
        <h1 className="display-md">This category doesn&rsquo;t exist</h1>
      </div>
    </main>
  );
}
