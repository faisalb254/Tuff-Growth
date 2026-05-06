import React from "react";
import Navbar from "../components/NavbarNew";
import CaseStudiesPoster from "../components/CaseStudiesPoster";
import { BiChevronRight } from "react-icons/bi";
import acres from "../assets/acres.jpg";
import acreslogo from "../assets/acres-logo.svg";
import starri from "../assets/starri.jpg";
import starrilogo from "../assets/starrilogo.svg";
import { FaArrowUp } from "react-icons/fa";
import CreativeTeam from "../assets/Creativeteam.jpg";
import creativefooter from "../assets/creativefooter.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import media7 from "../assets/creativeimg1.jpeg";
import media8 from "../assets/creativeimg2.jpeg";

export default function creative() {
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section>
        <div className="w-full max-w-[1700px] mx-auto px-25 min-[120rem]:px-0 h-auto sm:pt-[70px]">
          <div className="flex flex-col lg:flex-row">
            <div className="order-2 sm:order-1 w-full lg:w-[60%] h-auto mt-[30px] sm:mt-[40px] lg:mt-0 pt-[30px] sm:pt-[40px] lg:pt-[80px] ">
              <div className="h-auto md:h-[39px] py-[6px] sm:py-[8px] md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-4 sm:px-5 mt-[10px] sm:mt-[15px] lg:mt-4 text-[12px] sm:text-[14px] lg:text-sm font-semibold tracking-[1px] sm:tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                CREATIVE
              </div>

              <h2 className="text-[20px] xs:text-[24px] sm:text-[32px] md:text-[36px] lg:text-[56px] font-semibold text-[#0C2233] w-full lg:w-[90%] leading-tight lg:leading-[60px] mt-[20px] sm:mt-[25px] lg:mt-6 md:tracking-[-1.5px] lg:tracking-[-2.5px] text-left">
                …but is your creative actually delivering results?
              </h2>

              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[20px] sm:mt-[25px] lg:mt-7 leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[80%]">
                Campaigns can be optimized, budgets can be adjusted, and data
                can be tracked — but performance stalls when creative isn't
                built to convert. When messaging, visuals, and intent don't
                align, growth becomes harder and more expensive.
              </p>
              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[16px] sm:mt-[20px] leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[80%]">
                Creative should do more than look good. It should move users
                toward action.
              </p>
              <Link to="/get-started-with-havit-growth">
                <button className="text-[14px] sm:text-[18px] lg:text-[20px] font-extrabold text-[#0C2233] bg-[#ceff2a] mt-[20px] sm:mt-[25px] lg:mt-5 px-[20px] sm:px-[30px] lg:px-8 py-[12px] sm:py-[16px] lg:py-5 rounded-md transition-transform duration-500 tilt-zoom">
                  Let's Talk
                </button>
              </Link>
            </div>

            <div className="order-1 sm:order-2 hidden lg:flex w-full lg:w-[40%] h-auto pt-[60px] sm:pt-[70px] lg:pt-[80px] px-4 sm:px-6 lg:px-0 mt-[30px] sm:mt-[40px] lg:mt-0 justify-center items-center">
              <img
                src={media7}
                alt="Creative"
                loading="lazy"
                className="w-[280px] xs:w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] max-w-full"
              />
            </div>
          </div>
        </div>

        {/* Data + Creative Section */}
        <div className="w-full max-w-[1700px] mx-auto h-auto sm:pt-[70px] pb-[60px] lg:pb-[80px] px-2 lg:px-0">
          <div className="flex flex-col lg:flex-row">
            <div className="order-2 sm:order-1 w-full lg:w-[52.7%] h-auto pt-[40px] sm:pt-[50px] lg:pt-[80px] px-4 sm:px-6 lg:px-0 mt-[40px] sm:mt-[60px] lg:mt-0 flex justify-center items-center">
              <img
                src={media8}
                alt="Data and Creative"
                loading="lazy"
                className="w-[280px] xs:w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] max-w-full"
              />
            </div>

            <div className="order-1 sm:order-2 w-full lg:w-[47.3%] h-auto mt-[30px] sm:mt-[40px] lg:mt-0 pt-[30px] sm:pt-[40px] lg:pt-[80px]">
              <h2 className="text-[20px] xs:text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-[#0C2233] w-full lg:w-[90%] leading-tight lg:leading-[60px] mt-[20px] sm:mt-[30px] lg:mt-[40px] md:tracking-[-1.5px] lg:tracking-[-2.5px]">
                Where Data and Creative Work Together
              </h2>

              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[20px] sm:mt-[24px] lg:mt-[32px] leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[80%]">
                High-performing creative doesn't rely on guesswork. Insights
                from performance data shape messaging, formats, and visuals —
                ensuring every asset is built with a clear purpose.
              </p>

              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[16px] sm:mt-[20px] lg:mt-[24px] leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[80%]">
                When creative decisions are informed by real user behavior,
                results become predictable and scalable.
              </p>

              <button className="flex items-center gap-1 text-[14px] sm:text-[18px] lg:text-[20px] font-semibold text-[#0C2233] hover:text-[#FF6A39] mt-[20px] sm:mt-[24px] lg:mt-[32px] rounded-md transition-transform duration-500 tilt-zoom">
                Learn more about the creative process
                <span>
                  <BiChevronRight className="text-[20px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full h-auto mt-9 homeImg2 flex items-center flex-col pt-[98px] pb-16">
        <div className="h-[40px] w-max p-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
          CASE STUDIES
        </div>

        <h2 className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#FFFEFB] leading-snug lg:leading-[3.5rem] mt-4 text-center">
          Proof That Performance-Led Creative Works
        </h2>

        <p className="text-[16px] lg:text-[20px] font-normal text-[#FFFEFB] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[52%] text-center mt-4">
          Results speak louder than visuals alone. Creative built around
          audience insight and business objectives consistently drives stronger
          engagement, higher-quality traffic, and better conversion outcomes.
        </p>
        <p className="text-[16px] lg:text-[20px] font-normal text-[#FFFEFB] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[52%] text-center mt-2">
          Case studies demonstrate how the right creative approach supports
          measurable growth across industries.
        </p>

        <CaseStudiesPoster /> 

        <Link to={"/portfolios"}>
          <div className="w-max px-6 py-2 border-2 border-white text-[#FFFEFB] text-[18px] lg:text-[20px] font-semibold m-auto mt-10 transition-transform duration-500 tilt-zoom">
            View case studies
          </div>
        </Link>
      </section>

      {/* Revenue-Driven Creative Section */}
      <section>
        <div className="w-full max-w-[1700px] mx-auto min-[120rem]:px-0 h-auto pt-[60px] sm:pt-[70px] lg:pt-[80px] pb-[60px] lg:pb-[80px] px-2 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-center px-4 sm:px-10 md:px-20 lg:px-40 gap-y-10 lg:gap-y-0">
            <div className="w-full lg:w-max h-auto mt-[30px] sm:mt-[40px] lg:mt-0 pt-[30px] sm:pt-[40px] lg:pt-[80px]">
              <h2 className="text-[20px] xs:text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-[#0C2233] w-full lg:w-[90%] leading-tight lg:leading-[50px] mt-[20px] sm:mt-[30px] lg:mt-[140px] md:tracking-[-1.5px] lg:tracking-[-2.5px]">
                Yes — Creative Can Be a Revenue Driver
              </h2>
              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[20px] sm:mt-[24px] lg:mt-[17px] leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[90%]">
                Creative has the power to influence every stage of the funnel.
                From awareness to conversion, strong assets reduce friction,
                build trust, and increase response rates.
              </p>
              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[16px] sm:mt-[20px] leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[90%]">
                When creative aligns with intent, it stops being an expense —
                and starts contributing directly to revenue.
              </p>
            </div>

            <div className="w-full lg:w-[52.7%] h-auto pt-[40px] sm:pt-[50px] lg:pt-[80px] px-4 sm:px-6 lg:px-0 mt-[40px] sm:mt-[60px] lg:mt-0 flex justify-center items-center">
              <img
                src={media7}
                alt="Revenue Creative"
                loading="lazy"
                className="w-[280px] xs:w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section>
        <div className="MediaProcessLine w-full h-auto pt-4 pb-20">
          <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-24 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
            OUR PROCESS
          </div>
          <h2 className="text-[44px] font-semibold text-white text-center mt-2">
            Great Assets, Built the Right Way
          </h2>

          <div className="w-full h-auto pt-1">
            <div className="w-[95%] md:w-[80%] lg:w-[66%] h-auto mt-13 pb-10 m-auto space-y-10 lg:space-y-0">
              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto pb-20"></div>
                <div className="w-full lg:w-[47.3%] h-auto pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28 flex gap-4">
                  <span>1.</span>
                  <div>
                    <p>Understand the Brand & Audience</p>
                    <p className="text-[20px] font-medium text-white leading-[25px] mt-2">
                      Clarity comes first. Understanding positioning, customer
                      motivations, and competitive landscape ensures messaging
                      resonates from the start.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28">
                  <div className="flex gap-4">
                    <span>2.</span>
                    <div>
                      <p>Develop Strategic Creative Concepts</p>
                      <p className="text-[20px] font-medium text-white leading-[25px] mt-2">
                        Creative ideas are shaped around objectives — not
                        trends. Every concept supports a specific goal within
                        the funnel.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[47.3%] h-auto pb-20"></div>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto pb-20"></div>
                <div className="w-full lg:w-[47.3%] h-auto pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28">
                  <div className="flex gap-4">
                    <span>3.</span>
                    <div>
                      <p>Produce and Launch Assets</p>
                      <p className="text-[20px] font-medium text-white leading-[25px] mt-2">
                        Execution focuses on quality, consistency, and
                        adaptability across platforms and formats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28">
                  <div className="flex gap-4">
                    <span>4.</span>
                    <div>
                      <p>Iterate Based on Performance</p>
                      <p className="text-[20px] font-medium text-white leading-[25px] mt-2">
                        Performance feedback informs refinement. Winning
                        elements are scaled, underperforming ones are improved
                        or replaced.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[47.3%] h-auto pb-20"></div>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto pb-20"></div>
                <div className="w-full lg:w-[47.3%] h-auto pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28">
                  <div className="flex gap-4">
                    <span>5.</span>
                    <div>
                      <p>Analyze and Optimize</p>
                      <p className="text-[20px] font-medium leading-[25px] mt-2">
                        Insights are documented, tested, and applied — turning
                        creative into a continuously improving growth lever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center pt-6">
                <Link to="/get-started-with-havit-growth">
                  <button className="text-[#0C2233] cursor-pointer rounded-[4px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-6 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 transition-transform duration-500 tilt-zoom">
                    Let's Talk
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section>
        <div className="w-full max-w-[1700px] mx-auto min-[120rem]:px-0 h-auto pt-1">
          <div className="w-[95%] lg:w-[79%] h-auto pb-2 m-auto mt-10 lg:mt-27">
            <div className="w-full h-auto flex flex-col items-center text-center">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[44px] font-semibold text-[#0c2233] leading-[38px] sm:leading-[44px] lg:leading-[50px]">
                Built for the Platforms That Matter
              </h2>
              <p className="text-[16px] sm:text-[18px] lg:text-[19px] font-normal text-black mt-5 leading-[25px] max-w-[80%]">
                Creative is designed to perform across today's most influential
                channels — ensuring format, tone, and pacing align with how
                users actually consume content.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <span className="px-5 py-2 bg-[#0C2233] text-white rounded-full text-[15px] font-semibold">
                  YouTube
                </span>
                <span className="px-5 py-2 bg-[#0C2233] text-white rounded-full text-[15px] font-semibold">
                  TikTok
                </span>
                <span className="px-5 py-2 bg-[#0C2233] text-white rounded-full text-[15px] font-semibold">
                  Facebook
                </span>
                <span className="px-5 py-2 bg-[#0C2233] text-white rounded-full text-[15px] font-semibold">
                  Instagram
                </span>
                <span className="px-5 py-2 bg-[#0C2233] text-white rounded-full text-[15px] font-semibold">
                  Twitter/X
                </span>
                <span className="px-5 py-2 bg-[#0C2233] text-white rounded-full text-[15px] font-semibold">
                  Reddit
                </span>
                <span className="px-5 py-2 bg-[#0C2233] text-white rounded-full text-[15px] font-semibold">
                  and more
                </span>
              </div>
            </div>

            {/* Team Section */}
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-8 mt-20">
              <div className="w-full lg:w-[47.3%] h-auto pb-10 lg:pb-20">
                <img
                  src={CreativeTeam}
                  alt="CreativeTeam"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="w-full lg:w-[47.5%] h-auto pb-10 lg:pb-20">
                <div className="h-auto mt-8 lg:mt-0">
                  <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-semibold text-[#0C2233] leading-tight lg:leading-[50px] mt-[20px] sm:mt-[30px] lg:mt-[120px] tracking-tight md:tracking-[-1.5px] lg:tracking-[-2.5px]">
                    Meet the Creative Team Behind the Work
                  </h2>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#0C2233] mt-5 leading-[26px]">
                    Behind every asset is a team focused on clarity,
                    consistency, and performance. Designers, strategists, and
                    copy specialists collaborate to build creative that supports
                    growth — not just aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="w-[95%] lg:w-[90%] h-auto m-auto pb-10 mt-10">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold text-center text-[#0c2233] leading-[38px] sm:leading-[46px] lg:leading-[50px]">
              Customized Creative Plans
            </h2>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-[#0c2233] text-center mt-5 max-w-[800px] mx-auto leading-[26px]">
              Providing targeted flexible monthly plans, according to niche and
              your needs, making it easier for growing teams to access
              consistent, high-quality creative without suffering with fixed
              price tags.
            </p>

            <div className="flex justify-center mt-10">
              <Link to="/get-started-with-havit-growth">
                <button className="text-[#0C2233] cursor-pointer rounded-[4px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 transition-transform duration-500 tilt-zoom">
                  Let's Start
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="w-full h-auto bg-[#0C2233] pt-20 flex flex-col justify-center items-center">
        <div className="w-full lg:w-[60%] px-4 lg:px-0 m-auto h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[46px] font-extrabold text-[#FFFFFF]">
            At the End of the Day, Creative Should Feel Effortless
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-center font-medium mt-3 text-[#FFFFFF]">
            When strategy is clear and execution is aligned, creative stops
            feeling complicated. The right process turns ideas into assets — and
            assets into results.
          </p>
          <Link to="/get-started-with-havit-growth">
            <button className="text-[#0C2233] cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-6 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
              Let's Talk
            </button>
          </Link>
        </div>
        <img
          src={creativefooter}
          alt="creativefooter"
          className="w-full lg:w-auto mt-10"
        />
      </section>

      <Footer />
    </>
  );
}
