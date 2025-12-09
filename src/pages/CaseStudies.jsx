import React from "react";
import Navbar from "../components/Navbar";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";
import soona from "../assets/soona.png";
import multi from "../assets/multi.png";
import koji from "../assets/koji.png";
import nova from "../assets/nova.png";
import thinks from "../assets/thinks.png";
import cabi from "../assets/cabi.png";
import palmetto from "../assets/palmetto.png";
import acres from "../assets/acres.png";
import satrr from "../assets/satrr.png";
import rew from "../assets/rew.png";
import ant from "../assets/ant.png";
import star1 from "../assets/star1.svg";
import brad from "../assets/brad.png";
import rikin from "../assets/rikin.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FinalSection from "../components/FinalSection";

export default function CaseStudies() {
  const box = {
    heading: "Ready to grow?",
    para: ["Your compounding growth curve begins here."],
    button: "Book a Strategy Call"
  }
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>
      <section>
        <div className="w-full h-auto flex justify-center flex-col items-center  pb-10 lg:pt-[135px] lg:pb-15">
          <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
            CASE STUDIES
          </div>
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] leading-snug sm:leading-tight lg:leading-[60px] mt-2 tracking-tight lg:tracking-[-1px] text-[#0c2233] text-center">
            High‒impact growth campaigns{" "}
            <span className="bg-[#CEFD94]">with proven results.</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0c2233] text-center mx-auto w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] mt-4">
            We’ve found success working with teams in nearly every industry,
            from early traction startups to large enterprises. Discover how we
            bring our services to life to drive lasting growth for our partners.
          </p>
          <BiChevronDown
            size={30}
            className="mt-6 cursor-pointer lg:size-[40px]"
          />
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              CheckIn.pk
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%] text-left">
              Relaunching Pakistan’s First Online Travel Agency With a New Identity, New App & 71% Growth in Bookings
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  value: "2.3M+",
                  label: " Increase in Total Impressions",
                  icon: chevUp,
                },
                {
                  value: "62%",
                  label: " Increase in App Sign-Ups",
                  icon: chevUp,
                },
                { value: "48%", label: "Increase in Booking Conversion Rate (BCR)", icon: chevUp },
                { value: "71%", label: " Growth in Monthly Online Bookings", icon: chevUp },
                { value: "36%", label: " Reduction in Cost Per Acquisition (CPA)", icon: chevDown },
                { value: "32x", label: "Return on Ad Spend (ROAS) after scaling", icon: chevUp },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[18px] sm:text-[18px] font-normal text-[#0c2233] text-right">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <Link to="/case-studies/checkin">
                  <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                    Read the case study
                    <span>
                      <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-full w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={soona} alt="soona" loading="lazy" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={multi} alt="multi" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              LDNIO
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full text-left">
              LDNIO Pakistan: From Zero Presence to ₨10M in Just 7 Months — Brand Launch, Store Activation & D2C Growth Engine
            </p>

            <div className="w-full pt-4 sm:pt-5">
              {[
                {
                  value: "10 Million+",
                  label: "Revenue in First 7 Months",
                  icon: chevUp,
                },
                {
                  value: "5× – 6×",
                  label: "ROAS Every Single Month",
                  icon: chevUp,
                },
                {
                  value: "80,000+ ",
                  label: "New Organic Users via SEO",
                  icon: chevUp,
                },
                {
                  value: "92%",
                  label: "Website Conversion Funnel Efficiency",
                  icon: chevUp
                },
                {
                  value: "AOV Growth",
                  label: "₨5,000 → ₨9,000",
                  icon: chevUp
                },
                {
                  value: "0 → 100%  ",
                  label: "Digitalized Brand Presence (Web + Social + Retail)",
                  icon: chevUp
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[70px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[60%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[16px] sm:text-[18px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[16px] sm:text-[18px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <Link to="/case-studies/ldnio">
                  <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                    Read the case study
                    <span>
                      <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              ZESTOO FOODS
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%] text-left">
              Zestoo Foods: Building a Fresh Fast-Food Brand from
              the Ground Up
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  value: "350K+",
                  label: " New Organic Impressions Across Social & Web",
                  icon: chevUp,
                },
                {
                  value: "5x",
                  label: "Increase in Monthly Orders (from soft launch to scale)",
                  icon: chevUp,
                },
                {
                  value: "45%",
                  label: "Growth in Social Engagement (followers, comments, shares)",
                  icon: chevUp,
                },
                {
                  value: "30%",
                  label: " Increase in Website Conversion Rate (visitors → orders)",
                  icon: chevUp,
                },
                {
                  value: "30%",
                  label: " Increase in Website Conversion Rate (visitors → orders)",
                  icon: chevUp,
                },
                {
                  value: "Brand Reach:",
                  label: "Launched with full retail identity in Lahore",
                  icon: chevUp,
                },
                {
                  value: "Store Experience:",
                  label: "Created physical branding experience + digital integration",
                  icon: chevUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[18px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[18px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <Link to="/case-studies/zestoo">
                  <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                    Read the case study
                    <span>
                      <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={nova} alt="nova" loading="lazy" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={thinks} alt="thinks" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              TGR
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full text-left">
              TGR: Building a Purpose-Driven Podcast
              Brand to Inspire Growth
            </p>

            <div className="w-full pt-4 sm:pt-5">
              {[
                {
                  label: "0 → Full Podcast Brand Identity Built",
                },
                {
                  label: "🚀 Launched a Socially-Driven Platform Focused on IT, Society & Human Growth",
                },
                {
                  label: "💡 Unique Format Created: Real People, Real Rooms, Real Stories",
                },
                {
                  label: "🔥 Positioned TGR as a Niche Thought-Leadership Media Brand",
                },
                {
                  label: "🌱 Became a Voice for Underrepresented, Everyday Heroes in the Tech Industry",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <Link to="/case-studies/tgr">
                  <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                    Read the case study
                    <span>
                      <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              Slipper
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%] text-left">
              Slipper: Launching a Youth-Driven Footwear Brand From Zero to a Fast-Growing Digital Label
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  label: "✨ 0 → Full Brand Built (Identity, Packaging, Product Direction, Store Setup)",
                },
                {
                  label: "👠 Brand Positioned for Independent, Modern Young Women",
                },
                {
                  label: "📈 280% Growth in Monthly Sales Within First 4 Months",
                },
                {
                  label: "🛍 Average Order Value (AOV): 2,000 PKR → 3,500 PKR",
                },
                {
                  label: "🚀 From Zero Presence to 150K+ Total Reach Across Social & Web",
                },
                {
                  label: "💬 45% Repeat Customer Rate by Month 5 (strong indicator of brand loyalty)",
                },
                {
                  label: "💄 Product Sellout Cycles Every 3–6 Weeks",
                },
                {
                  label: "📸 Built a Fashion-Lifestyle Brand, Not Just a Footwear Store",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div>
                    <p className="text-[18px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <Link to="/case-studies/slipper">
                  <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                    Read the case study
                    <span>
                      <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={koji} alt="koji" loading="lazy" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={cabi} alt="cabi" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              Peaceskin Vestmest
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full text-left">
              PeaceSkin: Transforming a Small Skincare
              Startup Into a Recognized Omni-Channel
              Beauty Brand
            </p>

            <div className="w-full pt-4 sm:pt-5">
              {[
                {
                  label: "💰 AOV Jump: 1,200 PKR → 2,750 PKR (129% increase)",
                },
                {
                  label: "📈 ROAS: 2.5× → 6.2× within 90 days",
                },
                {
                  label: "👥 Website Traffic: +420% Growth in 4 months",
                },
                {
                  label: "📦 Online Orders: 0 → 1,800+ in first 5 months",
                },
                {
                  label: "🏬 Offline Sales: Boosted by 230% after brand recognition grew",
                },
                {
                  label: "🔥 Brand Recall: PeaceSkin recognized in local beauty stores + salons",
                },
                {
                  label: "🌱 Created a loyal returning customer base (38% repeat rate)",
                },
                {
                  label: "💡 Positioned PeaceSkin as a clean, modern, science-backed skincare brand",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <Link to="/case-studies/peace">
                  <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                    Read the case study
                    <span>
                      <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              TSY
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%] text-left">
              Transforming a Traditional Travel Agency Into Digitally Dominant Brand
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  label: "2,700% Increase in online inquiries",
                },
                {
                  label: "8.4× Growth in monthly revenue",
                },
                {
                  label: "600% Boost in total website traffic",
                },
                {
                  label: "600% Boost in total website traffic",
                },
                {
                  label: "5.1× Average ROAS on paid campaigns",
                },
                {
                  label: "47% Lower CPL (Cost Per Lead)",
                },
                {
                  label: "420% Increase in organic traffic",
                },
                {
                  label: "2× Growth in offline walk-in bookings",
                },
                {
                  label: "31% Higher lead-to-booking conversion rate",
                },
                {
                  label: "120% Increase in returning customers",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div>
                    <p className="text-[18px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <Link to="/case-studies/tsy">
                  <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                    Read the case study
                    <span>
                      <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img
              src={palmetto}
              alt="palmetto"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={acres} alt="acres" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              Nutty Hunt
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full text-left">
              NuttyHunt: Building a Bold, Social-First Brand Through
              Mood & Identity
            </p>

            <div className="w-full pt-4 sm:pt-5">
              {[
                {
                  label: "100% Brand Visual Identity Built (mood board → execution)",
                },
                {
                  label: "Brand Personality Defined: Fun, premium, human-focused",
                },
                {
                  label: "Social Engagement Estimated to Grow by 4× (projected based on mood-board-led strategy)",
                },
                {
                  label: "Increased Brand Recall among young urban consumers",
                },
                {
                  label: "Clear Direction for Future Campaigns — social-first promotional framework",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div>
                    <p className="text-[18px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <Link to="/case-studies/nuttyhunt">
                  <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                    Read the case study
                    <span>
                      <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              Temoc io
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%]">
              Temoc: Building a Web3 Music Brand from Zero to Social Powerhouse
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  label: "0 → 120,000+ Social Media Followers (across Instagram, Twitter, TikTok)",
                },
                {
                  label: "RoAS (Ad + Creator Campaigns): ~4.8×",
                },
                {
                  label: "Monthly Active Users (MAUs): 65,000+ on the platform within first 6 months",
                },
                {
                  label: "User Sign-Ups: 180,000+ registered users in first year",
                },
                {
                  label: "Engagement Rate: ~8% average — high due to community-first contents",
                },
                {
                  label: "Content Reach: 3.2M+ impressions from social campaigns in first 9 months",
                },
                {
                  label: "Creator Growth: Onboarded 350+ independent artists on the platform",
                },
                {
                  label: "Referral Rate: 28% of users joined via referral or word-of-mouth",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div>
                    <p className="text-[18px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <Link to="/case-studies/temoc">
                  <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                    Read the case study
                    <span>
                      <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                    </span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={satrr} alt="satrr" loading="lazy" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={rew} alt="rew" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              FGF
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full text-left">
              Brand Positioning, Social Media Optimization & Fundraising Growth for a
              Greener Planet
            </p>
            <p className="text-[16px] mt-6 sm:text-[18px] md:text-[20px] font-normal text-[#0c2233]">
              {[
                {
                  label: "85,00+ Social Media Community Growth",
                },
                {
                  label: "3.5× Increase in Monthly Website Traffic",
                },
                {
                  label: "2.8× Higher Engagement across social channels",
                },
                {
                  label: "Fundraising Campaign ROI: 4.2×",
                },
                {
                  label: "10X Funds Raised through digital campaignss",
                },
                {
                  label: "80% Growth in online donor participation",
                },
                {
                  label: "3 Successful Online Events with a combined reach of 500,000+ viewers",
                },
                {
                  label: "Brand Awareness Lift: +340% across eco-audiences",
                },
                {
                  label: "Volunteer Signups Increased by 170%",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div>
                    <p className="text-[18px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </p>
            <Link to="/case-studies/fgf">
              <p className="flex items-center gap-1 mt-6 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                Read the case study
                <span>
                  <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              ANTICA FARMACISTA
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%]">
              How Antica Farmacista Scaled Beyond Branded Search & Increased
              Paid Media ROAS by 20%
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  value: "18%",
                  label: "Increase in revenue",
                  icon: chevUp,
                },
                {
                  value: "32%",
                  label: "Growth in paid media",
                  icon: chevUp,
                },
                {
                  value: "113K",
                  label: "Increase in paid ROAS",
                  icon: chevUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[18px] sm:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[75px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={ant} alt="ant" loading="lazy" className="w-full" />
          </div>
        </div>
      </section> */}
      <section>
        <div className="w-full h-auto flex justify-center px-4 sm:px-6 md:px-8 flex-col items-center pt-10 lg:pt-39">
          <div
            className="h-auto py-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]"
          >
            EXPLORE
          </div>
          <h1
            className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-semibold 
                 w-full sm:w-[80%] md:w-[65%] lg:w-[43%] 
                 leading-snug sm:leading-tight lg:leading-[60px] 
                 mt-2 tracking-tight lg:tracking-[-1px] 
                 text-[#0c2233] text-center"
          >
            Tackling critical challenges at every stage of the funnel.
          </h1>
          <div className="w-full h-auto pt-6 px-4 sm:px-6 md:px-10 lg:px-23">
            <div className="w-full h-auto lg:h-[125px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-t-2 border-[#000000] pr-2 gap-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                CFOs ask CMOs to do more with less.
              </h2>
              <div
                className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 mt-2 lg:mt-4 text-xs sm:text-sm font-bold tracking-wide text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]"
              >
                soona
              </div>
            </div>
            <div className="w-full h-auto py-[42px] flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-center justify-between border-t-2 border-[#000000] pr-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                We need to improve lead quality while scaling results.
              </h2>
              <div className="h-full flex flex-col gap-2">
                <div className="flex flex-wrap gap-2 lg:gap-1">
                  <div
                    className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                  >
                    Antica Farmacista
                  </div>
                  <div
                    className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                  >
                    Multiverse B2B
                  </div>
                </div>
                <div className="flex flex-wrap justify-start lg:justify-end gap-2 lg:gap-1">
                  <div
                    className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 mt-2 lg:mt-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                  >
                    Thnks
                  </div>
                  <div
                    className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 mt-2 lg:mt-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                  >
                    Palmetto
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-auto lg:h-[125px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-t-2 border-[#000000] pr-2 gap-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                Identify top converting user flows, and optimize accordingly.
              </h2>
              <div className="flex flex-wrap gap-2 lg:gap-1">
                <div
                  className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  Nova Credit
                </div>
                <div
                  className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  Acres
                </div>
              </div>
            </div>

            <div className="w-full h-auto lg:h-[125px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-t-2 border-[#000000] pr-2 gap-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                We need to validate a new revenue stream.
              </h2>
              <div className="flex flex-wrap gap-2 lg:gap-1">
                <div
                  className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  Rewiring America
                </div>
                <div
                  className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  cabi
                </div>
              </div>
            </div>

            <div className="w-full h-auto lg:h-[125px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-t-2 border-b-2 border-[#000000] pr-2 gap-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                We need to prove the success of upper and midfunnel channels.
              </h2>
              <div className="flex flex-wrap gap-2 lg:gap-1">
                <div
                  className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  Koji
                </div>
                <div
                  className="h-auto py-2 bg-[#ceff2a] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  starryai
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row px-6 md:px-10 lg:px-19 mt-10 pt-21 pb-24 gap-10 lg:gap-0">
            <div className="w-full lg:w-[49%] h-auto">
              <img
                src={star1}
                alt="star"
                loading="lazy"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(71%) sepia(13%) saturate(2254%) hue-rotate(128deg) brightness(96%) contrast(85%)",
                }}
              />
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-9">
                “I view our partnership with Tuff as more like an extension of
                my team.
                <span className="text-[#0C2233] font-bold">
                  We strategize together, ask tough questions, examine the
                  results, optimize – and it just keeps getting better. Exactly
                  what I was looking for.”
                </span>
              </p>
              <div className="flex mt-18 gap-4 items-start">
                <div className="rounded-[40%] w-[60px] h-[60px] overflow-hidden">
                  <img
                    src={brad}
                    alt="brad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Brad Veach
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    VP of Marketing at Thnks
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[49%] h-auto pl-0 lg:pl-13">
              <img
                src={star1}
                alt="star"
                loading="lazy"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(71%) sepia(13%) saturate(2254%) hue-rotate(128deg) brightness(96%) contrast(85%)",
                }}
              />
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-9">
                <span className="text-[#0C2233] font-bold">
                  “What’s great about Tuff is that we’ve been guided by them to
                  seek bolder results.
                </span>
                Tuff has been great about being graceful with feedback while
                also making sure the insight that inspired an asset in the first
                place is still rooted in the data.”
              </p>
              <div className="flex mt-18 gap-4 items-start">
                <div className="rounded-[40%] w-[60px] h-[60px] overflow-hidden">
                  <img
                    src={rikin}
                    alt="rikin"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Rikin Diwan
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Chief Growth Officer, soona
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinalSection text={box} />
      <section>
        <Footer />
      </section>
    </>
  );
}
