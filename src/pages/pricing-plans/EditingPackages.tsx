import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Editing Packages. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Editing Packages",
  "section": "Pricing Plans",
  "sectionUrl": "/pricing-plans",
  "intro": "Editing Packages designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to editing packages focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Publishing Packages",
      "to": "/pricing-plans/publishing-packages"
    },
    {
      "label": "Request a Custom Quote",
      "to": "/contact"
    }
  ]
};

export default function PagePricingplanseditingpackages() {
  return <ServiceDetailLayout page={page} />;
}
