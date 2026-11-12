import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Book Publishing Services. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Book Publishing Services",
  "section": "Publishing",
  "sectionUrl": "/publishing",
  "intro": "Book Publishing Services designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to book publishing services focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Self Publishing",
      "to": "/publishing/self-publishing"
    },
    {
      "label": "eBook Publishing",
      "to": "/publishing/ebook-publishing"
    },
    {
      "label": "Print on Demand",
      "to": "/publishing/print-on-demand"
    }
  ]
};

export default function PagePublishingbookpublishingservices() {
  return <ServiceDetailLayout page={page} />;
}
