
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Find a Literary Agent
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 50–52
 *
 * Existing layout, animations, styling,
 * page number, image and components retained.
 */

const data: EditingPageData = {
  title: "Find a Literary Agent",

  subtitle:
    "Get Your Book Ready for Agents and Publishers",

  number: "19",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Find a Literary Agent",

  accent: "gold",

  description:
    "If you want a traditional publisher, you usually need three things: a strong pitch, a professional submission package and the right literary agent. These materials are short, but they carry a lot of weight. An agent may decide in seconds whether to read further. Wordsmith Squad helps you write persuasive submission materials and approach the process with realistic expectations. You keep full ownership of your work.",

  sections: [
    {
      heading:
        "Query Letters, Book Proposals & Literary Agent Services",

      paragraphs: [
        "If you want a traditional publisher, you usually need three things: a strong pitch, a professional submission package and the right literary agent. These materials are short, but they carry a lot of weight. An agent may decide in seconds whether to read further.",

        "Wordsmith Squad helps you write persuasive submission materials and approach the process with realistic expectations. You keep full ownership of your work.",
      ],
    },

    {
      heading: "What Does a Literary Agent Do?",

      paragraphs: [
        "A literary agent represents authors to publishers. They pitch your book to the right editors, negotiate contracts and advances, and guide your career.",

        "Agents are paid a percentage of what you earn, and reputable agents don’t charge reading fees. Most large publishers only consider agented submissions, which is why finding the right agent matters.",
      ],
    },

    {
      heading: "How to Find a Literary Agent",

      paragraphs: [
        "Wondering how to find a literary agent? Follow these steps:",
      ],

      bullets: [
        "1. Finish and polish your manuscript. Fiction should be complete. Nonfiction needs a proposal.",

        "2. Research agents in your genre. Look for those who represent books like yours and are open to new clients.",

        "3. Check legitimacy. Reputable agents don’t charge upfront fees.",

        "4. Personalize each submission. Follow each agent’s guidelines exactly.",

        "5. Track your queries and follow up appropriately.",

        "6. Be patient. Rejections are normal, and responses can take weeks or months.",
      ],
    },

    {
      heading: "Find a Literary Agent",

      paragraphs: [
        "When you set out to find a literary agent, strong materials make the difference. Our team prepares your pitch package, helps you build a targeted submission list and reviews your materials before you send them.",
      ],
    },

    {
      heading: "Query Letter Writing",

      paragraphs: [
        "A query letter is a one-page pitch that introduces you and your book to an agent. It needs a strong hook, a clear summary, your genre and word count, and a short author bio.",

        "Our writers craft query letters that stand out for the right reasons, with a confident voice and no clichés.",

        "You receive: A polished query letter, plus a short synopsis if needed.",
      ],
    },

    {
      heading: "Book Proposal",

      paragraphs: [
        "For most nonfiction, you sell the book before you finish writing it, and a book proposal is how.",

        "It is a detailed business document that tells agents and publishers why your book will succeed.",

        "A strong proposal usually includes:",
      ],

      bullets: [
        "An overview of your book and its hook",

        "Your target audience and market",

        "Competing and comparable titles",

        "Your author platform and promotion plan",

        "A chapter outline",

        "Sample chapters",
      ],
    },

    {
      heading: "Book Proposal Writing Services",

      paragraphs: [
        "Writing a proposal is hard. You have to sell your book, your market and yourself, all at once.",

        "Our book proposal writing services do the heavy lifting. We research your market, find comparison titles, write each section and polish the whole package so it is ready to send to agents.",

        "Best for: Nonfiction authors, business book authors, memoirists and experts building a platform.",
      ],
    },

    {
      heading: "Our Process",

      subsections: [
        {
          heading: "01. Free Consultation",

          paragraphs: [
            "Tell us about your book, goals and background.",
          ],
        },

        {
          heading: "02. Discovery",

          paragraphs: [
            "We gather details about your idea, audience and platform.",
          ],
        },

        {
          heading: "03. Drafting",

          paragraphs: [
            "We write your query letter or proposal.",
          ],
        },

        {
          heading: "04. Review and Revisions",

          paragraphs: [
            "You give feedback and we refine.",
          ],
        },

        {
          heading: "05. Final Package",

          paragraphs: [
            "You receive submission-ready materials.",
          ],
        },
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Writers who understand pitching and what agents want to see",

        "Honest expectations, with no promises of guaranteed deals",

        "Strict confidentiality through a signed NDA",

        "Full ownership of your materials",

        "A complete team for ghostwriting, editing and publishing",
      ],
    },

    {
      heading: "Ready to Pitch Your Book?",

      paragraphs: [
        "Get a Free Quote",
      ],
    },
  ],

  faqs: [
    {
      question:
        "Can you guarantee I’ll get an agent?",

      answer:
        "No. Nobody can. We make your materials as strong as possible and help you submit strategically.",
    },

    {
      question:
        "Do I need a book proposal for fiction?",

      answer:
        "Generally no. Fiction authors usually submit a query letter, a synopsis and sample pages or the full manuscript. Nonfiction typically needs a proposal.",
    },

    {
      question:
        "Do you charge a percentage of my book sales?",

      answer:
        "No. You pay for the writing service only.",
    },

    {
      question: "How long does it take?",

      answer:
        "Query letters can take days. Proposals take longer.",
    },

    {
      question: "How much does it cost?",

      answer:
        "Pricing depends on the type and length of material.",
    },
  ],
};

export default function FindALiteraryAgent() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
