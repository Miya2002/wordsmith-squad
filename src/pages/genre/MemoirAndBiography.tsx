import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Memoir & Biography. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Memoir & Biography",
  "section": "Genre",
  "sectionUrl": "/genre",
  "intro": "Memoir & Biography designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to memoir & biography focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Fiction",
      "to": "/genre/fiction"
    },
    {
      "label": "Nonfiction",
      "to": "/genre/nonfiction"
    },
    {
      "label": "Romance",
      "to": "/genre/romance"
    }
  ]
};

export default function PageGenrememoirandbiography() {
  return <ServiceDetailLayout page={page} />;
}
