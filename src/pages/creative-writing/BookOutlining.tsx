import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Book Outlining. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Book Outlining",
  "section": "Creative Writing",
  "sectionUrl": "/creative-writing",
  "intro": "Book Outlining designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to book outlining focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Story Writing",
      "to": "/creative-writing/story-writing"
    },
    {
      "label": "Novel Writing",
      "to": "/creative-writing/novel-writing"
    },
    {
      "label": "Poetry Writing",
      "to": "/creative-writing/poetry-writing"
    }
  ]
};

export default function PageCreativewritingbookoutlining() {
  return <ServiceDetailLayout page={page} />;
}
