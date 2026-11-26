
import EditingSubpageLayout, {
  type EditingPageData,
} from "@/pages/editing/EditingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Self Publishing Consultants
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 53–56
 *
 * Existing layout, animations, styling,
 * page number and image retained.
 *
 * Content is sourced from the approved PDF.
 */

const data: EditingPageData = {
  title: "Self Publishing Consultants",

  subtitle:
    "Self-Publishing Support for Authors in the USA",

  number: "03",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Self Publishing Consultants",

  accent: "gold",

  description:
    "Not sure where to start, or need an expert second opinion? Our self publishing consultants offer one-on-one guidance to help you pick a path, avoid common mistakes and plan your launch. Consulting is useful for first-time authors, authors who tried publishing before without results and professionals who want a clear plan fast.",

  sections: [
    {
      heading: "Self Publishing Consultants",

      paragraphs: [
        "Not sure where to start, or need an expert second opinion? Our self publishing consultants offer one-on-one guidance to help you pick a path, avoid common mistakes and plan your launch.",

        "Consulting is useful for first-time authors, authors who tried publishing before without results and professionals who want a clear plan fast.",
      ],
    },

    {
      heading: "Self-Publishing Support for Authors in the USA",

      paragraphs: [
        "Self-publishing gives you speed, control and the freedom to keep your rights. It also means you are in charge of every decision: editing, design, formatting, uploading, pricing and marketing.",

        "At Wordsmith Squad, we guide you through each step so your book looks and reads like it came from a professional publisher. You own your book, your files and your rights.",
      ],
    },

    {
      heading: "Self Publishing",

      paragraphs: [
        "Self publishing means you publish your book yourself instead of selling the rights to a traditional publisher.",

        "You choose the cover, price and release date, and you earn higher royalties per sale.",

        "The trade-off is that you handle (or hire out) everything a publisher would normally do. We help you do it properly.",
      ],
    },

    {
      heading: "Self Publishing Services",

      paragraphs: [
        "Our self publishing services cover the full path from finished manuscript to live book.",

        "You can choose the full package or only the steps you need.",
      ],

      bullets: [
        "Editing and proofreading coordination",
        "Interior formatting and typesetting",
        "Cover design coordination",
        "Platform setup and file uploads",
        "Book descriptions, categories and keywords",
        "Launch planning",
      ],
    },

    {
      heading: "How to Self Publish a Book",

      paragraphs: [
        "Wondering how to self publish a book? Here is the usual path:",
      ],

      subsections: [
        {
          heading: "01. Finish and Edit Your Manuscript",
          paragraphs: [
            "Professional editing and proofreading make the biggest difference in reviews.",
          ],
        },
        {
          heading: "02. Format the Interior",
          paragraphs: [
            "Print and e-book files each need correct formatting.",
          ],
        },
        {
          heading: "03. Design a Professional Cover",
          paragraphs: [
            "Your cover is your most important sales tool.",
          ],
        },
        {
          heading: "04. Get Your ISBN and Book Details Ready",
          paragraphs: [
            "Decide on your title, subtitle, description and categories.",
          ],
        },
        {
          heading: "05. Choose Your Platforms",
          paragraphs: [
            "Most authors start with Amazon and add other retailers.",
          ],
        },
        {
          heading: "06. Set Your Price and Upload",
          paragraphs: [
            "Review the proof copy carefully before approving.",
          ],
        },
        {
          heading: "07. Launch and Promote",
          paragraphs: [
            "Reviews, email lists and targeted marketing help new books gain traction.",
          ],
        },
      ],
    },

    {
      heading: "Amazon KDP",

      paragraphs: [
        "Amazon KDP (Kindle Direct Publishing) is the most popular self-publishing platform in the US. It lets you publish e-books, paperbacks and hardcovers and reach Amazon’s customers worldwide.",

        "KDP is free to use, but getting results depends on correct formatting, a strong cover, a persuasive description and smart category and keyword choices.",

        "We prepare your book so your upload goes smoothly and your listing is built to sell.",
      ],
    },

    {
      heading: "Kindle Direct Publishing",

      paragraphs: [
        "Our Kindle direct publishing support covers account setup, file preparation, metadata, pricing and publishing.",

        "We make sure your e-book displays well on Kindle devices and apps, and your print edition meets KDP’s requirements.",
      ],
    },

    {
      heading: "Print on Demand Books",

      paragraphs: [
        "Print on demand books are printed only when a customer orders, so you don’t need to pay for or store a large print run.",

        "It is the main reason self-publishing is affordable today. Print on demand is offered through platforms such as KDP and IngramSpark, and it works for paperbacks and many hardcovers.",

        "We help you choose a trim size, paper type and cover finish that fit your book and budget.",
      ],
    },

    {
      heading: "Self Publishing Companies: How to Choose Wisely",

      paragraphs: [
        "Many authors compare self publishing companies before deciding. Good ones are transparent about fees, let you keep your rights and files, and don’t pressure you.",

        "Always read the contract and ask who owns the files. With Wordsmith Squad, you do.",
      ],

      bullets: [
        "Promise guaranteed sales or bestseller status",
        "Take your rights or ISBN",
        "Hide fees or push expensive add-on packages",
        "Rely on aggressive sales calls",
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Honest advice, including when a service isn’t right for you",
        "You keep all rights and files",
        "One team for writing, editing, design, formatting and publishing",
        "Transparent pricing with no hidden fees",
        "Strict confidentiality through a signed NDA",
      ],
    },

    {
      heading: "Ready to Self-Publish?",

      paragraphs: [
        "Book Your Free Consultation",
      ],
    },
  ],

  faqs: [
    {
      question: "How much does it cost to self-publish a book?",
      answer: "It depends on the services you need.",
    },
    {
      question: "Do I need an ISBN?",
      answer: "Usually, yes, for wide distribution.",
    },
    {
      question: "How long does it take?",
      answer:
        "Once your manuscript is edited, publishing can take a few weeks.",
    },
    {
      question: "Will you guarantee sales?",
      answer:
        "No. Nobody honestly can. We build a professional book and a solid launch plan.",
    },
  ],
};

export default function SelfPublishingConsultants() {
  return <EditingSubpageLayout data={data} />;
}
