
import PublishingDetailLayout, {
  type PublishingPageContent,
} from "@/components/PublishingDetailLayout";

const page: PublishingPageContent = {
  title: "Audiobook Publishing",
  subtitle:
    "Turn your written words into an immersive listening experience through professional narration, audio production, and publishing support.",
  intro: "",
  sections: [
    {
      id: "audio-introduction",
      title: "Turn Your Manuscript into a Listening Experience",
      blocks: [
        {
          type: "paragraph",
          text: "Want your audiobook to reach listeners around the world? At Wordsmith Squad, we help transform your manuscript or eBook into a professionally narrated and carefully produced audiobook.",
        },
        {
          type: "paragraph",
          text: "More people are choosing to listen to books while commuting, exercising, working, or relaxing. An audiobook gives your written work another format through which it can connect with readers and listeners.",
        },
        {
          type: "paragraph",
          text: "From selecting an appropriate narrator to recording, editing, mastering, and distribution preparation, we coordinate the production stages required to bring your story to life through sound.",
        },
      ],
    },
    {
      id: "audio-why",
      title: "Why Choose Professional Audiobook Publishing?",
      blocks: [
        {
          type: "paragraph",
          text: "Creating an audiobook involves more than reading a manuscript into a microphone. It requires the right voice, consistent recording quality, careful editing, and files that meet the requirements of distribution platforms.",
        },
        {
          type: "heading",
          text: "Common Challenges for Independent Authors",
        },
        {
          type: "bullets",
          items: [
            "Finding a narrator who suits the book's subject and personality.",
            "Managing recording studios and production costs.",
            "Maintaining consistent sound quality throughout the book.",
            "Preparing audio files to meet platform specifications.",
            "Understanding distribution and promotional options.",
          ],
        },
        {
          type: "callout",
          title: "Every voice tells a different story",
          text: "Our approach considers your genre, audience, and creative direction before production begins, helping your audiobook feel appropriate to the material.",
        },
      ],
    },
    {
      id: "audio-narration",
      title: "Professional Narrator Selection",
      blocks: [
        {
          type: "paragraph",
          text: "The narrator plays a major role in shaping the listening experience. We help you explore voice options that match the tone, subject, and intended audience of your book.",
        },
        {
          type: "heading",
          text: "Finding the Right Voice for Your Book",
        },
        {
          type: "bullets",
          items: [
            "Fiction narration with expressive character delivery.",
            "Business and nonfiction narration with a clear, authoritative tone.",
            "Appropriate pronunciation, dialect, and accent.",
            "Consistent pacing and natural delivery.",
            "Narration samples for review and selection.",
          ],
        },
      ],
    },
    {
      id: "audio-production",
      title: "Studio Recording and Audio Production",
      blocks: [
        {
          type: "paragraph",
          text: "Once the narration direction is approved, the recording stage begins. Professional recording environments and experienced narrators help create a consistent and engaging performance.",
        },
        {
          type: "heading",
          text: "Careful Audio Editing and Post-Production",
        },
        {
          type: "paragraph",
          text: "After recording, audio engineers refine the raw material to create a polished final product. The production process can include:",
        },
        {
          type: "bullets",
          items: [
            "Removing distracting background noise and unwanted recording errors.",
            "Reducing unnecessary mouth clicks and distracting breath sounds.",
            "Maintaining natural pacing and smooth transitions.",
            "Equalization and compression for consistent speech clarity.",
            "Volume balancing and professional audio mastering.",
            "Chapter transitions and optional sound design where appropriate.",
          ],
        },
      ],
    },
    {
      id: "audio-distribution",
      title: "Global Audiobook Distribution",
      blocks: [
        {
          type: "paragraph",
          text: "Once production is complete, your audiobook can be prepared for distribution through suitable audiobook retailers and listening platforms. Platform availability depends on distribution arrangements, territory, and submission requirements.",
        },
        {
          type: "bullets",
          items: [
            "Audible and Amazon.",
            "Apple Books.",
            "Spotify.",
            "Google Play Books.",
            "Kobo.",
            "Scribd and other suitable distribution services.",
            "Library distribution options such as OverDrive and Hoopla, where available.",
          ],
        },
        {
          type: "paragraph",
          text: "We help you understand the available distribution options so you can choose an approach that supports your publishing goals and preferred markets.",
        },
      ],
    },
    {
      id: "audio-marketing",
      title: "Strategic Audiobook Promotion",
      blocks: [
        {
          type: "paragraph",
          text: "Publishing your audiobook is an important milestone, but introducing it to the right audience is another part of the journey. We can help plan promotional activities around your release.",
        },
        {
          type: "heading",
          text: "Pre-Launch and Post-Launch Support",
        },
        {
          type: "bullets",
          items: [
            "Audiobook descriptions and keyword preparation.",
            "Promotional narration clips and teaser content.",
            "Social media campaigns and launch announcements.",
            "Advertising strategy for relevant audiences.",
            "Potential collaborations with book reviewers and podcasters.",
            "Email campaigns and author audience engagement.",
          ],
        },
      ],
    },
    {
      id: "audio-process",
      title: "How We Turn Your Book into an Audiobook",
      blocks: [
        {
          type: "paragraph",
          text: "Our production workflow is organized into clear stages, keeping you involved in important creative decisions throughout the project.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Consultation and Planning",
              text: "We discuss your manuscript, target listeners, preferred narration style, and publishing objectives.",
            },
            {
              title: "Professional Voice Casting",
              text: "Review suitable narrator options and select the voice that best represents your book.",
            },
            {
              title: "Studio-Quality Recording",
              text: "The selected narrator records your manuscript with attention to clarity, consistency, and expression.",
            },
            {
              title: "Editing and Mastering",
              text: "Audio professionals refine the recordings, balance sound levels, and prepare the final files.",
            },
            {
              title: "Distribution Preparation",
              text: "We organize the audio files and publishing details according to the requirements of the chosen platforms.",
            },
            {
              title: "Launch and Promotion",
              text: "We help plan the release and explore promotional opportunities for your audiobook.",
            },
          ],
        },
      ],
    },
    {
      id: "audio-why-us",
      title: "Why Work with Wordsmith Squad?",
      blocks: [
        {
          type: "paragraph",
          text: "A successful audiobook requires creative understanding and technical precision. Our approach brings the production stages together so you can manage the project with a clearer plan.",
        },
        {
          type: "bullets",
          items: [
            "Narrator selection based on genre and audience.",
            "Professional recording and production coordination.",
            "Detailed editing and mastering.",
            "Support with distribution preparation.",
            "Flexible project scope and production options.",
            "Guidance with audiobook promotion.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does audiobook production take?",
      answer:
        "The timeline depends on the manuscript's length, narrator availability, recording requirements, and editing workload. A typical project may take approximately 4–8 weeks.",
    },
    {
      question: "Can I choose my audiobook narrator?",
      answer:
        "Yes. You can review suitable narrator options and samples before selecting a voice that matches your book's tone and intended audience.",
    },
    {
      question: "Where can my audiobook be distributed?",
      answer:
        "Potential platforms include Audible, Apple Books, Spotify, Google Play Books, Kobo, and suitable library distribution services, subject to platform eligibility.",
    },
    {
      question: "Do you offer professional audio editing?",
      answer:
        "Yes. Audio production can include noise reduction, editing, volume balancing, mastering, and preparation according to the selected platform's technical requirements.",
    },
    {
      question: "Can you help market my audiobook?",
      answer:
        "Yes. We can discuss launch planning, promotional clips, social media campaigns, advertising, and other suitable marketing activities.",
    },
  ],
};

export default function AudiobookPublishing() {
  return <PublishingDetailLayout page={page} />;
}
