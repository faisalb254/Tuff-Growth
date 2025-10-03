import React from "react";
import Navbar from "../components/Navbar";
import HeroTeam from "../assets/HeroTeam.png";
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
import home1 from "../assets/home1.svg";
import home3 from "../assets/home3.png";
import acres from "../assets/acres.jpg";
import acreslogo from "../assets/acres-logo.svg";
import starri from "../assets/starri.jpg";
import starrilogo from "../assets/starrilogo.svg";
import jamie from "../assets/jamie.png";
import landy from "../assets/landy.png";
import brad from "../assets/brad.png";
import micheal from "../assets/micheal.png";
import sashee from "../assets/sashee.png";
import jordan from "../assets/jordan.png";
import Laurens from "../assets/Laurens.png";
import aide from "../assets/aide.png";
import cl1 from "../assets/cl1.svg";
import cl2 from "../assets/cl2.svg";
import cl3 from "../assets/cl3.svg";
import cl4 from "../assets/cl4.svg";
import cl5 from "../assets/cl5.svg";
import cl6 from "../assets/cl6.svg";
import cl7 from "../assets/cl7.svg";
import cl8 from "../assets/cl8.svg";
import cl9 from "../assets/cl9.svg";
import cl10 from "../assets/cl10.svg";
import cl11 from "../assets/cl11.svg";
import cl12 from "../assets/cl12.svg";
import cl13 from "../assets/cl13.svg";
import cl14 from "../assets/cl14.svg";
import cl15 from "../assets/cl15.svg";
import cl16 from "../assets/cl16.svg";
import team from "../assets/team.png";
import { BiChevronRight } from "react-icons/bi";
import { IoPlayOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function HomeSection() {
  return (
    <>
      <div className="w-full fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section className="w-full h-full homeImg pt-[135px]">
        <div className="w-full h-max">
          <div className="flex flex-col lg:flex-row px-5 md:px-10 lg:px-20">
            <div className="w-full lg:w-1/2">
              <div className="h-auto md:h-[39px] md:w-max bg-[#FFFFFF] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal">
                GROWTH WITHOUT THE GUESSWORK
              </div>

              <h1 className="text-[32px] sm:text-[48px] lg:text-[72px] font-semibold text-white leading-tight lg:leading-[70px] mt-6 tracking-tight">
                Find traction and growth with an expert-led,on-demand{" "}
                <span className="text-[#CEFD94]">growth team.</span>
              </h1>
              <p className="text-base sm:text-lg text-white mt-4 leading-[27px] max-w-[95%]">
                We’ve been around the block. And, the most important lesson
                learned = growth is a process not an outcome. Team up with our
                growth strategist and deep squad of marketing specialists to
                grow your business with less risk, hassle, and cost.
              </p>
              <Link to='/get-started-with-tuff'>
                <button className="text-lg sm:text-xl cursor-pointer font-semibold text-[#0C2233] bg-[#ceff2a] mt-6 px-6 py-4 rounded-md transition-transform duration-500 tilt-zoom">
                  Book an intro call
                </button>
              </Link>
            </div>

            <div className="lg:hidden w-full my-10">
              <div className="w-full h-[100px] bg-[#CEFD94] -rotate-1 overflow-hidden relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex animate-slide-right whitespace-nowrap">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      <img
                        src={aarp}
                        alt="img1"
                        className="h-full w-auto mx-10"
                      />
                      <img
                        src={multiverse}
                        alt="img2"
                        className="h-full w-auto mx-10"
                      />
                      <img
                        src={punchbow}
                        alt="img3"
                        className="h-full w-auto mx-10"
                      />
                      <img
                        src={soona}
                        alt="img4"
                        className="h-full w-auto mx-10"
                      />
                      <img
                        src={teachable}
                        alt="img5"
                        className="h-full w-auto mx-10"
                      />
                      <img
                        src={thnks}
                        alt="img6"
                        className="h-full w-auto mx-10"
                      />
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
            className="hidden lg:block w-full h-[120px] -rotate-1 overflow-hidden relative mt-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex animate-slide-right whitespace-nowrap">
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <img src={aarp} alt="img1" className="h-full w-auto mx-10" />
                  <img
                    src={multiverse}
                    alt="img2"
                    className="h-full w-auto mx-10"
                  />
                  <img
                    src={punchbow}
                    alt="img3"
                    className="h-full w-auto mx-10"
                  />
                  <img src={soona} alt="img4" className="h-full w-auto mx-10" />
                  <img
                    src={teachable}
                    alt="img5"
                    className="h-full w-auto mx-10"
                  />
                  <img src={thnks} alt="img6" className="h-full w-auto mx-10" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 md:mt-28">
        <div className="w-full min-h-screen flex flex-col lg:flex-row px-4 md:px-8 lg:px-[76px]">
          <div className="w-full lg:w-[50%] h-max mt-10 lg:mt-[70px] flex justify-center pr-0 lg:pr-9 order-2 lg:order-1">
            <img
              src={Home}
              alt="Home"
              loading="lazy"
              className="w-full h-auto max-w-[600px]"
            />
          </div>

          <div className="w-full lg:w-[50%] h-auto pt-10 lg:pt-[154px] px-4 lg:px-8 order-1 lg:order-2">
            <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#0C2233] w-full lg:w-[80%] leading-[1.4]">
              We believe growth is a process, not an outcome.
            </h3>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              We build custom teams that click into your business and act as an
              in-house growth marketing team, replacing the hassle and risk of
              prematurely hiring and managing an in-house marketer or team of
              freelancers.
            </p>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              Our bread and butter is building efficient, holistic marketing
              strategies. We do this with our process. We stay hungry for
              research, then execute to a T, consistently optimizing and
              refining to find maximum efficiencies. We do this with our team.
              Egoless and curious, we share hypotheses and findings with your
              team and each other to find more streamlined paths to growth.
            </p>
            <Link to={"/our-company"}>
              <p className="flex items-center gap-1 text-[18px] lg:text-[20px] font-semibold mt-5 hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                Learn more about our approach
                <span>
                  <BiChevronRight className="text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </p>

            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full min-h-screen flex flex-col lg:flex-row px-4 md:px-8 lg:px-[76px]">
          <div className="w-full lg:w-[50%] h-auto pt-10 lg:pt-[154px] px-4 lg:px-8 order-1 lg:order-1">
            <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#0C2233] w-full lg:w-[80%] leading-[1.4]">
              Your compounding growth curve begins here.
            </h3>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              Enable your team with expert growth strategy, planning, and
              leadership from a proven growth marketing process and team. We
              have full-stack skills and technical expertise, so we’re not
              afraid to get in the weeds.
            </p>
            <p className="text-[16px] lg:text-[18.7px] font-normal text-[#0C2233] mt-4 lg:mt-6">
              This includes things like rapid message testing, building
              amazingly effective web pages, usability testing, ad optimization,
              A/B testing, and multivariate testing. It’s time to move beyond
              simply implementing tactics and start designing the right process
              with the right growth strategy.
            </p>
            <Link to={"/services"}>
              <p className="flex items-center gap-1 text-[18px] lg:text-[20px] font-semibold mt-5 hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                Learn more about our services
                <span>
                  <BiChevronRight className="text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </p>
            </Link>
          </div>

          <div className="w-full lg:w-[50%] h-max mt-10 lg:mt-[70px] flex justify-center pr-0 lg:pr-9 order-2 lg:order-2">
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
        <div className="w-full homeImg1 h-max bg-]">
          <div className="w-full h-full">
            <div className="w-full h-auto flex flex-col items-center pt-10 lg:pt-19 px-4">
              <p className="text-[20px] sm:text-[24px] lg:text-[28px] leading-8 lg:leading-9 font-semibold text-[#0C2233] text-center mt-6">
                <span className="bg-[#CEFD94] px-1">
                  “The team at Tuff knows their stuff – and it’s precisely why
                  they are not
                </span>
                <br />
                <span className="bg-[#CEFD94] px-1 texc">
                  selling ‘magic’ or any kind of ‘mysterious sauce.’
                </span>
              </p>
              <p className="text-[20px] sm:text-[24px] lg:text-[28px] leading-8 lg:leading-9 font-semibold text-white w-full sm:w-[90%] lg:w-[67%] text-center mt-6">
                Instead, they are betting on transparency and experimentation,
                and it seems to be working well: The agency was warmly
                recommended to TechCrunch multiple times via our growth
                marketing survey.”
              </p>
              <img src={star1} alt="star1" loading="lazy" className="mt-8" />
              <p className="text-[18px] sm:text-[20px] leading-8 font-semibold text-white w-full sm:w-[90%] lg:w-[67%] text-center mt-5">
                Tuff in TechCrunch (Full Article)
              </p>
            </div>

            <div className="w-full md:bg-transparent flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center items-center lg:justify-between pt-8 md:mt-16 px-4 sm:px-10 lg:px-19 pb-10">
              <div className="w-full sm:w-[80%] lg:w-[31.7%] bg-[#FFFFFF] flex flex-col items-center pt-14 pb-11">
                <div>
                  <img
                    src={Hustle}
                    alt="Hustle"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <div className="mt-9">
                  <img
                    src={alden}
                    alt="alden"
                    loading="lazy"
                    className="md:w-[70%] w-[60%] m-auto"
                  />
                </div>
                <h3 className="text-[20px] text-[black] font-bold text-center mt-6">
                  Alden Schell
                </h3>
                <p className="text-[20px] text-[black] font-normal text-center mt-[-5px]">
                  Head of Marketing
                </p>
                <div className="mt-7">
                  <img
                    src={star}
                    alt="star"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <button className="h-auto w-max p-2 px-[21px] text-black flex items-center gap-2 rounded-[2px] text-[18px] font-semibold mt-7 border-2 border-[black] transition-transform duration-500 tilt-zoom">
                  <span>
                    <IoPlayOutline className="text-[30px] text-black" />
                  </span>
                  Watch Client Story
                </button>
              </div>

              <div className="w-full sm:w-[80%] lg:w-[31.7%] bg-[#FFFFFF] flex flex-col items-center pt-14 pb-11">
                <div>
                  <img
                    src={soona}
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
                  Rikin Diwan
                </h3>
                <p className="text-[20px] text-[black] font-normal text-center mt-[-5px]">
                  Chief Marketing Officer
                </p>
                <div className="mt-7">
                  <img
                    src={star}
                    alt="star"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <button className="h-auto w-max p-2 px-[21px] text-black flex items-center gap-2 rounded-[2px] text-[18px] font-semibold mt-7 border-2 border-[black] transition-transform duration-500 tilt-zoom">
                  <span>
                    <IoPlayOutline className="text-[30px] text-black" />
                  </span>
                  Watch Client Story
                </button>
              </div>

              <div className="w-full sm:w-[80%] lg:w-[31.7%] bg-[#FFFFFF] flex flex-col items-center pt-14 pb-11">
                <div>
                  <img
                    src={teachable}
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
                  Bonita Thwaites
                </h3>
                <p className="text-[20px] text-[black] font-normal text-center mt-[-5px]">
                  Director of Growth Marketing
                </p>
                <div className="mt-7">
                  <img
                    src={star}
                    alt="star"
                    loading="lazy"
                    className="filter brightness-0 saturate-100"
                  />
                </div>
                <button className="h-auto w-max p-2 px-[21px] text-black flex items-center gap-2 rounded-[2px] text-[18px] font-semibold mt-7 border-2 border-[black] transition-transform duration-500 tilt-zoom">
                  <span>
                    <IoPlayOutline className="text-[30px] text-black" />
                  </span>
                  Watch Client Story
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center pb-16 px-6 sm:px-10 xl:px-[200px] pt-[60px] lg:pt-[100px] text-center">
              <div className="h-auto p-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
                CLIENT STORIES
              </div>
              <h3 className="text-[24px] sm:text-[32px] lg:text-[42px] font-semibold text-[#FFFEFB] leading-snug lg:leading-[3.5rem] mt-4">
                Don’t just take it from us…check out some of our favorite
                stories.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col items-center pt-20 sm:pt-24 px-4 sm:px-6 z-0">
          <div className="h-[40px] w-max p-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            WHAT WE DO
          </div>

          <h3 className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug lg:leading-[3.5rem] mt-4 text-center">
            You’ve got growth goals? We’ll build the roadmap.
          </h3>

          <p className="text-[16px] sm:text-[17px] lg:text-[19px] font-medium text-[#0C2233] text-center w-full sm:w-[80%] md:w-[75%] lg:w-[69%] mt-4">
            Hyper-growth businesses need a data-driven vision. More importantly,
            they need a clear, action-packed game plan. We partner with you to
            strategize, prioritize, link up cross-channel insights, and,
            ultimately, grow.
          </p>

          <div className="w-full h-auto flex items-center justify-center mt-10 sm:mt-16 px-2 sm:px-0">
            <img
              src={home1}
              alt="home1"
              loading="lazy"
              className="mt-16 md:w-auto w-full"
            />
          </div>
        </div>

        <div className="w-full min-h-screen flex flex-col lg:flex-row px-4 md:px-8 lg:px-[40px]">
          <div className="w-full lg:w-[50%] h-auto pt-10 lg:pt-[130px] px-4 lg:px-8 order-1 lg:order-1">
            <div className="h-[40px] w-max p-2 bg-[#CEEF2A] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
              OUR PROCESS
            </div>
            <h3 className="text-[28px] md:text-[32px] lg:text-[40px] font-black mt-4 text-[#0C2233] w-full lg:w-[90%] leading-[1.4]">
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
            <Link to={"/get-started-with-tuff"}>
              <p className="flex items-center gap-1 text-[18px] lg:text-[20px] font-semibold mt-5 hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                Learn how it all works
                <span>
                  <BiChevronRight className="text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </p>
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
        <div className="w-full h-auto p-1 pb-24">
          <div className="h-[40px] w-max p-2 bg-[#CEEF2A] m-auto rounded-[20px] flex justify-center items-center px-5 mt-26 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            TESTIMONIALS
          </div>
          <p className="text-[16px] lg:text-[48px] font-semibold lg:leading-14 leading-normal lg:tracking-[-2px] text-[#0C2233] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] text-center mt-4 mx-auto">
            We focus on finding traction and scale for brands, ideas, and
            campaigns for teams of all sizes.
          </p>
          <div className="w-full h-auto flex flex-wrap justify-center lg:justify-between gap-y-16 gap-x-5 px-4 lg:px-18 pt-19">
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
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-7">
                <span className="text-[#0C2233] font-bold">
                  “The Tuff team is truly in a league of their own – just
                  genuinely good people who are unequivocally amazing at what
                  they do.
                </span>
                They are each so passionate and skilled in their respective
                crafts, and their ambition is contagious. Our meetings are the
                highlight of my week!”
              </p>
              <div className="flex mt-18 gap-4">
                <div className="rounded-[40%] w-[10%] h-[10%]">
                  <img src={jamie} alt="jamie" />
                </div>
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Jamie Ward
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Director of Growth at Sharetown
                  </p>
                </div>
              </div>
            </div>
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
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-7">
                “We’ve been working with Ellen and the Tuff team for just over 7
                months and have been impressed with their knowledge, attention
                to detail, professionalism and execution.
                <span className="text-[#0C2233] font-bold">
                  Tuff has been instrumental in helping us make a monumental
                  jump in search ranking, as well as site traffic and leads
                  generated through our site!”
                </span>
              </p>
              <div className="flex mt-18 gap-4">
                <div className="rounded-[40%] w-[10%] h-[10%]">
                  <img src={landy} alt="landy" loading="lazy" />
                </div>
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Landy Kindle
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Tech Heads
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
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-7">
                “I view our partnership with Tuff as more like an extension of
                my team.
                <span className="text-[#0C2233] font-bold">
                  We strategize together, ask tough questions, examine the
                  results, optimize – and it just keeps getting better. Exactly
                  what I was looking for.”
                </span>
              </p>
              <div className="flex mt-14 gap-4">
                <div className="rounded-[40%] w-[10%] h-[10%]">
                  <img src={brad} alt="brad" loading="lazy" />
                </div>
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Brad Veach
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    VP of Marketing at Thnks
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
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-7">
                “Tuff has been an incredible value-add to our business. They’re
                effective, flexible, communicative, and bright.
                <span className="text-[#0C2233] font-bold">
                  I feel like I have another set of 6+ eyes on the growth of my
                  business at all times.”
                </span>
              </p>
              <div className="flex mt-14 gap-4">
                <div className="rounded-[40%] w-[10%] h-[10%]">
                  <img src={micheal} alt="micheal" loading="lazy" />
                </div>
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Michael Correo
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Co-founder, Team Bootcamp
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
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-7">
                <span className="text-[#0C2233] font-bold">
                  “Tuff is an amazing team, extremely organized, and driven to
                  produce results!
                </span>
                We have churned through multiple agencies in our lifetime, and
                have been so impressed by Tuff.”
              </p>
              <div className="flex mt-14 gap-4">
                <div className="rounded-[40%] w-[10%] h-[10%]">
                  <img src={sashee} alt="sashee" loading="lazy" />
                </div>
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Sashee Chandran
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Founder and CEO at Tea Drops
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
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-7">
                <span className="text-[#0C2233] font-bold">
                  “Very knowledgeable team at Tuff – fast moving with a get it
                  done attitude.
                </span>
                Looking forward to a continued partnership and future success.”
              </p>
              <div className="flex mt-14 gap-4">
                <div className="rounded-[40%] w-[10%] h-[10%]">
                  <img src={jordan} alt="jordan" loading="lazy" />
                </div>
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Jordan Kenyon
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    VP at Growth Factory
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
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-7">
                <span className="text-[#0C2233] font-bold">
                  “Great team to work with. Very experienced, quick to respond
                  and always willing to pivot based on feedback.
                </span>
                I have really enjoyed working with the Tuff team and have
                learned a ton from them!”
              </p>
              <div className="flex mt-14 gap-4">
                <div className="rounded-[40%] w-[10%] h-[10%] ">
                  <img src={Laurens} alt="Laurens" loading="lazy" />
                </div>
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Laurens Spethmann
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Growth Lead at Headway
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
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-7">
                “The entire Tuff Team is amazing, which is no surprise because
                their leadership is exceptional.
                <span className="text-[#0C2233] font-bold">
                  Ellen has put together one of the most amazing firms out
                  there, and we are so happy to be working with TUFF.”
                </span>
              </p>
              <div className="flex mt-14 gap-4">
                <div className="rounded-[40%] w-[10%] h-[10%] ">
                  <img src={aide} alt="aide" loading="lazy" />
                </div>
                <div className="w-max h-auto pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Liliana Aide Monge
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Co-Founder at Sabio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto homeImg1 pt-3 pb-24 ">
          <div className="h-[40px] w-max p-2 bg-[#CEEF2A] m-auto rounded-[20px] flex justify-center items-center px-5 mt-26 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            OUR CLIENTS
          </div>
          <p className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#FFFEFB] leading-snug lg:leading-[3.5rem] mt-4 text-center">
            Trusted by kickass businesses
          </p>

          <div className="w-full h-auto flex justify-between flex-wrap px-7 md:px-19 pt-8 md:pt-13">
            {[
              cl1,
              cl2,
              cl3,
              cl4,
              cl5,
              cl6,
              cl7,
              cl8,
              cl9,
              cl10,
              cl11,
              cl12,
              cl13,
              cl14,
              cl15,
              cl16,
            ].map((logo, index) => (
              <div
                key={index}
                className="w-[48%] md:w-[23%] h-[143px] bg-[#DCD5F5] rounded-[5px] flex items-center justify-center mt-8"
              >
                <img
                  src={logo}
                  alt={`client-${index + 1}`}
                  loading="lazy"
                  className="filter brightness-0 saturate-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto p-1 pb-16">
          <div className="h-[40px] w-max p-2 bg-[#CEEF2A] m-auto rounded-[20px] flex justify-center items-center px-5 mt-10 sm:mt-12 md:mt-26 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            ABOUT US
          </div>

          <h3 className="text-[22px] sm:text-[30px] md:text-[36px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug md:leading-[2.5rem] lg:leading-[3.5rem] mt-4 text-center">
            Meet the Tuff Team
          </h3>

          <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#0C2233] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] text-center mx-auto mt-4">
            Above all else, we’re collaborators. While we each have different
            feathers in our caps (from PPC expertise to big-picture strategy, to
            creative insight, to data analysis, and more) we do our best work
            together. We take an all-thoughts-on-the-table, what else ya got,
            here-let-me-help-you-with-that kind of approach. And our best
            partners are ready to jump in and build a strong, purposeful
            partnership that can go the distance.
          </p>

          <Link to={"/our-company"}>
            <p className="flex items-center justify-center w-max gap-1 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-semibold mt-5 hover:text-[#FF6A39] cursor-pointer mx-auto transition-transform duration-500 tilt-zoom hover:text-[19px] md:hover:text-[20px] lg:hover:text-[21px]">
              Get to know us
              <span>
                <BiChevronRight className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
              </span>
            </p>
          </Link>

          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <img
              src={team}
              alt="team"
              loading="lazy"
              className="w-[90%] sm:w-[80%] md:w-[72%] lg:w-[66%]"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-[77vh] homeImg3 flex items-center justify-center p-1 md:px-19">
          <div className="w-[90%] md:w-full h-[360px] bg-[#5A2AFF] flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-[30px] sm:text-[42px] md:text-[52px] font-semibold text-[#FFFEFB]">
              Ready to grow?
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium mt-3 text-[#FFFEFB]">
              Your compounding growth curve begins here.
            </p>
            <Link to={"/get-started-with-tuff"}>
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
