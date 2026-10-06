import { Link } from "@tanstack/react-router";
import { site, whatsappLink } from "@/data/site";
import { categories, collections } from "@/data/products";

export function Footer() {
  return (
    <footer className="grain bg-ink pt-24 pb-10 text-beige/70">
      <div className="container-y">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.12em] text-ivory">YODHA</p>
            <p className="text-[0.55rem] uppercase tracking-[0.46em] text-bronze">Furniture&rsquo;s</p>
            <p className="mt-7 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
            <div className="mt-8 flex gap-6 text-[0.65rem] uppercase tracking-[0.24em]">
              {site.social.map((s) => (
                <a key={s.label} href={s.href} className="link-line hover:text-ivory">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Shop">
            {categories.slice(0, 7).map((c) => (
              <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="link-line hover:text-ivory">
                {c.name}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Collections">
            {collections.map((c) => (
              <Link key={c.slug} to="/collection/$slug" params={{ slug: c.slug }} className="link-line hover:text-ivory">
                {c.name}
              </Link>
            ))}
            <Link to="/custom" className="link-line hover:text-ivory">
              Custom Furniture
            </Link>
            <Link to="/faq" className="link-line hover:text-ivory">
              FAQ
            </Link>
          </FooterCol>

          <FooterCol title="Visit">
            <p className="normal-case tracking-normal">{site.address}</p>
            <a href={site.phoneHref} className="link-line hover:text-ivory">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="link-line normal-case tracking-normal hover:text-ivory">
              {site.email}
            </a>
            <a
              href={whatsappLink("Hello Yodha Furniture's, I'd like to know more.")}
              target="_blank"
              rel="noreferrer"
              className="link-line hover:text-ivory"
            >
              WhatsApp
            </a>
            {site.hours.map((h) => (
              <p key={h.day} className="normal-case tracking-normal">
                {h.day} — {h.time}
              </p>
            ))}
          </FooterCol>
        </div>

        <div className="hairline mt-20 flex flex-col gap-3 pt-8 text-[0.62rem] uppercase tracking-[0.2em] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Made to order in India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-6">{title}</p>
      <div className="flex flex-col items-start gap-3 text-sm">{children}</div>
    </div>
  );
}
