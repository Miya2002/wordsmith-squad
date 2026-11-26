
import {
  ServiceDetailLayout,
  type DetailContent,
} from "@/components/ServiceDetailLayout";

/**
 * WORDSMITH SQUAD
 * Manuscript Assessment
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 38–41
 *
 * Only page content has been updated.
 * Original ServiceDetailLayout, styling,
 * animations, routing and related links
 * remain unchanged.
 */

const page: DetailContent = {
  title: "Manuscript Assessment",

  section: "Editing",

  sectionUrl: "/editing",

  intro:
    "A manuscript assessment is a thorough, big-picture review of your full manuscript. Your assessor reads the whole book and delivers a detailed report that explains where the manuscript stands and what it needs. It helps you decide whether you need developmental editing, line editing or a rewrite, so you spend your budget wisely.",

  description:
    "Our manuscript evaluation goes a step further by measuring your book against what readers and publishers expect in your genre. We assess its readiness, flag risks and tell you plainly whether it is ready to submit or publish, or what stands in the way. This is valuable if you plan to approach literary agents or traditional publishers. A book assessment is ideal when you want a trusted, professional opinion before moving forward. It suits authors who have a nearly finished book and want to confirm quality, and authors who are unsure what is holding the book back. You get a clear summary of where your book stands and a roadmap for improving it.",

  highlights: [
    "A thorough, big-picture review of your full manuscript",

    "A detailed report explaining where the manuscript stands and what it needs",

    "Manuscript evaluation against reader and publisher expectations in your genre",

    "An assessment of manuscript readiness and risks before submission or publication",

    "A clear summary and roadmap for improving your book",

    "Experienced readers and editors who know your genre",

    "Honest, constructive feedback, never harsh or vague",

    "Clear next steps, so you know exactly what to do after the report",

    "Strict confidentiality through a signed NDA",

    "Full ownership of your manuscript at all times",

    "Built for US publishing standards and American English",
  ],

  process: [
    "Free consultation: Tell us about your book and goals.",

    "Send your manuscript: Share your file and any questions you want answered.",

    "Review: Your editor or proofreader works through the manuscript.",

    "Report or corrected file: You receive a critique report or a proofread manuscript with changes.",

    "Follow-up: We answer questions and suggest next steps.",
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
      label: "Copy Editing",
      to: "/editing/copy-editing",
    },
  ],
};

export default function PageEditingmanuscriptassessment() {
  return <ServiceDetailLayout page={page} />;
}
