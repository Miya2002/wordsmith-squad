
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Novel Writing Services
 *
 * Content based on the approved SEO document:
 * Wordsmith Squad SEO for Website — PDF pages 19–22.
 *
 * Uses the existing Ghostwriting layout.
 */

const data: EditingPageData = {
  title: "Novel Writing",
  subtitle: "Professional Fiction and Non-Fiction Writing Services",

  number: "01",
  image: EDITORIAL.desk,
  imageAlt: "Professional writer developing a novel manuscript",
  accent: "gold",

  description:
    "Turn your ideas into a finished manuscript with professional fiction and non-fiction writing services. Wordsmith Squad helps authors develop compelling stories and informative books while preserving their voice, ownership and creative vision.",

  sections: [
    {
      heading: "Fiction and Non-Fiction Writing Services",
      paragraphs: [
        "Whether you dream of publishing a gripping novel or sharing expert knowledge in a guide, the hardest part is turning an idea into a finished manuscript. At Wordsmith Squad, our team handles both fiction writing and non-fiction writing for authors who have the vision but not the time.",
        "You stay the credited author, keep 100% of the rights, and your project stays confidential. From developing an original storyline to organizing professional knowledge into an engaging book, we help bring your ideas to life."
      ],
    },

    {
      heading: "Professional Novel Writing Services",
      paragraphs: [
        "Our novel writing services take you from concept to completed manuscript. We build the plot, develop the characters, structure the chapters and write the full story in the voice and style you want.",
        "Our services are ideal for first-time authors, busy professionals and series writers who need to publish more often.",
        "Whether you have a complete storyline, an outline or simply a promising idea, we work with you to develop a manuscript that reflects your creative direction."
      ],
    },

    {
      heading: "Work With a Professional Novel Ghostwriter",
      paragraphs: [
        "Want a story that is yours but written by a professional? A novel ghostwriter from our team turns your premise, outline or rough notes into a complete, polished novel.",
        "You remain involved throughout the process and approve every stage. Our goal is to create a manuscript that reflects your ideas, preferred writing style and intended readership."
      ],
    },

    {
      heading: "Fiction Ghostwriting Across Multiple Genres",
      paragraphs: [
        "A fiction ghostwriter works across genres and adapts to your style, pacing and audience. Whether you need a standalone book or a full series, we keep the voice consistent from the first page to the last."
      ],
      bullets: [
        "Romance: Contemporary romance, historical romance and romantic comedy, with engaging chemistry, emotion and satisfying payoffs.",
        "Fantasy: Imaginative worlds with carefully developed magic systems, cultures, conflicts and characters that remain consistent across a series.",
        "Thriller: Suspenseful storytelling with strong pacing, tension and unexpected twists that keep readers turning pages.",
        "Mystery: Carefully planned clues, red herrings and reveals for cozy mysteries, detective fiction and crime series.",
        "Short stories: Focused, polished stories for anthologies, lead magnets, collections and writing contests.",
        "Poetry: Original poetry collections written in your voice for personal expression, gifts, memorials or publication."
      ],
    },

    {
      heading: "Non-Fiction Writing Services",
      paragraphs: [
        "A nonfiction ghostwriter turns your knowledge, research and experience into a clear, engaging book. We help organize your expertise into a manuscript built around your goals and your readers."
      ],
      bullets: [
        "Business books",
        "How-to guides",
        "Expert books",
        "History books",
        "Professional knowledge and experience-based books"
      ],
    },

    {
      heading: "Our Novel Writing Process",
      paragraphs: [
        "We follow a collaborative process that keeps you involved from the first conversation through the final manuscript."
      ],
      subsections: [
        {
          heading: "01. Free Consultation",
          paragraphs: [
            "Share your idea, preferred genre and goals. We discuss your vision and understand what you want your book to achieve."
          ]
        },
        {
          heading: "02. Writer Match",
          paragraphs: [
            "We pair you with a writer experienced in your genre and familiar with the type of manuscript you want to create."
          ]
        },
        {
          heading: "03. Outline and Voice Setup",
          paragraphs: [
            "We develop the outline and establish the writing direction. You review and approve the plan before drafting begins."
          ]
        },
        {
          heading: "04. Drafting and Feedback",
          paragraphs: [
            "Chapters are developed and shared with you as the manuscript progresses. Your feedback helps guide the story and its direction."
          ]
        },
        {
          heading: "05. Revisions and Delivery",
          paragraphs: [
            "We refine the manuscript through the agreed revisions and prepare the final work for publication."
          ]
        }
      ]
    },

    {
      heading: "Why Choose Wordsmith Squad?",
      paragraphs: [
        "Your book deserves a writing partner who understands your genre, respects your ideas and works collaboratively to bring your vision to life."
      ],
      bullets: [
        "Genre-specific writers who understand what readers expect.",
        "Full ownership and credit as the author.",
        "Strict confidentiality through a signed NDA.",
        "Regular updates and direct access to your writer.",
        "Original work written specifically for you."
      ]
    },

    {
      heading: "Ready to Start Your Book?",
      paragraphs: [
        "Your idea could become the next story readers cannot put down. Whether you are planning a novel, developing a fiction series or sharing your expertise through a non-fiction book, Wordsmith Squad is ready to help.",
        "Book your free consultation and tell us about the manuscript you want to create."
      ]
    }
  ],

  faqs: [
    {
      question: "Can you write an entire novel from my idea?",
      answer:
        "Yes. Many clients start with a short premise or a few notes. We develop the outline and write the full manuscript."
    },
    {
      question: "Can you write a series?",
      answer:
        "Yes. We keep characters, tone and storylines consistent across books."
    },
    {
      question: "Who owns the book?",
      answer:
        "You do. You receive full copyright and credit."
    },
    {
      question: "What does novel ghostwriting cost?",
      answer:
        "Pricing depends on the length of the manuscript, genre and project timeline. Contact us for a consultation and project-specific quote."
    }
  ]
};

export default function NovelWriting() {
  return <GhostwritingSubpageLayout data={data} />;
}
