import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Book Covers. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Book Covers",
  "section": "Portfolio",
  "sectionUrl": "/portfolio",
  "intro": "Book Covers designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to book covers focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Featured Books",
      "to": "/portfolio/featured-books"
    },
    {
      "label": "Our Projects",
      "to": "/portfolio/our-projects"
    }
  ]
};

export default function PagePortfoliobookcovers() {
  return <ServiceDetailLayout page={page} />;
}
