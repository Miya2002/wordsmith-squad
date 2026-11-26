
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Manuscript Editing
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 32–35
 *
 * Existing layout, image, styling, animations
 * and reusable components remain unchanged.
 */

const data: EditingPageData = {
  title: "Manuscript Editing",

  subtitle:
    "Professional Book Editing Services for Authors in the USA",

  number: "01",

  image: EDITORIAL.desk,

  imageAlt: "Editorial workspace for Manuscript Editing",

  accent: "gold",

  description:
    "Every strong book has been edited, often several times. Editing is what turns a good draft into a book that readers finish, recommend and review well. At Wordsmith Squad, our editors work with you at every stage, from big-picture story and structure to the last comma. You stay in control of your voice and your book.",

  sections: [
    {
      heading: "Book Editing Services",

      paragraphs: [
        "Our book editing services cover the complete path from rough draft to publish-ready manuscript. Not sure what your book needs? We review your manuscript and recommend the right level of editing, so you only pay for what will make a difference.",
      ],
    },

    {
      heading: "Manuscript Editing",

      paragraphs: [
        "Manuscript editing improves your book at every level: story, structure, style, grammar and consistency. We read your work the way a reader and an agent would, flag what is weakening it and fix problems while keeping your voice intact.",
      ],
    },

    {
      heading: "Manuscript Editing Services",

      paragraphs: [
        "Our manuscript editing services are built for authors preparing to self-publish, submit to agents or send work to a traditional publisher. We give you a clean, professional manuscript that makes a strong first impression.",
      ],
    },

    {
      heading: "Developmental Editing",

      paragraphs: [
        "Developmental editing looks at the big picture. We examine plot, pacing, structure, character development, argument flow and whether your book delivers on its promise.",

        "This is the first stage of editing and often the most valuable, because it catches problems that no amount of polishing can fix later.",

        "You receive: A detailed editorial letter, notes throughout the manuscript and practical advice on revisions.",
      ],
    },

    {
      heading: "Developmental Editor",

      paragraphs: [
        "Working with a developmental editor is like having an experienced partner for your book. Our editors give honest, constructive feedback, explain the reasons behind each suggestion and help you see your manuscript through a reader’s eyes. They guide you without rewriting your story.",
      ],
    },

    {
      heading: "Line Editing",

      paragraphs: [
        "Line editing works at the sentence and paragraph level. We refine flow, rhythm, word choice, tone and clarity so your prose reads smoothly and sounds like the best version of you.",

        "If your story is strong but the writing feels uneven, this is the stage for you.",
      ],
    },

    {
      heading: "Copy Editing",

      paragraphs: [
        "Copy editing corrects grammar, spelling, punctuation, usage and consistency. We check names, timelines, capitalization, hyphenation and style, following standards such as the Chicago Manual of Style, the usual standard for US book publishing.",
      ],
    },

    {
      heading: "Copyediting Services",

      paragraphs: [
        "Our copyediting services give your manuscript the technical polish readers and reviewers expect. Errors in a published book can cost you reviews and credibility, and professional copyediting prevents that.",
      ],
    },

    {
      heading: "Fiction Editing Services",

      paragraphs: [
        "Our fiction editing services help novelists strengthen plot, pacing, dialogue, point of view and character arcs.",

        "We edit across genres, including romance, fantasy, thriller, mystery and literary fiction, with an editor who understands what your readers expect.",
      ],
    },

    {
      heading: "Memoir Editing",

      paragraphs: [
        "Memoir editing takes special care. Your story is personal, and the edit should protect your voice and honesty while strengthening the structure and emotional impact.",

        "We help you decide what belongs in the book, tighten the narrative and make your real experience land with readers.",
      ],
    },

    {
      heading: "Book Editor for Hire",

      paragraphs: [
        "Looking for a book editor for hire? Wordsmith Squad matches you with an editor who knows your genre, understands your goals and respects your voice.",

        "We work on novels, memoirs, business books, self-help, children’s books and more, and we are happy to start with a sample edit.",
      ],
    },

    {
      heading: "Which Type of Editing Do You Need?",

      paragraphs: [
        "Most books benefit from all three stages in this order. If you are unsure, we are happy to advise.",
      ],

      subsections: [
        {
          heading: "Developmental Editing",

          paragraphs: [
            "What it fixes: Structure, plot, pacing, argument.",

            "Best for: First or early drafts.",
          ],
        },

        {
          heading: "Line Editing",

          paragraphs: [
            "What it fixes: Style, flow, tone, sentence quality.",

            "Best for: Strong drafts with uneven prose.",
          ],
        },

        {
          heading: "Copy Editing",

          paragraphs: [
            "What it fixes: Grammar, punctuation, consistency.",

            "Best for: Nearly finished manuscripts.",
          ],
        },
      ],
    },

    {
      heading: "How It Works",

      subsections: [
        {
          heading:
            "01. Free Consultation and Manuscript Review",

          paragraphs: [
            "Tell us about your book and goals.",
          ],
        },

        {
          heading: "02. Editor Match",

          paragraphs: [
            "We pair you with an editor suited to your genre.",
          ],
        },

        {
          heading: "03. Editing",

          paragraphs: [
            "Your editor works through the manuscript at the agreed level.",
          ],
        },

        {
          heading: "04. Review and Revisions",

          paragraphs: [
            "You review the changes and notes and ask questions.",
          ],
        },

        {
          heading: "05. Final Manuscript",

          paragraphs: [
            "You receive a polished manuscript, ready for the next step.",
          ],
        },
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Experienced editors matched to your genre",

        "Your voice protected, never replaced",

        "Clear, constructive feedback you can act on",

        "Strict confidentiality through a signed NDA",

        "Full ownership of your manuscript",

        "Built for US publishing standards and American English",
      ],
    },

    {
      heading: "Ready to Get Your Manuscript Edited?",

      paragraphs: [
        "Get a Free Editing Quote",
      ],
    },
  ],

  faqs: [
    {
      question:
        "What is the difference between developmental editing, line editing and copy editing?",

      answer:
        "Developmental editing fixes the big picture, line editing improves sentences and style, and copy editing corrects grammar and consistency.",
    },

    {
      question: "How long does editing take?",

      answer:
        "It depends on length and editing level.",
    },

    {
      question: "Will you change my writing style?",

      answer:
        "No. We improve clarity and flow while keeping your voice.",
    },

    {
      question: "Do you offer proofreading?",

      answer:
        "Proofreading is the final check after formatting.",
    },

    {
      question: "How much does editing cost?",

      answer:
        "Pricing depends on word count and editing type.",
    },
  ],
};

export default function ManuscriptEditing() {
  return <EditingSubpageLayout data={data} />;
}
