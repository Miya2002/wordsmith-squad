
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Research Writing Services
 *
 * Approved SEO PDF: Pages 82–84
 *
 * Content includes:
 * Research Paper Writing
 * Research Writing
 * Literature Review
 * Annotated Bibliography
 * Essay Writing
 *
 * Academic integrity is preserved.
 */

const data: EditingPageData = {
  title: "Research Writing",

  subtitle:
    "Academic Research Support for Students, Researchers and Professionals",

  description:
    "Wordsmith Squad provides research writing support through topic development, credible source guidance, evidence organization, literature review feedback, annotated bibliography guidance, essay planning and professional editing. Our services support learning and professional research while respecting academic integrity.",

  number: "04",

  image: EDITORIAL.desk,

  imageAlt:
    "Professional academic research and writing workspace",

  accent: "gold",

  sections: [
    {
      heading: "Professional Research Writing Support",

      paragraphs: [
        "Academic writing is demanding. Long projects, strict formatting rules, heavy research and tight deadlines can overwhelm even strong students.",

        "At Wordsmith Squad, we support you through the process with expert guidance, model samples, research help, structured feedback and professional editing.",

        "Our goal is to help you understand your topic, strengthen your own work and meet your academic standards. You always stay responsible for your final submission.",
      ],
    },

    {
      heading: "Research Paper Writing Service",

      paragraphs: [
        "Our research paper writing service helps you develop a focused topic, find credible sources, organize your evidence and write a clear, well-argued paper.",

        "We support students in every discipline, including business, nursing, education, psychology, social sciences, engineering and the humanities.",

        "Our feedback helps you meet course requirements and improve your skills for future assignments.",
      ],

      bullets: [
        "Focused topic development",
        "Credible source identification",
        "Evidence organization",
        "Argument structure guidance",
        "Research paper outline feedback",
        "Academic writing and draft review",
      ],
    },

    {
      heading: "Research Writing",

      paragraphs: [
        "Good research writing is more than collecting facts. It means asking the right question, evaluating sources, interpreting evidence and explaining it clearly.",

        "We also support professionals, nonprofits and organizations that need white papers, research summaries, policy briefs and reports based on real data and credible sources.",
      ],

      bullets: [
        "Research question development",
        "Source evaluation and guidance",
        "Evidence interpretation",
        "Research summaries",
        "White papers",
        "Policy briefs",
        "Professional research reports",
      ],
    },

    {
      heading: "Literature Review Writing Service",

      paragraphs: [
        "A strong literature review shows what is already known about your topic, where the gaps are and why your work matters.",

        "Our literature review writing service helps you search for and select relevant studies, organize them by theme, compare findings and spot gaps in the research.",

        "We can review your draft, suggest a structure and give you feedback that makes the review sharper and more critical, not just descriptive.",
      ],

      bullets: [
        "Searching for relevant studies",
        "Selecting credible research sources",
        "Organizing studies by theme",
        "Comparing research findings",
        "Identifying gaps in existing research",
        "Reviewing literature review drafts",
        "Suggesting a clear academic structure",
      ],
    },

    {
      heading: "Annotated Bibliography Writing",

      paragraphs: [
        "An annotated bibliography writing service is useful when you have a long source list and need help summarizing and evaluating each source clearly.",

        "We can show you how to structure entries, check your citation format and give feedback on your annotations, so you understand how to evaluate sources in future projects.",
      ],

      bullets: [
        "Guidance on summarizing sources",
        "Source evaluation and feedback",
        "Annotated bibliography structure",
        "Citation format checks",
        "Review of your own annotations",
      ],
    },

    {
      heading: "Essay Writing",

      paragraphs: [
        "Clear essay writing needs a strong thesis, logical paragraphs and persuasive evidence.",

        "We help you brainstorm, plan an outline, refine your argument and polish your language.",

        "We also review drafts and explain the changes, so you improve over time instead of just receiving a corrected paper.",
      ],

      bullets: [
        "Brainstorming and topic development",
        "Essay outline planning",
        "Thesis statement refinement",
        "Argument development",
        "Evidence organization",
        "Language improvement and draft feedback",
      ],
    },

    {
      heading: "What We Do Not Do",

      paragraphs: [
        "We believe in academic integrity, and we say so plainly. We do not help anyone claim work they did not write as their own, and we do not support breaking a school's academic integrity policy.",

        "Many universities treat submitting outsourced work as misconduct, and several US states have laws against selling written work to students for submission. Always check your institution's rules on outside help, and use our services in line with them.",
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
      heading: "How It Works",

      subsections: [
        {
          heading: "01. Free Consultation",

          paragraphs: [
            "Tell us your project, level, subject and deadline.",
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
            "We provide guidance, feedback, samples or editing.",
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
        "Honest, ethical approach that respects academic integrity",
        "Clear, constructive feedback you can learn from",
        "Citation and formatting expertise for all major styles",
        "Strict confidentiality through a signed NDA",
        "Original, plagiarism-checked materials",
      ],
    },

    {
      heading: "Ready for Expert Research Writing Support?",

      paragraphs: [
        "Strong research deserves clear questions, credible sources and well-organized evidence.",

        "At Wordsmith Squad, we help you understand your research, improve your academic writing and communicate your findings with clarity and confidence.",
      ],
    },
  ],

  faqs: [
    {
      question:
        "Will you write my research paper for me to submit?",

      answer:
        "We provide guidance, feedback, outlines, model samples, editing and formatting. The work you submit must be your own.",
    },

    {
      question:
        "Can you help me if I'm stuck?",

      answer:
        "Yes. Many students get stuck on topic selection, structure or the literature review. We help you move forward and understand the process.",
    },

    {
      question:
        "Do you follow my university's guidelines?",

      answer:
        "We work from your assignment brief and style guide. You should confirm what outside help your institution allows.",
    },

    {
      question:
        "Can you check my citations?",

      answer:
        "Yes. We review APA, MLA, Chicago, Harvard and other styles.",
    },

    {
      question:
        "Is my information private?",

      answer:
        "Yes. We sign a non-disclosure agreement, and we never share your work.",
    },

    {
      question:
        "How much does it cost?",

      answer:
        "Pricing depends on length, level and the type of support.",
    },
  ],
};

export default function ResearchWriting() {
  return <EditingSubpageLayout data={data} />;
}
