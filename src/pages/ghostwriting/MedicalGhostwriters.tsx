
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";
import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Medical Ghostwriters
 *
 * Source: Wordsmith Squad SEO for Website
 * Pages 9–13: Niche & Professional Ghostwriting
 *
 * Existing layout and image retained.
 */

const data: EditingPageData = {
  title: "Medical Ghostwriters",
  subtitle: "Specialized Ghostwriting for Healthcare Professionals",
  number: "01",
  image: EDITORIAL.desk,
  imageAlt: "Editorial workspace for medical ghostwriting",
  accent: "gold",

  description:
    "Healthcare professionals have deep expertise but little time to share it. A medical ghostwriter from our team can create patient education articles, practice blogs, health newsletters, physician thought leadership and website content that is accurate, clear and compassionate.",

  sections: [
    {
      heading: "Medical Ghostwriter",
      paragraphs: [
        "Healthcare professionals have deep expertise but little time to share it. A medical ghostwriter from our team can create patient education articles, practice blogs, health newsletters, physician thought leadership and website content that is accurate, clear and compassionate.",
      ],
      bullets: [
        "Patient education articles",
        "Practice blogs",
        "Health newsletters",
        "Physician thought leadership",
        "Website content",
      ],
    },
    {
      heading: "Specialized Ghostwriting for Professionals",
      paragraphs: [
        "Some writing needs more than good grammar. It needs industry knowledge, the right tone for the platform, and an understanding of the audience.",
        "At Wordsmith Squad, our niche ghostwriters pair subject-matter understanding with strong writing, so your content sounds like you and is credible in your field.",
      ],
    },
    {
      heading: "Medical Content Review and Approval",
      paragraphs: [
        "All medical content is written from your input and approved sources, and is reviewed by you before it goes live. It is not a substitute for medical advice.",
      ],
      bullets: [
        "Industry-aware writers",
        "Writing based on your input and approved sources",
        "Your voice, always",
        "Review and approval before publication",
        "Clear communication",
      ],
    },
    {
      heading: "Why Choose Wordsmith Squad for Niche Ghostwriting",
      paragraphs: [
        "We match your project to a writer who understands your field. We study how you speak and write before drafting.",
      ],
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
      heading: "Give Your Expertise a Stronger Voice",
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

export default function MedicalGhostwriters() {
  return <GhostwritingSubpageLayout data={data} />;
}
