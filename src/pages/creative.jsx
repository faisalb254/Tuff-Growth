import React from "react";
import Navbar from "../components/Navbar";
import { BiChevronRight } from "react-icons/bi";
import acres from "../assets/acres.jpg";
import acreslogo from "../assets/acres-logo.svg";
import starri from "../assets/starri.jpg";
import starrilogo from "../assets/starrilogo.svg";
import { FaArrowUp } from "react-icons/fa";
import CreativeTeam from "../assets/Creativeteam.jpg";
import creativefooter from "../assets/creativefooter.jpg";
import { CiPlay1 } from "react-icons/ci";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import media7 from "../assets/creativeimg1.jpeg"
import media8 from "../assets/creativeimg2.jpeg"

export default function creative() {
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full h-auto sm:pt-[70px]">
          <div className="flex flex-col lg:flex-row">
            <div className="order-2 sm:order-1 w-full lg:w-[60%] h-auto mt-[30px] sm:mt-[40px] lg:mt-0 pt-[30px] sm:pt-[40px] lg:pt-[80px] px-4 sm:px-6 lg:px-[76px]">
              <div className="h-auto md:h-[39px] py-[6px] sm:py-[8px] md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-4 sm:px-5 mt-[10px] sm:mt-[15px] lg:mt-4 text-[12px] sm:text-[14px] lg:text-sm font-semibold tracking-[1px] sm:tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                CREATIVE
              </div>

              <h2 className="text-[20px] xs:text-[24px] sm:text-[32px] md:text-[36px] lg:text-[56px] font-semibold text-[#0C2233] w-full lg:w-[90%] leading-tight lg:leading-[60px] mt-[20px] sm:mt-[25px] lg:mt-6 md:tracking-[-1.5px] lg:tracking-[-2.5px]">
                …but is your creative actually working?
              </h2>

              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[20px] sm:mt-[25px] lg:mt-7 leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[80%]">
                Data. Creative. Most brands keep them completely separate,
                leaning on their creative agency to develop the assets and their
                performance team to launch them. But, what happens when someone
                asks "how's the creative working?" or "which assets should we
                use next?"
              </p>
              <Link to="/get-started-with-tuff">
                <button className="text-[14px] sm:text-[18px] lg:text-[20px] font-extrabold text-[#0C2233] bg-[#ceff2a] mt-[20px] sm:mt-[25px] lg:mt-5 px-[20px] sm:px-[30px] lg:px-8 py-[12px] sm:py-[16px] lg:py-5 rounded-md transition-transform duration-500 tilt-zoom">
                  Let's Talk
                </button>
              </Link>
            </div>

            <div className="order-1 sm:order-2 hidden lg:flex w-full lg:w-[40%] h-auto pt-[60px] sm:pt-[70px] lg:pt-[80px] px-4 sm:px-6 lg:px-0 mt-[30px] sm:mt-[40px] lg:mt-0 justify-center items-center">
              <img
                src={media7}
                alt="media7"
                loading="lazy"
                className="w-[280px] xs:w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] max-w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-auto  sm:pt-[70px]  pb-[60px] lg:pb-[80px] px-2 lg:px-0">
          <div className="flex flex-col lg:flex-row">
            <div className="order-2 sm:order-1 w-full lg:w-[52.7%] h-auto pt-[40px] sm:pt-[50px] lg:pt-[80px] px-4 sm:px-6 lg:px-0 mt-[40px] sm:mt-[60px] lg:mt-0 flex justify-center items-center">
              {/* Image placeholder - responsive sizing */}
              <img
                src={media8}
                alt="media7"
                loading="lazy"
                className="w-[280px] xs:w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] max-w-full"
              />
            </div>

            <div className="order-1 sm:order-2 w-full lg:w-[47.3%] h-auto mt-[30px] sm:mt-[40px] lg:mt-0 pt-[30px] sm:pt-[40px] lg:pt-[80px]">
              <h2 className="text-[20px] xs:text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-[#0C2233] w-full lg:w-[90%] leading-tight lg:leading-[60px] mt-[20px] sm:mt-[30px] lg:mt-[40px] md:tracking-[-1.5px] lg:tracking-[-2.5px]">
                Data + Creative = BFF
              </h2>

              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[20px] sm:mt-[24px] lg:mt-[32px] leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[80%]">
                Our creative team is in the business of designing feedback
                loops, integration, and accountability between creative and
                performance teams so we always know just how well the creative
                is working.
              </p>

              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[16px] sm:mt-[20px] lg:mt-[24px] leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[80%]">
                We believe creative has the power to drive real revenue,
                conversions, and growth. But only when it answers to data.
              </p>

              <button className="flex items-center gap-1 text-[14px] sm:text-[18px] lg:text-[20px] font-semibold text-[#0C2233] hover:text-[#FF6A39] mt-[20px] sm:mt-[24px] lg:mt-[32px] rounded-md transition-transform duration-500 tilt-zoom">
                Learn more about our ad creative process
                <span>
                  <BiChevronRight className="text-[20px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto mt-9 homeImg2 flex items-center flex-col pt-[98px] pb-16">
        <div className="h-[40px] w-max p-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
          CASE STUDIES
        </div>

        <h2 className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#FFFEFB] leading-snug lg:leading-[3.5rem] mt-4 text-center">
          Proof? We got it.
        </h2>

        <p className="text-[16px] lg:text-[20px] font-normal text-[#FFFEFB] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[52%] text-center mt-4">
          From big wins out the gate to strategic, measured long-term results,
          we couldn’t be more excited to talk about our clients’ successes.
        </p>

        <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-8 px-4 sm:px-6 lg:px-19 pt-10 lg:pt-14">
          <div className="w-full lg:w-[48.7%] h-auto px-6 lg:px-12 pt-10 lg:pt-14 cursor-pointer pb-10 lg:pb-14 bg-[#FFFFFF] border border-white rounded-[5px]">
            <img src={acres} alt="acres" loading="lazy" />
            <img
              src={acreslogo}
              alt="acreslogo"
              loading="lazy"
              className="mt-8 filter brightness-0 saturate-100"
            />
            <div className="flex flex-wrap gap-4">
              <div className="bg-black text-white w-max px-[10px] py-2 text-[16px] lg:text-[20px] font-semibold mt-6">
                Data & Analytics
              </div>
              <div className="bg-black text-white w-max px-[10px] py-2 text-[16px] lg:text-[20px] font-semibold md:mt-6">
                Media Strategy & Management
              </div>
            </div>
            <h3 className="text-[16px] lg:text-[20px] font-semibold mt-2 text-black">
              4 min read
            </h3>
            <p className="text-[20px] lg:text-[28px] font-semibold mt-2 leading-7 lg:leading-9 text-[#000000]">
              Scaling Campaigns That Generate High-Value Customers for a Fintech
              Client
            </p>
            <div>
              <div className="w-full border-t-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] mt-9 gap-2 sm:gap-0">
                <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                  <FaArrowUp /> 272%
                </h4>
                <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                  Increase in Active Monthly Subscriptions
                </p>
              </div>
              <div className="w-full border-t-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] gap-2 sm:gap-0">
                <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                  <FaArrowUp /> 45%
                </h4>
                <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                  Increase in Premium Subscriber Growth in Month 1
                </p>
              </div>
              <div className="w-full border-t-2 border-b-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] gap-2 sm:gap-0">
                <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                  <FaArrowUp /> 31%
                </h4>
                <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                  Increase in Lead to Premium Subscriber CVR in Three Months
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[48.7%] h-auto px-6 lg:px-12 pt-10 lg:pt-14 cursor-pointer pb-10 lg:pb-14 bg-[#FFFFFF] border border-white rounded-[5px]">
            <img src={starri} alt="starri" loading="lazy" />
            <img
              src={starrilogo}
              alt="starrilogo"
              loading="lazy"
              className="mt-8 filter brightness-0 saturate-100"
            />
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-black text-white w-max px-[10px] py-2 text-[16px] lg:text-[20px] font-semibold mt-6">
                SEO
              </div>
              <h3 className="text-[16px] lg:text-[20px] font-semibold mt-5 text-[#000000]">
                5 min read
              </h3>
            </div>
            <p className="text-[20px] lg:text-[28px] font-semibold mt-2 leading-7 lg:leading-9 text-[#000000]">
              Achieving a 50% Surge in Organic Traffic within 60 Days, Reducing
              Dependency on Paid Strategies
            </p>
            <div>
              <div className="w-full border-t-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] mt-9 gap-2 sm:gap-0">
                <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                  <FaArrowUp /> 57%
                </h4>
                <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                  Increase in non-branded clicks in 2 months
                </p>
              </div>
              <div className="w-full border-t-2 border-b-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] gap-2 sm:gap-0">
                <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                  <FaArrowUp /> 113k
                </h4>
                <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                  ROI from targeted countries
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link to={"/case-studies"}>
          <div className="w-max px-6 py-2 border-2 border-white text-[#FFFEFB] text-[18px] lg:text-[20px] font-semibold m-auto mt-10 transition-transform duration-500 tilt-zoom">
            View all case studies
          </div>
        </Link>
      </section>

      <section>
        <div className="w-full h-auto pt-[60px] sm:pt-[70px] lg:pt-[80px] pb-[60px] lg:pb-[80px] px-2 lg:px-0">
          <div className="flex flex-col lg:flex-row justify-center px-4 sm:px-10 md:px-20 lg:px-40 gap-y-10 lg:gap-y-0">
            <div className="w-full lg:w-max h-auto mt-[30px] sm:mt-[40px] lg:mt-0 pt-[30px] sm:pt-[40px] lg:pt-[80px]">
              <h2 className="text-[20px] xs:text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-semibold text-[#0C2233] w-full lg:w-[90%] leading-tight lg:leading-[50px] mt-[20px] sm:mt-[30px] lg:mt-[140px] md:tracking-[-1.5px] lg:tracking-[-2.5px]">
                Yes, creative really CAN be a revenue driver.
              </h2>
              <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] mt-[20px] sm:mt-[24px] lg:mt-[17px] leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[90%]">
                After launching hundreds of assets and analyzing the results of
                countless campaigns, we’ve found that up to 70% of your TikTok
                paid campaign performance is rooted in the creative assets you
                use. Read that again. And the other platforms aren’t far behind.
              </p>

              <button className="flex items-center gap-1 text-[14px] sm:text-[18px] lg:text-[20px] font-semibold text-[#0C2233] hover:text-[#FF6A39] mt-[20px] sm:mt-[24px] lg:mt-[17px] rounded-md transition-transform duration-500 tilt-zoom">
                Learn more about our ad creative process
                <span>
                  <BiChevronRight className="text-[20px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </button>
            </div>

            <div className="w-full lg:w-[52.7%] h-auto pt-[40px] sm:pt-[50px] lg:pt-[80px] px-4 sm:px-6 lg:px-0 mt-[40px] sm:mt-[60px] lg:mt-0 flex justify-center items-center">
              <img
                src={media7}
                alt="media7"
                loading="lazy"
                className="w-[280px] xs:w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="MediaProcessLine w-full h-auto pt-4 pb-20">
          <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-24 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
            OUR PROCESS
          </div>
          <h2 className="text-[44px] font-semibold text-white text-center mt-2">
            Great assets made easy.
          </h2>
          <p className="text-[20px] font-normal m-auto text-white text-center w-[90%] md:w-[80%] lg:w-[50%] mt-4">
            “It’s a PROCESS to manually search for creators, communicate, and
            negotiate. And managing its creation is quite complicated and
            time-consuming (and usually not that effective).” A direct quote
            from someone that filled out our{" "}
            <span className="text-[#CEFD94] font-semibold">
              “Let’s Talk” form.
            </span>
          </p>

          <div className="w-full h-auto pt-1">
            <div className="w-[95%] md:w-[80%] lg:w-[66%] h-auto mt-13 pb-10 bg-blue- m-auto space-y-10 lg:space-y-0">
              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20"></div>
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28 flex gap-4">
                  <span>1.</span>{" "}
                  <p>
                    Explore your brand + historical performance of ad creative
                  </p>
                </div>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28">
                  <div className="flex gap-4">
                    <span>2.</span>{" "}
                    <p>
                      Create a fresh round of 6-10 assets, with heavy
                      diversification of look, feel, and messaging
                    </p>
                  </div>
                  <p className="text-[20px] font-medium text-white pl-9 leading-[25px] mt-2">
                    (Here’s where we’ll explore low-budget ways to test new
                    types of creative, so that we can validate that it resonates
                    with your audience + drives performance before expending
                    more time and resources).
                  </p>
                </div>
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20"></div>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20"></div>
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28">
                  <div className="flex gap-4">
                    <span>3.</span> <p>Launch!</p>
                  </div>
                  <p className="text-[20px] font-medium text-white pl-9 leading-[25px] mt-2">
                    This is the fun part. We’ll send your new creative out into
                    the wild!
                  </p>
                </div>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28">
                  <div className="flex gap-4">
                    <span>4.</span>{" "}
                    <p>
                      Measure performance. Analyze results. Strategize new
                      creative to build according to big-picture trends, A/B
                      tests, and more.
                    </p>
                  </div>
                  <p className="text-[20px] font-medium text-[#CEFD7E] pl-9 leading-[25px] mt-2">
                    (Our fave metrics are CPC, CTR, and CVR)
                  </p>
                </div>
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20"></div>
              </div>

              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20"></div>
                <div className="w-full lg:w-[47.3%] h-auto bg-green- pb-20 text-[28px] font-semibold leading-[35px] text-white pt-28">
                  <div className="flex gap-4">
                    <span>5.</span> <p>Rinse & Repeat</p>
                  </div>
                  <p className="text-[20px] font-medium text-white pl-9 leading-[25px] mt-2">
                    We’ll do it all again and create even more thumb-stopping,
                    revenue-driving assets that speak directly to your audience.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center pt-6">
                <Link to="/get-started-with-tuff">
                  <button className="text-[#0C2233] cursor-pointer rounded-[4px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-6 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 transition-transform duration-500 tilt-zoom">
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
          <div className="w-[95%] lg:w-[79%] h-auto pb-2 m-auto mt-10 lg:mt-27">
            <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6">
              <div className="w-full lg:w-[45%] h-auto pb-10 lg:pb-20">
                <h2 className="text-[28px] sm:text-[34px] lg:text-[44px] font-semibold text-[#0c2233] leading-[38px] sm:leading-[44px] lg:leading-[50px]">
                  YouTube + TikTok + FB/IG + Twitter + Reddit (and more)
                </h2>
                <p className="text-[16px] sm:text-[18px] lg:text-[19px] font-normal text-black mt-5 leading-[25px]">
                  Ever made an ad for Facebook that totally flopped on Reddit?
                  Or a TikTok that tanked on YouTube? ...
                </p>
              </div>
              <div className="w-full lg:w-[45%] h-auto pb-10 lg:pb-20 flex flex-col gap-6">
                <Link to={"/tiktok-ad-agency"}>
                  <div className="flex items-center gap-2 text-[18px] lg:text-[20px] text-[#0c2233] font-semibold hover:text-[#FF6A39] transition-all duration-500 tilt-zoom">
                    <CiPlay1 className="text-[#0c2233]" size={22} />
                    Your TikTok Ad Agency
                  </div>
                </Link>

                <Link to={"/youtube-ad-agency"}>
                  <div className="flex items-center gap-2 text-[18px] lg:text-[20px] text-[#0c2233] font-semibold hover:text-[#FF6A39] transition-all duration-500 tilt-zoom">
                    <CiPlay1 className="text-[#0c2233]" size={22} />
                    Youtube Campaigns that Convert
                  </div>
                </Link>
                <Link to={"/social-advertising"}>
                  <div className="flex items-center gap-2 text-[18px] lg:text-[20px] text-[#0c2233] font-semibold hover:text-[#FF6A39] transition-all duration-500 tilt-zoom">
                    <CiPlay1 className="text-[#0c2233]" size={22} />
                    Revenue-Driving Paid Social Campaigns
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-8 mt-9">
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
                    Meet our creative peeps
                  </h2>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#0C2233] mt-5 leading-[26px]">
                    Our perfect formula = creative strategist + graphic designer
                    + motion designer.
                  </p>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#0C2233] mt-4 leading-[26px]">
                    Together, these three humans can analyze your creative from
                    end to end...
                  </p>
                  <button className="flex items-center gap-1 text-[14px] sm:text-[18px] lg:text-[20px] font-semibold text-[#0C2233] hover:text-[#FF6A39] mt-5 rounded-md transition-transform duration-500 tilt-zoom hover:cursor-pointer">
                    See our Creative Testing Guide
                    <BiChevronRight className="text-[20px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[95%] lg:w-[90%] h-auto m-auto pb-10">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold text-center text-[#0c2233] leading-[38px] sm:leading-[46px] lg:leading-[50px]">
              fixed, affordable monthly rates for startups
            </h2>

            <div className="w-full h-auto mt-10 flex flex-col lg:flex-row justify-between gap-6">
              {[
                {
                  plan: "Essential",
                  price: "$2,500",
                  sub: "30 creative credits per month",
                  note: "Best for < $20k ad spend / mo",
                },
                {
                  plan: "Pro",
                  price: "$5,000",
                  sub: "60 creative credits per month",
                  note: "Best for $20k – $50k ad spend / mo",
                },
                {
                  plan: "Unlimited",
                  price: "$9,000",
                  sub: "Unlimited creative credits per month",
                  note: "Best for $50k+ ad spend / mo",
                },
              ].map(({ plan, price, sub, note }) => (
                <div
                  key={plan}
                  className="w-full lg:w-[32%] h-auto flex items-center justify-center flex-col gap-1 py-6 border border-[#eee] rounded-md"
                >
                  <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#0a91ab]">
                    {plan}
                  </h2>
                  <p className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#0c2233]">
                    {price}{" "}
                    <span className="text-[20px] sm:text-[22px] font-normal">
                      /mo
                    </span>
                  </p>
                  <p className="text-[16px] sm:text-[18px] font-normal text-[#0c2233]">
                    {sub}
                  </p>
                  <p className="text-[14px] sm:text-[16px] font-normal text-[#0c2233]">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-max px-6 py-2 border-2 border-[#0c2233] text-[#0c2233] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold m-auto mt-8 lg:mt-13 cursor-pointer transition-transform duration-500 tilt-zoom">
              See creative pricing details
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto bg-[#0C2233] pt-20">
        <div className="w-full lg:w-[60%] px-4 lg:px-0 m-auto h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[46px] font-extrabold text-[#FFFFFF]">
            At the end of the day, creative is just really fun.
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium mt-3 text-[#FFFFFF]">
            Ready to elevate your brand AND drive results?
          </p>
          <Link to="/get-started-with-tuff">
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
