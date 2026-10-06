import { Link } from "@tanstack/react-router";
import { Minus, Plus, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { searchProducts } from "@/data/products";
import { formatINR, site, whatsappLink } from "@/data/site";
import { useStore } from "@/lib/store";
import { ActionButton, LinkButton } from "@/components/Primitives";
import { cn } from "@/lib/utils";

function Shell({
  open,
  onClose,
  children,
  side = "right",
  label,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "right" | "center";
  label: string;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className={cn("fixed inset-0 z-[70]", !open && "pointer-events-none")}
    >
      <div
        onClick={onClose}
        className={cn("absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-500", open ? "opacity-100" : "opacity-0")}
      />
      <div
        className={cn(
          "absolute bg-card text-card-foreground transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          side === "right"
            ? cn("inset-y-0 right-0 flex w-full max-w-md flex-col", open ? "translate-x-0" : "translate-x-full")
            : cn("inset-x-0 top-0 max-h-full overflow-y-auto", open ? "translate-y-0" : "-translate-y-full"),
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function CartDrawer() {
  const { cartOpen, setCartOpen, cartProducts, cartTotal, setQty, removeFromCart } = useStore();
  return (
    <Shell open={cartOpen} onClose={() => setCartOpen(false)} label="Shopping bag">
      <div className="flex items-center justify-between px-7 py-6">
        <p className="eyebrow">Your bag</p>
        <button type="button" onClick={() => setCartOpen(false)} aria-label="Close bag">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-7">
        {cartProducts.length === 0 ? (
          <p className="py-16 text-sm text-muted-foreground">Your bag is empty.</p>
        ) : (
          <ul className="flex flex-col gap-7 pb-6">
            {cartProducts.map(({ product, qty }) => (
              <li key={product.id} className="flex gap-4">
                <img src={product.thumbnail} alt="" className="h-28 w-24 shrink-0 object-cover" />
                <div className="flex-1">
                  <Link
                    to="/product/$slug"
                    params={{ slug: product.slug }}
                    onClick={() => setCartOpen(false)}
                    className="font-display text-lg leading-tight"
                  >
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {product.price ? formatINR(product.price) : "Price on enquiry"}
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="flex items-center border border-border">
                      <button type="button" aria-label="Decrease quantity" onClick={() => setQty(product.id, qty - 1)} className="px-2.5 py-1.5">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-6 text-center text-sm">{qty}</span>
                      <button type="button" aria-label="Increase quantity" onClick={() => setQty(product.id, qty + 1)} className="px-2.5 py-1.5">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-copper"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="hairline px-7 py-6">
        <div className="flex items-center justify-between text-sm">
          <span className="eyebrow">Subtotal</span>
          <span>{formatINR(cartTotal)}</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Delivery and taxes are confirmed with you before the order is finalised.
        </p>
        <LinkButton
          to="/cart"
          onClick={() => setCartOpen(false)}
          variant="solid"
          withArrow
          className="mt-5 w-full"
        >
          View bag
        </LinkButton>
      </div>
    </Shell>
  );
}

export function SearchDialog() {
  const { searchOpen, setSearchOpen } = useStore();
  const [q, setQ] = useState("");
  const results = useMemo(() => searchProducts(q).slice(0, 6), [q]);

  return (
    <Shell open={searchOpen} onClose={() => setSearchOpen(false)} side="center" label="Search">
      <div className="container-y py-10">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            autoFocus={searchOpen}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search beds, sofas, dining, timber…"
            aria-label="Search products"
            className="w-full bg-transparent font-display text-2xl outline-none placeholder:text-muted-foreground md:text-3xl"
          />
          <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <Link
              key={p.id}
              to="/product/$slug"
              params={{ slug: p.slug }}
              onClick={() => setSearchOpen(false)}
              className="group flex gap-4"
            >
              <img src={p.thumbnail} alt="" className="h-20 w-16 object-cover" />
              <div>
                <p className="font-display text-lg leading-tight group-hover:text-copper">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.shortDescription}</p>
              </div>
            </Link>
          ))}
          {q && results.length === 0 && (
            <p className="text-sm text-muted-foreground">No pieces match “{q}”.</p>
          )}
        </div>
      </div>
    </Shell>
  );
}

export function EnquiryDialog() {
  const { enquiryFor, closeEnquiry } = useStore();
  const [sent, setSent] = useState(false);
  const product = enquiryFor && enquiryFor !== "general" ? enquiryFor : null;

  useEffect(() => {
    if (enquiryFor) setSent(false);
  }, [enquiryFor]);

  return (
    <Shell open={!!enquiryFor} onClose={closeEnquiry} label="Enquiry">
      <div className="flex items-center justify-between px-7 py-6">
        <p className="eyebrow">{product ? "Enquire about this piece" : "General enquiry"}</p>
        <button type="button" onClick={closeEnquiry} aria-label="Close enquiry">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-7 pb-8">
        {product && (
          <div className="mb-7 flex gap-4">
            <img src={product.thumbnail} alt="" className="h-24 w-20 object-cover" />
            <div>
              <p className="font-display text-lg leading-tight">{product.name}</p>
              <p className="text-sm text-muted-foreground">{product.sku}</p>
            </div>
          </div>
        )}
        {sent ? (
          <div className="py-10">
            <p className="font-display text-2xl">Thank you.</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Your enquiry has been noted. For an immediate reply, message us on WhatsApp or call the showroom.
            </p>
            <a
              href={whatsappLink(product ? `Hello, I'd like to enquire about ${product.name}.` : "Hello, I'd like to make an enquiry.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-[0.68rem] uppercase tracking-[0.24em] text-copper link-line"
            >
              Continue on WhatsApp
            </a>
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" />
            <Field label="City" name="city" />
            <label className="flex flex-col gap-2">
              <span className="eyebrow">Message</span>
              <textarea
                name="message"
                rows={4}
                defaultValue={product ? `I'm interested in the ${product.name}.` : ""}
                className="border border-input bg-transparent px-4 py-3 text-sm outline-none focus:border-copper"
              />
            </label>
            <ActionButton type="submit" withArrow className="mt-2 w-full">
              Send enquiry
            </ActionButton>
            <p className="text-xs text-muted-foreground">
              Prefer to talk? Call {site.phone}.
            </p>
          </form>
        )}
      </div>
    </Shell>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow">
        {label}
        {required && " *"}
      </span>

      <input
        name={name}
        type={type}
        required={required}
        className="
          w-full
          border border-[#D8CEC2]
          bg-[#FCFAF6]
          px-4 py-3.5
          text-sm text-[#241811]
          outline-none
          transition-all duration-300
          placeholder:text-[#9A8F84]
          focus:border-[#9A4F20]
          focus:bg-white
          focus:ring-1 focus:ring-[#9A4F20]/10
        "
      />
    </label>
  );
}
