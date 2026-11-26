
import {
  ServiceDetailLayout,
  type DetailContent,
} from "@/components/ServiceDetailLayout";

/**
 * WORDSMITH SQUAD
 * Line Editing
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 33–35
 *
 * Only page content has been updated.
 * Existing ServiceDetailLayout, styling,
 * animations, routing and component
 * structure remain unchanged.
 */

const page: DetailContent = {
  title: "Line Editing",

  section: "Editing",

  sectionUrl: "/editing",

  intro:
    "Line editing works at the sentence and paragraph level. We refine flow, rhythm, word choice, tone and clarity so your prose reads smoothly and sounds like the best version of you. If your story is strong but the writing feels uneven, this is the stage for you.",

  description:
    "Every strong book has been edited, often several times. Editing is what turns a good draft into a book that readers finish, recommend and review well. At Wordsmith Squad, our editors work with you at every stage, from big-picture story and structure to the last comma. You stay in control of your voice and your book. Line editing improves style, flow, tone and sentence quality and is best for strong drafts with uneven prose.",

  highlights: [
    "Style, flow, tone and sentence quality",

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
      label: "Copy Editing",
      to: "/editing/copy-editing",
    },

    {
      label: "Proofreading",
      to: "/editing/proofreading",
    },
  ],
};

export default function PageEditinglineediting() {
  return <ServiceDetailLayout page={page} />;
}
