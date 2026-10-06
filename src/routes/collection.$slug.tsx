import { createFileRoute, notFound } from "@tanstack/react-router";
import { getCollection, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/Primitives";

export const Route = createFileRoute("/collection/$slug")({
  loader: ({ params }) => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Collection not found — Yodha Furniture's" }, { name: "robots", content: "noindex" }] };
    }
    const { collection } = loaderData;
    const title = `${collection.name} Collection — Yodha Furniture's`;
    return {
      meta: [
        { title },
        { name: "description", content: collection.description },
        { property: "og:title", content: title },
        { property: "og:description", content: collection.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CollectionNotFound,
  component: CollectionPage,
});

function CollectionPage() {
  const { collection } = Route.useLoaderData();
  const items = products.filter((p) => p.collection === collection.slug);

  return (
    <main>
      <PageHero
        eyebrow="Collection"
        title={collection.name}
        intro={collection.description}
        image={collection.image}
      />
      <section className="theme-ivory bg-background py-16 md:py-24">
        <div className="container-y">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CollectionNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="eyebrow mb-5">404</p>
        <h1 className="display-md">This collection doesn&rsquo;t exist</h1>
      </div>
    </main>
  );
}
