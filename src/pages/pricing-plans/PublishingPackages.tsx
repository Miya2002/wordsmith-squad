import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Publishing Packages. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Publishing Packages",
  "section": "Pricing Plans",
  "sectionUrl": "/pricing-plans",
  "intro": "Publishing Packages designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to publishing packages focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Writing Packages",
      "to": "/pricing-plans/writing-packages"
    },
    {
      "label": "Editing Packages",
      "to": "/pricing-plans/editing-packages"
    },
    {
      "label": "Request a Custom Quote",
      "to": "/contact"
    }
  ]
};

export default function PagePricingplanspublishingpackages() {
  return <ServiceDetailLayout page={page} />;
}
