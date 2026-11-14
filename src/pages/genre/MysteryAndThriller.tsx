
import GenreSubpageLayout, {
  type GenrePageData,
} from "@/pages/genre/GenreSubpageLayout";

import { EDITORIAL } from "@/lib/data";

const data: GenrePageData = {
  title: "Mystery & Thriller",
  subtitle: "Every Clue Leads to Another Question",
  number: "13",
  image: EDITORIAL.desk,
  imageAlt: "Mystery and thriller writing workspace",
  accent: "gold",

  description:
    "Create gripping mysteries, psychological thrillers and suspenseful stories filled with unexpected twists and unforgettable revelations.",

  sections: [
    {
      heading: "Professional Mystery & Thriller Writing",
      paragraphs: [
        "Mystery and thriller stories bring readers into worlds of secrets, unanswered questions and unexpected discoveries.",
        "At Wordsmith Squad, we develop compelling narratives with carefully planned mysteries, memorable characters and suspenseful plot developments.",
        "Whether you are planning a detective investigation or a psychological thriller, we help transform your concept into an engaging story."
      ]
    },
    {
      heading: "Our Mystery & Thriller Writing Services",
      paragraphs: [
        "A successful mystery requires a carefully structured storyline, while a powerful thriller depends on tension, pacing and unexpected developments."
      ],
      bullets: [
        "Detective and crime fiction.",
        "Psychological thriller writing.",
        "Suspense and mystery novels.",
        "Murder mystery development.",
        "Legal and investigative thrillers.",
        "Plot twists and revelation planning.",
        "Short mystery stories."
      ]
    },
    {
      heading: "Create Intriguing Mysteries",
      paragraphs: [
        "The strongest mysteries encourage readers to investigate alongside the characters. Clues should feel meaningful, suspects should have believable motivations and revelations should connect naturally to earlier events.",
        "We help develop the details that make a mystery satisfying, engaging and logically consistent."
      ],
      bullets: [
        "Central mysteries and unanswered questions.",
        "Clue placement and hidden details.",
        "Suspect development and character motives.",
        "Investigations and discoveries.",
        "Unexpected but believable revelations."
      ]
    },
    {
      heading: "Our Story Development Process",
      subsections: [
        {
          heading: "Establish the Central Mystery",
          paragraphs: [
            "We develop an intriguing event, unexplained situation or dangerous secret that drives the narrative."
          ]
        },
        {
          heading: "Develop Characters and Suspects",
          paragraphs: [
            "We create characters with individual motivations, relationships and secrets that contribute to the mystery."
          ]
        },
        {
          heading: "Build Tension and Conflict",
          paragraphs: [
            "Discoveries, complications and unexpected developments help increase suspense throughout the story."
          ]
        },
        {
          heading: "Deliver a Satisfying Revelation",
          paragraphs: [
            "We bring the clues and character journeys together in a conclusion that rewards the reader's attention."
          ]
        }
      ]
    },
    {
      heading: "Mystery & Thriller Genres We Explore",
      paragraphs: [
        "Mystery and thriller fiction includes several storytelling styles, each offering a different reading experience."
      ],
      bullets: [
        "Detective mysteries.",
        "Cozy mysteries.",
        "Psychological thrillers.",
        "Crime and murder mysteries.",
        "Legal thrillers.",
        "Political thrillers.",
        "Domestic suspense.",
        "Espionage and spy fiction.",
        "Historical mysteries."
      ]
    },
    {
      heading: "Why Choose Wordsmith Squad?",
      subsections: [
        {
          heading: "Carefully Planned Storylines",
          paragraphs: [
            "We focus on logical plots where discoveries and revelations connect throughout the story."
          ]
        },
        {
          heading: "Engaging Characters",
          paragraphs: [
            "We develop believable detectives, suspects, investigators and supporting characters."
          ]
        },
        {
          heading: "Suspenseful Storytelling",
          paragraphs: [
            "We pay attention to pacing, tension and narrative progression to maintain reader interest."
          ]
        },
        {
          heading: "Your Creative Direction",
          paragraphs: [
            "Your original ideas, preferred themes and storytelling expectations guide the development process."
          ]
        }
      ]
    },
    {
      heading: "Ready to Create Your Next Mystery?",
      paragraphs: [
        "Every unforgettable mystery begins with a question. Whether you have imagined a complex investigation, a shocking revelation or a psychological thriller, your idea deserves thoughtful development.",
        "Share your concept with Wordsmith Squad and let's create a story that keeps readers turning pages."
      ]
    }
  ],

  faqs: [
    {
      question: "What types of mystery and thriller stories do you write?",
      answer: "We support detective fiction, crime mysteries, psychological thrillers, suspense novels and legal thrillers."
    },
    {
      question: "Can you help develop a mystery plot?",
      answer: "Yes. We can help develop the central mystery, clues, suspects, character motivations and final revelations."
    },
    {
      question: "Can you include unexpected plot twists?",
      answer: "Yes. We can develop twists and revelations that fit your story and its overall narrative."
    },
    {
      question: "Can I provide my own characters and storyline?",
      answer: "Absolutely. Your existing concept, characters, outline and notes can guide the writing process."
    },
    {
      question: "Can you help prepare my mystery novel for publishing?",
      answer: "Yes. You can also explore our editing, proofreading, formatting and publishing services."
    }
  ]
};

export default function PageGenremysteryandthriller() {
  return <GenreSubpageLayout data={data} />;
}
