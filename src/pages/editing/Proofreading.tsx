
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Proofreading
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 36–41
 *
 * Existing layout, animations, styling,
 * image, page number and component
 * structure remain unchanged.
 */

const data: EditingPageData = {
  title: "Proofreading",

  subtitle:
    "Book Proofreading and Manuscript Critique for Authors in the USA",

  number: "03",

  image: EDITORIAL.desk,

  imageAlt: "Editorial workspace for Proofreading",

  accent: "gold",

  description:
    "Before a book goes out into the world, it needs a final check, and often an honest second opinion first. A single typo on page one can cost you a reader’s trust. A hidden structural problem can sink an otherwise strong story. At Wordsmith Squad, we offer both: sharp-eyed proofreading to catch the last errors, and clear, constructive critique to show you where your book stands before you invest in the next step. You keep control of your work and your voice.",

  sections: [
    {
      heading: "Proofreading Services",

      paragraphs: [
        "Our proofreading services are the final quality check before publication. We read your finished manuscript line by line and catch typos, spelling mistakes, punctuation errors, repeated words, spacing problems and inconsistent formatting.",

        "Proofreading doesn’t change your story or style. It makes sure nothing distracts from them.",

        "Best for: Authors with a fully edited and formatted manuscript who want it clean before hitting publish.",
      ],
    },

    {
      heading: "Book Proofreading",

      paragraphs: [
        "Book proofreading protects your reputation. Readers notice errors, and reviews often mention them. Our proofreaders check your book as a reader would, with fresh eyes, covering:",
      ],

      bullets: [
        "Spelling and grammar slips",

        "Punctuation and quotation mark consistency",

        "Missing or doubled words",

        "Chapter titles, page numbers and table of contents accuracy",

        "Layout errors such as odd line breaks, stray spaces and inconsistent fonts",
      ],
    },

    {
      heading: "Books We Proofread",

      paragraphs: [
        "We proofread fiction, memoirs, business books, self-help, cookbooks and children’s books, in print and digital form.",
      ],
    },

    {
      heading: "Editing and Proofreading",

      paragraphs: [
        "Many authors search for editing and proofreading together, and the two are closely connected but different. Editing improves the writing itself, from structure and style to grammar and consistency. Proofreading comes last and catches the small errors that remain. Skipping either one leaves a gap.",

        "We offer both as separate services or as a bundle.",
      ],

      subsections: [
        {
          heading: "Editing",

          paragraphs: [
            "When it happens: After you finish your draft.",

            "What it does: Improves story, flow, clarity and language.",
          ],
        },

        {
          heading: "Proofreading",

          paragraphs: [
            "When it happens: After editing and formatting.",

            "What it does: Catches remaining typos and errors.",
          ],
        },
      ],
    },

    {
      heading: "Book Critique",

      paragraphs: [
        "A book critique gives you honest, professional feedback on your manuscript without a full edit. An experienced reader and editor reads your book and tells you what is working, what isn’t and what to do about it.",

        "It is one of the most cost-effective ways to improve a book before submitting to agents, hiring an editor or self-publishing.",

        "You receive: A written report covering strengths, weaknesses and clear, practical next steps.",
      ],
    },

    {
      heading: "Book Critique Services",

      paragraphs: [
        "Our book critique services are designed for authors at any stage. Whether you have just finished a first draft or you have rewritten your book several times and feel stuck, a critique gives you a clear direction.",

        "We look at the areas that matter most to readers, including:",
      ],

      bullets: [
        "Plot, pacing and structure (fiction)",

        "Argument, clarity and organization (nonfiction)",

        "Character development and voice",

        "Opening chapters and hooks",

        "Audience fit and marketability",

        "Overall strengths and priorities for revision",
      ],
    },

    {
      heading: "Manuscript Assessment",

      paragraphs: [
        "A manuscript assessment is a thorough, big-picture review of your full manuscript. Your assessor reads the whole book and delivers a detailed report that explains where the manuscript stands and what it needs.",

        "It helps you decide whether you need developmental editing, line editing or a rewrite, so you spend your budget wisely.",
      ],
    },

    {
      heading: "Manuscript Evaluation",

      paragraphs: [
        "Our manuscript evaluation goes a step further by measuring your book against what readers and publishers expect in your genre.",

        "We assess its readiness, flag risks and tell you plainly whether it is ready to submit or publish, or what stands in the way.",

        "This is valuable if you plan to approach literary agents or traditional publishers.",
      ],
    },

    {
      heading: "Book Assessment",

      paragraphs: [
        "A book assessment is ideal when you want a trusted, professional opinion before moving forward.",

        "It suits authors who have a nearly finished book and want to confirm quality, and authors who are unsure what is holding the book back.",

        "You get a clear summary of where your book stands and a roadmap for improving it.",
      ],
    },

    {
      heading: "Content Assessment",

      paragraphs: [
        "Our content assessment focuses on the substance of your writing: whether your ideas are clear, your message is consistent, your content is organized and your material meets your audience’s needs.",

        "It is especially useful for nonfiction, business books, self-help, guides and course-style books, where clarity and usefulness matter most.",
      ],
    },

    {
      heading: "Which Service Do You Need?",

      paragraphs: [
        "If you aren’t sure where to begin, a free consultation can point you in the right direction.",
      ],

      subsections: [
        {
          heading: "Finished Draft, Unsure If It Works",

          paragraphs: [
            "Recommended service: Book critique or manuscript assessment.",
          ],
        },

        {
          heading: "Planning to Submit to Agents or Publishers",

          paragraphs: [
            "Recommended service: Manuscript evaluation.",
          ],
        },

        {
          heading: "Book Needs Big Improvements",

          paragraphs: [
            "Recommended service: Developmental editing (after assessment).",
          ],
        },

        {
          heading: "Book Is Edited and Formatted",

          paragraphs: [
            "Recommended service: Book proofreading.",
          ],
        },

        {
          heading: "Nonfiction With Unclear Structure",

          paragraphs: [
            "Recommended service: Content assessment.",
          ],
        },
      ],
    },

    {
      heading: "How It Works",

      subsections: [
        {
          heading: "01. Free Consultation",

          paragraphs: [
            "Tell us about your book and goals.",
          ],
        },

        {
          heading: "02. Send Your Manuscript",

          paragraphs: [
            "Share your file and any questions you want answered.",
          ],
        },

        {
          heading: "03. Review",

          paragraphs: [
            "Your editor or proofreader works through the manuscript.",
          ],
        },

        {
          heading: "04. Report or Corrected File",

          paragraphs: [
            "You receive a critique report or a proofread manuscript with changes.",
          ],
        },

        {
          heading: "05. Follow-Up",

          paragraphs: [
            "We answer questions and suggest next steps.",
          ],
        },
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Experienced readers and editors who know your genre",

        "Honest, constructive feedback, never harsh or vague",

        "Clear next steps, so you know exactly what to do after the report",

        "Strict confidentiality through a signed NDA",

        "Full ownership of your manuscript at all times",

        "Built for US publishing standards and American English",
      ],
    },

    {
      heading:
        "Ready for Honest Feedback or a Flawless Final Draft?",

      paragraphs: [
        "Whether you need a final polish or an expert opinion before taking the next step, Wordsmith Squad is ready to help.",

        "Get a Free Quote",
      ],
    },
  ],

  faqs: [
    {
      question:
        "What is the difference between proofreading and editing?",

      answer:
        "Editing improves the writing itself: structure, style, clarity and grammar. Proofreading is the final check for typos and small errors after editing and formatting.",
    },

    {
      question:
        "What is the difference between a critique and an assessment?",

      answer:
        "They are closely related. A critique focuses on honest feedback about what works and what doesn’t. An assessment is a broader, more structured review that also helps you decide on next steps.",
    },

    {
      question: "Will you rewrite my book?",

      answer:
        "No. Critique and proofreading do not change your story or voice. Rewriting is a separate service.",
    },

    {
      question:
        "Do I need to be finished with my book?",

      answer:
        "For proofreading, yes. For critique, you can submit a full draft or, in some cases, partial chapters.",
    },

    {
      question: "How long does it take?",

      answer:
        "It depends on length and service type.",
    },

    {
      question: "How much does it cost?",

      answer:
        "Pricing depends on word count and service level.",
    },

    {
      question: "Is my manuscript kept private?",

      answer:
        "Yes. We sign a non-disclosure agreement, and your work is never shared.",
    },
  ],
};

export default function Proofreading() {
  return <EditingSubpageLayout data={data} />;
}
