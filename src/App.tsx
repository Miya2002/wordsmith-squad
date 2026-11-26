
import { useEffect } from "react";

import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  useParams,
} from "react-router-dom";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";

// ==========================================
// MAIN PAGES
// ==========================================

import Home from "@/pages/home/Home_main";
import About from "@/pages/about/About_main";
import Services from "@/pages/services/Services";
import Portfolio from "@/pages/portfolio/Portfolio";
import Contact from "@/pages/contact/Contact_main";
import Brand from "@/pages/brand/Brand";
import Trailer from "@/pages/trailer/Trailer";

// ==========================================
// ABOUT SUBPAGES
// ==========================================

import PageAboutourstory from "@/pages/about/OurStory";
import PageAboutourmission from "@/pages/about/OurMission";
import PageAboutourteam from "@/pages/about/OurTeam";
import PageAbouthowwework from "@/pages/about/HowWeWork";

// ==========================================
// EDITING
// ==========================================

import OverviewEditing from "@/pages/editing/Editing_main";
import PageEditingmanuscriptediting from "@/pages/editing/ManuscriptEditing";
import PageEditingdevelopmentalediting from "@/pages/editing/DevelopmentalEditing";
import PageEditinglineediting from "@/pages/editing/LineEditing";
import PageEditingcopyediting from "@/pages/editing/CopyEditing";
import PageEditingproofreading from "@/pages/editing/Proofreading";
import PageEditingmanuscriptassessment from "@/pages/editing/ManuscriptAssessment";
import PageEditingbookformatting from "@/pages/editing/BookFormatting";
import PageEditingbookcritiqueservices from "@/pages/editing/BookCritiqueServices";

// ==========================================
// PUBLISHING
// ==========================================

import OverviewPublishing from "@/pages/publishing/Publishing_main";
import EbookPublishing from "@/pages/publishing/EbookPublishing";
import AudiobookPublishing from "@/pages/publishing/AudiobookPublishing";
import SelfPublishingConsultants from "@/pages/publishing/SelfPublishing";

// ==========================================
// GHOSTWRITING
// ==========================================

import OverviewGhostwriting from "@/pages/ghostwriting/Ghostwriting_main";
import PageGhostwritingmedicalghostwriters from "@/pages/ghostwriting/MedicalGhostwriters";
import PageGhostwritingscreenplayscriptwriting from "@/pages/ghostwriting/ScreenplayScriptWriting";
import PageGhostwritingchildrensbookwriting from "@/pages/ghostwriting/ChildrensBookWriting";
import PageGhostwritingspeechscriptwriting from "@/pages/ghostwriting/SpeechScriptWriting";
import PageGhostwritingcomicbookwriting from "@/pages/ghostwriting/ComicBookWriting";
import PageGhostwritingnovelwriting from "@/pages/ghostwriting/NovelWriting";
import PageGhostwritingreallifestorywriting from "@/pages/ghostwriting/RealLifeStoryWriting";
import PageGhostwritingbookpublishingservices from "@/pages/ghostwriting/BookPublishingServices";
import PageGhostwritingcorporatewritingservices from "@/pages/ghostwriting/CorporateWritingServices";
import PageGhostwritingtechnicalghostwriting from "@/pages/ghostwriting/TechnicalGhostwriting";
import PageGhostwritingpodcastscriptwriting from "@/pages/ghostwriting/PodcastScriptWriting";
import PageGhostwritingbrandstorytelling from "@/pages/ghostwriting/BrandStorytelling";
import PageGhostwritinglegalghostwriting from "@/pages/ghostwriting/LegalGhostwriting";
import PageGhostwritingtwitterghostwriting from "@/pages/ghostwriting/TwitterGhostwriting";
import PageGhostwritinginstagramghostwriting from "@/pages/ghostwriting/InstagramGhostwriting";
import PageGhostwritingfacebookghostwriting from "@/pages/ghostwriting/FacebookGhostwriting";
import PageGhostwritinglinkedinghostwriting from "@/pages/ghostwriting/LinkedinGhostwriting";
import PageGhostwritingscientificghostwriting from "@/pages/ghostwriting/ScientificGhostwriting";
import PageGhostwritingfindaliteraryagent from "@/pages/ghostwriting/FindALiteraryAgent";

