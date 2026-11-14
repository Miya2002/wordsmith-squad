
import { ComponentType } from "react";
import { Link, useParams } from "react-router-dom";
import { usePageMeta, Button } from "@/components/ui";
import { MEGA_NAV } from "@/components/Navbar";

import ManuscriptEditing from "@/pages/editing/ManuscriptEditing";
import BookFormatting from "@/pages/editing/BookFormatting";
import Proofreading from "@/pages/editing/Proofreading";
import BookCritiqueServices from "@/pages/editing/BookCritiqueServices";

const EDITING_PAGES: Record<string, ComponentType> = {
  "manuscript-editing": ManuscriptEditing,
  "book-formatting": BookFormatting,
  proofreading: Proofreading,
  "book-critique-services": BookCritiqueServices,
};

export default function Explore() {
  const { category = "", slug } = useParams();

  const CustomPage =
    category === "editing" && slug
      ? EDITING_PAGES[slug]
      : undefined;

  if (CustomPage) {
    return <CustomPage />;
  }

  return <ExploreFallback category={category} slug={slug} />;
}

function ExploreFallback({
  category,
  slug,
}: {
  category: string;
  slug?: string;
}) {
  const group = MEGA_NAV.find(
    (item) =>
      item.to === `/explore/${category}` ||
      item.children?.some((child) =>
        child.to.startsWith(`/explore/${category}/`)
      )
  );

  const page = slug
    ? group?.children?.find(
        (item) => item.to === `/explore/${category}/${slug}`
      )
    : undefined;

  const title = slug ? page?.label : group?.label;

  const exists = !!group && (!slug || !!page);

  usePageMeta(
    title
      ? `${title} | Wordsmith Squad`
      : "Page Not Found | Wordsmith Squad"
  );

  if (!exists) {
    return (
      <section className="flex min-h-svh flex-col items-center justify-center bg-ink-950 px-6 pt-32 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">
          404 · Missing Chapter
        </p>

        <h1 className="font-display mt-5 text-4xl text-ivory md:text-6xl">
          Page not found
        </h1>

        <Button to="/">Back to Home</Button>
      </section>
    );
  }

  return (
    <>
      <section className="relative isolate min-h-[65vh] overflow-hidden bg-ink-950 px-6 pt-44 pb-24 sm:pt-52">
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-40" />

        <div className="pointer-events-none absolute top-12 right-0 h-100 w-100 rounded-full bg-gold/10 blur-[110px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-ivory/50">
            <Link className="hover:text-gold" to="/">
              Home
            </Link>

            <span>/</span>

            <Link className="hover:text-gold" to={group!.to}>
              {group!.label}
            </Link>

            {page && (
              <>
                <span>/</span>
                <span className="text-gold">{page.label}</span>
              </>
            )}
          </div>

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Wordsmith Squad · {group!.label}
          </p>

          <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.1] text-ivory sm:text-6xl lg:text-7xl">
            {title}
            <span className="text-gold">.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/65 sm:text-lg">
            {page
              ? `Discover our approach to ${page.label!.toLowerCase()} — thoughtful guidance and professional support to help bring your book to life.`
              : `Explore our ${group!.label.toLowerCase()} solutions and discover the right support for your story, from first draft to publication.`}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact">Discuss Your Project</Button>
            <Button to="/services" variant="outline-light">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Explore More
          </p>

          <h2 className="font-display mb-8 text-3xl text-ivory sm:text-4xl">
            {page
              ? `More in ${group!.label}`
              : `Our ${group!.label} Solutions`}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group!.children
              ?.filter((item) => item.to !== page?.to)
              .map((item, i) => (
                <Link
                  key={`${item.to}-${i}`}
                  to={item.to}
                  className="group rounded-2xl border border-gold/15 bg-ink-800/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-ink-800"
                >
                  <span className="mb-4 block text-[11px] tracking-widest text-gold/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="font-display text-xl text-ivory transition-colors group-hover:text-gold-light">
                    {item.label} <span>↗</span>
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
