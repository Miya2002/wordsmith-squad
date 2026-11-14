
import { Link, useParams } from "react-router-dom";

type ServiceData = {
  title: string;
  eyebrow: string;
  subtitle: string;
  intro: string;
  focus: string[];
  audience: string[];
  process: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

const services: Record<string, ServiceData> = {
  "medical-ghostwriters": {
    title: "Medical Ghostwriters",
    eyebrow: "SPECIALIZED WRITING / 01",
    subtitle: "Communicate complex medical knowledge with clarity, accuracy, and a professional voice.",
    intro: "Medical writing requires more than strong language skills. It requires careful research, an understanding of healthcare terminology, and the ability to communicate complex information clearly. Our medical ghostwriting service helps professionals turn their knowledge and experience into well-structured written content.",
    focus: [
      "Medical books and healthcare guides",
      "Patient education materials",
      "Healthcare articles and professional content",
      "Medical biographies and expert-led manuscripts"
    ],
    audience: [
      "Doctors and healthcare professionals",
      "Medical researchers and educators",
      "Healthcare organizations and consultants"
    ],
    process: [
      { title: "Understand the Subject", text: "We discuss your medical specialty, intended readers, source materials, and communication goals." },
      { title: "Research and Develop", text: "We organize your approved information into a clear structure and develop the manuscript with appropriate terminology." },
      { title: "Review and Refine", text: "We refine the writing, check consistency, and incorporate your feedback before final delivery." }
    ],
    faqs: [
      { question: "Can you write for specialist medical audiences?", answer: "Yes. The writing approach can be tailored to the intended professional audience, subject area, and level of technical detail." },
      { question: "Can I provide my own research and references?", answer: "Absolutely. You can provide research papers, notes, references, outlines, and other approved source materials." }
    ]
  },

  "childrens-book-writing": {
    title: "Children's Book Writing",
    eyebrow: "CREATIVE WRITING / 02",
    subtitle: "Turn imaginative ideas into memorable stories young readers will love.",
    intro: "Children's stories need imagination, warmth, engaging characters, and age-appropriate language. We help authors develop original ideas into enjoyable stories that encourage curiosity, creativity, and a lifelong love of reading.",
    focus: [
      "Picture books and illustrated stories",
      "Early-reader books",
      "Children's fiction and adventure stories",
      "Educational and moral storytelling"
    ],
    audience: [
      "First-time children's authors",
      "Parents and educators",
      "Publishers and creative entrepreneurs"
    ],
    process: [
      { title: "Discover Your Story", text: "We explore your idea, target age group, message, and preferred storytelling style." },
      { title: "Build the Characters", text: "We develop engaging characters, settings, dialogue, and a clear story structure." },
      { title: "Polish the Manuscript", text: "We refine the language, pacing, and storytelling to create an age-appropriate manuscript." }
    ],
    faqs: [
      { question: "Can you write for different age groups?", answer: "Yes. Vocabulary, sentence structure, themes, and storytelling can be adapted to your intended age group." },
      { question: "Can you help with illustration planning?", answer: "Yes. We can develop scene descriptions and illustration guidance to support your book's visual direction." }
    ]
  },

  "comic-book-writing": {
    title: "Comic Book Writing",
    eyebrow: "VISUAL STORYTELLING / 03",
    subtitle: "Create unforgettable characters, powerful dialogue, and stories built for the page.",
    intro: "A compelling comic book combines visual storytelling with strong writing. From character development to panel-by-panel storytelling, we help transform your concept into a structured comic book script that artists can bring to life.",
    focus: [
      "Original comic book concepts",
      "Superhero and fantasy narratives",
      "Character development and dialogue",
      "Panel descriptions and scene direction"
    ],
    audience: [
      "Independent comic creators",
      "Graphic novel authors",
      "Publishers and entertainment creators"
    ],
    process: [
      { title: "Develop the Concept", text: "We establish your story world, characters, conflict, and intended audience." },
      { title: "Structure the Script", text: "We organize scenes, dialogue, panels, and visual descriptions." },
      { title: "Refine the Story", text: "We review pacing, character consistency, and narrative flow." }
    ],
    faqs: [
      { question: "Can you develop an original comic universe?", answer: "Yes. We can help develop original settings, character backgrounds, story arcs, and connected narratives." },
      { question: "Do you write panel-by-panel scripts?", answer: "Yes. Scripts can include panel descriptions, dialogue, captions, and visual direction." }
    ]
  },

  "real-life-story-writing": {
    title: "Real Life Story Writing",
    eyebrow: "PERSONAL NARRATIVES / 04",
    subtitle: "Preserve meaningful experiences through authentic, carefully crafted storytelling.",
    intro: "Every life has experiences worth remembering. Our real-life story writing service helps transform personal memories, milestones, challenges, and achievements into compelling narratives while respecting the voice and experiences of the person telling the story.",
    focus: [
      "Personal memoirs and life stories",
      "Family histories and biographies",
      "Inspirational personal narratives",
      "Professional journeys and success stories"
    ],
    audience: [
      "Individuals preserving personal memories",
      "Families documenting their history",
      "Entrepreneurs and public figures"
    ],
    process: [
      { title: "Listen to Your Story", text: "We gather memories, interviews, notes, and the experiences you want to preserve." },
      { title: "Shape the Narrative", text: "We organize the events into a meaningful structure with a consistent narrative voice." },
      { title: "Preserve Your Voice", text: "We refine the manuscript while keeping the personality and meaning of your story intact." }
    ],
    faqs: [
      { question: "Do I need to have written my story already?", answer: "No. You can begin with conversations, recordings, memories, or rough notes." },
      { question: "Can the story remain private?", answer: "Confidentiality expectations and project permissions can be agreed upon before work begins." }
    ]
  },

  "corporate-writing-services": {
    title: "Corporate Writing Services",
    eyebrow: "BUSINESS COMMUNICATION / 05",
    subtitle: "Give your business communication the clarity, confidence, and consistency it deserves.",
    intro: "Professional business communication shapes how clients, employees, and stakeholders understand your organization. Our corporate writing services help businesses communicate their ideas, values, expertise, and objectives through structured, polished content.",
    focus: [
      "Corporate reports and business documents",
      "Company profiles and executive biographies",
      "Business proposals and presentations",
      "Internal communication and leadership content"
    ],
    audience: [
      "Established businesses and startups",
      "Corporate executives and managers",
      "Consultants and business professionals"
    ],
    process: [
      { title: "Understand Your Business", text: "We identify your audience, brand voice, communication needs, and business objectives." },
      { title: "Develop the Content", text: "We create structured content aligned with your messaging and professional standards." },
      { title: "Review and Deliver", text: "We refine the material for clarity, consistency, and practical use." }
    ],
    faqs: [
      { question: "Can you follow our company's brand voice?", answer: "Yes. We can work from your brand guidelines, existing materials, and preferred communication style." },
      { question: "Do you handle ongoing corporate writing?", answer: "Recurring content and ongoing writing arrangements can be discussed according to your requirements." }
    ]
  },

  "podcast-script-writing": {
    title: "Podcast Script Writing",
    eyebrow: "AUDIO CONTENT / 06",
    subtitle: "Turn your ideas into engaging podcast episodes that keep listeners tuned in.",
    intro: "Successful podcasts combine interesting ideas with natural conversation and thoughtful structure. We help hosts and creators develop scripts that sound authentic, maintain momentum, and deliver meaningful value to listeners.",
    focus: [
      "Podcast episode scripts",
      "Interview questions and host introductions",
      "Educational and storytelling episodes",
      "Podcast series planning and outlines"
    ],
    audience: [
      "Podcast hosts and presenters",
      "Businesses launching branded podcasts",
      "Creators and independent producers"
    ],
    process: [
      { title: "Choose the Episode Direction", text: "We understand the topic, target audience, format, and desired listener experience." },
      { title: "Structure the Conversation", text: "We create engaging openings, talking points, transitions, and closing segments." },
      { title: "Polish for Delivery", text: "We refine the language so the script feels natural when spoken aloud." }
    ],
    faqs: [
      { question: "Can you write interview-based podcast scripts?", answer: "Yes. We can prepare interview questions, guest introductions, transitions, and episode outlines." },
      { question: "Can you match my speaking style?", answer: "Yes. Sample recordings or previous episodes can help us understand your preferred tone." }
    ]
  },

  "legal-ghostwriting": {
    title: "Legal Ghostwriting",
    eyebrow: "PROFESSIONAL WRITING / 07",
    subtitle: "Present complex legal knowledge through clear, structured professional writing.",
    intro: "Legal subjects demand careful language, organization, and attention to detail. Our legal ghostwriting service supports professionals who want to communicate legal knowledge through books, articles, educational resources, and other approved written materials.",
    focus: [
      "Legal books and educational guides",
      "Legal articles and professional commentary",
      "Law firm thought leadership",
      "Legal research-based manuscripts"
    ],
    audience: [
      "Lawyers and legal professionals",
      "Legal educators and researchers",
      "Law firms and consultants"
    ],
    process: [
      { title: "Define the Legal Subject", text: "We establish the jurisdiction, subject matter, intended readers, and source materials." },
      { title: "Develop the Manuscript", text: "We organize the information into a logical, readable structure." },
      { title: "Professional Review", text: "We refine the manuscript and incorporate subject-matter expert feedback." }
    ],
    faqs: [
      { question: "Can you work from legal research supplied by me?", answer: "Yes. You can provide approved research, references, notes, and professional guidance." },
      { question: "Does ghostwriting replace legal advice?", answer: "No. Written materials involving legal matters should be reviewed by a qualified legal professional." }
    ]
  },

  "instagram-ghostwriting": {
    title: "Instagram Ghostwriting",
    eyebrow: "SOCIAL MEDIA / 08",
    subtitle: "Build a recognizable Instagram voice with content designed to connect and engage.",
    intro: "An effective Instagram presence needs more than attractive visuals. It needs captions, messaging, and consistent storytelling that communicate your personality and brand. We help transform your ideas into social content that feels natural and purposeful.",
    focus: [
      "Instagram captions and post copy",
      "Carousel content and educational posts",
      "Reels scripts and short-form hooks",
      "Content calendars and brand messaging"
    ],
    audience: [
      "Personal brands and influencers",
      "Entrepreneurs and small businesses",
      "Coaches, consultants, and creators"
    ],
    process: [
      { title: "Understand Your Brand", text: "We identify your audience, personality, positioning, and communication goals." },
      { title: "Plan Your Content", text: "We develop themes, hooks, captions, and a consistent content direction." },
      { title: "Refine Your Voice", text: "We adjust the content to reflect your brand and preferred style." }
    ],
    faqs: [
      { question: "Can you write content for Instagram Reels?", answer: "Yes. We can develop short-form video scripts, hooks, voiceovers, and captions." },
      { question: "Can you maintain a consistent brand voice?", answer: "Yes. A brand voice guide and reference posts can help maintain consistency." }
    ]
  },

  "linkedin-ghostwriting": {
    title: "LinkedIn Ghostwriting",
    eyebrow: "PROFESSIONAL BRANDING / 09",
    subtitle: "Turn your professional knowledge into a stronger and more recognizable LinkedIn presence.",
    intro: "Your professional experience has value, but communicating it consistently can be challenging. LinkedIn ghostwriting helps transform your expertise, opinions, and experiences into thoughtful posts that support your professional identity.",
    focus: [
      "LinkedIn posts and articles",
      "Professional storytelling",
      "Executive thought leadership",
      "Personal branding and content strategy"
    ],
    audience: [
      "Business owners and founders",
      "Executives and senior professionals",
      "Consultants and industry experts"
    ],
    process: [
      { title: "Discover Your Expertise", text: "We learn about your experience, industry, opinions, and professional goals." },
      { title: "Create Your Content Direction", text: "We develop relevant themes and posts that communicate your expertise." },
      { title: "Build Consistency", text: "We refine your writing style and prepare content for a consistent publishing schedule." }
    ],
    faqs: [
      { question: "Can you write in my personal voice?", answer: "Yes. Interviews, previous posts, and writing samples help establish your preferred voice." },
      { question: "Can you create a monthly content plan?", answer: "Yes. We can organize posts into a structured monthly content calendar." }
    ]
  },

  "find-a-literary-agent": {
    title: "Find a Literary Agent",
    eyebrow: "AUTHOR SUPPORT / 10",
    subtitle: "Prepare your manuscript and submission materials for the next stage of your publishing journey.",
    intro: "Approaching literary agents can feel complicated, especially for first-time authors. A well-prepared submission package helps communicate your book's concept, audience, and potential. We support authors in preparing professional materials and understanding the submission process.",
    focus: [
      "Literary agent research and shortlisting",
      "Query letter development",
      "Book proposals and synopses",
      "Submission package preparation"
    ],
    audience: [
      "First-time authors",
      "Completed-manuscript writers",
      "Authors exploring traditional publishing"
    ],
    process: [
      { title: "Understand Your Book", text: "We identify your genre, target audience, manuscript status, and publishing goals." },
      { title: "Prepare Submission Materials", text: "We help develop a query letter, synopsis, and proposal where appropriate." },
      { title: "Plan Your Outreach", text: "We help organize suitable agent research and submission materials." }
    ],
    faqs: [
      { question: "Can you guarantee literary representation?", answer: "No. Representation decisions belong to literary agents. We help prepare and organize professional submissions." },
      { question: "Can you help with query letters?", answer: "Yes. We can help communicate your book's concept, audience, and key selling points." }
    ]
  },

  "screenplay-script-writing": {
    title: "Screenplay Script Writing",
    eyebrow: "FILM & ENTERTAINMENT / 11",
    subtitle: "Bring cinematic ideas to life through compelling characters and structured screenplays.",
    intro: "A strong screenplay begins with an engaging concept and develops through character, conflict, dialogue, and visual storytelling. We help shape original ideas into structured scripts designed for film and screen projects.",
    focus: [
      "Feature film screenplays",
      "Short film scripts",
      "Character development and dialogue",
      "Scene structure and story outlines"
    ],
    audience: [
      "Independent filmmakers",
      "Aspiring screenwriters",
      "Producers and creative studios"
    ],
    process: [
      { title: "Explore the Concept", text: "We discuss the genre, premise, characters, and cinematic direction." },
      { title: "Build the Screenplay", text: "We develop scenes, dialogue, story progression, and character arcs." },
      { title: "Refine the Script", text: "We review pacing, continuity, structure, and dialogue." }
    ],
    faqs: [
      { question: "Can you develop a screenplay from a short idea?", answer: "Yes. We can help expand an initial concept into an outline and full screenplay." },
      { question: "Can you work with an existing draft?", answer: "Yes. We can help develop, restructure, and refine an existing screenplay." }
    ]
  },

  "speech-script-writing": {
    title: "Speech Script Writing",
    eyebrow: "PUBLIC SPEAKING / 12",
    subtitle: "Make every word count with speeches that connect, inspire, and leave a lasting impression.",
    intro: "A memorable speech combines a clear message, natural delivery, and an understanding of the audience. We help speakers transform their ideas into engaging speeches that sound authentic when delivered aloud.",
    focus: [
      "Keynote and conference speeches",
      "Corporate and leadership speeches",
      "Wedding and special occasion speeches",
      "Motivational and inspirational speeches"
    ],
    audience: [
      "Business leaders and executives",
      "Public speakers and professionals",
      "Individuals preparing for special occasions"
    ],
    process: [
      { title: "Understand the Occasion", text: "We establish the audience, event, duration, and central message." },
      { title: "Develop the Speech", text: "We create an engaging opening, structured message, and memorable conclusion." },
      { title: "Prepare for Delivery", text: "We refine the language, rhythm, transitions, and speaking flow." }
    ],
    faqs: [
      { question: "Can you write a speech for a specific time limit?", answer: "Yes. We can adjust the length and pacing to suit your speaking duration." },
      { question: "Can you make the speech sound personal?", answer: "Yes. Your experiences, preferred tone, and personal stories can be incorporated." }
    ]
  },

  "song-writing": {
    title: "Song Writing",
    eyebrow: "MUSIC & CREATIVE WRITING / 13",
    subtitle: "Transform emotions, experiences, and ideas into original lyrical storytelling.",
    intro: "Great songwriting combines emotion, memorable language, rhythm, and a distinctive creative direction. We help artists and creators develop original lyrics and organize their ideas into meaningful songs.",
    focus: [
      "Original song lyrics",
      "Verse and chorus development",
      "Story-driven songwriting",
      "Creative concepts and lyrical refinement"
    ],
    audience: [
      "Independent musicians and artists",
      "Singers and music producers",
      "Brands and creative projects"
    ],
    process: [
      { title: "Find the Emotion", text: "We explore the message, mood, genre, and story behind your song." },
      { title: "Develop the Lyrics", text: "We shape verses, choruses, hooks, and lyrical progression." },
      { title: "Refine the Expression", text: "We improve lyrical flow, clarity, originality, and consistency." }
    ],
    faqs: [
      { question: "Can you write lyrics from my personal experience?", answer: "Yes. Your story, feelings, and creative direction can form the foundation of the lyrics." },
      { question: "Can you follow a particular musical genre?", answer: "Yes. We can adapt the writing approach to your preferred genre and musical direction." }
    ]
  },

  "book-publishing-services": {
    title: "Book Publishing Services",
    eyebrow: "BOOK PRODUCTION / 14",
    subtitle: "Move from finished manuscript to a professionally prepared book.",
    intro: "Completing a manuscript is a major achievement, but publishing involves several additional decisions. We help authors prepare their work through editorial refinement, book design, formatting, production planning, and distribution support.",
    focus: [
      "Manuscript editing and proofreading",
      "Professional cover and interior design",
      "Print and digital book formatting",
      "Publishing preparation and distribution guidance"
    ],
    audience: [
      "First-time authors",
      "Independent writers and publishers",
      "Businesses producing professional books"
    ],
    process: [
      { title: "Review the Manuscript", text: "We understand your book, publishing format, audience, and production requirements." },
      { title: "Prepare the Book", text: "We coordinate the relevant editorial, design, and formatting requirements." },
      { title: "Plan Publication", text: "We help prepare your book for the selected publishing and distribution channels." }
    ],
    faqs: [
      { question: "Can you help with both print and eBook formats?", answer: "Yes. Publishing preparation can cover print editions and digital formats depending on your requirements." },
      { question: "Can I retain ownership of my book?", answer: "Ownership and usage rights should be clearly established in your project agreement before work begins." }
    ]
  },

  "technical-ghostwriting": {
    title: "Technical Ghostwriting",
    eyebrow: "TECHNICAL COMMUNICATION / 15",
    subtitle: "Make complex technical ideas easier to understand, navigate, and use.",
    intro: "Technical subjects often contain valuable information that can be difficult to communicate clearly. We help experts turn their knowledge into organized technical content while maintaining appropriate terminology, structure, and accuracy.",
    focus: [
      "Technical books and manuals",
      "Software and technology documentation",
      "Product guides and user documentation",
      "Technical articles and educational resources"
    ],
    audience: [
      "Technology companies and startups",
      "Engineers and technical specialists",
      "Product teams and consultants"
    ],
    process: [
      { title: "Gather Technical Information", text: "We review your specifications, source materials, product information, and intended readers." },
      { title: "Structure the Content", text: "We organize technical information into a logical and accessible format." },
      { title: "Review for Clarity", text: "We refine explanations, terminology, and consistency with your technical input." }
    ],
    faqs: [
      { question: "Can you work with highly technical topics?", answer: "Yes. We can work from detailed source materials and subject-matter expert guidance." },
      { question: "Can you create user manuals?", answer: "Yes. Product documentation, guides, and instructional materials are suitable project types." }
    ]
  },

  "brand-storytelling": {
    title: "Brand Storytelling",
    eyebrow: "BRAND COMMUNICATION / 16",
    subtitle: "Give your brand a distinctive voice and a story people can connect with.",
    intro: "People connect with more than products and services. They connect with the purpose, values, and experiences behind a brand. Our brand storytelling service helps businesses communicate their identity through authentic and consistent narratives.",
    focus: [
      "Brand origin and company stories",
      "Brand messaging and positioning",
      "Website and campaign storytelling",
      "Founder stories and brand narratives"
    ],
    audience: [
      "Startups and growing businesses",
      "Established brands",
      "Entrepreneurs and creative teams"
    ],
    process: [
      { title: "Discover Your Identity", text: "We explore your purpose, values, history, audience, and brand personality." },
      { title: "Shape Your Narrative", text: "We develop the central story and messaging that express what makes your brand distinctive." },
      { title: "Apply Your Brand Voice", text: "We refine the story for the communication channels and formats you need." }
    ],
    faqs: [
      { question: "Can you create a story for a new brand?", answer: "Yes. We can develop a brand narrative based on your business idea, mission, values, and audience." },
      { question: "Can you make our brand voice consistent?", answer: "Yes. We can establish messaging guidelines and reusable brand language." }
    ]
  },

  "twitter-ghostwriting": {
    title: "Twitter Ghostwriting",
    eyebrow: "SOCIAL MEDIA / 17",
    subtitle: "Share sharper ideas and build a consistent voice through thoughtful short-form writing.",
    intro: "Short-form social content requires clarity, personality, and strong ideas. We help individuals and businesses transform their knowledge and opinions into engaging posts and structured threads for X, formerly Twitter.",
    focus: [
      "Short-form posts and updates",
      "Educational and storytelling threads",
      "Personal brand content",
      "Content calendars and messaging"
    ],
    audience: [
      "Founders and entrepreneurs",
      "Creators and industry experts",
      "Businesses building an online presence"
    ],
    process: [
      { title: "Understand Your Voice", text: "We explore your opinions, expertise, audience, and preferred writing style." },
      { title: "Develop Strong Ideas", text: "We turn your thoughts into clear posts, hooks, and structured threads." },
      { title: "Maintain Consistency", text: "We refine and organize content for a recognizable online presence." }
    ],
    faqs: [
      { question: "Can you write complete X threads?", answer: "Yes. We can structure multi-post threads with a clear opening, progression, and conclusion." },
      { question: "Can you write in a conversational style?", answer: "Yes. We can adapt the writing to your preferred tone and audience." }
    ]
  },

  "facebook-ghostwriting": {
    title: "Facebook Ghostwriting",
    eyebrow: "SOCIAL MEDIA / 18",
    subtitle: "Create meaningful Facebook content that reflects your personality and brand.",
    intro: "Facebook offers opportunities for community building, brand awareness, and meaningful communication. We help businesses and individuals create content that encourages conversation and communicates their message consistently.",
    focus: [
      "Facebook posts and captions",
      "Business page content",
      "Community and engagement posts",
      "Promotional and storytelling content"
    ],
    audience: [
      "Small businesses and local brands",
      "Public figures and creators",
      "Community managers and entrepreneurs"
    ],
    process: [
      { title: "Identify Your Audience", text: "We understand your page, audience interests, and communication objectives." },
      { title: "Create Relevant Content", text: "We develop captions, stories, promotional copy, and community-focused posts." },
      { title: "Refine Your Messaging", text: "We maintain a consistent tone and improve clarity across your content." }
    ],
    faqs: [
      { question: "Can you write both promotional and educational posts?", answer: "Yes. Content can include promotions, educational material, storytelling, and community updates." },
      { question: "Can you prepare a weekly content calendar?", answer: "Yes. We can organize content themes and post copy into a weekly or monthly plan." }
    ]
  },

  "scientific-ghostwriting": {
    title: "Scientific Ghostwriting",
    eyebrow: "RESEARCH COMMUNICATION / 19",
    subtitle: "Present scientific knowledge through structured, clear, and carefully developed writing.",
    intro: "Scientific communication requires precision, appropriate terminology, and careful handling of research findings. Our scientific ghostwriting service supports researchers and subject specialists in developing clear manuscripts and educational material from their approved research and expertise.",
    focus: [
      "Scientific and educational books",
      "Research-based articles and reviews",
      "Scientific reports and explanatory content",
      "Academic and technical manuscripts"
    ],
    audience: [
      "Researchers and subject specialists",
      "Scientific organizations",
      "Educators and technical professionals"
    ],
    process: [
      { title: "Review Research Materials", text: "We understand the research question, source material, intended audience, and writing objectives." },
      { title: "Develop the Manuscript", text: "We organize the material into a logical structure with appropriate scientific language." },
      { title: "Refine and Verify", text: "We improve clarity and consistency while keeping the work aligned with supplied evidence and author review." }
    ],
    faqs: [
      { question: "Can you work from existing scientific research?", answer: "Yes. We can develop content using approved research materials, references, and subject-matter guidance." },
      { question: "Do you support academic integrity?", answer: "Yes. Projects must follow applicable authorship, disclosure, citation, and research-integrity requirements. We do not fabricate data or results." }
    ]
  }
};

function makeSections(page: ServiceData) {
  return [
    {
      id: "overview",
      title: `A More Thoughtful Approach to ${page.title}`,
      paragraphs: [
        page.intro,
        `At Wordsmith Squad, every project begins with understanding your objectives. We work collaboratively to develop content that communicates your ideas clearly while respecting your preferred voice, audience, and creative direction.`
      ]
    },
    {
      id: "services",
      title: `What Our ${page.title} Service Includes`,
      paragraphs: [
        `Every project has different requirements. Our approach can be tailored to the subject, format, intended audience, and level of support you need.`
      ],
      bullets: page.focus
    },
    {
      id: "process",
      title: "A Collaborative Process from Start to Finish",
      paragraphs: [
        "A clear process helps keep your project organized, transparent, and aligned with your expectations."
      ],
      steps: page.process
    },
    {
      id: "audience",
      title: "Who Can Benefit from This Service?",
      paragraphs: [
        `Our ${page.title.toLowerCase()} service is designed for people and organizations who want professional writing support without losing sight of their original ideas.`
      ],
      bullets: page.audience
    },
    {
      id: "why-us",
      title: "Why Work with Wordsmith Squad?",
      paragraphs: [
        "Your ideas deserve careful attention. We combine thoughtful collaboration, structured writing, and a consistent editorial approach to help you move from an initial concept to a polished final deliverable.",
        "Whether you are developing your first project or expanding an established body of work, we aim to make the writing journey clearer and more manageable."
      ],
      callout: {
        title: "Your Ideas. Your Voice. Our Craft.",
        text: "We work with your direction and feedback to create writing that reflects your goals, communicates your message, and respects the purpose behind your project."
      }
    }
  ];
}

export default function GhostwritingDetailLayout() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? services[slug] : undefined;

  if (!page) {
    return (
      <main className="min-h-screen bg-[#eee7da] px-6 pt-36 text-center text-[#29231c]">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#a47c46]">
          PAGE NOT FOUND
        </p>
        <h1 className="font-display text-4xl">This chapter is not available.</h1>
        <Link to="/ghostwriting" className="mt-8 inline-block text-[#a47c46] hover:underline">
          ← Return to Ghostwriting
        </Link>
      </main>
    );
  }

  const sections = makeSections(page);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#eee7da] text-[#29231c]">
      <div className="mx-auto max-w-[1500px] px-5 pb-20 pt-24 sm:px-8 sm:pt-28 lg:px-12">

        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm">
          <Link to="/" className="text-[#8c806e] transition hover:text-[#a47c46]">
            Home
          </Link>
          <span className="text-[#b9a98f]">/</span>
          <Link to="/ghostwriting" className="text-[#8c806e] transition hover:text-[#a47c46]">
            Ghostwriting
          </Link>
          <span className="text-[#b9a98f]">/</span>
          <span className="text-[#a47c46]">{page.title}</span>
        </nav>

        <header className="mb-12 border-b border-[#b7a88e]/40 pb-9 sm:mb-16">
          <p className="mb-5 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#a47c46]">
            WORDSMITH SQUAD / GHOSTWRITING
            <span className="h-px w-12 bg-[#b38b55]" />
          </p>

          <p className="mb-4 inline-flex rounded-full border border-[#c7ad83]/60 bg-[#e6dccb] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#987341]">
            {page.eyebrow}
          </p>

          <h1 className="max-w-5xl font-display text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[64px]">
            {page.title}<span className="text-[#b38b55]">.</span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#746b5e] sm:text-lg">
            {page.subtitle}
          </p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-16">

          {/* DESKTOP STICKY SIDEBAR */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-[calc(100vh-7rem)] lg:self-start">
            <div className="h-full overflow-y-auto overscroll-contain border border-[#cbbda6] bg-[#f3ede3] p-5 shadow-[0_8px_30px_rgba(50,35,20,0.04)] [scrollbar-width:thin] [scrollbar-color:#b38b55_transparent]">
              <p className="mb-4 border-b border-[#d7cbb9] pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a47c46]">
                In This Chapter
              </p>

              <nav aria-label="Chapter navigation">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block border-b border-[#d7cbb9] py-3 text-[12px] leading-[1.7] text-[#5f574d] transition-all hover:translate-x-1 hover:text-[#a47c46]"
                  >
                    <span className="mr-1 text-[#a47c46]">
                      {String(index + 1).padStart(2, "0")} —
                    </span>
                    {section.title}
                  </a>
                ))}

                <a href="#faqs" className="block py-4 text-xs text-[#5f574d] transition hover:text-[#a47c46]">
                  FAQs
                </a>
              </nav>
            </div>
          </aside>

          {/* MOBILE CHAPTER MENU */}
          <details className="border border-[#cbbda6] bg-[#f3ede3] lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#a47c46] [&::-webkit-details-marker]:hidden">
              Explore Chapters
              <span className="text-lg">+</span>
            </summary>

            <nav aria-label="Mobile chapter navigation" className="border-t border-[#d7cbb9] px-5 py-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block border-b border-[#d7cbb9] py-3 text-sm leading-6 text-[#5f574d] hover:text-[#a47c46]"
                >
                  <span className="text-[#a47c46]">
                    {String(index + 1).padStart(2, "0")} —
                  </span>{" "}
                  {section.title}
                </a>
              ))}
              <a href="#faqs" className="block py-3 text-sm text-[#5f574d] hover:text-[#a47c46]">
                FAQs
              </a>
            </nav>
          </details>

          {/* RIGHT SIDE ARTICLE */}
          <article className="min-w-0">
            <div className="mx-auto max-w-[950px]">

              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-b border-[#cbbda6]/60 py-10 first:pt-0 sm:py-14"
                >
                  <p className="mb-5 font-display text-sm italic text-[#aa8554]">
                    CHAPTER {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mb-7 max-w-4xl font-display text-3xl leading-[1.2] tracking-tight sm:text-4xl lg:text-[46px]">
                    {section.title}
                  </h2>

                  <div className="space-y-6">
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-[14px] leading-[2] text-[#746b5e] sm:text-[15px]">
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="space-y-3 py-2">
                        {section.bullets.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm leading-7 text-[#746b5e]">
                            <span className="mt-1 text-[#b38b55]">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.steps && (
                      <div className="space-y-5 py-3">
                        {section.steps.map((step, i) => (
                          <div key={i} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#d5c8b5] pb-5 last:border-0">
                            <span className="font-display text-lg italic text-[#b38b55]">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h3 className="mb-2 text-sm font-semibold text-[#30271f] sm:text-base">
                                {step.title}
                              </h3>
                              <p className="text-sm leading-7 text-[#746b5e]">
                                {step.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.callout && (
                      <div className="my-7 border-l-2 border-[#b38b55] bg-[#e6dccb] px-6 py-6 sm:px-8">
                        <h3 className="mb-2 font-display text-xl text-[#30271f]">
                          {section.callout.title}
                        </h3>
                        <p className="text-sm leading-7 text-[#746b5e]">
                          {section.callout.text}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              ))}

              {/* FAQS */}
              <section id="faqs" className="scroll-mt-28 py-12 sm:py-16">
                <p className="mb-5 font-display text-sm italic text-[#aa8554]">
                  YOUR QUESTIONS ANSWERED
                </p>

                <h2 className="mb-9 font-display text-4xl leading-tight sm:text-5xl">
                  Frequently Asked Questions<span className="text-[#b38b55]">.</span>
                </h2>

                <div className="divide-y divide-[#cbbda6] border-y border-[#cbbda6]">
                  {page.faqs.map((faq, index) => (
                    <details key={index} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-[#30271f] sm:text-base [&::-webkit-details-marker]:hidden">
                        <span>{faq.question}</span>
                        <span className="shrink-0 text-xl font-light text-[#a47c46] transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <p className="max-w-3xl pt-4 text-sm leading-8 text-[#746b5e]">
                        {faq.answer}
                      </p>
                    </details>
                  ))}

                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-[#30271f] sm:text-base [&::-webkit-details-marker]:hidden">
                      <span>Can I request revisions to my project?</span>
                      <span className="shrink-0 text-xl font-light text-[#a47c46] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-3xl pt-4 text-sm leading-8 text-[#746b5e]">
                      Yes. Feedback and revisions can be incorporated according to the scope and revision terms agreed upon for your project.
                    </p>
                  </details>
                </div>
              </section>

              {/* FINAL CTA */}
              <section className="relative mt-6 overflow-hidden bg-[#29231c] px-7 py-10 text-[#f3ede3] sm:px-12 sm:py-14">
                <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#c6a36e]/20" />
                <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-[#c6a36e]/15" />

                <div className="relative z-10">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c6a36e]">
                    YOUR NEXT CHAPTER STARTS HERE
                  </p>

                  <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-4xl">
                    Let's bring your ideas to life.
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                    Tell us about your project. Our team is ready to understand your vision and help you plan your next step.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-5 rounded-full bg-[#c6a36e] px-7 py-3.5 text-sm font-semibold text-[#211b15] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d7b983] hover:shadow-[0_10px_30px_rgba(198,163,110,0.2)]"
                  >
                    Start a Conversation
                    <span className="text-lg">↗</span>
                  </Link>
                </div>
              </section>

            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
