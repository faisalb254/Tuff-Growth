import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import HomeSection from "./sections/HomeSection";
import GoodWay from "./pages/goodWay";
import CaseStudies from "./pages/CaseStudies";
import PaidMedia from "./pages/paidMedia";
import Creative from "./pages/creative";
import VideoMarketing from "./pages/VideoMarketing";
import Seo from "./pages/Seo";
import Geo from "./pages/Geo";
import ContentMarketing from "./pages/ContentMarketing";
import Cro from "./pages/Cro";
import Data from "./pages/Data";
import All from "./pages/All";
import Company from "./pages/Company";
import Work from "./pages/Work";
import Growth from "./pages/Growth";
import Started from "./pages/Started";
import Guides from "./pages/Guides";
import Spread from "./pages/Spread";
import Blog from "./pages/Blog";
import StrategicMessaging from "./pages/StrategicMessaging";
import Result from "./pages/Result";
import Hannah from "./pages/Hannah";
import Test from "./pages/Test";
import Derek from "./pages/Derek";
import Agency from "./pages/Agency";
import Marketing from "./pages/Marketing";
import Hire from "./pages/Hire";
import Adam from "./pages/Adam";
import Chatgpt from "./pages/Chatgpt";
import Spreadsheets from "./pages/Spreadsheets";
import ScrollButton from "./components/ScrollButton";
import PPC from "./pages/PPC";
import SocialAdvertising from "./pages/SocialAdvertising";
import Display from "./pages/Display";
import OwnedMedia from "./pages/OwnedMedia";
import StartUp from "./pages/StartUp";
import Sample from "./pages/Sample";
import Youtube from "./pages/Youtube";
import Tiktok from "./pages/Tiktok";
import Bing from "./pages/Bing";
import Linkedin from "./pages/Linkedin";
import AdGoogle from "./pages/AdGoogle";
import Technical from "./pages/Technical";
import ContentStrategy from "./pages/ContentStrategy";
import Career from "./pages/Career";
import GrowthFramework from "./pages/GrowthFramework";
import Performance from "./pages/Performance";
import GrowthAgency from "./pages/GrowthAgency";
import Digital from "./pages/Digital";
import B2B from "./pages/B2B";
import Email from "./pages/Email";

export default function App() {
  return (
    <div>
      <ScrollButton/>
      <nav style={{ padding: "1rem", background: "#f0f0f0" }} className="hidden">
        <Link to="/" style={{ margin: "0 0.5rem" }}>
          Home
        </Link>
        <Link to="/a-goodway-group-company" style={{ margin: "0 0.5rem" }}>
          GoodWay
        </Link>
        <Link to="/case-studies" style={{ margin: "0 0.5rem" }}>
          Case Studies
        </Link>
        <Link to="/paid-media" style={{ margin: "0 0.5rem" }}>
          Paid Media
        </Link>
        <Link to="/creative" style={{ margin: "0 0.5rem" }}>
          Creative
        </Link>
        <Link to="/videomarketing" style={{ margin: "0 0.5rem" }}>
          Video
        </Link>
        <Link to="/seo" style={{ margin: "0 0.5rem" }}>
          SEO
        </Link>
        <Link to="/geo" style={{ margin: "0 0.5rem" }}>
          Geo
        </Link>
        <Link to="/content-strategy" style={{ margin: "0 0.5rem" }}>
          Content
        </Link>
        <Link to="/cro" style={{ margin: "0 0.5rem" }}>
          CRO
        </Link>
        <Link to="/marketing-attribution" style={{ margin: "0 0.5rem" }}>
          Attribution
        </Link>
        <Link to="/services" style={{ margin: "0 0.5rem" }}>
          Services
        </Link>
        <Link to="/our-company" style={{ margin: "0 0.5rem" }}>
          Company
        </Link>
        <Link to="/how-it-works" style={{ margin: "0 0.5rem" }}>
          Work
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/a-goodway-group-company" element={<GoodWay />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/paid-media" element={<PaidMedia />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/videomarketing" element={<VideoMarketing />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/geo" element={<Geo />} />
        <Route path="/content-strategy" element={<ContentMarketing />} />
        <Route path="/cro" element={<Cro />} />
        <Route path="/marketing-attribution" element={<Data />} />
        <Route path="/services" element={<All />} />
        <Route path="/our-company" element={<Company />} />
        <Route path="/how-it-works" element={<Work />} />
        <Route path="/growth-marketing-agency" element={<Growth />} />
        <Route path="/get-started-with-tuff" element={<Started />} />
        <Route path="/growth-marketing-guides" element={<Guides />} />
        <Route path="/marketing-spreadsheets" element={<Spread />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/strategic-messaging" element={<StrategicMessaging />} />
        <Route path="/ppc" element={<PPC />} />
        <Route path="/social-advertising" element={<SocialAdvertising/>}/>
        <Route path="/startup-marketing-agency" element={<StartUp/>}/>
        <Route path="/display" element={<Display/>}/>
        <Route path="/owned-media" element={<OwnedMedia/>}/>
        <Route path="/how-performance-creative-generates-bold-actionable-results-for-growth-marketing" element={<Result />}/>
        <Route path="/author/hannah" element={<Hannah/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/author/derek" element={<Derek/>}/>
        <Route path="/what-is-a-growth-marketing-agency" element={<Agency/>}/>
        <Route path="/growth-marketing" element={<Marketing/>}/>
        <Route path="/hire-growth-marketing-agency" element={<Hire/>}/>
        <Route path="/adam" element={<Adam/>}/>
        <Route path="/chatgpt-growth-marketing-strategies-how-to-write-ai-prompts" element={<Chatgpt/>}/>
        <Route path="/growth-marketing-spreadsheets" element={<Spreadsheets/>}/>
        <Route path="/sample-growth-marketing-proposal" element={<Sample/>}/>
        <Route path="/tiktok-ad-agency" element={<Tiktok/>}/>
        <Route path="/youtube-ad-agency" element={<Youtube/>}/>
        <Route path="/google-ad-agency" element={<AdGoogle/>}/>
        <Route path="/bing-ad-agency" element={<Bing/>}/>
        <Route path="/linkedin-ad-agency" element={<Linkedin/>}/>
        <Route path="/technical-seo-agency" element={<Technical/>}/>
        <Route path="/content-strategy-agency" element={<ContentStrategy/>}/>
        <Route path="/careers" element={<Career/>}/>
        <Route path="/growth-marketing-framework" element={<GrowthFramework/>}/>
        <Route path="/performance-marketing-agency" element={<Performance/>}/>
        <Route path="/growth-agency" element={<GrowthAgency/>}/>
        <Route path="/digital-marketing-agency" element={<Digital />}/>
        <Route path="/b2b-digital-marketing-agency" element={<B2B />}/>
        <Route path="/email-marketing" element={<Email />}/>

      </Routes>
    </div>
  );
}
