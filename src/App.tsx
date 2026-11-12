
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

// Main pages
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import Services from "@/pages/services/Services";
import Portfolio from "@/pages/portfolio/Portfolio";
import Contact from "@/pages/contact/Contact";
import Brand from "@/pages/brand/Brand";
import Trailer from "@/pages/trailer/Trailer";

// Home subpages
import PageHomeourprocess from "@/pages/home/OurProcess";
import PageHomewhychooseus from "@/pages/home/WhyChooseUs";
import PageHomeclienttestimonials from "@/pages/home/ClientTestimonials";

// About subpages
import PageAboutourstory from "@/pages/about/OurStory";
import PageAboutourmission from "@/pages/about/OurMission";
import PageAboutourteam from "@/pages/about/OurTeam";
import PageAbouthowwework from "@/pages/about/HowWeWork";

// Editing pages
import OverviewEditing from "@/pages/editing/Overview";
import PageEditingmanuscriptediting from "@/pages/editing/ManuscriptEditing";
import PageEditingdevelopmentalediting from "@/pages/editing/DevelopmentalEditing";
import PageEditinglineediting from "@/pages/editing/LineEditing";
import PageEditingcopyediting from "@/pages/editing/CopyEditing";
import PageEditingproofreading from "@/pages/editing/Proofreading";
import PageEditingmanuscriptassessment from "@/pages/editing/ManuscriptAssessment";
import PageEditingbookformatting from "@/pages/editing/BookFormatting";
import PageEditingbookcritiqueservices from "@/pages/editing/BookCritiqueServices";

// Publishing Pages
import OverviewPublishing from "@/pages/publishing/Overview";
import EbookPublishing from "@/pages/publishing/EbookPublishing";
import AudiobookPublishing from "@/pages/publishing/AudiobookPublishing";
import SelfPublishingConsultants from "@/pages/publishing/SelfPublishing";

// Ghostwriting pages
import OverviewGhostwriting from "@/pages/ghostwriting/Overview";
import PageGhostwritingmedicalghostwriters from "@/pages/ghostwriting/MedicalGhostwriters";
import PageGhostwritingscreenplayscriptwriting from "@/pages/ghostwriting/ScreenplayScriptWriting";
import PageGhostwritingchildrensbookwriting from "@/pages/ghostwriting/ChildrensBookWriting";
import PageGhostwritingspeechscriptwriting from "@/pages/ghostwriting/SpeechScriptWriting";
import PageGhostwritingcomicbookwriting from "@/pages/ghostwriting/ComicBookWriting";
import PageGhostwritingsongwriting from "@/pages/ghostwriting/SongWriting";
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

// Genre pages
import OverviewGenre from "@/pages/genre/Overview";
import PageGenrefiction from "@/pages/genre/Fiction";
import PageGenrenonfiction from "@/pages/genre/Nonfiction";
import PageGenrememoirandbiography from "@/pages/genre/MemoirAndBiography";
import PageGenreromance from "@/pages/genre/Romance";
import PageGenrefantasyandscifi from "@/pages/genre/FantasyAndSciFi";
import PageGenremysteryandthriller from "@/pages/genre/MysteryAndThriller";
import PageGenrebusinessandselfhelp from "@/pages/genre/BusinessAndSelfHelp";
import PageGenrechildrensbooks from "@/pages/genre/ChildrensBooks";

// Creative Writing pages
import OverviewCreativewriting from "@/pages/creative-writing/Overview";
import PageCreativewritingstorywriting from "@/pages/creative-writing/StoryWriting";
import PageCreativewritingnovelwriting from "@/pages/creative-writing/NovelWriting";
import PageCreativewritingpoetrywriting from "@/pages/creative-writing/PoetryWriting";
import PageCreativewritingscreenwriting from "@/pages/creative-writing/Screenwriting";
import PageCreativewritingscriptwriting from "@/pages/creative-writing/ScriptWriting";
import PageCreativewritingbookoutlining from "@/pages/creative-writing/BookOutlining";

