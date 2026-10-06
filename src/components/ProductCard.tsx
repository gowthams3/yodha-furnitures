import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { formatINR } from "@/data/site";
import type { Product } from "@/data/products";
import { categories } from "@/data/products";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { isWished, toggleWishlist, openEnquiry } = useStore();
  const category = categories.find((c) => c.slug === product.category);
  const wished = isWished(product.id);
  const secondary = product.images[1] ?? product.images[0];

  return (
    <article className="group relative" style={{ transitionDelay: `${index * 60}ms` }}>
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden bg-muted"
        aria-label={product.name}
      >
        <div className="relative aspect-4/5 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          <img
            src={secondary}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
          {product.newArrival && (
            <span className="absolute left-4 top-4 bg-ink/70 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.24em] text-ivory backdrop-blur-sm">
              New
            </span>
          )}
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggleWishlist(product.id)}
        aria-label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
        aria-pressed={wished}
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center bg-background/80 text-foreground opacity-100 backdrop-blur-sm transition-all duration-500 hover:text-copper md:opacity-0 md:group-hover:opacity-100"
      >
        <Heart className={cn("h-4 w-4 transition-transform duration-300", wished && "scale-110 fill-current text-copper")} />
      </button>

      <div className="pt-5">
        <p className="eyebrow">{category?.name}</p>
        <h3 className="mt-2 font-display text-xl leading-tight">
          <Link to="/product/$slug" params={{ slug: product.slug }} className="link-line">
            {product.name}
          </Link>
        </h3>
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {product.price ? formatINR(product.price) : "Enquire for price"}
          </p>
          <button
            type="button"
            onClick={() => openEnquiry(product)}
            className="text-[0.62rem] uppercase tracking-[0.22em] text-copper opacity-0 transition-opacity duration-500 group-hover:opacity-100 focus-visible:opacity-100"
          >
            Enquire
          </button>
        </div>
      </div>
    </article>
  );
}
