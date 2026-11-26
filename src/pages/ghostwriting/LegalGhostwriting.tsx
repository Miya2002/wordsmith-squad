
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Legal Ghostwriting
 *
 * Content source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 9–13
 *
 * Original layout, styling, animations,
 * page number, image and component structure retained.
 */

const data: EditingPageData = {
  title: "Legal Ghostwriting",

  subtitle: "Professional Legal Ghostwriting Services",

  number: "13",

  image: EDITORIAL.desk,

  imageAlt: "Editorial workspace for Legal Ghostwriting",

  accent: "gold",

  description:
    "Law firms and attorneys often need strong content to educate clients and win trust. Our legal ghostwriting team writes attorney bios, blog posts, client guides, newsletters, thought leadership articles and website content that explain complex topics in plain English.",

  sections: [
    {
      heading: "Legal Ghostwriting",

      paragraphs: [
        "Law firms and attorneys often need strong content to educate clients and win trust. Our legal ghostwriting team writes attorney bios, blog posts, client guides, newsletters, thought leadership articles and website content that explain complex topics in plain English.",
      ],
    },

    {
      heading:
        "Specialized Ghostwriting for Professionals, Leaders and Organizations in the USA",

      paragraphs: [
        "Some writing needs more than good grammar. It needs industry knowledge, the right tone for the platform, and an understanding of the audience. At Wordsmith Squad, our niche ghostwriters pair subject-matter understanding with strong writing, so your content sounds like you and is credible in your field.",

        "From executive thought leadership to social media, from technical documents to nonprofit storytelling, our team writes in your voice while you keep full credit and complete confidentiality.",
      ],
    },

    {
      heading: "Legal Ghostwriting Services",

      paragraphs: [
        "Law firms and attorneys often need strong content to educate clients and win trust.",
      ],

      bullets: [
        "Attorney bios",
        "Blog posts",
        "Client guides",
        "Newsletters",
        "Thought leadership articles",
        "Website content",
      ],
    },

    {
      heading: "Legal Content Review and Approval",

      paragraphs: [
        "We write educational and marketing content, not legal advice. All content is reviewed and approved by you or your licensed attorney before publication.",
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
        "Is ghostwriting for legal or medical content allowed?",

      answer:
        "Yes, for educational and marketing content that you review and approve. We do not provide legal or medical advice.",
    },

    {
      question:
        "Do you offer ongoing monthly content plans?",

      answer:
        "Many clients choose monthly packages for LinkedIn, social media and email, which keep content consistent.",
    },

    {
      question:
        "Will anyone know I used a ghostwriter?",

      answer:
        "No. We sign an NDA, and you are the credited author.",
    },
  ],
};

export default function LegalGhostwriting() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
