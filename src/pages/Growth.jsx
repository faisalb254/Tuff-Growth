import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Growth1 from "../assets/Growth1.png";
import aarp from "../assets/aarp.svg";
import multiverse from "../assets/multiverse.svg";
import punchbow from "../assets/punchbow.svg";
import soona from "../assets/soona.svg";
import teachable from "../assets/teachable.svg";
import thnks from "../assets/thnks.svg";
import { BiChevronRight } from "react-icons/bi";
import Measur from "../assets/Measur.svg";
import hippo from "../assets/hippo.svg";
import star1 from "../assets/star.svg";
import testihippo from "../assets/testihippo.png";
import Crunch from "../assets/Crunch.svg";
import testituff from "../assets/testituff.svg";
import { Minus, Plus } from "lucide-react";
import Repeat from "../assets/Repeat.png";
import Agency1 from "../assets/Agency1.png";
import Agency2 from "../assets/Agency2.png";
import Thnks from "../assets/thnks.svg";
import Micheal from "../assets/micheal.png";
import Boot from "../assets/Boot.svg";
import Cursor from "../assets/cursor.svg";
import Share from "../assets/share.svg";
import Search from "../assets/search.svg";
import Measure from "../assets/Measur.svg";
import Not from "../assets/Not.svg";
import Email from "../assets/email.svg";
import Rate from "../assets/Rate.svg";
import Pic from "../assets/pic.svg";
import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";
import soonamedia from "../assets/soonamedia.jpg";
import palmetto from "../assets/koji.png";
import pal from "../assets/soona.svg";
import VPBrad from "../assets/VPBrad.png";
import marketing1 from "../assets/marketing1.jpg"
import marketing2 from "../assets/marketing2.jpg"
import marketing3 from "../assets/marketing3.jpg"
import marketing4 from "../assets/marketing4.jpg"
import marketing5 from "../assets/marketing5.jpg"
import marketing6 from "../assets/marketing6.jpg"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FinalSection from "../components/FinalSection";

const faqs = [
  {
    question: "What does a content marketing agency actually do?",
    answer:
      "A content marketing agency helps businesses create and distribute valuable content to attract, engage, and convert customers.",
  },
  {
    question: "How much should you pay for content marketing?",
    answer:
      "Costs vary, but many agencies offer monthly packages from $1,000 to $10,000+ depending on the scope and content volume.",
  },
  {
    question: "What kinds of companies need content marketing?",
    answer:
      "Any company aiming to grow online visibility and trust—especially B2B, SaaS, e-commerce, and service-based businesses.",
  },
  {
    question: "How is content strategy different from just creating content?",
    answer:
      "A content strategy focuses on planning and purpose—defining goals, audience, and formats—while content creation is just execution.",
  },
];

