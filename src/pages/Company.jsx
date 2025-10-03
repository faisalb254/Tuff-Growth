import React from "react";
import Navbar from "../components/Navbar";
import Tufftesti from "../assets/tufftesti.png";
import Model from "../assets/model.png";
import Search from "../assets/search.svg";
import Userborder from "../assets/Userborder.svg";
import UserEx from "../assets/UserEx.svg";
import Measur from "../assets/Measur.svg";
import Not from "../assets/Not.svg";
import Pic from "../assets/pic.svg";
import team from "../assets/team.png";
import ellen from "../assets/ellen.png";
import kris from "../assets/kris.png";
import han from "../assets/han.png";
import ric from "../assets/ric.png";
import kelly from "../assets/kelly.png"
import katie from "../assets/katie.png"
import travis from "../assets/travis.png"
import megan from "../assets/megan.png"
import adelle from "../assets/adelle.png"
import arturo from "../assets/arturo.png"
import sean from "../assets/sean.png"
import lauren from "../assets/lauren.png"
import derek from "../assets/derek.png"
import spencer from "../assets/spencer.png"
import kate from "../assets/kate.png"
import jack from "../assets/jack.png"
import emily from "../assets/emily.png"
import chris from "../assets/chris.png"
import adli from "../assets/adil.png"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FinalSection from "../components/FinalSection";

