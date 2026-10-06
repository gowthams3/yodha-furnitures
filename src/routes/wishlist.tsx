import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/products";
import { PageHero, LinkButton } from "@/components/Primitives";
import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — Yodha Furniture's" },
      { name: "description", content: "Pieces you have saved at Yodha Furniture's." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlistProducts } = useStore();

  return (
    <main>
      <PageHero
        eyebrow="Saved pieces"
        title="Your wishlist"
        intro="Saved on this device. Enquire about any piece and mention it by name."
        image={images.armchair}
      />
      <section className="theme-ivory bg-background py-16 md:py-24">
        <div className="container-y">
          {wishlistProducts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="display-md">Nothing saved yet</p>
              <p className="mt-4 text-muted-foreground">Tap the heart on any piece to keep it here.</p>
              <LinkButton to="/shop" withArrow className="mt-8">
                Browse the catalogue
              </LinkButton>
            </div>
          ) : (
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
              {wishlistProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
