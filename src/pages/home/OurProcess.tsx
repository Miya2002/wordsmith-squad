import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Our Process. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Our Process",
  "section": "Home",
  "sectionUrl": "/",
  "intro": "Our Process designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to our process focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Why Choose Us",
      "to": "/home/why-choose-us"
    },
    {
      "label": "Client Testimonials",
      "to": "/home/client-testimonials"
    }
  ]
};

export default function PageHomeourprocess() {
  return <ServiceDetailLayout page={page} />;
}
