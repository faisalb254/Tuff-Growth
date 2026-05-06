import React from "react";
import Navbar from "../components/NavbarNew";
import AllImg from "../assets/AllImg.png";
import Value from "../assets/Value.svg";
import Audi from "../assets/Audi.svg";
import Track from "../assets/track.svg";
import Search from "../assets/search.svg";
import Add from "../assets/Add.svg";
import Email from "../assets/email.svg";
import Rate from "../assets/Rate.svg";
import Develop from "../assets/Develop.svg";
import Web from "../assets/Web.svg";
import star1 from "../assets/star1.svg";
import Clientt from "../assets/Clientt.png";
import Stage from "../assets/Stage.png";
import Growth from "../assets/Growth.jpg";
import Growth1 from "../assets/Growth1.jpg";
import Growth2 from "../assets/Growth2.jpg";
import havitimg from "../assets/havitboard.png"
import { BiChevronRight } from "react-icons/bi";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FinalSection from "../components/FinalSection";

export default function All() {
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
        <div className="w-full max-w-[1700px] mx-auto h-auto AllLine pt-1 pb-30 px-4 sm:px-6 md:px-12 lg:px-0">
          <div className="h-auto md:h-[39px] m-auto capitalize py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5  md:mt-28 lg:mt-37 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
            SERVICES
          </div>
          <h2 className="text-[30px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-semibold leading-[38px] sm:leading-[46px] md:leading-[52px] lg:leading-[55px] mt-6 text-[#0C2233] text-center px-2 sm:px-6 md:px-16 lg:px-30 min-[120rem]:px-0">
            Through strategic testing we achieve quick wins that lead to major accomplishments.
          </h2>
          <p className="text-[16px] sm:text-[16px] md:text-[20px] font-normal text-[#0C2233] text-center mt-8 px-4 sm:px-6 md:px-12 lg:px-0">
            Partner with our growth marketers and expert specialists to execute your most effective, data-driven path to expansion.
          </p>
          <p className="text-[#0C2233] text-[16px] sm:text-[17px] md:text-[18px] font-extrabold text-center mt-10">
            Has Havit changed the way you think about growth? <br />
            {/* <span className="text-[#FF6B39]">33 seconds</span> */}
            <a href="https://drive.google.com/file/d/1CScQIt7knf0xQmBkcA_JtrRk7XV_UzWz/view" target="_blank" rel="noopener noreferrer">Download The Pitch Deck</a>
          </p>
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[46%] m-auto mt-10 md:mt-12 lg:mt-13 px-4" onClick={() => window.open("https://drive.google.com/file/d/1CScQIt7knf0xQmBkcA_JtrRk7XV_UzWz/view", "_blank")}>
            <img src={havitimg} alt="havitimg" className="w-full cursor-pointer" />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto ServiceBlue pb-8 px-4 sm:px-6 md:px-10 lg:px-0">
          <div className="w-full max-w-[1700px] mx-auto lg:w-[87%] m-auto pb-30 flex flex-col lg:flex-row justify-between gap-10 min-[120rem]:px-0">
            <div className="w-full lg:w-[35%] pt-1">
              <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-16 md:mt-24 lg:mt-34 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                STRATEGY
              </div>
              <h2 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-left font-semibold leading-[38px] sm:leading-[44px] md:leading-[48px] lg:leading-[50px] text-[#FFFEFB] mt-7">
                Let us manage the details.
              </h2>
              <Link to="/get-started-with-havit-growth">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let’s Talk
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-[58%] h-auto pt-6 lg:pt-41">
              <p className="text-[16px] sm:text-[16px] md:text-[20px] font-medium text-[#FFFEFB]">
                The first step is establishing a complete growth marketing strategy. This strategic document serves as an actionable framework, outlining the high-priority tactics selected for initial testing based on data-informed projections of success.
              </p>
              <p className="text-[16px] sm:text-[16px] md:text-[20px] font-medium text-[#FFFEFB] mt-3">
                This approach ensures our daily focus remains strictly on initiatives that deliver the highest impact on your revenue. We will select the most effective growth marketing tactics tailored for your company, and our specialized team of marketing experts will then execute them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1700px] mx-auto min-[120rem]:px-0 h-auto flex items-center flex-col px-4 sm:px-6 md:px-10 lg:px-0 pb-20">
          <div className="h-auto md:h-[39px] m-auto capitalize py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-34 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
            EXECUTION
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold mt-5 text-center text-[#0C2233] w-full sm:w-[80%] md:w-[65%] lg:w-[60%] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[40px]">
            We’ve got you covered with a wide range of experiences and
            knowledge:
          </h2>
          <div className="w-full max-w-[1700px] mx-auto h-auto pt-19 px-4 sm:px-6 md:px-10 lg:px-19 pb-10 flex flex-col flex-wrap lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start min-[120rem]:px-0">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-[400px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Value} alt="Value" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Value Props
              </h2>
              <p className="text-[16px] sm:text-[16px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                The experts will audit your current messaging to determine your distinct value propositions and expertly craft them for optimal clarity.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-[400px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Audi} alt="Audi" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Audience Development
              </h2>
              <p className="text-[16px] sm:text-[16px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Precise targeting of your ideal audience ensures marketing spend is directed toward  the highest-potential customers.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-[400px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Track} alt="Track" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Analytics & Tracking
              </h2>
              <p className="text-[16px] sm:text-[16px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                After implementing conversion tracking and analytics, the focus shifts to helping you pinpoint and measure the most critical performance indicators.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-[400px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Search} alt="Search" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                SEO
              </h2>
              <p className="text-[16px] sm:text-[16px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                The SEO foundation is set via meticulous keyword research and site optimizations, helping you quickly achieve organic visibility within your target niche.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-[400px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Add} alt="Add" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Performance marketing
              </h2>
              <p className="text-[16px] sm:text-[16px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Achieve expanded reach, higher quality leads, and increased revenue through our proven Performance marketing methodologies individually strategized for each platform, may it google, meta, tiktok or any other.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-[400px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Email} alt="Email" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Email
              </h2>
              <p className="text-[16px] sm:text-[16px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                The team will audit or develop your email automation flows, focusing on identifying testing opportunities to maximize subscriber action and engagement.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-[400px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Rate} alt="Rate" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6 text-left">
                Conversion Rate Optimization
              </h2>
              <p className="text-[16px] sm:text-[16px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Conversion rate optimization is achieved through controlled experiments on custom landing pages and email capture strategies.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-[400px] pb-5 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Develop} alt="Develop" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Creative Development
              </h2>
              <p className="text-[16px] sm:text-[16px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Instead of relying on slow-moving and expensive creative
                agencies, we create brand-forward, high-impact creative designed
                to supercharge your ads, email, and landing pages.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-[400px] pb-5 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Web} alt="Web" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Web Design and Development
              </h2>
              <p className="text-[16px] sm:text-[16px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                When time on site and pages per session rise while bounce rate
                falls, that’s when growth happens. A key part in this equation:
                site design that’s a perfect balance of form and function.
              </p>
            </div>
          </div>
          <Link to="/get-started-with-havit-growth">
            <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-0 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
              Let’s Talk
            </button>
          </Link>
        </div>
      </section>

      <section className="Croline2">
        <div className="w-full h-auto max-w-[1700px] mx-auto pb-10 flex flex-col items-center justify-center pt-10 px-4 sm:px-6 md:px-10 lg:px-65 min-[120rem]:px-0">
          <img src={star1} alt="star1" className="mt-14 sm:mt-16 md:mt-20" />

          <p className="bg-[#CEFD94] text-[#0C2233] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mt-7 px-4 text-center lg:text-[26px]">
            Struggling to get your marketing campaigns to really move the needle?
          </p>

          <p className="text-[#FFFFFF] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mt-5 px-4 text-center lg:text-[26px]">
            Havit solves that problem. Our team steps in with proven skills in all areas of performance marketing, so you don't have to guess what works. We take the pain out of platforms like meta or google ads by using constant testing and smart analysis. The result? You get immediate lift and tangible growth, seeing your revenue jump significantly every month.
          </p>

          {/* <h1 className="text-[#FFFFFF] text-[16px] sm:text-[17px] md:text-[18px] font-semibold mt-3 text-center lg:text-[20px]">
            Mathew Greenspan
          </h1>

          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-center px-4 sm:px-6 font-normal text-[#FFFFFF] mt-6 leading-[22px] lg:text-[20px] lg:w-[55%] lg:mt-0 lg:leading-[25px]">
            Head of Digital Growth, EZ Lifestyles
          </p> */}
        </div>
      </section>

      <section>
        <div className="w-full max-w-[1700px] mx-auto h-auto pb-10 pt-20 px-4 sm:px-6 md:px-10 lg:px-20 min-[120rem]:px-0">
          <div className="flex flex-col lg:flex-row mt-10 gap-6">
            <div className="w-full lg:w-[50%] h-auto pt-1">
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] font-extrabold md:leading-[50px] text-[#0c2233] mt-10 lg:mt-22">
                Engagements at every stage.
              </h2>
              <p className="text-[16px] sm:text-[16px] md:text-[20px] font-normal text-[#0C2233] mt-6">
                You've found success working with teams across nearly every industry, from early-stage startups to large enterprises. Your best partners are those looking to acquire new customers and scale their company through modern channels, tools, and frameworks—primarily founders and business owners.
              </p>
              <p className="text-[16px] sm:text-[16px] md:text-[20px] font-normal text-[#0C2233] mt-4">
                To get the greatest results, we look for a proactive, strategic partner who shares our high value for transparency, communication, and aligned performance metrics (KPIs).
              </p>
              <Link to={"/portfolios"}>
                <button className="flex items-center gap-1 text-[14px] sm:text-[16px] lg:text-[20px] font-semibold text-[#0C2233] hover:text-[#FF6A39] hover:cursor-pointer rounded-md transition-transform duration-500 tilt-zoom mt-4">
                  See Realtime Results
                  <span>
                    <BiChevronRight className="text-[20px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-[50%] flex items-center justify-center pt-8 lg:pt-8">
              <img
                src={Stage}
                alt="Stage"
                className="w-[100%] sm:w-[90%] md:w-[80%]"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 mt-16 lg:mt-0">
            <div className="w-full lg:w-[50%] flex items-center justify-center pt-10 lg:pt-10">
              <img
                src={Clientt}
                alt="Clientt"
                className="w-[100%] sm:w-[90%] md:w-[80%]"
              />
            </div>
            <div className="w-full lg:w-[50%] h-auto pt-1">
              <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[40px] font-extrabold md:leading-[50px] text-[#0c2233] mt-10 lg:mt-22 text-left">
                Dedicated expert team working in close collaboration with clients.
              </h2>
              <p className="text-[16px] sm:text-[16px] md:text-[20px] font-normal text-[#0C2233] mt-6">
                The team is fully transparent and responsive, ensuring we always know what is being tested, the results of that testing, and how it translates to our short and long-term goals.
              </p>
              <p className="text-[16px] sm:text-[16px] md:text-[20px] font-normal text-[#0C2233] mt-4">
                Our structure offers maximum flexibility: we operate as either a highly autonomous unit or a fully integrated extension of your existing team. Crucially, our bottom line is revenue optimization. If a tactic does not generate measurable returns, it is swiftly eliminated.
              </p>
              <Link to={"/our-company"}>
                <button className="flex items-center gap-1 text-[14px] sm:text-[16px] lg:text-[20px] font-semibold text-[#0C2233] hover:text-[#FF6A39] cursor-pointer rounded-md transition-transform duration-500 tilt-zoom mt-4">
                  Learn more about the company
                  <span>
                    <BiChevronRight className="text-[20px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-18 pb-10 md:pb-20">
          <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-15 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
            GUIDES
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[42px] font-extrabold md:leading-[50px] text-[#0c2233] mt-5">
            Growth Marketing Guides
          </h2>
          <p className="text-[16px] sm:text-[16px] md:text-[20px] font-normal text-[#0C2233] mt-6">
            Gain a detailed understanding of our methodology. Access the step-by-step playbook for our most requested services.
          </p>
          <div className="w-full h-auto mt-12 flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-[31.5%] h-[400px]">
              <img src={Growth} alt="Growth" />
              <h3 className="text-[16px] mt-5 font-semibold text-[#0C2233]">
                GROWTH GUIDE
              </h3>
              <p className="text-[20px] mt-4 font-bold text-[#0C2233] leading-[25px]">
                Measures of Success: Paid Media Metrics & Benchmarks Resource
                Guide
              </p>
            </div>
            <div className="w-full lg:w-[31.5%] h-[400px]">
              <img src={Growth1} alt="Growth" />
              <h3 className="text-[16px] mt-5 font-semibold text-[#0C2233]">
                GROWTH GUIDE
              </h3>
              <p className="text-[20px] mt-4 font-bold text-[#0C2233] leading-[25px]">
                The Ultimate Guide to Maximizing Your Media Spend with
                Performance Ad Creative
              </p>
            </div>
            <div className="w-full lg:w-[31.5%] h-[400px]">
              <img src={Growth2} alt="Growth" />
              <h3 className="text-[16px] mt-5 font-semibold text-[#0C2233]">
                GROWTH GUIDE
              </h3>
              <p className="text-[20px] mt-4 font-bold text-[#0C2233] leading-[25px]">
                How to Create a Content Marketing Strategy from Scratch
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <FinalSection text={box} />
      <Footer />
    </>
  );
}
