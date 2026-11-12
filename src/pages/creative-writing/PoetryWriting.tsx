import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Poetry Writing. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Poetry Writing",
  "section": "Creative Writing",
  "sectionUrl": "/creative-writing",
  "intro": "Poetry Writing designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to poetry writing focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Screenwriting",
      "to": "/creative-writing/screenwriting"
    }
  ]
};

export default function PageCreativewritingpoetrywriting() {
  return <ServiceDetailLayout page={page} />;
}
