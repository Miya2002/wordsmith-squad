
import GenreSubpageLayout, {
  type GenrePageData,
} from "@/pages/genre/GenreSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * Memoir & Biography
 * This page uses the dedicated Genre layout.
 * Its content can be edited independently.
 */

const data: GenrePageData = {
  title: "Memoir & Biography",
  subtitle: "Every Life Has a Story Worth Telling",
  number: "01",
  image: EDITORIAL.desk,
  imageAlt: "A creative writing and memoir development workspace",
  accent: "gold",

  description:
    "Transform personal experiences, unforgettable memories and meaningful life journeys into stories that connect with readers.",

  sections: [
    {
      heading: "Give Your Life Story the Words It Deserves",
      paragraphs: [
        "Every life contains experiences, challenges, achievements and memories that deserve to be preserved. A memoir or biography allows these moments to become a meaningful story that can inspire, educate and connect with readers.",
        "At Wordsmith Squad, we help shape personal experiences into engaging manuscripts while respecting the individuality, personality and voice behind every story.",
        "Whether you want to document a personal journey, celebrate someone's achievements or preserve your family's history, we help bring your ideas together in a clear and compelling narrative."
      ]
    },
    {
      heading: "Our Memoir Writing Services",
      paragraphs: [
        "A successful memoir is more than a collection of memories. It brings together meaningful moments, personal reflections and experiences through a carefully developed narrative.",
        "Our approach focuses on identifying the central message of your story and presenting it in a way that feels authentic and engaging."
      ],
      bullets: [
        "Personal memoir development.",
        "Life story planning and organization.",
        "Personal experiences and milestone documentation.",
        "Family history and legacy writing.",
        "Autobiographical manuscript development.",
        "Narrative refinement and manuscript preparation."
      ]
    },
    {
      heading: "Professional Biography Writing",
      paragraphs: [
        "A biography introduces readers to a person's life, accomplishments, experiences and influence. It requires careful organization of information and a narrative that reflects the subject accurately.",
        "We help organize important life events, professional achievements, personal milestones and defining experiences into a structured biography."
      ],
      bullets: [
        "Professional and personal biographies.",
        "Entrepreneur and business leader biographies.",
        "Family and historical biographies.",
        "Inspirational life stories.",
        "Legacy and commemorative biographies."
      ]
    },
    {
      heading: "From Personal Memories to a Complete Manuscript",
      paragraphs: [
        "Many people have a story to tell but are unsure where to begin. Our collaborative process helps transform scattered memories, notes, interviews and personal documents into an organized manuscript."
      ],
      subsections: [
        {
          heading: "Discover Your Story",
          paragraphs: [
            "We discuss your background, important experiences, intended audience and the message you want your readers to remember."
          ]
        },
        {
          heading: "Organize Important Memories",
          paragraphs: [
            "We identify significant events and arrange them into a logical structure that supports the direction of your story."
          ]
        },
        {
          heading: "Develop the Narrative",
          paragraphs: [
            "Your experiences are developed into engaging chapters while maintaining the appropriate voice, tone and perspective."
          ]
        },
        {
          heading: "Review and Refine",
          paragraphs: [
            "The manuscript is reviewed for clarity, consistency, readability and alignment with your expectations."
          ]
        }
      ]
    },
    {
      heading: "Why Choose Wordsmith Squad?",
      paragraphs: [
        "Personal stories require sensitivity, attention to detail and an understanding of the person behind the experiences. We approach every project with respect for the subject and the importance of preserving its original meaning."
      ],
      bullets: [
        "Writing shaped around your individual story.",
        "A structured and collaborative development process.",
        "Attention to authentic voice and personal perspective.",
        "Careful manuscript organization.",
        "Clear communication throughout the project.",
        "Respect for personal information and confidentiality."
      ]
    },
    {
      heading: "Who Can Benefit from Memoir and Biography Writing?",
      paragraphs: [
        "Our services can support individuals, families, professionals and organizations looking to preserve important life experiences and personal histories."
      ],
      subsections: [
        {
          heading: "Individuals and Families",
          paragraphs: [
            "Preserve personal memories, family traditions and important experiences for future generations."
          ]
        },
        {
          heading: "Entrepreneurs and Professionals",
          paragraphs: [
            "Document professional journeys, career milestones and the experiences that shaped your achievements."
          ]
        },
        {
          heading: "Public Figures and Leaders",
          paragraphs: [
            "Develop biographies that communicate personal history, professional contributions and lasting influence."
          ]
        },
        {
          heading: "Aspiring Authors",
          paragraphs: [
            "Turn personal experiences and meaningful memories into a manuscript that can be prepared for publication."
          ]
        }
      ]
    },
    {
      heading: "Your Story Deserves to Be Remembered",
      paragraphs: [
        "Your experiences are unique, and the story behind them deserves thoughtful presentation. Whether you are documenting a lifetime of memories or focusing on one defining chapter, Wordsmith Squad can help you develop a manuscript that reflects your journey.",
        "Start with your story. We will help you explore the next steps toward bringing it to life."
      ]
    }
  ],

  faqs: [
    {
      question: "What is the difference between a memoir and a biography?",
      answer:
        "A memoir generally focuses on selected personal experiences and themes from someone's life, while a biography presents a broader account of a person's life and history."
    },
    {
      question: "Can I provide my own notes and memories?",
      answer:
        "Yes. You can provide notes, photographs, documents, recordings, interviews and other reference materials to help develop your story."
    },
    {
      question: "Can you help organize my life story?",
      answer:
        "Yes. We can help organize important events, memories and experiences into a structured narrative with a clear direction."
    },
    {
      question: "Will my personal story remain confidential?",
      answer:
        "We respect the privacy of your personal experiences and discuss confidentiality expectations before beginning the project."
    },
    {
      question: "Can I publish my memoir after it is written?",
      answer:
        "Yes. Once your manuscript is ready, you can explore editing, formatting and publishing options for your book."
    }
  ]
};

export default function PageGenrememoirandbiography() {
  return <GenreSubpageLayout data={data} />;
}
