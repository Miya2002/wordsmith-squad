import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Amazon Book Promotion. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Amazon Book Promotion",
  "section": "Marketing",
  "sectionUrl": "/marketing",
  "intro": "Amazon Book Promotion designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to amazon book promotion focuses on clarity, thoughtful collaboration, and a polished final result.",
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

export default function PageMarketingamazonbookpromotion() {
  return <ServiceDetailLayout page={page} />;
}