// ==========================================
// GENRE
// ==========================================

import OverviewGenre from "@/pages/genre/Genre_main";
import PageGenrefiction from "@/pages/genre/Fiction";
import PageGenrenonfiction from "@/pages/genre/Nonfiction";
import PageGenrememoirandbiography from "@/pages/genre/MemoirAndBiography";
import PageGenreromance from "@/pages/genre/Romance";
import PageGenrefantasyandscifi from "@/pages/genre/FantasyAndSciFi";
import PageGenremysteryandthriller from "@/pages/genre/MysteryAndThriller";
import PageGenrebusinessandselfhelp from "@/pages/genre/BusinessAndSelfHelp";
import PageGenrechildrensbooks from "@/pages/genre/ChildrensBooks";

// Additional Genre SEO Pages

import AutoGenreFictionWriters from "@/pages/genre/FictionWriters";
import AutoGenreNonFictionWriters from "@/pages/genre/NonFictionWriters";
import AutoGenreFantasyWriters from "@/pages/genre/FantasyWriters";
import AutoGenreAutobiographyWriters from "@/pages/genre/AutobiographyWriters";
import AutoGenreMemoirWriters from "@/pages/genre/MemoirWriters";
import AutoGenreRomanceWriters from "@/pages/genre/RomanceWriters";
import AutoGenreHorrorStoryWriters from "@/pages/genre/HorrorStoryWriters";
import AutoGenreActionWriters from "@/pages/genre/ActionWriters";
import AutoGenreComedyScriptWriters from "@/pages/genre/ComedyScriptWriters";
import AutoGenreNarrativeWriters from "@/pages/genre/NarrativeWriters";
import AutoGenrePoetryWriters from "@/pages/genre/PoetryWriters";
import AutoGenreNovelWriters from "@/pages/genre/NovelWriters";
import AutoGenreMysteryWriters from "@/pages/genre/MysteryWriters";
import AutoGenreShortStoryWriters from "@/pages/genre/ShortStoryWriters";
import AutoGenreFableWriting from "@/pages/genre/FableWriting";
import AutoGenreMythologyWriters from "@/pages/genre/MythologyWriters";
import AutoGenreDramaScriptWriters from "@/pages/genre/DramaScriptWriters";
import AutoGenreSuspenseAndThrillersWriters from "@/pages/genre/SuspenseAndThrillersWriters";
import AutoGenreBildungsromanWriters from "@/pages/genre/BildungsromanWriters";
import AutoGenreMagicalRealismWriters from "@/pages/genre/MagicalRealismWriters";
import AutoGenreLiteraryRealismWriters from "@/pages/genre/LiteraryRealismWriters";
import AutoGenreTragedyWriters from "@/pages/genre/TragedyWriters";
import AutoGenreHumorWriters from "@/pages/genre/HumorWriters";
import AutoGenreRhymeWriters from "@/pages/genre/RhymeWriters";

// ==========================================
// CREATIVE WRITING — ONLY SIX SUBPAGES
// ==========================================

import OverviewCreativewriting from "@/pages/creative-writing/Creative_Writing_main";

import PageCreativewritingcopywriting from "@/pages/creative-writing/Copywriting";
import PageCreativewritingthesiswriting from "@/pages/creative-writing/ThesisWriting";
import PageCreativewritingdissertationwriting from "@/pages/creative-writing/DissertationWriting";
import PageCreativewritingresearchwriting from "@/pages/creative-writing/ResearchWriting";
import PageCreativewritingscriptwriting from "@/pages/creative-writing/ScriptWriting";
import PageCreativewritingarticlewriting from "@/pages/creative-writing/ArticleAndBlogWriting";

// ==========================================
// BOOK COVER
// ==========================================

