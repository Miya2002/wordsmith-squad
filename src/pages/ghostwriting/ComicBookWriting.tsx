
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Comic Book Writing
 *
 * Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 25–28
 *
 * Layout, image, colors, animations,
 * and reusable components remain unchanged.
 */

const data: EditingPageData = {
  title: "Comic Book Writing",

  subtitle:
    "Comic Book Writing Services",

  number: "05",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Comic Book Writing",

  accent: "gold",

  description:
    "Our comic book writing services help you plan and write panel-by-panel scripts, with story arcs, dialogue and pacing built for artists. Ideal for graphic novels, webcomics and series launches.",

  sections: [
    {
      heading: "Comic Book Writing Services",

      paragraphs: [
        "Our comic book writing services help you plan and write panel-by-panel scripts, with story arcs, dialogue and pacing built for artists.",

        "Ideal for graphic novels, webcomics and series launches.",
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
        "Our script writing services cover scripts for video, ads, explainers, training, brand films and short-form content.",

        "We write clear, structured scripts with the right tone, timing and call to action.",
      ],
    },

    {
      heading: "Screenwriting Services",

      paragraphs: [
        "Our broader screenwriting services include treatments, outlines, beat sheets, rewrites and script polish.",

        "Whether you are starting from scratch or fixing a draft, we help you shape a script that is ready to pitch.",
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
      question:
        "Who owns the finished script or song?",

      answer:
        "You do. You receive full ownership.",
    },

    {
      question:
        "What does it cost?",

      answer:
        "It depends on length and format.",
    },
  ],
};

export default function ComicBookWriting() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