// Book Cover pages
import OverviewBookcover from "@/pages/book-cover/Overview";
import PageBookcoverbookcoverdesign from "@/pages/book-cover/BookCoverDesign";
import PageBookcoverlayoutdesignandtypesetting from "@/pages/book-cover/LayoutDesignAndTypesetting";
import PageBookcoverbookillustration from "@/pages/book-cover/BookIllustration";
import PageBookcoverebookcoverdesign from "@/pages/book-cover/EbookCoverDesign";

// Marketing pages
import OverviewMarketing from "@/pages/marketing/Overview";
import PageMarketingbookmarketing from "@/pages/marketing/BookMarketing";
import PageMarketingauthorbranding from "@/pages/marketing/AuthorBranding";
import PageMarketingsocialmediapromotion from "@/pages/marketing/SocialMediaPromotion";
import PageMarketingbooklaunchcampaigns from "@/pages/marketing/BookLaunchCampaigns";
import PageMarketingamazonbookpromotion from "@/pages/marketing/AmazonBookPromotion";

// Pricing Plans pages
import OverviewPricingplans from "@/pages/pricing-plans/Overview";
import PagePricingplanswritingpackages from "@/pages/pricing-plans/WritingPackages";
import PagePricingplanseditingpackages from "@/pages/pricing-plans/EditingPackages";
import PagePricingplanspublishingpackages from "@/pages/pricing-plans/PublishingPackages";

// Portfolio subpages
import PagePortfoliofeaturedbooks from "@/pages/portfolio/FeaturedBooks";
import PagePortfoliobookcovers from "@/pages/portfolio/BookCovers";
import PagePortfolioourprojects from "@/pages/portfolio/OurProjects";

// Contact subpages
import PageContactrequestaquote from "@/pages/contact/RequestAQuote";
import PageContactfaq from "@/pages/contact/Faq";

// Legacy URL redirect
function LegacyExploreRedirect() {
  const { category, slug } = useParams();

  return (
    <Navigate
      to={`/${category ?? ""}${slug ? `/${slug}` : ""}`}
      replace
    />
  );
}

// Scroll manager
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

// 404 page
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

// Main website shell
function Shell() {
  const location = useLocation();

  // Gold cursor spotlight for elements with .spot class
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

      {/* Skip navigation for accessibility */}
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

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* General Services */}
          <Route path="/services" element={<Services />} />

          {/* Portfolio */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Other main pages */}
          <Route path="/brand" element={<Brand />} />
          <Route path="/trailer" element={<Trailer />} />

          {/* Home subpages */}
          <Route
            path="/home/our-process"
            element={<PageHomeourprocess />}
          />

          <Route
            path="/home/why-choose-us"
            element={<PageHomewhychooseus />}
          />

          <Route
            path="/home/client-testimonials"
            element={<PageHomeclienttestimonials />}
          />

          {/* About subpages */}
          <Route
            path="/about/our-story"
            element={<PageAboutourstory />}
          />

          <Route
            path="/about/our-mission"
            element={<PageAboutourmission />}
          />

          <Route
            path="/about/our-team"
            element={<PageAboutourteam />}
          />

          <Route
            path="/about/how-we-work"
            element={<PageAbouthowwework />}
          />

          {/* ================================== */}
          {/* EDITING MAIN PAGE AND SUBPAGES */}
          {/* ================================== */}

          <Route
            path="/editing"
            element={<OverviewEditing />}
          />

          <Route
            path="/editing/manuscript-editing"
            element={<PageEditingmanuscriptediting />}
          />

          <Route
            path="/editing/developmental-editing"
            element={<PageEditingdevelopmentalediting />}
          />

          <Route
            path="/editing/line-editing"
            element={<PageEditinglineediting />}
          />

          <Route
            path="/editing/copy-editing"
            element={<PageEditingcopyediting />}
          />

          <Route
            path="/editing/proofreading"
            element={<PageEditingproofreading />}
          />

          <Route
            path="/editing/manuscript-assessment"
            element={<PageEditingmanuscriptassessment />}
          />

          <Route
            path="/editing/book-formatting"
            element={<PageEditingbookformatting />}
          />

          <Route
            path="/editing/book-critique-services"
            element={<PageEditingbookcritiqueservices />}
          />

          {/* ================================== */}
          {/* PUBLISHING MAIN PAGE AND SUBPAGES */}
          {/* ================================== */}

          {/* Publishing Main Page */}
