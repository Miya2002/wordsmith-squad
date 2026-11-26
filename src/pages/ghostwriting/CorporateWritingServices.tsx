
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Corporate Writing Services
 *
 * Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 77–80
 *
 * Only page content has been updated.
 * Existing layout, styling, animations,
 * image and reusable components are retained.
 */

const data: EditingPageData = {
  title: "Corporate Writing Services",

  subtitle:
    "Clear, Persuasive Business Writing for Growing Companies",

  number: "09",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Corporate Writing Services",

  accent: "gold",

  description:
    "Every business runs on words: your website, proposals, reports, press releases and manuals all shape how customers, partners and employees see you. At Wordsmith Squad, our writers produce professional business content that is clear, accurate and on brand. You keep full ownership, and your information stays confidential.",

  sections: [
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
          heading:
            "Professional Business Communication",

          paragraphs: [
            "We write in a professional tone that is clear, consistent and appropriate for your audience.",
          ],
        },
      ],
    },

    {
      heading: "Business Proposal Writing",

      paragraphs: [
        "A winning proposal does more than list prices. Our business proposal writing explains the client’s problem, shows your solution, proves your experience and makes it easy to say yes.",

        "We write proposals for services, partnerships, bids and funding requests, formatted so they look professional and are easy to read.",
      ],
    },

    {
      heading: "Whitepaper Writing Services",

      paragraphs: [
        "Our whitepaper writing services turn expertise into in-depth, research-backed reports that build authority and generate leads.",

        "We work with your data, your subject experts and trusted sources to produce a clear and credible document.",

        "Whitepapers are especially valuable in technology, finance, healthcare, manufacturing and B2B sales.",
      ],
    },

    {
      heading: "Press Release Writing Services",

      paragraphs: [
        "Our press release writing services help you announce launches, partnerships, awards, hires and events in the professional format journalists expect.",

        "We craft a strong headline, a newsworthy angle and clean, factual copy.",

        "We can’t promise media coverage, but a well-written release improves your chances of getting noticed.",
      ],
    },

    {
      heading: "Lead Magnet Writing",

      paragraphs: [
        "A strong lead magnet writing service gives you something valuable to offer in exchange for an email address: a checklist, short guide, template, mini ebook, report or quiz.",

        "We create lead magnets that solve one real problem for your ideal customer and build trust.",

        "We can also write the landing page and the email sequence that follows.",
      ],
    },

    {
      heading: "Manuals",

      paragraphs: [
        "Clear manuals reduce support requests and make customers and employees more confident.",

        "We write user manuals, training manuals, employee handbooks, standard operating procedures and product instructions in plain language, organized so people can find answers fast.",
      ],

      bullets: [
        "User manuals",

        "Training manuals",

        "Employee handbooks",

        "Standard operating procedures",

        "Product instructions",
      ],
    },

    {
      heading: "Guide Book",

      paragraphs: [
        "A well-made guide book teaches readers how to do something and positions you as the expert.",

        "We write practical guide books for businesses, nonprofits, travel and hospitality, education and training, with a clear structure, step-by-step directions and useful examples.",

        "A guide book can also double as a powerful lead magnet or a paid product.",
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
      heading:
        "Ready to Strengthen Your Business Writing?",

      paragraphs: [
        "Get a Free Quote",
      ],
    },
  ],

  faqs: [
    {
      question:
        "Can you write about technical or regulated topics?",

      answer:
        "Yes, using your input and approved sources, and with your final review. For legal, medical or compliance documents, a qualified professional should check the content.",
    },

    {
      question:
        "Can you guarantee that a proposal will win the deal?",

      answer:
        "No. We make your proposal as strong and clear as possible, but the outcome depends on many factors.",
    },

    {
      question:
        "Do you work from my existing materials?",

      answer:
        "Yes. We can rewrite, reorganize or build from scratch.",
    },

    {
      question:
        "How much does it cost?",

      answer:
        "Pricing depends on length, research and document type.",
    },
  ],
};

export default function CorporateWritingServices() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
