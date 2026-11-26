
import {
  ServiceDetailLayout,
  type DetailContent,
} from "@/components/ServiceDetailLayout";

/**
 * WORDSMITH SQUAD
 * Book Publishing Services
 *
 * Approved SEO Content Source:
 * Wordssmith Squad SEO for website.pdf
 * Pages 42–46
 *
 * Existing ServiceDetailLayout, styling,
 * animations, routes and component
 * structure remain unchanged.
 *
 * Only content has been replaced
 * with approved SEO PDF material.
 */

const page: DetailContent = {
  title: "Book Publishing Services",

  section: "Publishing",

  sectionUrl: "/publishing",

  intro:
    "Finishing a manuscript is a big milestone. Getting it into readers’ hands is the next one, and the options can feel confusing. Traditional publisher or self-publishing? Amazon or Barnes & Noble? What is hybrid publishing, and how do you avoid a bad deal? At Wordsmith Squad, we help you understand your options, prepare your book properly and publish it the way that fits your goals. You keep your rights and your creative control.",

  description:
    "Our book publishing services take your finished manuscript through the steps between “done writing” and “live on sale.” Depending on your needs, this can include choosing a publishing path, preparing files, setting up your book on retail platforms, writing your book description, selecting categories and keywords, and planning your launch. Wordsmith Squad works as a book publishing company in the sense of a service partner: we support you through each stage while you remain the publisher of record and keep your rights.",

  highlights: [
    "Book Publishing Guidance and Support for Authors in the USA",

    "Choosing a publishing path: traditional, hybrid or self-publishing",

    "Preparing files, setting up your book on retail platforms, writing your book description, selecting categories and keywords, and planning your launch",

    "Traditional publishing: A publisher buys the right to publish your book, pays for editing, design and distribution, and typically pays you an advance and royalties",

    "Hybrid publishing: Authors usually pay for production services such as editing, design and distribution, while receiving higher royalties and more control than in traditional publishing",

    "Amazon publishing through Kindle Direct Publishing (KDP), including e-books, paperbacks and hardcovers",

    "Barnes and Noble publishing through Barnes & Noble Press, the company’s self-publishing platform",

    "Global book publishing through international retailers and distributors",

    "Honest guidance on every option, including those we don’t sell",

    "You keep your rights and your files",

    "Transparent pricing with no hidden fees",

    "A full-service team for writing, editing, formatting and publishing",

    "Strict confidentiality through a signed NDA",
  ],

  process: [
    "Review your manuscript: Is it edited and ready, or does it need more work first?",

    "Choose your path: Traditional, hybrid or self-publishing.",

    "Prepare your files: Formatting, cover files and metadata.",

    "Publish and launch: Upload, proof, release and promote.",
  ],

  related: [
    {
      label: "Self Publishing",
      to: "/publishing/self-publishing",
    },

    {
      label: "eBook Publishing",
      to: "/publishing/ebook-publishing",
    },

    {
      label: "Print on Demand",
      to: "/publishing/print-on-demand",
    },
  ],
};

export default function PagePublishingbookpublishingservices() {
  return <ServiceDetailLayout page={page} />;
}
