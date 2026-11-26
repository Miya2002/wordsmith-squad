
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Scientific Ghostwriting
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 9–13
 *
 * Existing page layout, styling, animations,
 * image and reusable components are retained.
 */

const data: EditingPageData = {
  title: "Scientific Ghostwriting",

  subtitle:
    "Specialized Ghostwriting for Professionals, Leaders and Organizations in the USA",

  number: "18",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Scientific Ghostwriting",

  accent: "gold",

  description:
    "Researchers, biotech founders and science-based companies often struggle to explain their work to non-specialists. Our scientific ghostwriting service turns research and data into clear articles, white papers, grant support content, summaries for investors and plain-language explainers for the public.",

  sections: [
    {
      heading: "Scientific Ghostwriting",

      paragraphs: [
        "Researchers, biotech founders and science-based companies often struggle to explain their work to non-specialists. Our scientific ghostwriting service turns research and data into clear articles, white papers, grant support content, summaries for investors and plain-language explainers for the public.",
      ],
    },

    {
      heading: "Scientific Ghostwriting Services",

      paragraphs: [
        "Our scientific ghostwriting service turns research and data into clear articles, white papers, grant support content, summaries for investors and plain-language explainers for the public.",
      ],

      bullets: [
        "Articles",
        "White papers",
        "Grant support content",
        "Summaries for investors",
        "Plain-language explainers for the public",
      ],
    },

    {
      heading: "Ethical Authorship Practices",

      paragraphs: [
        "We follow ethical authorship practices and do not misrepresent authorship in peer-reviewed publications. Ask us how we support your research writing within journal and institutional guidelines.",
      ],
    },

    {
      heading:
        "Specialized Ghostwriting for Professionals, Leaders and Organizations in the USA",

      paragraphs: [
        "Some writing needs more than good grammar. It needs industry knowledge, the right tone for the platform, and an understanding of the audience.",

        "At Wordsmith Squad, our niche ghostwriters pair subject-matter understanding with strong writing, so your content sounds like you and is credible in your field.",

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
        "Do you write for peer-reviewed journals?",

      answer:
        "We support research communication and plain-language writing, and we follow ethical authorship standards.",
    },

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
  ],
};

export default function ScientificGhostwriting() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
