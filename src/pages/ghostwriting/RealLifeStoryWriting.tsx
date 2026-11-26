
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Real Life Story Writing
 *
 * Content source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 23–25
 *
 * Existing layout, animations, styling
 * and image reference are retained.
 */

const data: EditingPageData = {
  title: "Real Life Story Writing",

  subtitle:
    "Memoir, Biography & Self-Help Writing Services",

  number: "07",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Real Life Story Writing",

  accent: "gold",

  description:
    "Some of the most powerful books come from real experience. At Wordsmith Squad, we help people capture their stories and share their knowledge in books that readers trust. You keep the credit and the rights, and we handle the writing.",

  sections: [
    {
      heading:
        "Turning Real Lives and Real Expertise Into Powerful Books",

      paragraphs: [
        "Some of the most powerful books come from real experience. At Wordsmith Squad, we help people capture their stories and share their knowledge in books that readers trust. You keep the credit and the rights, and we handle the writing.",
      ],
    },

    {
      heading: "Real Life Story Writing",

      paragraphs: [
        "You don’t need to be famous to have a story worth reading. Our real life story writing service is for everyday people with remarkable experiences: survival, love, loss, faith, immigration, recovery, success.",

        "We shape your experience into a book with a clear arc and real heart.",
      ],
    },

    {
      heading: "Memoir Writing Services",

      paragraphs: [
        "Our memoir writing services help you turn your memories into a story with emotion, structure and purpose.",

        "We interview you, organize your key moments and write in a voice that sounds like you.",

        "Memoirs work well for family legacies, overcoming hardship, career journeys and personal transformation.",
      ],
    },

    {
      heading: "Autobiography Writing Services",

      paragraphs: [
        "Want the full story of your life? Our autobiography writing services cover your whole journey, from early years to today, in a well-paced narrative.",

        "We help you decide what to include, what to leave out and how to tell it honestly.",
      ],
    },

    {
      heading: "Biography Writing Services",

      paragraphs: [
        "Writing about someone else’s life takes research and care. Our biography writing services cover founders, community leaders, family members, and public figures.",

        "We gather interviews, records and details to tell an accurate, engaging story.",
      ],
    },

    {
      heading: "Biography Writers for Hire",

      paragraphs: [
        "Looking for biography writers for hire? Our writers handle everything from a short tribute book to a full-length biography.",

        "Whether the subject is a loved one, a business leader or a historical figure, we build the book around what makes the person memorable.",
      ],
    },

    {
      heading: "Self Help Book Writing",

      paragraphs: [
        "If your work helps people change their lives, a book extends your reach.",

        "Our self help book writing service turns your method, lessons and client stories into clear, practical, encouraging chapters.",

        "Ideal for coaches, therapists, speakers and wellness experts.",
      ],
    },

    {
      heading: "Business Book Writing",

      paragraphs: [
        "A book is one of the strongest credibility tools for a professional.",

        "Our business book writing service transforms your frameworks, case studies and experience into a book that attracts clients, speaking invitations and press.",
      ],
    },

    {
      heading: "Our Process",

      subsections: [
        {
          heading: "01. Free Consultation",

          paragraphs: [
            "Tell us about your story or message.",
          ],
        },

        {
          heading: "02. Writer Match",

          paragraphs: [
            "We pair you with a writer who suits your subject and style.",
          ],
        },

        {
          heading: "03. Interviews and Outline",

          paragraphs: [
            "We gather your story and plan the book.",
          ],
        },

        {
          heading: "04. Drafting and Review",

          paragraphs: [
            "You read, comment and guide the direction.",
          ],
        },

        {
          heading: "05. Final Manuscript",

          paragraphs: [
            "You receive a polished, publish-ready book.",
          ],
        },
      ],
    },

    {
      heading: "Why Authors Choose Us",

      bullets: [
        "Your voice on every page",

        "Full ownership and credit",

        "Total confidentiality with an NDA",

        "Sensitive handling of personal and emotional stories",

        "Clear communication from start to finish",
      ],
    },

    {
      heading: "Ready to Tell Your Story?",

      paragraphs: [
        "Book Your Free Consultation",
      ],
    },
  ],

  faqs: [
    {
      question:
        "Do I need to be a good writer to write a memoir?",

      answer:
        "No. You share the story through interviews or notes, and we write it.",
    },

    {
      question:
        "Can you write a book about someone else, like a parent or founder?",

      answer:
        "Yes. We write tribute books and biographies and can interview family, friends and colleagues.",
    },

    {
      question:
        "Can you include difficult or private moments?",

      answer:
        "Yes. We handle sensitive topics with care, and you control what stays in the book.",
    },

    {
      question: "What does it cost?",

      answer:
        "It depends on length and research.",
    },
  ],
};

export default function RealLifeStoryWriting() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
