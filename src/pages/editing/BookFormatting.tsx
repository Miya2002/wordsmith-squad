
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Book Formatting Services
 *
 * Approved SEO source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 29–31
 *
 * Existing layout, image, page number,
 * styling and animations are retained.
 */

const data: EditingPageData = {
  title: "Book Formatting",

  subtitle:
    "Professional Book Formatting and Typesetting for Print and Digital",

  number: "02",

  image: EDITORIAL.desk,

  imageAlt: "Editorial workspace for Book Formatting",

  accent: "gold",

  description:
    "A great manuscript can still look amateur if the pages are poorly laid out. Awkward margins, uneven spacing and broken chapter headings make readers lose trust fast. At Wordsmith Squad, we prepare your book so it looks like it came from a traditional publisher, whether you are publishing on Amazon, IngramSpark or your own website. You keep full ownership of your files.",

  sections: [
    {
      heading: "Book Formatting Services",

      paragraphs: [
        "Our book formatting services turn your finished manuscript into clean, publish-ready files. We handle page size, margins, fonts, chapter openers, headers, footers, page numbers, front and back matter, and the technical requirements of each platform. Everything is built to look polished in both print and digital form.",

        "Includes: Print Ready PDF, EPUB and files ready for upload to major retailers.",
      ],
    },

    {
      heading: "Book Formatting",

      paragraphs: [
        "Good book formatting is invisible. Readers don’t notice it, but they feel it. Consistent spacing, readable type and clean page flow keep people reading.",

        "We format fiction, nonfiction, memoirs, business books, cookbooks and children’s books, each with a layout suited to its genre.",
      ],
    },

    {
      heading: "Kindle Formatting",

      paragraphs: [
        "Digital books need a different approach from print. Our Kindle formatting service creates reflowable e-books that display properly on Kindle devices, phones and tablets.",

        "We build working tables of contents, clean chapter breaks, properly sized images and files that pass Amazon KDP checks without errors.",
      ],
    },

    {
      heading: "Book Typesetting",

      paragraphs: [
        "Book typesetting is the craft of arranging text on the page so it is easy and pleasant to read.",

        "It covers choosing the right typeface, adjusting line spacing and kerning, controlling widows and orphans, and balancing every page.",

        "Our typesetters give your book the professional finish that sets it apart from self-published books that look homemade.",
      ],
    },

    {
      heading: "Layout Design and Typesetting",

      paragraphs: [
        "Our layout design and typesetting service goes further for books that need more than plain text.",

        "Cookbooks, workbooks, photo books, textbooks and children’s books often need columns, sidebars, images, callout boxes and special page designs.",

        "We plan the whole layout so it looks attractive and stays easy to follow.",
      ],
    },

    {
      heading: "Interior Book Design",

      paragraphs: [
        "Your cover gets the reader to pick up the book. Your interior book design keeps them reading.",

        "We create a consistent, custom interior with decorative chapter openers, elegant section breaks, branded styling and a layout that fits your genre and audience.",
      ],
    },

    {
      heading:
        "Book Formatting Software vs. a Professional Formatter",

      paragraphs: [
        "Many authors search for book formatting software hoping to do the job themselves. Tools such as Microsoft Word, Vellum and Atticus can produce good results, but they take time to learn, and some are limited by the type of computer you use.",

        "Common problems include wrong margins for the page count, rejected uploads, bad e-book conversions and a layout that looks off in print.",

        "If you enjoy the process and have the time, software can work well. If you would rather spend that time on marketing and your next book, our team handles formatting for you and delivers files that are ready to upload.",
      ],
    },

    {
      heading: "How It Works",

      subsections: [
        {
          heading: "01. Send Your Manuscript",

          paragraphs: [
            "Share your final, edited file.",
          ],
        },

        {
          heading: "02. Choose Your Format",

          paragraphs: [
            "Print, e-book or both, and your trim size.",
          ],
        },

        {
          heading: "03. Design Approval",

          paragraphs: [
            "We prepare a sample layout for your feedback.",
          ],
        },

        {
          heading: "04. Full Formatting",

          paragraphs: [
            "We format the entire book and check every page.",
          ],
        },

        {
          heading: "05. Final Files",

          paragraphs: [
            "You receive upload-ready files for your publishing platform.",
          ],
        },
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Publishing-platform expertise for Amazon KDP, IngramSpark and more",

        "Genre-appropriate design that fits your readers",

        "Clean, error-free files checked before delivery",

        "Fast turnaround",

        "Easy revisions",

        "Full ownership of your finished files",
      ],
    },

    {
      heading:
        "Ready to Make Your Book Look Professional?",

      paragraphs: [
        "Get a Free Formatting Quote",
      ],
    },
  ],

  faqs: [
    {
      question: "What file do I need to send you?",

      answer:
        "A finished, edited manuscript, ideally in Word or Google Docs. Formatting works best after editing is complete.",
    },

    {
      question:
        "Do you format for both print and e-book?",

      answer:
        "Yes. We can prepare either or both.",
    },

    {
      question:
        "Can you format a book I wrote myself?",

      answer:
        "Yes. Your manuscript can come from anywhere.",
    },

    {
      question: "Do you handle covers?",

      answer: "Yes.",
    },

    {
      question:
        "How much does book formatting cost?",

      answer:
        "Pricing depends on page count, complexity and file types.",
    },
  ],
};

export default function BookFormatting() {
  return <EditingSubpageLayout data={data} />;
}
