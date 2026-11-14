
import GenreSubpageLayout, {
  type EditingPageData,
} from "@/pages/genre/GenreSubpageLayout";

import { EDITORIAL } from "@/lib/data";

const data: EditingPageData = {
  title: "Fiction",
  subtitle: "Where Imagination Becomes a Story",
  number: "02",
  image: EDITORIAL.desk,
  imageAlt: "Creative fiction writing workspace",
  accent: "gold",

  description:
    "Create unforgettable fictional worlds, compelling characters and engaging stories that capture readers' imagination from the first page to the last.",

  sections: [
    {
      heading: "Bring Your Imagination to Life",
      paragraphs: [
        "Fiction gives writers the freedom to explore imaginative worlds, develop unforgettable characters and tell stories that connect with readers on an emotional level.",
        "At Wordsmith Squad, we help transform creative ideas into structured and engaging manuscripts. From an early story concept to a developed narrative, our approach focuses on originality, storytelling and reader engagement.",
        "Whether you are developing your first novel or working on an established fictional series, we help shape your ideas into a compelling reading experience."
      ]
    },
    {
      heading: "Professional Fiction Writing Services",
      paragraphs: [
        "Every fictional story has its own identity. The characters, setting, narrative voice and central conflict work together to create an experience that keeps readers interested.",
        "Our fiction writing support is tailored to your preferred genre, writing style and creative direction."
      ],
      bullets: [
        "Original fiction manuscript development.",
        "Novel and short story writing.",
        "Character development and backstories.",
        "Plot creation and narrative planning.",
        "World-building and setting development.",
        "Story refinement and chapter development."
      ]
    },
    {
      heading: "Explore Different Fiction Genres",
      paragraphs: [
        "Fiction includes a wide range of storytelling styles. Each genre has its own conventions, audience expectations and creative opportunities."
      ],
      bullets: [
        "Fantasy and science fiction.",
        "Romance and contemporary fiction.",
        "Mystery and detective fiction.",
        "Horror and supernatural stories.",
        "Action and adventure fiction.",
        "Historical and literary fiction.",
        "Suspense and psychological thrillers."
      ]
    },
    {
      heading: "How We Develop Your Fiction Story",
      paragraphs: [
        "A strong fictional manuscript begins with a clear creative direction. We work through the important elements of storytelling to develop a narrative that feels consistent and engaging."
      ],
      subsections: [
        {
          heading: "Discover the Story Idea",
          paragraphs: [
            "We discuss your concept, preferred genre, target readers and the experience you want your story to create."
          ]
        },
        {
          heading: "Build Characters and Settings",
          paragraphs: [
            "We develop character motivations, relationships, personalities and story environments that support your narrative."
          ]
        },
        {
          heading: "Develop the Plot",
          paragraphs: [
            "We organize the major events, conflicts, turning points and chapter progression to establish a coherent storyline."
          ]
        },
        {
          heading: "Refine the Manuscript",
          paragraphs: [
            "We review the developed material for narrative consistency, readability, pacing and alignment with your creative vision."
          ]
        }
      ]
    },
    {
      heading: "What Makes a Fiction Story Memorable?",
      paragraphs: [
        "Readers remember stories that make them feel something. A compelling fictional world combines believable motivations, meaningful conflicts and a narrative that encourages readers to keep turning the pages."
      ],
      bullets: [
        "Distinctive and relatable characters.",
        "An engaging opening and strong story direction.",
        "Natural dialogue and character interactions.",
        "Well-developed conflicts and resolutions.",
        "Consistent narrative voice and pacing.",
        "An ending that leaves a lasting impression."
      ]
    },
    {
      heading: "Who Can Benefit from Fiction Writing Services?",
      paragraphs: [
        "Our fiction writing support is suitable for aspiring authors, established novelists, independent publishers and creative storytellers who want to develop their ideas into structured manuscripts."
      ],
      subsections: [
        {
          heading: "First-Time Authors",
          paragraphs: [
            "Develop your first fictional concept with support for planning, character creation and manuscript development."
          ]
        },
        {
          heading: "Independent Authors",
          paragraphs: [
            "Work on novels, short stories and fictional series while maintaining your preferred creative direction."
          ]
        },
        {
          heading: "Established Writers",
          paragraphs: [
            "Explore new story concepts, expand fictional worlds and develop additional projects."
          ]
        },
        {
          heading: "Publishers and Creative Teams",
          paragraphs: [
            "Develop fictional content for publishing projects and other creative storytelling requirements."
          ]
        }
      ]
    },
    {
      heading: "Your Next Great Story Starts Here",
      paragraphs: [
        "Every memorable fictional world begins with an idea. Whether you have a complete outline or just the beginning of a story, Wordsmith Squad can help you explore the possibilities.",
        "Let's turn your imagination into a story that readers will want to experience."
      ]
    }
  ],

  faqs: [
    {
      question: "What types of fiction can you help develop?",
      answer:
        "We support different fictional genres, including fantasy, romance, mystery, horror, adventure, literary fiction and science fiction."
    },
    {
      question: "Can I bring my own story idea?",
      answer:
        "Absolutely. You can share your concept, notes, outline or existing manuscript as the foundation for your project."
    },
    {
      question: "Can you help with character development?",
      answer:
        "Yes. Character personalities, motivations, relationships and development can be included in the story planning process."
    },
    {
      question: "Do you work on both novels and short stories?",
      answer:
        "Yes. Project scope can be tailored to novels, short stories, series and other fictional formats."
    },
    {
      question: "Can my fiction manuscript be prepared for publishing?",
      answer:
        "Yes. Once the manuscript is ready, you can explore additional editing, proofreading, formatting and publishing support."
    }
  ]
};

export default function Fiction() {
  return <GenreSubpageLayout data={data} />;
}
