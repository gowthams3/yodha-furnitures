import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/products";
import { formatINR, whatsappLink } from "@/data/site";
import { ActionButton, LinkButton, PageHero } from "@/components/Primitives";
import { useStore } from "@/lib/store";
import { Minus, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart — Yodha Furniture's" },
      { name: "description", content: "Your cart at Yodha Furniture's." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { cartProducts, cartTotal, setQty, removeFromCart } = useStore();

  const orderSummary = cartProducts.map((l) => `${l.qty} x ${l.product.name}`).join(", ");

  return (
    <main>
      <PageHero eyebrow="Cart" title="Your cart" image={images.coffeeTable} />
      <section className="theme-ivory bg-background py-16 md:py-24">
        <div className="container-y">
          {cartProducts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="display-md">Your cart is empty</p>
              <p className="mt-4 text-muted-foreground">Priced pieces can be added directly; larger commissions are enquiry only.</p>
              <LinkButton to="/shop" withArrow className="mt-8">
                Browse the catalogue
              </LinkButton>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
              <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
                {cartProducts.map(({ product, qty }) => (
                  <li key={product.id} className="flex gap-6 py-7">
                    <Link to="/product/$slug" params={{ slug: product.slug }} className="shrink-0">
                      <img src={product.thumbnail} alt={product.name} className="h-28 w-24 object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Link to="/product/$slug" params={{ slug: product.slug }} className="font-display text-xl hover:text-copper">
                            {product.name}
                          </Link>
                          <p className="mt-1 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">{product.sku}</p>
                        </div>
                        <p className="text-sm">{formatINR((product.price ?? 0) * qty)}</p>
                      </div>
                      <div className="mt-4 flex items-center gap-5">
                        <div className="flex items-center border border-foreground/20">
                          <button type="button" aria-label="Decrease quantity" onClick={() => setQty(product.id, qty - 1)} className="px-3 py-2">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{qty}</span>
                          <button type="button" aria-label="Increase quantity" onClick={() => setQty(product.id, qty + 1)} className="px-3 py-2">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                          aria-label={`Remove ${product.name}`}
                          className="text-muted-foreground hover:text-copper"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="h-fit border border-foreground/15 p-7">
                <p className="eyebrow mb-6">Order summary</p>
                <div className="flex justify-between border-b border-foreground/10 pb-4 text-sm">
                  <span>Subtotal</span>
                  <span>{formatINR(cartTotal)}</span>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Delivery and final confirmation are arranged with the studio after you place the order request.
                </p>
                <a
                  href={whatsappLink(`Hello, I'd like to place an order: ${orderSummary}. Total ${formatINR(cartTotal)}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 block"
                >
                  <ActionButton withArrow className="w-full">
                    Place order via WhatsApp
                  </ActionButton>
                </a>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  No payment is taken online — we confirm everything with you first.
                </p>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
