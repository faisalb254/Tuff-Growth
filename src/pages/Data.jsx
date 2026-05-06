import React from "react";
import Navbar from "../components/NavbarNew";
import Datahead from "../assets/Datahead.png";
import Datahead1 from "../assets/Datahead1.png";
import DataImg1 from "../assets/DataImg1.png";
import Search from "../assets/search.svg";
import Set from "../assets/Set.svg";
import Report from "../assets/Not.svg";
import Pencil from "../assets/Pencil.svg";
import Anal from "../assets/Anal.svg";
import Wheel from "../assets/Wheel.svg";
import Reposts from "../assets/Reposts.png";
import { BiChevronRight } from "react-icons/bi";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FinalSection from "../components/FinalSection";

export default function Data() {
  const box = {
    heading: "Get More From the Traffic You’re Already Driving",
    para: ["If traffic is flowing but results feel unclear, the issue isn’t volume — it’s visibility. A customer-first, data-driven measurement approach reveals where growth is happening and where it’s being lost.","Start with clarity. Scale with confidence."],
    button: "Book a strategy call"
  }
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full h-auto pb-10 Croline pt-1">
          <div className="w-full h-auto max-w-[1700px] mx-auto md:mt-16 px-25 min-[120rem]:px-0 flex flex-col lg:flex-row">
            <div className="w-full lg:w-[58%] h-auto pt-0">
              <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-16 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                DATA
              </div>
              <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-semibold text-[#0C2233] leading-[32px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-6 text-left">
                Analytics Built Around the Metrics That Actually Matter
              </h1>
              <p className="text-[15px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Growth decisions become harder when data is fragmented or unclear. Customized analytics frameworks bring clarity to brand, performance, and revenue metrics — helping understand what’s working, what isn’t, and where to focus next.
              </p>
              <p className="text-[15px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Clear measurement removes guesswork and turns insights into action.
              </p>
              <Link to="/get-started-with-havit-growth">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let’s Talk
                </button>
              </Link>
            </div>
            <div className="w-full h-auto sm:w-[80%] md:w-[60%] lg:w-[42%] flex items-center justify-center mt-8 lg:mt-0">
              <img
                src={Datahead}
                alt="Datahead"
                className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%]"
              />
            </div>
          </div>
          <div className="w-full h-auto">
            <div className="w-full px-4 sm:px-6 md:px-12 lg:w-[64%] lg:m-auto pt-20 flex items-center flex-col">
              <h2 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[54px] text-center font-semibold text-[#0C2233] leading-[32px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-6">
                Custom Reporting That Powers Smarter Marketing Decisions
              </h2>
              <p className="text-[15px] sm:text-[18px] md:text-[20px] text-center w-full sm:w-[90%] md:w-[84%] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Raw data alone doesn’t drive growth — interpretation does. Strategic reporting transforms numbers into clear direction, enabling better budget allocation, sharper execution, and more confident decision-making across channels.
              </p>
              <p className="text-[15px] sm:text-[18px] md:text-[20px] text-center w-full sm:w-[90%] md:w-[84%] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                When reporting aligns with business goals, marketing becomes measurable and scalable.
              </p>
              <img
                src={Datahead1}
                alt="Datahead1"
                className="mt-5 w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto"
              />
              <Link to={"/our-company"}>
                <button className="flex items-center gap-1 text-[14px] sm:text-[18px] lg:text-[20px] font-semibold text-[#0C2233] hover:text-[#FF6A39] rounded-md transition-transform duration-500 tilt-zoom mt-4">
                  See how the process works
                  <span>
                    <BiChevronRight className="text-[20px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto Dataline pb-20 mt-20 px-4 sm:px-6 md:px-10 lg:px-40 flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="w-full lg:w-[50%] h-auto pt-10 lg:pt-26 max-w-[850px] ">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold text-left text-[#FFFEFB]">
              Turning Complex Data Into Clear Insight
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium text-[#FFFEFB] mt-2">
              Tracking metrics only matters when they’re easy to understand and act on. Full-funnel visibility helps connect traffic, engagement, and conversion data into a single growth narrative.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium text-[#FFFEFB] mt-6">
              Cross-channel collaboration ensures insights don’t live in silos — SEO, Paid Media, Social, and Creative performance are viewed together to uncover real opportunities.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium text-[#FFFEFB] mt-6">
              Transparent reporting keeps teams aligned and focused on outcomes, not vanity metrics.
            </p>
          </div>
          <div className="w-full lg:w-[50%] max-w-[850px] h-auto flex items-center justify-center">
            <img
              src={DataImg1}
              alt="DataImg1"
              loading="lazy"
              className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1700px] mx-auto min-[120rem]:px-0 h-auto flex items-center flex-col pt-20 px-4 sm:px-6 md:px-10 lg:px-0">
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-center text-[#0C2233] w-full sm:w-[80%] md:w-[65%] lg:w-[50%] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[40px]">
            A Structured Approach to Measurement
          </h2>
          <Link to="/get-started-with-havit-growth">
            <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
              Let’s Talk
            </button>
          </Link>

          <div className="w-full h-auto pt-9 px-4 sm:px-6 md:px-10 lg:px-19 pb-30 flex flex-col flex-wrap lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Search} alt="Search" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Identify the Right Attribution Model
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Attribution is tailored to business goals, sales cycles, and customer touchpoints — ensuring credit is assigned where it actually belongs.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Set} alt="Set" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Review GA4 and Existing Tracking
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Analytics setups are audited to ensure accuracy across platforms, tools, and conversion events.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Report} alt="Report" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Build Custom Dashboards & Reports
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Reports are designed around how teams actually consume data — simple, visual, and aligned with decision-making.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Pencil} alt="Pencil" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Implement Insights Across Channels
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Data informs execution. Insights are applied across performance channels to improve efficiency and results.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Anal} alt="Anal" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Analyze What’s Working
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Performance trends are reviewed regularly to highlight opportunities, risks, and areas for optimization.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Wheel} alt="Wheel" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Let Data Guide Strategy
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Insights shape next steps, ensuring future decisions are backed by evidence — not assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1700px] mx-auto min-[120rem]:px-0 h-auto pb-20 flex flex-col lg:flex-row px-6 sm:px-10 md:px-20 lg:px-40 gap-10 lg:gap-0">
          <div className="w-full lg:w-[50%] h-auto">
            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold text-[#0C2233] leading-[36px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px] text-left">
              Reporting That Supports Real Decisions
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233] mt-2 leading-[22px] sm:leading-[24px] md:leading-[26px]">
              Clear dashboards help teams digest performance quickly — whether
              reviewing daily activity or evaluating long-term trends.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[26px]">
              Reports are built to:
            </p>
            <ul className="list-disc list-inside text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233] mt-4 leading-[28px] sm:leading-[32px] md:leading-[36px]">
              <li>Track progress against goals</li>
              <li>Highlight channel-level performance</li>
              <li>Support weekly, monthly, and quarterly reviews</li>
              <li>Keep stakeholders aligned and informed</li>
            </ul>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[26px]">
              Data becomes easier to trust when it's easy to understand.
            </p>
          </div>
          <div className="w-full lg:w-[50%] h-auto flex items-center justify-center">
            <img
              src={Reposts}
              alt="Reposts"
              loading="lazy"
              className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] shadow-md"
            />
          </div>
        </div>
      </section>

      <FinalSection text={box} />
      <Footer />
    </>
  );
}

