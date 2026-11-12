import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Client Testimonials. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Client Testimonials",
  "section": "Home",
  "sectionUrl": "/",
  "intro": "Client Testimonials designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to client testimonials focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Why Choose Us",
      "to": "/home/why-choose-us"
    }
  ]
};

export default function PageHomeclienttestimonials() {
  return <ServiceDetailLayout page={page} />;
}
