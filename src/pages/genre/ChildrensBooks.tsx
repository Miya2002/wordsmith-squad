
import GenreSubpageLayout, {
  type GenrePageData,
} from "@/pages/genre/GenreSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/** This file belongs ONLY to Children's Books. */
const data: GenrePageData = {
  title: "Children's Books",
  subtitle: "Stories That Inspire Young Imaginations",
  number: "05",
  image: EDITORIAL.desk,
  imageAlt: "Children's book writing and creative editorial workspace",
  accent: "gold",

  description:
    "Create memorable children's stories filled with imagination, meaningful lessons and engaging characters. We help transform your ideas into stories that young readers can enjoy.",

  sections: [
    {
      heading: "Create Wonderful Stories for Young Readers",
      paragraphs: [
        "Children's books play an important role in developing imagination, creativity and a lifelong love of reading. A wonderful story can entertain young readers while introducing valuable lessons and memorable experiences.",
        "At Wordsmith Squad, we help develop your ideas into engaging children's stories with age-appropriate language, interesting characters and meaningful storytelling.",
        "Whether you have a simple bedtime story idea or a complete children's book concept, we work with your vision to develop a story that connects with its intended audience."
      ]
    },
    {
      heading: "Professional Children's Book Writing Services",
      paragraphs: [
        "Writing for children requires an understanding of different reading levels, interests and developmental stages. The story should be entertaining, easy to follow and appropriate for its intended age group."
      ],
      bullets: [
        "Picture book writing.",
        "Bedtime stories and short stories.",
        "Educational children's books.",
        "Early reader books.",
        "Adventure and fantasy stories.",
        "Moral and inspirational stories.",
        "Children's book series.",
        "Interactive storytelling concepts."
      ]
    },
    {
      heading: "Develop Characters Children Will Remember",
      paragraphs: [
        "Memorable characters are at the heart of successful children's stories. Young readers enjoy characters they can understand, relate to and follow throughout an adventure.",
        "We help develop interesting personalities, character relationships and story situations that make each narrative engaging."
      ],
      bullets: [
        "Relatable child protagonists.",
        "Friendly animal characters.",
        "Imaginative fantasy characters.",
        "Funny and entertaining personalities.",
        "Positive role models.",
        "Character development and story arcs."
      ]
    },
    {
      heading: "Stories Designed for Different Age Groups",
      paragraphs: [
        "Every age group has different reading abilities and storytelling preferences. A book for preschool children requires a different approach from a chapter book written for older readers."
      ],
      bullets: [
        "Toddlers: Simple words, repetition and engaging concepts.",
        "Preschool: Colorful storytelling and familiar experiences.",
        "Early readers: Short sentences and easy vocabulary.",
        "Middle-grade readers: Longer adventures and developed characters.",
        "Young adults: More complex themes and deeper character journeys."
      ]
    },
    {
      heading: "Our Children's Book Development Process",
      subsections: [
        {
          heading: "Understand Your Story Idea",
          paragraphs: [
            "We discuss your concept, target age group, preferred genre and the message you want your book to communicate."
          ]
        },
        {
          heading: "Develop Characters and Plot",
          paragraphs: [
            "We create a suitable story structure, memorable characters and an engaging sequence of events."
          ]
        },
        {
          heading: "Write for Young Readers",
          paragraphs: [
            "The manuscript is developed with attention to vocabulary, sentence length, pacing and age-appropriate storytelling."
          ]
        },
        {
          heading: "Review and Refine",
          paragraphs: [
            "We review the manuscript for consistency, readability, story flow and alignment with your original vision."
          ]
        }
      ]
    },
    {
      heading: "Popular Children's Book Themes",
      paragraphs: [
        "Children enjoy stories that introduce new experiences, encourage curiosity and allow them to explore imaginative worlds. Your book can focus on entertainment, education or a combination of both."
      ],
      bullets: [
        "Friendship and kindness.",
        "Family and everyday experiences.",
        "Animals and nature.",
        "Fantasy and magical adventures.",
        "Science and discovery.",
        "Courage and confidence.",
        "Teamwork and cooperation.",
        "Honesty and responsibility.",
        "Problem-solving and creativity.",
        "Learning through storytelling."
      ]
    },
    {
      heading: "Why Choose Wordsmith Squad?",
      subsections: [
        {
          heading: "Age-Appropriate Storytelling",
          paragraphs: [
            "We consider the intended reading level and audience when developing the language, themes and structure of your story."
          ]
        },
        {
          heading: "Creative Story Development",
          paragraphs: [
            "We help transform simple concepts into engaging narratives with interesting characters and meaningful events."
          ]
        },
        {
          heading: "Your Vision Comes First",
          paragraphs: [
            "Your ideas, preferred themes and creative direction remain central throughout the project."
          ]
        },
        {
          heading: "Professional Manuscript Preparation",
          paragraphs: [
            "We focus on producing clear, organized and polished manuscripts that are ready for the next stage of your publishing journey."
          ]
        }
      ]
    },
    {
      heading: "Ready to Bring Your Children's Book to Life?",
      paragraphs: [
        "Every great children's story begins with imagination. Your idea could become a favorite bedtime story, an educational adventure or a book that inspires young readers for years to come.",
        "Share your concept with Wordsmith Squad and let's create a memorable reading experience for the next generation."
      ]
    }
  ],

  faqs: [
    {
      question: "What types of children's books can you write?",
      answer:
        "We support picture books, bedtime stories, educational books, adventure stories, early readers, fantasy stories and children's book series."
    },
    {
      question: "Can you write a children's book from my idea?",
      answer:
        "Yes. You can share your basic concept, characters, notes or story outline, and we can discuss developing it into a complete manuscript."
    },
    {
      question: "Do you write books for different age groups?",
      answer:
        "Yes. We can tailor vocabulary, sentence structure, storytelling and themes to the intended age group."
    },
    {
      question: "Can you include educational or moral lessons?",
      answer:
        "Absolutely. Stories can incorporate lessons about friendship, kindness, honesty, courage, creativity and other meaningful topics."
    },
    {
      question: "Can you help with children's book publishing?",
      answer:
        "Yes. You can also explore our editing, proofreading, book formatting and publishing services."
    },
    {
      question: "Do I need illustrations before starting?",
      answer:
        "No. You can begin with your story idea or manuscript. Illustration requirements can be discussed separately as your project develops."
    }
  ]
};

export default function PageGenrechildrensbooks() {
  return <GenreSubpageLayout data={data} />;
}
