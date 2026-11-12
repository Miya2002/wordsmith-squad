
import EditingSubpageLayout, {
  type EditingPageData,
} from "./EditingSubpageLayout";
import { EDITORIAL } from "@/lib/data";

const data: EditingPageData = {
  title: "Manuscript Editing",
  subtitle: "Professional Book Editing & Refinement",
  number: "01",
  image: EDITORIAL.desk,
  imageAlt: "Professional editorial workspace and manuscript",
  accent: "gold",
  description:
    "Your manuscript deserves more than a quick review. Our professional editing approach strengthens your writing, improves clarity and consistency, and protects the unique voice behind your story.",

  sections: [
    {
      heading: "Transform Your Manuscript Into a Publishing-Ready Book",
      paragraphs: [
        "At Wordsmith Squad, we understand that transforming a promising manuscript into a compelling book depends on thoughtful, professional editing. Whether you are a first-time author or an experienced writer, our editors work to improve your writing while preserving your creative identity.",
        "Every manuscript receives attention to clarity, consistency, structure and presentation. We refine your material with publishing expectations and the reader's experience in mind, helping your work become cohesive, engaging and professionally presented.",
        "Your manuscript is more than words on paper. It represents your imagination, creativity and hard work. Our responsibility is to help those qualities shine through every chapter."
      ],
    },
    {
      heading: "Why Choose Wordsmith Squad for Book Editing?",
      paragraphs: [
        "Choosing an editor means choosing someone to work closely with your creative vision. Our approach combines editorial knowledge, attention to detail and a genuine respect for the author's original intentions.",
        "We approach every project individually rather than treating manuscripts as identical assignments. From the first review to the final delivery, we focus on professional communication, constructive recommendations and careful editorial work."
      ],
      bullets: [
        "Professional editorial attention across different genres.",
        "Personalized editing based on manuscript requirements.",
        "Respect for your individual writing voice and style.",
        "Clear communication and practical editorial feedback.",
        "Careful attention to consistency, clarity and readability.",
        "Confidential handling of your manuscript."
      ],
    },
    {
      heading: "Comprehensive Manuscript Editing Services",
      paragraphs: [
        "Not every manuscript needs the same kind of editing. Some require a comprehensive review of their structure, while others need improvements in sentence construction, grammar or final presentation. We help identify the appropriate level of editorial support."
      ],
      subsections: [
        {
          heading: "1. Advanced Manuscript Editing",
          paragraphs: [
            "Our advanced manuscript editing involves a thorough review of language, sentence structure, clarity, consistency and overall readability. It is suitable for authors who have completed a manuscript and want a professional editorial review before submission or publication."
          ]
        },
        {
          heading: "2. Content and Structural Editing",
          paragraphs: [
            "Sometimes a manuscript needs more than language improvements. Structural editing examines how the entire book works together, including chapter organization, pacing, scene transitions, narrative development and the logical progression of ideas.",
            "This approach is particularly valuable for complex narratives, multiple points of view and nonfiction manuscripts with detailed structures."
          ]
        },
        {
          heading: "3. Premium Manuscript Critique",
          paragraphs: [
            "A manuscript critique provides an independent professional perspective on the strengths and weaknesses of your work. Our feedback identifies opportunities for improvement and provides practical recommendations before you proceed with full editing."
          ]
        },
        {
          heading: "4. Copyediting and Proofreading",
          paragraphs: [
            "Copyediting focuses on grammar, punctuation, spelling, sentence construction and consistency. Proofreading provides a final review to catch remaining errors before printing or digital publication."
          ]
        }
      ]
    },
    {
      heading: "Professional Online Book Editing Services",
      paragraphs: [
        "Online collaboration makes professional editorial support accessible to authors wherever they are based. With Wordsmith Squad, you can discuss your manuscript, share documents and collaborate with an editorial team without needing to visit an office.",
        "Our services can support fiction, nonfiction, memoirs, business books, self-help projects and other writing formats. We focus on matching the editorial approach to the manuscript rather than applying a generic solution.",
        "From an initial draft to a nearly completed book, our objective is to bridge the gap between your original writing and a polished, reader-friendly manuscript."
      ]
    },
    {
      heading: "Customized Editing for Every Author",
      paragraphs: [
        "No two manuscripts are alike. Some require light proofreading, while others benefit from significant structural revisions. We tailor our approach according to the condition of your manuscript, your publishing goals and the level of assistance you need.",
        "If your primary concern is plot development, pacing or character consistency, we can focus on the bigger picture. If your writing needs improved grammar, syntax and clarity, our editors can concentrate on sentence-level refinement."
      ],
      bullets: [
        "Developmental and structural improvements.",
        "Plot, pacing and character development feedback.",
        "Sentence-level clarity and language refinement.",
        "Grammar, spelling and punctuation corrections.",
        "Consistency and publication-readiness review."
      ]
    },
    {
      heading: "Beyond Books: Website Content Editing",
      paragraphs: [
        "An author's professional presence extends beyond the manuscript. Website copy, author biographies, blog posts and book descriptions all contribute to how readers discover and understand your work.",
        "Our website content editing support helps refine digital writing for clarity, engagement, consistency and professionalism. A well-presented author website can strengthen your connection with readers and communicate your work more effectively."
      ]
    },
    {
      heading: "Why Hire a Professional Book Editor?",
      paragraphs: [
        "After spending months or years working on a manuscript, authors can become so familiar with their writing that they overlook repetition, inconsistencies and unclear passages. A professional editor brings a fresh perspective.",
        "An editor reviews your work as both a writing professional and a reader. They identify what works, what needs improvement and how your manuscript can communicate its ideas more effectively.",
        "Professional editing is an investment in the quality and presentation of your book. It helps prepare your manuscript for readers, agents, publishers or self-publishing platforms."
      ]
    },
    {
      heading: "Our Quality Assurance Process",
      paragraphs: [
        "Every project follows a considered process designed to maintain editorial consistency and protect the integrity of your manuscript."
      ],
      subsections: [
        {
          heading: "01. Initial Review",
          paragraphs: ["We evaluate your manuscript and identify the areas that require editorial attention."]
        },
        {
          heading: "02. Customized Editorial Plan",
          paragraphs: ["We discuss your goals and establish the appropriate editing scope, deliverables and timeline."]
        },
        {
          heading: "03. Collaborative Editing",
          paragraphs: ["Our editors work through the manuscript and provide relevant revisions, comments and recommendations."]
        },
        {
          heading: "04. Final Polish",
          paragraphs: ["The completed work receives a final review to improve consistency, readability and presentation."]
        }
      ]
    },
    {
      heading: "Supporting Authors Around the World",
      paragraphs: [
        "Wordsmith Squad aims to make professional editing accessible to authors across different locations and writing communities. Through online communication and secure document sharing, authors can work with our team regardless of geographical distance.",
        "We value long-term relationships with writers and understand that many authors return for future books and additional publishing support. Our goal is to become a dependable creative partner throughout that journey."
      ]
    }
  ],

  faqs: [
    {
      question: "What types of manuscripts do you edit?",
      answer: "We support fiction, nonfiction, memoirs, biographies, self-help, business books, academic manuscripts and other writing projects. Website content editing is also available."
    },
    {
      question: "How do your online book editing services work?",
      answer: "You share your manuscript and project requirements with us. We discuss the appropriate editorial support, agree on the scope and timeline, and arrange the editing process with you."
    },
    {
      question: "Why hire a professional book editor instead of editing myself?",
      answer: "A professional editor provides an objective perspective, helping identify inconsistencies, unclear passages and issues that can be difficult to notice when you are familiar with your own writing."
    },
    {
      question: "How do you compare with other book editing companies?",
      answer: "Our approach emphasizes personalized attention, constructive feedback, respect for the author's voice and editorial support suited to each manuscript."
    },
    {
      question: "Are my manuscript and ideas confidential?",
      answer: "We treat manuscripts and client information with care and prioritize privacy and confidentiality throughout the collaboration."
    }
  ]
};

export default function ManuscriptEditing() {
  return <EditingSubpageLayout data={data} />;
}
