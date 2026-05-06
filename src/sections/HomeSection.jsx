import React from "react";
import Navbar from "../components/NavbarNew";
import NavbarNew from "../components/NavbarNew";
import OurClients from "../components/OurClients";
import HeroTeam from "../assets/HeroTeam.png";
import HavitTeam from "../assets/teamhavit.png"
import aarp from "../assets/aarp.svg";
import multiverse from "../assets/multiverse.svg";
import punchbow from "../assets/punchbow.svg";
import soona from "../assets/soona.svg";
import teachable from "../assets/teachable.svg";
import thnks from "../assets/thnks.svg";
import Home from "../assets/Home.png";
import Servies from "../assets/Servies.png";
import Hustle from "../assets/hustle.svg";
import alden from "../assets/alden.png";
import star from "../assets/star.svg";
import rikin from "../assets/rikin.png";
import bonita from "../assets/bonita.png";
import tech from "../assets/tech.svg";
import star1 from "../assets/star1.svg";
import home1 from "../assets/home1.png";
import home3 from "../assets/home3.png";
import acres from "../assets/acres.jpg";
import acreslogo from "../assets/acres-logo.svg";
import starri from "../assets/starri.jpg";
import starrilogo from "../assets/starrilogo.svg";
import team from "../assets/team.png";
import { BiChevronRight } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../components/Footer";
import CaseStudiesPoster from '../components/CaseStudiesPoster'
import { Link } from "react-router-dom";

import advisory from "../assets/Logo/advisory-corp.png"
import alsaud from "../assets/Logo/al-saud.png"
import capital from "../assets/Logo/c-capital.png"
import checkin from "../assets/Logo/checkin.png"
import dispatch from "../assets/Logo/dispatch.png"
import fgf from "../assets/Logo/FGF.png"
import ideeza from "../assets/Logo/ideeza.png"
import idk from "../assets/Logo/idk.png"
import ldnio from "../assets/Logo/LDNIO.png"
import peace from "../assets/Logo/peace-skin.png"
import pixmo from "../assets/Logo/pixmo.png"
import rfc from "../assets/Logo/RFC.png"
import rm from "../assets/Logo/RM.png"
import santa from "../assets/Logo/santa_voyage.png"
import seee from "../assets/Logo/SEEE-tech.png"
import sk from "../assets/Logo/SK.png"
import slipper from "../assets/Logo/slipper.png"
import sonderblu from "../assets/Logo/sonderblu.png"
import space from "../assets/Logo/Space.png"
import tgr from "../assets/Logo/TGR.png"
import moran from "../assets/moran.jpeg"
import ldnioBanner from '../assets/Ldnio.webp'
import rfcBanner from '../assets/RFC.webp'


