
import GhostwritingSubpageLayout, {
  type EditingPageData,
} from "@/pages/ghostwriting/GhostwritingSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/**
 * This file belongs ONLY to Children's Book Writing.
 * Edit content here without affecting other pages.
 */

const data: EditingPageData = {
  title: "Children's Book Writing",
  subtitle: "Professional Children's Book Writing Services",
  number: "02",
  image: EDITORIAL.desk,
  imageAlt: "Creative workspace for children's book writing",
  accent: "gold",

  description:
    "Bring your children's book idea to life with engaging storytelling, memorable characters and age-appropriate writing.",

  sections: [
    {
      heading: "Explore Children's Book Writing",
      paragraphs: [
        "Every great children's book begins with an idea that sparks imagination. Whether you have a complete story or just an initial concept, we help shape your ideas into engaging stories for young readers.",
        "At Wordsmith Squad, we focus on age-appropriate language, creative storytelling, memorable characters and meaningful themes.",
        "From picture books and early readers to longer children's stories, our approach is tailored to your audience and creative vision.",
      ],
    },
    {
      heading: "Why Children's Book Writing Matters",
      paragraphs: [
        "Children's books play an important role in developing imagination, creativity and a love of reading. A thoughtfully written story can entertain young readers while introducing meaningful ideas and experiences.",
        "We pay attention to storytelling, vocabulary, pacing, character development and age suitability.",
      ],
      bullets: [
        "Engaging stories designed for young readers.",
        "Memorable characters and imaginative settings.",
        "Age-appropriate vocabulary and storytelling.",
        "Meaningful themes and positive messages.",
        "Careful attention to story structure and flow.",
      ],
    },
    {
      heading: "What Our Service Can Include",
      paragraphs: [
        "Our children's book writing support can cover different stages of developing your manuscript.",
      ],
      bullets: [
        "Story concept development.",
        "Character creation and development.",
        "Plot and chapter outlining.",
        "Picture book and children's story writing.",
        "Manuscript refinement and revisions.",
      ],
    },
    {
      heading: "A Collaborative Process",
      subsections: [
        {
          heading: "Understand Your Idea",
          paragraphs: [
            "We discuss your story concept, target age group, themes and creative expectations.",
          ],
        },
        {
          heading: "Develop the Story",
          paragraphs: [
            "We create a practical story outline, characters and narrative direction.",
          ],
        },
        {
          heading: "Write and Refine",
          paragraphs: [
            "Your manuscript is developed with attention to language, pacing, creativity and age suitability.",
          ],
        },
        {
          heading: "Review and Deliver",
          paragraphs: [
            "We review the completed manuscript and prepare the agreed materials for delivery.",
          ],
        },
      ],
    },
    {
      heading: "Who Can Benefit from Children's Book Writing?",
      paragraphs: [
        "Our service is suitable for aspiring children's authors, parents, educators, publishers and anyone with a story idea for young readers.",
      ],
    },
    {
      heading: "Ready to Discuss Your Project?",
      paragraphs: [
        "Have a story idea for children? Tell us about your concept, intended audience and creative vision. We will help you explore the next steps towards developing your book.",
      ],
    },
  ],

  faqs: [
    {
      question: "What types of children's books can you write?",
      answer:
        "We can discuss picture books, early readers, short stories, chapter books and other children's book formats.",
    },
    {
      question: "Can you develop a story from my idea?",
      answer:
        "Yes. We can help develop your initial concept into a structured children's story.",
    },
    {
      question: "Can I choose the target age group?",
      answer:
        "Absolutely. We tailor vocabulary, storytelling and complexity to your intended age group.",
    },
    {
      question: "Can you help develop characters?",
      answer:
        "Yes. Character development, personalities, backgrounds and story roles can be included in the project.",
    },
    {
      question: "How long does children's book writing take?",
      answer:
        "The timeline depends on the manuscript length, complexity and agreed project requirements.",
    },
  ],
};

export default function PageGhostwritingchildrensbookwriting() {
  return <GhostwritingSubpageLayout data={data} />;
}
