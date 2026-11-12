
import { Link } from "react-router-dom";

export type ChapterBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "bullets"; items: string[] }
  | {
      type: "steps";
      items: { title: string; text: string }[];
    }
  | { type: "callout"; title: string; text: string };

export type PublishingPageContent = {
  title: string;
  subtitle: string;
  intro: string;
  heroEyebrow?: string;
  heroImage?: string;
  sections: {
    id: string;
    title: string;
    blocks: ChapterBlock[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

type Props = {
  page: PublishingPageContent;
};

export default function PublishingDetailLayout({ page }: Props) {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#eee7da] text-[#29231c]">

      {/* ==========================================
          PREMIUM DARK HERO SECTION
      ========================================== */}

      <section className="relative overflow-hidden bg-[#171410] text-[#eee7da]">

        {/* Background Decorations */}

        <div className="pointer-events-none absolute -right-40 -top-48 h-[550px] w-[550px] rounded-full border border-[#c6a36e]/10" />

        <div className="pointer-events-none absolute -right-20 -top-28 h-[400px] w-[400px] rounded-full border border-[#c6a36e]/10" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c6a36e]/30 to-transparent" />

        {/* Hero Container */}

        <div className="relative mx-auto max-w-[1280px] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10">

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="mb-14 flex flex-wrap items-center gap-2 text-[11px] text-white/45 sm:mb-16"
          >
            <Link to="/" className="transition-colors hover:text-[#c6a36e]">
              Home
            </Link>

            <span>/</span>

            <Link
              to="/publishing"
              className="transition-colors hover:text-[#c6a36e]"
            >
              Publishing
            </Link>

            <span>/</span>

            <span className="text-[#c6a36e]">{page.title}</span>
          </nav>

          {/* HERO GRID */}

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

            {/* LEFT CONTENT */}

            <div className="relative z-10 max-w-2xl">

              {/* Eyebrow */}

              <p className="mb-6 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c6a36e]">
                {page.heroEyebrow || "WORDSMITH SQUAD / PUBLISHING"}

                <span className="h-px w-12 bg-[#c6a36e]" />
              </p>

              {/* Small Label */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c6a36e]/30 bg-[#c6a36e]/[0.07] px-4 py-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#c6a36e]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#d3b57e]">
                  Crafted for Authors. Created for Readers.
                </span>

              </div>

              {/* Main Heading */}

              <h1 className="max-w-2xl font-display text-5xl leading-[1.08] tracking-[-0.035em] text-[#f1eadd] sm:text-6xl lg:text-[68px]">
                {page.title}
                <span className="text-[#c6a36e]">.</span>
              </h1>

              {/* Subtitle */}

              <p className="mt-6 max-w-xl text-sm leading-8 text-[#c2b8a8] sm:text-base">
                {page.subtitle}
              </p>

              {/* Intro */}

              {page.intro && (
                <p className="mt-3 max-w-lg text-xs leading-7 text-white/45">
                  {page.intro}
                </p>
              )}

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap items-center gap-5">

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-4 rounded-full bg-[#c6a36e] px-6 py-3 text-xs font-semibold text-[#211b15] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b77f] hover:shadow-[0_10px_30px_rgba(198,163,110,0.2)]"
                >
                  Discuss Your Project

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <a
                  href="#chapter-content"
                  className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#c6a36e] transition-colors hover:text-white"
                >
                  Explore the Details ↓
                </a>

              </div>

            </div>

            {/* RIGHT TYPOGRAPHIC ARTWORK - NO IMAGE */}

            <div className="relative hidden min-h-[390px] items-center justify-center lg:flex">

              {/* Decorative Rings */}

              <div className="absolute h-[340px] w-[340px] rounded-full border border-[#c6a36e]/15" />

              <div className="absolute h-[275px] w-[275px] rounded-full border border-[#c6a36e]/20" />

              <div className="absolute h-[210px] w-[210px] rounded-full border border-[#c6a36e]/10" />

              {/* Center Typography */}

              <div className="relative z-10 text-center">

                <p className="font-display text-[105px] italic leading-none text-[#c6a36e]/75">
                  W.
                </p>

                <div className="mx-auto mt-5 h-px w-16 bg-[#c6a36e]/60" />

                <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#c6a36e]">
                  The Art of Storytelling
                </p>

                <p className="mx-auto mt-4 max-w-[230px] font-display text-2xl leading-snug text-[#eee7da]">
                  Every story deserves to be remembered.
                </p>

              </div>

              {/* Floating Editorial Label */}

              <div className="absolute left-0 top-10 border border-[#c6a36e]/25 bg-[#211c16] px-5 py-4">

                <p className="font-display text-2xl text-[#c6a36e]">
                  01
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/50">
                  WORDSMITH SQUAD
                </p>

              </div>

              {/* Bottom Editorial Text */}

              <div className="absolute bottom-10 right-0 text-right">

                <p className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                  Precision · Purpose · Passion
                </p>

                <p className="mt-2 font-display text-lg italic text-[#c6a36e]">
                  Your Story, Our Craft.
                </p>

              </div>

              {/* Decorative Line */}

              <div className="absolute right-8 top-5 h-16 w-px bg-gradient-to-b from-transparent via-[#c6a36e]/50 to-transparent" />

            </div>

          </div>

          {/* HERO FOOTER */}

          <div className="mt-14 grid grid-cols-3 border-t border-[#c6a36e]/20 pt-5 text-[7px] uppercase tracking-[0.15em] text-white/35 sm:mt-16 sm:text-[9px]">

            <span>WORDSMITH SQUAD</span>

            <span className="text-center">
              PRECISION · PURPOSE · PASSION
            </span>

            <span className="text-right">
              YOUR STORY, OUR CRAFT
            </span>

          </div>

        </div>

      </section>

      {/* ==========================================
          CHAPTER CONTENT SECTION
      ========================================== */}

      <section
        id="chapter-content"
        className="bg-[#eee7da]"
      >

        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10">

          <div className="grid items-start gap-9 lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-16">

            {/* ==================================
                FIXED / STICKY LEFT SIDEBAR
            ================================== */}

            <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-[calc(100vh-7rem)] lg:min-h-0 lg:self-start">

              <div className="h-full overflow-y-auto overscroll-contain border border-[#cbbda6] bg-[#f3ede3] p-6 shadow-[0_8px_30px_rgba(50,35,20,0.04)] [scrollbar-color:#b38b55_transparent] [scrollbar-width:thin]">

                <p className="mb-5 border-b border-[#d7cbb9] pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a47c46]">
                  In This Chapter
                </p>

                <nav aria-label="Chapter navigation">

                  {page.sections.map((section, index) => (

                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group block border-b border-[#d7cbb9] py-3 text-[12px] leading-[1.7] text-[#5f574d] transition-all duration-300 hover:translate-x-1 hover:text-[#a47c46]"
                    >

                      <span className="mr-1 text-[#a47c46]">
                        {String(index + 1).padStart(2, "0")} —
                      </span>

                      {section.title}

                    </a>

                  ))}

                  <a
                    href="#faqs"
                    className="block py-4 text-[12px] text-[#5f574d] transition-colors hover:text-[#a47c46]"
                  >
                    FAQs
                  </a>

                </nav>

              </div>

            </aside>

            {/* ==================================
                MOBILE CHAPTER MENU
            ================================== */}

            <details className="border border-[#cbbda6] bg-[#f3ede3] lg:hidden">

              <summary className="cursor-pointer list-none px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#a47c46] [&::-webkit-details-marker]:hidden">

                Explore Chapters

                <span className="float-right text-lg">+</span>

              </summary>

              <nav
                aria-label="Mobile chapter navigation"
                className="border-t border-[#d7cbb9] px-5 py-2"
              >

                {page.sections.map((section, index) => (

                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block border-b border-[#d7cbb9] py-3 text-sm leading-6 text-[#5f574d] transition-colors hover:text-[#a47c46]"
                  >

                    <span className="text-[#a47c46]">
                      {String(index + 1).padStart(2, "0")} —
                    </span>

                    {" "}{section.title}

                  </a>

                ))}

                <a
                  href="#faqs"
                  className="block py-3 text-sm text-[#5f574d] hover:text-[#a47c46]"
                >
                  FAQs
                </a>

              </nav>

            </details>

            {/* ==================================
                RIGHT SIDE ARTICLE
            ================================== */}

            <article className="min-w-0">

              <div className="mx-auto max-w-[950px]">

                {/* CHAPTER SECTIONS */}

                {page.sections.map((section, index) => (

                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 border-b border-[#cbbda6]/60 py-10 first:pt-0 sm:py-14"
                  >

                    {/* Chapter Number */}

                    <p className="mb-5 font-display text-sm italic text-[#aa8554]">
                      CHAPTER {String(index + 1).padStart(2, "0")}
                    </p>

                    {/* Chapter Heading */}

                    <h2 className="mb-7 max-w-4xl font-display text-3xl leading-[1.2] tracking-tight sm:text-4xl lg:text-[46px]">
                      {section.title}
                    </h2>

                    {/* Chapter Blocks */}

                    <div className="space-y-6">

                      {section.blocks.map((block, blockIndex) => {

                        {/* PARAGRAPH */}

                        if (block.type === "paragraph") {
                          return (
                            <p
                              key={blockIndex}
                              className="text-[14px] leading-[2] text-[#746b5e] sm:text-[15px]"
                            >
                              {block.text}
                            </p>
                          );
                        }

                        {/* SUBHEADING */}

                        if (block.type === "heading") {
                          return (
                            <h3
                              key={blockIndex}
                              className="pt-3 font-display text-2xl leading-snug text-[#30271f] sm:text-[27px]"
                            >
                              {block.text}
                            </h3>
                          );
                        }

                        {/* BULLET POINTS */}

                        if (block.type === "bullets") {
                          return (
                            <ul
                              key={blockIndex}
                              className="space-y-3 py-1"
                            >

                              {block.items.map((item, i) => (

                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm leading-7 text-[#746b5e]"
                                >

                                  <span className="mt-1 text-[#b38b55]">
                                    ✦
                                  </span>

                                  <span>{item}</span>

                                </li>

                              ))}

                            </ul>
                          );
                        }

                        {/* NUMBERED STEPS */}

                        if (block.type === "steps") {
                          return (
                            <div
                              key={blockIndex}
                              className="space-y-5 py-3"
                            >

                              {block.items.map((item, i) => (

                                <div
                                  key={i}
                                  className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#d5c8b5] pb-5 last:border-0"
                                >

                                  <span className="font-display text-lg italic text-[#b38b55]">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>

                                  <div>

                                    <h4 className="mb-2 text-sm font-semibold text-[#30271f] sm:text-base">
                                      {item.title}
                                    </h4>

                                    <p className="text-sm leading-7 text-[#746b5e]">
                                      {item.text}
                                    </p>

                                  </div>

                                </div>

                              ))}

                            </div>
                          );
                        }

                        {/* CALLOUT */}

                        if (block.type === "callout") {
                          return (
                            <div
                              key={blockIndex}
                              className="my-7 border-l-2 border-[#b38b55] bg-[#e6dccb] px-6 py-6 sm:px-8"
                            >

                              <h4 className="mb-2 font-display text-xl text-[#30271f]">
                                {block.title}
                              </h4>

                              <p className="text-sm leading-7 text-[#746b5e]">
                                {block.text}
                              </p>

                            </div>
                          );
                        }

                        return null;

                      })}

                    </div>

                  </section>

                ))}

                {/* ==================================
                    FREQUENTLY ASKED QUESTIONS
                ================================== */}

                <section
                  id="faqs"
                  className="scroll-mt-28 py-12 sm:py-16"
                >

                  <p className="mb-5 font-display text-sm italic text-[#aa8554]">
                    YOUR QUESTIONS ANSWERED
                  </p>

                  <h2 className="mb-9 font-display text-4xl leading-tight sm:text-5xl">

                    Frequently Asked Questions

                    <span className="text-[#b38b55]">.</span>

                  </h2>

                  <div className="divide-y divide-[#cbbda6] border-y border-[#cbbda6]">

                    {page.faqs.map((faq, index) => (

                      <details
                        key={index}
                        className="group py-5"
                      >

                        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-[#30271f] sm:text-base [&::-webkit-details-marker]:hidden">

                          <span>{faq.question}</span>

                          <span className="shrink-0 text-xl font-light text-[#a47c46] transition-transform duration-300 group-open:rotate-45">
                            +
                          </span>

                        </summary>

                        <p className="max-w-3xl pt-4 text-sm leading-8 text-[#746b5e]">
                          {faq.answer}
                        </p>

                      </details>

                    ))}

                  </div>

                </section>

                {/* ==================================
                    FINAL CALL TO ACTION
                ================================== */}

                <section className="relative mt-6 overflow-hidden bg-[#29231c] px-7 py-10 text-[#f3ede3] sm:px-12 sm:py-14">

                  {/* Decorative Circles */}

                  <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#c6a36e]/20" />

                  <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-[#c6a36e]/15" />

                  <div className="relative z-10">

                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c6a36e]">
                      YOUR NEXT CHAPTER STARTS HERE
                    </p>

                    <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                      Ready to bring your book into the world?
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                      Tell us about your project and let our team help you plan the next step in your publishing journey.
                    </p>

                    <Link
                      to="/contact"
                      className="mt-8 inline-flex items-center gap-5 rounded-full bg-[#c6a36e] px-7 py-3.5 text-sm font-semibold text-[#211b15] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d7b983] hover:shadow-[0_10px_30px_rgba(198,163,110,0.2)]"
                    >

                      Start a Conversation

                      <span className="text-lg">↗</span>

                    </Link>

                  </div>

                </section>

              </div>

            </article>

          </div>

        </div>

      </section>

    </main>
  );
}
