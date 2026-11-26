
import PublishingDetailLayout, {
  type PublishingPageContent,
} from "@/components/PublishingDetailLayout";

/**
 * WORDSMITH SQUAD
 * Self Publishing
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 53–56
 *
 * Original PublishingDetailLayout retained.
 * Existing styling, animations, routing,
 * and responsive layout remain unchanged.
 *
 * Content sourced from the approved PDF.
 */

const page: PublishingPageContent = {
  title: "Self Publishing",

  subtitle:
    "Self-Publishing Support for Authors in the USA",

  intro:
    "Self-publishing gives you speed, control and the freedom to keep your rights. It also means you are in charge of every decision: editing, design, formatting, uploading, pricing and marketing. At Wordsmith Squad, we guide you through each step so your book looks and reads like it came from a professional publisher. You own your book, your files and your rights.",

  sections: [
    {
      id: "self-publishing-introduction",

      title: "Self Publishing",

      blocks: [
        {
          type: "paragraph",

          text:
            "Self publishing means you publish your book yourself instead of selling the rights to a traditional publisher. You choose the cover, price and release date, and you earn higher royalties per sale.",
        },

        {
          type: "paragraph",

          text:
            "The trade-off is that you handle (or hire out) everything a publisher would normally do. We help you do it properly.",
        },
      ],
    },

    {
      id: "self-publishing-services",

      title: "Self Publishing Services",

      blocks: [
        {
          type: "paragraph",

          text:
            "Our self publishing services cover the full path from finished manuscript to live book:",
        },

        {
          type: "bullets",

          items: [
            "Editing and proofreading coordination",

            "Interior formatting and typesetting",

            "Cover design coordination",

            "Platform setup and file uploads",

            "Book descriptions, categories and keywords",

            "Launch planning",
          ],
        },

        {
          type: "paragraph",

          text:
            "You can choose the full package or only the steps you need.",
        },
      ],
    },

    {
      id: "how-to-self-publish",

      title: "How to Self Publish a Book",

      blocks: [
        {
          type: "paragraph",

          text:
            "Wondering how to self publish a book? Here is the usual path:",
        },

        {
          type: "steps",

          items: [
            {
              title:
                "01. Finish and Edit Your Manuscript",

              text:
                "Professional editing and proofreading make the biggest difference in reviews.",
            },

            {
              title:
                "02. Format the Interior",

              text:
                "Print and e-book files each need correct formatting.",
            },

            {
              title:
                "03. Design a Professional Cover",

              text:
                "Your cover is your most important sales tool.",
            },

            {
              title:
                "04. Get Your ISBN and Book Details Ready",

              text:
                "Decide on your title, subtitle, description and categories.",
            },

            {
              title:
                "05. Choose Your Platforms",

              text:
                "Most authors start with Amazon and add other retailers.",
            },

            {
              title:
                "06. Set Your Price and Upload",

              text:
                "Review the proof copy carefully before approving.",
            },

            {
              title:
                "07. Launch and Promote",

              text:
                "Reviews, email lists and targeted marketing help new books gain traction.",
            },
          ],
        },
      ],
    },

    {
      id: "amazon-kdp",

      title: "Amazon KDP",

      blocks: [
        {
          type: "paragraph",

          text:
            "Amazon KDP (Kindle Direct Publishing) is the most popular self-publishing platform in the US. It lets you publish e-books, paperbacks and hardcovers and reach Amazon’s customers worldwide.",
        },

        {
          type: "paragraph",

          text:
            "KDP is free to use, but getting results depends on correct formatting, a strong cover, a persuasive description and smart category and keyword choices.",
        },

        {
          type: "paragraph",

          text:
            "We prepare your book so your upload goes smoothly and your listing is built to sell.",
        },
      ],
    },

    {
      id: "kindle-direct-publishing",

      title: "Kindle Direct Publishing",

      blocks: [
        {
          type: "paragraph",

          text:
            "Our Kindle direct publishing support covers account setup, file preparation, metadata, pricing and publishing.",
        },

        {
          type: "paragraph",

          text:
            "We make sure your e-book displays well on Kindle devices and apps, and your print edition meets KDP’s requirements.",
        },

        {
          type: "bullets",

          items: [
            "Account setup",

            "File preparation",

            "Metadata",

            "Pricing",

            "Publishing",
          ],
        },
      ],
    },

    {
      id: "print-on-demand-books",

      title: "Print on Demand Books",

      blocks: [
        {
          type: "paragraph",

          text:
            "Print on demand books are printed only when a customer orders, so you don’t need to pay for or store a large print run.",
        },

        {
          type: "paragraph",

          text:
            "It is the main reason self-publishing is affordable today. Print on demand is offered through platforms such as KDP and IngramSpark, and it works for paperbacks and many hardcovers.",
        },

        {
          type: "paragraph",

          text:
            "We help you choose a trim size, paper type and cover finish that fit your book and budget.",
        },
      ],
    },

    {
      id: "self-publishing-companies",

      title:
        "Self Publishing Companies: How to Choose Wisely",

      blocks: [
        {
          type: "paragraph",

          text:
            "Many authors compare self publishing companies before deciding. Good ones are transparent about fees, let you keep your rights and files, and don’t pressure you.",
        },

        {
          type: "paragraph",

          text:
            "Be careful with companies that:",
        },

        {
          type: "bullets",

          items: [
            "Promise guaranteed sales or bestseller status",

            "Take your rights or ISBN",

            "Hide fees or push expensive add-on packages",

            "Rely on aggressive sales calls",
          ],
        },

        {
          type: "callout",

          title: "Always Read the Contract",

          text:
            "Always read the contract and ask who owns the files. With Wordsmith Squad, you do.",
        },
      ],
    },

    {
      id: "self-publishing-consultants",

      title: "Self Publishing Consultants",

      blocks: [
        {
          type: "paragraph",

          text:
            "Not sure where to start, or need an expert second opinion? Our self publishing consultants offer one-on-one guidance to help you pick a path, avoid common mistakes and plan your launch.",
        },

        {
          type: "paragraph",

          text:
            "Consulting is useful for first-time authors, authors who tried publishing before without results and professionals who want a clear plan fast.",
        },
      ],
    },

    {
      id: "self-publishing-why-choose-us",

      title: "Why Choose Wordsmith Squad",

      blocks: [
        {
          type: "bullets",

          items: [
            "Honest advice, including when a service isn’t right for you",

            "You keep all rights and files",

            "One team for writing, editing, design, formatting and publishing",

            "Transparent pricing with no hidden fees",

            "Strict confidentiality through a signed NDA",
          ],
        },
      ],
    },

    {
      id: "self-publishing-final-cta",

      title: "Ready to Self-Publish?",

      blocks: [
        {
          type: "paragraph",

          text: "Book Your Free Consultation",
        },
      ],
    },
  ],

  faqs: [
    {
      question:
        "How much does it cost to self-publish a book?",

      answer:
        "It depends on the services you need.",
    },

    {
      question: "Do I need an ISBN?",

      answer:
        "Usually, yes, for wide distribution.",
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

export default function SelfPublishing() {
  return <PublishingDetailLayout page={page} />;
}
