import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Writing Packages. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Writing Packages",
  "section": "Pricing Plans",
  "sectionUrl": "/pricing-plans",
  "intro": "Writing Packages designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to writing packages focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Editing Packages",
      "to": "/pricing-plans/editing-packages"
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

export default function PagePricingplanswritingpackages() {
  return <ServiceDetailLayout page={page} />;
}
