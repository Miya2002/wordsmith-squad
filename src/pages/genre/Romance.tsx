
import GenreSubpageLayout, {
  type EditingPageData,
} from "@/pages/genre/GenreSubpageLayout";

import { EDITORIAL } from "@/lib/data";

// Romance subpage — independent content and shared Genre design.
const data: EditingPageData = {
  title: "Romance Writers",
  subtitle: "Every Great Love Story Begins With a Feeling",
  number: "06",
  image: EDITORIAL.desk,
  imageAlt: "Creative writing desk for romance storytelling",
  accent: "gold",

  description:
    "From unforgettable first encounters to deeply emotional journeys, develop romance stories that capture hearts and keep readers turning every page.",

  sections: [
    {
      heading: "Create Love Stories That Stay With Readers",
      paragraphs: [
        "Romance is more than a story about two people falling in love. It is about emotions, relationships, personal growth, meaningful conflicts and the moments that bring characters closer together.",
        "At Wordsmith Squad, we help develop romance manuscripts that balance emotional storytelling with engaging plots. Every relationship deserves its own personality, challenges and memorable moments.",
        "Whether you are imagining a contemporary love story or a historical romance, we help shape your ideas into a compelling narrative."
      ]
    },
    {
      heading: "Professional Romance Writing Services",
      paragraphs: [
        "A memorable romance story needs believable characters, emotional depth and a relationship that develops naturally throughout the narrative.",
        "Our romance writing support focuses on your creative vision, preferred storytelling style and intended readership."
      ],
      bullets: [
        "Contemporary romance writing.",
        "Historical romance manuscripts.",
        "Young adult romance stories.",
        "Paranormal and fantasy romance.",
        "Billionaire and workplace romance.",
        "Romantic comedy and drama.",
        "Romance novel planning and development."
      ]
    },
    {
      heading: "Build Characters Readers Can Fall in Love With",
      paragraphs: [
        "Readers become emotionally invested when characters feel genuine. Their personalities, ambitions, vulnerabilities and experiences make relationships meaningful.",
        "We focus on developing characters whose interactions feel natural and whose journeys contribute to the emotional direction of the story."
      ],
      bullets: [
        "Detailed character personalities and backgrounds.",
        "Romantic chemistry and relationship dynamics.",
        "Believable emotional conflicts.",
        "Character growth and personal transformation.",
        "Natural and engaging romantic dialogue.",
        "Meaningful supporting characters."
      ]
    },
    {
      heading: "Develop an Engaging Romance Plot",
      paragraphs: [
        "A strong romance storyline needs more than a happy beginning and ending. The journey between those moments creates the emotional experience readers remember.",
        "We help organize relationship milestones, misunderstandings, turning points and resolutions into a cohesive narrative."
      ],
      subsections: [
        {
          heading: "The First Connection",
          paragraphs: [
            "Establish the circumstances that bring the main characters together and create an interesting foundation for their relationship."
          ]
        },
        {
          heading: "Challenges and Conflict",
          paragraphs: [
            "Introduce meaningful obstacles, emotional differences and external circumstances that test the characters."
          ]
        },
        {
          heading: "Emotional Development",
          paragraphs: [
            "Allow relationships to evolve through meaningful conversations, shared experiences and important decisions."
          ]
        },
        {
          heading: "A Memorable Resolution",
          paragraphs: [
            "Bring the relationship journey to a satisfying conclusion that reflects the characters' development and the story's central themes."
          ]
        }
      ]
    },
    {
      heading: "Different Types of Romance Stories",
      paragraphs: [
        "Every romance reader has different preferences. Some enjoy lighthearted love stories, while others prefer emotional drama, complicated relationships or imaginative romantic worlds."
      ],
      bullets: [
        "Contemporary and modern romance.",
        "Historical and period romance.",
        "Romantic suspense.",
        "Fantasy and paranormal romance.",
        "Young adult and new adult romance.",
        "Romantic comedy.",
        "Second-chance and slow-burn romance.",
        "Inspirational and emotional romance."
      ]
    },
    {
      heading: "Why Choose Wordsmith Squad for Romance Writing?",
      subsections: [
        {
          heading: "Your Creative Vision Comes First",
          paragraphs: [
            "We consider your original concept, preferred themes and storytelling expectations before developing the manuscript."
          ]
        },
        {
          heading: "Emotionally Engaging Storytelling",
          paragraphs: [
            "We focus on meaningful character interactions, believable relationships and emotional development."
          ]
        },
        {
          heading: "Thoughtful Story Structure",
          paragraphs: [
            "We organize the narrative so that character journeys, romantic conflicts and important moments work together."
          ]
        },
        {
          heading: "A Collaborative Experience",
          paragraphs: [
            "Your feedback and creative preferences remain important throughout the project."
          ]
        }
      ]
    },
    {
      heading: "Who Can Benefit from Romance Writing Services?",
      paragraphs: [
        "Our services can support aspiring romance authors, established novelists and independent publishers who want to develop engaging relationship-based fiction."
      ],
      subsections: [
        {
          heading: "First-Time Romance Authors",
          paragraphs: [
            "Turn an initial love story concept into a structured manuscript with a clear narrative direction."
          ]
        },
        {
          heading: "Independent Novelists",
          paragraphs: [
            "Develop new romance novels, expand existing story ideas or work on a connected series."
          ]
        },
        {
          heading: "Established Writers",
          paragraphs: [
            "Explore new romantic themes, character relationships and storytelling possibilities."
          ]
        },
        {
          heading: "Publishers and Creative Teams",
          paragraphs: [
            "Develop romance-focused manuscripts and creative content for publishing projects."
          ]
        }
      ]
    },
    {
      heading: "Your Love Story Deserves to Be Told",
      paragraphs: [
        "Every unforgettable romance begins with a moment, an idea or a connection. Your story could become the next book readers recommend to their friends.",
        "Share your vision with Wordsmith Squad and let's explore how to turn your romance concept into a beautifully developed manuscript."
      ]
    }
  ],

  faqs: [
    {
      question: "What types of romance stories can you write?",
      answer:
        "We support contemporary, historical, fantasy, paranormal, young adult, romantic comedy and other romance fiction styles."
    },
    {
      question: "Can I provide my own romance story idea?",
      answer:
        "Yes. You can share your concept, characters, outline, notes or existing manuscript as the foundation of your project."
    },
    {
      question: "Can you help develop romantic characters?",
      answer:
        "Yes. Character personalities, backgrounds, emotional journeys and relationship dynamics can all be part of the development process."
    },
    {
      question: "Can you write a complete romance novel?",
      answer:
        "Project scope can be discussed according to your requirements, manuscript length, creative direction and timeline."
    },
    {
      question: "Can you help prepare my romance manuscript for publishing?",
      answer:
        "Yes. You can also explore editing, proofreading, formatting and publishing support for your completed manuscript."
    }
  ]
};

export default function RomanceWriters() {
  return <GenreSubpageLayout data={data} />;
}
