import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Developmental Editing. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Developmental Editing",
  "section": "Editing",
  "sectionUrl": "/editing",
  "intro": "Developmental Editing designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to developmental editing focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Line Editing",
      "to": "/editing/line-editing"
    },
    {
      "label": "Copy Editing",
      "to": "/editing/copy-editing"
    },
    {
      "label": "Proofreading",
      "to": "/editing/proofreading"
    }
  ]
};

export default function PageEditingdevelopmentalediting() {
  return <ServiceDetailLayout page={page} />;
}
