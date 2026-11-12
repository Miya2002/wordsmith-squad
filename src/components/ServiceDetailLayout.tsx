import { Link } from "react-router-dom";
import { Button, usePageMeta } from "@/components/ui";

type Related = { label: string; to: string };
export type DetailContent = {
  title: string;
  section: string;
  sectionUrl: string;
  intro: string;
  description: string;
  highlights: [string, string, string];
  process: [string, string, string];
  related: Related[];
};

/** Shared design system. Edit the individual page file to change that page's content. */
export function ServiceDetailLayout({ page }: { page: DetailContent }) {
  usePageMeta(`${page.title} | Wordsmith Squad`);
  return <>
    <section className="relative isolate overflow-hidden bg-ink-950 px-5 pb-24 pt-36 sm:px-8 sm:pt-44 lg:pb-32 lg:pt-52">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-35" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-gold-mid/5 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-12 flex flex-wrap items-center gap-2 text-xs text-ivory/45">
          <Link to="/" className="transition-colors hover:text-gold">Home</Link><span aria-hidden> / </span>
          <Link to={page.sectionUrl} className="transition-colors hover:text-gold">{page.section}</Link><span aria-hidden> / </span>
          <span className="text-gold-light">{page.title}</span>
        </nav>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="motion-safe:animate-[detail-rise_750ms_both]">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/[0.07] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-light sm:text-xs">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" /> Wordsmith Squad / {page.section}
            </div>
            <h1 className="font-display max-w-4xl text-[clamp(2.8rem,6vw,6.4rem)] font-semibold leading-[1.05] tracking-tight text-ivory">
              {page.title}<span className="text-gold">.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ivory/80 sm:text-xl">{page.intro}</p>
            <p className="mt-4 max-w-2xl leading-8 text-ivory/55">{page.description}</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button to="/contact" variant="gold">Discuss Your Project</Button><Button to={page.sectionUrl} variant="outline-light">Explore {page.section}</Button></div>
          </div>
          <div className="relative hidden min-h-[400px] items-center justify-center lg:flex" aria-hidden>
            <div className="absolute h-72 w-72 rounded-full border border-gold/20" />
            <div className="absolute h-[390px] w-[390px] rounded-full border border-dashed border-gold/15 motion-safe:animate-[detail-spin_60s_linear_infinite]" />
            <div className="relative w-[275px] rotate-[-6deg] rounded-lg border border-gold/40 bg-gradient-to-br from-[#302820] via-[#14120f] to-[#0b0a09] px-8 py-12 shadow-[25px_35px_80px_rgba(0,0,0,0.55)] transition-transform duration-700 hover:rotate-0">
              <div className="mb-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="text-center text-[10px] uppercase tracking-[0.4em] text-gold/75">Wordsmith Squad</p>
              <p className="font-display my-7 text-center text-3xl leading-tight text-ivory">Your next great chapter.</p>
              <div className="mx-auto h-12 w-12 rounded-full border border-gold/40 p-3"><span className="block h-full w-full rounded-full bg-gold/20" /></div>
              <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            <span className="absolute right-0 top-7 rounded-full border border-gold/25 bg-ink-900/90 px-5 py-3 text-xs text-gold-light">Made for your story ✦</span>
          </div>
        </div>
      </div>
    </section>
    <section className="relative bg-ink-900 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">The difference is in the details</p>
        <h2 className="font-display mt-4 max-w-3xl text-3xl leading-tight text-ivory sm:text-5xl">Crafted around <em className="text-gold-light">your vision.</em></h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {page.highlights.map((highlight, index) => <article key={highlight} className="group spot rounded-3xl border border-gold/15 bg-ink-950/65 p-7 transition-[transform,border-color,background-color] duration-500 hover:-translate-y-2 hover:border-gold/45 hover:bg-ink-950 sm:p-9">
            <span className="font-display text-4xl text-gold/35 group-hover:text-gold/75">0{index + 1}</span>
            <h3 className="font-display mt-10 text-2xl text-ivory">{highlight}</h3>
            <div className="mt-6 h-px w-12 bg-gold/45 transition-all duration-500 group-hover:w-full" />
          </article>)}
        </div>
      </div>
    </section>
    <section className="bg-ink-950 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div><p className="text-xs uppercase tracking-[0.25em] text-gold">Our approach</p><h2 className="font-display mt-4 text-4xl text-ivory sm:text-5xl">From idea to <em className="text-gold-light">impact.</em></h2><p className="mt-6 max-w-sm leading-8 text-ivory/55">A collaborative process that keeps your goals at the centre of every decision.</p></div>
        <div className="mt-12 space-y-3 lg:mt-0">
          {page.process.map((step, index) => <div key={step} className="group flex items-center gap-6 rounded-2xl border border-ivory/10 px-5 py-6 transition-colors duration-300 hover:border-gold/35 hover:bg-gold/[0.05] sm:px-8"><span className="font-display text-3xl text-gold/70">0{index + 1}</span><p className="flex-1 font-display text-xl text-ivory sm:text-2xl">{step}</p><span aria-hidden className="text-gold transition-transform group-hover:translate-x-1">↗</span></div>)}
        </div>
      </div>
    </section>
    <section className="bg-ink-900 px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs uppercase tracking-[0.25em] text-gold">Continue exploring</p><h2 className="font-display mt-3 text-3xl text-ivory sm:text-4xl">More in {page.section}</h2></div><Link to={page.sectionUrl} className="text-sm font-semibold text-gold hover:text-gold-light">All {page.section} pages ↗</Link></div>
      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{page.related.map((item,i) => <Link key={item.to + i} to={item.to} className="group flex min-h-32 flex-col justify-between rounded-2xl border border-gold/15 bg-ink-950/75 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"><span className="text-[10px] tracking-[0.2em] text-gold/70">EXPLORE / 0{i+1}</span><span className="font-display text-xl text-ivory group-hover:text-gold-light">{item.label} <span aria-hidden>↗</span></span></Link>)}</div>
    </div></section>
    <section className="relative overflow-hidden border-t border-gold/15 bg-ink-950 px-5 py-20 text-center sm:px-8 lg:py-24"><div aria-hidden className="absolute inset-x-1/4 top-0 h-64 rounded-full bg-gold/10 blur-[100px]"/><div className="relative mx-auto max-w-3xl"><p className="text-xs uppercase tracking-[0.25em] text-gold">Your next chapter begins here</p><h2 className="font-display mt-5 text-4xl text-ivory sm:text-5xl">Let's bring your story to life.</h2><p className="mx-auto mt-5 max-w-xl leading-8 text-ivory/60">Tell us what you have in mind. We'll help you find the right next step.</p><div className="mt-8"><Button to="/contact" variant="gold">Get a Free Consultation</Button></div></div></section>
  </>;
}
