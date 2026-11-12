import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Our Projects. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Our Projects",
  "section": "Portfolio",
  "sectionUrl": "/portfolio",
  "intro": "Our Projects designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to our projects focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Book Covers",
      "to": "/portfolio/book-covers"
    }
  ]
};

export default function PagePortfolioourprojects() {
  return <ServiceDetailLayout page={page} />;
}
