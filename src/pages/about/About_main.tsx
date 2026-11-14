import { PageHero, FinalCTA } from "@/components/Sections";
import { Button, CountUp, Eyebrow, Reveal, SectionHead, usePageMeta } from "@/components/ui";
import { WsMark } from "@/components/Logo";
import { IconCheck, IconQuill, IconGlobe } from "@/components/Icons";
import { EDITORIAL, PHILOSOPHY, SQUAD_ROLES } from "@/lib/data";

const COMMITMENTS = [
  "Your copyright, your royalties — 100% author-owned, always",
  "Confidentiality by default; NDAs welcomed without a raised eyebrow",
  "Transparent milestones, timelines and pricing before work begins",
  "Honest editorial counsel, delivered with respect for your voice",
  "No fabricated reviews or borrowed praise — ever",
  "The final word on every page belongs to you",
];

export default function About() {
  usePageMeta(
    "About Us — Wordsmith Squad",
    "Helping stories find their voice. Meet Wordsmith Squad: our mission, vision, creative philosophy and commitment to authors."
  );

  return (
    <>
      <PageHero
        eyebrow="About Wordsmith Squad"
        ghost="Voice"
        title={
          <>
            Helping Stories Find Their <em className="text-sheen italic">Voice.</em>
          </>
        }
        text="We are a full-service creative writing and publishing agency — a squad of writers, editors, designers and strategists who believe every story deserves to be told beautifully."
        aside={
          <div className="relative mx-auto max-w-sm">
            <img
              src={EDITORIAL.library}
              alt="Antique library shelves in warm, dim light"
              className="img-editorial aspect-[4/5] w-full rounded-[2.5rem] object-cover"
            />
            <div className="glass absolute -bottom-5 -left-8 rounded-3xl px-6 py-4">
              <p className="font-display text-3xl font-semibold text-gold">4 countries</p>
              <p className="mt-0.5 text-[0.625rem] font-semibold tracking-[0.2em] text-ivory/55 uppercase">
                US · UK · CA · AU
              </p>
            </div>
            <div className="absolute -top-4 -right-5 flex h-20 w-20 items-center justify-center rounded-full bg-gold shadow-xl">
              <WsMark tone="monoInk" className="h-10 w-10" />
            </div>
          </div>
        }
      />

      {/* ---------- who we are ---------- */}
      <section className="bg-ivory pt-12 pb-24 md:pt-16 md:pb-36">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <SectionHead
              eyebrow="Who We Are"
              title={
                <>
                  A Publishing House&rsquo;s Standards. <em className="text-gold-dark italic">A Studio&rsquo;s Imagination.</em>
                </>
              }
            />
            <Reveal delay={140}>
              <p className="dropcap mt-9 text-lg leading-relaxed text-ink/75">
                Wordsmith Squad exists for the moment an idea becomes too important to stay in your head. We
                partner with aspiring authors, established writers, entrepreneurs, professionals and memoirists
                — anyone carrying a story that deserves professional hands.
              </p>
              <p className="mt-5 leading-relaxed text-ink/70">
                Under one roof, our team carries your book through every craft it needs: ghostwriting and
                developmental editing, cover and interior design, publishing and distribution, launch strategy
                and author branding. No hand-offs to strangers, no lost context — one squad, accountable from
                the first conversation to the finished spine.
              </p>
              <p className="mt-5 leading-relaxed text-ink/70">
                We work with clients across the United States, United Kingdom, Canada and Australia, in every
                genre from literary fiction to leadership. The accent changes; the standard never does.
              </p>
              <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-beige bg-paper px-5 py-3 text-sm font-medium text-ink/65">
                <IconGlobe className="h-5 w-5 text-gold-dark" />
                US · UK · Canada · Australia — wherever the story lives.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative self-start">
            <img
              src={EDITORIAL.leatherBooks}
              alt="Vintage leather-bound books on a wooden shelf"
              loading="lazy"
              className="img-editorial relative aspect-[3/4] w-full rounded-[2.5rem] object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-full bg-ink-950/85 px-5 py-2.5 text-[0.625rem] font-semibold tracking-[0.22em] text-gold uppercase backdrop-blur-md">
              The standard we keep
            </div>
          </Reveal>
        </div>

        <div className="wrap mt-20 grid grid-cols-2 gap-4 md:mt-28 md:grid-cols-4 md:gap-5">
          {[
            { to: 5, pad: 2, suffix: "", label: "Core disciplines" },
            { to: 4, pad: 2, suffix: "", label: "Countries served" },
            { to: 100, pad: 0, suffix: "%", label: "Author-owned rights" },
            { to: 1, pad: 2, suffix: "", label: "Squad per book" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="spot rounded-[1.75rem] border border-beige bg-paper px-6 py-9 text-center">
                <CountUp to={s.to} pad={s.pad} suffix={s.suffix} className="font-display block text-5xl font-semibold text-gold-dark md:text-6xl" />
                <p className="mt-3 text-[0.625rem] font-semibold tracking-[0.24em] text-ink/55 uppercase">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- mission & vision ---------- */}
      <section className="round-top bg-ink-950 pt-24 pb-28 md:pt-32 md:pb-40">
        <div className="wrap grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="spot relative h-full overflow-hidden rounded-[2.5rem] border border-ivory/10 bg-ivory/[0.04] p-10 md:p-14">
              <WsMark tone="monoIvory" className="absolute -right-8 -bottom-10 h-56 w-56 opacity-[0.05]" />
              <Eyebrow tone="light">Our Mission</Eyebrow>
              <h2 className="font-display mt-8 text-3xl leading-[1.12] font-semibold text-ivory md:text-[2.6rem]">
                To give every worthy idea the <em className="text-sheen italic">craft it deserves.</em>
              </h2>
              <p className="relative mt-7 leading-relaxed text-ivory/60">
                Great stories die in notebooks every day — not for lack of worth, but for lack of a team. Our
                mission is to be that team: to write, refine, design, publish and champion books with the
                rigor of a major house and the care of a personal studio.
              </p>
            </article>
          </Reveal>
          <Reveal delay={140}>
            <article className="relative h-full overflow-hidden rounded-[2.5rem] bg-gold p-10 text-ink-950 md:p-14">
              <IconQuill className="absolute right-8 bottom-8 h-28 w-28 text-ink-950/10" />
              <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-ink-950/25 px-4 py-2 text-ink-950/80">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-950" /> Our Vision
              </p>
              <h2 className="font-display mt-8 text-3xl leading-[1.12] font-semibold md:text-[2.6rem]">
                A world where no great story goes <em className="italic">untold.</em>
              </h2>
              <p className="relative mt-7 leading-relaxed text-ink-950/75">
                We imagine shelves — physical and digital — filled with books that would never have existed
                without a squad behind their authors. Memoirs preserved for families, expertise turned into
                authority, novels that keep readers up past midnight.
              </p>
            </article>
          </Reveal>
        </div>

        {/* philosophy */}
        <div className="wrap mt-28 md:mt-40">
          <SectionHead
            tone="light"
            eyebrow="Our Creative Philosophy"
            title={
              <>
                Four Beliefs We <em className="text-sheen italic">Write By.</em>
              </>
            }
          />
          <div className="mt-14">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.num} delay={i * 90}>
                <div className="group grid gap-4 border-t border-ivory/10 py-10 transition-all duration-500 last:border-b hover:bg-ivory/[0.03] md:grid-cols-[8rem_1fr_1.4fr] md:items-baseline md:gap-8 md:rounded-3xl md:px-6 md:hover:border-transparent">
                  <span className="font-display text-5xl text-gold/60 italic transition-colors group-hover:text-gold">
                    {p.num}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ivory md:text-3xl">{p.title}</h3>
                  <p className="leading-relaxed text-ivory/55">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- the squad ---------- */}
      <section className="round-top bg-ivory pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="wrap">
          <SectionHead
            align="center"
            eyebrow="The Squad"
            title={
              <>
                Four Disciplines. <em className="text-gold-dark italic">One Table.</em>
              </>
            }
            text="Every project is staffed with the specialists your genre demands — and led by one dedicated point of contact who never loses the thread of your story."
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SQUAD_ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <article className="spot group h-full rounded-[2rem] border border-beige bg-paper p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-dark/40 hover:shadow-[0_30px_60px_-30px_rgba(23,23,23,0.35)]">
                  <span className="font-display text-6xl text-outline italic transition-colors" style={{ "--so": "rgba(140,107,45,0.4)" } as React.CSSProperties}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-6 text-xl font-semibold text-ink">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- commitment ---------- */}
      <section className="bg-ivory-deep pt-24 pb-36 md:pt-32 md:pb-44">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal className="relative order-2 lg:order-1">
            <img
              src={EDITORIAL.moodyWriter}
              alt="A writer at work on a vintage typewriter in moody light"
              loading="lazy"
              className="img-editorial relative aspect-[4/5] w-full rounded-[2.5rem] object-cover"
            />
            <div className="absolute -right-3 -bottom-6 rounded-3xl bg-ink px-7 py-5 shadow-2xl md:-right-6">
              <p className="font-display text-2xl text-gold italic">Author-first.</p>
              <p className="mt-1 text-[0.625rem] tracking-[0.3em] text-ivory/70 uppercase">In writing, literally</p>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHead
              eyebrow="Our Commitment to Authors"
              title={
                <>
                  Promises We Put <em className="text-gold-dark italic">In Writing.</em>
                </>
              }
              text="Trust is earned in clauses and kept in conduct. These are the terms we hold ourselves to on every single project."
            />
            <Reveal delay={140}>
              <ul className="mt-9 space-y-3">
                {COMMITMENTS.map((c) => (
                  <li key={c} className="flex items-start gap-4 rounded-2xl bg-paper/70 px-5 py-4 text-[0.95rem] text-ink/75">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button to="/contact" variant="ink">
                  Hold Us to It — Say Hello
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA
        title={
          <>
            The Next Chapter Is <em className="font-semibold italic">Yours.</em>
          </>
        }
      />
    </>
  );
}