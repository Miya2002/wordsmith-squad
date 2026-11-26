
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Brand Storytelling
 *
 * SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 77–80
 *
 * The original layout, image, styling,
 * animations and component structure
 * remain unchanged.
 */

const data: EditingPageData = {
  title: "Brand Storytelling",

  subtitle: "Clear, Persuasive Business Writing for Growing Companies",

  number: "12",

  image: EDITORIAL.desk,

  imageAlt: "Editorial workspace for Brand Storytelling",

  accent: "gold",

  description:
    "People remember stories more than slogans. Brand storytelling shows why your company exists, what you stand for and how you help, in a way that builds a real connection. We write founder stories, mission statements, company histories and campaign narratives that make your brand feel human.",

  sections: [
    {
      heading: "Brand Storytelling",

      paragraphs: [
        "People remember stories more than slogans. Brand storytelling shows why your company exists, what you stand for and how you help, in a way that builds a real connection.",

        "We write founder stories, mission statements, company histories and campaign narratives that make your brand feel human.",
      ],
    },

    {
      heading: "Copywriting & Business Writing Services",

      paragraphs: [
        "Every business runs on words: your website, proposals, reports, press releases and manuals all shape how customers, partners and employees see you.",

        "At Wordsmith Squad, our writers produce professional business content that is clear, accurate and on brand. You keep full ownership, and your information stays confidential.",
      ],
    },

    {
      heading: "Website Copywriting",

      paragraphs: [
        "Your website has seconds to explain who you are, what you offer and why someone should choose you. Our website copywriting makes that message clear.",

        "We write home pages, service pages, about pages and calls to action that speak directly to your ideal customer.",
      ],
    },

    {
      heading: "Website Copywriting Services",

      paragraphs: [
        "Our website copywriting services can cover your whole site or only the pages that need the most help.",

        "We combine persuasive writing with SEO basics, such as keyword-focused headings, meta titles and descriptions, so your pages are written to convert and to be found.",
      ],
    },

    {
      heading: "Corporate Writing Services",

      paragraphs: [
        "Our corporate writing services cover the documents that keep a company running and well presented, including:",
      ],

      bullets: [
        "Company profiles and brochures",

        "Annual and impact reports",

        "Executive communications and internal messages",

        "Case studies and success stories",

        "Policy documents and corporate announcements",
      ],

      subsections: [
        {
          heading: "Professional Business Communication",

          paragraphs: [
            "We write in a professional tone that is clear, consistent and appropriate for your audience.",
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
            "Share your goals, audience and any existing materials.",
          ],
        },

        {
          heading: "02. Information Gathering",

          paragraphs: [
            "We collect details through a brief, interview or questionnaire.",
          ],
        },

        {
          heading: "03. Drafting",

          paragraphs: [
            "We write the document in your brand voice.",
          ],
        },

        {
          heading: "04. Review and Revisions",

          paragraphs: [
            "You give feedback and we refine it.",
          ],
        },

        {
          heading: "05. Final Delivery",

          paragraphs: [
            "You receive polished, ready-to-use content.",
          ],
        },
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Professional writers who understand business communication",

        "Brand-consistent voice across every document",

        "Accuracy and clear structure you can rely on",

        "Strict confidentiality for sensitive business information",

        "Full ownership of the finished documents",

        "Reliable deadlines",
      ],
    },

    {
      heading: "Ready to Strengthen Your Business Writing?",

      paragraphs: [
        "Get a Free Quote",
      ],
    },
  ],

  faqs: [
    {
      question: "Can you write about technical or regulated topics?",

      answer:
        "Yes, using your input and approved sources, and with your final review. For legal, medical or compliance documents, a qualified professional should check the content.",
    },

    {
      question: "Can you guarantee that a proposal will win the deal?",

      answer:
        "No. We make your proposal as strong and clear as possible, but the outcome depends on many factors.",
    },

    {
      question: "Do you work from my existing materials?",

      answer:
        "Yes. We can rewrite, reorganize or build from scratch.",
    },

    {
      question: "How much does it cost?",

      answer:
        "Pricing depends on length, research and document type.",
    },
  ],
};

export default function BrandStorytelling() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
