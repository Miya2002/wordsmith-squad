
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * WORDSMITH SQUAD
 * Book Publishing Services
 *
 * SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 42–46
 *
 * Existing layout, animations, styling,
 * images and reusable components retained.
 */

const data: EditingPageData = {
  title: "Book Publishing Services",

  subtitle:
    "Book Publishing Guidance and Support for Authors in the USA",

  number: "08",

  image: EDITORIAL.desk,

  imageAlt:
    "Editorial workspace for Book Publishing Services",

  accent: "gold",

  description:
    "Finishing a manuscript is a big milestone. Getting it into readers’ hands is the next one, and the options can feel confusing. Traditional publisher or self-publishing? Amazon or Barnes & Noble? What is hybrid publishing, and how do you avoid a bad deal? At Wordsmith Squad, we help you understand your options, prepare your book properly and publish it the way that fits your goals. You keep your rights and your creative control.",

  sections: [
    {
      heading: "Book Publishing Services",

      paragraphs: [
        "Our book publishing services take your finished manuscript through the steps between “done writing” and “live on sale.” Depending on your needs, this can include choosing a publishing path, preparing files, setting up your book on retail platforms, writing your book description, selecting categories and keywords, and planning your launch.",
      ],
    },

    {
      heading: "Book Publishing Company",

      paragraphs: [
        "Wordsmith Squad works as a book publishing company in the sense of a service partner: we support you through each stage while you remain the publisher of record and keep your rights.",
      ],
    },

    {
      heading: "Publish My Book",

      paragraphs: [
        "Many authors simply search publish my book because they want a clear next step. Here is how we help:",
      ],

      subsections: [
        {
          heading: "01. Review Your Manuscript",

          paragraphs: [
            "Is it edited and ready, or does it need more work first?",
          ],
        },

        {
          heading: "02. Choose Your Path",

          paragraphs: [
            "Traditional, hybrid or self-publishing.",
          ],
        },

        {
          heading: "03. Prepare Your Files",

          paragraphs: [
            "Formatting, cover files and metadata.",
          ],
        },

        {
          heading: "04. Publish and Launch",

          paragraphs: [
            "Upload, proof, release and promote.",
          ],
        },
      ],
    },

    {
      heading: "Traditional Publishing",

      paragraphs: [
        "With traditional publishing, a publisher buys the right to publish your book, pays for editing, design and distribution, and typically pays you an advance and royalties.",

        "It offers prestige and bookstore reach, but it is competitive, slow and often requires a literary agent. You also give up some control over the cover, title, price and rights.",

        "Best for: Authors who want bookstore distribution and are willing to wait, query and compromise.",
      ],
    },

    {
      heading: "Publishers Accepting Manuscripts",

      paragraphs: [
        "Authors often search for publishers accepting manuscripts. Some smaller and independent publishers accept submissions directly from authors, while most large publishers only accept work through literary agents.",

        "Before you submit anywhere, we recommend that you:",
      ],

      bullets: [
        "Read each publisher’s submission guidelines carefully",

        "Confirm the publisher does not charge reading or publishing fees",

        "Prepare a strong query letter and, for nonfiction, a book proposal",

        "Keep track of every submission",
      ],
    },

    {
      heading: "Hybrid Publishing",

      paragraphs: [
        "Hybrid publishing sits between traditional and self-publishing. Authors usually pay for production services such as editing, design and distribution, while receiving higher royalties and more control than in traditional publishing.",

        "Quality varies widely. Reputable hybrid publishers are selective and transparent, while others are essentially pay-to-publish services with a different name.",

        "Always check what you are paying for and what you receive.",
      ],
    },

    {
      heading: "Vanity Press: What to Watch For",

      paragraphs: [
        "A vanity press charges authors large fees to print books, often with little editing, weak distribution and no real marketing.",

        "Warning signs include:",
      ],

      bullets: [
        "Guaranteed publication with no quality review",

        "Rights taken from the author",

        "Inflated printing costs and forced bulk purchases",

        "Vague contracts and high-pressure sales calls",
      ],
    },

    {
      heading: "Amazon Publishing",

      paragraphs: [
        "Many first-time authors choose Amazon publishing through Kindle Direct Publishing (KDP), which lets you publish e-books, paperbacks and hardcovers with no upfront cost for the platform and a worldwide customer base.",

        "You keep your rights and set your price. The challenge is doing it well: correct formatting, a strong cover, a persuasive description and the right categories and keywords.",

        "We help you set up and publish your book on Amazon so it looks professional and is easy to find.",
      ],
    },

    {
      heading: "Barnes and Noble Publishing",

      paragraphs: [
        "Authors who want to reach readers beyond Amazon can use Barnes and Noble publishing through Barnes & Noble Press, the company’s self-publishing platform.",

        "It can be a useful way to add print and digital availability in a major US bookseller’s ecosystem.",

        "Note that listing a book on the platform is not the same as getting it stocked in physical stores. We can advise on whether it makes sense for your book.",
      ],
    },

    {
      heading: "Global Book Publishing",

      paragraphs: [
        "Your readers may not all live in the United States. Global book publishing means making your book available through international retailers and distributors, so readers in the UK, Canada, Australia, Europe and beyond can buy it.",

        "We help you choose distribution options, set international pricing and make sure your book’s details are consistent across territories.",
      ],
    },

    {
      heading: "Which Publishing Path Is Right for You?",

      paragraphs: [
        "Not sure which is right? Book a free consultation and we’ll recommend a path based on your goals, budget and timeline.",

        "The following comparison covers the three publishing paths described in our publishing guide.",
      ],

      subsections: [
        {
          heading: "Traditional Publishing",

          bullets: [
            "Upfront cost: None",

            "Control: Low",

            "Royalties: Lower",

            "Speed: Slow (often 1 to 2+ years)",

            "Needs an agent: Usually",
          ],
        },

        {
          heading: "Hybrid Publishing",

          bullets: [
            "Upfront cost: Medium to high",

            "Control: Medium to high",

            "Royalties: Higher",

            "Speed: Moderate",

            "Needs an agent: Rarely",
          ],
        },

        {
          heading: "Self-Publishing",

          bullets: [
            "Upfront cost: Low to medium",

            "Control: Full",

            "Royalties: Highest",

            "Speed: Fast",

            "Needs an agent: No",
          ],
        },
      ],
    },

    {
      heading: "Why Choose Wordsmith Squad",

      bullets: [
        "Honest guidance on every option, including those we don’t sell",

        "You keep your rights and your files",

        "Transparent pricing with no hidden fees",

        "A full-service team for writing, editing, formatting and publishing",

        "Strict confidentiality through a signed NDA",
      ],
    },

    {
      heading: "Ready to Publish Your Book?",

      paragraphs: [
        "Book Your Free Consultation",
      ],
    },
  ],

  faqs: [
    {
      question:
        "Do I need a literary agent to publish a book?",

      answer:
        "Not for self-publishing or hybrid publishing. For most large traditional publishers, yes.",
    },

    {
      question:
        "How long does publishing take?",

      answer:
        "Self-publishing can take weeks to a few months once your manuscript is ready. Traditional publishing often takes much longer.",
    },

    {
      question:
        "Will I keep my rights?",

      answer:
        "With us, yes. You are always the owner of your work.",
    },

    {
      question:
        "How much does it cost to publish a book?",

      answer:
        "It depends on the path and services you choose.",
    },
  ],
};

export default function BookPublishingServices() {
  return (
    <GhostwritingSubpageLayout data={data} />
  );
}
