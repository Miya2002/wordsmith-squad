
import PublishingDetailLayout, {
  type PublishingPageContent,
} from "@/components/PublishingDetailLayout";

import { EDITORIAL } from "@/lib/data";

const page: PublishingPageContent = {
  title: "Audiobook Publishing",

  subtitle: "Professional Audiobook Publishing Services",

  intro:
    "Professional audiobook publishing support designed to bring your written work to life through engaging audio experiences.",

  heroImage: EDITORIAL.desk,

  heroEyebrow: "Professional Publishing Services",

  sections: [
    {
      id: "audiobook-overview",
      title: "Explore Audiobook Publishing",
      blocks: [
        {
          type: "paragraph",
          text: "Audiobook Publishing calls for more than simply converting written content into audio. It requires thoughtful planning, suitable narration, careful production and an understanding of the listening experience.",
        },
        {
          type: "paragraph",
          text: "At Wordsmith Squad, we begin by understanding your manuscript, audience and publishing objectives. We help shape an audiobook production approach that respects your original message while making it engaging for listeners.",
        },
        {
          type: "paragraph",
          text: "Whether you are publishing your first audiobook or expanding an existing catalogue, our approach is designed to make the process clear, organized and manageable.",
        },
      ],
    },

    {
      id: "audiobook-importance",
      title: "Why Audiobook Publishing Matters",
      blocks: [
        {
          type: "paragraph",
          text: "Audiobooks give readers another way to experience stories, ideas and information. They allow audiences to enjoy books while commuting, exercising or managing everyday activities.",
        },
        {
          type: "paragraph",
          text: "A professionally prepared audiobook combines clear narration, consistent audio quality and thoughtful presentation to create a better listening experience.",
        },
        {
          type: "bullets",
          items: [
            "Reach audiences who prefer listening to reading.",
            "Make your written content available in another format.",
            "Create additional opportunities for book distribution.",
            "Deliver clear and engaging narration.",
            "Build a consistent audio identity for your publication.",
          ],
        },
      ],
    },

    {
      id: "audiobook-services",
      title: "What Our Audiobook Publishing Service Can Include",
      blocks: [
        {
          type: "paragraph",
          text: "Every audiobook project has different requirements. We discuss your manuscript, narration preferences and production expectations before defining the project scope.",
        },
        {
          type: "bullets",
          items: [
            "Initial manuscript and project assessment.",
            "Audiobook production planning.",
            "Narrator selection and voice direction.",
            "Audio recording and narration coordination.",
            "Audio editing and sound quality refinement.",
            "Chapter organization and audio preparation.",
            "Final quality review and publishing preparation.",
          ],
        },
      ],
    },

    {
      id: "audiobook-process",
      title: "A Collaborative Process",
      blocks: [
        {
          type: "heading",
          text: "Understand Your Manuscript",
        },
        {
          type: "paragraph",
          text: "We review your material, intended audience, preferred narration style and overall audiobook objectives.",
        },
        {
          type: "heading",
          text: "Plan the Production",
        },
        {
          type: "paragraph",
          text: "We establish the production requirements, narration approach, project milestones and expected deliverables.",
        },
        {
          type: "heading",
          text: "Develop the Audio",
        },
        {
          type: "paragraph",
          text: "The narration and audio production are developed according to the agreed creative direction and quality expectations.",
        },
        {
          type: "heading",
          text: "Review and Refine",
        },
        {
          type: "paragraph",
          text: "We review the audio for clarity, consistency, organization and overall listening quality.",
        },
        {
          type: "heading",
          text: "Prepare for Publishing",
        },
        {
          type: "paragraph",
          text: "The completed audiobook files are prepared according to the agreed publishing and delivery requirements.",
        },
      ],
    },

    {
      id: "audiobook-audience",
      title: "Who Can Benefit from Audiobook Publishing?",
      blocks: [
        {
          type: "paragraph",
          text: "Audiobook publishing can support authors, professionals, businesses and organizations looking to make their content accessible to audio-first audiences.",
        },
        {
          type: "bullets",
          items: [
            "Independent authors expanding their book formats.",
            "Fiction writers creating narrated storytelling experiences.",
            "Business professionals sharing knowledge and expertise.",
            "Educators developing audio learning resources.",
            "Publishers expanding their existing catalogues.",
          ],
        },
      ],
    },

    {
      id: "audiobook-contact",
      title: "Ready to Discuss Your Project?",
      blocks: [
        {
          type: "paragraph",
          text: "Have a manuscript ready for its audio edition? Tell us about your book, your audience and your publishing goals. We can discuss a suitable production approach for your audiobook.",
        },
        {
          type: "callout",
          title: "Your Story Deserves to Be Heard.",
          text: "Let's transform your written work into an engaging listening experience with thoughtful audiobook publishing support.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "What is included in audiobook publishing?",
      answer:
        "Depending on your project, services can include production planning, narration coordination, audio editing, quality review and publishing preparation.", 
    },
    {
      question: "Can I choose my audiobook narrator?",
      answer:
        "Narration preferences can be discussed during planning. The suitable voice depends on your content, audience and creative direction.",
    },
    {
      question: "Can you turn my existing book into an audiobook?",
      answer:
        "Yes. Existing manuscripts and published books can be assessed for audiobook production.",
    },
    {
      question: "How long does audiobook production take?",
      answer:
        "The timeline depends on manuscript length, narration requirements and production complexity.",
    },
    {
      question: "Can I publish my audiobook on digital platforms?",
      answer:
        "We can discuss suitable distribution options and prepare the agreed audio materials according to platform requirements.",
    },
    {
      question: "Do you guarantee audiobook sales?",
      answer:
        "No publishing service can guarantee sales. Professional production and suitable distribution can help prepare your audiobook for its intended audience.",
    },
  ],
};

export default function AudiobookPublishing() {
  return <PublishingDetailLayout page={page} />;
}
