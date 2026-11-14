
import GenreSubpageLayout, {
  type GenrePageData,
} from "@/pages/genre/GenreSubpageLayout";

import { EDITORIAL } from "@/lib/data";

const data: GenrePageData = {
  title: "Fiction",
  subtitle: "Every Great Story Begins With an Imagination",
  number: "01",
  image: EDITORIAL.desk,
  imageAlt: "Creative fiction writing workspace",
  accent: "gold",

  description:
    "Bring imaginative worlds, unforgettable characters and compelling narratives to life with professional fiction writing services.",

  sections: [
    {
      heading: "Professional Fiction Writing Services",
      paragraphs: [
        "Fiction allows writers to explore imaginative worlds, develop memorable characters and create stories that connect with readers.",
        "Our fiction writing approach focuses on storytelling, character development, plot structure and engaging narratives.",
        "Whether you have a complete outline or just an initial idea, we help transform your creative vision into a compelling story."
      ]
    },
    {
      heading: "Our Fiction Writing Expertise",
      paragraphs: [
        "Every story has its own identity. We develop fictional content according to your preferred genre, audience and creative direction."
      ],
      bullets: [
        "Fiction novel writing",
        "Character development",
        "Plot and story outlining",
        "Dialogue development",
        "Short story writing",
        "Creative storytelling"
      ]
    },
    {
      heading: "Creating Memorable Characters",
      paragraphs: [
        "Strong characters make stories meaningful. We focus on personalities, motivations, relationships and character journeys that keep readers interested."
      ]
    },
    {
      heading: "Our Creative Writing Process",
      subsections: [
        {
          heading: "Understanding Your Idea",
          paragraphs: [
            "We discuss your concept, genre, audience and creative expectations."
          ]
        },
        {
          heading: "Developing the Story",
          paragraphs: [
            "We organize the plot, characters, major events and narrative direction."
          ]
        },
        {
          heading: "Writing and Refinement",
          paragraphs: [
            "The manuscript is developed with attention to storytelling, consistency and readability."
          ]
        }
      ]
    },
    {
      heading: "Fiction Genres We Support",
      paragraphs: [
        "Our writing services cover different fictional genres and storytelling styles."
      ],
      bullets: [
        "Fantasy and science fiction",
        "Romance",
        "Mystery and thriller",
        "Horror and suspense",
        "Adventure and action",
        "Historical fiction",
        "Literary fiction",
        "Comedy and drama"
      ]
    },
    {
      heading: "Why Choose Wordsmith Squad?",
      paragraphs: [
        "We believe every writer deserves an approach that respects their creative vision. Our focus is on original storytelling, thoughtful collaboration and professionally developed manuscripts."
      ]
    },
    {
      heading: "Let's Bring Your Story to Life",
      paragraphs: [
        "Have a story waiting to be written? Share your idea with Wordsmith Squad and take the next step towards creating something memorable."
      ]
    }
  ],

  faqs: [
    {
      question: "What types of fiction do you write?",
      answer: "We support fantasy, romance, mystery, thriller, horror, science fiction, adventure and other fictional genres."
    },
    {
      question: "Can I provide my own story idea?",
      answer: "Yes. You can provide your concept, outline, characters or existing manuscript."
    },
    {
      question: "Do you help with character development?",
      answer: "Yes. Character backgrounds, personalities, motivations and relationships can be developed."
    },
    {
      question: "Can you write a complete fiction novel?",
      answer: "Yes. Project length, scope and requirements can be discussed before starting."
    },
    {
      question: "Do you offer editing after writing?",
      answer: "Yes. You can also explore our editing and proofreading services."
    }
  ]
};

export default function PageGenrefiction() {
  return <GenreSubpageLayout data={data} />;
}
