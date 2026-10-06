import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/data/content";
import { PageHero } from "@/components/Primitives";

export const Route = createFileRoute("/project/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Yodha Furniture's" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.name} — Project by Yodha Furniture's`;
    return {
      meta: [
        { title },
        { name: "description", content: project.story },
        { property: "og:title", content: title },
        { property: "og:description", content: project.story },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <main>
      <PageHero eyebrow={project.location} title={project.name} intro={project.story} image={project.image} />
      <section className="theme-ivory bg-background py-16 md:py-24">
        <div className="container-y">
          <div className="grid gap-6 md:grid-cols-3">
            {project.gallery.map((g, i) => (
              <img
                key={g + i}
                src={g}
                alt={`${project.name} detail ${i + 1}`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            ))}
          </div>
          <div className="mt-16 border-t border-foreground/10 pt-8">
            <p className="eyebrow mb-4">Furniture used</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.furniture.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link to="/projects" className="link-line mt-10 inline-block text-[0.7rem] uppercase tracking-[0.24em] text-copper">
              All projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectNotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="eyebrow mb-5">404</p>
        <h1 className="display-md">This project doesn&rsquo;t exist</h1>
      </div>
    </main>
  );
}
