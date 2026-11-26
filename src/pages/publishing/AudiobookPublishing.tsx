
import PublishingDetailLayout, {
  type PublishingPageContent,
} from "@/components/PublishingDetailLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Audiobook Publishing
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 57–59
 *
 * Original PublishingDetailLayout,
 * styling, animations, hero image
 * and component structure retained.
 *
 * Page content is sourced from the SEO PDF.
 */

const page: PublishingPageContent = {
  title: "Audiobook Publishing",

  subtitle: "Publish Your Book in Digital and Audio Formats",

  intro:
    "Readers today buy books on phones, tablets and e-readers, and many prefer to listen. Offering both formats widens your audience and creates more ways for readers to find you. At Wordsmith Squad, we help you create and publish professional e-books and audiobooks, and you keep ownership of your work.",

  heroImage: EDITORIAL.desk,

  heroEyebrow: "eBook & Audiobook Publishing Services",

  sections: [
    {
      id: "audiobook-introduction",

      title: "Audio Book",

      blocks: [
        {
          type: "paragraph",
          text:
            "An audio book lets readers enjoy your story during commutes, workouts and chores, which opens your book to an audience that may never sit down with a print copy.",
        },
        {
          type: "paragraph",
          text:
            "Audio is also a strong fit for business books, memoirs, self-help and fiction series, since listeners often follow an author from one title to the next.",
        },
      ],
    },

    {
      id: "audiobook-narration",

      title: "Audiobook Narration",

      blocks: [
        {
          type: "paragraph",
          text:
            "Great audiobook narration keeps listeners engaged for hours. A skilled narrator brings out tone, pacing and emotion, and gives each character a clear voice.",
        },
        {
          type: "paragraph",
          text:
            "You can narrate your own book, which works well for memoirs and personal brands, or hire a professional narrator. We help you decide, and we can arrange professional recording and review.",
        },
      ],
    },

    {
      id: "audiobook-publishing",

      title: "Audiobook Publishing",

      blocks: [
        {
          type: "paragraph",
          text:
            "Audiobook publishing involves more than recording. Files must be edited, mastered and checked to meet platform quality standards, and you need cover art in the right format and a clear distribution plan.",
        },
        {
          type: "paragraph",
          text:
            "We help prepare your finished files for the platforms you choose.",
        },
      ],
    },

    {
      id: "audiobook-services",

      title: "Audiobook Publishing Services",

      blocks: [
        {
          type: "paragraph",
          text:
            "Our audiobook publishing services can include:",
        },
        {
          type: "bullets",
          items: [
            "Narrator selection or coaching",
            "Recording and editing coordination",
            "Audio mastering and quality checks",
            "Retail-ready file preparation",
            "Platform setup and distribution guidance",
          ],
        },
      ],
    },

    {
      id: "how-to-publish-an-audiobook",

      title: "How to Publish an Audiobook",

      blocks: [
        {
          type: "paragraph",
          text:
            "Wondering how to publish an audiobook? Here are the main steps:",
        },
        {
          type: "steps",
          items: [
            {
              title: "01. Finish Your Book",
              text:
                "Audio is usually produced from a final, edited manuscript.",
            },
            {
              title: "02. Prepare the Script",
              text:
                "Remove anything that doesn’t work out loud, such as visual references.",
            },
            {
              title: "03. Choose a Narrator",
              text:
                "Yourself or a professional.",
            },
            {
              title: "04. Record and Edit",
              text:
                "Clean audio with consistent volume and no background noise.",
            },
            {
              title: "05. Meet Platform Requirements",
              text:
                "Each retailer has technical standards.",
            },
            {
              title: "06. Choose Distribution",
              text:
                "Exclusive or wide distribution affects royalties and reach, so read each platform’s terms before you commit.",
            },
            {
              title: "07. Publish and Promote",
              text:
                "Reach listeners through your audience, reviews and promotions.",
            },
          ],
        },
      ],
    },

    {
      id: "why-choose-wordsmith-squad",

      title: "Why Choose Wordsmith Squad",

      blocks: [
        {
          type: "bullets",
          items: [
            "Digital and audio expertise in one place",
            "Quality checks on every file",
            "You keep your rights",
            "Clear guidance on platform choices",
            "Strict confidentiality",
          ],
        },
      ],
    },

    {
      id: "ready-to-publish-audiobook",

      title: "Ready to Publish Your E-book or Audiobook?",

      blocks: [
        {
          type: "paragraph",
          text: "Get a Free Quote",
        },
      ],
    },
  ],

  faqs: [
    {
      question:
        "Can I turn my existing book into an audiobook?",
      answer:
        "Yes. Most audiobooks are made from books already published in print or e-book form.",
    },
    {
      question:
        "Should I narrate my own audiobook?",
      answer:
        "It depends. Authors often narrate memoirs and personal books well, but a professional is usually better for long, character-driven fiction.",
    },
    {
      question:
        "How long does it take to produce an audiobook?",
      answer:
        "It depends on length and narration.",
    },
  ],
};

export default function AudiobookPublishing() {
  return <PublishingDetailLayout page={page} />;
}
