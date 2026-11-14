import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Our Story. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Our Story",
  "section": "About Us",
  "sectionUrl": "/about",
  "intro": "Our Story designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to our story focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Our Mission",
      "to": "/about/our-mission"
    },
    {
      "label": "Our Team",
      "to": "/about/our-team"
    },
    {
      "label": "How We Work",
      "to": "/about/how-we-work"
    }
  ]
};

export default function PageAboutourstory() {
  return <ServiceDetailLayout page={page} />;
}