import OverviewBookcover from "@/pages/book-cover/Book_Cover_main";
import PageBookcoverbookcoverdesign from "@/pages/book-cover/BookCoverDesign";
import PageBookcoverlayoutdesignandtypesetting from "@/pages/book-cover/LayoutDesignAndTypesetting";
import PageBookcoverbookillustration from "@/pages/book-cover/BookIllustration";
import PageBookcoverebookcoverdesign from "@/pages/book-cover/EbookCoverDesign";

// ==========================================
// MARKETING
// ==========================================

import OverviewMarketing from "@/pages/marketing/Marketing_main";

// ==========================================
// PRICING
// ==========================================

import OverviewPricingplans from "@/pages/pricing-plans/Pricing_Plans_main";

// ==========================================
// LEGACY URL REDIRECT
// ==========================================

function LegacyExploreRedirect() {
  const { category, slug } = useParams();

  return (
    <Navigate
      to={`/${category ?? ""}${slug ? `/${slug}` : ""}`}
      replace
    />
  );
}

// ==========================================
// SCROLL MANAGER
// ==========================================

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { anchor?: string } | null;

    if (state?.anchor) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname, location.state]);

  return null;
}

// ==========================================
// 404 PAGE
// ==========================================

function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-ink-950 px-6 pt-24 text-center">
      <p className="eyebrow text-gold">
        Page 404
      </p>

      <h1 className="font-display mt-6 max-w-xl text-4xl font-semibold text-ivory md:text-5xl">
        This page is still a{" "}
        <em className="text-sheen italic">
          blank draft.
        </em>
      </h1>

      <p className="mt-5 max-w-md text-ivory/60">
        The chapter you're looking for hasn't been written.
        Let's get you back to the story.
      </p>

      <Button to="/" variant="gold" className="mt-9">
        Return Home
      </Button>
    </section>
  );
}

// ==========================================
// MAIN WEBSITE SHELL
// ==========================================

