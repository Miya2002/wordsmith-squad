
import {
  ServiceDetailLayout,
  type DetailContent,
} from "@/components/ServiceDetailLayout";

/**
 * WORDSMITH SQUAD
 * Developmental Editing
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 32–35
 *
 * Only content has been updated.
 * Original ServiceDetailLayout, styling,
 * animations, routing and component
 * structure remain unchanged.
 */

const page: DetailContent = {
  title: "Developmental Editing",

  section: "Editing",

  sectionUrl: "/editing",

  intro:
    "Developmental editing looks at the big picture. We examine plot, pacing, structure, character development, argument flow and whether your book delivers on its promise.",

  description:
    "This is the first stage of editing and often the most valuable, because it catches problems that no amount of polishing can fix later. You receive a detailed editorial letter, notes throughout the manuscript and practical advice on revisions. Working with a developmental editor is like having an experienced partner for your book. Our editors give honest, constructive feedback, explain the reasons behind each suggestion and help you see your manuscript through a reader’s eyes. They guide you without rewriting your story.",

  highlights: [
    "A detailed editorial letter, notes throughout the manuscript and practical advice on revisions",

    "Experienced editors matched to your genre",

    "Your voice protected, never replaced",

    "Clear, constructive feedback you can act on",

    "Strict confidentiality through a signed NDA",

    "Full ownership of your manuscript",

    "Built for US publishing standards and American English",
  ],

  process: [
    "Free consultation and manuscript review: Tell us about your book and goals.",

    "Editor match: We pair you with an editor suited to your genre.",

    "Editing: Your editor works through the manuscript at the agreed level.",

    "Review and revisions: You review the changes and notes and ask questions.",

    "Final manuscript: You receive a polished manuscript, ready for the next step.",
  ],

  related: [
    {
      label: "Line Editing",
      to: "/editing/line-editing",
    },

    {
      label: "Copy Editing",
      to: "/editing/copy-editing",
    },

    {
      label: "Proofreading",
      to: "/editing/proofreading",
    },
  ],
};

export default function PageEditingdevelopmentalediting() {
  return <ServiceDetailLayout page={page} />;
}