export default function HomeSection() {
  return (
    <>
      <div className="w-full lg:fixed  top-0 z-50 bg-[#1e1e1e]">
        <NavbarNew />
      </div>

      <section className="w-full h-full homeImg pt-20">
        <div className="w-full h-max ">
          <div className="max-w-[1700px] mx-auto flex flex-col lg:flex-row px-5 md:px-10 lg:px-20 min-[120rem]:px-0 ">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="h-auto md:h-[39px] md:w-max bg-[#FFFFFF] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal">
                HAVE IT ALL AT HAVIT
              </div>
              <h1 className="text-[32px text-left sm:text-[48px]  font-semibold text-white leading-tight  mt-6 tracking-tight">
                Find traction and growth with an expert-led,on-demand{" "}
                <span className="text-[#CEFD94]">growth team.</span>
              </h1>
              <p className="text-base sm:text-lg text-white mt-4 leading-[27px] max-w-[95%]">
                We help brands cut through the noise and find clarity. And, the most important lesson learned = growth is a process not an outcome. Team up with our growth strategist and deep squad of marketing specialists to grow your business with less risk, hassle, and cost.
              </p>
              <Link to='/get-started-with-havit-growth'>
                <button className="text-lg sm:text-xl cursor-pointer font-semibold text-[#0C2233] bg-[#ceff2a] mt-6 px-6 py-4 rounded-md transition-transform duration-500 tilt-zoom">
                  Let’s Grow
                </button>
              </Link>
            </div>

            <div className="lg:hidden w-full my-10">
              <div className="w-full h-[100px] bg-[#CEFD94] -rotate-0 overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex animate-slide-right whitespace-nowrap items-center">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      <img src={advisory} alt="advisory" className="h-full w-auto mx-10" />
                      <img src={alsaud} alt="al-saud" className="h-full w-auto mx-10" />
                      <img src={capital} alt="capital" className="h-full w-auto mx-10" />
                      <img src={dispatch} alt="dispatch" className="h-full w-auto mx-10" />
                      <img src={fgf} alt="fgf" className="h-full w-auto mx-10" />
                      <img src={ideeza} alt="ideeza" className="h-full w-auto mx-10" />
                      <img src={idk} alt="idk" className="h-full w-auto mx-10" />
                      <img src={ldnio} alt="ldnio" className="h-full w-auto mx-10" />
                      <img src={peace} alt="peace" className="h-full w-auto mx-10" />
                      <img src={pixmo} alt="pixmo" className="h-full w-auto mx-10" />
                      <img src={rfc} alt="rfc" className="h-full w-auto mx-10" />
                      <img src={rm} alt="rm" className="h-full w-auto mx-10" />
                      <img src={santa} alt="santa" className="h-full w-auto mx-10" />
                      <img src={seee} alt="seee" className="h-full w-auto mx-10" />
                      <img src={sk} alt="sk" className="h-full w-auto mx-10" />
                      <img src={slipper} alt="slipper" className="h-full w-auto mx-10" />
                      <img src={sonderblu} alt="sonderblu" className="h-full w-auto mx-10" />
                      <img src={space} alt="space" className="h-full w-auto mx-10" />
                      <img src={tgr} alt="tgr" className="h-full w-auto mx-10" />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 px-0 lg:px-9 pt-6 lg:pt-0">
              <img
                src={HeroTeam}
                alt="HeroTeam"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>


          <div
            className="hidden lg:block w-full h-[120px] top-0  overflow-hidden relative mt-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex animate-slide-right whitespace-nowrap items-center">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <img src={advisory} alt="advisory" className="h-full w-auto mx-10" />
                  <img src={alsaud} alt="al-saud" className="h-full w-auto mx-10" />
                  <img src={capital} alt="capital" className="h-full w-auto mx-10" />
                  <img src={dispatch} alt="dispatch" className="h-full w-auto mx-10" />
                  <img src={fgf} alt="fgf" className="h-full w-auto mx-10" />
                  <img src={ideeza} alt="ideeza" className="h-full w-auto mx-10" />
                  <img src={idk} alt="idk" className="h-full w-auto mx-10" />
                  <img src={ldnio} alt="ldnio" className="h-full w-auto mx-10" />
                  <img src={peace} alt="peace" className="h-full w-auto mx-10" />
                  <img src={pixmo} alt="pixmo" className="h-full w-auto mx-10" />
                  <img src={rfc} alt="rfc" className="h-full w-auto mx-10" />
                  <img src={rm} alt="rm" className="h-full w-auto mx-10" />
                  <img src={santa} alt="santa" className="h-full w-auto mx-10" />
                  <img src={seee} alt="seee" className="h-full w-auto mx-10" />
                  <img src={sk} alt="sk" className="h-full w-auto mx-10" />
                  <img src={slipper} alt="slipper" className="h-full w-auto mx-10" />
                  <img src={sonderblu} alt="sonderblu" className="h-full w-auto mx-10" />
                  <img src={space} alt="space" className="h-full w-auto mx-10" />
                  <img src={tgr} alt="tgr" className="h-full w-auto mx-10" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16  md:mt-28 max-w-[1700px] mx-auto">
        <div className="w-full  flex flex-col lg:flex-row px-4 md:px-8 lg:px-[76px] min-[120rem]:px-0">
          <div className="w-full lg:w-[50%] h-max mt-10 lg:mt-[70px] flex justify-center items-center pr-0 lg:pr-9 order-2 lg:order-1">
            <img
              src={Home}
              alt="Home"
              loading="lazy"
              className="w-full h-auto max-w-[800px]"
            />
          </div>

          <div className="w-full lg:w-[50%] h-auto pt-10 lg:pt-[100px] px-4 lg:px-8 order-1 lg:order-2">
            <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#0C2233] w-full text-left leading-[1.4]">
              Building Real Growth Through Strategy & Structure
            </h3>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              Growth doesn’t happen by chance; it’s built through clarity, focus, and smart execution. Every strong business starts with the right strategy & a process that keeps things moving forward. That’s where structured planning, data-driven insights, and steady leadership make the real difference.
            </p>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              No big promises; just a clear path that turns efforts into progress and progress into results.
            </p>
            <Link to={"/our-company"}>
              <p className="flex items-center gap-1 text-[18px] lg:text-[20px] font-semibold mt-5 hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                Learn how we take care of you
                <span>
                  <BiChevronRight className="text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </p>

            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row px-4 md:px-8 lg:px-[76px] py-20 min-[120rem]:px-0">
          <div className="w-full lg:w-[50%] h-auto pt-10 lg:pt-[100px] px-4 lg:px-8 order-1 lg:order-1">
            <h3 className="text-[28px] md:text-[32px] lg:text-[35px] font-semibold text-[#0C2233] w-full lg:w-[80%] leading-[1.4] text-left">
              Your compounding growth curve begins here.
            </h3>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              Combining creative direction, full funnel growth marketing, and tech-driven execution to scale businesses across industries-especially in E-commerce, Healthcare, Fintech, Blockchain, Travel & Tour, EdTech, B2B & B2C ecosystem.
            </p>

            <Link to={"/services"}>
              <p className="flex items-center gap-1 text-[18px] lg:text-[20px] font-semibold mt-5 hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                Lean more about our specialisation
                <span>
                  <BiChevronRight className="text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </p>
            </Link>
          </div>

          <div className="w-full lg:w-[50%] h-max mt-10 lg:mt-[70px] flex justify-center items-center pr-0 lg:pr-9 order-2 lg:order-2">
            <img
              src={Servies}
              alt="Services"
              loading="lazy"
              className="w-full h-auto max-w-[600px]"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full homeImg1 h-max bg-] ">
          <div className="w-full h-full max-w-[1700px] mx-auto">
            <div className="w-full h-auto text-center flex flex-col items-center pt-10 lg:pt-19 px-4 min-[120rem]:px-0">
              <p className="text-[20px] w-full lg:w-3/4 sm:text-[24px] lg:text-[28px] leading-8 lg:leading-9 font-semibold text-[#0C2233] text-center mt-6">
                <span className="bg-[#CEFD94] px-1">
                  You need results you can count on. The team at Havit provide a clear strategy for success, not another empty promise based on hype.
                </span>
              </p>
              <p className="text-[20px] sm:text-[24px] lg:text-[28px] leading-8 lg:leading-9 font-semibold text-white w-full sm:w-[90%] lg:w-[67%] text-center mt-6">
                By prioritizing transparency and a data-driven approach of experimentation, the agency has built a strong reputation for delivering results, evidenced by the numerous warm recommendations.
              </p>
              <img src={star1} alt="star1" loading="lazy" className="mt-8" />
            </div>

            <div className="w-full md:bg-transparent flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center items-center lg:justify-between pt-8 md:mt-16 px-4 sm:px-10 lg:px-19 pb-10">
              <div className="w-full h-full sm:w-[80%] lg:w-[31.7%] bg-[#FFFFFF] flex flex-col items-center pt-14 pb-11">
                <div>
                  <img
                    src={ideeza}
                    alt="ideeza"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <div className="mt-9">
                  <img
                    src={moran}
                    alt="alden"
                    loading="lazy"
                    className="md:w-[70%] w-[60%] m-auto"
                  />
                </div>
                <h3 className="text-[20px] text-[black] font-bold text-center mt-6">
                  Moran Biton
                </h3>
                <p className="text-[20px] text-[black] font-normal text-center mt-[-5px]">
                  Founder & CEO
                </p>
                <div className="mt-7">
                  <img
                    src={star}
                    alt="star"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <div className=" text-lg w-3/4 text-justify mt-10">
                  Havit understood our needs and delivered customized digital solutions that drove real growth. From SEO to email marketing, their holistic approach was impactful. Their team’s commitment to our goals and measurable results sets them apart.
                </div>
                {/* <button className="h-auto w-max p-2 px-[21px] text-black flex items-center gap-2 rounded-[2px] text-[18px] font-semibold mt-7 border-2 border-[black] transition-transform duration-500 tilt-zoom">
                  <span>
                    <IoPlayOutline className="text-[30px] text-black" />
                  </span>
                  Watch Client Story
                </button> */}
              </div>

              <div className="w-full h-full sm:w-[80%] lg:w-[31.7%] bg-[#FFFFFF] flex flex-col items-center pt-14 pb-11">
                <div>
                  <img
                    src={sonderblu}
                    alt="soona"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <div className="mt-9 ">
                  <img
                    src={rikin}
                    alt="rikin"
                    loading="lazy"
                    className="md:w-[70%] w-[60%] m-auto "
                  />
                </div>
                <h3 className="text-[20px] text-[black] font-bold text-center mt-6">
                  Hope Corohan
                </h3>
                <p className="text-[20px] text-[black] font-normal text-center mt-[-5px]">
                  CEO
                </p>
                <div className="mt-7">
                  <img
                    src={star}
                    alt="star"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <div className=" text-lg w-3/4 text-justify mt-10">
                  Havit was a lifesaver! Their expertise in IPTV technology and custom app development exceeded my expectations. They are professional, efficient, and results-driven. I’m grateful for their work and look forward to future collaborations.
                </div>
                {/* <button className="h-auto w-max p-2 px-[21px] text-black flex items-center gap-2 rounded-[2px] text-[18px] font-semibold mt-7 border-2 border-[black] transition-transform duration-500 tilt-zoom">
                  <span>
                    <IoPlayOutline className="text-[30px] text-black" />
                  </span>
                  Watch Client Story
                </button> */}
              </div>

              <div className="w-full h-full sm:w-[80%] lg:w-[31.7%] bg-[#FFFFFF] flex flex-col items-center pt-14 pb-11">
                <div>
                  <img
                    src={dispatch}
                    alt="teachable"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <div className="mt-9">
                  <img
                    src={bonita}
                    alt="bonita"
                    loading="lazy"
                    className="md:w-[70%] w-[60%] m-auto"
                  />
                </div>
                <h3 className="text-[20px] text-[black] font-bold text-center mt-6">
                  Walid Bin Khalid
                </h3>
                <p className="text-[20px] text-[black] font-normal text-center mt-[-5px]">
                  Founder
                </p>
                <div className="mt-7">
                  <img
                    src={star}
                    alt="star"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <div className=" text-lg w-3/4 text-justify mt-10">
                  Havit Growth Agency transformed our business with seamless digital solutions. Their expertise in online store setup, CRM, and automation streamlined operations, enhanced customer experiences, and drove growth. A game-changing partnership!
                </div>
                {/* <button className="h-auto w-max p-2 px-[21px] text-black flex items-center gap-2 rounded-[2px] text-[18px] font-semibold mt-7 border-2 border-[black] transition-transform duration-500 tilt-zoom">
                  <span>
                    <IoPlayOutline className="text-[30px] text-black" />
                  </span>
                  Watch Client Story
                </button> */}
              </div>
            </div>
            <div className="flex flex-col items-center pb-16 px-6 sm:px-10 xl:px-[200px] pt-[60px] lg:pt-[100px] text-center">
              <div className="h-auto p-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
                CLIENT STORIES
              </div>
              <h3 className="text-[24px] sm:text-[32px] lg:text-[42px] font-semibold text-[#FFFEFB] leading-snug lg:leading-[3.5rem] mt-4">
                Looking for a reason to believe? Find inspiration in growth stories from businesses like yours.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col items-center pt-25 sm:pt-24 px-4 sm:px-6 z-0">
          <div className="h-[40px] w-max p-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            WHAT WE DO
          </div>

          <h3 className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug lg:leading-[3.5rem] mt-4 text-center">
            You’ve got growth goals? We’ll build the roadmap.
          </h3>

          <p className="text-[16px] sm:text-[17px] lg:text-2xl font-medium text-[#0C2233] text-center w-full sm:w-[80%] md:w-[75%] lg:w-[69%] mt-4">
            Have an expert growth strategy, planning, and leadership from a proven growth marketing process and team.
          </p>

          <div className="w-full h-auto flex items-center justify-center px-2 sm:px-0">
            <img
              src={home1}
              alt="home1"
              loading="lazy"
              className=" md:w-auto w-full"
            />
          </div>
        </div>

        <div className="w-full  flex flex-col lg:flex-row px-4 md:px-8 lg:px-[40px] max-w-[1700px] mx-auto min-[120rem]:px-0">
          <div className="w-full lg:w-[50%] h-auto pt-10 lg:pt-[130px] px-4 lg:px-15 order-1 lg:order-1">
            <div className="h-[40px] w-max p-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
              OUR PROCESS
            </div>
            <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-black mt-4 text-[#0C2233] w-full lg:w-[90%] leading-[1.4] text-left">
              Our process is simple: learn, activate, analyze, optimize, repeat.
            </h3>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              There’s no blueprint for growth. But over the years, we’ve
              developed, battle tested, honed, and refined a process that allows
              us to start lean and quickly identify what works
            </p>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              Before we write one line of copy or spend a dollar, we’ll align on
              your objectives and center them as our north star. Then we’ll dig
              deep into your audience and historical data to make sure we
              clearly identify them, benchmark your progress to date, and build
              a specific, prioritized marketing strategy designed to drive
              growth.
            </p>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              Execution happens in the hands of deeply experienced channel
              experts who continuously test, optimize, and uncover new
              opportunities. Ultimately, we emerge with detailed findings and a
              clear understanding of how you win for the long term.
            </p>
            <Link to={"/get-started-with-havit-growth"} className=" w-1/5">
              <span className="flex w-fit items-center gap-1 text-[18px] lg:text-[20px] font-semibold my-5 hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                Learn how it all works
                <span>
                  <BiChevronRight className="text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </span>
            </Link>
          </div>

          <div className="w-full lg:w-[50%] h-max mt-10 lg:mt-[124px] flex justify-center order-2 lg:order-2">
            <img
              src={home3}
              alt="home3"
              loading="lazy"
              className="w-full h-auto max-w-[600px]"
            />
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

        <CaseStudiesPoster />
        <Link to={"/portfolios"}>
          <div className="w-max px-6 py-2 border-2 border-white text-[#FFFEFB] text-[18px] lg:text-[20px] font-semibold m-auto mt-10 transition-transform duration-500 tilt-zoom">
            View all case studies
          </div>
        </Link>
      </section>
      <section>
        <div className="w-full h-auto p-1 pb-24 max-w-[1700px] mx-auto">
          <div className="h-[40px] w-max p-2 bg-[#CEEF2A] m-auto rounded-[20px] flex justify-center items-center px-5 mt-26 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            TESTIMONIALS
          </div>
          <p className="text-[16px] lg:text-[48px] font-semibold lg:leading-14 leading-normal lg:tracking-[-2px] text-[#0C2233] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] text-center mt-4 mx-auto">
            We focus on finding traction and scale for brands, ideas, and
            campaigns for teams of all sizes.
          </p>
          <div className="w-full h-auto flex flex-wrap justify-center lg:justify-between gap-y-16 gap-x-5 px-4 lg:px-18 pt-19 min-[120rem]:px-0">
            <div className="w-full lg:w-[49%] h-auto pl-0 lg:pl-5">
              <img
                src={star1}
                alt="star"
                loading="lazy"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(71%) sepia(13%) saturate(2254%) hue-rotate(128deg) brightness(96%) contrast(85%)",
                }}
              />
              <p className="text-[20px] md:text-[24px] font-medium text-[#000000] leading-8 mt-7">
                <span className="text-[#0C2233] font-bold">
                  Business Website Overhaul <br />
                </span>
                Our outdated website was hindering our online presence and credibility. Havit Growth Agency transformed our website into a sleek, user-friendly platform that showcases our brand and offerings effectively. Not only did they enhance the design and functionality, but they also optimized it for search engines, resulting in higher visibility and organic traffic. Thanks to their expertise, our website now serves as a powerful tool for attracting and converting leads.
              </p>
              <div className="flex mt-5 gap-4">
                {/* <div className="rounded-[40%] w-[10%] h-[10%]">
                  <img src={landy} alt="landy" loading="lazy" />
                </div> */}
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Noman
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    CTO AAS Foundation
                  </p>
                </div>
              </div>
            </div>
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
              <p className="text-[20px] md:text-[24px] font-medium text-[#000000] leading-8 mt-7">
                <span className="text-[#0C2233] font-bold">
                  Strategic Consultation <br />
                </span>
                Navigating the digital landscape can be daunting, but Havit Growth Agency provided expert guidance every step of the way. Their strategic consultation helped us identify untapped opportunities and refine our marketing approach for maximum impact. With their insights and recommendations, we’ve been able to optimize our resources and achieve sustainable growth that exceeds our expectations.
              </p>
              <div className="flex mt-5 gap-4">
                {/* <div className="rounded-[40%] w-[10%] h-[10%]">
                  <img src={sashee} alt="sashee" loading="lazy" />
                </div> */}
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Emily Chang
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Executive Officer
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[49%] h-auto mt-5 md:mt-24 pl-0 lg:pl-5">
              <img
                src={star1}
                alt="star"
                loading="lazy"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(71%) sepia(13%) saturate(2254%) hue-rotate(128deg) brightness(96%) contrast(85%)",
                }}
              />
              <p className="text-[20px] md:text-[24px] font-medium text-[#000000] leading-8 mt-7">
                <span className="text-[#0C2233] font-bold">
                  Tailored Digital Solutions <br />
                </span>
                Havit understood our unique business needs and crafted customized digital solutions that addressed our specific challenges. From SEO optimization to email marketing campaigns, their holistic approach has had a profound impact on our business growth. Their team’s commitment to understanding our goals and delivering measurable results sets them apart in the industry.
              </p>
              <div className="flex mt-5 gap-4">
                {/* <div className="rounded-[40%] w-[10%] h-[10%]">
                  <img src={jordan} alt="jordan" loading="lazy" />
                </div> */}
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Daniel Lee
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Co-founder
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[49%] h-auto mt-5 md:mt-24">
              <img
                src={star1}
                alt="star"
                loading="lazy"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(71%) sepia(13%) saturate(2254%) hue-rotate(128deg) brightness(96%) contrast(85%)",
                }}
              />
              <p className="text-[20px] md:text-[24px] font-medium text-[#000000] leading-8 mt-7">
                <span className="text-[#0C2233] font-bold">
                  Digital Strategy Transformation <br />
                </span>
                As a small business owner, I was overwhelmed by the complexities of digital marketing. Havit Growth Agency provided invaluable guidance and support in developing a comprehensive digital strategy tailored to our goals and budget. Their team’s proactive approach and personalized solutions have propelled our business growth and visibility, turning challenges into opportunities.
              </p>
              <div className="flex mt-5 gap-4">
                {/* <div className="rounded-[40%] w-[10%] h-[10%] ">
                  <img src={Laurens} alt="Laurens" loading="lazy" />
                </div> */}
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Rachel Martinez
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    CEO
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[49%] h-auto mt-5 md:mt-24 pl-0 lg:pl-5">
              <img
                src={star1}
                alt="star"
                loading="lazy"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(71%) sepia(13%) saturate(2254%) hue-rotate(128deg) brightness(96%) contrast(85%)",
                }}
              />
              <p className="text-[20px] md:text-[24px] font-medium text-[#000000] leading-8 mt-7">
                <span className="text-[#0C2233] font-bold">
                  Our Essential Digital Partner <br />
                </span>
                Havit delivered exceptional expertise across every challenge. Their strategic consultation provided tailored digital solutions, including custom app development, SEO-optimized website overhaul, and end-to-end digitalization (CRM, automation, online store setup). Their commitment to understanding our goals and delivering measurable results fundamentally transformed our operations, fueling sustainable growth, and exceeding expectations. They are an invaluable partner.
              </p>
              <div className="flex mt-5 gap-4">
                {/* <div className="rounded-[40%] w-[10%] h-[10%] ">
                  <img src={aide} alt="aide" loading="lazy" />
                </div> */}
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Peace Skin-vestment
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <OurClients />
      </section>
      <section>
        <div className="w-full h-auto p-1 pb-16">
          <div className="h-[40px] w-max p-2 bg-[#CEEF2A] m-auto rounded-[20px] flex justify-center items-center px-5 mt-10 sm:mt-12 md:mt-26 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            ABOUT US
          </div>

          <h3 className="text-[22px] sm:text-[30px] md:text-[36px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug md:leading-[2.5rem] lg:leading-[3.5rem] mt-4 text-center">
            Meet Havit's Team
          </h3>

          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#0C2233] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] text-center mx-auto mt-4">
            More than service providers, we are dedicated partners. The Havit team brings together specialized skills, including <b>SEO optimization, custom development, strategic consultation</b>, and <b>data-driven insights.</b> We thrive on a <b>holistic, all-in- one approach</b>, where every thought is on the table to deliver comprehensive results. We look for proactive partners eager to join us in establishing powerful, long-term relationships that lead to success.
          </p>

          <Link to={"/our-company"}>
            <p className="flex items-center justify-center w-max gap-1 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-semibold mt-5 hover:text-[#FF6A39] cursor-pointer mx-auto transition-transform duration-500 tilt-zoom hover:text-[19px] md:hover:text-[20px] lg:hover:text-[21px]">
              Get to know us
              <span>
                <BiChevronRight className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
              </span>
            </p>
          </Link>

          <div className="flex items-center justify-center mt-6 sm:mt-8 max-w-[1700px] mx-auto">
            <img
              src={ldnioBanner}
              alt="team"
              loading="lazy"
              className="w-[90%] sm:w-[80%] md:w-[72%] lg:w-[85%]"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full my-20 max-w-[1700px] mx-auto flex items-center justify-center p-1 md:px-19 min-[120rem]:px-0">
          <div className="w-[90%] md:w-full h-[360px] bg-[#5A2AFF] flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-[30px] sm:text-[42px] md:text-[52px] font-semibold text-[#FFFEFB]">
              Ready to grow?
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium mt-3 text-[#FFFEFB]">
              Your compounding growth curve begins here.
            </p>
            <Link to={"/get-started-with-havit-growth"}>
              <button className="text-[#0C2233] cursor-pointer text-[18px] md:text-[22px] font-bold mt-6 p-4 bg-[#ceff2a] px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                Book a Strategy Call
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
