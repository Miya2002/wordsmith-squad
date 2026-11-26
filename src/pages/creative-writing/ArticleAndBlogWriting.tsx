
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Article Writing Services
 *
 * Source: Approved Wordsmith Squad SEO PDF
 *
 * Existing layout retained.
 */

const data: EditingPageData = {
  title: "Article Writing",

  subtitle:
    "Professional Article Writing Services for Businesses and Publishers",

  number: "06",

  image: EDITORIAL.desk,

  imageAlt: "Professional article writing and editorial workspace",

  accent: "gold",

  description:
    "Our article writing covers thought leadership pieces, industry features, how-to guides, opinion articles and publication submissions. We write in a professional, readable tone, with accurate research and a clear point of view.",

  sections: [
    {
      heading: "Professional Article Writing Services",

      paragraphs: [
        "Our article writing services suit companies, consultants, executives and publishers who need regular, high-quality pieces.",

        "We can provide a one-off article or an ongoing monthly schedule, and we can ghostwrite under your byline.",
      ],
    },

    {
      heading: "Article Writing",

      paragraphs: [
        "Our article writing covers thought leadership pieces, industry features, how-to guides, opinion articles and publication submissions.",

        "We write in a professional, readable tone, with accurate research and a clear point of view.",
      ],

      bullets: [
        "Thought leadership pieces",
        "Industry features",
        "How-to guides",
        "Opinion articles",
        "Publication submissions",
      ],
    },

    {
      heading: "Research and Topic Planning",

      paragraphs: [
        "Every article begins with a clear understanding of its audience and purpose. We research the topic, identify useful information and organize the material into a logical structure.",

        "Our approach keeps the article accurate, readable and relevant to the people it is intended to reach.",
      ],
    },

    {
      heading: "Article Writing for Businesses and Publishers",

      paragraphs: [
        "Companies, consultants, executives and publishers often need a consistent flow of professional articles.",

        "We can create individual pieces or work to an ongoing monthly schedule. Where required, articles can be ghostwritten under your byline.",
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
      heading: "Ready to Create Professional Articles?",

      paragraphs: [
        "Whether you need a single article or an ongoing monthly content schedule, Wordsmith Squad can help you communicate your ideas clearly and professionally.",

        "Get in touch to discuss your article writing requirements and receive a free content quote.",
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

export default function ArticleAndBlogWriting() {
  return <EditingSubpageLayout data={data} />;
}
