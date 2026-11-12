import { ServiceDetailLayout, type DetailContent } from "@/components/ServiceDetailLayout";

/** This file belongs ONLY to Book Cover Design. Edit content here without affecting other pages. */
const page: DetailContent = {
  "title": "Book Cover Design",
  "section": "Book Cover",
  "sectionUrl": "/book-cover",
  "intro": "Book Cover Design designed around your voice, your goals, and the readers you want to reach.",
  "description": "Whether you are beginning with an idea or refining work already underway, our approach to book cover design focuses on clarity, thoughtful collaboration, and a polished final result.",
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
      "label": "Layout Design & Typesetting",
      "to": "/book-cover/layout-design-and-typesetting"
    },
    {
      "label": "Book Illustration",
      "to": "/book-cover/book-illustration"
    },
    {
      "label": "eBook Cover Design",
      "to": "/book-cover/ebook-cover-design"
    }
  ]
};

export default function PageBookcoverbookcoverdesign() {
  return <ServiceDetailLayout page={page} />;
}
