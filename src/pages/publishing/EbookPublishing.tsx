
import PublishingDetailLayout, {
  type PublishingPageContent,
} from "@/components/PublishingDetailLayout";

const page: PublishingPageContent = {
  title: "eBook Publishing",
  subtitle:
    "Your manuscript deserves a global audience. We help transform your finished work into a professionally prepared eBook, ready for digital readers.",
  intro: "",
  sections: [
    {
      id: "ebook-introduction",
      title: "From Your Manuscript to a Global Audience",
      blocks: [
        {
          type: "paragraph",
          text: "You've spent months perfecting your book. Now it's time for the world to read it. At Wordsmith Squad, we make the eBook publishing journey more straightforward, helping your story reach readers across digital platforms.",
        },
        {
          type: "paragraph",
          text: "Whether you are starting with an idea or preparing a completed manuscript, our team can support the writing, editing, cover design, formatting, publishing, and distribution stages. We take care of the technical details so you can focus on your readers and your author journey.",
        },
        {
          type: "paragraph",
          text: "Our goal is to turn your expertise, imagination, and hard work into a polished digital book that reflects your vision and meets the requirements of your chosen publishing platforms.",
        },
      ],
    },
    {
      id: "ebook-company",
      title: "An eBook Publishing Partner for Serious Authors",
      blocks: [
        {
          type: "paragraph",
          text: "Publishing an eBook involves more than uploading a document. It requires a well-prepared manuscript, professional presentation, suitable metadata, and a distribution strategy. We bring these elements together in one coordinated process.",
        },
        {
          type: "heading",
          text: "Writing, Design and Publishing Under One Roof",
        },
        {
          type: "paragraph",
          text: "From a blank page to a completed digital edition, we can help coordinate the services your project needs.",
        },
        {
          type: "bullets",
          items: [
            "Ghostwriting and manuscript development based on your ideas and expertise.",
            "Professional editing and proofreading.",
            "Custom book cover design that reflects your genre and audience.",
            "Kindle and EPUB formatting for compatible digital reading devices.",
            "Publishing preparation, metadata and platform setup.",
          ],
        },
      ],
    },
    {
      id: "ebook-distribution",
      title: "Global eBook Publishing and Distribution",
      blocks: [
        {
          type: "paragraph",
          text: "Your book deserves to be available where your readers prefer to shop. We help prepare your eBook for distribution through major digital bookstores, depending on platform eligibility and your chosen publishing arrangement.",
        },
        {
          type: "bullets",
          items: [
            "Amazon Kindle Direct Publishing.",
            "Apple Books.",
            "Kobo.",
            "Google Play Books.",
            "Barnes & Noble Press.",
          ],
        },
        {
          type: "callout",
          title: "A wider digital presence",
          text: "Our focus is to help make your book accessible to readers across suitable digital marketplaces while keeping your publishing goals and ownership arrangements clear.",
        },
      ],
    },
    {
      id: "ebook-printing",
      title: "Professional Printing for Physical Editions",
      blocks: [
        {
          type: "paragraph",
          text: "Although your primary project may be an eBook, you may also want a physical edition for readers who enjoy holding a printed book. We can help you explore print editions as a complementary part of your publishing plan.",
        },
        {
          type: "bullets",
          items: [
            "Paperback book preparation and printing support.",
            "Hardcover edition preparation.",
            "Print-ready cover and interior files.",
            "Bulk printing options for suitable projects and events.",
          ],
        },
      ],
    },
    {
      id: "ebook-why-us",
      title: "Why Choose Our eBook Publishing Services?",
      blocks: [
        {
          type: "paragraph",
          text: "Every book has different requirements. We take time to understand your manuscript, intended readership, publishing preferences, and budget before recommending the appropriate services.",
        },
        {
          type: "heading",
          text: "A Publishing Experience Built Around Your Goals",
        },
        {
          type: "bullets",
          items: [
            "Personalized guidance for first-time and established authors.",
            "Professional manuscript preparation and digital formatting.",
            "Genre-conscious cover and interior design.",
            "Support with publishing platform requirements.",
            "Distribution planning for suitable digital bookstores.",
            "Optional marketing and promotional support.",
            "Clear communication and attention to confidentiality.",
          ],
        },
      ],
    },
    {
      id: "ebook-process",
      title: "Our Steps to Prepare Your Book for Digital Readers",
      blocks: [
        {
          type: "paragraph",
          text: "We organize the publishing journey into clear stages, so you know what is happening and what decisions are required along the way.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Discover Your Book's Direction",
              text: "We discuss your genre, audience, subject, publishing goals, and the overall identity of your book.",
            },
            {
              title: "Develop and Refine the Manuscript",
              text: "If needed, we coordinate writing, editing, and proofreading to prepare the content.",
            },
            {
              title: "Create the Cover and Format",
              text: "We prepare the visual presentation and digital files for your selected reading formats.",
            },
            {
              title: "Prepare Publishing Details",
              text: "We help organize metadata, categories, descriptions, and other required publishing information.",
            },
            {
              title: "Publish and Distribute",
              text: "We assist with the agreed platform setup and distribution process, subject to each platform's requirements.",
            },
            {
              title: "Plan Your Promotion",
              text: "We can discuss suitable launch activities, advertising, and ongoing promotional opportunities.",
            },
          ],
        },
      ],
    },
    {
      id: "ebook-audience",
      title: "Who Can Benefit from Our eBook Publishing Services?",
      blocks: [
        {
          type: "paragraph",
          text: "Our services are designed for people who have knowledge, experiences, or stories they want to share with a wider audience.",
        },
        {
          type: "heading",
          text: "Aspiring Authors",
        },
        {
          type: "paragraph",
          text: "First-time writers can receive guidance with manuscript development, editing, cover design, and digital publication, making the process easier to understand.",
        },
        {
          type: "heading",
          text: "Business Owners and Entrepreneurs",
        },
        {
          type: "paragraph",
          text: "An eBook can help communicate industry knowledge, business insights, and professional experience while supporting your personal or company brand.",
        },
        {
          type: "heading",
          text: "Coaches and Consultants",
        },
        {
          type: "paragraph",
          text: "Turn your methods, practical knowledge, and professional experience into an organized resource for clients and readers.",
        },
        {
          type: "heading",
          text: "Bloggers and Content Creators",
        },
        {
          type: "paragraph",
          text: "Bring related articles, podcast insights, and existing content together into a cohesive eBook with a clear structure and purpose.",
        },
      ],
    },
    {
      id: "ebook-diy",
      title: "Avoid the Common Challenges of DIY eBook Publishing",
      blocks: [
        {
          type: "paragraph",
          text: "Publishing independently offers creative control, but technical and presentation issues can affect the final result. Professional support can help you approach these details with greater confidence.",
        },
        {
          type: "bullets",
          items: [
            "Incorrect formatting that affects the reading experience.",
            "Covers that do not communicate the book's genre or subject.",
            "Incomplete metadata or publishing information.",
            "Limited understanding of digital distribution requirements.",
            "A launch without a clear promotional plan.",
          ],
        },
        {
          type: "paragraph",
          text: "We help address these challenges through coordinated manuscript preparation, design, formatting, publishing assistance, and optional marketing support.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does eBook publishing take?",
      answer:
        "The timeline depends on manuscript length, editing requirements, design, and platform preparation. A complete writing-to-publication project may take around 30–45 days, although individual projects can vary.",
    },
    {
      question: "Do I retain ownership of my book?",
      answer:
        "Ownership and royalty arrangements should be clearly agreed in your service contract. Our aim is to support your publishing project while respecting your intellectual property.",
    },
    {
      question: "Can you help write my eBook from scratch?",
      answer:
        "Yes. We can discuss ghostwriting based on your ideas, notes, research, or outline, with the goal of reflecting your intended message and voice.",
    },
    {
      question: "Which platforms can my eBook appear on?",
      answer:
        "Depending on eligibility and your publishing arrangement, options may include Amazon Kindle, Apple Books, Kobo, Google Play Books, and Barnes & Noble Press.",
    },
    {
      question: "Do you provide marketing support?",
      answer:
        "Yes. Optional support can include book descriptions, launch planning, social media promotion, advertising strategy, and other suitable promotional activities.",
    },
  ],
};

export default function EbookPublishing() {
  return <PublishingDetailLayout page={page} />;
}
