import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Manuscript Assessment. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Manuscript Assessment",
  "section": "Editing",
  "sectionUrl": "/editing",
  "intro": "Manuscript Assessment designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to manuscript assessment focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Developmental Editing",
      "to": "/editing/developmental-editing"
    },
    {
      "label": "Line Editing",
      "to": "/editing/line-editing"
    },
    {
      "label": "Copy Editing",
      "to": "/editing/copy-editing"
    }
  ]
};

export default function PageEditingmanuscriptassessment() {
  return <ServiceDetailLayout page={page} />;
}
