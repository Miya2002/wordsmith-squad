import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Featured Books. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Featured Books",
  "section": "Portfolio",
  "sectionUrl": "/portfolio",
  "intro": "Featured Books designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to featured books focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Book Covers",
      "to": "/portfolio/book-covers"
    },
    {
      "label": "Our Projects",
      "to": "/portfolio/our-projects"
    }
  ]
};

export default function PagePortfoliofeaturedbooks() {
  return <ServiceDetailLayout page={page} />;
}
