
import type { DetailContent } from "@/components/ServiceDetailLayout";

const makePage = (
  title: string,
  intro: string,
  description: string,
  chapters: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
    callout?: { title: string; text: string };
  }[],
  faqs: { question: string; answer: string }[],
  related: { label: string; to: string }[]
): DetailContent => ({
  title,
  section: "Ghostwriting",
  sectionUrl: "/ghostwriting",
  intro,
  description,
  sections: chapters.map((chapter, index) => ({
    id: ["overview", "services", "process", "audience", "why-us"][index] ??
      `chapter-${index + 1}`,
    ...chapter,
  })),
  faqs,
  related,
});

const paths = {
  medical: "/ghostwriting/medical-ghostwriters",
  children: "/ghostwriting/childrens-book-writing",
  comic: "/ghostwriting/comic-book-writing",
  screenplay: "/ghostwriting/screenplay-script-writing",
  speech: "/ghostwriting/speech-script-writing",
  song: "/ghostwriting/song-writing",
  corporate: "/ghostwriting/corporate-writing-services",
  podcast: "/ghostwriting/podcast-script-writing",
  legal: "/ghostwriting/legal-ghostwriting",
  scientific: "/ghostwriting/scientific-ghostwriting",
  technical: "/ghostwriting/technical-ghostwriting",
  brand: "/ghostwriting/brand-storytelling",
  realLife: "/ghostwriting/real-life-story-writing",
  publishing: "/ghostwriting/book-publishing-services",
  literary: "/ghostwriting/find-a-literary-agent",
  instagram: "/ghostwriting/instagram-ghostwriting",
  facebook: "/ghostwriting/facebook-ghostwriting",
  linkedin: "/ghostwriting/linkedin-ghostwriting",
  twitter: "/ghostwriting/twitter-ghostwriting",
};

