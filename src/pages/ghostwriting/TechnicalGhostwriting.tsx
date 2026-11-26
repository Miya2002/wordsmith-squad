
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Technical Ghostwriting
 *
 * SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 9–13
 *
 * Only page content has been updated.
 * Existing layout, styling, animations,
 * image and reusable components are retained.
 */

const data: EditingPageData = {
  title: "Technical Ghostwriting",

  subtitle:
    "Specialized Ghostwriting for Professionals, Leaders and Organizations in the USA",

  number: "10",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Technical Ghostwriting",

  accent: "gold",

  description:
    "Great technology deserves great explanation. Our technical ghostwriting team helps engineers, software founders and IT leaders write white papers, case studies, documentation overviews, how-to guides, technical blog posts and industry articles that experts respect and non-experts can follow.",

  sections: [
    {
      heading: "Technical Ghostwriting",

      paragraphs: [
        "Great technology deserves great explanation. Our technical ghostwriting team helps engineers, software founders and IT leaders write white papers, case studies, documentation overviews, how-to guides, technical blog posts and industry articles that experts respect and non-experts can follow.",
      ],
    },

    {
      heading: "Technical Ghostwriting Services",

      paragraphs: [
        "Some writing needs more than good grammar. It needs industry knowledge, the right tone for the platform, and an understanding of the audience. At Wordsmith Squad, our niche ghostwriters pair subject-matter understanding with strong writing, so your content sounds like you and is credible in your field.",
      ],

      bullets: [
        "White papers",
        "Case studies",
        "Documentation overviews",
        "How-to guides",
        "Technical blog posts",
        "Industry articles",
      ],
    },

    {
      heading: "Who Can Benefit From Technical Ghostwriting?",

      paragraphs: [
        "Our technical ghostwriting services are designed for professionals and companies that need to communicate specialized information clearly.",
      ],

      bullets: [
        "SaaS companies",
        "Engineers",
        "Cybersecurity firms",
        "AI startups",
        "Manufacturers",
        "IT consultants",
      ],
    },

    {
      heading:
        "Specialized Ghostwriting for Professionals, Leaders and Organizations in the USA",

      paragraphs: [
        "From executive thought leadership to social media, from technical documents to nonprofit storytelling, our team writes in your voice while you keep full credit and complete confidentiality.",
      ],
    },

    {
      heading:
        "Why Choose Wordsmith Squad for Niche Ghostwriting",

      bullets: [
        "Industry-aware writers. We match your project to a writer who understands your field.",

        "Your voice, always. We study how you speak and write before drafting.",

        "Full ownership. You hold all rights to everything we create.",

        "Strict confidentiality. Every project is covered by an NDA.",

        "Review and approval. Nothing goes out without your sign-off, which matters most for legal, medical and scientific content.",

        "Clear communication. Regular updates and easy access to your writer.",

        "Built for US audiences. American English and US market expectations.",
      ],
    },

    {
      heading: "How It Works",

      subsections: [
        {
          heading: "01. Free Consultation",

          paragraphs: [
            "Tell us your goals, audience and platform.",
          ],
        },

        {
          heading: "02. Writer Match",

          paragraphs: [
            "We pair you with a specialist for your niche.",
          ],
        },

        {
          heading: "03. Voice and Topic Discovery",

          paragraphs: [
            "Interviews, samples and source material guide the writing.",
          ],
        },

        {
          heading: "04. Draft and Review",

          paragraphs: [
            "You review, request changes and approve.",
          ],
        },

        {
          heading: "05. Publish and Repeat",

          paragraphs: [
            "We deliver final content and keep it consistent over time.",
          ],
        },
      ],
    },

    {
      heading: "Let's Give Your Expertise a Stronger Voice",

      paragraphs: [
        "Whether you need a LinkedIn ghostwriter for your personal brand, CEO ghostwriting for your leadership message, or content for a specialized field, Wordsmith Squad is ready to help.",
      ],
    },
  ],

  faqs: [
    {
      question:
        "Will anyone know I used a ghostwriter?",

      answer:
        "No. We sign an NDA, and you are the credited author.",
    },

    {
      question:
        "Do you offer ongoing monthly content plans?",

      answer:
        "Many clients choose monthly packages for LinkedIn, social media and email, which keep content consistent.",
    },

    {
      question:
        "Do you write for peer-reviewed journals?",

      answer:
        "We support research communication and plain-language writing, and we follow ethical authorship standards.",
    },
  ],
};

export default function TechnicalGhostwriting() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
