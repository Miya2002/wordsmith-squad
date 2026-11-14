
import { Link } from "react-router-dom";
import { usePageMeta } from "@/components/ui";

type Related = {
  label: string;
  to: string;
};

type FAQ = {
  question: string;
  answer: string;
};

export type DetailContent = {
  title: string;
  section: string;
  sectionUrl: string;
  intro: string;
  description: string;
  highlights: [string, string, string];
  process: [string, string, string];
  related: Related[];
  audience?: string[];
  faqs?: FAQ[];
};

type ContentSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
  callout?: { title: string; text: string };
};

export function ServiceDetailLayout({
  page,
}: {
  page: DetailContent;
}) {
  usePageMeta(`${page.title} | Wordsmith Squad`);

  const sections: ContentSection[] = [
    {
      id: "overview",
      title: `A Thoughtful Approach to ${page.title}`,
      paragraphs: [
        page.intro,
        page.description,
        `At Wordsmith Squad, every project begins with understanding your objectives, audience, and preferred voice. We work collaboratively to develop a clear direction and create content that reflects the purpose behind your ideas.`,
      ],
    },
    {
      id: "services",
      title: `What Our ${page.title} Service Includes`,
      paragraphs: [
        `Every project has its own requirements. Our approach is tailored to your subject, intended readers, preferred format, and creative direction.`,
      ],
      bullets: page.highlights,
    },
    {
      id: "process",
      title: "A Collaborative Process from Start to Finish",
      paragraphs: [
        "We follow a structured approach to keep your project organized, focused, and aligned with your expectations.",
      ],
      steps: page.process.map((item, index) => ({
        title: item,
        text: [
          "We discuss your requirements, goals, source material, and the direction you want your project to take.",
          "We develop the content with attention to structure, clarity, consistency, and your preferred voice.",
          "We review the work, incorporate your feedback, and prepare the agreed final deliverable.",
        ][index],
      })),
    },
    {
      id: "audience",
      title: "Who Can Benefit from This Service?",
      paragraphs: [
        `Our ${page.title.toLowerCase()} service is designed for individuals and organizations who want professional writing support while retaining control over their ideas and vision.`,
      ],
      bullets: page.audience ?? [
        "First-time authors and aspiring writers",
        "Established professionals and creative individuals",
        "Businesses and organizations",
      ],
    },
    {
      id: "why-us",
      title: "Why Work with Wordsmith Squad?",
      paragraphs: [
        "Your ideas deserve more than ordinary writing. They deserve careful attention, a thoughtful structure, and a consistent creative direction.",
        "We combine collaboration, research, organization, and editorial refinement to help transform your initial concept into polished, meaningful content.",
      ],
      callout: {
        title: "Your Ideas. Your Voice. Our Craft.",
        text: "We listen to your vision, respect your creative direction, and work with your feedback to develop content that communicates your message effectively.",
      },
    },
  ];

  const faqs = [
    ...(page.faqs ?? [
      {
        question: "How do I get started?",
        answer:
          "Simply share your project idea, requirements, and objectives with our team. We will discuss the next steps with you.",
      },
      {
        question: "Can I request revisions?",
        answer:
          "Yes. Feedback and revisions can be accommodated according to the scope and revision terms agreed upon for your project.",
      },
    ]),
    {
      question: "How can I discuss my project?",
      answer:
        "Use the consultation link on this page to contact our team and discuss your requirements.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#eee7da] text-[#29231c]">

      {/* DARK HERO */}
      <section className="relative overflow-hidden bg-[#17130f] text-[#f3ede3]">

        <div className="pointer-events-none absolute -right-24 -top-32 h-[430px] w-[430px] rounded-full border border-[#c6a36e]/10" />

        <div className="pointer-events-none absolute -right-12 -top-20 h-[330px] w-[330px] rounded-full border border-[#c6a36e]/10" />

        <div className="mx-auto max-w-[1500px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-12 lg:pb-28">

          {/* BREADCRUMB */}
          <nav
            aria-label="Breadcrumb"
            className="mb-14 flex flex-wrap items-center gap-2 text-xs text-white/45 sm:mb-20"
          >
            <Link to="/" className="transition hover:text-[#c6a36e]">
              Home
            </Link>

            <span>/</span>

            <Link
              to={page.sectionUrl}
              className="transition hover:text-[#c6a36e]"
            >
              {page.section}
            </Link>

            <span>/</span>

            <span className="text-[#c6a36e]">{page.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* HERO TEXT */}
            <div>

              <p className="mb-7 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#c6a36e]">
                WORDSMITH SQUAD / {page.section.toUpperCase()}
                <span className="h-px w-12 bg-[#c6a36e]" />
              </p>

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#c6a36e]/30 bg-[#c6a36e]/10 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d7b983]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c6a36e]" />
                YOUR NEXT CHAPTER STARTS HERE
              </div>

              <h1 className="max-w-4xl font-display text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-[64px]">
                {page.title}
                <span className="text-[#c6a36e]">.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                {page.intro}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-5 rounded-full bg-[#c6a36e] px-7 py-4 text-sm font-semibold text-[#211b15] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d7b983]"
                >
                  Discuss Your Project
                  <span className="text-lg">↗</span>
                </Link>

                <a
                  href="#overview"
                  className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c6a36e] transition hover:text-white"
                >
                  Explore the details ↓
                </a>

              </div>
            </div>

            {/* DECORATIVE HERO PANEL - NO IMAGE */}
            <div className="relative hidden min-h-[340px] items-center justify-center lg:flex">

              <div className="absolute h-[300px] w-[300px] rounded-full border border-[#c6a36e]/15" />

              <div className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-[#c6a36e]/10" />

              <div className="relative flex min-h-[290px] w-full max-w-[440px] flex-col justify-between border border-[#c6a36e]/25 bg-gradient-to-br from-[#302820] via-[#201a14] to-[#14110e] p-9 shadow-2xl">

                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-display text-4xl italic text-[#c6a36e]">
                      W.
                    </p>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/45">
                      WORDSMITH SQUAD
                    </p>
                  </div>

                  <span className="border border-[#c6a36e]/30 px-4 py-2 font-display text-2xl text-[#c6a36e]">
                    01
                  </span>
                </div>

                <div className="py-5 text-center">
                  <div className="mx-auto mb-5 h-px w-16 bg-[#c6a36e]/60" />

                  <p className="font-display text-3xl leading-tight text-[#f3ede3]">
                    Your story.
                    <br />
                    Our craftsmanship.
                  </p>

                  <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-[#c6a36e]">
                    THE ART OF WORDS
                  </p>
                </div>

                <div className="flex justify-between border-t border-[#c6a36e]/20 pt-5 text-[9px] uppercase tracking-[0.15em] text-white/40">
                  <span>{page.section}</span>
                  <span>WS / 01</span>
                </div>

              </div>
            </div>

          </div>

          {/* HERO FOOTER */}
          <div className="mt-16 grid grid-cols-3 border-t border-[#c6a36e]/20 pt-5 text-[8px] uppercase tracking-[0.13em] text-white/40 sm:mt-20 sm:text-[9px]">
            <span>WORDSMITH SQUAD</span>
            <span className="text-center">PRECISION · PURPOSE · PASSION</span>
            <span className="text-right">YOUR STORY, OUR CRAFT</span>
          </div>

        </div>
      </section>

      {/* CREAM CONTENT AREA */}
      <div className="mx-auto max-w-[1500px] px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">

        <div className="grid items-start gap-9 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[290px_minmax(0,1fr)] xl:gap-16">

          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-[calc(100vh-7rem)] lg:self-start">

            <div className="h-full overflow-y-auto overscroll-contain border border-[#cbbda6] bg-[#f3ede3] p-5 shadow-[0_8px_30px_rgba(50,35,20,0.04)] [scrollbar-width:thin] [scrollbar-color:#b38b55_transparent]">

              <p className="mb-4 border-b border-[#d7cbb9] pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a47c46]">
                In This Chapter
              </p>

              <nav aria-label="Chapter navigation">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block border-b border-[#d7cbb9] py-3 text-[12px] leading-[1.7] text-[#5f574d] transition-all duration-300 hover:translate-x-1 hover:text-[#a47c46]"
                  >
                    <span className="mr-1 text-[#a47c46]">
                      {String(index + 1).padStart(2, "0")} —
                    </span>
                    {section.title}
                  </a>
                ))}

                <a
                  href="#faqs"
                  className="block py-4 text-xs text-[#5f574d] transition hover:text-[#a47c46]"
                >
                  FAQs
                </a>

              </nav>
            </div>
          </aside>

          {/* MOBILE CHAPTER MENU */}
          <details className="border border-[#cbbda6] bg-[#f3ede3] lg:hidden">

            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#a47c46] [&::-webkit-details-marker]:hidden">
              Explore Chapters
              <span className="text-lg">+</span>
            </summary>

            <nav
              aria-label="Mobile chapter navigation"
              className="border-t border-[#d7cbb9] px-5 py-2"
            >
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block border-b border-[#d7cbb9] py-3 text-sm leading-6 text-[#5f574d] transition hover:text-[#a47c46]"
                >
                  <span className="text-[#a47c46]">
                    {String(index + 1).padStart(2, "0")} —
                  </span>{" "}
                  {section.title}
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

          {/* ARTICLE CONTENT */}
          <article className="min-w-0">
            <div className="mx-auto max-w-[950px]">

              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-b border-[#cbbda6]/60 py-10 first:pt-0 sm:py-14"
                >

                  <p className="mb-5 font-display text-sm italic text-[#aa8554]">
                    CHAPTER {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mb-7 max-w-4xl font-display text-3xl leading-[1.2] tracking-tight sm:text-4xl lg:text-[46px]">
                    {section.title}
                  </h2>

                  <div className="space-y-6">

                    {section.paragraphs.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-[14px] leading-[2] text-[#746b5e] sm:text-[15px]"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="space-y-3 py-2">
                        {section.bullets.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-7 text-[#746b5e]"
                          >
                            <span className="mt-1 text-[#b38b55]">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.steps && (
                      <div className="space-y-5 py-3">
                        {section.steps.map((step, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#d5c8b5] pb-5 last:border-0"
                          >
                            <span className="font-display text-lg italic text-[#b38b55]">
                              {String(i + 1).padStart(2, "0")}
                            </span>

                            <div>
                              <h3 className="mb-2 text-sm font-semibold text-[#30271f] sm:text-base">
                                {step.title}
                              </h3>

                              <p className="text-sm leading-7 text-[#746b5e]">
                                {step.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.callout && (
                      <div className="my-7 border-l-2 border-[#b38b55] bg-[#e6dccb] px-6 py-6 sm:px-8">
                        <h3 className="mb-2 font-display text-xl text-[#30271f]">
                          {section.callout.title}
                        </h3>

                        <p className="text-sm leading-7 text-[#746b5e]">
                          {section.callout.text}
                        </p>
                      </div>
                    )}

                  </div>
                </section>
              ))}

              {/* RELATED SERVICES */}
              <section className="border-b border-[#cbbda6]/60 py-12 sm:py-16">

                <p className="mb-4 font-display text-sm italic text-[#aa8554]">
                  CONTINUE EXPLORING
                </p>

                <h2 className="font-display text-3xl sm:text-4xl">
                  More in {page.section}.
                </h2>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {page.related.map((item, index) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="group border border-[#cbbda6] bg-[#f3ede3] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#b38b55]"
                    >
                      <span className="mb-4 block text-[9px] uppercase tracking-[0.2em] text-[#a47c46]">
                        EXPLORE / {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-xl text-[#30271f] transition-colors group-hover:text-[#a47c46]">
                        {item.label} ↗
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQS */}
              <section id="faqs" className="scroll-mt-28 py-12 sm:py-16">

                <p className="mb-5 font-display text-sm italic text-[#aa8554]">
                  YOUR QUESTIONS ANSWERED
                </p>

                <h2 className="mb-9 font-display text-4xl leading-tight sm:text-5xl">
                  Frequently Asked Questions
                  <span className="text-[#b38b55]">.</span>
                </h2>

                <div className="divide-y divide-[#cbbda6] border-y border-[#cbbda6]">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group py-5">

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

              {/* FINAL CTA */}
              <section className="relative mt-6 overflow-hidden bg-[#29231c] px-7 py-10 text-[#f3ede3] sm:px-12 sm:py-14">

                <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#c6a36e]/20" />

                <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-[#c6a36e]/15" />

                <div className="relative z-10">

                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c6a36e]">
                    YOUR NEXT CHAPTER STARTS HERE
                  </p>

                  <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                    Ready to bring your ideas to life?
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                    Tell us about your project and let our team help you plan the next step in your writing journey.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-5 rounded-full bg-[#c6a36e] px-7 py-3.5 text-sm font-semibold text-[#211b15] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d7b983]"
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
    </main>
  );
}