export default function Growth() {
  const box = {
        heading: "Ready to grow?",
        para: ["Your compounding growth curve begins here."],
        button: "Book a Strategy Call"
    }
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full h-auto ContentLine pt-1 pb-20 md:pb-0">
          <div className="w-full h-auto mt-20 md:mt-20 lg:mt-35 px-4 sm:px-6 md:px-12 lg:pl-19 flex flex-col lg:flex-row gap-10">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[48%] h-auto pt-8 mx-auto lg:mx-0">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-semibold text-[#ffffff] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-10 sm:mt-6 md:mt-7 text-center lg:text-left">
                Proven growth marketing agency
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-10 leading-[22px] sm:leading-[24px] md:leading-[25px] text-center lg:text-left">
                Trying to figure out how to scale and which marketing channels
                will help you grow fastest can be confusing and stressful.
                You’re probably going to have questions and need a growth plan.
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-4 leading-[22px] sm:leading-[24px] md:leading-[25px] text-center lg:text-left">
                Good news: Tuff has been the go-to growth marketing agency for
                50+ startups and small businesses over the last five years
                helping them run digital marketing campaigns and growth
                experiments to find big wins. Now we want to help you.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link to="/get-started-with-tuff">
                  <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                    Book a Strategy Call
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[50%] mt-6 lg:mt-0 flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 mx-auto lg:mx-0">
              <img
                src={Growth1}
                alt="Growth1"
                className="bg-white w-[80%] sm:w-[70%] md:w-[65%] lg:w-[65%]"
              />
            </div>
          </div>

          <div
            className="hidden lg:block w-full h-[120px] -rotate-1 overflow-hidden relative mt-20"
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

      <section>
        <div className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-19 flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:w-[48.5%] h-auto pb-20 pt-1">
            <h2 className="text-[28px] sm:text-[36px] md:text-[45px] font-semibold text-[#0C2233] leading-[36px] sm:leading-[42px] md:leading-[52px] mt-4 sm:mt-6 md:mt-20 text-center lg:text-left">
              We’ll help you build a growth marketing foundation, with strategic
              vision and a roadmap, to hit your goals until you’re ready to hire
              in-house.
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 sm:mt-8 md:mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px] text-center lg:text-left">
              Early-stage businesses need a strategic vision and a roadmap. They
              need an invested part-time, on-demand, or outsourced expert who
              can set achievable company growth goals and then set about making
              them happen. We’ve got all that.
            </p>
            <Link to={"/our-company"}>
              <p className="flex items-center justify-center lg:justify-start gap-1 text-[18px] font-semibold mt-8 text-[#0C2233] cursor-pointer hover:text-[#FF6A39] transition-all duration-500 tilt-zoom hover:text-[21px] lg:text-[19px]">
                Tuff is different - take a deeper look at how we like to work
                <span>
                  <BiChevronRight className="text-[24px] text-[#0C2233] lg:text-[30px]" />
                </span>
              </p>
            </Link>
          </div>
          <div className="w-full lg:w-[48.5%] h-auto pt-10 lg:pt-20 flex flex-col lg:flex-row justify-between gap-6">
            <div className="w-full lg:w-[47%] h-auto lg:h-[500px] border border-[#E0E0E0] rounded-[5px] p-6 lg:p-8">
              <img src={Measur} alt="Measur" className="mx-auto lg:mx-0" />
              <h2 className="text-[24px] font-semibold text-[#0c2233] mt-3 text-center lg:text-left">
                Before Tuff
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 sm:mt-8 md:mt-5 leading-[22px] sm:leading-[24px] md:leading-[25px] text-center lg:text-left">
                Strategy without execution, things slip, limited communication,
                slow turnarounds, it’s tough to see where things stand, and
                people are running around like headless chickens.
              </p>
            </div>
            <div className="w-full lg:w-[47%] h-auto lg:h-[500px] border border-[#E0E0E0] rounded-[5px] p-6 lg:p-8">
              <img src={Measur} alt="Measur" className="mx-auto lg:mx-0" />
              <h2 className="text-[24px] font-semibold text-[#0c2233] mt-3 text-center lg:text-left">
                After Tuff
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 sm:mt-8 md:mt-5 leading-[22px] sm:leading-[24px] md:leading-[25px] text-center lg:text-left">
                An action plan, daily communication, focused strategy and
                execution, a dedicated growth marketing agency, results
                delivered, organized around KPI’s, small tests with consistent
                earnings, and a sense of trust sets in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto mediaLine1 px-4 sm:px-6 md:px-12 lg:px-19 pb-10 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
          <div className="w-full lg:w-[48%] h-auto pt-10 lg:pt-21">
            <div className="w-full flex items-center gap-3">
              <img src={hippo} alt="hippo" className="w-[20%] sm:w-[15%]" />
              <img src={star1} alt="star1" className="w-[30%] sm:w-[22%]" />
            </div>
            <div className="w-full border-t border-[#1B2F3F] mt-6">
              <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-medium text-white leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[35px] mt-5">
                “Tuff proactively sought business context, aligned to our
                objectives, and created their own growth strategy for us
                accordingly. They implement it, measure it, share learnings, and
                discuss next steps. Everything you could ask for.{" "}
                <span className="font-bold">
                  Our weekly stand-ups were probably the most effective 30-45
                  minutes of my week. I just felt like if Tuff were an employee,
                  they would be exceeding expectations.”
                </span>
              </p>
            </div>
            <div className="w-full h-auto pt-8 sm:pt-10 lg:pt-12 flex gap-4">
              <div className="h-full w-[15%] sm:w-[10%]">
                <img src={testihippo} alt="testihippo" className="w-full" />
              </div>
              <div className="mt-1">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#fffefb]">
                  Kyle Ramsay
                </h3>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#fffefb]">
                  VP of Product, Hippo
                </p>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#FF6A39]">
                  Watch client story
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[48%] h-auto pt-10 lg:pt-23">
            <div className="w-full flex items-center gap-3">
              <img src={Crunch} alt="Crunch" className="w-[35%] sm:w-[30%]" />
              <img src={star1} alt="star1" className="w-[30%] sm:w-[22%]" />
            </div>
            <div className="w-full border-t border-[#1B2F3F] mt-6 lg:mt-[34px]">
              <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-white leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[35px] mt-5">
                “The team at Tuff knows their stuff – and it’s precisely why
                they are not selling ‘magic’ or any kind of ‘mysterious’ sauce.
                <span className="font-medium">
                  Instead, they are betting on transparency and experimentation,
                  and it seems to be working well: The agency was warmly
                  recommended to TechCrunch multiple times via our growth
                  marketing survey.”
                </span>
              </p>
            </div>
            <div className="w-full h-auto pt-8 sm:pt-10 lg:pt-12 flex gap-4">
              <div className="h-full w-[12%] sm:w-[8%]">
                <img src={testituff} alt="testituff" className="w-full" />
              </div>
              <div className="mt-1">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#fffefb]">
                  Tuff in TechCrunch
                </h3>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#FF6A39]">
                  See full article
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto px-4 sm:px-6 md:px-10 lg:px-19 pt-1 pb-10">
          <div className="w-full h-auto flex flex-col lg:flex-row justify-between mt-16 lg:mt-27 gap-10 lg:gap-0">
            <div className="w-full lg:w-[47%] h-auto pb-20">
              <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-10 sm:mt-16 md:mt-5 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                OUR FRAMEWORK
              </div>
              <p className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug lg:leading-[3rem] mt-5">
                This is the five-step growth marketing framework we use when
                approaching growth for any business.
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 sm:mt-8 md:mt-5 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Using this framework, we’ll help prioritize tactics based on
                return.
              </p>
              <div className="w-full mt-4 flex items-center flex-wrap gap-3">
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Paid Search
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Socail Ads
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Ad Creative
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Strategic Messaging
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Content Strategy
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Technical SEO
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Data & Analytics
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Video Marketing
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Display Ads
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  YouTube Ads
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Email Marketing
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Linkedin Ads
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  TikTok Ads
                </div>
                <div className="bg-[#FF6A39] w-max text-[15px] font-semibold text-[#0C2233] flex items-center p-2 py-1 gap-1">
                  <Link size={20} />
                  Conversion Rate Optimization
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[48%] h-auto">
              <img src={Repeat} alt="Repeat" className="w-full" />
            </div>
          </div>
          <div className="w-full h-auto flex flex-col-reverse lg:flex-row justify-between mt-16 lg:mt-18 gap-10 lg:gap-0">
            <div className="w-full lg:w-[48%] h-auto">
              <img src={Agency1} alt="Agency1" className="w-full" />
            </div>
            <div className="w-full lg:w-[47%] h-auto pt-10 lg:pt-19">
              <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-10 sm:mt-16 md:mt-5 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                OUR PROCESS
              </div>
              <p className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug lg:leading-[3rem] mt-5">
                Our growth process: learn, activate, analyze, optimize, repeat.
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 sm:mt-8 md:mt-5 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                We’re a trim-but-mighty growth marketing agency with a proven
                track record of helping companies—in nearly every industry at
                nearly every stage of growth—unlock their path to sustainable
                growth. We’ve tested on all of the major channels and lean on
                that knowledge to decide what and how we want to test first to
                drive conversions.
              </p>
              <Link to={"/our-company"}>
                <div className="hover:text-[#FF6A39] text-[#0C2233] transition-all duration-500">
                  <p className="flex items-center gap-1 text-[18px] font-semibold mt-8  cursor-pointer transition-all duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] ">
                    Learn more about our process
                    <span>
                      <BiChevronRight className="text-[24px]  lg:text-[30px] " />
                    </span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full h-auto flex flex-col lg:flex-row justify-between mt-16 lg:mt-27 gap-10 lg:gap-0">
            <div className="w-full lg:w-[47%] h-auto pb-20">
              <p className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug lg:leading-[3rem] mt-5">
                On demand full growth marketing stack capability
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 sm:mt-8 md:mt-5 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                With a growth marketing strategy, we work day-to-day on the
                things that have the highest impact on your revenue. At its
                core, a growth marketing strategy is a giant, prioritized to-do
                list. You aren’t paying for a channel or a person, you’re paying
                for a group of adaptable experts who can help your business
                perform while layering on additional tests, channels, and
                experiments to drive growth.
              </p>

              <Link to={"/services"}>
                <div className="hover:text-[#FF6A39] text-[#0C2233] transition-all duration-500">
                  <p className="flex items-center gap-1 text-[18px] font-semibold mt-8  cursor-pointer transition-all duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] ">
                    Learn more about our process
                    <span>
                      <BiChevronRight className="text-[24px]  lg:text-[30px] " />
                    </span>
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full lg:w-[48%] h-auto">
              <img src={Agency2} alt="Agency2" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto mediaLine1 px-4 sm:px-6 md:px-12 lg:px-19 pb-10 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
          <div className="w-full lg:w-[48%] h-auto pt-10 lg:pt-21">
            <div className="w-full flex items-center gap-3">
              <img
                src={Thnks}
                alt="Thnks"
                className="w-[25%] sm:w-[20%] md:w-[18%] lg:w-[15%]"
              />
              <img
                src={star1}
                alt="star1"
                className="w-[30%] sm:w-[26%] md:w-[24%] lg:w-[22%]"
              />
            </div>
            <div className="w-full border-t border-[#1B2F3F] mt-6">
              <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-medium text-white leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[35px] mt-5">
                “I view our partnership with Tuff as more like an extension of
                my team.
                <span className="font-bold">
                  We strategize together, ask tough questions, examine the
                  results, optimize – and it just keeps getting better. Exactly
                  what I was looking for.”
                </span>
              </p>
            </div>
            <div className="w-full h-auto pt-8 sm:pt-10 lg:pt-12 flex gap-4">
              <div className="h-full w-[20%] sm:w-[12%] md:w-[10%] lg:w-[10%]">
                <img src={testihippo} alt="testihippo" className="w-full" />
              </div>
              <div className="mt-1">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#fffefb]">
                  Kyle Ramsay
                </h3>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] font-medium text-[#fffefb]">
                  VP of Product, Hippo
                </p>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#FF6A39]">
                  Watch client story
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[48%] h-auto pt-10 lg:pt-23">
            <div className="w-full flex items-center gap-3">
              <img
                src={Boot}
                alt="Boot"
                className="w-[40%] sm:w-[34%] md:w-[32%] lg:w-[30%]"
              />
              <img
                src={star1}
                alt="star1"
                className="w-[30%] sm:w-[26%] md:w-[24%] lg:w-[22%]"
              />
            </div>
            <div className="w-full border-t border-[#1B2F3F] mt-6 lg:mt-[34px]">
              <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-white leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[35px] mt-5">
                “Tuff has been an incredible value-add to our business. They’re
                effective, flexible, communicative, and bright.
                <span className="font-medium">
                  I feel like I have another set of 6+ eyes on the growth of my
                  business at all times.”
                </span>
              </p>
            </div>
            <div className="w-full h-auto pt-8 sm:pt-10 lg:pt-12 flex gap-4">
              <div className="h-full w-[18%] sm:w-[12%] md:w-[10%] lg:w-[8%]">
                <img src={Micheal} alt="Micheal" className="w-full" />
              </div>
              <div className="mt-1">
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#fffefb]">
                  Michael Correo
                </h3>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#FFFFFF]">
                  Co-founder, Team Bootcamp
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto px-4 sm:px-6 md:px-12 lg:px-19 pb-10">
          <div className="w-full lg:w-[76%] m-auto">
            <div className="h-auto m-auto py-2 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-10 sm:mt-16 md:mt-30 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
              WHAT WE DO
            </div>
            <h2 className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug lg:leading-[2.5rem] mt-4 text-center">
              You’ve got growth goals? We’ll build the roadmap.
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 sm:mt-8 md:mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px] text-center">
              Hyper-growth businesses need a data-driven vision. More
              importantly, they need a clear, action-packed game plan. We
              partner with you to strategize, prioritize, link up cross-channel
              insights, and, ultimately, grow.
            </p>
          </div>

          <div className="w-full mt-10 lg:mt-16 flex flex-wrap gap-6 justify-center lg:justify-between">
            <div className="w-full sm:w-[48%] lg:w-[23.5%] h-[auto] border-2 border-[#E0E0E0] rounded-[5px] p-6">
              <img src={Cursor} alt="Cursor" />
              <h3 className="text-[22px] font-bold text-[#0c2233] mt-5">
                Pay Per Click
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Prioritizing high-impact PPC campaigns to drive quick wins then
                scale what works.
              </p>
              <Link to={"/ppc"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-5 text-[#0C2233] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23.5%] h-auto border-2 border-[#E0E0E0] rounded-[5px] p-6">
              <img src={Share} alt="Share" />
              <h3 className="text-[22px] font-bold text-[#0c2233] mt-5">
                Social Advertising
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Campaigns build just for your audience that get clicks and
                ultimately revenue.
              </p>
              <Link to={"/social-advertising"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-5 text-[#0C2233] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23.5%] h-auto border-2 border-[#E0E0E0] rounded-[5px] p-6">
              <img src={Search} alt="Search" />
              <h3 className="text-[22px] font-bold text-[#0c2233] mt-5">
                Search Engine Optimization
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Ensuring you show up where it matters most.
              </p>
              <Link to={"/seo"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-5 text-[#0C2233] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23.5%] h-auto border-2 border-[#E0E0E0] rounded-[5px] p-6">
              <img src={Measure} alt="Measure" />
              <h3 className="text-[22px] font-bold text-[#0c2233] mt-5">
                Tracking and Analytics
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Making strategic decisions based on hard numbers.
              </p>
              <Link to={"/marketing-attribution"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-5 text-[#0C2233] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23.5%] h-auto border-2 border-[#E0E0E0] rounded-[5px] p-6">
              <img src={Not} alt="Not" />
              <h3 className="text-[22px] font-bold text-[#0c2233] mt-5">
                Content Marketing
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Ranking higher and winning over your audience with a rock solid
                content strategy.
              </p>
              <Link to={"/content-strategy"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-5 text-[#0C2233] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23.5%] h-auto border-2 border-[#E0E0E0] rounded-[5px] p-6">
              <img src={Email} alt="Email" />
              <h3 className="text-[22px] font-bold text-[#0c2233] mt-5">
                Email Marketing
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Auditing (or developing) your existing email flows and getting
                more people to take action.
              </p>
              <Link to={"/email-marketing"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-5 text-[#0C2233] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23.5%] h-auto border-2 border-[#E0E0E0] rounded-[5px] p-6">
              <img src={Rate} alt="Rate" />
              <h3 className="text-[22px] font-bold text-[#0c2233] mt-5">
                Conversion Rate Optimization
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Using data to improve conversion.
              </p>
              <Link to={"/cro"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-5 text-[#0C2233] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn more
                  <span>
                    <BiChevronRight className="text-[24px] lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[23.5%] h-auto border-2 border-[#E0E0E0] rounded-[5px] p-6">
              <img src={Pic} alt="Pic" />
              <h3 className="text-[22px] font-bold mt-5">
                Ad Creative
              </h3>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Creating sticky, scroll-stopping creative that smoothes their
                path to conversion.
              </p>
              <Link to={"/creative"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-5 text-[#0C2233] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
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
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-10 lg:w-[67%] lg:mx-auto">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[42px] font-bold text-center text-[#0C2233] mb-8">
            FAQs
          </h2>
          <div>
            {faqs.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === faqs.length - 1;

              return (
                <div
                  key={index}
                  className={`py-4 sm:py-5 md:py-6 ${isFirst ? "border-t border-black" : ""
                    } border-b border-black`}
                >
                  <div
                    className="cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#0C2233]">
                      {item.question}
                    </h3>
                    <span className="text-orange-500 text-[22px] sm:text-[24px] md:text-[28px]">
                      {openIndex === index ? (
                        <Minus size={28} />
                      ) : (
                        <Plus size={28} />
                      )}
                    </span>
                  </div>
                  {openIndex === index && (
                    <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
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
            <div className="w-max px-6 py-2 border-2 border-white text-white text-[18px] lg:text-[20px] font-semibold m-auto mt-8 lg:mt-10 tilt-zoom">
              View all case studies
            </div>
          </Link>
        </div>
      </section>
      <section>
        <div className="w-full h-[1076px] py-[5%] px-12 flex flex-col items-center">
          <h3 className="h-9">
            <span className="bg-[#CEFD94] py-3 px-5 rounded-full font-bold">KNOWLEDGEBASE</span>
          </h3>
          <h2 className=" font-black text-5xl my-5">
            Growth Marketing articles on Tuff
          </h2>
          <div className=" w-full flex flex-wrap justify-center">
            <Link className="w-1/4 m-5" to={"/how-performance-creative-generates-bold-actionable-results-for-growth-marketing"}>
              <div className="h-94 w-full  border border-black p-7.5 hover:cursor-pointer">
                <img src={marketing1} alt="" className="h-46 w-full" />
                <p className=" font-bold text-xl">
                  How Performance Creative Generates Bold, Actionable Results for Growth Marketing
                </p>
              </div>
            </Link>
            <Link to={"/growth-marketing-spreadsheets"} className="w-1/4 m-5">
              <div className="h-94 w-full border border-black p-7.5 hover:cursor-pointer">
                <img src={marketing2} alt="" className="h-46 w-full" />
                <p className=" font-bold text-xl">
                  14 Ready-to-Go Growth Marketing Spreadsheets Startups Can Use to Boost Productivity
                </p>
              </div>
            </Link>
            <Link to={"/chatgpt-growth-marketing-strategies-how-to-write-ai-prompts"} className="w-1/4 m-5">
              <div className="h-94 w-full  border border-black p-7.5 hover:cursor-pointer">
                <img src={marketing3} alt="" className="h-46 w-full" />
                <p className=" font-bold text-xl">
                  Level up your growth marketing strategies with ChatGPT: how to write AI prompts to get the best results
                </p>
              </div>
            </Link>
            <Link to={"/hire-growth-marketing-agency"} className="w-1/4 m-5">
              <div className="h-94 w-full  border border-black p-7.5 hover:cursor-pointer">
                <img src={marketing4} alt="" className="h-46 w-full" />
                <p className=" font-bold text-xl">
                  You’re a Startup. Should You Hire a Growth Marketing Agency?
                </p>
              </div>
            </Link>
            <Link to={"/growth-marketing"} className="w-1/4 m-5">
              <div className="h-94 w-full border border-black p-7.5 hover:cursor-pointer">
                <img src={marketing5} alt="" className="h-46 w-full" />
                <p className=" font-bold text-xl">
                  Growth Marketing: What It Is and Why You Need It
                </p>
              </div>
            </Link>
            <Link className="w-1/4 m-5" to={"/what-is-a-growth-marketing-agency"}>
              <div className="h-94 w-full border border-black p-7.5 hover:cursor-pointer">
                <img src={marketing6} alt="" className="h-46 w-full" />
                <p className=" font-bold text-xl">
                  What is a Growth Marketing Agency?
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto ContentLine pb-10 flex flex-col items-center justify-center pt-10 px-4 sm:px-6 md:px-10 lg:px-65">
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
      <FinalSection text={box}/>
      <Footer />
    </>
  );
}
