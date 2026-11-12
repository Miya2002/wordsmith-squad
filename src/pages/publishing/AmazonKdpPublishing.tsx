import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Amazon KDP Publishing. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Amazon KDP Publishing",
  "section": "Publishing",
  "sectionUrl": "/publishing",
  "intro": "Amazon KDP Publishing designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to amazon kdp publishing focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Book Publishing Services",
      "to": "/publishing/book-publishing-services"
    },
    {
      "label": "Self Publishing",
      "to": "/publishing/self-publishing"
    },
    {
      "label": "eBook Publishing",
      "to": "/publishing/ebook-publishing"
    }
  ]
};

export default function PagePublishingamazonkdppublishing() {
  return <ServiceDetailLayout page={page} />;
}
