
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Thesis Writing
 *
 * Approved SEO PDF: Pages 81–84
 *
 * Academic integrity:
 * Guidance, model samples, research help,
 * feedback, editing and formatting only.
 * Students remain responsible for their
 * own academic submissions.
 */

const data: EditingPageData = {
  title: "Thesis Writing",

  subtitle:
    "Professional Thesis Writing Support for Students and Researchers",

  number: "02",

  image: EDITORIAL.desk,

  imageAlt: "Academic research and thesis writing workspace",

  accent: "gold",

  description:
    "Strong thesis writing begins with a clear thesis statement and a logical plan for supporting it. At Wordsmith Squad, we help undergraduate, master's and doctoral students organize their ideas, build an argument and present their findings in a professional academic style.",

  sections: [
    {
      heading: "Professional Thesis Writing Support",

      paragraphs: [
        "Academic writing is demanding. Long projects, strict formatting rules, heavy research and tight deadlines can overwhelm even strong students.",

        "At Wordsmith Squad, we support you through the process with expert guidance, model samples, research help, structured feedback and professional editing.",

        "Our goal is to help you understand your topic, strengthen your own work and meet your academic standards. You always stay responsible for your final submission.",
      ],
    },

    {
      heading: "Thesis Writing",

      paragraphs: [
        "Strong thesis writing begins with a clear thesis statement and a logical plan for supporting it.",

        "We help undergraduate, master's and doctoral students organize their ideas, build an argument and present their findings in a professional academic style.",
      ],
    },

    {
      heading: "Thesis Writing Service",

      paragraphs: [
        "Our thesis writing service guides you through every chapter: introduction, background, methods, results, discussion and conclusion.",

        "We can provide outlines, structure maps, feedback on your writing and model chapters that show what strong academic writing looks like, which you can learn from.",

        "Model materials are for reference and learning only, and should not be submitted as your own work.",
      ],

      bullets: [
        "Introduction and background chapter guidance",
        "Methods and research structure guidance",
        "Results and discussion organization",
        "Conclusion and argument development",
        "Chapter outlines and structure maps",
        "Feedback on your own academic writing",
        "Educational model chapters for reference",
      ],
    },

    {
      heading: "How We Support Your Thesis",

      paragraphs: [
        "Every thesis has its own research question, methodology and academic requirements. Our support is tailored to your subject, academic level and university guidelines.",
      ],

      bullets: [
        "Topic and research question development",
        "Organizing ideas into a logical argument",
        "Planning chapters and research structure",
        "Guidance on research sources and evidence",
        "Detailed feedback on your drafts",
        "Clarity and academic writing improvements",
        "Formatting and citation guidance",
      ],
    },

    {
      heading: "Academic Integrity Comes First",

      paragraphs: [
        "We believe in academic integrity, and we say so plainly. We do not help anyone claim work they did not write as their own, and we do not support breaking a school's academic integrity policy.",

        "Our services are designed for legitimate academic support. You remain the author of your submission, write and revise your work, and make the final decisions.",
      ],

      bullets: [
        "Learning from model samples and outlines",
        "Getting expert feedback on your own writing",
        "Editing, proofreading and formatting your drafts",
        "Developing research and writing skills",
        "Professional, non-student research and report writing",
      ],
    },

    {
      heading: "Our Thesis Support Process",

      subsections: [
        {
          heading: "01. Free Consultation",

          paragraphs: [
            "Tell us your project, academic level, subject and deadline.",
          ],
        },

        {
          heading: "02. Scope Agreement",

          paragraphs: [
            "We agree on what kind of academic support you need.",
          ],
        },

        {
          heading: "03. Support",

          paragraphs: [
            "We provide guidance, feedback, samples or editing according to the agreed scope.",
          ],
        },

        {
          heading: "04. Your Work",

          paragraphs: [
            "You write, revise and make the final decisions about your academic work.",
          ],
        },

        {
          heading: "05. Review",

          paragraphs: [
            "We check your revised draft and answer your questions.",
          ],
        },
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Experienced writers and editors across many subjects",
        "An honest, ethical approach that respects academic integrity",
        "Clear, constructive feedback you can learn from",
        "Citation and formatting expertise for all major styles",
        "Strict confidentiality through a signed NDA",
        "Original, plagiarism-checked materials",
      ],
    },

    {
      heading: "Ready for Expert Thesis Writing Support?",

      paragraphs: [
        "Your research deserves a clear structure, a strong argument and professional presentation.",

        "At Wordsmith Squad, we help you understand your topic, improve your writing and move forward with confidence while keeping your academic work your own.",
      ],
    },
  ],

  faqs: [
    {
      question:
        "Will you write my dissertation or thesis for me to submit?",

      answer:
        "No. We provide guidance, feedback, outlines, model samples, editing and formatting. The work you submit must be your own.",
    },

    {
      question: "Can you help me if I'm stuck?",

      answer:
        "Yes. Many students get stuck on topic selection, structure or the literature review. We help you move forward and understand the process.",
    },

    {
      question: "Do you follow my university's guidelines?",

      answer:
        "We work from your assignment brief and style guide. You should confirm what outside help your institution allows.",
    },

    {
      question: "Can you check my citations?",

      answer:
        "Yes. We review APA, MLA, Chicago, Harvard and other styles.",
    },

    {
      question: "Is my information private?",

      answer:
        "Yes. We sign a non-disclosure agreement, and we never share your work.",
    },

    {
      question: "How much does it cost?",

      answer:
        "Pricing depends on length, level and the type of support.",
    },
  ],
};

export default function ThesisWriting() {
  return <EditingSubpageLayout data={data} />;
}