function Shell() {
  const location = useLocation();

  // Gold cursor spotlight
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const el = target?.closest(".spot") as HTMLElement | null;

      if (!el) return;

      const rect = el.getBoundingClientRect();

      el.style.setProperty(
        "--mx",
        `${e.clientX - rect.left}px`
      );

      el.style.setProperty(
        "--my",
        `${e.clientY - rect.top}px`
      );
    };

    document.addEventListener("pointermove", onMove, {
      passive: true,
    });

    return () => {
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="min-h-svh bg-ink-950">

      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-gold focus:px-5 focus:py-3 focus:text-xs focus:font-semibold focus:tracking-widest focus:text-ink-950 focus:uppercase"
      >
        Skip to content
      </a>

      <ScrollManager />

      <Navbar />

      <main
        id="main-content"
        key={location.pathname}
        className="page-enter"
      >
        <Routes>

          {/* ==================================
              MAIN PAGES
          ================================== */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/trailer" element={<Trailer />} />

          {/* ==================================
              ABOUT SUBPAGES
          ================================== */}

          <Route path="/about/our-story" element={<PageAboutourstory />} />
          <Route path="/about/our-mission" element={<PageAboutourmission />} />
          <Route path="/about/our-team" element={<PageAboutourteam />} />
          <Route path="/about/how-we-work" element={<PageAbouthowwework />} />

          {/* ==================================
              EDITING
          ================================== */}

          <Route path="/editing" element={<OverviewEditing />} />
          <Route path="/editing/manuscript-editing" element={<PageEditingmanuscriptediting />} />
          <Route path="/editing/developmental-editing" element={<PageEditingdevelopmentalediting />} />
          <Route path="/editing/line-editing" element={<PageEditinglineediting />} />
          <Route path="/editing/copy-editing" element={<PageEditingcopyediting />} />
          <Route path="/editing/proofreading" element={<PageEditingproofreading />} />
          <Route path="/editing/manuscript-assessment" element={<PageEditingmanuscriptassessment />} />
          <Route path="/editing/book-formatting" element={<PageEditingbookformatting />} />
          <Route path="/editing/book-critique-services" element={<PageEditingbookcritiqueservices />} />

          {/* ==================================
              PUBLISHING
          ================================== */}

          <Route path="/publishing" element={<OverviewPublishing />} />
          <Route path="/publishing/ebook-publishing" element={<EbookPublishing />} />
          <Route path="/publishing/audiobook-publishing" element={<AudiobookPublishing />} />
          <Route path="/publishing/self-publishing-consultants" element={<SelfPublishingConsultants />} />

          {/* ==================================
              GHOSTWRITING
          ================================== */}

          <Route path="/ghostwriting" element={<OverviewGhostwriting />} />
          <Route path="/ghostwriting/medical-ghostwriters" element={<PageGhostwritingmedicalghostwriters />} />
          <Route path="/ghostwriting/screenplay-script-writing" element={<PageGhostwritingscreenplayscriptwriting />} />
          <Route path="/ghostwriting/childrens-book-writing" element={<PageGhostwritingchildrensbookwriting />} />
          <Route path="/ghostwriting/speech-script-writing" element={<PageGhostwritingspeechscriptwriting />} />
          <Route path="/ghostwriting/comic-book-writing" element={<PageGhostwritingcomicbookwriting />} />
          <Route path="/ghostwriting/novel-writing" element={<PageGhostwritingnovelwriting />} />
          <Route path="/ghostwriting/real-life-story-writing" element={<PageGhostwritingreallifestorywriting />} />
          <Route path="/ghostwriting/book-publishing-services" element={<PageGhostwritingbookpublishingservices />} />
          <Route path="/ghostwriting/corporate-writing-services" element={<PageGhostwritingcorporatewritingservices />} />
          <Route path="/ghostwriting/technical-ghostwriting" element={<PageGhostwritingtechnicalghostwriting />} />
          <Route path="/ghostwriting/podcast-script-writing" element={<PageGhostwritingpodcastscriptwriting />} />
          <Route path="/ghostwriting/brand-storytelling" element={<PageGhostwritingbrandstorytelling />} />
          <Route path="/ghostwriting/legal-ghostwriting" element={<PageGhostwritinglegalghostwriting />} />
          <Route path="/ghostwriting/twitter-ghostwriting" element={<PageGhostwritingtwitterghostwriting />} />
          <Route path="/ghostwriting/instagram-ghostwriting" element={<PageGhostwritinginstagramghostwriting />} />
          <Route path="/ghostwriting/facebook-ghostwriting" element={<PageGhostwritingfacebookghostwriting />} />
          <Route path="/ghostwriting/linkedin-ghostwriting" element={<PageGhostwritinglinkedinghostwriting />} />
          <Route path="/ghostwriting/scientific-ghostwriting" element={<PageGhostwritingscientificghostwriting />} />
          <Route path="/ghostwriting/find-a-literary-agent" element={<PageGhostwritingfindaliteraryagent />} />

          {/* ==================================
              GENRE
          ================================== */}

          <Route path="/genre" element={<OverviewGenre />} />
          <Route path="/genre/fiction" element={<PageGenrefiction />} />
          <Route path="/genre/nonfiction" element={<PageGenrenonfiction />} />
          <Route path="/genre/memoir-and-biography" element={<PageGenrememoirandbiography />} />
          <Route path="/genre/romance" element={<PageGenreromance />} />
          <Route path="/genre/fantasy-and-sci-fi" element={<PageGenrefantasyandscifi />} />
          <Route path="/genre/mystery-and-thriller" element={<PageGenremysteryandthriller />} />
          <Route path="/genre/business-and-self-help" element={<PageGenrebusinessandselfhelp />} />
          <Route path="/genre/childrens-books" element={<PageGenrechildrensbooks />} />

          {/* Additional Genre SEO Pages */}

          <Route path="/genre/fiction-writers" element={<AutoGenreFictionWriters />} />
          <Route path="/genre/non-fiction-writers" element={<AutoGenreNonFictionWriters />} />
          <Route path="/genre/fantasy-writers" element={<AutoGenreFantasyWriters />} />
          <Route path="/genre/autobiography-writers" element={<AutoGenreAutobiographyWriters />} />
          <Route path="/genre/memoir-writers" element={<AutoGenreMemoirWriters />} />
          <Route path="/genre/romance-writers" element={<AutoGenreRomanceWriters />} />
          <Route path="/genre/horror-story-writers" element={<AutoGenreHorrorStoryWriters />} />
          <Route path="/genre/action-writers" element={<AutoGenreActionWriters />} />
          <Route path="/genre/comedy-script-writers" element={<AutoGenreComedyScriptWriters />} />
          <Route path="/genre/narrative-writers" element={<AutoGenreNarrativeWriters />} />
          <Route path="/genre/poetry-writers" element={<AutoGenrePoetryWriters />} />
          <Route path="/genre/novel-writers" element={<AutoGenreNovelWriters />} />
          <Route path="/genre/mystery-writers" element={<AutoGenreMysteryWriters />} />
          <Route path="/genre/short-story-writers" element={<AutoGenreShortStoryWriters />} />
          <Route path="/genre/fable-writing" element={<AutoGenreFableWriting />} />
          <Route path="/genre/mythology-writers" element={<AutoGenreMythologyWriters />} />
          <Route path="/genre/drama-script-writers" element={<AutoGenreDramaScriptWriters />} />
          <Route path="/genre/suspense-and-thrillers-writers" element={<AutoGenreSuspenseAndThrillersWriters />} />
          <Route path="/genre/bildungsroman-writers" element={<AutoGenreBildungsromanWriters />} />
          <Route path="/genre/magical-realism-writers" element={<AutoGenreMagicalRealismWriters />} />
          <Route path="/genre/literary-realism-writers" element={<AutoGenreLiteraryRealismWriters />} />
          <Route path="/genre/tragedy-writers" element={<AutoGenreTragedyWriters />} />
          <Route path="/genre/humor-writers" element={<AutoGenreHumorWriters />} />
          <Route path="/genre/rhyme-writers" element={<AutoGenreRhymeWriters />} />

          {/* ==================================
              CREATIVE WRITING
              ONLY SIX SUBPAGES
          ================================== */}

          <Route path="/creative-writing" element={<OverviewCreativewriting />} />

          <Route path="/creative-writing/copywriting" element={<PageCreativewritingcopywriting />} />

          <Route path="/creative-writing/thesis-writing" element={<PageCreativewritingthesiswriting />} />

          <Route path="/creative-writing/dissertation-writing" element={<PageCreativewritingdissertationwriting />} />

          <Route path="/creative-writing/research-writing" element={<PageCreativewritingresearchwriting />} />

          <Route path="/creative-writing/script-writing" element={<PageCreativewritingscriptwriting />} />

          <Route path="/creative-writing/article-writing" element={<PageCreativewritingarticlewriting />} />

          {/* ==================================
              BOOK COVER
          ================================== */}

          <Route path="/book-cover" element={<OverviewBookcover />} />
          <Route path="/book-cover/book-cover-design" element={<PageBookcoverbookcoverdesign />} />
          <Route path="/book-cover/layout-design-and-typesetting" element={<PageBookcoverlayoutdesignandtypesetting />} />
          <Route path="/book-cover/book-illustration" element={<PageBookcoverbookillustration />} />
          <Route path="/book-cover/ebook-cover-design" element={<PageBookcoverebookcoverdesign />} />

          {/* ==================================
              MARKETING
          ================================== */}

          <Route path="/marketing" element={<OverviewMarketing />} />

          {/* ==================================
              PRICING
          ================================== */}

          <Route path="/pricing-plans" element={<OverviewPricingplans />} />

          {/* ==================================
              LEGACY URL REDIRECTS
          ================================== */}

          <Route
            path="/explore/:category/:slug"
            element={<LegacyExploreRedirect />}
          />

          <Route
            path="/explore/:category"
            element={<LegacyExploreRedirect />}
          />

          {/* ==================================
              404 — KEEP LAST
          ================================== */}

          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />

      <div className="grain-overlay" aria-hidden="true" />
    </div>
  );
}

// ==========================================
// MAIN APP
// ==========================================

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
