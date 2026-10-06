import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getCategory, getProduct, products } from "@/data/products";
import { formatINR, site, whatsappLink } from "@/data/site";
import { ActionButton } from "@/components/Primitives";
import { ProductCard } from "@/components/ProductCard";
import { useStore } from "@/lib/store";
import { Heart, Minus, Plus } from "lucide-react";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Piece not found — Yodha Furniture's" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — Yodha Furniture's`;
    return {
      meta: [
        { title },
        { name: "description", content: product.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: product.shortDescription },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addToCart, setCartOpen, openEnquiry, toggleWishlist, isWished, markViewed } = useStore();
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const category = getCategory(product.category);

  useEffect(() => {
    setActive(0);
    setQty(1);
    markViewed(product.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id]);

  const related = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection))
    .slice(0, 3);

  return (
    <main className="theme-ivory bg-background pt-28 md:pt-36">
      <div className="container-y">
        <nav aria-label="Breadcrumb" className="mb-10 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-copper">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/shop" className="hover:text-copper">Shop</Link>
            </li>
            {category && (
              <>
                <li aria-hidden>/</li>
                <li>
                  <Link to="/category/$slug" params={{ slug: category.slug }} className="hover:text-copper">
                    {category.name}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="overflow-hidden bg-muted">
              <img
                src={product.images[active]}
                alt={`${product.name} — ${product.shortDescription}`}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-4">
                {product.images.map((img, i) => (
                  <button
                    key={img + i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-24 w-20 overflow-hidden border transition-colors ${
                      i === active ? "border-copper" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:pt-6">
            <p className="eyebrow mb-5">{product.style}</p>
            <h1 className="display-md">{product.name}</h1>
            <p className="mt-5 max-w-lg text-muted-foreground">{product.description}</p>

            <div className="mt-8 flex items-baseline gap-4">
              {product.price ? (
                <>
                  <span className="font-display text-3xl">{formatINR(product.price)}</span>
                  {product.comparePrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatINR(product.comparePrice)}
                    </span>
                  )}
                </>
              ) : (
                <span className="font-display text-2xl">Price on enquiry</span>
              )}
            </div>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">
              {product.availability === "in-stock" ? "In stock" : "Made to order"}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              {!product.enquiryOnly && product.price && (
                <div className="flex items-center border border-foreground/20">
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3">
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm">{qty}</span>
                  <button type="button" aria-label="Increase quantity" onClick={() => setQty(qty + 1)} className="px-4 py-3">
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
              {!product.enquiryOnly && product.price ? (
                <ActionButton
                  withArrow
                  onClick={() => {
                    addToCart(product.id, qty);
                    setCartOpen(true);
                  }}
                >
                  Add to cart
                </ActionButton>
              ) : null}
              <ActionButton variant="outline" onClick={() => openEnquiry(product)}>
                Enquire
              </ActionButton>
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                aria-label={isWished(product.id) ? "Remove from wishlist" : "Save to wishlist"}
                className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground hover:text-copper"
              >
                <Heart className={`h-4 w-4 ${isWished(product.id) ? "fill-copper text-copper" : ""}`} />
                {isWished(product.id) ? "Saved" : "Save"}
              </button>
            </div>

            <a
              href={whatsappLink(`Hello, I'd like to know more about the ${product.name} (${product.sku}).`)}
              target="_blank"
              rel="noreferrer"
              className="link-line mt-6 inline-block text-[0.68rem] uppercase tracking-[0.24em] text-copper"
            >
              Ask on WhatsApp
            </a>

            <dl className="mt-12 grid gap-x-8 gap-y-5 border-t border-foreground/10 pt-8 sm:grid-cols-2">
              <Spec label="SKU" value={product.sku} />
              <Spec label="Materials" value={product.materials.join(", ")} />
              <Spec label="Finish" value={product.finish} />
              <Spec label="Colours" value={product.colors.join(", ")} />
              <Spec label="Dimensions" value={product.dimensions} />
              <Spec label="Customisable" value={product.customizable ? "Yes, to your specification" : "Standard specification"} />
              <Spec label="Warranty" value={product.warranty} />
              <Spec label="Delivery" value={product.deliveryInfo} />
              <Spec label="Care" value={product.careInstructions} />
            </dl>

            <p className="mt-8 text-xs text-muted-foreground">
              Questions about specification or lead time? Call {site.phone}.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24 border-t border-foreground/10 pt-16 md:mt-32">
            <p className="eyebrow mb-8">You may also like</p>
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
      <div className="h-24" />
    </main>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm">{value}</dd>
    </div>
  );
}

function ProductNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="eyebrow mb-5">404</p>
        <h1 className="display-md">This piece doesn&rsquo;t exist</h1>
        <Link to="/shop" className="link-line mt-6 inline-block text-[0.7rem] uppercase tracking-[0.24em] text-copper">
          Back to shop
        </Link>
      </div>
    </main>
  );
}
