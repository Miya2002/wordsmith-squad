
import GenreSubpageLayout, {
  type GenrePageData,
} from "@/pages/genre/GenreSubpageLayout";

import { EDITORIAL } from "@/lib/data";

/** This file belongs ONLY to Business & Self-Help. */
const data: GenrePageData = {
  title: "Business & Self-Help",
  subtitle: "Ideas That Inspire Growth and Transform Lives",
  number: "25",
  image: EDITORIAL.desk,
  imageAlt: "Business and self-help writing workspace",
  accent: "gold",

  description:
    "Turn professional knowledge, practical experience and personal insights into impactful books that educate, motivate and inspire readers.",

  sections: [
    {
      heading: "Turn Your Knowledge Into a Powerful Book",
      paragraphs: [
        "Business and self-help books have the power to educate readers, introduce new perspectives and provide practical solutions to everyday challenges.",
        "Whether you want to share your entrepreneurial journey, explain business strategies or inspire personal transformation, your knowledge deserves to be presented in a meaningful and engaging way.",
        "At Wordsmith Squad, we help transform your expertise and ideas into structured, reader-friendly manuscripts that communicate your message effectively."
      ]
    },
    {
      heading: "Professional Business & Self-Help Writing Services",
      paragraphs: [
        "A successful business or self-help book combines valuable information with engaging storytelling. Readers should be able to understand your ideas and apply the lessons to their own lives or professional journeys."
      ],
      bullets: [
        "Business book writing.",
        "Entrepreneurship and startup guides.",
        "Leadership and management books.",
        "Personal development manuscripts.",
        "Motivational and inspirational books.",
        "Career development guides.",
        "Productivity and success strategies.",
        "Financial literacy and business education."
      ]
    },
    {
      heading: "Develop Ideas That Deliver Real Value",
      paragraphs: [
        "Readers look for books that address meaningful challenges and provide useful insights. Your manuscript should have a clear purpose, an organized structure and information that connects with its intended audience.",
        "We help organize your knowledge into meaningful chapters and develop a consistent narrative that makes complex ideas easier to understand."
      ],
      bullets: [
        "Identify your book's central message.",
        "Define your target readership.",
        "Organize important topics into chapters.",
        "Develop practical examples and case studies.",
        "Present ideas in a clear and engaging manner.",
        "Maintain a consistent professional tone."
      ]
    },
    {
      heading: "Our Business & Self-Help Book Development Process",
      subsections: [
        {
          heading: "Understanding Your Expertise",
          paragraphs: [
            "We begin by understanding your professional background, personal experiences, knowledge and the message you want to share with readers."
          ]
        },
        {
          heading: "Planning the Book Structure",
          paragraphs: [
            "We organize your ideas into chapters, topics and supporting sections that create a logical reading experience."
          ]
        },
        {
          heading: "Developing Valuable Content",
          paragraphs: [
            "Your knowledge is transformed into engaging written material with relevant examples, explanations and practical insights."
          ]
        },
        {
          heading: "Refining the Manuscript",
          paragraphs: [
            "The manuscript is reviewed for clarity, consistency, readability and alignment with your original objectives."
          ]
        }
      ]
    },
    {
      heading: "Business & Self-Help Topics We Cover",
      paragraphs: [
        "Different readers have different goals. We support a variety of business and personal development topics according to your expertise and intended audience."
      ],
      bullets: [
        "Entrepreneurship and business development.",
        "Leadership and team management.",
        "Marketing and sales strategies.",
        "Personal growth and self-improvement.",
        "Time management and productivity.",
        "Financial planning and wealth education.",
        "Career growth and professional development.",
        "Confidence and communication skills.",
        "Mindset and motivation.",
        "Work-life balance."
      ]
    },
    {
      heading: "Why Choose Wordsmith Squad?",
      subsections: [
        {
          heading: "Your Expertise Matters",
          paragraphs: [
            "We focus on understanding your knowledge and experiences so your book communicates your intended message."
          ]
        },
        {
          heading: "Reader-Focused Content",
          paragraphs: [
            "We consider your target audience and organize content in a way that makes information approachable and useful."
          ]
        },
        {
          heading: "Professional Presentation",
          paragraphs: [
            "We emphasize clear writing, logical chapter structures and consistent language throughout your manuscript."
          ]
        },
        {
          heading: "Collaborative Development",
          paragraphs: [
            "Your feedback and professional insights remain important throughout the writing process."
          ]
        }
      ]
    },
    {
      heading: "Who Can Benefit From Business & Self-Help Writing?",
      paragraphs: [
        "Our services can support individuals and professionals who want to turn their knowledge, experiences and ideas into published books."
      ],
      subsections: [
        {
          heading: "Entrepreneurs and Business Owners",
          paragraphs: [
            "Share your business journey, industry knowledge and entrepreneurial lessons through a professionally developed book."
          ]
        },
        {
          heading: "Coaches and Consultants",
          paragraphs: [
            "Transform your coaching methods, frameworks and professional insights into valuable educational resources."
          ]
        },
        {
          heading: "Industry Professionals",
          paragraphs: [
            "Establish your professional voice by sharing expertise, research and practical knowledge in your field."
          ]
        },
        {
          heading: "Motivational Speakers",
          paragraphs: [
            "Turn your speeches, experiences and motivational ideas into meaningful books that reach a wider audience."
          ]
        }
      ]
    },
    {
      heading: "Your Knowledge Can Inspire the Next Generation",
      paragraphs: [
        "The experiences you have gained and lessons you have learned can become valuable resources for others. A well-developed business or self-help book gives your ideas a lasting platform.",
        "Share your vision with Wordsmith Squad and let's turn your expertise into a book that informs, inspires and creates meaningful impact."
      ]
    }
  ],

  faqs: [
    {
      question: "What types of business books can you write?",
      answer:
        "We support entrepreneurship, leadership, management, marketing, business strategy, professional development and other business-related topics."
    },
    {
      question: "Can you help write a self-help book from scratch?",
      answer:
        "Yes. You can share your ideas, personal experiences, notes or outline, and we can discuss developing them into a complete manuscript."
    },
    {
      question: "Do I need to be an experienced writer?",
      answer:
        "No. You can contribute your knowledge and ideas even if you have never written a book before."
    },
    {
      question: "Can you include my personal experiences in the book?",
      answer:
        "Absolutely. Your experiences, lessons and professional insights can help shape the content and give your book an authentic perspective."
    },
    {
      question: "Can you help publish my business or self-help book?",
      answer:
        "Yes. You can also explore our editing, proofreading, formatting and publishing services."
    }
  ]
};

export default function PageGenrebusinessandselfhelp() {
  return <GenreSubpageLayout data={data} />;
}
