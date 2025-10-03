import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ContentHero from "../assets/ContentHero.png";
import User from "../assets/User.svg";
import Chat from "../assets/Chat.svg";
import Share from "../assets/share.svg";
import Sync from "../assets/Sync.svg";
import Blackboard from "../assets/Blackboard.svg";
import Award from "../assets/Award.svg";
import List from "../assets/List.svg";
import found from "../assets/Found.png";
import star1 from "../assets/star1.svg";
import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";
import soonamedia from "../assets/soonamedia.jpg";
import soona from "../assets/soona.svg";
import palmetto from "../assets/koji.png";
import pal from "../assets/soona.svg";
import { Plus, Minus } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What does a content marketing agency actually do?",
    answer:
      "A content marketing agency helps businesses create and distribute valuable content to attract, engage, and convert customers.",
  },
  {
    question: "How much should you pay for content marketing?",
    answer:
      "Costs vary, but many agencies offer monthly packages from $1,000 to $10,000+ depending on the scope and content volume.",
  },
  {
    question: "What kinds of companies need content marketing?",
    answer:
      "Any company aiming to grow online visibility and trust—especially B2B, SaaS, e-commerce, and service-based businesses.",
  },
  {
    question: "How is content strategy different from just creating content?",
    answer:
      "A content strategy focuses on planning and purpose—defining goals, audience, and formats—while content creation is just execution.",
  },
];