export const ghostwritingPages: Record<string, DetailContent> = {

  "medical-ghostwriters": makePage(
    "Medical Ghostwriters",
    "Turn specialist medical knowledge and healthcare experience into informative, carefully structured publications.",
    "We help healthcare professionals communicate complex medical subjects through books, educational resources, professional articles and healthcare manuscripts.",
    [
      {
        title: "Turning Medical Expertise into Meaningful Publications",
        paragraphs: [
          "Medical professionals have valuable knowledge that can educate patients, support fellow practitioners and contribute to healthcare discussions. However, translating specialist knowledge into an engaging manuscript requires careful planning.",
          "Our medical writing projects begin with your expertise, source materials and intended readership. We help organize your ideas into a clear and accessible narrative."
        ],
        bullets: [
          "Healthcare books and medical guides",
          "Patient education publications",
          "Medical biographies and professional experiences",
          "Healthcare industry articles"
        ]
      },
      {
        title: "Writing for Different Healthcare Audiences",
        paragraphs: [
          "A patient education guide requires a different approach from a professional medical publication. We consider the reader's background, familiarity with terminology and the purpose of the material.",
          "Our writing approach balances accessible explanations with appropriate medical terminology while preserving the intended meaning of your source material."
        ],
        bullets: [
          "Patient-friendly healthcare explanations",
          "Professional medical publications",
          "Healthcare awareness resources",
          "Educational material for medical students"
        ],
        callout: {
          title: "Accuracy Comes First",
          text: "Clinical claims and medical recommendations should be checked by qualified healthcare professionals before publication."
        }
      },
      {
        title: "From Medical Notes to a Complete Manuscript",
        paragraphs: [
          "We begin by reviewing your research, notes, references and outline. Next, we organize the information into chapters that follow a logical structure.",
          "Your feedback helps refine the language, organization and presentation before the manuscript is prepared for its intended use."
        ],
        bullets: [
          "Initial subject and audience discussion",
          "Source material organization",
          "Chapter development and writing",
          "Editorial review and revisions"
        ]
      },
      {
        title: "Who Needs Medical Ghostwriting?",
        paragraphs: [
          "This service is suitable for healthcare professionals who want to share their experience and knowledge without managing the entire writing process themselves."
        ],
        bullets: [
          "Doctors and medical specialists",
          "Healthcare educators and researchers",
          "Medical consultants",
          "Healthcare organizations"
        ]
      },
      {
        title: "Develop Your Medical Publication",
        paragraphs: [
          "Your professional knowledge deserves clear communication. We work collaboratively to help transform your material into a well-organized publication that reflects your expertise."
        ]
      }
    ],
    [
      { question: "Can you write a medical book from my notes?", answer: "Yes. We can use your notes, outline, research and professional guidance to develop a structured manuscript." },
      { question: "Do you write patient education material?", answer: "Yes. We can develop accessible healthcare guides and educational publications for patients." },
      { question: "Who checks medical accuracy?", answer: "Clinical information should be reviewed and approved by an appropriately qualified medical professional." }
    ],
    [
      { label: "Scientific Ghostwriting", to: paths.scientific },
      { label: "Technical Ghostwriting", to: paths.technical },
      { label: "Book Publishing Services", to: paths.publishing }
    ]
  ),

  "comic-book-writing": makePage(
    "Comic Book Writing",
    "Build unforgettable comic book worlds through compelling characters, visual storytelling and engaging dialogue.",
    "From superhero adventures to graphic novels and original illustrated stories, we help shape concepts into structured comic book scripts.",
    [
      {
        title: "Create a Story Worth Turning the Page For",
        paragraphs: [
          "A memorable comic book combines strong characters, imaginative settings and a storyline that keeps readers curious about what happens next.",
          "We help develop your initial idea into a structured narrative with a clear beginning, rising conflict, meaningful character decisions and a satisfying direction."
        ],
        bullets: [
          "Superhero and action adventures",
          "Fantasy and science-fiction comics",
          "Mystery and thriller graphic novels",
          "Drama and character-driven stories"
        ]
      },
      {
        title: "Character Development and World Building",
        paragraphs: [
          "Readers connect with characters who have recognizable motivations, personal challenges and distinctive personalities. Their decisions should influence the story rather than simply move between action scenes.",
          "World building establishes the locations, rules, history and atmosphere that make the comic universe believable."
        ],
        bullets: [
          "Character biographies and motivations",
          "Heroes, villains and supporting characters",
          "Locations and fictional universes",
          "Character relationships and conflicts"
        ]
      },
      {
        title: "Writing Scenes, Panels and Dialogue",
        paragraphs: [
          "Comic book writing is a visual form of storytelling. Each panel needs to communicate something important through action, expressions, composition or dialogue.",
          "We organize scenes into pages and panels, describing visual actions and writing dialogue that supports the artwork without overcrowding it."
        ],
        bullets: [
          "Panel-by-panel script descriptions",
          "Natural character dialogue",
          "Page transitions and visual pacing",
          "Cliffhangers and dramatic reveals"
        ]
      },
      {
        title: "Who Can Benefit from Comic Book Writing?",
        paragraphs: [
          "Our service is designed for creators who want to turn an original idea into a professional comic book concept or script."
        ],
        bullets: [
          "Independent comic creators",
          "Graphic novel authors",
          "Illustrators needing scripts",
          "Entertainment entrepreneurs"
        ]
      },
      {
        title: "Bring Your Comic Universe to Life",
        paragraphs: [
          "Every great comic begins with an idea. With thoughtful storytelling and a strong visual structure, that idea can become an engaging reading experience."
        ]
      }
    ],
    [
      { question: "Can you develop original comic characters?", answer: "Yes. We can help develop character backgrounds, motivations, relationships and personalities." },
      { question: "Do you write panel-by-panel scripts?", answer: "Yes. Scripts can include page descriptions, individual panels, visual actions and dialogue." },
      { question: "Can you work with an existing comic concept?", answer: "Yes. We can develop an existing story, expand its characters or help organize future installments." }
    ],
    [
      { label: "Children's Book Writing", to: paths.children },
      { label: "Screenplay Script Writing", to: paths.screenplay },
      { label: "Brand Storytelling", to: paths.brand }
    ]
  ),

  "childrens-book-writing": makePage(
    "Children's Book Writing",
    "Create delightful stories that encourage young readers to imagine, discover and fall in love with books.",
    "We help develop children's stories with engaging characters, age-appropriate language, imaginative settings and meaningful lessons.",
    [
      {
        title: "Stories That Inspire Young Imaginations",
        paragraphs: [
          "Children's books introduce young readers to new ideas, emotions, friendships and adventures. A good story makes learning enjoyable while giving children characters they can remember.",
          "We develop story concepts around the age group, reading level and message you want to communicate."
        ],
        bullets: [
          "Picture books and bedtime stories",
          "Early readers and beginner books",
          "Educational children's stories",
          "Fantasy and adventure books"
        ]
      },
      {
        title: "Characters Children Remember",
        paragraphs: [
          "A curious animal, a brave young explorer or an imaginative child can become the heart of a memorable story.",
          "We create character personalities, motivations and simple conflicts that young readers can understand and connect with."
        ],
        bullets: [
          "Relatable main characters",
          "Friendly supporting characters",
          "Imaginative story settings",
          "Positive themes and meaningful lessons"
        ]
      },
      {
        title: "Writing for Different Age Groups",
        paragraphs: [
          "A story for preschool children needs different language and pacing from a chapter book written for older readers.",
          "We consider vocabulary, sentence length, story complexity and the balance between written text and illustrations."
        ],
        bullets: [
          "Simple language for early readers",
          "Rhythmic storytelling for picture books",
          "Longer adventures for developing readers",
          "Clear educational storytelling"
        ]
      },
      {
        title: "Who Can Publish Children's Books?",
        paragraphs: [
          "Parents, educators, aspiring authors and established writers can all develop children's books around their ideas and experiences."
        ],
        bullets: [
          "First-time children's authors",
          "Teachers and educators",
          "Parents with original story ideas",
          "Educational organizations"
        ]
      },
      {
        title: "Give Your Story a Wonderful Beginning",
        paragraphs: [
          "A thoughtful children's book can entertain, educate and encourage curiosity. Let your imagination become a story young readers will enjoy."
        ]
      }
    ],
    [
      { question: "Can you write stories for different age groups?", answer: "Yes. We tailor vocabulary, length and complexity to the intended reading age." },
      { question: "Can my children's book include a moral lesson?", answer: "Yes. We can naturally incorporate themes such as friendship, kindness, courage and curiosity." },
      { question: "Can you prepare a manuscript for illustrations?", answer: "Yes. We can structure the manuscript and provide scene descriptions to guide illustration planning." }
    ],
    [
      { label: "Comic Book Writing", to: paths.comic },
      { label: "Brand Storytelling", to: paths.brand },
      { label: "Book Publishing Services", to: paths.publishing }
    ]
  ),

  "screenplay-script-writing": makePage(
    "Screenplay Script Writing",
    "Turn your cinematic ideas into engaging screenplays with compelling scenes, memorable characters and natural dialogue.",
    "We help develop film and television scripts through story structure, character arcs, scene descriptions and screenplay formatting.",
    [
      {
        title: "From an Idea to a Screenplay",
        paragraphs: [
          "A strong screenplay starts with a central premise that gives the audience a reason to keep watching.",
          "We help develop the premise into a coherent narrative with clear stakes, meaningful conflict and a storyline that moves naturally from scene to scene."
        ],
        bullets: [
          "Feature film screenplays",
          "Short film scripts",
          "Television and web series",
          "Drama, comedy, thriller and action"
        ]
      },
      {
        title: "Develop Characters and Story Arcs",
        paragraphs: [
          "Film audiences experience a story through its characters. Their ambitions, weaknesses and decisions give emotional meaning to the events unfolding on screen.",
          "We develop character backgrounds, relationships and transformations that support the central narrative."
        ],
        bullets: [
          "Main character development",
          "Antagonists and supporting roles",
          "Character motivations",
          "Emotional and narrative progression"
        ]
      },
      {
        title: "Scene Construction and Dialogue",
        paragraphs: [
          "Every scene should have a purpose. It might reveal information, create tension, develop a relationship or change the direction of the story.",
          "We organize scenes, action descriptions and dialogue into a screenplay format that supports visual storytelling."
        ],
        bullets: [
          "Scene headings and descriptions",
          "Dialogue and character interactions",
          "Transitions and pacing",
          "Opening hooks and memorable endings"
        ]
      },
      {
        title: "Who Needs Screenplay Writers?",
        paragraphs: [
          "We support creators and production professionals who want to develop cinematic ideas into structured scripts."
        ],
        bullets: [
          "Independent filmmakers",
          "Film and television producers",
          "Screenwriters developing original ideas",
          "Digital content studios"
        ]
      },
      {
        title: "Make Your Next Story Screen-Ready",
        paragraphs: [
          "A powerful visual story begins with a carefully constructed script. We help give your concept the structure it needs to move toward production."
        ]
      }
    ],
    [
      { question: "Do you write short film scripts?", answer: "Yes. We can develop scripts for short films and longer productions." },
      { question: "Can you improve an existing screenplay?", answer: "Yes. We can review story structure, character development, pacing and dialogue." },
      { question: "Can I provide the film concept?", answer: "Absolutely. Your idea and creative direction will guide the development process." }
    ],
    [
      { label: "Comic Book Writing", to: paths.comic },
      { label: "Podcast Script Writing", to: paths.podcast },
      { label: "Speech Script Writing", to: paths.speech }
    ]
  ),

  "song-writing": makePage(
    "Song Writing",
    "Turn emotions, experiences and creative ideas into lyrics with rhythm, meaning and a memorable musical identity.",
    "We develop original song lyrics around your theme, genre, intended audience and preferred musical direction.",
    [
      {
        title: "Finding the Heart of Your Song",
        paragraphs: [
          "Every memorable song begins with something worth expressing: an emotion, a relationship, a personal experience or an idea.",
          "We help identify the central theme and develop a lyrical direction that gives the song a consistent identity."
        ],
        bullets: [
          "Love and relationship songs",
          "Inspirational and motivational lyrics",
          "Personal and emotional storytelling",
          "Pop, hip-hop, country and other genres"
        ]
      },
      {
        title: "Verses, Choruses and Hooks",
        paragraphs: [
          "A song needs structure as well as creativity. Verses develop the story, choruses communicate the central message and hooks give listeners something memorable.",
          "We organize lyrics to create natural progression and a consistent emotional experience."
        ],
        bullets: [
          "Verse and chorus development",
          "Memorable lyrical hooks",
          "Bridge and pre-chorus writing",
          "Rhyme, rhythm and lyrical flow"
        ]
      },
      {
        title: "Developing a Distinctive Musical Voice",
        paragraphs: [
          "The words should feel appropriate to the artist and the intended audience. A heartfelt acoustic song needs a different lyrical approach from an energetic rap track.",
          "We adapt vocabulary, tone, rhythm and storytelling to the direction you choose."
        ]
      },
      {
        title: "Who Can Benefit from Songwriting?",
        paragraphs: [
          "Our service supports artists and creators who need original lyrics or help developing an unfinished song."
        ],
        bullets: [
          "Independent musicians",
          "Singers and performers",
          "Music producers",
          "Content creators and composers"
        ]
      },
      {
        title: "Give Your Music a Voice",
        paragraphs: [
          "Your musical idea deserves lyrics that communicate its emotion and message. Let's develop a song that reflects your creative direction."
        ]
      }
    ],
    [
      { question: "Can you write lyrics from my personal story?", answer: "Yes. Your experiences and ideas can provide the foundation for original song lyrics." },
      { question: "Can you write in different music genres?", answer: "Yes. We can adapt the lyrical structure and tone to your preferred genre." },
      { question: "Can you improve existing lyrics?", answer: "Yes. We can help refine wording, structure, rhythm and lyrical flow." }
    ],
    [
      { label: "Speech Script Writing", to: paths.speech },
      { label: "Screenplay Script Writing", to: paths.screenplay },
      { label: "Brand Storytelling", to: paths.brand }
    ]
  ),

  "speech-script-writing": makePage(
    "Speech Script Writing",
    "Deliver your message with confidence through speeches that connect with audiences and communicate ideas clearly.",
    "We develop structured speech scripts for professional events, conferences, ceremonies, presentations and personal occasions.",
    [
      {
        title: "Every Great Speech Starts with a Clear Message",
        paragraphs: [
          "A successful speech is built around a central idea that the audience can understand and remember.",
          "We identify your objective, audience and occasion before developing the speech structure and tone."
        ],
        bullets: [
          "Business and leadership speeches",
          "Graduation and award ceremonies",
          "Wedding and special occasion speeches",
          "Motivational and public speeches"
        ]
      },
      {
        title: "Build a Strong Opening and Ending",
        paragraphs: [
          "The opening creates the first impression. A relevant question, short story or meaningful statement can immediately establish a connection.",
          "The ending should reinforce your message and leave the audience with a clear takeaway."
        ],
        bullets: [
          "Audience-focused introductions",
          "Memorable examples and stories",
          "Smooth transitions",
          "Powerful closing statements"
        ]
      },
      {
        title: "Write for Natural Delivery",
        paragraphs: [
          "A speech should sound natural when spoken aloud, not like an academic essay being read to an audience.",
          "We focus on sentence rhythm, accessible language, appropriate pauses and a tone that matches the speaker."
        ]
      },
      {
        title: "Who Needs Professional Speech Writing?",
        paragraphs: [
          "Our service supports people who want to communicate confidently at important professional and personal events."
        ],
        bullets: [
          "Business leaders and executives",
          "Conference speakers",
          "Students and graduates",
          "Event hosts and public speakers"
        ]
      },
      {
        title: "Make Your Words Matter",
        paragraphs: [
          "Whether your speech needs to inspire, celebrate, persuade or inform, thoughtful preparation can help your message make a lasting impression."
        ]
      }
    ],
    [
      { question: "Can you write speeches for formal events?", answer: "Yes. We develop speeches for conferences, ceremonies, professional events and celebrations." },
      { question: "Can the speech sound conversational?", answer: "Yes. We adapt the language and sentence structure to suit your speaking style." },
      { question: "Can you work from my notes?", answer: "Yes. Your notes, experiences and key messages can form the foundation of the speech." }
    ],
    [
      { label: "Corporate Writing Services", to: paths.corporate },
      { label: "Podcast Script Writing", to: paths.podcast },
      { label: "Song Writing", to: paths.song }
    ]
  ),

  "corporate-writing-services": makePage(
    "Corporate Writing Services",
    "Communicate your business vision through professional corporate content that informs, persuades and builds credibility.",
    "We help organizations develop business documents, company profiles, reports and professional communication aligned with their brand identity.",
    [
      {
        title: "Professional Communication for Modern Businesses",
        paragraphs: [
          "Business communication influences how clients, partners, employees and investors understand an organization.",
          "We develop clear and consistent content that presents your company's services, expertise, achievements and objectives."
        ],
        bullets: [
          "Company profiles and business descriptions",
          "Corporate reports and proposals",
          "Business presentations and communication",
          "Executive biographies and leadership profiles"
        ]
      },
      {
        title: "Developing a Consistent Corporate Voice",
        paragraphs: [
          "A company's communication should reflect its identity. A technology business may need a different voice from a financial consultancy or creative agency.",
          "We consider your industry, brand positioning and intended audience when developing professional content."
        ]
      },
      {
        title: "From Business Information to Finished Documents",
        paragraphs: [
          "We organize information into clear sections, identify the most important messages and refine the presentation.",
          "The result is content designed to make complex business information easier to understand."
        ],
        bullets: [
          "Information gathering",
          "Content planning",
          "Professional drafting",
          "Review and refinement"
        ]
      },
      {
        title: "Who Needs Corporate Writing?",
        paragraphs: [
          "Organizations of different sizes can benefit from professional business communication."
        ],
        bullets: [
          "Startups and entrepreneurs",
          "Established companies",
          "Consultants and executives",
          "Professional service organizations"
        ]
      },
      {
        title: "Make Your Business Communication Stronger",
        paragraphs: [
          "Clear communication helps businesses present their value and build stronger professional relationships."
        ]
      }
    ],
    [
      { question: "Can you write a company profile?", answer: "Yes. We can develop company profiles that communicate your services, history, strengths and business identity." },
      { question: "Do you write business proposals?", answer: "Yes. We can assist with structured proposals and professional business documents." },
      { question: "Can you follow our existing brand voice?", answer: "Yes. Existing brand guidelines and examples can guide the writing style." }
    ],
    [
      { label: "Brand Storytelling", to: paths.brand },
      { label: "LinkedIn Ghostwriting", to: paths.linkedin },
      { label: "Legal Ghostwriting", to: paths.legal }
    ]
  ),

  "podcast-script-writing": makePage(
    "Podcast Script Writing",
    "Turn your podcast ideas into engaging episodes with compelling openings, natural conversations and memorable conclusions.",
    "We help podcasters develop episode outlines, interview questions, narration and complete scripts for different podcast formats.",
    [
      {
        title: "Build an Episode Your Audience Wants to Hear",
        paragraphs: [
          "A successful podcast episode gives listeners a reason to stay engaged from the introduction to the final moments.",
          "We develop episode concepts around your audience, topic, format and intended takeaway."
        ],
        bullets: [
          "Interview-based podcast scripts",
          "Solo narration and educational episodes",
          "Storytelling podcasts",
          "Business and entertainment podcasts"
        ]
      },
      {
        title: "Structure Conversations and Interviews",
        paragraphs: [
          "Good interviews need more than a list of questions. They require a natural sequence that encourages meaningful answers and interesting discussion.",
          "We organize questions into introductions, key discussion points, follow-up prompts and closing segments."
        ],
        bullets: [
          "Guest introductions",
          "Open-ended interview questions",
          "Discussion transitions",
          "Episode conclusions"
        ]
      },
      {
        title: "Write for the Human Voice",
        paragraphs: [
          "Podcast scripts should sound conversational rather than overly formal. Listeners respond to a clear, natural delivery.",
          "We consider pacing, sentence length, transitions and opportunities for spontaneous discussion."
        ]
      },
      {
        title: "Who Can Benefit from Podcast Writing?",
        paragraphs: [
          "We support podcast creators who want to improve preparation, consistency and episode quality."
        ],
        bullets: [
          "Independent podcasters",
          "Business and industry experts",
          "Interview hosts",
          "Media production teams"
        ]
      },
      {
        title: "Give Every Episode a Clear Direction",
        paragraphs: [
          "With a strong script and thoughtful structure, your podcast can communicate its message while keeping listeners interested."
        ]
      }
    ],
    [
      { question: "Can you write interview questions?", answer: "Yes. We can develop topic-specific questions and follow-up prompts for your guests." },
      { question: "Can you write complete podcast episodes?", answer: "Yes. We can prepare full scripts or structured outlines depending on your format." },
      { question: "Can the script sound casual?", answer: "Yes. We adapt the writing to match your natural speaking style and audience." }
    ],
    [
      { label: "Speech Script Writing", to: paths.speech },
      { label: "Screenplay Script Writing", to: paths.screenplay },
      { label: "Brand Storytelling", to: paths.brand }
    ]
  ),

  "legal-ghostwriting": makePage(
    "Legal Ghostwriting",
    "Present legal knowledge and professional insight through structured, carefully developed legal publications.",
    "We support legal professionals with articles, educational material, legal books and professional thought-leadership content.",
    [
      {
        title: "Writing That Communicates Legal Expertise",
        paragraphs: [
          "Legal subjects often involve complex terminology, detailed reasoning and careful distinctions. Effective legal writing organizes this information so readers can follow the argument.",
          "We work from your research, references and professional guidance to develop well-structured written material."
        ],
        bullets: [
          "Legal books and professional guides",
          "Law firm articles and publications",
          "Legal education resources",
          "Professional biographies and commentary"
        ]
      },
      {
        title: "Research, Structure and Legal Clarity",
        paragraphs: [
          "A strong legal publication needs a logical structure. Readers should be able to understand the issue, relevant background and the reasoning presented.",
          "We help organize source material into coherent sections while maintaining the terminology and distinctions supplied by the author."
        ]
      },
      {
        title: "Developing Professional Legal Content",
        paragraphs: [
          "Different legal publications serve different audiences. A general educational article requires a different approach from a specialist professional book.",
          "We adapt the presentation to your readership and intended purpose."
        ],
        bullets: [
          "Clear issue introductions",
          "Organized legal discussion",
          "Consistent terminology",
          "Careful editorial refinement"
        ]
      },
      {
        title: "Who Benefits from Legal Ghostwriting?",
        paragraphs: [
          "Our writing support is intended for legal professionals and organizations that want to communicate their expertise."
        ],
        bullets: [
          "Lawyers and legal consultants",
          "Law firms and legal organizations",
          "Legal educators",
          "Legal industry commentators"
        ]
      },
      {
        title: "Give Your Legal Knowledge a Wider Audience",
        paragraphs: [
          "Professional legal writing can help communicate complex ideas to students, professionals and interested readers."
        ],
        callout: {
          title: "Professional Review Matters",
          text: "Legal content should be reviewed by an appropriately qualified legal professional before being used as legal advice or published as authoritative guidance."
        }
      }
    ],
    [
      { question: "Can you write legal articles?", answer: "Yes. We can develop legal articles, professional publications and educational material." },
      { question: "Can you work with legal references?", answer: "Yes. You can provide statutes, cases, research and other approved source materials." },
      { question: "Do you provide legal advice?", answer: "No. Our service is writing support, not a substitute for advice from a qualified legal professional." }
    ],
    [
      { label: "Corporate Writing Services", to: paths.corporate },
      { label: "Scientific Ghostwriting", to: paths.scientific },
      { label: "Book Publishing Services", to: paths.publishing }
    ]
  ),

  "scientific-ghostwriting": makePage(
    "Scientific Ghostwriting",
    "Make scientific ideas easier to communicate through organized, research-led and carefully written publications.",
    "We support researchers and subject specialists with scientific books, educational articles, research-based manuscripts and technical explanations.",
    [
      {
        title: "Communicating Research and Scientific Ideas",
        paragraphs: [
          "Scientific knowledge can be difficult to communicate when findings involve specialist terminology, detailed methodology and complex concepts.",
          "We help organize supplied research and source materials into a clear written structure without changing the intended scientific meaning."
        ],
        bullets: [
          "Scientific books and educational guides",
          "Research-based articles",
          "Science communication material",
          "Specialist educational manuscripts"
        ]
      },
      {
        title: "Organizing Evidence and Methodology",
        paragraphs: [
          "A scientific manuscript needs a logical flow between its research question, background, methods, observations and conclusions.",
          "We help arrange supplied material so that readers can understand the subject and follow the discussion."
        ]
      },
      {
        title: "Writing for Specialist and General Readers",
        paragraphs: [
          "Scientific publications may target experienced researchers, students or members of the general public.",
          "We adapt the language and explanations to the intended readership while preserving important scientific terminology."
        ],
        bullets: [
          "Accessible scientific explanations",
          "Consistent technical terminology",
          "Logical chapter structure",
          "Clear presentation of supplied findings"
        ]
      },
      {
        title: "Who Needs Scientific Writing Support?",
        paragraphs: [
          "Researchers and professionals can use this service to communicate their knowledge through well-organized publications."
        ],
        bullets: [
          "Scientists and researchers",
          "University educators",
          "Scientific consultants",
          "Research-focused organizations"
        ]
      },
      {
        title: "Give Scientific Knowledge a Clear Voice",
        paragraphs: [
          "Your research deserves a presentation that makes its purpose and significance understandable to the readers you want to reach."
        ]
      }
    ],
    [
      { question: "Can you work from existing research?", answer: "Yes. We can use your approved research papers, notes and references as source material." },
      { question: "Can you simplify scientific concepts?", answer: "Yes. We can adapt explanations for different levels of scientific knowledge." },
      { question: "Do you independently verify research findings?", answer: "The responsible researcher should verify findings, data and scientific conclusions before publication." }
    ],
    [
      { label: "Medical Ghostwriters", to: paths.medical },
      { label: "Technical Ghostwriting", to: paths.technical },
      { label: "Legal Ghostwriting", to: paths.legal }
    ]
  ),

  "technical-ghostwriting": makePage(
    "Technical Ghostwriting",
    "Transform complex technical information into organized, useful content that readers can understand and apply.",
    "We develop technical guides, product documentation, manuals, educational resources and specialist publications based on your expertise.",
    [
      {
        title: "Making Complex Information Easier to Understand",
        paragraphs: [
          "Technical subjects often involve processes, specifications and specialist language that can be difficult for unfamiliar readers.",
          "Our approach focuses on organizing your information into clear explanations that help readers understand how something works."
        ],
        bullets: [
          "Technical books and guides",
          "Product documentation",
          "Instructional manuals",
          "Software and technology publications"
        ]
      },
      {
        title: "Structure Information Around the Reader",
        paragraphs: [
          "A user manual needs practical instructions, while a technical book may require deeper explanations and supporting examples.",
          "We consider the reader's experience level and the purpose of each document when developing its structure."
        ],
        bullets: [
          "Step-by-step instructions",
          "Technical explanations",
          "Consistent terminology",
          "Organized sections and examples"
        ]
      },
      {
        title: "From Specialist Knowledge to Finished Content",
        paragraphs: [
          "Your technical notes, product information and subject expertise provide the foundation for the writing.",
          "We organize and refine that material into a document that follows a clear progression and is easier to navigate."
        ]
      },
      {
        title: "Who Benefits from Technical Ghostwriting?",
        paragraphs: [
          "This service is useful for professionals and organizations that need complex information presented clearly."
        ],
        bullets: [
          "Technology companies",
          "Software developers",
          "Engineers and consultants",
          "Product and training teams"
        ]
      },
      {
        title: "Make Technical Knowledge More Accessible",
        paragraphs: [
          "Well-organized technical content helps users understand products, follow processes and make better use of specialist information."
        ]
      }
    ],
    [
      { question: "Can you write technical manuals?", answer: "Yes. We can develop structured user manuals, product guides and instructional documents." },
      { question: "Can you work with technical notes?", answer: "Yes. We can organize your notes, specifications and reference materials into readable content." },
      { question: "Can you write for non-technical readers?", answer: "Yes. We can adapt the language and level of detail to the intended audience." }
    ],
    [
      { label: "Scientific Ghostwriting", to: paths.scientific },
      { label: "Medical Ghostwriters", to: paths.medical },
      { label: "Corporate Writing Services", to: paths.corporate }
    ]
  ),

  "brand-storytelling": makePage(
    "Brand Storytelling",
    "Give your brand a distinctive voice through stories that communicate its purpose, values and personality.",
    "We help businesses develop brand narratives that connect their history, mission, products and customer experience.",
    [
      {
        title: "Every Brand Has a Story Worth Telling",
        paragraphs: [
          "Customers connect with more than products and services. They also want to understand what a business represents and why it exists.",
          "Brand storytelling turns company information into a narrative that communicates purpose and creates a recognizable identity."
        ],
        bullets: [
          "Brand origin and founder stories",
          "Company mission and values",
          "Customer-focused brand narratives",
          "Product and service storytelling"
        ]
      },
      {
        title: "Discover Your Brand Personality",
        paragraphs: [
          "A brand's personality influences how it communicates. Some businesses need a confident professional voice, while others benefit from a friendly and approachable identity.",
          "We explore your audience, industry, positioning and brand values before developing your narrative."
        ]
      },
      {
        title: "Create Consistent Stories Across Platforms",
        paragraphs: [
          "Your brand story should remain recognizable across your website, social media, company profile and marketing materials.",
          "We help adapt the central message into different content formats without losing its identity."
        ],
        bullets: [
          "Website brand narratives",
          "About Us page content",
          "Founder and company profiles",
          "Campaign and promotional storytelling"
        ]
      },
      {
        title: "Who Needs Brand Storytelling?",
        paragraphs: [
          "Businesses at different stages can use storytelling to communicate their identity and build stronger customer relationships."
        ],
        bullets: [
          "Startups and emerging brands",
          "Established businesses",
          "Personal brands and entrepreneurs",
          "Marketing and creative agencies"
        ]
      },
      {
        title: "Make Your Brand Memorable",
        paragraphs: [
          "A clear and consistent brand story helps audiences understand what makes your business distinctive."
        ]
      }
    ],
    [
      { question: "Can you write an About Us page?", answer: "Yes. We can develop an engaging company story and About Us content." },
      { question: "Can you work with an existing brand identity?", answer: "Yes. Your brand guidelines, values and previous content can guide the storytelling." },
      { question: "Can you create content for social media too?", answer: "Yes. Brand narratives can be adapted into platform-specific content." }
    ],
    [
      { label: "Corporate Writing Services", to: paths.corporate },
      { label: "Instagram Ghostwriting", to: paths.instagram },
      { label: "LinkedIn Ghostwriting", to: paths.linkedin }
    ]
  ),

  "real-life-story-writing": makePage(
    "Real Life Story Writing",
    "Turn meaningful life experiences, personal memories and extraordinary journeys into stories readers can connect with.",
    "We help develop personal narratives, memoirs and true-life stories while respecting the experiences and voice of the person behind them.",
    [
      {
        title: "Every Life Has a Story",
        paragraphs: [
          "Life experiences often contain moments of courage, change, struggle, achievement and discovery that deserve to be remembered.",
          "We help identify the central themes of your experience and organize memories into a coherent narrative."
        ],
        bullets: [
          "Personal memoirs",
          "Family histories",
          "Inspirational life stories",
          "Personal and professional biographies"
        ]
      },
      {
        title: "Finding the Moments That Matter",
        paragraphs: [
          "A compelling personal story does not need to describe every event. It focuses on the experiences that explain the person's journey and development.",
          "We help identify important milestones, turning points, relationships and lessons that shape the narrative."
        ]
      },
      {
        title: "Preserving Your Authentic Voice",
        paragraphs: [
          "The most meaningful personal stories retain the personality and perspective of the person who experienced them.",
          "We use interviews, notes, memories and supplied materials to develop a narrative that reflects your intended voice."
        ],
        bullets: [
          "Personal interviews and story discussions",
          "Timeline and memory organization",
          "Chapter development",
          "Narrative editing and refinement"
        ]
      },
      {
        title: "Who Can Benefit from Life Story Writing?",
        paragraphs: [
          "Anyone who wants to preserve meaningful experiences or share a personal journey can consider this service."
        ],
        bullets: [
          "Individuals preserving their memories",
          "Families documenting their history",
          "Entrepreneurs sharing their journeys",
          "Professionals documenting achievements"
        ]
      },
      {
        title: "Preserve a Story for Generations",
        paragraphs: [
          "Your experiences are part of your legacy. A thoughtfully written personal story can preserve memories and help future readers understand your journey."
        ]
      }
    ],
    [
      { question: "Can you write my autobiography?", answer: "Yes. We can help organize your memories, experiences and interviews into an autobiography." },
      { question: "Do I need to provide a complete draft?", answer: "No. You can begin with memories, notes, recordings or conversations." },
      { question: "Will my personal voice be preserved?", answer: "We aim to reflect your preferred tone, personality and perspective throughout the manuscript." }
    ],
    [
      { label: "Book Publishing Services", to: paths.publishing },
      { label: "Brand Storytelling", to: paths.brand },
      { label: "Children's Book Writing", to: paths.children }
    ]
  ),

  "book-publishing-services": makePage(
    "Book Publishing Services",
    "Take your completed manuscript closer to readers through professional publishing preparation and support.",
    "We help authors prepare books through editorial coordination, design, formatting, publishing setup and distribution planning.",
    [
      {
        title: "Prepare Your Manuscript for Publication",
        paragraphs: [
          "Completing a manuscript is an important achievement, but preparing it for publication requires additional decisions about editing, presentation and format.",
          "We help authors organize these stages and prepare their work for the intended publishing route."
        ],
        bullets: [
          "Manuscript preparation",
          "Book cover and interior design coordination",
          "Print and digital formatting",
          "Publishing setup assistance"
        ]
      },
      {
        title: "Create a Professional Book Presentation",
        paragraphs: [
          "A book's presentation influences how readers perceive its quality. The cover, typography, chapter layout and overall consistency all contribute to the reading experience.",
          "We help coordinate these elements to create a polished and readable publication."
        ]
      },
      {
        title: "Publishing Formats and Distribution",
        paragraphs: [
          "Authors may choose digital editions, paperback formats or hardcover publications depending on their goals and audience.",
          "We help prepare publication files and discuss distribution options appropriate to the selected format."
        ],
        bullets: [
          "eBook preparation",
          "Paperback and hardcover formatting",
          "ISBN and metadata guidance",
          "Publishing platform preparation"
        ]
      },
      {
        title: "Who Needs Book Publishing Support?",
        paragraphs: [
          "Our publishing support is suitable for authors at different stages of their publishing journey."
        ],
        bullets: [
          "First-time authors",
          "Independent publishers",
          "Established writers",
          "Business and professional authors"
        ]
      },
      {
        title: "Move Your Manuscript Toward Publication",
        paragraphs: [
          "A well-prepared book gives your ideas a professional presentation and helps you take the next step toward reaching readers."
        ]
      }
    ],
    [
      { question: "Can you help prepare an existing manuscript?", answer: "Yes. We can assist with preparation, formatting and publishing-related requirements." },
      { question: "Can I publish in both digital and print formats?", answer: "Yes. Depending on the project, your book can be prepared for eBook and print editions." },
      { question: "Do you help with distribution?", answer: "We can assist with publishing preparation and discuss distribution options for your selected platforms." }
    ],
    [
      { label: "Find a Literary Agent", to: paths.literary },
      { label: "Children's Book Writing", to: paths.children },
      { label: "Real Life Story Writing", to: paths.realLife }
    ]
  ),

  "find-a-literary-agent": makePage(
    "Find a Literary Agent",
    "Prepare your manuscript and author submission materials for a more confident approach to literary representation.",
    "We help authors organize their book proposals, query letters, synopses and submission materials when approaching literary agents.",
    [
      {
        title: "Understand the Role of a Literary Agent",
        paragraphs: [
          "Literary agents represent authors and help connect suitable manuscripts with publishers. They evaluate projects based on their commercial potential, genre and publishing suitability.",
          "Understanding the role of an agent helps authors prepare a more focused submission."
        ],
        bullets: [
          "Understanding agent representation",
          "Identifying suitable literary agents",
          "Learning submission requirements",
          "Preparing an author submission strategy"
        ]
      },
      {
        title: "Build a Professional Query Letter",
        paragraphs: [
          "A query letter introduces your book and gives an agent a concise reason to consider the project.",
          "It usually includes the book's premise, genre, intended readership, word count and relevant author information."
        ],
        bullets: [
          "A compelling book introduction",
          "Clear genre and audience information",
          "Author background",
          "Professional closing and contact details"
        ]
      },
      {
        title: "Prepare Your Submission Package",
        paragraphs: [
          "Different agents request different materials. Some ask for a synopsis and sample chapters, while others require a complete proposal.",
          "We help organize these materials according to the submission instructions you intend to follow."
        ]
      },
      {
        title: "Who Needs Literary Agent Support?",
        paragraphs: [
          "Authors interested in traditional publishing can benefit from organized submission materials."
        ],
        bullets: [
          "Fiction writers",
          "Non-fiction authors",
          "First-time authors",
          "Experienced independent writers exploring representation"
        ]
      },
      {
        title: "Make Your Submission Professional",
        paragraphs: [
          "A thoughtful submission helps agents understand your book and evaluate whether it fits their interests. Representation cannot be guaranteed, but preparation can make the process clearer."
        ]
      }
    ],
    [
      { question: "Can you write a literary agent query letter?", answer: "Yes. We can help prepare a professional query letter based on your book and author background." },
      { question: "Can you prepare a book synopsis?", answer: "Yes. We can help develop a concise synopsis that communicates the main storyline and important developments." },
      { question: "Can you guarantee an agent will accept my book?", answer: "No. Literary representation depends on the agent's interests, manuscript suitability and individual selection decisions." }
    ],
    [
      { label: "Book Publishing Services", to: paths.publishing },
      { label: "Real Life Story Writing", to: paths.realLife },
      { label: "Brand Storytelling", to: paths.brand }
    ]
  ),

  "instagram-ghostwriting": makePage(
    "Instagram Ghostwriting",
    "Develop Instagram captions and content that communicate your personality and connect with your target audience.",
    "We help creators, entrepreneurs and businesses prepare platform-focused Instagram content with consistent messaging and a recognizable voice.",
    [
      {
        title: "Create Content That Fits Instagram",
        paragraphs: [
          "Instagram is a visual platform, but written content still plays an important role in explaining ideas, adding context and encouraging interaction.",
          "We develop captions that complement your visual content and communicate your message in a natural style."
        ],
        bullets: [
          "Post captions",
          "Carousel copy",
          "Reel scripts and hooks",
          "Profile biographies and introductions"
        ]
      },
      {
        title: "Build a Consistent Brand Voice",
        paragraphs: [
          "Your Instagram presence should sound recognizable across different posts. A consistent tone helps audiences understand the personality behind your account.",
          "We consider your audience, niche and communication style when preparing content."
        ]
      },
      {
        title: "Turn Ideas into Engaging Captions",
        paragraphs: [
          "A strong caption gives the audience a reason to stop, read and respond. It can tell a short story, share useful information or invite discussion.",
          "We structure captions with clear openings, readable sections and relevant calls to action."
        ],
        bullets: [
          "Attention-grabbing introductions",
          "Readable caption structure",
          "Relevant hashtags and keywords",
          "Natural engagement prompts"
        ]
      },
      {
        title: "Who Needs Instagram Ghostwriting?",
        paragraphs: [
          "This service supports individuals and businesses that want a more organized and consistent Instagram content presence."
        ],
        bullets: [
          "Influencers and content creators",
          "Small businesses",
          "Entrepreneurs and coaches",
          "Personal brands"
        ]
      },
      {
        title: "Make Your Instagram Voice Recognizable",
        paragraphs: [
          "Consistent and relevant content helps your profile communicate a clear identity and gives followers a reason to engage with your posts."
        ]
      }
    ],
    [
      { question: "Can you write Instagram captions?", answer: "Yes. We can develop captions for photographs, carousel posts and other Instagram content." },
      { question: "Can you write Reel scripts?", answer: "Yes. We can create short-form scripts with hooks, key points and calls to action." },
      { question: "Can you follow my existing tone?", answer: "Yes. Existing posts and brand guidelines can help establish your preferred writing style." }
    ],
    [
      { label: "Facebook Ghostwriting", to: paths.facebook },
      { label: "Brand Storytelling", to: paths.brand },
      { label: "LinkedIn Ghostwriting", to: paths.linkedin }
    ]
  ),

  "facebook-ghostwriting": makePage(
    "Facebook Ghostwriting",
    "Create meaningful Facebook posts that communicate your ideas, encourage discussion and build a consistent community voice.",
    "We develop Facebook content for businesses, public figures, organizations and creators who want to communicate with their audiences.",
    [
      {
        title: "Write Posts That Start Conversations",
        paragraphs: [
          "Facebook supports a wide range of communication, from personal stories and community discussions to business announcements and educational posts.",
          "We develop content that fits your page's purpose and gives readers a clear reason to interact."
        ],
        bullets: [
          "Business page posts",
          "Community announcements",
          "Promotional and informational captions",
          "Story-based social content"
        ]
      },
      {
        title: "Understand Your Facebook Audience",
        paragraphs: [
          "Different Facebook audiences respond to different tones and topics. A community page may need friendly and conversational content, while a business page may require a more professional approach.",
          "We use your audience and objectives to guide the content direction."
        ]
      },
      {
        title: "Develop a Consistent Posting Voice",
        paragraphs: [
          "Regular communication works best when your posts feel connected rather than random. Consistent messaging helps readers recognize your page and understand what it offers.",
          "We help develop post themes, opening lines and calls to action that fit your communication goals."
        ],
        bullets: [
          "Engaging post introductions",
          "Community-focused messages",
          "Promotional copy",
          "Discussion and response prompts"
        ]
      },
      {
        title: "Who Benefits from Facebook Ghostwriting?",
        paragraphs: [
          "Facebook writing support is useful for organizations and individuals who manage pages or communicate with online communities."
        ],
        bullets: [
          "Small and medium businesses",
          "Community page administrators",
          "Public figures",
          "Content creators"
        ]
      },
      {
        title: "Build Better Conversations with Content",
        paragraphs: [
          "Thoughtful Facebook writing can help your page communicate consistently and create opportunities for meaningful audience interaction."
        ]
      }
    ],
    [
      { question: "Can you write business Facebook posts?", answer: "Yes. We can develop business updates, promotional posts and informational content." },
      { question: "Can you write community messages?", answer: "Yes. We can create announcements, discussion posts and community-focused content." },
      { question: "Can you match my page's existing style?", answer: "Yes. We can use your existing posts as writing references." }
    ],
    [
      { label: "Instagram Ghostwriting", to: paths.instagram },
      { label: "Brand Storytelling", to: paths.brand },
      { label: "Twitter Ghostwriting", to: paths.twitter }
    ]
  ),

  "linkedin-ghostwriting": makePage(
    "LinkedIn Ghostwriting",
    "Build a professional presence through thoughtful LinkedIn content that shares expertise and strengthens your professional voice.",
    "We help executives, entrepreneurs and professionals communicate insights, experiences and industry perspectives through LinkedIn posts and articles.",
    [
      {
        title: "Build Authority Through Professional Writing",
        paragraphs: [
          "LinkedIn gives professionals an opportunity to share expertise, communicate achievements and contribute to industry conversations.",
          "We help transform your knowledge and experience into clear, useful content that reflects your professional identity."
        ],
        bullets: [
          "Executive thought-leadership posts",
          "Professional articles",
          "Career and leadership insights",
          "Company and industry updates"
        ]
      },
      {
        title: "Turn Professional Experience into Content",
        paragraphs: [
          "Your career experiences can provide valuable material for professional storytelling. Lessons from projects, challenges and achievements can become useful posts for your audience.",
          "We work with your experiences and opinions to develop content that sounds authentic."
        ]
      },
      {
        title: "Create a Consistent LinkedIn Presence",
        paragraphs: [
          "A professional profile becomes more recognizable when its content follows a consistent set of themes and communication principles.",
          "We help plan relevant topics, develop strong opening lines and organize posts for readability."
        ],
        bullets: [
          "Industry-specific perspectives",
          "Personal professional stories",
          "Educational and informative posts",
          "Thoughtful audience discussion prompts"
        ]
      },
      {
        title: "Who Needs LinkedIn Ghostwriting?",
        paragraphs: [
          "Professionals who want to communicate their knowledge and experiences more effectively can benefit from this service."
        ],
        bullets: [
          "Business executives",
          "Entrepreneurs and founders",
          "Consultants and coaches",
          "Industry professionals"
        ]
      },
      {
        title: "Let Your Expertise Speak",
        paragraphs: [
          "Professional content should reflect genuine experience and useful insights. We help you communicate those ideas with clarity and consistency."
        ]
      }
    ],
    [
      { question: "Can you write LinkedIn posts for executives?", answer: "Yes. We can develop executive updates, industry insights and professional thought-leadership posts." },
      { question: "Can you write LinkedIn articles?", answer: "Yes. We can help structure longer professional articles around your expertise." },
      { question: "Will the content reflect my own opinions?", answer: "Yes. Your ideas, experiences and approved viewpoints guide the writing process." }
    ],
    [
      { label: "Corporate Writing Services", to: paths.corporate },
      { label: "Brand Storytelling", to: paths.brand },
      { label: "Instagram Ghostwriting", to: paths.instagram }
    ]
  ),

  "twitter-ghostwriting": makePage(
    "Twitter Ghostwriting",
    "Express ideas clearly and quickly through concise posts, engaging threads and a recognizable social media voice.",
    "We help creators, professionals and businesses prepare focused Twitter content that communicates ideas in a short-form format.",
    [
      {
        title: "Make Every Word Count",
        paragraphs: [
          "Short-form social content requires clarity and precision. A post needs to communicate its main idea quickly while giving readers a reason to respond or continue reading.",
          "We help develop concise messages around your topics, opinions and communication goals."
        ],
        bullets: [
          "Short-form posts",
          "Educational threads",
          "Professional commentary",
          "Brand announcements"
        ]
      },
      {
        title: "Turn One Idea into a Complete Thread",
        paragraphs: [
          "A complex topic can be easier to understand when divided into a sequence of connected posts.",
          "We help structure threads with a strong opening, logical progression and a conclusion that reinforces the main message."
        ]
      },
      {
        title: "Develop a Distinctive Posting Style",
        paragraphs: [
          "Your social media voice should feel consistent with your personality and subject area.",
          "We adapt tone, vocabulary, formatting and message length to match your preferred style."
        ],
        bullets: [
          "Strong opening hooks",
          "Short and readable messages",
          "Connected thread structure",
          "Relevant discussion prompts"
        ]
      },
      {
        title: "Who Benefits from Twitter Ghostwriting?",
        paragraphs: [
          "Short-form content support is useful for people who want to communicate regularly without spending all their time drafting posts."
        ],
        bullets: [
          "Entrepreneurs and founders",
          "Industry commentators",
          "Content creators",
          "Businesses and personal brands"
        ]
      },
      {
        title: "Give Your Ideas a Clearer Voice",
        paragraphs: [
          "Concise writing helps communicate your message without unnecessary complexity. We help make each post focused and easy to follow."
        ]
      }
    ],
    [
      { question: "Can you write Twitter threads?", answer: "Yes. We can organize longer ideas into connected short-form posts." },
      { question: "Can you write in a conversational tone?", answer: "Yes. We can adapt the content to match your personality and audience." },
      { question: "Can you develop posts around my industry?", answer: "Yes. Your subject area, expertise and preferred topics guide the content." }
    ],
    [
      { label: "LinkedIn Ghostwriting", to: paths.linkedin },
      { label: "Facebook Ghostwriting", to: paths.facebook },
      { label: "Brand Storytelling", to: paths.brand }
    ]
  ),

};