<Route
  path="/publishing"
  element={<OverviewPublishing />}
/>

{/* Publishing Subpages */}
<Route
  path="/publishing/ebook-publishing"
  element={<EbookPublishing />}
/>

<Route
  path="/publishing/audiobook-publishing"
  element={<AudiobookPublishing />}
/>

<Route
  path="/publishing/self-publishing-consultants"
  element={<SelfPublishingConsultants />}
/>



          {/* ================================== */}
          {/* GHOSTWRITING MAIN PAGE AND SUBPAGES */}
          {/* ================================== */}

          <Route
            path="/ghostwriting"
            element={<OverviewGhostwriting />}
          />

          <Route
            path="/ghostwriting/medical-ghostwriters"
            element={<PageGhostwritingmedicalghostwriters />}
          />

          <Route
            path="/ghostwriting/screenplay-script-writing"
            element={<PageGhostwritingscreenplayscriptwriting />}
          />

          <Route
            path="/ghostwriting/childrens-book-writing"
            element={<PageGhostwritingchildrensbookwriting />}
          />

          <Route
            path="/ghostwriting/speech-script-writing"
            element={<PageGhostwritingspeechscriptwriting />}
          />

          <Route
            path="/ghostwriting/comic-book-writing"
            element={<PageGhostwritingcomicbookwriting />}
          />

          <Route
            path="/ghostwriting/song-writing"
            element={<PageGhostwritingsongwriting />}
          />

          <Route
            path="/ghostwriting/real-life-story-writing"
            element={<PageGhostwritingreallifestorywriting />}
          />

          <Route
            path="/ghostwriting/book-publishing-services"
            element={<PageGhostwritingbookpublishingservices />}
          />

          <Route
            path="/ghostwriting/corporate-writing-services"
            element={<PageGhostwritingcorporatewritingservices />}
          />

          <Route
            path="/ghostwriting/technical-ghostwriting"
            element={<PageGhostwritingtechnicalghostwriting />}
          />

          <Route
            path="/ghostwriting/podcast-script-writing"
            element={<PageGhostwritingpodcastscriptwriting />}
          />

          <Route
            path="/ghostwriting/brand-storytelling"
            element={<PageGhostwritingbrandstorytelling />}
          />

          <Route
            path="/ghostwriting/legal-ghostwriting"
            element={<PageGhostwritinglegalghostwriting />}
          />

          <Route
            path="/ghostwriting/twitter-ghostwriting"
            element={<PageGhostwritingtwitterghostwriting />}
          />

          <Route
            path="/ghostwriting/instagram-ghostwriting"
            element={<PageGhostwritinginstagramghostwriting />}
          />

          <Route
            path="/ghostwriting/facebook-ghostwriting"
            element={<PageGhostwritingfacebookghostwriting />}
          />

          <Route
            path="/ghostwriting/linkedin-ghostwriting"
            element={<PageGhostwritinglinkedinghostwriting />}
          />

          <Route
            path="/ghostwriting/scientific-ghostwriting"
            element={<PageGhostwritingscientificghostwriting />}
          />

          <Route
            path="/ghostwriting/find-a-literary-agent"
            element={<PageGhostwritingfindaliteraryagent />}
          />

          {/* ================================== */}
          {/* GENRE MAIN PAGE AND SUBPAGES */}
          {/* ================================== */}

          <Route
            path="/genre"
            element={<OverviewGenre />}
          />

          <Route
            path="/genre/fiction"
            element={<PageGenrefiction />}
          />

          <Route
            path="/genre/nonfiction"
            element={<PageGenrenonfiction />}
          />

          <Route
            path="/genre/memoir-and-biography"
            element={<PageGenrememoirandbiography />}
          />

          <Route
            path="/genre/romance"
            element={<PageGenreromance />}
          />

          <Route
            path="/genre/fantasy-and-sci-fi"
            element={<PageGenrefantasyandscifi />}
          />

          <Route
            path="/genre/mystery-and-thriller"
            element={<PageGenremysteryandthriller />}
          />

          <Route
            path="/genre/business-and-self-help"
            element={<PageGenrebusinessandselfhelp />}
          />

          <Route
            path="/genre/childrens-books"
            element={<PageGenrechildrensbooks />}
          />

          {/* ================================== */}
          {/* CREATIVE WRITING MAIN PAGE AND SUBPAGES */}
          {/* ================================== */}

          <Route
            path="/creative-writing"
            element={<OverviewCreativewriting />}
          />

          <Route
            path="/creative-writing/story-writing"
            element={<PageCreativewritingstorywriting />}
          />

          <Route
            path="/creative-writing/novel-writing"
            element={<PageCreativewritingnovelwriting />}
          />

          <Route
            path="/creative-writing/poetry-writing"
            element={<PageCreativewritingpoetrywriting />}
          />

          <Route
            path="/creative-writing/screenwriting"
            element={<PageCreativewritingscreenwriting />}
          />

          <Route
            path="/creative-writing/script-writing"
            element={<PageCreativewritingscriptwriting />}
          />

          <Route
            path="/creative-writing/book-outlining"
            element={<PageCreativewritingbookoutlining />}
          />

          {/* ================================== */}
          {/* BOOK COVER MAIN PAGE AND SUBPAGES */}
          {/* ================================== */}

          <Route
            path="/book-cover"
            element={<OverviewBookcover />}
          />

          <Route
            path="/book-cover/book-cover-design"
            element={<PageBookcoverbookcoverdesign />}
          />

          <Route
            path="/book-cover/layout-design-and-typesetting"
            element={<PageBookcoverlayoutdesignandtypesetting />}
          />

          <Route
            path="/book-cover/book-illustration"
            element={<PageBookcoverbookillustration />}
          />

          <Route
            path="/book-cover/ebook-cover-design"
            element={<PageBookcoverebookcoverdesign />}
          />

          {/* ================================== */}
          {/* MARKETING MAIN PAGE AND SUBPAGES */}
          {/* ================================== */}

          <Route
            path="/marketing"
            element={<OverviewMarketing />}
          />

          <Route
            path="/marketing/book-marketing"
            element={<PageMarketingbookmarketing />}
          />

          <Route
            path="/marketing/author-branding"
            element={<PageMarketingauthorbranding />}
          />

          <Route
            path="/marketing/social-media-promotion"
            element={<PageMarketingsocialmediapromotion />}
          />

          <Route
            path="/marketing/book-launch-campaigns"
            element={<PageMarketingbooklaunchcampaigns />}
          />

          <Route
            path="/marketing/amazon-book-promotion"
            element={<PageMarketingamazonbookpromotion />}
          />

          {/* ================================== */}
          {/* PRICING PLANS */}
          {/* ================================== */}

          <Route
            path="/pricing-plans"
            element={<OverviewPricingplans />}
          />

          <Route
            path="/pricing-plans/writing-packages"
            element={<PagePricingplanswritingpackages />}
          />

          <Route
            path="/pricing-plans/editing-packages"
            element={<PagePricingplanseditingpackages />}
          />

          <Route
            path="/pricing-plans/publishing-packages"
            element={<PagePricingplanspublishingpackages />}
          />

          {/* ================================== */}
          {/* PORTFOLIO SUBPAGES */}
          {/* ================================== */}

          <Route
            path="/portfolio/featured-books"
            element={<PagePortfoliofeaturedbooks />}
          />

          <Route
            path="/portfolio/book-covers"
            element={<PagePortfoliobookcovers />}
          />

          <Route
            path="/portfolio/our-projects"
            element={<PagePortfolioourprojects />}
          />

          {/* ================================== */}
          {/* CONTACT SUBPAGES */}
          {/* ================================== */}

          <Route
            path="/contact/request-a-quote"
            element={<PageContactrequestaquote />}
          />

          <Route
            path="/contact/faq"
            element={<PageContactfaq />}
          />

          {/* ================================== */}
          {/* OLD URL REDIRECTS */}
          {/* ================================== */}

          <Route
            path="/explore/:category/:slug"
            element={<LegacyExploreRedirect />}
          />

          <Route
            path="/explore/:category"
            element={<LegacyExploreRedirect />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />

      <div className="grain-overlay" aria-hidden="true" />
    </div>
  );
}

// Main App
export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
