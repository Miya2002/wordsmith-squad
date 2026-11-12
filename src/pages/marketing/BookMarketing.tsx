import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Book Marketing. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Book Marketing",
  "section": "Marketing",
  "sectionUrl": "/marketing",
  "intro": "Book Marketing designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to book marketing focuses on clarity, thoughtful collaboration, and a polished final result.",
  "highlights": [
    "A clear creative direction",
    "Careful attention to detail",
    "Support tailored to your project"
  ],
  "process": [
    "Share your vision",
    "Shape a thoughtful plan",
    "Refine and move forward"
  ],
  "related": [
    {
      "label": "Author Branding",
      "to": "/marketing/author-branding"
    },
    {
      "label": "Social Media Promotion",
      "to": "/marketing/social-media-promotion"
    },
    {
      "label": "Book Launch Campaigns",
      "to": "/marketing/book-launch-campaigns"
    }
  ]
};

export default function PageMarketingbookmarketing() {
  return <ServiceDetailLayout page={page} />;
}
