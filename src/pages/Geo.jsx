import React from "react";
import Navbar from "../components/Navbar";
import GeoH from "../assets/GeoH.png";
import Organic from "../assets/Organic.png";
import GeoImg from "../assets/GeoImg.png";
import Seo2 from "../assets/Seo2.png";
import Seo3 from "../assets/Seo3.png";
import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";
import soonamedia from "../assets/soonamedia.jpg";
import soona from "../assets/soona.svg";
import palmetto from "../assets/koji.png";
import pal from "../assets/pal.svg";
import star1 from "../assets/star1.svg";
import { BiChevronRight } from "react-icons/bi";
import SeoTech from "../assets/SeoTech.svg";
import SeoCont from "../assets/SeoCont.svg";
import SeoRep from "../assets/SeoRep.svg";
import SeoTeam from "../assets/GeoTeam.png";
import SeoBlog1 from "../assets/SeoBlog1.jpg";
import SeoBlog2 from "../assets/SeoBlog2.jpg";
import SeoBlog3 from "../assets/SeoBlog3.jpg";
import Footer from "../components/Footer";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FinalSection from "../components/FinalSection";

export default function Geo() {
  const box = {
        heading: "Search is changing. We’ll help you create content for the AI age.",
        para: ["We like to share how we help businesses grow organically. But, a great partnership is also about people. Let’s chat."],
        button: "Book a free GEO strategy call today"
    }
  const faqs = [
    {
      question: "How is GEO different from SEO? ",
      answer:
        "GEO optimizes your content specifically for AI-generated search experiences like ChatGPT, Google Gemini, and Perplexity, focusing on relevance, structured responses, and conversational clarity. In contrast, traditional search engine optimization (SEO) targets visibility in standard search engine results by emphasizing keywords, backlinks, and algorithmic ranking factors.",
    },
    {
      question: "Will GEO replace my current SEO strategy? ",
      answer:
        "No. GEO complements traditional SEO rather than replacing it. Combining both ensures your content is visible across all search experiences, whether in traditional search engine formats or AI-driven generative platforms.",
    },
    {
      question: "How soon can I see results?",
      answer:
        "Timelines vary, but most businesses will begin seeing improved visibility in generative search platforms within weeks to months of deployment. Leading indicators often include increased brand mentions, improved content positioning in AI responses, and incremental traffic lift from users coming from AI-driven search platforms.",
    },
    {
      question: "Why is understanding user intent crucial in GEO?",
      answer:
        "Understanding user intent allows you to create content tailored precisely to the information users seek. Generative answer engines rely on natural language processing to interpret user queries, meaning content closely aligned with user intent is more likely to be selected by AI as a reliable answer source.",
    },
    {
      question:"What’s the difference between GEO and AEO?",
      answer:
        "Terms like GEO, AEO, and even LLM SEO are often used interchangeably. But we would argue they convey subtle differences in approach. Generative Engine Optimization (GEO) focuses on enhancing content for AI-driven platforms like ChatGPT, Google’s AI Overviews, and Perplexity AI, ensuring accurate representation and citation in AI-generated responses. Answer Engine Optimization (AEO), on the other hand, aims to optimize content for direct extraction from AI tools to answer user queries. This can include optimizing for results like featured snippets, knowledge panels, and voice search results — whether on Google Search or voice assistants like Siri and Alexa. While both strategies enhance visibility, GEO targets AI synthesis while AEO focuses on direct answer delivery to user queries. Gaining visibility on certain platforms requires a hybrid approach of both GEO and AEO. For example, Perplexity AI is an AI-powered answer engine that searches the web, identifies trusted sources, and synthesizes information into clear, up-to-date responses. While it shares characteristics with both generative AI platforms and traditional search engines, Perplexity’s approach involves directly answering user queries with synthesized information, often including citations. Therefore, optimizing content for Perplexity involves strategies from both Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), ensuring content is authoritative, well-structured, and directly addresses user queries to enhance visibility across various AI-driven platforms."
    }
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full h-auto GeoBg p-1">
          <div className="w-full h-auto mt-40 md:mt-20 lg:mt-35 px-4 sm:px-6 md:px-12 lg:pl-19 flex flex-col lg:flex-row">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[48%] h-auto pt-1">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-semibold text-[#ffffff] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-7">
                Reach the new generation of searchers with Generative Engine <br />
                Optimization (GEO)
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-13 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Search behavior is changing. The way your content shows up for
                your audience should too. Enter Generative Engine Optimization:
                The science of earning visibility and citations in generative
                engines like ChatGPT, Google Gemini/AIO, and Perplexity. From
                auditing and research to execution and reporting, our content
                experts help you carve out a GEO strategy that drives brand
                visibility on emerging AI platforms. So the next time you’re
                asked “what’s our AI search strategy?”, you can point to
                tangible results.
              </p>
              <Link to="/get-started-with-tuff">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let's Talk
                </button>
              </Link>
            </div>
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mt-6 lg:mt-0">
              <img
                src={GeoH}
                alt="GeoH"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pb-10 px-4 sm:px-10 md:px-18">
          <div className="flex flex-col-reverse lg:flex-row justify-between mt- gap-6">
            <div className="w-full lg:w-[50%] flex items-center justify-center pt-10 pl-0 lg:pl-4">
              <img src={Organic} alt="Organic" className="w-[100%]" />
            </div>
            <div className="w-full lg:w-[47.5%] h-auto pt-1">
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-extrabold md:leading-[50px] text-[#0c2233] mt-10 lg:mt-22">
                Content visibility in an AI world: It’s no longer (just) about
                optimizing for 10 blue links
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-10">
                For more than 20 years, Google has been synonymous with
                information retrieval online. But for searchers, it’s no longer
                the only game in town. Gartner predicts brands stand to lose up
                to 50% of organic search traffic to Large Language Models (LLMs)
                like ChatGPT by 2028.
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-5">
                The front door to the internet is changing. The good news?
                Combining traditional SEO tactics with a dedicated GEO strategy
                can help brands adapt to ensure their content is referenced by
                AI models — wherever their audience is searching.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-10 gap-6">
            <div className="w-full lg:w-[50%] h-auto pt-1">
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-extrabold md:leading-[50px] text-[#0c2233] mt-10 lg:mt-22">
                What is Generative Engine Optimization?
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                Generative Engine Optimization — or GEO for short — is the
                process of optimizing content visibility for AI-driven search
                engines and experiences, like those offered by ChatGPT, Claude,
                Google GSE, and other generative engines. It emphasizes context,
                relevance, and conversational content structures over
                traditional SEO factors, like keyword ranking and backlinks.
                With GEO, the ultimate goal is earning references and citations
                for your content wherever users are searching, including LLMs.
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-5">
                Many SEO best practices, like ensuring content is high quality
                and answers your audience’s questions, also apply to GEO. So why
                do brands need a GEO strategy in addition to SEO? Consider:
              </p>
              <ul className="text-[16px] list-disc pl-10 sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                <li>
                  AI search engines and LLMs synthesize information from a
                  variety of sources in response to a query. This enables them
                  to dynamically respond to specific search intent with highly
                  contextual information and even visual and interactive
                  elements.
                </li>
                <li>
                  Search interactions with AI chatbots like ChatGPT make
                  generative searches feel more conversational in nature than
                  traditional search experiences.
                </li>
                <li>
                  Generative search experiences make it possible for users to
                  get the answers they’re looking for without interacting
                  directly with your brand or website.
                </li>
              </ul>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-5">
                The bottom line: Generative search experiences are different
                from their traditional search counterparts. Unlike SEO, GEO
                addresses generative search experiences head-on to:
              </p>
              <ul className="text-[16px] list-disc pl-10 sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                <li>Align content with AI’s understanding of intent</li>
                <li>Build brands’ topical authority for generative search</li>
                <li>
                  Optimize both information and writing style for AI citation
                  and reference
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] flex items-center justify-center pt-8 pl-0 lg:pl-4">
              <img src={GeoImg} alt="GeoImg" className="w-[100%]" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-1">
          <div className="flex items-center justify-center flex-col">
            <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-19 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
              OUR PROCESS
            </div>
            <h2 className="text-[28px] md:text-[44px] leading-[36px] font-semibold text-[#0c2233] text-center mt-6 px-4 w-full lg:text-[44px] lg:leading-[50px] lg:w-[60%]">
              At Tuff, we launch GEO strategies crafted and executed
              specifically for your brand
            </h2>
          </div>
          <div className="w-full h-auto pb-10 px-4 sm:px-10 md:px-18">
            {/* Section 1 */}
            <div className="flex flex-col lg:flex-row mt-10 gap-6">
              <div className="w-full lg:w-[50%] h-auto pt-1">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#0c2233] mt-10 lg:mt-27">
                  Research
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                  We start with an extensive AI search audit, benchmarking how
                  AI models like ChatGPT, Google AIO, and Perplexity interpret
                  your industry’s core topics. Our detailed analysis identifies
                  critical gaps and insights, highlighting opportunities where
                  your content can stand out and be referenced by generative AI
                  engines.
                </p>
              </div>
              <div className="w-full lg:w-[50%] flex items-center justify-center pt-8 pl-0 lg:pl-4">
                <img src={Seo2} alt="Seo2" className="w-[90%]" />
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col-reverse lg:flex-row justify-between mt-12 gap-6">
              <div className="w-full lg:w-[50%] flex items-center justify-center pt-10 pl-0 lg:pl-4">
                <img src={Seo3} alt="Seo3" className="w-[70%]" />
              </div>
              <div className="w-full lg:w-[47.5%] h-auto pt-1">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#0c2233] mt-10 lg:mt-42">
                  Strategy
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                  Next, we build a tailored GEO strategy focused on optimizing
                  content structure, enhancing topical authority, and aligning
                  content with AI preferences. This involves semantic
                  structuring, clearly defined content hierarchies, concise
                  summaries, and targeted, structured responses to position your
                  brand effectively within AI-generated results.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col lg:flex-row mt-12 gap-6">
              <div className="w-full lg:w-[50%] h-auto pt-1">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#0c2233] mt-10 lg:mt-22">
                  Execution
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                  Our execution phase involves building AI-favored authority
                  signals, carefully sourcing credible references, and
                  optimizing brand mentions within generative AI responses. By
                  publishing strategically formatted content, we can help your
                  brand become a trusted resource for generative engines —
                  securing sustained visibility and engagement.
                </p>
              </div>

              <div className="w-full lg:w-[50%] pt-10 lg:pt-18">
                <div className="flex flex-wrap justify-start gap-3 px-4">
                  <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    STRUCTURED DATA
                  </div>
                  <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    CONVERSATIONAL QUERIES
                  </div>
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    Brief, Informative Summaries
                  </div>
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    Prompt-Style Content
                  </div>
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    Well-Structured Headings
                  </div>
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    Brand Presence in Content
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row mt-12 gap-6">
              <div className="w-full lg:w-[50%] pt-10 lg:pt-18">
                <div className="flex flex-wrap justify-start gap-3 px-4">
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    LLM Visibility Audit
                  </div>
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    AI Search Performance Monitoring
                  </div>
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    AEO Strategy Development
                  </div>
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    Site Speed Optimizations
                  </div>
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    Navigation and Sitemaps
                  </div>
                  <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    Content
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[50%] h-auto pt-1">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#0c2233] mt-10 lg:mt-22">
                  Continuous learning and application
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                  GEO is a highly dynamic area of marketing. In addition to
                  comprehensive reporting to document your brand’s growth, we
                  continuously educate ourselves on the evolving nature of
                  generative engines to apply those learnings to your content.
                  The old playbook is fading fast. Our experienced strategists
                  will ensure your brand stays on the cutting edge of the
                  fast-changing search landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="creline h-auto w-full pt-4 pb-10">
          <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-24 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
            CASE STUDIES
          </div>
          <h2 className="text-[42px] font-semibold text-white text-center mt-2">
            Learn why companies love Tuff
          </h2>
          <div className="w-full h-auto flex flex-col lg:flex-row justify-between px-4 lg:px-19 gap-6 lg:gap-0 pt-15">
            <div className="h-auto w-full lg:w-[48.7%] px-6 lg:px-12 pt-8 lg:pt-12 bg-[#FFFFFF] border-2 border-[#FFFFFF]">
              <img
                src={soonamedia}
                alt="soonamedia"
                loading="lazy"
                className="w-full "
              />
              <img
                src={soona}
                alt="soona"
                loading="lazy"
                className="mt-6 lg:mt-8 h-6 filter brightness-0 saturate-100"
              />
              <div className="w-full pt-6 lg:pt-9 flex flex-wrap gap-2 lg:gap-3 items-center">
                <div className="text-[16px] lg:text-[20px] font-semibold text-[#FFFFFF] bg-black w-max px-[7px] lg:px-[9px] py-[5px] lg:py-[7px]">
                  Ecommerce
                </div>
                <div className="text-[16px] lg:text-[20px] font-semibold text-[#FFFFFF] bg-black w-max px-[7px] lg:px-[9px] py-[5px] lg:py-[7px]">
                  SMBs
                </div>
                <p className="text-black font-semibold text-[16px] lg:text-[20px]">
                  5 min read
                </p>
              </div>
              <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-black leading-[28px] sm:leading-[32px] lg:leading-[36px] mt-4 lg:mt-5 w-full lg:w-[90%]">
                Tackling Rising Acquisition Costs with an Ad Creative Testing
                Framework
              </p>
              <div className="w-full pt-5 lg:pt-7 pr-0 lg:pr-4 pb-12 lg:pb-10">
                {[
                  {
                    value: "1.4M",
                    label: "Increase in Impressions",
                    icon: chevUp,
                  },
                  { value: "45%", label: "Increase in CRV", icon: chevUp },
                  {
                    value: "57%+",
                    label: "Increase in Total Sales",
                    icon: chevUp,
                  },
                  { value: "$200+", label: "CPA", icon: chevDown },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-full h-[45px] lg:h-[55px] mt-2 border-t-2 border-[#000000] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-1 w-[45%] lg:w-[40%]">
                      <img
                        src={item.icon}
                        alt="icon"
                        loading="lazy"
                        className="w-[8%] lg:w-[6%]"
                      />
                      <h3 className="text-[16px] lg:text-[18px] sm:text-[20px] font-extrabold text-black">
                        {item.value}
                      </h3>
                    </div>
                    <div>
                      <p className="text-[16px] lg:text-[18px] sm:text-[20px] font-normal text-black">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-auto w-full lg:w-[48.7%] px-6 lg:px-12 pt-8 lg:pt-12 bg-[#FFFFFF] border-2 border-[#FFFFFF]">
              <img
                src={palmetto}
                alt="palmetto"
                loading="lazy"
                className="w-full"
              />
              <img
                src={pal}
                alt="pal"
                loading="lazy"
                className="mt-6 lg:mt-8 h-6 filter brightness-0 saturate-100"
              />
              <div className="w-full pt-6 lg:pt-9 flex flex-wrap gap-2 lg:gap-3 items-center">
                <div className="text-[16px] lg:text-[20px] font-semibold text-[#FFFFFF] bg-black w-max px-[7px] lg:px-[9px] py-[5px] lg:py-[7px]">
                  Paid Media
                </div>
                <div className="text-[16px] lg:text-[20px] font-semibold text-[#FFFFFF] bg-black w-max px-[7px] lg:px-[9px] py-[5px] lg:py-[7px]">
                  CRO
                </div>
                <p className="text-black font-semibold text-[16px] lg:text-[20px]">
                  7 min read
                </p>
              </div>
              <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-black leading-[28px] sm:leading-[32px] lg:leading-[36px] mt-4 lg:mt-5 w-full lg:w-[90%]">
                Developing an Inbound Pipeline to Scale Qualified Leads for B2B
                Partner
              </p>
              <div className="w-full pt-5 lg:pt-7 pr-0 lg:pr-4 pb-12 lg:pb-10">
                {[
                  {
                    value: "1.4M",
                    label: "Increase in Impressions",
                    icon: chevUp,
                  },
                  { value: "45%", label: "Increase in CRV", icon: chevUp },
                  {
                    value: "57%+",
                    label: "Increase in Total Sales",
                    icon: chevUp,
                  },
                  { value: "$200+", label: "CPA", icon: chevDown },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-full h-[45px] lg:h-[55px] mt-2 border-t-2 border-[#000000] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-1 w-[45%] lg:w-[40%]">
                      <img
                        src={item.icon}
                        alt="icon"
                        loading="lazy"
                        className="w-[8%] lg:w-[6%]"
                      />
                      <h3 className="text-[16px] lg:text-[18px] sm:text-[20px] font-extrabold text-black">
                        {item.value}
                      </h3>
                    </div>
                    <div>
                      <p className="text-[16px] lg:text-[18px] sm:text-[20px] font-normal text-black">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link to={"/case-studies"}>
            <div className="w-max px-6 py-2 border-2 border-white text-[#FFFEFB] text-[18px] lg:text-[20px] font-semibold m-auto mt-10 transition-transform duration-500 tilt-zoom">
              View all case studies
            </div>
          </Link>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pb-20 pt-1 flex items-center flex-col">
          <h2 className="text-[28px] text-center mt-20 px-4 font-semibold text-[#0c2233] lg:text-[42px]">
            Download a Sample SEO Audit
          </h2>
          <p className="text-[16px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[55%] lg:mt-3 lg:leading-[25px]">
            With an initial SEO audit, we identify and prioritize technical and
            on-page issues that can affect your website’s search engine
            rankings, user experience, and overall organic performance. Download
            a sample SEO audit to get a sneak peek at what an initial audit
            looks like from Tuff.
          </p>

          <div className="w-full flex flex-col gap-4 px-6 mt-9 lg:flex-row lg:px-65 lg:gap-0 lg:justify-between">
            <input
              type="text"
              placeholder="First Name"
              className="border border-black rounded-[3px] outline-none py-3 pl-4 placeholder:text-[#CED2D5] w-full lg:w-[25%]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-black rounded-[3px] outline-none py-3 pl-4 placeholder:text-[#CED2D5] w-full lg:w-[25%]"
            />
            <input
              type="email"
              placeholder="Work Email"
              className="border border-black rounded-[3px] outline-none py-3 pl-4 placeholder:text-[#CED2D5] w-full lg:w-[25%]"
            />
            <button className="bg-[#ceff2a] text-black text-lg font-semibold w-full lg:w-[20%] rounded-[3px] py-3">
              Submit
            </button>
          </div>

          <img src={star1} alt="star1" className="mt-20" />
          <p className="bg-[#CEFD94] text-[#0C2233] text-[22px] font-semibold mt-7 px-4 text-center lg:text-[26px]">
            “I view our partnership with Tuff as more like an extension of my
            team.”
          </p>
          <p className="text-[#0C2233] text-[22px] font-semibold mt-5 px-4 text-center lg:text-[26px] lg:w-[65%]">
            We strategize together, ask tough questions, examine the results,
            optimize – and it just keeps getting better. Exactly what I was
            looking for.”
          </p>
          <h1 className="text-[#0C2233] text-[18px] font-semibold mt-3 text-center lg:text-[20px]">
            Brad Veach
          </h1>
          <p className="text-[16px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[55%] lg:mt-0 lg:leading-[25px]">
            VP of Marketing at THNKS
          </p>
        </div>
      </section>

      <section>
        <div className="w-full h-auto SeoBg pt-1 flex items-center flex-col">
          <div className="h-auto m-auto py-2 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-24 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0">
            WHAT WE DO
          </div>

          <h2 className="text-[28px] text-white text-center mt-4 px-4 font-semibold w-full lg:text-[42px] lg:w-[45%]">
            Our full-stack GEO experts cover your needs from A-Z
          </h2>

          <p className="text-[16px] text-white text-center font-normal mt-6 px-4 leading-[22px] w-full lg:text-[20px] lg:mt-8 lg:leading-[25px] lg:w-[53%]">
            We optimize and provide reporting for Google’s AI Overviews (AIO),
            ChatGPT (and Bing Chat), Perplexity, Anthropic’s Claude, and
            Google’s Gemini, addressing Technical SEO, On-Page optimization,
            Content strategy, and platform-specific nuances for each.
          </p>

          <div className="w-full flex flex-col gap-6 px-6 pb-20 pt-10 lg:flex-row lg:gap-0 lg:justify-between lg:px-20">
            {/* Card 1 */}
            <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4">
              <img src={SeoTech} alt="SeoTech" />
              <h2 className="text-[24px] text-white font-semibold mt-4 lg:text-[28px]">
                Technical GEO
              </h2>
              <p className="text-[16px] text-white font-normal mt-4 leading-[22px] lg:text-[20px] lg:mt-4 lg:leading-[25px]">
                We audit and optimize site structure, metadata, and structured
                data (schema markup) to enhance AI indexing and content
                discoverability — ensuring no technical missteps hinder brand
                visibility in generative engines.
              </p>
              <Link>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-4 text-white cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4">
              <img src={SeoCont} alt="SeoCont" />
              <h2 className="text-[24px] text-white font-semibold mt-4 lg:text-[28px]">
                GEO & AEO Content
              </h2>
              <p className="text-[16px] text-white font-normal mt-4 leading-[22px] lg:text-[20px] lg:mt-4 lg:leading-[25px]">
                We use semantic structuring and conversational writing
                techniques to develop content that resonates with AI engines
                like ChatGPT, Bard, and Perplexity. This includes writing
                concise summaries, deploying structured headings, and
                anticipating generative engine prompts with clear, authoritative
                answers.
              </p>
              <Link to={"/content-strategy"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-4 text-white cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4">
              <img src={SeoRep} alt="SeoRep" />
              <h2 className="text-[24px] text-white font-semibold mt-4 lg:text-[28px]">
                AI Brand Visibility Reporting
              </h2>
              <p className="text-[16px] text-white font-normal mt-4 leading-[22px] lg:text-[20px] lg:mt-4 lg:leading-[25px]">
                We go beyond traditional organic search metrics to provide
                detailed analytics on AI-driven visibility — highlighting where
                and how your brand appears in generative search results and how
                many visitors LLM referrers send to your site.
              </p>
              <p className="text-[16px] text-white font-normal mt-4 leading-[22px] lg:text-[20px] lg:mt-4 lg:leading-[25px]">
                Our reporting framework helps you track progress, identify
                opportunities, and refine strategies based on real-time
                performance metrics and AI citation growth. Our reporting
                framework helps you track progress, identify opportunities, and
                refine strategies based on real-time performance metrics and AI
                citation growth.
              </p>
              <Link to={"/how-it-works"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-4 text-white cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section >

      <section>
        <div className="w-full h-auto pt-1 flex items-center flex-col">
          <h2 className="text-[26px] md:text-[28px] text-center leading-[36px] font-semibold text-[#0c2233] mt-10 px-4 w-full lg:text-[42px] lg:leading-[50px] lg:w-[50%]">
            Consider us your AEO experts
          </h2>

          <div className="w-full h-auto flex flex-col gap-10 pt-10 px-6 lg:flex-row lg:justify-between lg:gap-0 lg:pt-20 lg:px-20">
            {/* Left Column */}
            <div className="w-full lg:w-[48%] h-auto pb-10 lg:pb-20">
              <h2 className="text-[24px] font-semibold text-[#0c2233] lg:text-[28px]">
                Technical
              </h2>
              <p className="text-[16px] font-normal text-[#0c2233] mt-4 leading-[22px] lg:text-[20px] lg:mt-3 lg:leading-[25px]">
                Whether you’re refining your site’s architecture, implementing
                structured data, or resolving technical issues, we’re here to
                provide the expertise and support you need to ensure your
                website is optimized for generative engine visibility.
              </p>

              <h2 className="text-[24px] font-semibold text-[#0c2233] mt-10 lg:text-[28px] lg:mt-13">
                Content Writers
              </h2>
              <p className="text-[16px] font-normal text-[#0c2233] mt-4 leading-[22px] lg:text-[20px] lg:mt-3 lg:leading-[25px]">
                No in-house writers? No sweat. We have experts on hand to whip
                up content that creates visibility while representing your brand
                voice.
              </p>

              <h2 className="text-[24px] font-semibold text-[#0c2233] mt-10 lg:text-[28px] lg:mt-13">
                CRO Experts
              </h2>
              <p className="text-[16px] font-normal text-[#0c2233] mt-4 leading-[22px] lg:text-[20px] lg:mt-3 lg:leading-[25px]">
                Our teams love a joint effort. We keep our eyes out for
                conversion friction and broken journies to make sure we pull in
                the right experts at the right time.
              </p>
            </div>

            {/* Right Column */}
            <div className="w-full flex justify-center lg:w-[42%] h-auto pb-10 lg:pb-20">
              <img src={SeoTeam} alt="SeoTeam" className="w-full max-w-[85%]" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-center text-[#0C2233] mb-8">
            FAQs
          </h2>
          <div>
            {faqs.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === faqs.length - 1;

              return (
                <div
                  key={index}
                  className={`py-4 sm:py-5 md:py-6 ${
                    isFirst ? "border-t border-black" : ""
                  } border-b border-black`}
                >
                  <div
                    className="cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-base sm:text-lg md:text-[24px] lg:text-[28px] font-semibold text-[#0C2233]">
                      {item.question}
                    </h3>
                    <span className="text-orange-500 text-[24px] sm:text-[26px] md:text-[28px]">
                      {openIndex === index ? (
                        <Minus size={28} />
                      ) : (
                        <Plus size={28} />
                      )}
                    </span>
                  </div>
                  {openIndex === index && (
                    <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>






































      <section>
        <div className="w-full h-auto pt-1 flex items-center flex-col">
          {/* Badge */}
          <div className="h-auto m-auto py-2 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-16 text-sm font-semibold tracking-[1.5px] text-[#0C2233] w-fit">
            KNOWLEDGE BASE
          </div>

          {/* Heading */}
          <h2 className="text-[28px] text-center leading-[36px] font-semibold text-[#0c2233] mt-4 px-4 w-full lg:text-[42px] lg:leading-[50px] lg:w-[50%]">
            Proof? We got it.
          </h2>

          {/* Blog Cards Container */}
          <div className="w-full flex flex-col gap-6 mt-10 px-6 pb-10 lg:flex-row lg:justify-between lg:gap-0 lg:px-19 lg:mt-19 lg:pb-20">
            {/* Blog Card 1 */}
            <div className="w-full lg:w-[31.5%] h-auto p-6 cursor-pointer border-2 border-[#E0E0E0] rounded-[3px]">
              <Link to={"/how-performance-creative-generates-bold-actionable-results-for-growth-marketing"}>
                <img src={SeoBlog1} alt="SeoBlog1" />
                <h2 className="text-[20px] font-semibold text-[#0c2233] leading-[28px] mt-4 lg:text-[20px] lg:leading-[30px]">
                  How Performance Creative Generates Bold, Actionable Results for
                  Growth Marketing
                </h2>
              </Link>
            </div>

            {/* Blog Card 2 */}
            <div className="w-full lg:w-[31.5%] h-auto p-6 cursor-pointer border-2 border-[#E0E0E0] rounded-[3px]">
              <Link to={"/growth-marketing-spreadsheets"}>
                <img src={SeoBlog2} alt="SeoBlog2" />
                <h2 className="text-[20px] font-semibold text-[#0c2233] leading-[28px] mt-4 lg:text-[20px] lg:leading-[30px]">
                  14 Ready-to-Go Growth Marketing Spreadsheets Startups Can Use to
                  Boost Productivity
                </h2>
              </Link>
            </div>

            {/* Blog Card 3 */}
            <div className="w-full lg:w-[31.5%] h-auto p-6 cursor-pointer border-2 border-[#E0E0E0] rounded-[3px]">
              <Link to={"/chatgpt-growth-marketing-strategies-how-to-write-ai-prompts"}>
                <img src={SeoBlog3} alt="SeoBlog3" />
                <h2 className="text-[20px] font-semibold text-[#0c2233] leading-[28px] mt-4 lg:text-[20px] lg:leading-[30px]">
                  Level up your growth marketing strategies with ChatGPT: how to
                  write AI prompts to get the best results
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalSection text={box}/>
      <Footer />
    </>
  );
}
