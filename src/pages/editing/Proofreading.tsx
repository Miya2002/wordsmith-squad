
import EditingSubpageLayout, {
  type EditingPageData,
} from "./EditingSubpageLayout";
import { EDITORIAL } from "@/lib/data";

const data: EditingPageData = {
  title: "Professional Proofreading",
  subtitle: "The Final Polish Before Publication",
  number: "03",
  image: EDITORIAL.desk,
  imageAlt: "Editorial manuscript and proofreading workspace",
  accent: "gold",
  description:
    "Every word, sentence and punctuation mark matters. Our proofreading service helps eliminate overlooked errors, improve consistency and prepare your manuscript for a professional presentation.",

  sections: [
    {
      heading: "Perfect Your Manuscript Before Publishing",
      paragraphs: [
        "In the world of books, even a small typographical error can affect a reader's confidence. When your name is on the cover, every detail deserves attention.",
        "At Wordsmith Squad, we understand that your manuscript deserves a careful final review. Our professional proofreading approach focuses on spelling, grammar, punctuation, formatting consistency and other details that can be overlooked during the writing process.",
        "Whether you are an aspiring author, an experienced novelist or a self-publishing writer, we help prepare your work for readers, editors, agents and publishers."
      ]
    },
    {
      heading: "Why Book Proofreading Is Important",
      paragraphs: [
        "Proofreading is more than spotting occasional mistakes. It is a detailed review that helps ensure your writing is accurate, consistent and professionally presented.",
        "After working on a manuscript for a long time, writers can become familiar with their own sentences and overlook errors. An independent proofreading review provides a fresh perspective before publication."
      ],
      bullets: [
        "Grammar and punctuation accuracy.",
        "Spelling and appropriate word usage.",
        "Sentence-level consistency and readability.",
        "Consistent terminology, names and formatting.",
        "Clarity and coherence.",
        "A final review before publication or submission."
      ]
    },
    {
      heading: "Professional Book Proofreading Services",
      paragraphs: [
        "Every author dreams of producing a polished manuscript that reflects dedication, professionalism and authenticity. Our proofreading team works carefully through your text to identify issues that could distract readers.",
        "We support different types of writing and understand that every genre has its own conventions and expectations."
      ],
      bullets: [
        "Fiction manuscripts.",
        "Nonfiction books.",
        "Memoirs and biographies.",
        "Poetry collections.",
        "Literary articles.",
        "Young adult fiction."
      ]
    },
    {
      heading: "Academic Proofreading for Scholars and Students",
      paragraphs: [
        "Academic writing requires accuracy, consistency and careful presentation. Research papers, journal articles, dissertations and other academic documents must communicate ideas clearly while following their required institutional or publication guidelines.",
        "Our academic proofreading support focuses on language quality, sentence clarity, terminology and consistency. We can also review citation and referencing presentation against the style requirements you provide."
      ],
      bullets: [
        "Grammar, spelling and punctuation corrections.",
        "Sentence clarity and logical flow.",
        "Consistency in academic tone and terminology.",
        "Formatting and referencing consistency.",
        "Review against APA, MLA, Chicago and Harvard style requirements."
      ]
    },
    {
      heading: "Why Hire a Professional Proofreader?",
      paragraphs: [
        "Hiring a professional proofreader is an investment in the quality of your writing. A fresh pair of eyes can identify small mistakes and inconsistencies that are difficult to notice when you have been working on the same document for months.",
        "Our approach combines language knowledge, attention to detail and respect for your writing style. We aim to correct technical issues without unnecessarily changing your voice or intended meaning."
      ]
    },
    {
      heading: "What Makes Wordsmith Squad Different?",
      subsections: [
        {
          heading: "Tailored Editorial Attention",
          paragraphs: ["We consider the subject, writing format and intended audience before approaching a proofreading assignment."]
        },
        {
          heading: "Flexible Project Timelines",
          paragraphs: ["We discuss your deadline and project requirements in advance so the work can be planned around an agreed schedule."]
        },
        {
          heading: "Transparent Project Discussions",
          paragraphs: ["We discuss the scope and expected deliverables before work begins, helping you understand the service and its limitations."]
        },
        {
          heading: "Confidentiality and Privacy",
          paragraphs: ["We treat your manuscripts and personal information with respect and prioritize privacy throughout the collaboration."]
        },
        {
          heading: "Constructive Communication",
          paragraphs: ["We value clear communication and feedback so that the final work reflects the agreed requirements."]
        }
      ]
    },
    {
      heading: "Who Can Work With Our Proofreading Team?",
      paragraphs: [
        "Our proofreading services are intended for a wide range of writers and professionals. Every client has different goals, and our approach is designed around the type of document and the audience it needs to reach."
      ],
      subsections: [
        {
          heading: "Independent Authors",
          paragraphs: ["We support first-time and established authors preparing books for traditional publishers or self-publication. Our focus is on accuracy, consistency and preserving the author's individual voice."]
        },
        {
          heading: "Content Creators and Marketers",
          paragraphs: ["Digital content creators and marketing professionals often need polished website copy, articles, blogs and other written material. We help improve language quality and presentation."]
        },
        {
          heading: "Journalists and Researchers",
          paragraphs: ["We support articles, research-based writing and professional documents that require careful language review, style consistency and clear presentation."]
        },
        {
          heading: "Students and Academic Writers",
          paragraphs: ["We can assist with proofreading academic documents while respecting institutional rules and the author's responsibility for their own research and ideas."]
        }
      ]
    },
    {
      heading: "Ready for Your Next Bestseller?",
      paragraphs: [
        "Your story deserves to reach readers in its best possible form. A final proofreading review helps remove distractions so readers can focus on the ideas, characters and messages you worked hard to create.",
        "From novels and memoirs to academic documents and business books, Wordsmith Squad can help you explore the proofreading support that suits your project."
      ]
    }
  ],

  faqs: [
    {
      question: "What does a book proofreader do?",
      answer: "A proofreader reviews a manuscript for spelling, grammar, punctuation, typographical errors and consistency. The objective is to prepare a clean, professional final text."
    },
    {
      question: "How is proofreading different from editing?",
      answer: "Editing can address structure, content, sentence flow and language improvements. Proofreading generally focuses on correcting remaining technical and presentation errors in a near-final manuscript."
    },
    {
      question: "Do you also offer book formatting?",
      answer: "Yes. We also offer book formatting support to help prepare manuscripts for print and digital publication."
    },
    {
      question: "How long does proofreading take?",
      answer: "The timeframe depends on word count, document complexity, formatting and the level of review required. We discuss the expected schedule before starting."
    },
    {
      question: "Will my manuscript remain confidential?",
      answer: "We prioritize the privacy of your work and personal information and handle submitted manuscripts with care."
    }
  ]
};

export default function Proofreading() {
  return <EditingSubpageLayout data={data} />;
}
