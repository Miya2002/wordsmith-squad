import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Scientific Ghostwriting. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Scientific Ghostwriting",
  "section": "Ghostwriting",
  "sectionUrl": "/ghostwriting",
  "intro": "Scientific Ghostwriting designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to scientific ghostwriting focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Medical Ghostwriters",
      "to": "/ghostwriting/medical-ghostwriters"
    },
    {
      "label": "Screenplay Script Writing",
      "to": "/ghostwriting/screenplay-script-writing"
    },
    {
      "label": "Children's Book Writing",
      "to": "/ghostwriting/childrens-book-writing"
    }
  ]
};

export default function PageGhostwritingscientificghostwriting() {
  return <ServiceDetailLayout page={page} />;
}
