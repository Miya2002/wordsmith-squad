
import EditingSubpageLayout, {
  type EditingPageData,
} from "./EditingSubpageLayout";
import { EDITORIAL } from "@/lib/data";

const data: EditingPageData = {
  title: "Book Critique Services",
  subtitle: "Professional Manuscript Evaluation",
  number: "04",
  image: EDITORIAL.typewriter,
  imageAlt: "Literary manuscript being evaluated by an editor",
  accent: "champagne",
  description:
    "Before your book reaches the world, discover how it works through a professional reader's eyes. Get thoughtful feedback, identify opportunities and move forward with a clearer revision plan.",

  sections: [
    {
      heading: "Give Your Manuscript the Attention It Deserves",
      paragraphs: [
        "Completing a manuscript is a major achievement, but reviewing it through an editor's perspective can reveal opportunities that are difficult to recognize on your own.",
        "At Wordsmith Squad, our manuscript critique services are designed for authors who want to understand what works in their writing and what could be improved before moving toward publication.",
        "A thoughtful critique does more than point out problems. It highlights your strengths, identifies areas that need attention and offers practical suggestions to help you develop a stronger manuscript."
      ]
    },
    {
      heading: "Manuscript Critique: Strengthen Your Story Before Publication",
      paragraphs: [
        "After completing a full-length manuscript, you may want professional feedback before querying literary agents, approaching publishers or preparing for self-publication.",
        "Our critique approach examines the overall reading experience, structure and effectiveness of your work. We focus on meaningful feedback rather than correcting every individual sentence.",
        "The result is a clearer understanding of your manuscript's strengths, weaknesses and possible next steps."
      ]
    },
    {
      heading: "What Our Manuscript Critique Examines",
      subsections: [
        {
          heading: "1. Narrative Structure and Pacing",
          paragraphs: ["We examine how your story unfolds, including plot development, chapter organization, scene transitions and pacing. We identify sections that may feel slow, rushed or structurally unbalanced."]
        },
        {
          heading: "2. World-Building and Setting",
          paragraphs: ["For fiction and nonfiction, the setting contributes to the reader's understanding and engagement. We consider clarity, believability, consistency and how effectively the setting supports the overall work."]
        },
        {
          heading: "3. Dialogue, Voice and Tone",
          paragraphs: ["We consider whether dialogue feels natural, whether characters have distinguishable voices and whether conversations contribute to the story. We also assess narrative voice and tonal consistency."]
        },
        {
          heading: "4. Thematic Depth and Clarity",
          paragraphs: ["We explore the central themes and ideas behind your manuscript and consider whether they come through clearly. We look at the relationship between the book's message, narrative choices and reader experience."]
        },
        {
          heading: "5. Character Development and Reader Engagement",
          paragraphs: ["For narrative projects, we examine character motivations, consistency, development and emotional resonance. We also consider how effectively the manuscript maintains reader interest."]
        }
      ]
    },
    {
      heading: "What You Receive From a Professional Critique",
      paragraphs: [
        "Our objective is to provide feedback that is balanced, clear and useful. Rather than simply identifying weaknesses, we explain what is working and where revisions could make a meaningful difference."
      ],
      subsections: [
        {
          heading: "A Detailed Editorial Letter",
          paragraphs: ["You receive a comprehensive editorial letter summarizing the manuscript's overall strengths, challenges and improvement opportunities."]
        },
        {
          heading: "In-line Comments and Margin Notes",
          paragraphs: ["Where included in the agreed scope, comments identify specific passages and explain areas that may need clarification, adjustment or further development."]
        },
        {
          heading: "Strengths and Opportunities Analysis",
          paragraphs: ["We identify the elements that make your writing effective while highlighting areas that could benefit from further attention."]
        },
        {
          heading: "Actionable Revision Guidance",
          paragraphs: ["You receive practical recommendations to help prioritize revisions and approach your next draft with greater confidence."]
        },
        {
          heading: "Optional One-on-One Consultation",
          paragraphs: ["If arranged as part of your project, you can discuss the feedback with your editor, ask questions and explore your next steps."]
        }
      ]
    },
    {
      heading: "Critique Services for Different Writing Projects",
      paragraphs: [
        "Different writing projects require different kinds of evaluation. We consider the manuscript's genre, development stage and intended audience when determining the appropriate critique approach."
      ],
      subsections: [
        {
          heading: "Novel Critique Services",
          paragraphs: ["Designed for fiction writers working in literary fiction, romance, fantasy, science fiction, mystery and other genres."],
          bullets: [
            "Story logic and emotional resonance.",
            "Plot holes and pacing issues.",
            "Character consistency and growth.",
            "Reader engagement and genre expectations."
          ]
        },
        {
          heading: "Essay Critique",
          paragraphs: ["For personal narratives, persuasive essays and academic papers that need feedback on argument, organization, clarity and tone."]
        },
        {
          heading: "Draft Critique Services",
          paragraphs: ["Suitable for incomplete manuscripts, outlines and early drafts where the writer needs direction before investing in a complete revision."],
          bullets: [
            "Narrative direction and concept clarity.",
            "Structural cohesion.",
            "Development opportunities.",
            "Practical suggestions for the next draft."
          ]
        }
      ]
    },
    {
      heading: "More Than Feedback: A Partnership for Your Writing",
      paragraphs: [
        "At Wordsmith Squad, we view a critique as a collaborative part of your writing journey. Our feedback is intended to be constructive, respectful and personalized to your creative goals.",
        "We explain why certain changes may improve your manuscript rather than simply telling you what to change. This helps authors understand their strengths and make informed decisions about future revisions.",
        "A professional critique can also help you decide whether your manuscript is ready for copyediting, proofreading, formatting or another stage of publishing preparation."
      ]
    },
    {
      heading: "Why Choose Wordsmith Squad for Book Critique Services?",
      subsections: [
        {
          heading: "Experienced Editorial Perspective",
          paragraphs: ["Our approach draws on literary and publishing knowledge to evaluate manuscripts according to their purpose, genre and intended readers."]
        },
        {
          heading: "Personalized, Constructive Feedback",
          paragraphs: ["Every critique is shaped around the manuscript rather than relying on generic comments or one-size-fits-all recommendations."]
        },
        {
          heading: "Balanced Evaluation",
          paragraphs: ["We highlight what already works alongside opportunities for improvement, helping you approach revision with a clearer perspective."]
        },
        {
          heading: "Practical Guidance",
          paragraphs: ["Our recommendations are intended to help you identify priorities and move forward with a more organized revision process."]
        },
        {
          heading: "Continued Editorial Support",
          paragraphs: ["If you need additional assistance after your critique, you can discuss further services such as developmental editing, copyediting and proofreading."]
        }
      ]
    },
    {
      heading: "How Our Book Critique Process Works",
      subsections: [
        {
          heading: "01. Submit Your Work",
          paragraphs: ["Share your manuscript, essay or draft along with a short explanation of your goals and the type of feedback you are seeking."]
        },
        {
          heading: "02. Choose the Right Critique",
          paragraphs: ["We discuss the development stage of your work and identify the appropriate critique service and project scope."]
        },
        {
          heading: "03. Receive Professional Feedback",
          paragraphs: ["Your agreed critique deliverables are prepared and delivered within the project timeline."]
        },
        {
          heading: "04. Revise With Confidence",
          paragraphs: ["Use the feedback to plan meaningful improvements. You can also discuss further editorial support if needed."]
        }
      ]
    },
    {
      heading: "Your Next Draft Starts With Better Feedback",
      paragraphs: [
        "A strong book is not created through writing alone. Reflection, feedback and thoughtful revision are important parts of the creative process.",
        "Whether you have completed a first draft or a near-final manuscript, Wordsmith Squad can help you understand what your work needs next. Let's give your manuscript the professional attention it deserves."
      ]
    }
  ],

  faqs: [
    {
      question: "What is included in a book critique?",
      answer: "A book critique can include feedback on structure, pacing, character development, dialogue, tone, themes and reader engagement, along with an editorial letter and other agreed feedback deliverables."
    },
    {
      question: "How is a critique different from editing?",
      answer: "A critique evaluates the overall manuscript and offers recommendations. Editing involves making or suggesting specific improvements to structure, language, grammar and sentence-level writing."
    },
    {
      question: "Who should get a book critique?",
      answer: "Both new and experienced authors can benefit. It is especially useful for writers who want professional feedback before a major revision, submission or publication."
    },
    {
      question: "How long does the critique process take?",
      answer: "The timeline depends on manuscript length, complexity and the agreed scope. We establish the expected schedule before the project begins."
    },
    {
      question: "Will my manuscript remain confidential?",
      answer: "We prioritize manuscript privacy and treat your writing and project information with care throughout the critique process."
    },
    {
      question: "Is a manuscript critique the same as a copyedit?",
      answer: "No. A manuscript critique focuses on overall content, storytelling and structure. Copyediting focuses on language, grammar, punctuation and consistency."
    },
    {
      question: "Can I request editing after receiving my critique?",
      answer: "Yes. You can discuss further support such as developmental editing, line editing, copyediting or proofreading depending on your manuscript's needs."
    }
  ]
};

export default function BookCritiqueServices() {
  return <EditingSubpageLayout data={data} />;
}
