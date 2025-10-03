import React from "react";
import Navbar from "../components/Navbar";
import CroHead from "../assets/CroHead.png";
import CroImg from "../assets/CroImg.png";
import Seo1 from "../assets/Seo1.svg";
import phase from "../assets/phase.png";
import star1 from "../assets/star1.svg";
import VPBrad from "../assets/VPBrad.png";
import { CiSearch } from "react-icons/ci";
import { GrTest } from "react-icons/gr";
import { IoMdShare } from "react-icons/io";
import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";
import soonamedia from "../assets/soonamedia.jpg";
import soona from "../assets/soona.svg";
import palmetto from "../assets/koji.png";
import pal from "../assets/soona.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FinalSection from "../components/FinalSection";

export default function Cro() {
  const box = {
        heading: "Get more out of the traffic you’re already working hard to get.",
        para: ["Let’s talk about how we can optimize your funnel with a customer-first, data-driven approach."],
        button: "Book a strategy call"
    }
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full h-auto md:h-[110vh] Croline pt-1">
          <div className="w-full h-auto mt-30 md:mt-20 lg:mt-35 px-4 sm:px-6 md:px-12 lg:pl-19 flex flex-col lg:flex-row">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[48%] h-auto pt-0">
              <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-5 mt-22 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                CONVERSION RATE OPTIMIZATION
              </div>
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-semibold text-[#0C2233] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-7">
                Turn more traffic into dollars with full-funnel conversion rate
                optimization.
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[24px] font-normal text-[#0C2233] mt-8 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Team up with an experimentation-obsessed bunch of experts who
                thrive on helping you get more revenue out of the traffic you
                already have.
              </p>
              <Link to="/get-started-with-tuff">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let’s Talk
                </button>
              </Link>
            </div>
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mt-6 lg:mt-0 px-10 md:px-20 flex items-center justify-center">
              <img src={CroHead} alt="CroHead" className="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto Croline2 pb-20 pt-1 flex items-center flex-col">
          <h2 className="text-[24px] text-center mt-10 px-4 font-semibold text-[#FFFFFF] lg:text-[42px]">
            Download a Sample SEO Audit
          </h2>
          <p className="text-[15px] text-center w-full px-4 font-normal text-[#FFFFFF] mt-4 leading-[22px] lg:text-[20px] lg:w-[55%] lg:mt-3 lg:leading-[25px]">
            With an initial SEO audit, we identify and prioritize technical and
            on-page issues that can affect your website’s search engine
            rankings, user experience, and overall organic performance. Download
            a sample SEO audit to get a sneak peek at what an initial audit
            looks like from Tuff.
          </p>

          <div className="w-full flex flex-col gap-4 px-4 mt-8 lg:flex-row lg:px-65 lg:gap-0 lg:justify-between">
            <input
              type="text"
              placeholder="First Name"
              className="border border-black bg-white rounded-[3px] outline-none py-3 pl-4 placeholder:text-[#CED2D5] w-full lg:w-[25%]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-black bg-white rounded-[3px] outline-none py-3 pl-4 placeholder:text-[#CED2D5] w-full lg:w-[25%]"
            />
            <input
              type="email"
              placeholder="Work Email"
              className="border border-black bg-white rounded-[3px] outline-none py-3 pl-4 placeholder:text-[#CED2D5] w-full lg:w-[25%]"
            />
            <button className="bg-[#ceff2a] text-[#0C2233] text-base font-semibold w-full lg:w-[20%] rounded-[3px] py-3">
              Submit
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pb-10 pt-20 px-4 sm:px-10 md:px-18">
          <div className="flex flex-col-reverse lg:flex-row justify-between mt- gap-6">
            <div className="w-full lg:w-[50%] flex items-center justify-center pt-10 pl-0 lg:pl-4">
              <img src={Seo1} alt="Seo1" className="w-[100%]" />
            </div>
            <div className="w-full lg:w-[47.5%] h-auto pt-1">
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-extrabold md:leading-[50px] text-[#0c2233] mt-10 lg:mt-22">
                Conversion isn’t a one and done event.
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-10">
                It’s more like a process—stacked with multiple touch points
                across your entire funnel. Each plays their own role in driving
                conversion rates. While other agencies focus their CRO efforts
                on landing pages, we optimize across your entire funnel using a
                customer-focused approach that puts the right message in front
                of the right person at the right time.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-10 gap-6">
            <div className="w-full lg:w-[50%] h-auto pt-1">
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-extrabold md:leading-[50px] text-[#0c2233] mt-10 lg:mt-22">
                Small tests, BIG results
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                We’ve built a battle-tested process for full funnel conversion
                rate optimization that improves each step of the funnel. Using
                modern frameworks and the right mix of deep specialism and
                integrated thinkers, we achieve this by taking a systematic
                approach to testing and experimentation that decreases drop-off
                rates while raising the lid on scale potential.
              </p>
            </div>
            <div className="w-full lg:w-[50%] flex items-center justify-center pt-8 pl-0 lg:pl-4">
              <img src={phase} alt="phase" className="w-[100%]" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto croline3 pb-10 flex flex-col items-center justify-center pt-10 px-4 lg:px-[100px]">
          <p className="bg-[#CEFD94] text-[#0C2233] text-[18px] font-semibold mt-7 px-4 text-center lg:text-[26px]">
            “Tuff is an amazing team, extremely organized, and
          </p>
          <p className="bg-[#CEFD94] text-[#0C2233] text-[18px] font-semibold mt-1 px-4 text-center lg:text-[26px]">
            driven to produce results!
          </p>
          <p className="text-[#FFFFFF] text-[18px] font-semibold mt-5 px-4 text-center lg:text-[26px] w-full lg:w-[57%]">
            We have churned through multiple agencies in our lifetime, and have
            been so impressed by Tuff.”
          </p>
          <img src={star1} alt="star1" className="mt-14 lg:mt-20" />
          <h1 className="text-[#FFFFFF] text-[16px] font-semibold mt-3 text-center lg:text-[20px]">
            Brad Veach
          </h1>
          <p className="text-[15px] text-center px-4 font-normal text-[#FFFFFF] mt-4 leading-[22px] lg:text-[20px] lg:w-[55%] lg:mt-0 lg:leading-[25px]">
            VP of Marketing at THNKS
          </p>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-1 pb-10">
          <div className="w-[90%] md:w-[70%] lg:w-[50%] m-auto">
            <div className="h-auto m-auto py-2 md:h-[39px] md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-4 md:px-5 mt-10 text-xs sm:text-sm font-semibold tracking-[1px] text-[#0C2233] whitespace-normal w-fit">
              HOW IT WORK
            </div>
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold text-[#0C2233] text-center mt-6 sm:mt-7 md:mt-8 leading-[34px] sm:leading-[42px] md:leading-[48px] lg:leading-[50px]">
              How we can help you hit your conversion rate optimization goals
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] text-center font-normal text-[#0C2233] mt-6 sm:mt-7 md:mt-8 leading-[22px] sm:leading-[24px] md:leading-[25px]">
              We build effective landing pages, webpages, and product flow
              iterations. Then we carry out data-driven A/B tests to verify that
              we’re significantly growing conversions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-1">
          <div className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-40 flex flex-col lg:flex-row">
            {/* Text Section */}
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[48%] h-auto pt-0">
              <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-4 sm:px-5 mt-10 lg:mt-22 text-xs sm:text-sm font-semibold tracking-[1px] text-[#0C2233] whitespace-normal w-fit">
                OUR APPROACH
              </div>

              <h1 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold text-[#0C2233] leading-[34px] sm:leading-[40px] md:leading-[42px] lg:leading-[45px] mt-6">
                We don’t believe in guessing. We believe in creating lift.
              </h1>

              <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] font-normal text-[#0C2233] mt-6 md:mt-10 lg:mt-12 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                All CRO work starts with a meeting of the data-driven minds—a
                CRO Strategist, a UX Copywriter, a UX Web Designer, and a
                Developer. Together, the team works with you to identify the
                money leaks in your funnel and execute on key optimizations
                following a methodical, scientific process.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[50%] mt-8 lg:mt-0 px-4 sm:px-10 md:px-20 lg:px-25 flex items-center justify-center">
              <img
                src={CroImg}
                alt="CroImg"
                className="w-full h-auto max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-1 pb-10">
          {/* Top Text Block */}
          <div className="w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] m-auto">
            <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-4 sm:px-5 mt-10 lg:mt-22 text-xs sm:text-sm font-semibold tracking-[1px] text-[#0C2233] w-fit m-auto">
              HOW IT WORK
            </div>
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold text-[#0C2233] text-center mt-6 sm:mt-7 md:mt-8 leading-[32px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px]">
              Audits & Clean Up
            </h2>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[19px] text-center font-normal text-[#0C2233] mt-5 sm:mt-6 md:mt-8 leading-[22px] sm:leading-[24px] md:leading-[25px]">
              We take a look at your current funnel to identify what’s working
              and what’s not. We clean up your analytics, streamline reporting,
              and make sure the proper data collection tools are in place.
            </p>
          </div>

          {/* 3-Column Section */}
          <div className="w-full h-auto pt-10 px-4 sm:px-6 md:px-10 lg:px-19 pb-20 flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start">
            {/* Card 1 */}
            <div className="w-full lg:w-[31.5%] h-auto border-2 border-[#E0E0E0] rounded-[3px] p-5 sm:p-6 md:p-7 px-6 sm:px-7 md:px-8">
              <CiSearch size={50} className="mx-auto lg:mx-0" />
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#0C2233] mt-6 text-center lg:text-left">
                Research & Synthesis
              </h2>
              <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] text-center lg:text-left">
                We dive into your audience to understand what drives, stops, and
                persuades them to act. We distill our research into hypotheses
                and prioritize those that will create the biggest lift.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full lg:w-[31.5%] h-auto border-2 border-[#E0E0E0] rounded-[3px] p-5 sm:p-6 md:p-7 px-6 sm:px-7 md:px-8 lg:pb-9">
              <GrTest size={45} className="mx-auto lg:mx-0" />
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#0C2233] mt-6 text-center lg:text-left">
                Testing & Analysis
              </h2>
              <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] text-center lg:text-left">
                A/B tests are methodically planned, designed, and run. Based on
                the results, we make strategic recommendations to improve
                conversion rates at every touchpoint.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full lg:w-[31.5%] h-auto border-2 border-[#E0E0E0] rounded-[3px] p-5 sm:p-6 md:p-7 px-6 sm:px-7 md:px-8 lg:pb-15">
              <IoMdShare size={45} className="mx-auto lg:mx-0" />
              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-[#0C2233] mt-6 text-center lg:text-left">
                Implement & Test Again
              </h2>
              <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] text-center lg:text-left">
                With changes made, we start again—focusing on value prop,
                landing page redesign, or funnel structure to convert more of
                the traffic you already have.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto Croline2 pb-10 flex flex-col items-center justify-center pt-10 px-4 sm:px-6 md:px-10 lg:px-65">
          <img src={star1} alt="star1" className="mt-14 sm:mt-16 md:mt-20" />

          <p className="bg-[#CEFD94] text-[#0C2233] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mt-7 px-4 text-center lg:text-[26px]">
            “I view our partnership with Tuff as more like an extension of my
            team.
          </p>

          <p className="text-[#FFFFFF] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mt-5 px-4 text-center lg:text-[26px]">
            We strategize together, ask tough questions, examine the results,
            optimize – and it just keeps getting better. Exactly what I was
            looking for.”
          </p>

          <img src={VPBrad} alt="VPBrad" className="mt-10 sm:mt-12 md:mt-14" />

          <h1 className="text-[#FFFFFF] text-[16px] sm:text-[17px] md:text-[18px] font-semibold mt-3 text-center lg:text-[20px]">
            Brad Veach
          </h1>

          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-center px-4 sm:px-6 font-normal text-[#FFFFFF] mt-6 leading-[22px] lg:text-[20px] lg:w-[55%] lg:mt-0 lg:leading-[25px]">
            VP of Marketing at THNKS
          </p>
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

      <FinalSection text={box}/>
      <Footer />
    </>
  );
}
