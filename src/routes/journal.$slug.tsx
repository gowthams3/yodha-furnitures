import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles } from "@/data/content";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — Yodha Furniture's" }, { name: "robots", content: "noindex" }] };
    }
    const { article } = loaderData;
    const title = `${article.title} — Yodha Furniture's Journal`;
    return {
      meta: [
        { title },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/journal/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/journal/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return (
    <main className="theme-ivory bg-background pt-28 md:pt-36">
      <article className="container-y max-w-3xl">
        <p className="eyebrow mb-5">{article.category}</p>
        <h1 className="display-md text-balance">{article.title}</h1>
        <p className="mt-5 text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
          {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {article.readingTime}
        </p>
        <img src={article.image} alt={article.title} className="mt-10 aspect-[16/9] w-full object-cover" />
        <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground/85">
          {article.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <Link to="/journal" className="link-line mt-14 inline-block text-[0.7rem] uppercase tracking-[0.24em] text-copper">
          All articles
        </Link>
      </article>
      <div className="h-24" />
    </main>
  );
}

function ArticleNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="eyebrow mb-5">404</p>
        <h1 className="display-md">This article doesn&rsquo;t exist</h1>
      </div>
    </main>
  );
}
