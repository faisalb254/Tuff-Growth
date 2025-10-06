import React from "react";
import Navbar from "../components/Navbar";
import FinalSection from '../components/FinalSection'
import Seo1 from "../assets/Seo.png";
import Seo2 from "../assets/Seo2.png";
import Seo3 from "../assets/Seo3.png";
import acres from "../assets/acres.jpg";
import acreslogo from "../assets/acres-logo.svg";
import starri from "../assets/starri.jpg";
import starrilogo from "../assets/starrilogo.svg";
import { FaArrowUp } from "react-icons/fa";
import star1 from "../assets/star1.svg";
import SeoTech from "../assets/SeoTech.svg";
import SeoCont from "../assets/SeoCont.svg";
import SeoRep from "../assets/SeoRep.svg";
import SeoTeam from "../assets/SeoTeam.png";
import SeoBlog1 from "../assets/SeoBlog1.jpg";
import SeoBlog2 from "../assets/SeoBlog2.jpg";
import SeoBlog3 from "../assets/SeoBlog3.jpg";
import { BiChevronRight } from "react-icons/bi";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Seo() {
  const box = {
        heading: "Ready for some SEO wins that actually matter?",
        para: ["We like to share how we help businesses grow organically. But, a great partnership is also about people. Let’s chat."],
        button: "Book a Strategy Call"
    }
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full h-auto VideoLine pt-1">
          <div className="w-full h-auto  md:mt-20 lg:mt-35 px-4 sm:px-6 md:px-12 lg:pl-19 flex flex-col lg:flex-row">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[48%] h-auto pt-1">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-medium text-[#ffffff] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-7">
                Search visibility in front of the right organic audience.
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-13 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                From audit to execution, our approach to SEO guides you every
                step of the way. We carefully and consistently test our SEO
                strategies to implement data-driven techniques that balance
                low-hanging fruit and long-term plays to make your website an
                organic lead gen machine.
              </p>
              <Link to="/get-started-with-tuff">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let's Talk
                </button>
              </Link>
            </div>
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mt-6 lg:mt-0">
              <img
                src={Seo1}
                alt="Seo1"
                className="w-full h-auto object-contain"
              />
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
              We utilize our proven SEO process to make sure you show up when
              and where it matters most.
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
                  Becoming experts in your industry and understanding your
                  acquisition funnel are top priorities as we begin our
                  partnership.
                </p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                  We perform thorough research through competitive analysis,
                  technical auditing, keyword research, and a content gap
                  analysis to help us create a project roadmap for success.
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
                  Before we begin optimizing the site, we work closely with you
                  to understand your goals and set the right KPIs. We then map
                  our strategy based on how and when we can hit your goals while
                  staying transparent along the way.
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
                  We start by eliminating all technical issues with your site.
                  In order to get the most out of optimizations, we have to
                  eliminate all technical hurdles.
                </p>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                  From there, we begin making tactical optimizations one
                  strategy at a time to ensure we can track and prove what works
                  for you. We’ll keep our focus on the strategies that work by
                  listening to the data and staying agile.
                </p>
              </div>

              <div className="w-full lg:w-[50%] pt-10 lg:pt-18">
                <div className="flex flex-wrap justify-start gap-3 px-4">
                  <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    CUSTOM REPORTING
                  </div>
                  <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    GA & GSA MANAGEMENT
                  </div>
                  <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    ON-SITE OPTIMIZATIONS
                  </div>
                  <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    SITE SPEED OPTIMIZATIONS
                  </div>
                  <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    NAVIGATION AND SITEMAPS
                  </div>
                  <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#FF8F6A] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#495965]">
                    CONTENT
                  </div>
                </div>
              </div>
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
            Build a strong foundation for organic scalability.
          </h2>

          <p className="text-[16px] text-white text-center font-normal mt-6 px-4 leading-[22px] w-full lg:text-[20px] lg:mt-8 lg:leading-[25px] lg:w-[53%]">
            Implementing technical optimization for SEO is essential if you want
            to ensure that your web pages are structured for both humans and
            crawlers. We’ve optimized sites for enterprise and mid-market
            companies and understand the complexities.
          </p>

          <div className="w-full flex flex-col gap-6 px-6 pb-20 pt-10 lg:flex-row lg:gap-0 lg:justify-between lg:px-20">
            {/* Card 1 */}
            <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4">
              <img src={SeoTech} alt="SeoTech" />
              <h2 className="text-[24px] text-white font-semibold mt-4 lg:text-[28px]">
                Technical SEO
              </h2>
              <p className="text-[16px] text-white font-normal mt-4 leading-[22px] lg:text-[20px] lg:mt-4 lg:leading-[25px]">
                Technical SEO is an extremely important aspect of our SEO
                services. We need to ensure your site is at optimal health to
                make the impact we want in other areas like content. From crawl
                errors to site speed, we’ll make sure your website is in tip-top
                shape.
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
                Content
              </h2>
              <p className="text-[16px] text-white font-normal mt-4 leading-[22px] lg:text-[20px] lg:mt-4 lg:leading-[25px]">
                From the start, we’ll be performing keyword research and a
                content gap analysis to ready a content strategy that targets
                the right keywords to give you improved visibility with an
                audience that will actually convert. Our aim is to make both
                Google and humans happy.
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
                Reporting & Planning
              </h2>
              <p className="text-[16px] text-white font-normal mt-4 leading-[22px] lg:text-[20px] lg:mt-4 lg:leading-[25px]">
                With customized reporting to show the results that matter, we
                make sure we follow the numbers as we create SEO strategies.
              </p>
              <p className="text-[16px] text-white font-normal mt-4 leading-[22px] lg:text-[20px] lg:mt-4 lg:leading-[25px]">
                Our reports will help us continue to pivot and create plans
                around the work that’s getting your audience to your site… and
                keeping them there.
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
      </section>

      <section>
        <div className="w-full h-auto pt-1 flex items-center flex-col">
          <h2 className="text-[26px] md:text-[28px] text-center leading-[36px] font-semibold text-[#0c2233] mt-10 px-4 w-full lg:text-[42px] lg:leading-[50px] lg:w-[50%]">
            Consider us your plug-in growth marketing team.
          </h2>

          <div className="w-full h-auto flex flex-col gap-10 pt-10 px-6 lg:flex-row lg:justify-between lg:gap-0 lg:pt-20 lg:px-20">
            {/* Left Column */}
            <div className="w-full lg:w-[48%] h-auto pb-10 lg:pb-20">
              <h2 className="text-[24px] font-semibold text-[#0c2233] lg:text-[28px]">
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

              <h2 className="text-[24px] font-semibold text-[#0c2233] mt-10 lg:text-[28px] lg:mt-13">
                Design & Development
              </h2>
              <p className="text-[16px] font-normal text-[#0c2233] mt-4 leading-[22px] lg:text-[20px] lg:mt-3 lg:leading-[25px]">
                Whether your blogs need a visual lift or you’re working with
                your SEO strategist to fix technical issues on your site, we’re
                here to make sure you have the support you need.
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