export default function Company() {
  const box = {
        heading: "What does success look like for you?",
        para: ["Let’s create it together!"],
        button: "Let's Talk"
    }
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>
      <section>
        <div className="w-full h-auto md:h-[100vh] ContentLine pt-1">
          <div className="w-full h-auto mt-20 md:mt-20 lg:mt-35 px-4 sm:px-6 md:px-12 lg:pl-19 flex flex-col lg:flex-row gap-10">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[48%] h-auto pt-4">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-semibold text-[#ffffff] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-7">
                An In-Step Team that Drives End-to-End Growth
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-13 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Good marketing tests, optimizes, and tests again. World-class
                marketing is an efficient, decisive, cohesive unit. We
                scrutinize results in the weeds and at 30k’ and pull every last
                stakeholder and optimizer into lockstep along the way. The
                result: a well-oiled machine that turns the window shoppers into
                your brand champions and the “do-we-need-this?” into
                “how-did-we-ever-live-without-it.”
              </p>
              <Link to="/get-started-with-tuff">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let’s Talk
                </button>
              </Link>
            </div>
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mt-6 lg:mt-0 px-4 sm:px-6 md:px-10 lg:px-20">
              
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto bg-red- flex flex-col lg:flex-row pb-10">
          <div className="w-full lg:w-[50%] h-auto bg-blue-"></div>
          <div className="w-full lg:w-[50%] h-auto bg-green- pb-10 px-4 sm:px-6 md:px-8 pt-10 md:pt-20 lg:pt-25">
            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[45px] font-semibold text-[#0C2233]">
              The pieces of the Tuff puzzle.
            </h2>
            <h1 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0C2233] mt-8 lg:mt-10">
              Constant Iteration
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233] mt-3">
              The only constant in life is change. So our benchmarks and
              strongest POD today might lose steam tomorrow. We’re your
              boundless well of curiosity for what’s around the next bend and
              feet-on-the-ground planners that keep us operating smoothly and
              efficiently no matter what we find there.
            </p>
            <h1 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0C2233] mt-8 lg:mt-10">
              Cross-Collaboration
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233] mt-3">
              Growth doesn’t happen in a silo. It’s not enough for your campaign
              manager to drive down CPCs or your copywriter to A/B test a
              headline. The real magic happens when each piece of your marketing
              machine is fine-tuned to drive towards something greater.
            </p>
            <h1 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0C2233] mt-8 lg:mt-10">
              Deep Specialism
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233] mt-3">
              Our feet are firmly planted in seasoned marketing expertise. But
              there’s no gilded road that leads to growth: we test, optimize,
              refine, and test again with a never-ending (and sometimes “mad”)
              drive to streamline, find efficiencies, and forge your unique path
              to growth.
            </p>
            <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row gap-4 items-start">
              <img
                src={Tufftesti}
                alt="Tufftesti"
                className="w-[60%] sm:w-[26%]"
              />
              <div className="pr-0 sm:pr-10 md:pr-20 lg:pr-40">
                <h2 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold text-[#0C2233]">
                  What’s the best thing about working with Tuff?
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#0C2233]">
                  31 Second
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto lg:h-[64vh] bg-[#0C2233] flex flex-col lg:flex-row px-4 sm:px-8 md:px-14 lg:px-19 py-10 lg:py-0">
          <div className="w-full lg:w-[42%]">
            <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-4 sm:mt-10 md:mt-16 lg:mt-19 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit mb-5">
              FULLY REMOTE DELIVERY MODEL
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[42px] font-semibold text-[#ffffff] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[50px] mt-4 sm:mt-6 md:mt-1">
              Find a more streamlined path to growth
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
              We combine the right mix of deep specialism with integrated
              thinkers and complete finishers into one single team to help
              businesses take a full funnel, customer first approach.
            </p>
          </div>
          <div className="w-full lg:w-[58%] h-auto flex items-center justify-center mt-10 lg:mt-0">
            <img src={Model} alt="Model" className="w-[90%] lg:w-auto" />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-14 pb-20 flex items-center flex-col">
          <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-10 sm:mt-16 md:mt-19 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
            OUR SERVICES
          </div>
          <p className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug lg:leading-[2.5rem] mt-4 text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
            Provide the best experience for the customer at every stage of the
            funnel
          </p>
          <div className="w-full h-auto pt-10 sm:pt-16 lg:pt-19 px-4 sm:px-6 md:px-10 lg:px-19 pb-10 flex flex-col flex-wrap lg:flex-row gap-8 lg:gap-0 justify-center lg:justify-between items-center lg:items-start">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Search} alt="Search" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Paid Media
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                The right media mix across brand and performance.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Userborder} alt="Userborder" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Strategy and Insights
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Activation underpinned by detailed action orientated roadmaps.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={UserEx} alt="UserEx" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                User Experience
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                The right experience at each stage of the funnel.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Measur} alt="Measur" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Measurement
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Know what’s working and replicate it.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Not} alt="Not" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Content and SEO
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Capture demand & visibility across customer segments.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Pic} alt="Pic" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Performance Creative
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Constantly create a large volume of messages to test.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto lg:h-[100vh] VideoLine2 pt-1 px-4 sm:px-6 md:px-10 lg:px-0">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[42px] text-center font-semibold text-[#ffffff] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[50px] mt-10 sm:mt-14 md:mt-20">
            We Show Our Work
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-center font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px] max-w-[1200px] mx-auto">
            Our world is centered on your real, sustainable, measurable growth.
            We achieve this by taking a systematic approach to finding traction
            on new marketing channels, strategizing scaling opportunities,
            making relentless optimizations and continually working to find new
            opportunities.
          </p>
          <div className="w-full h-auto mt-10 sm:mt-14 md:mt-16 pb-10 flex flex-col lg:flex-row justify-between gap-8 px-2 sm:px-6 md:px-10 lg:px-19">
            <div className="w-full lg:w-[48.8%] h-auto lg:h-[302px] rounded-[3px] bg-[#1F3343] px-6 sm:px-10 md:px-12 pt-8 md:pt-11">
              <h1 className="text-[24px] md:text-[27px] font-semibold text-[#fffefb]">
                What growth marketing is:
              </h1>
              <div className="mt-5 px-2 sm:px-4 flex items-center gap-4">
                <span style={{ color: "#CEFD94", fontSize: "30px" }}>✓</span>
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-left font-normal text-[#ffffff]">
                  Measured
                </h3>
              </div>
              <div className="px-2 sm:px-4 flex items-center gap-4">
                <span style={{ color: "#CEFD94", fontSize: "30px" }}>✓</span>
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-left font-normal text-[#ffffff]">
                  Research-based
                </h3>
              </div>
              <div className="px-2 sm:px-4 flex items-center gap-4">
                <span style={{ color: "#CEFD94", fontSize: "30px" }}>✓</span>
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-left font-normal text-[#ffffff]">
                  Custom-to-you
                </h3>
              </div>
            </div>
            <div className="w-full lg:w-[48.8%] h-auto lg:h-[302px] rounded-[3px] bg-[#1F3343] px-6 sm:px-10 md:px-12 pt-8 md:pt-11">
              <h1 className="text-[24px] md:text-[27px] font-semibold text-[#fffefb]">
                What growth marketing is not:
              </h1>
              <div className="mt-5 px-2 sm:px-4 flex items-center gap-4">
                <span style={{ color: "#EA4040", fontSize: "30px" }}>✖</span>
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-left font-normal text-[#ffffff]">
                  Magic
                </h3>
              </div>
              <div className="px-2 sm:px-4 flex items-center gap-4">
                <span style={{ color: "#EA4040", fontSize: "30px" }}>✖</span>
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-left font-normal text-[#ffffff]">
                  Secret-sauce
                </h3>
              </div>
              <div className="px-2 sm:px-4 flex items-center gap-4">
                <span style={{ color: "#EA4040", fontSize: "30px" }}>✖</span>
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-left font-normal text-[#ffffff]">
                  A playbook
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto p-4 sm:p-6 md:p-8 lg:p-1 pb-16">
          <div className="h-auto md:h-[40px] w-max py-2 px-5 bg-[#ceff2a] m-auto rounded-[20px] flex justify-center items-center mt-10 sm:mt-12 md:mt-26 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            OUR WHY
          </div>

          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#0C2233] leading-snug md:leading-[1.5rem] lg:leading-[2.5rem] mt-4 text-center px-4 sm:px-10 md:px-16 lg:px-78">
            Tuff was born because we were tired of talking to startups and
            established brands that were getting the runaround; being sold
            growth plans full of mysterious behind-the-scenes work, cumbersome
            roadblocks, shallow results, and quick wins with no follow through.
            We’re built to be highly autonomous or fully collaborative, becoming
            an always-on extension of your team.
          </h3>

          <div className="flex items-center justify-center mt-6 sm:mt-8 px-2">
            <img
              src={team}
              alt="team"
              loading="lazy"
              className="w-full sm:w-[80%] md:w-[72%] lg:w-[66%]"
            />
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="w-[90%] sm:w-[80%] md:w-[65%] lg:w-[45%] m-auto">
            <div className="h-auto md:h-[40px] w-max py-2 px-5 bg-[#ceff2a] m-auto rounded-[20px] flex justify-center items-center mt-10 sm:mt-12 md:mt-26 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
              OUR TEAM
            </div>

            <h3 className="text-[20px] sm:text-[26px] md:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug md:leading-[2.5rem] lg:leading-[3.5rem] mt-4 text-center">
              Meet the team = your new Growth Marketing Agency
            </h3>

            <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#0C2233] text-center mx-auto mt-4 px-2">
              As your business grows, so does the complexity of hiring the right
              people. Don’t set your business a year back by hiring the wrong
              growth marketer. Instead, work with multi-disciplinary executors
              and grow your business with less hassle and risk.
            </p>
          </div>

          <div className="w-full h-auto flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-0 mt-11 px-4 sm:px-8 md:px-14 lg:px-19">
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={ellen} alt="ellen" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Ellen Jantsch
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Founder
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={kris} alt="kris" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Kristin Dick
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                General Manager
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={han} alt="han" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Hannah Burks
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Creative Operations
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={ric} alt="ric" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Richard Meyer
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Growth Marketing
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={kelly} alt="kelly" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Kelly Rye
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Creative Strategy
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={katie} alt="katie" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Katie Magnus
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Creative Strategy
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={travis} alt="travis" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Travis Buechner
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Motion Design
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={megan} alt="megan" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Megan Trusley
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Creative Design + Operations
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={adelle} alt="adelle" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Adelle Cron
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Creative Design
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={arturo} alt="artudo" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Arturo Hurtado
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Web Design
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={sean} alt="sean" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Sean Tremaine
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Web Design
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={lauren} alt="lauren" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Lauren Keene
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Copywriting
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={derek} alt="derek" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Derek Coleman
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                SEO Strategy
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={spencer} alt="spencer" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Spencer Cappelli
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                SEO Strategy
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={kate} alt="kate" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Kate Theobald
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Social Ads Strategy
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={jack} alt="jack" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Jack DiGregorio
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Social Ads Strategy
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={emily} alt="emily" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Emily Newport
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                Social Ads Strategy
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={chris} alt="chris" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Chris Alarcon
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                PPC Strategy
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={adli} alt="adli" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">
                Adli Kilic
              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">
                PPC Strategy
              </p>
            </div>
            <div className="h-auto w-[90%] sm:w-[48%] md:w-[40%] lg:w-[22.7%] pb-10">
              <img src={null} alt="" />
              <h3 className="text-[20px] font-bold text-[#0c2233] text-center mt-3">

              </h3>
              <p className="text-[16px] font-normal text-[#0C2233] text-center mx-auto">

              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalSection text={box}/>

      <Footer />
    </>
  );
}
