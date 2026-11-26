
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Instagram Ghostwriting
 *
 * SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 9–13
 *
 * Existing layout, animations, styling,
 * page number, image and components retained.
 *
 * All content is sourced from the approved PDF.
 */

const data: EditingPageData = {
  title: "Instagram Ghostwriting",

  subtitle: "Professional Instagram Ghostwriting Services",

  number: "15",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Instagram Ghostwriting",

  accent: "gold",

  description:
    "Our Instagram ghostwriting team writes captions, carousel text, bios and story scripts that match your brand, tone and visual style.",

  sections: [
    {
      heading: "Instagram Ghostwriting",

      paragraphs: [
        "Our Instagram ghostwriting team writes captions, carousel text, bios and story scripts that match your brand, tone and visual style.",
      ],

      bullets: [
        "Captions",
        "Carousel text",
        "Bios",
        "Story scripts",
      ],
    },

    {
      heading: "Social Media and Email Ghostwriting",

      paragraphs: [
        "Consistency builds an audience, but posting daily is exhausting. We handle the writing so you can stay visible while you focus on your work.",
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
      heading: "Twitter Ghostwriting",

      paragraphs: [
        "Our Twitter ghostwriting service (now also known as X) delivers sharp posts, threads and engagement replies that grow your following and strengthen your voice.",
      ],
    },

    {
      heading: "Facebook Ghostwriting",

      paragraphs: [
        "With Facebook ghostwriting, we create page posts, group content, event promotions and community updates that spark conversation and keep your audience engaged.",
      ],
    },

    {
      heading: "Email Ghostwriting",

      paragraphs: [
        "Email still drives some of the strongest returns in marketing. Our email ghostwriting service covers newsletters, welcome sequences, sales campaigns, launch emails and personal outreach written in your voice, designed to be opened, read and acted on.",
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

    {
      question:
        "Can a ghostwriter write my LinkedIn posts so they sound like me?",

      answer:
        "Yes. We study your past writing, speaking style and opinions, then write posts that reflect your voice and expertise.",
    },
  ],
};

export default function InstagramGhostwriting() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