export default function ContentMarketing() {
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
        <div className="w-full h-auto md:h-[100vh] ContentLine pt-1">
          <div className="w-full h-auto mt-40 md:mt-20 lg:mt-35 px-4 sm:px-6 md:px-12 lg:pl-19 flex flex-col lg:flex-row">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[48%] h-auto pt-8">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-semibold text-[#ffffff] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-7">
                Full-funnel content marketing agency for scalable growth
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-13 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                We help brands across all stages of growth ideate, create, and
                distribute high-quality, human-led content that drives traffic,
                builds brand authority, and generates qualified leads.
              </p>
              <Link to="/get-started-with-tuff">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let’s Build Your Content Engine
                </button>
              </Link>
            </div>
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mt-6 lg:mt-0 px-10 md:px-20">
              <img
                src={ContentHero}
                alt="ContentHero"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto pb-10 pt-20 flex items-center flex-col px-4">
          {/* Heading */}
          <h2 className="text-[24px] text-center font-semibold text-[#0c2233] leading-[34px] w-full mt-6 lg:text-[44px] lg:leading-[50px] lg:w-[65%]">
            Bespoke Content Strategy and Execution that Rises Above
          </h2>

          {/* Paragraph */}
          <p className="text-[16px] text-center font-normal text-[#0C2233] mt-5 w-full lg:text-[20px] lg:w-[40%]">
            We unlock your brand’s unique voice and give it a megaphone that
            helps the right people find you and keep you top-of-mind.
          </p>

          {/* Card Wrapper */}
          <div className="w-full h-auto pt-12">
            <div className="w-full flex flex-col items-center gap-6 lg:w-[66%] lg:flex-row lg:flex-wrap lg:justify-between lg:m-auto lg:pb-20">
              {/* Card 1 */}
              <div className="w-full border-2 border-[#E0E0E0] rounded-[3px] p-6 lg:w-[48.5%] lg:px-8 lg:pb-14">
                <img src={User} alt="User" />
                <h2 className="text-[20px] font-bold text-[#0C2233] mt-6 lg:text-[24px]">
                  Know your audience.
                </h2>
                <p className="text-[17px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                  Effective content starts with a deep understanding of your
                  ideal customers and market. We dig into audience segments to
                  identify opportunities for your content to drive impact and
                  support tangible business goals.
                </p>
              </div>

              {/* Card 2 */}
              <div className="w-full border-2 border-[#E0E0E0] rounded-[3px] p-6 lg:w-[48.5%] lg:px-8 lg:pb-12">
                <img src={Chat} alt="Chat" className="w-[16%]" />
                <h2 className="text-[20px] font-bold text-[#0C2233] mt-6 lg:text-[24px]">
                  Evolve your content strategy beyond a list of keywords.
                </h2>
                <p className="text-[16px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                  A strong content marketing strategy isn’t just a list of
                  keywords. It’s about answering real questions, addressing real
                  pain points, and distributing high-quality content that meets
                  users where they are.
                </p>
              </div>

              {/* Card 3 */}
              <div className="w-full border-2 border-[#E0E0E0] rounded-[3px] p-6 lg:w-[48.5%] lg:px-8 lg:pb-14 lg:mt-7">
                <img src={Share} alt="Share" />
                <h2 className="text-[20px] font-bold text-[#0C2233] mt-6 lg:text-[24px]">
                  Stay on trend, but don’t blend.
                </h2>
                <p className="text-[16px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                  Analyzing competitors to spot industry trends? That’s table
                  stakes. We also sit down with your marketing, sales, and
                  product teams to carve out a distinct voice for your brand.
                  Our goal isn’t just to join the conversation—it’s to lead it.
                </p>
              </div>

              {/* Card 4 */}
              <div className="w-full border-2 border-[#E0E0E0] rounded-[3px] p-6 lg:w-[48.5%] lg:px-8 lg:pb-14 lg:mt-7">
                <img src={Sync} alt="Sync" />
                <h2 className="text-[20px] font-bold text-[#0C2233] mt-6 lg:text-[24px]">
                  Report, pivot, repeat.
                </h2>
                <p className="text-[16px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                  Collaborate with our SEO, paid, social media, and creative
                  strategy teams to track results, report on performance, and
                  optimize for ongoing success—uncovering valuable insights that
                  generate measurable brand and performance growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto CSLine flex items-center flex-col">
          <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-19 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit mb-5">
            OUR PROCESS
          </div>
          <h2 className="text-[28px] md:text-[44px] leading-[36px] font-bold text-[#FFFFFF] text-center px-4 w-full lg:text-[44px] lg:leading-[50px] lg:w-[48%]">
            A proven content strategy starts with focused research.
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] w-[90%] sm:w-[70%] md:w-[60%] lg:w-[46%] text-center font-normal text-[#FFFFFF] mt-5">
            Instead of billing by the hour, we operate on a fixed monthly
            rate—giving us the flexibility to apply the right mix of strategy,
            content creation, and distribution support based on what will drive
            the most impact for your goals.
          </p>
          <div className="w-full h-auto pt-19 px-4 lg:px-0">
            <div className="w-full lg:w-[65.5%] h-auto m-auto pb-20">
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-[45%] h-auto">
                  <div className="w-full h-auto bg-[#1F3343] p-7">
                    <h3 className="text-[16px] capitalize font-medium text-[#CEFD94]">
                      STEP 1
                    </h3>
                    <h2 className="text-[28px] font-medium text-white mt-1">
                      Discovery & Goal Alignment
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[19px] leading-[27px] font-normal text-[#FFFFFF] mt-1">
                      We begin by aligning on your brand’s unique voice,
                      business goals, and marketing priorities. Through kickoff
                      sessions and stakeholder interviews, we identify where
                      content can drive the most impact—across awareness,
                      consideration, and conversion.
                    </p>
                  </div>
                  <div className="w-full h-auto bg-[#1F3343] p-7 mt-10 md:mt-75">
                    <h3 className="text-[16px] capitalize font-medium text-[#CEFD94]">
                      STEP 3
                    </h3>
                    <h2 className="text-[28px] font-medium text-white mt-1">
                      Expert-Driven Research
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[19px] leading-[27px] font-normal text-[#FFFFFF] mt-1">
                      We listen to your internal subject matter experts to
                      surface organizational knowledge and shape original,
                      high-quality content that educates, builds authority, and
                      speaks authentically to your target audience.
                    </p>
                  </div>
                  <div className="w-full h-auto bg-[#1F3343] p-7 mt-10 md:mt-75">
                    <h3 className="text-[16px] capitalize font-medium text-[#CEFD94]">
                      STEP 5
                    </h3>
                    <h2 className="text-[28px] font-medium text-white mt-1">
                      Execution
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[19px] leading-[27px] font-normal text-[#FFFFFF] mt-1">
                      We don’t just hit publish. We build content that can be
                      repurposed across paid campaigns, email, social channels,
                      organic search, sales enablement, and more—extending reach
                      and maximizing ROI. You get a cross-functional team that
                      executes quickly and reliably.
                    </p>
                  </div>
                </div>

                <div className="w-full lg:w-[5%] h-auto hidden lg:block"></div>

                <div className="w-full lg:w-[45%] h-auto pt-10 lg:pt-75">
                  <div className="w-full h-auto bg-[#1F3343] p-7">
                    <h3 className="text-[16px] capitalize font-medium text-[#CEFD94]">
                      STEP 2
                    </h3>
                    <h2 className="text-[28px] font-medium text-white mt-1">
                      Audience & Channel Insights
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[19px] leading-[27px] font-normal text-[#FFFFFF] mt-1">
                      Who are we trying to reach—and where do they engage? We
                      analyze your existing customer data, channel performance,
                      and content footprint to surface actionable insights about
                      your strongest audience segments and how they consume
                      information.
                    </p>
                  </div>
                  <div className="w-full h-auto bg-[#1F3343] p-7 mt-10 md:mt-75">
                    <h3 className="text-[16px] capitalize font-medium text-[#CEFD94]">
                      STEP 4
                    </h3>
                    <h2 className="text-[28px] font-medium text-white mt-1">
                      Content Strategy Development
                    </h2>
                    <p className="text-[16px] sm:text-[18px] md:text-[19px] leading-[27px] font-normal text-[#FFFFFF] mt-1">
                      We develop a content marketing strategy tailored to your
                      business, including campaign themes, content types,
                      channel plans, and production timelines. Every piece is
                      mapped to specific funnel stages and distribution
                      pathways.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-[16px] mt-7 capitalize text-center font-medium text-[#CEFD94]">
                STEP 6
              </h3>
              <h2 className="text-[28px] mt-1 text-center font-medium text-white">
                Repeat!
              </h2>

              <div className="flex items-center justify-center pt-4">
                <Link to="/get-started-with-tuff">
                  <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                    Let’s Talk
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-1">
          <div className="w-full h-auto mt-20 sm:mt-20 md:mt-16 lg:mt-35 px-4 sm:px-6 md:px-8 lg:pl-19 flex flex-col lg:flex-row gap-10">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[48%] h-auto pt-4 sm:pt-6">
              <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[54px] font-bold text-[#0C2233] leading-[34px] sm:leading-[42px] md:leading-[48px] lg:leading-[60px] mt-4 sm:mt-5 md:mt-6">
                Already have a solid foundation?
              </h1>
              <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] font-extrabold text-[#0C2233] mt-4 sm:mt-5 md:mt-6">
                We implement 30, 60, and 90-day check ins on all content.
              </p>
              <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                With an updated keyword strategy and fresh goals, we can conduct
                a content audit to identify diamonds in the rough.
              </p>
              <Link to="/get-started-with-tuff">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-6 md:mt-7 lg:mt-9 p-2 sm:p-3 bg-[#ceff2a] px-5 sm:px-6 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let’s Talk!
                </button>
              </Link>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[50%] mt-6 lg:mt-0 px-4 sm:px-10 md:px-14 flex items-center justify-center">
              <img
                src={found}
                alt="found"
                className="w-[80%] sm:w-[70%] md:w-[65%] lg:w-[65%] h-auto object-contain"
              />
            </div>
          </div>

          <div className="w-full flex items-center flex-col pt-20 sm:pt-24 md:pt-28">
            <img src={star1} alt="star1" className="w-14 sm:w-16 md:w-20" />
            <p className="bg-[#CEFD94] text-[#0C2233] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] font-semibold mt-6 px-4 text-center">
              “Very knowledgeable team at Tuff – fast moving with a get it done
              attitude
            </p>
            <p className="text-[#0C2233] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] font-semibold mt-5 px-4 text-center lg:w-[65%]">
              Looking forward to a continue partnership and future success.”
            </p>
            <h1 className="text-[#0C2233] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mt-3 text-center">
              Lil Roberts
            </h1>
            <p className="text-[14px] sm:text-[16px] lg:text-[20px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[20px] sm:leading-[22px] lg:leading-[25px] lg:w-[55%] lg:mt-0">
              Founder of Xendoo
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-20 flex items-center flex-col">
          <h2 className="text-[28px] text-[#0C2233] text-center mt-4 px-4 font-extrabold w-full lg:text-[42px] lg:w-[45%]">
            Why Tuff
          </h2>
          <p className="text-[16px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[51%] lg:mt-5 lg:leading-[25px]">
            We know how to give your unique voice a megaphone that helps the
            right people find you and keep you top-of-mind.
          </p>

          <div className="w-full h-auto pt-13 px-6 sm:px-10 md:px-14 lg:px-19 pb-30 flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start">
            <div className="w-full lg:w-[31.5%] h-auto pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Blackboard} alt="Blackboard" />
              <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                Strategy meets execution
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                We show our work. You’ll stay in the loop on deliverables,
                implementation, and optimizations.
              </p>
            </div>

            <div className="w-full lg:w-[31.5%] h-auto pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Award} alt="Award" />
              <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                Clearly defined goals
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                What exactly are you hoping to accomplish? Let’s do it!
              </p>
            </div>

            <div className="w-full lg:w-[31.5%] h-auto pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={List} alt="List" />
              <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                Effective communication
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                Get access to all the Tuff tools. No behind-the-curtain magic
                here!
              </p>
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
                  className={`py-4 sm:py-5 md:py-6 ${isFirst ? "border-t border-black" : ""
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

      <section className="w-full h-[82vh]">
        <div className="w-full md:w-[45%] lg:w-[62%] m-auto h-full flex flex-col justify-center items-center text-center px-4 lg:px-0">
          <h2 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px] font-extrabold leading-none md:leading-[50px] text-[#0C2233]">
            Hire us to be your plug-in content marketing team.
          </h2>
          <p className="text-[16px] text-center w-full px-0 md:px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:mt-5 lg:leading-[25px]">
            We love to talk about how we can help your business grow. But, a
            great partnership is also about people. Ready to learn more about
            the Tuff way?
          </p>
          <Link to="/get-started-with-tuff">
            <button className="text-[#0C2233] cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-6 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
              Book a Call
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
