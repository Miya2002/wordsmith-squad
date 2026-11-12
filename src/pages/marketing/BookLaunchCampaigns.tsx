import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Book Launch Campaigns. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Book Launch Campaigns",
  "section": "Marketing",
  "sectionUrl": "/marketing",
  "intro": "Book Launch Campaigns designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to book launch campaigns focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Book Marketing",
      "to": "/marketing/book-marketing"
    },
    {
      "label": "Author Branding",
      "to": "/marketing/author-branding"
    },
    {
      "label": "Social Media Promotion",
      "to": "/marketing/social-media-promotion"
    }
  ]
};

export default function PageMarketingbooklaunchcampaigns() {
  return <ServiceDetailLayout page={page} />;
}
