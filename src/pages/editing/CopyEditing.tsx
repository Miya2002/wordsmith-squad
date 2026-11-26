
import {
  ServiceDetailLayout,
  type DetailContent,
} from "@/components/ServiceDetailLayout";

/**
 * WORDSMITH SQUAD
 * Copy Editing
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 32–35
 *
 * Original ServiceDetailLayout, styling,
 * animations, routing and related links
 * remain unchanged.
 *
 * Only page content has been updated.
 */

const page: DetailContent = {
  title: "Copy Editing",

  section: "Editing",

  sectionUrl: "/editing",

  intro:
    "Copy editing corrects grammar, spelling, punctuation, usage and consistency. We check names, timelines, capitalization, hyphenation and style, following standards such as the Chicago Manual of Style, the usual standard for US book publishing.",

  description:
    "Our copyediting services give your manuscript the technical polish readers and reviewers expect. Errors in a published book can cost you reviews and credibility, and professional copyediting prevents that. Our book editing services cover the complete path from rough draft to publish-ready manuscript. Not sure what your book needs? We review your manuscript and recommend the right level of editing, so you only pay for what will make a difference.",

  highlights: [
    "Grammar, spelling, punctuation, usage and consistency",

    "Names, timelines, capitalization, hyphenation and style",

    "Chicago Manual of Style standards for US book publishing",

    "Technical polish for nearly finished manuscripts",

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
      label: "Developmental Editing",
      to: "/editing/developmental-editing",
    },

    {
      label: "Line Editing",
      to: "/editing/line-editing",
    },

    {
      label: "Proofreading",
      to: "/editing/proofreading",
    },
  ],
};

export default function PageEditingcopyediting() {
  return <ServiceDetailLayout page={page} />;
}
