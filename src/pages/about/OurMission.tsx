import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Our Mission. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Our Mission",
  "section": "About Us",
  "sectionUrl": "/about",
  "intro": "Our Mission designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to our mission focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Our Team",
      "to": "/about/our-team"
    },
    {
      "label": "How We Work",
      "to": "/about/how-we-work"
    }
  ]
};

export default function PageAboutourmission() {
  return <ServiceDetailLayout page={page} />;
}
