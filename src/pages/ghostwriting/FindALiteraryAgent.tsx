import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Find a Literary Agent. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Find a Literary Agent",
  "section": "Ghostwriting",
  "sectionUrl": "/ghostwriting",
  "intro": "Find a Literary Agent designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to find a literary agent focuses on clarity, thoughtful collaboration, and a polished final result.",
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

export default function PageGhostwritingfindaliteraryagent() {
  return <ServiceDetailLayout page={page} />;
}
