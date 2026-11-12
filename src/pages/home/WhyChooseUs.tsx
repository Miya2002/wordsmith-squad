import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Why Choose Us. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Why Choose Us",
  "section": "Home",
  "sectionUrl": "/",
  "intro": "Why Choose Us designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to why choose us focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Our Process",
      "to": "/home/our-process"
    },
    {
      "label": "Client Testimonials",
      "to": "/home/client-testimonials"
    }
  ]
};

export default function PageHomewhychooseus() {
  return <ServiceDetailLayout page={page} />;
}
