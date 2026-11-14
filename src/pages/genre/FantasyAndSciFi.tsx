
import GenreSubpageLayout, {
  type GenrePageData,
} from "@/pages/genre/GenreSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/** Fantasy & Sci-Fi subpage content */
const data: GenrePageData = {
  title: "Fantasy & Sci-Fi",
  subtitle: "Explore Worlds Beyond Imagination",
  number: "03",
  image: EDITORIAL.desk,
  imageAlt: "Creative fantasy and science fiction writing workspace",
  accent: "gold",

  description:
    "From magical kingdoms to futuristic civilizations, we transform imaginative concepts into captivating fantasy and science fiction stories.",

  sections: [
    {
      heading: "Create Extraordinary Worlds with Fantasy & Sci-Fi Writing",
      paragraphs: [
        "Fantasy and science fiction give writers the opportunity to explore extraordinary possibilities. From enchanted lands and mythical creatures to advanced technology and distant galaxies, these genres allow imagination to go beyond ordinary boundaries.",
        "At Wordsmith Squad, we help develop imaginative concepts into engaging stories with carefully planned worlds, memorable characters and compelling narratives.",
        "Whether you are creating a magical adventure or imagining humanity's future, we help bring your creative vision to life."
      ]
    },
    {
      heading: "Professional Fantasy & Sci-Fi Writing Services",
      paragraphs: [
        "A successful fantasy or science fiction story requires more than an interesting concept. It needs a believable fictional universe, consistent storytelling and characters readers can connect with."
      ],
      bullets: [
        "Fantasy novel and series writing.",
        "Science fiction manuscript development.",
        "World-building and fictional universe creation.",
        "Character development and backstories.",
        "Magical systems and futuristic technologies.",
        "Plot development and story outlining."
      ]
    },
    {
      heading: "Build Worlds That Feel Real",
      paragraphs: [
        "World-building establishes the foundation of an immersive fantasy or science fiction story. Readers should understand the environment, rules, history and possibilities of the fictional world.",
        "We help develop detailed settings, cultures, societies and environments that support your narrative."
      ],
      bullets: [
        "Fictional kingdoms, cities and civilizations.",
        "Fantasy maps and geographical concepts.",
        "Imaginary cultures and social structures.",
        "Magic systems and supernatural elements.",
        "Futuristic societies and advanced technology."
      ]
    },
    {
      heading: "Our Creative Development Process",
      subsections: [
        {
          heading: "Explore Your Concept",
          paragraphs: [
            "We discuss your initial idea, preferred genre, fictional universe and the experience you want readers to enjoy."
          ]
        },
        {
          heading: "Develop Characters and Worlds",
          paragraphs: [
            "We establish the characters, environments, histories and important rules that shape your fictional universe."
          ]
        },
        {
          heading: "Structure the Narrative",
          paragraphs: [
            "We organize the central conflict, plot developments, important events and character journeys."
          ]
        },
        {
          heading: "Write and Refine",
          paragraphs: [
            "The manuscript is developed with attention to storytelling, consistency, pacing and readability."
          ]
        }
      ]
    },
    {
      heading: "Fantasy & Science Fiction Genres We Explore",
      paragraphs: [
        "Both genres offer a wide range of creative possibilities. We help shape stories according to your preferred themes and storytelling direction."
      ],
      bullets: [
        "Epic and high fantasy.",
        "Dark fantasy.",
        "Urban fantasy.",
        "Science fiction.",
        "Space opera.",
        "Cyberpunk.",
        "Dystopian fiction.",
        "Post-apocalyptic stories.",
        "Time-travel adventures.",
        "Supernatural fiction."
      ]
    },
    {
      heading: "Why Choose Wordsmith Squad?",
      subsections: [
        {
          heading: "Creative Imagination",
          paragraphs: [
            "We explore original concepts and imaginative storytelling possibilities that reflect your creative direction."
          ]
        },
        {
          heading: "Consistent World-Building",
          paragraphs: [
            "We pay attention to the details and internal rules that make fictional worlds believable and consistent."
          ]
        },
        {
          heading: "Engaging Characters",
          paragraphs: [
            "We focus on character motivations, relationships and development to create meaningful reader connections."
          ]
        },
        {
          heading: "Collaborative Development",
          paragraphs: [
            "Your ideas and feedback remain central throughout the writing and refinement process."
          ]
        }
      ]
    },
    {
      heading: "Ready to Create Your Own Universe?",
      paragraphs: [
        "Every extraordinary fictional world begins with an idea. Whether you imagine an ancient magical kingdom, an unknown galaxy or a future civilization, your story deserves thoughtful development.",
        "Share your concept with Wordsmith Squad and let's turn your imagination into a captivating reading experience."
      ]
    }
  ],

  faqs: [
    {
      question: "What is included in fantasy writing services?",
      answer:
        "Services can include fantasy novel writing, world-building, character development, plot creation and manuscript development."
    },
    {
      question: "Do you offer science fiction writing?",
      answer:
        "Yes. We support science fiction projects involving futuristic technology, space exploration, artificial intelligence and imagined civilizations."
    },
    {
      question: "Can you help create an entirely fictional world?",
      answer:
        "Yes. World-building can include geography, cultures, histories, societies and the rules of your fictional universe."
    },
    {
      question: "Can I provide my own characters and story outline?",
      answer:
        "Absolutely. Your existing characters, notes, outlines and creative concepts can guide the writing process."
    },
    {
      question: "Can you help write a fantasy book series?",
      answer:
        "Yes. We can discuss multi-book projects, continuing storylines and character development across a series."
    }
  ]
};

export default function PageGenrefantasyandscifi() {
  return <GenreSubpageLayout data={data} />;
}
