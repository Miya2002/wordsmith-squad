import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Request a Quote. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Request a Quote",
  "section": "Contact",
  "sectionUrl": "/contact",
  "intro": "Request a Quote designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to request a quote focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Get a Free Consultation",
      "to": "/contact"
    },
    {
      "label": "Frequently Asked Questions",
      "to": "/contact/faq"
    }
  ]
};

export default function PageContactrequestaquote() {
  return <ServiceDetailLayout page={page} />;
}
