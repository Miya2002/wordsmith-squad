
import PublishingDetailLayout, {
  type PublishingPageContent,
} from "@/components/PublishingDetailLayout";

import { EDITORIAL } from "@/lib/data";

const page: PublishingPageContent = {
  title: "eBook Publishing",

  subtitle: "Professional eBook Publishing Services",

  intro:
    "eBook Publishing support shaped around your project, audience and publishing goals.",

  heroImage: EDITORIAL.desk,

  heroEyebrow: "Professional Publishing Services",

  sections: [
    {
      id: "ebook-overview",
      title: "Explore eBook Publishing",
      blocks: [
        {
          type: "paragraph",
          text: "eBook Publishing calls for more than a one-size-fits-all approach. The right decisions depend on the purpose of your project, the people you want to reach and the experience you want them to have.",
        },
        {
          type: "paragraph",
          text: "At Wordsmith Squad, we begin by understanding your brief, source material and expectations. We then shape a practical plan that keeps the work aligned with your voice while giving the final result clarity, structure and consistency.",
        },
        {
          type: "paragraph",
          text: "Whether you are starting with an early idea or refining an established project, our eBook publishing service is designed to make the next steps easier to understand and manage.",
        },
      ],
    },

    {
      id: "ebook-importance",
      title: "Why eBook Publishing Matters",
      blocks: [
        {
          type: "paragraph",
          text: "A well-planned eBook publishing project gives your ideas a stronger foundation. It helps establish a clear direction, reduces avoidable revisions and makes the final work more useful to its intended audience.",
        },
        {
          type: "paragraph",
          text: "We pay attention to the details that influence quality: purpose, tone, structure, accuracy, consistency and presentation. Each decision is considered in the context of your specific brief.",
        },
        {
          type: "bullets",
          items: [
            "A clear direction based on your goals and audience.",
            "A structure that makes information easy to follow.",
            "Consistent tone, terminology and presentation.",
            "Thoughtful review at important project stages.",
            "A final result prepared around the agreed requirements.",
          ],
        },
      ],
    },

    {
      id: "ebook-services",
      title: "What Our eBook Publishing Service Can Include",
      blocks: [
        {
          type: "paragraph",
          text: "The scope is tailored to the type of material you are developing. We discuss the deliverables with you before work begins so the project has a shared and realistic direction.",
        },
        {
          type: "bullets",
          items: [
            "Initial discussion and project assessment.",
            "Planning and development of the core material.",
            "Refinement for clarity, flow and consistency.",
            "Review against your brief and intended audience.",
            "Final preparation and agreed revisions.",
          ],
        },
      ],
    },

    {
      id: "ebook-process",
      title: "A Collaborative Process",
      blocks: [
        {
          type: "heading",
          text: "Understand the Brief",
        },
        {
          type: "paragraph",
          text: "We learn about your objectives, audience, preferred style and any references or existing material relevant to your eBook publishing project.",
        },
        {
          type: "heading",
          text: "Create a Practical Plan",
        },
        {
          type: "paragraph",
          text: "We outline the scope, milestones and expected deliverables so you know what will happen and when.",
        },
        {
          type: "heading",
          text: "Develop and Refine",
        },
        {
          type: "paragraph",
          text: "The work is developed in stages, with attention to feedback, consistency and the requirements agreed at the start.",
        },
        {
          type: "heading",
          text: "Review and Deliver",
        },
        {
          type: "paragraph",
          text: "We complete a final review and prepare the agreed files or materials for handover.",
        },
      ],
    },

    {
      id: "ebook-audience",
      title: "Who Can Benefit from eBook Publishing?",
      blocks: [
        {
          type: "paragraph",
          text: "This service can support first-time creators, experienced professionals, independent authors, businesses and organizations. The approach changes according to the subject, complexity and intended use of the work.",
        },
        {
          type: "bullets",
          items: [
            "First-time authors developing their first eBook.",
            "Independent writers preparing digital publications.",
            "Professionals sharing their knowledge and expertise.",
            "Businesses developing digital publications.",
            "Organizations creating educational resources.",
          ],
        },
      ],
    },

    {
      id: "ebook-contact",
      title: "Ready to Discuss Your Project?",
      blocks: [
        {
          type: "paragraph",
          text: "Every project begins with a conversation. Tell us what you are creating, what stage you have reached and what outcome you have in mind. We can then discuss a suitable way forward for your eBook publishing needs.",
        },
        {
          type: "callout",
          title: "Your Ideas. Our Publishing Expertise.",
          text: "Let's work together to turn your ideas into a professionally prepared digital publication.",
        },
      ],
    },
  ],

  faqs: [
    {
      question: "What is included in eBook Publishing?",
      answer:
        "The scope depends on your brief and project goals. We discuss the required deliverables, timeline and level of support before work begins.",
    },
    {
      question: "Can the service be tailored to my project?",
      answer:
        "Yes. We shape the process around your subject, audience, preferred style and the materials you provide.",
    },
    {
      question: "Can I provide my own notes or draft?",
      answer:
        "Absolutely. Existing drafts, outlines, research, notes and reference materials can help guide the work.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Timing depends on the length, complexity and scope of the project. We agree on a realistic schedule after reviewing your requirements.",
    },
    {
      question: "Will my project details be kept private?",
      answer:
        "We treat client materials and project information with care and discuss confidentiality expectations as part of the project.",
    },
  ],
};

export default function EbookPublishing() {
  return <PublishingDetailLayout page={page} />;
}
