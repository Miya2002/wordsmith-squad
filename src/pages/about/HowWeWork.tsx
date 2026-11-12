import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to How We Work. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "How We Work",
  "section": "About Us",
  "sectionUrl": "/about",
  "intro": "How We Work designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to how we work focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Our Story",
      "to": "/about/our-story"
    },
    {
      "label": "Our Mission",
      "to": "/about/our-mission"
    },
    {
      "label": "Our Team",
      "to": "/about/our-team"
    }
  ]
};

export default function PageAbouthowwework() {
  return <ServiceDetailLayout page={page} />;
}
