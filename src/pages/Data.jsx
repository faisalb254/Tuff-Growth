import React from "react";
import Navbar from "../components/Navbar";
import Datahead from "../assets/Datahead.png";
import Datahead1 from "../assets/Datahead1.png";
import DataImg1 from "../assets/DataImg1.png";
import Search from "../assets/search.svg";
import Set from "../assets/Set.svg";
import Report from "../assets/report.svg";
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
        <div className="w-full h-auto pb-10 Croline pt-1">
          <div className="w-full h-auto mt-26 md:mt-16 px-4 sm:px-6 md:px-12 lg:pl-19 flex flex-col lg:flex-row">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[58%] h-auto pt-0">
              <div className="h-auto md:h-[39px] capitalize py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-16 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                DATA
              </div>
              <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-semibold text-[#0C2233] leading-[32px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-6">
                Customized analytics to show the brand and performance metrics
                that matter most.
              </h1>
              <p className="text-[15px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                With cross functional collaboration and a clear measurement
                framework, we help businesses measure true incrementality as a
                whole, and within channels and platforms to optimize spend,
                resources, and time.
              </p>
              <Link to="/get-started-with-tuff">
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
                Custom Reports + Tuff = Data driven marketing strategies
              </h2>
              <p className="text-[15px] sm:text-[18px] md:text-[20px] text-center w-full sm:w-[90%] md:w-[84%] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                With clear goals in mind, our reporting allows us to make
                strategic decisions based on hard numbers. Our team is
                transparent, communicative, and agile. We pivot to strategies
                that drive growth and keep marketing tactics headed in the right
                direction.
              </p>
              <img
                src={Datahead1}
                alt="Datahead1"
                className="mt-5 w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto"
              />
              <Link to={"/our-company"}>
                <button className="flex items-center gap-1 text-[14px] sm:text-[18px] lg:text-[20px] font-semibold text-[#0C2233] hover:text-[#FF6A39] rounded-md transition-transform duration-500 tilt-zoom mt-4">
                  See how we work
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
        <div className="w-full h-auto Dataline pb-20 mt-20 px-4 sm:px-6 md:px-10 lg:px-40 flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[50%] h-auto pt-10 lg:pt-26">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-medium text-[#FFFEFB]">
              Make it make sense
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium text-[#FFFEFB] mt-2">
              We use a variety of metrics to prove the efficacy of strategies
              and track full-funnel performance metrics. We take that data and
              make sure you understand what it’s telling you and how we can use
              it.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium text-[#FFFEFB] mt-6">
              Take our SEO and CRO teams. They work together to analyze behavior
              metrics against conversions to find friction points and
              opportunities for A/B testing. Or the Social Ads team and Ad
              Creative team who collaborate on creative performance and
              reporting to drive real revenue, conversions, and growth.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-medium text-[#FFFEFB] mt-6">
              Together, we’ll create reports that fit your goals and stay open
              and honest about performance data and what it means as we grow.
            </p>
          </div>
          <div className="w-full lg:w-[50%] h-auto flex items-center justify-center">
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
        <div className="w-full h-auto flex items-center flex-col pt-20 px-4 sm:px-6 md:px-10 lg:px-0">
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-center text-[#0C2233] w-full sm:w-[80%] md:w-[65%] lg:w-[50%] leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[40px]">
            Applying a structured process to measurement
          </h2>
          <Link to="/get-started-with-tuff">
            <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
              Let’s Talk
            </button>
          </Link>

          <div className="w-full h-auto pt-9 px-4 sm:px-6 md:px-10 lg:px-19 pb-30 flex flex-col flex-wrap lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Search} alt="Search" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Identify the right attribution model
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                First, we’ll align on an optimal Attribution Model based on your
                business, tech stack, and goals.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Set} alt="Set" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Review GA4 and existing reporting setup
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Our team can set up and implement tracking and pixel
                configuration for core platforms and tools.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Report} alt="Report" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Create custom reports
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Our custom reports are built by translating your goals into the
                metrics that matter, setting your benchmarks, and creating a
                visual guide that will resonate with your internal teams.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Pencil} alt="Pencil" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Implement strategies
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Let’s get to work. To make an impact, we implement cohesive,
                full-funnel strategies across performance channels.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Anal} alt="Anal" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Analyze the data
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Looking at our custom reports we’ll analyze what’s working and
                communicate the story the data tells.
              </p>
            </div>

            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[32%] h-auto min-h-[340px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Wheel} alt="Wheel" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Data take the wheel
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Letting the data drive the strategy, we’ll give you an action
                plan the data tells us will drive the most growth and head back
                to the implementation phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pb-20 flex flex-col lg:flex-row px-6 sm:px-10 md:px-20 lg:px-40 gap-10 lg:gap-0">
          <div className="w-full lg:w-[50%] h-auto">
            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-semibold text-[#0C2233] leading-[36px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px]">
              Custom reports in action.
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233] mt-2 leading-[22px] sm:leading-[24px] md:leading-[26px]">
              We never take a one-size-fits-all approach to our client reports.
              After setting goals and understanding how your internal teams will
              digest performance data, we’ll help you visualize that data
              through formats like custom dashboards in Data Studio or exec
              ready presentations.
            </p>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[26px]">
              Our experts constantly push transparency by sharing data-driven
              choices made weekly and high-level impacts monthly, quarterly, and
              annually.
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
