
import {
  type DetailContent,
} from "@/components/ServiceDetailLayout";

import CreativeWritingSubpageLayout from "./CreativeWritingSubpageLayout";

/**
 * This file belongs ONLY to Newsletter Writing.
 * Its content is independent of all other Creative Writing pages.
 */

const page: DetailContent = {
  title: "Newsletter Writing",

  section: "Creative Writing",

  sectionUrl: "/creative-writing",

  intro:
    "Professional newsletter writing designed to connect with your audience, communicate your message and keep readers engaged.",

  description:
    "From informative business updates to engaging email newsletters, we create clear, purposeful and reader-focused content that reflects your brand voice.",

  highlights: [
    "Engaging newsletter content",
    "Consistent brand voice and messaging",
    "Audience-focused communication",
    "Clear structure and readability",
    "Professional editing and refinement"
  ],

  process: [
    "Understand your audience and goals",
    "Plan and develop newsletter content",
    "Review, refine and finalize"
  ],

  related: [
    {
      label: "Email Ghostwriting",
      to: "/creative-writing/email-ghostwriting"
    },
    {
      label: "Article & Blog Writing",
      to: "/creative-writing/article-and-blog-writing"
    },
    {
      label: "Social Media Content Writing",
      to: "/creative-writing/social-media-content-writing"
    }
  ]
};

export default function NewsletterWriting() {
  return <CreativeWritingSubpageLayout page={page} />;
}
