import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonBase =
  "group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.16em] transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  solid: "bg-brand text-ivory hover:bg-copper",
  outline: "border border-current/35 text-current hover:border-current hover:bg-current/5",
  ghost: "text-current hover:text-copper px-0",
  ivory: "bg-ivory text-espresso hover:bg-beige",
};

export type ButtonVariant = keyof typeof variants;

export function ActionButton({
  variant = "solid",
  className,
  children,
  withArrow,
  ...rest
}: ComponentProps<"button"> & { variant?: ButtonVariant; withArrow?: boolean }) {
  return (
    <button className={cn(buttonBase, variants[variant], className)} {...rest}>
      {children}
      {withArrow && (
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
      )}
    </button>
  );
}

export function LinkButton({
  variant = "solid",
  className,
  children,
  withArrow,
  ...rest
}: ComponentProps<typeof Link> & { variant?: ButtonVariant; withArrow?: boolean }) {
  return (
    <Link className={cn(buttonBase, variants[variant], className)} {...rest}>
      <>
        {children}
        {withArrow && (
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
        )}
      </>
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="eyebrow mb-5">
          {eyebrow}
        </p>
      )}

      <h1 className="display-xl max-w-4xl text-ivory text-balance">
        {title}
      </h1>

      {intro && (
        <p className="mt-7 max-w-xl text-beige/85 text-balance leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string; params?: never }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {item.to ? (
              <Link to={item.to} className="link-line hover:text-copper">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative grain isolate flex min-h-[58vh] items-end overflow-hidden bg-ink pt-32 pb-16 md:min-h-[68vh] md:pb-24">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      />
      <div className="film-overlay -z-10" />
      <div className="container-y">
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h1 className="display-xl max-w-4xl text-ivory text-balance">{title}</h1>
        {intro && <p className="mt-8 max-w-xl text-beige/85 text-balance">{intro}</p>}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </header>
  );
}
