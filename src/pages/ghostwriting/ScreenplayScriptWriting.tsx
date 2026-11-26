
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/*
 * WORDSMITH SQUAD
 * Screenplay Script Writing
 *
 * Approved SEO content:
 * Wordsmith Squad SEO for Website
 * PDF pages 25–28
 *
 * Existing layout, styling and animations retained.
 */

const data: EditingPageData = {
  title: "Screenplay Script Writing",

  subtitle:
    "Professional Writing for Screen, Stage, Audio and Page",

  number: "02",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Screenplay Script Writing",

  accent: "gold",

  description:
    "Some stories are meant to be heard, watched or performed. At Wordsmith Squad, our writers create scripts, songs, speeches and comics that sound right out loud and hold attention. You keep the rights and the credit.",

  sections: [
    {
      heading: "Screenplay Writing Services",

      paragraphs: [
        "Have a film or TV idea? Our screenplay writing services turn your concept into a properly formatted screenplay with strong structure, dialogue and visual storytelling.",

        "We work on features, shorts and series pilots.",
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
      heading: "Script Writing Services",

      paragraphs: [
        "Our script writing services cover scripts for video, ads, explainers, training, brand films and short-form content.",

        "We write clear, structured scripts with the right tone, timing and call to action.",
      ],
    },

    {
      heading: "Professional Writing for Screen, Stage, Audio and Page",

      paragraphs: [
        "Some stories are meant to be heard, watched or performed. At Wordsmith Squad, our writers create scripts, songs, speeches and comics that sound right out loud and hold attention. You keep the rights and the credit.",
      ],

      subsections: [
        {
          heading: "Songwriting Services",

          paragraphs: [
            "Our songwriting services create original lyrics for artists, brands, weddings, tributes and special projects.",

            "We work with your theme, genre and message to craft lyrics with strong hooks and emotional impact.",
          ],
        },

        {
          heading: "Speech Writing Services",

          paragraphs: [
            "A great speech can move a room. Our speech writing services cover keynotes, wedding toasts, eulogies, graduation speeches, and executive and political remarks, written to sound natural when spoken.",
          ],
        },

        {
          heading: "Podcast Script Writing",

          paragraphs: [
            "Our podcast script writing service covers episode outlines, intros, interview questions, solo episode scripts and show notes.",

            "We help you sound organized, confident and engaging.",
          ],
        },

        {
          heading: "Voiceover Script Writing",

          paragraphs: [
            "Our voiceover script writing team writes clean, spoken-word scripts for commercials, explainer videos, audiobooks, e-learning, IVR systems and documentaries, timed to fit your audio length.",
          ],
        },

        {
          heading: "Comic Book Writing Services",

          paragraphs: [
            "Our comic book writing services help you plan and write panel-by-panel scripts, with story arcs, dialogue and pacing built for artists.",

            "Ideal for graphic novels, webcomics and series launches.",
          ],
        },

        {
          heading: "Webinar Script Writing",

          paragraphs: [
            "Our webinar script writing service helps you present with clarity and keep your audience until the end.",

            "We create the opening, slide-by-slide talking points, stories and a strong call to action.",
          ],
        },
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
        "Do you format screenplays to industry standards?",

      answer:
        "Yes.",
    },

    {
      question:
        "Can you write songs with music?",

      answer:
        "Yes.",
    },

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

export default function ScreenplayScriptWriting() {
  return <GhostwritingSubpageLayout data={data} />;
}
