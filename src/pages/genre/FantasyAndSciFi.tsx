import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Fantasy & Sci-Fi. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Fantasy & Sci-Fi",
  "section": "Genre",
  "sectionUrl": "/genre",
  "intro": "Fantasy & Sci-Fi designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to fantasy & sci-fi focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Memoir & Biography",
      "to": "/genre/memoir-and-biography"
    }
  ]
};

export default function PageGenrefantasyandscifi() {
  return <ServiceDetailLayout page={page} />;
}
