import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Fiction. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Fiction",
  "section": "Genre",
  "sectionUrl": "/genre",
  "intro": "Fiction designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to fiction focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Nonfiction",
      "to": "/genre/nonfiction"
    },
    {
      "label": "Memoir & Biography",
      "to": "/genre/memoir-and-biography"
    },
    {
      "label": "Romance",
      "to": "/genre/romance"
    }
  ]
};

export default function PageGenrefiction() {
  return <ServiceDetailLayout page={page} />;
}
