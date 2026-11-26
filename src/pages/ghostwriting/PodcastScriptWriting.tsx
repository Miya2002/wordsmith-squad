
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Podcast Script Writing
 *
 * Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 26–28
 *
 * Existing layout, styling, animations,
 * image and reusable components retained.
 *
 * Content uses approved PDF wording.
 */

const data: EditingPageData = {
  title: "Podcast Script Writing",

  subtitle: "Professional Podcast Script Writing Services",

  number: "11",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Podcast Script Writing",

  accent: "gold",

  description:
    "Our podcast script writing service covers episode outlines, intros, interview questions, solo episode scripts and show notes. We help you sound organized, confident and engaging.",

  sections: [
    {
      heading: "Podcast Script Writing",

      paragraphs: [
        "Our podcast script writing service covers episode outlines, intros, interview questions, solo episode scripts and show notes. We help you sound organized, confident and engaging.",
      ],

      bullets: [
        "Episode outlines",
        "Intros",
        "Interview questions",
        "Solo episode scripts",
        "Show notes",
      ],
    },

    {
      heading:
        "Professional Writing for Screen, Stage, Audio and Page",

      paragraphs: [
        "Some stories are meant to be heard, watched or performed. At Wordsmith Squad, our writers create scripts, songs, speeches and comics that sound right out loud and hold attention. You keep the rights and the credit.",
      ],
    },

    {
      heading: "Script Writing Services",

      paragraphs: [
        "Our script writing services cover scripts for video, ads, explainers, training, brand films and short-form content. We write clear, structured scripts with the right tone, timing and call to action.",
      ],
    },

    {
      heading: "Voiceover Script Writing",

      paragraphs: [
        "Our voiceover script writing team writes clean, spoken-word scripts for commercials, explainer videos, audiobooks, e-learning, IVR systems and documentaries, timed to fit your audio length.",
      ],
    },

    {
      heading: "Webinar Script Writing",

      paragraphs: [
        "Our webinar script writing service helps you present with clarity and keep your audience until the end. We create the opening, slide-by-slide talking points, stories and a strong call to action.",
      ],
    },

    {
      heading: "How It Works",

      subsections: [
        {
          heading: "01. Free Consultation",

          paragraphs: [
            "Share your project, format and audience.",
          ],
        },

        {
          heading: "02. Writer Match",

          paragraphs: [
            "We assign a writer experienced in your format.",
          ],
        },

        {
          heading: "03. Outline or Treatment",

          paragraphs: [
            "You approve the plan first.",
          ],
        },

        {
          heading: "04. Draft and Feedback",

          paragraphs: [
            "You review and request changes.",
          ],
        },

        {
          heading: "05. Final Delivery",

          paragraphs: [
            "You receive a polished script ready to use.",
          ],
        },
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Format-specific writers who understand pacing and structure",

        "Full rights to your finished work",

        "Confidentiality through a signed NDA",

        "Writing made to be spoken, tested for rhythm and flow",

        "Revisions until you are satisfied",
      ],
    },

    {
      heading: "Ready to Bring Your Idea to Life?",

      paragraphs: [
        "Book Your Free Consultation",
      ],
    },
  ],

  faqs: [
    {
      question: "Who owns the finished script or song?",

      answer:
        "You do. You receive full ownership.",
    },

    {
      question: "What does it cost?",

      answer:
        "It depends on length and format.",
    },
  ],
};

export default function PodcastScriptWriting() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
