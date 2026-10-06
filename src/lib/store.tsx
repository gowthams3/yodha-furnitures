import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

type CartLine = { id: string; qty: number };

type StoreValue = {
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  isWished: (id: string) => boolean;
  wishlistProducts: Product[];
  cart: CartLine[];
  cartProducts: { product: Product; qty: number }[];
  cartCount: number;
  cartTotal: number;
  addToCart: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (v: boolean) => void;
  enquiryFor: Product | "general" | null;
  openEnquiry: (p: Product | "general") => void;
  closeEnquiry: () => void;
  recentlyViewed: string[];
  markViewed: (id: string) => void;
};

const StoreContext = createContext<StoreValue | null>(null);

function useLocalList(key: string) {
  const [list, setList] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setList(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [key]);
  const persist = useCallback(
    (next: string[]) => {
      setList(next);
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        /* ignore */
      }
    },
    [key],
  );
  return [list, persist] as const;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useLocalList("yodha:wishlist");
  const [recentlyViewed, setRecentlyViewed] = useLocalList("yodha:recent");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [enquiryFor, setEnquiryFor] = useState<Product | "general" | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("yodha:cart");
      if (raw) setCart(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  const persistCart = useCallback((next: CartLine[]) => {
    setCart(next);
    try {
      window.localStorage.setItem("yodha:cart", JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<StoreValue>(() => {
    const cartProducts = cart
      .map((l) => {
        const product = products.find((p) => p.id === l.id);
        return product ? { product, qty: l.qty } : null;
      })
      .filter(Boolean) as { product: Product; qty: number }[];

    return {
      wishlist,
      toggleWishlist: (id) =>
        setWishlist(wishlist.includes(id) ? wishlist.filter((w) => w !== id) : [...wishlist, id]),
      isWished: (id) => wishlist.includes(id),
      wishlistProducts: products.filter((p) => wishlist.includes(p.id)),
      cart,
      cartProducts,
      cartCount: cart.reduce((n, l) => n + l.qty, 0),
      cartTotal: cartProducts.reduce((n, l) => n + (l.product.price ?? 0) * l.qty, 0),
      addToCart: (id, qty = 1) => {
        const existing = cart.find((l) => l.id === id);
        persistCart(
          existing
            ? cart.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l))
            : [...cart, { id, qty }],
        );
      },
      setQty: (id, qty) =>
        persistCart(qty <= 0 ? cart.filter((l) => l.id !== id) : cart.map((l) => (l.id === id ? { ...l, qty } : l))),
      removeFromCart: (id) => persistCart(cart.filter((l) => l.id !== id)),
      clearCart: () => persistCart([]),
      cartOpen,
      setCartOpen,
      searchOpen,
      setSearchOpen,
      enquiryFor,
      openEnquiry: (p) => setEnquiryFor(p),
      closeEnquiry: () => setEnquiryFor(null),
      recentlyViewed,
      markViewed: (id) => setRecentlyViewed([id, ...recentlyViewed.filter((r) => r !== id)].slice(0, 6)),
    };
  }, [
    wishlist,
    setWishlist,
    cart,
    persistCart,
    cartOpen,
    searchOpen,
    enquiryFor,
    recentlyViewed,
    setRecentlyViewed,
  ]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
