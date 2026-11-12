
import EditingSubpageLayout, {
  type EditingPageData,
} from "./EditingSubpageLayout";
import { EDITORIAL } from "@/lib/data";

const data: EditingPageData = {
  title: "Book Formatting",
  subtitle: "Professional Print & eBook Formatting",
  number: "02",
  image: EDITORIAL.typewriter,
  imageAlt: "Classic publishing and book design workspace",
  accent: "champagne",
  description:
    "A beautifully written manuscript deserves an equally beautiful presentation. We transform your completed manuscript into a professionally structured book designed for comfortable reading and publication.",

  sections: [
    {
      heading: "Transform Your Manuscript Into a Professional Book",
      paragraphs: [
        "At Wordsmith Squad, we believe every story deserves to become a professionally presented book. Our book formatting services help authors transform manuscripts into clean, organized and reader-friendly print and digital editions.",
        "Whether your project is fiction, nonfiction, memoir or another genre, our formatting team pays attention to the visual details that influence the reading experience.",
        "We work with authors at different stages of their publishing journey, providing formatting support as part of a wider writing, editing and publishing process."
      ]
    },
    {
      heading: "Why Does Your Manuscript Need Professional Formatting?",
      paragraphs: [
        "Formatting is one of the essential stages of preparing a book for publication. A manuscript may contain excellent writing, but inconsistent spacing, poor typography and confusing chapter layouts can make it difficult to read.",
        "Professional formatting creates a consistent visual structure, helping readers move comfortably from one page and chapter to the next."
      ],
      bullets: [
        "Improve reading comfort and readability.",
        "Create a professional appearance.",
        "Maintain consistency throughout the book.",
        "Prepare layouts for print and digital platforms.",
        "Organize chapters and supporting pages.",
        "Present illustrations, tables and other visual elements clearly."
      ]
    },
    {
      heading: "Essential Elements of Book Formatting",
      paragraphs: [
        "A professional book layout combines several important elements. Each one contributes to the visual identity and usability of the finished book."
      ],
      subsections: [
        {
          heading: "Page Layout and Margins",
          paragraphs: ["We organize page dimensions, margins, spacing and gutters according to the intended book format. These details help ensure that text sits comfortably on printed pages and digital layouts."]
        },
        {
          heading: "Typography and Readability",
          paragraphs: ["Font selection, paragraph spacing, line height and text styling all influence how a book feels to read. We work to create typography that complements the book's tone while maintaining readability."]
        },
        {
          heading: "Chapter and Section Headings",
          paragraphs: ["Clear chapter titles, subheadings and section divisions help readers navigate the manuscript and understand its organization."]
        },
        {
          heading: "Front Matter and Back Matter",
          paragraphs: ["Depending on the book, formatting can include title pages, copyright pages, dedication, acknowledgements, contents, author information and other supporting material."]
        },
        {
          heading: "Images and Visual Elements",
          paragraphs: ["Illustrations, tables, charts and images need appropriate sizing and placement so they complement the text without disrupting the layout."]
        },
        {
          heading: "Consistency and Flow",
          paragraphs: ["We maintain consistent styles for headings, paragraphs, page numbering, spacing and other recurring layout elements."]
        }
      ]
    },
    {
      heading: "Professional Print and eBook Formatting",
      paragraphs: [
        "Different publishing formats require different layout considerations. A print book is designed around physical page dimensions, margins and print specifications, while an eBook needs a layout that adapts to different screen sizes and reading devices.",
        "We tailor the formatting approach to the intended publishing destination and the author's requirements."
      ],
      bullets: [
        "Fiction and nonfiction books.",
        "Young adult fiction.",
        "Poetry collections.",
        "Traditional publishing manuscripts.",
        "Self-publishing projects.",
        "Magazines and other publication formats."
      ]
    },
    {
      heading: "How We Format Your Book",
      paragraphs: [
        "Our formatting process is designed to make the transition from manuscript to finished book organized and straightforward."
      ],
      subsections: [
        {
          heading: "01. Manuscript Review",
          paragraphs: ["We review your manuscript to understand its structure, length, content and formatting requirements."]
        },
        {
          heading: "02. Design Consultation",
          paragraphs: ["We discuss your preferences for fonts, chapter headings, margins, layout and overall visual style."]
        },
        {
          heading: "03. Formatting Implementation",
          paragraphs: ["Our team applies the agreed formatting approach and prepares the manuscript for the intended print or digital format."]
        },
        {
          heading: "04. Quality Assurance",
          paragraphs: ["We review layout consistency, page numbering, spacing and visual presentation to identify formatting issues."]
        },
        {
          heading: "05. Revisions and Delivery",
          paragraphs: ["The formatted files are reviewed with you and delivered in the agreed formats."]
        }
      ]
    },
    {
      heading: "Why Choose Wordsmith Squad for Book Formatting?",
      paragraphs: [
        "The right formatting partner understands that presentation is part of the publishing experience. We combine attention to detail with a practical understanding of how books are prepared for different reading formats."
      ],
      bullets: [
        "Experience with different genres and publication styles.",
        "Attention to typography and layout consistency.",
        "Formatting tailored to your individual project.",
        "Flexible project timelines agreed in advance.",
        "Confidential and respectful handling of your work.",
        "Constructive communication and revision support."
      ]
    },
    {
      heading: "Formatting Support Beyond the Layout",
      paragraphs: [
        "Book formatting is closely connected to the final quality of a manuscript. Depending on your project requirements, we can also discuss proofreading, grammar and punctuation, style consistency, references and clarity improvements.",
        "Our aim is to help authors prepare a complete, professionally presented book rather than focus on visual formatting in isolation."
      ]
    },
    {
      heading: "Ready to Elevate Your Writing?",
      paragraphs: [
        "You have already accomplished something important by writing your book. The next step is presenting it in a format that reflects the effort behind it.",
        "Whether you are preparing a novel, dissertation, business book or digital publication, Wordsmith Squad can help you explore professional formatting options suited to your goals."
      ]
    }
  ],

  faqs: [
    {
      question: "What is the difference between print and eBook formatting?",
      answer: "Print formatting focuses on physical page dimensions, margins, gutters and print-ready layouts. eBook formatting is designed to adapt to digital reading devices such as e-readers, tablets and smartphones."
    },
    {
      question: "How long does book formatting take?",
      answer: "The timeline depends on manuscript length, complexity, images and the required formats. Your estimated delivery schedule is discussed before the project begins."
    },
    {
      question: "Can you format a book I plan to self-publish?",
      answer: "Yes. We can prepare book layouts for self-publishing projects and discuss the relevant requirements for platforms such as Amazon KDP, Apple Books and Kobo."
    },
    {
      question: "Do you format all types of books?",
      answer: "We support fiction, nonfiction, memoirs, business books, poetry, children's books and other manuscript types."
    },
    {
      question: "Will my eBook look exactly the same on every device?",
      answer: "Digital books can display slight variations depending on the reader's device, application and personal display settings. We focus on producing a consistent and readable layout across supported formats."
    }
  ]
};

export default function BookFormatting() {
  return <EditingSubpageLayout data={data} />;
}
