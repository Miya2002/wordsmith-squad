
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Dissertation Writing Support
 *
 * Approved SEO PDF: Pages 81–84
 *
 * Academic integrity:
 * We provide guidance, feedback, research
 * support, model samples, editing and formatting.
 * Students remain responsible for their own work.
 */

const data: EditingPageData = {
  title: "Dissertation Writing",

  subtitle:
    "Expert Dissertation Guidance, Research Support and Professional Editing",

  description:
    "Wordsmith Squad provides dissertation writing support for graduate students and researchers through topic selection, research question development, proposal and chapter outlines, research guidance, draft feedback, formatting, editing and proofreading. Students remain responsible for their own academic submissions.",

  number: "03",

  image: EDITORIAL.desk,

  imageAlt:
    "Academic dissertation research and writing workspace",

  accent: "gold",

  sections: [
    {
      heading: "Professional Dissertation Writing Support",

      paragraphs: [
        "A dissertation is the largest piece of writing most graduate students will ever do. It needs a focused research question, a sound method, a clear structure and a consistent argument from the first chapter to the last.",

        "At Wordsmith Squad, we help you plan each stage, from proposal to final draft, and give feedback that keeps your project on track and in your own voice.",

        "Our academic support is designed to strengthen your understanding, improve your writing and help you meet your academic standards. You always remain responsible for your final submission.",
      ],
    },

    {
      heading: "Dissertation Writing Services",

      paragraphs: [
        "Our dissertation writing services are built around support, not substitution. Depending on your needs, we can help with the planning, research and revision stages of your dissertation.",
      ],

      bullets: [
        "Topic selection and research question development",
        "Proposal and chapter outlines",
        "Research strategy and source guidance",
        "Detailed feedback on your drafts",
        "Structure, clarity and argument review",
        "Formatting and citation checks (APA, MLA, Chicago, Harvard)",
        "Editing and proofreading before submission",
      ],
    },

    {
      heading: "Dissertation Planning and Research",

      paragraphs: [
        "A strong dissertation starts with a focused research question and a clear plan. Your research needs a sound method, credible sources and a logical structure that connects your ideas from one chapter to the next.",

        "We help you understand your research direction, organize your sources and identify ways to improve the structure and clarity of your own work.",
      ],

      bullets: [
        "Research topic development",
        "Research question refinement",
        "Proposal planning",
        "Research strategy and source guidance",
        "Chapter organization",
        "Argument and structure feedback",
      ],
    },

    {
      heading: "Dissertation Chapter Guidance",

      paragraphs: [
        "A dissertation needs a consistent argument and a clear structure throughout. We provide guidance and feedback to help you organize your chapters and present your research professionally.",
      ],

      bullets: [
        "Proposal and chapter outlines",
        "Introduction and research background",
        "Research methodology organization",
        "Literature and source guidance",
        "Results and discussion structure",
        "Conclusion and argument review",
      ],
    },

    {
      heading: "Academic Formatting and Citation Support",

      paragraphs: [
        "Academic formatting and citation rules can be demanding, especially when a dissertation includes a large number of sources.",

        "We review formatting and citation requirements according to the applicable academic style guide, including APA, MLA, Chicago and Harvard.",
      ],

      bullets: [
        "APA citation and formatting checks",
        "MLA citation and formatting checks",
        "Chicago style checks",
        "Harvard referencing checks",
        "Consistency across citations and references",
        "Professional editing and proofreading",
      ],
    },

    {
      heading: "Academic Integrity Comes First",

      paragraphs: [
        "We believe in academic integrity, and we say so plainly. We do not help anyone claim work they did not write as their own, and we do not support breaking a school's academic integrity policy.",

        "Our services are designed for legitimate academic support, including learning from model samples and outlines, receiving expert feedback on your own writing, editing and proofreading your drafts, and developing your research and writing skills.",

        "You write, revise and make the final decisions about the work you submit. Always check your institution's rules on outside help.",
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
      heading: "How Our Dissertation Support Works",

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
            "We agree on what kind of support you need.",
          ],
        },

        {
          heading: "03. Support",

          paragraphs: [
            "We provide guidance, feedback, model samples or editing.",
          ],
        },

        {
          heading: "04. Your Work",

          paragraphs: [
            "You write, revise and make the final decisions.",
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
      heading: "Ready for Expert Dissertation Support?",

      paragraphs: [
        "A dissertation is a major academic milestone. Having a clear research direction, a strong structure and constructive feedback can make the process easier to manage.",

        "Wordsmith Squad is here to help you understand your research, improve your own writing and move forward with confidence while keeping your academic work your own.",
      ],
    },
  ],

  faqs: [
    {
      question:
        "Will you write my dissertation for me to submit?",

      answer:
        "No. We provide guidance, feedback, outlines, model samples, editing and formatting. The work you submit must be your own.",
    },

    {
      question:
        "Can you help me choose a dissertation topic?",

      answer:
        "Yes. We can help with topic selection and research question development.",
    },

    {
      question:
        "Can you help with dissertation chapter outlines?",

      answer:
        "Yes. We provide proposal and chapter outlines to help you organize your research and writing.",
    },

    {
      question:
        "Do you check academic referencing styles?",

      answer:
        "Yes. We review APA, MLA, Chicago, Harvard and other styles.",
    },

    {
      question:
        "Do you provide dissertation editing and proofreading?",

      answer:
        "Yes. We provide editing and proofreading before submission.",
    },

    {
      question:
        "Do you follow university guidelines?",

      answer:
        "We work from your assignment brief and style guide. You should confirm what outside help your institution allows.",
    },

    {
      question:
        "How much does dissertation support cost?",

      answer:
        "Pricing depends on length, level and the type of support.",
    },
  ],
};

export default function DissertationWriting() {
  return <EditingSubpageLayout data={data} />;
}
