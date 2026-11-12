import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Children's Book Writing. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Children's Book Writing",
  "section": "Ghostwriting",
  "sectionUrl": "/ghostwriting",
  "intro": "Children's Book Writing designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to children's book writing focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Speech Script Writing",
      "to": "/ghostwriting/speech-script-writing"
    }
  ]
};

export default function PageGhostwritingchildrensbookwriting() {
  return <ServiceDetailLayout page={page} />;
}
