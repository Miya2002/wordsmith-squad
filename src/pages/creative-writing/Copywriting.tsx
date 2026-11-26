
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Copywriting Services
 *
 * Source:
 * Approved Wordsmith Squad SEO PDF
 * Sections:
 * - Content, Blog & SEO Writing Services
 * - Copywriting & Business Writing Services
 *
 * Reuses the existing shared layout.
 * No new styles or animations required.
 */

const data: EditingPageData = {
  title: "Copywriting",

  subtitle:
    "Clear, Persuasive Business Writing for Growing Companies",

  number: "01",

  image: EDITORIAL.desk,

  imageAlt:
    "Professional workspace for copywriting and business content",

  accent: "gold",

  description:
    "Copywriting is writing designed to get people to act: to buy, book, subscribe or call. Our copywriters write headlines, landing pages, ads, product descriptions and sales emails with a clear message and a strong call to action. Copy can be warm or bold, but it should always be honest.",

  sections: [
    {
      heading: "Professional Copywriting Services",

      paragraphs: [
        "Every business runs on words: your website, proposals, reports, press releases and manuals all shape how customers, partners and employees see you.",

        "At Wordsmith Squad, our writers produce professional business content that is clear, accurate and on brand. You keep full ownership, and your information stays confidential.",
      ],
    },

    {
      heading: "Copywriting",

      paragraphs: [
        "Copywriting is writing designed to get people to act: to buy, book, subscribe or call.",

        "Our copywriters write headlines, landing pages, ads, product descriptions and sales emails with a clear message and a strong call to action.",

        "Copy can be warm or bold, but it should always be honest.",
      ],

      bullets: [
        "Headlines",
        "Landing pages",
        "Advertisements",
        "Product descriptions",
        "Sales emails",
        "Calls to action",
      ],
    },

    {
      heading: "Website Copywriting",

      paragraphs: [
        "Your website has seconds to explain who you are, what you offer and why someone should choose you.",

        "Our website copywriting makes that message clear. We write home pages, service pages, about pages and calls to action that speak directly to your ideal customer.",
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
      heading: "Content Writing",

      paragraphs: [
        "Our content writing service creates the material that fills your website, blog, emails and social channels.",

        "We research your topic, shape the structure and write copy that is useful to readers and consistent with your brand.",

        "Good content writing answers real questions, which is what earns attention from both readers and search engines.",
      ],
    },

    {
      heading: "Writing Services",

      paragraphs: [
        "Our writing services cover every kind of content a business, author or professional needs.",

        "From a single article to a full monthly content plan, we match you with a writer who understands your industry and your audience.",

        "Strong writing is clear before it is clever. Every piece we create begins with one question: who is this for, and what should they do after reading it?",
      ],
    },

    {
      heading: "How It Works",

      subsections: [
        {
          heading: "01. Free Consultation",
          paragraphs: [
            "Tell us about your business, audience and goals.",
          ],
        },
        {
          heading: "02. Strategy and Topics",
          paragraphs: [
            "We suggest content types, topics and keywords.",
          ],
        },
        {
          heading: "03. Writing",
          paragraphs: [
            "Your writer drafts the content in your voice.",
          ],
        },
        {
          heading: "04. Review",
          paragraphs: [
            "You give feedback and we revise.",
          ],
        },
        {
          heading: "05. Delivery",
          paragraphs: [
            "You receive final, ready-to-publish content.",
          ],
        },
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Writers who understand your industry",
        "SEO-aware content built for people first",
        "Original, human-written work",
        "Your brand voice applied consistently",
        "Full ownership of everything we write",
        "Strict confidentiality through a signed NDA",
      ],
    },

    {
      heading: "Ready to Create Content That Works?",

      paragraphs: [
        "Good content builds trust, brings visitors to your website and turns them into customers.",

        "At Wordsmith Squad, our team creates clear, engaging, search-friendly content in your brand’s voice, so you can stay focused on running your business.",
      ],
    },
  ],

  faqs: [
    {
      question: "Do you write for my industry?",
      answer:
        "We match you with a writer who has relevant knowledge. For specialized topics, we work from your input and approved sources.",
    },

    {
      question: "Can you guarantee Google rankings?",
      answer:
        "No. Rankings depend on many factors. We create high-quality, well-structured content that gives you the best chance.",
    },

    {
      question: "Can you publish the content for me?",
      answer: "Yes.",
    },

    {
      question: "How much does it cost?",
      answer:
        "Pricing depends on word count and content type.",
    },
  ],
};

export default function Copywriting() {
  return <EditingSubpageLayout data={data} />;
}
