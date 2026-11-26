
import CreativeWritingSubpageLayout from "@/pages/creative-writing/CreativeWritingSubpageLayout";
import type { DetailContent } from "@/components/ServiceDetailLayout";

/**
 * WORDSMITH SQUAD
 * Script Writing Services
 *
 * Approved SEO PDF: Pages 26–28
 *
 * Original Creative Writing layout retained.
 */

const page: DetailContent = {
  title: "Script Writing",

  section: "Creative Writing",

  sectionUrl: "/creative-writing",

  intro:
    "Some stories are meant to be heard, watched or performed. At Wordsmith Squad, our writers create scripts, songs, speeches and comics that sound right out loud and hold attention. You keep the rights and the credit.",

  description:
    "Our script writing services cover scripts for video, ads, explainers, training, brand films and short-form content. We write clear, structured scripts with the right tone, timing and call to action.",

  highlights: [
    "Video, advertising, explainer and training scripts",
    "Brand films and short-form content",
    "Clear structure, appropriate tone, timing and calls to action",
  ],

  process: [
    "Free consultation: Share your project, format and audience.",
    "Writer match and outline: We assign an experienced writer and prepare an outline or treatment for your approval.",
    "Draft, feedback and final delivery: Review the draft, request changes and receive a polished script ready to use.",
  ],

  audience: [
    "Businesses and brands creating advertising campaigns",
    "Video producers and creative teams",
    "Companies developing training and explainer videos",
    "Content creators producing short-form videos",
    "Organizations creating brand films",
  ],

  related: [
    {
      label: "Screenwriting",
      to: "/creative-writing/screenwriting",
    },
    {
      label: "Copywriting",
      to: "/creative-writing/copywriting",
    },
  ],

  faqs: [
    {
      question: "Do you format screenplays to industry standards?",

      answer: "Yes.",
    },

    {
      question: "Can you write songs with music?",

      answer: "Yes.",
    },

    {
      question: "Who owns the finished script or song?",

      answer: "You do. You receive full ownership.",
    },

    {
      question: "What does it cost?",

      answer: "It depends on length and format.",
    },
  ],
};

export default function ScriptWriting() {
  return <CreativeWritingSubpageLayout page={page} />;
}
