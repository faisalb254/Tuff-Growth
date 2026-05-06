import React from "react";
import Navbar from "../components/NavbarNew";
import FinalSection from '../components/FinalSection'
import media7 from "../assets/media7.png";
import search from "../assets/search.svg";
import cursor from "../assets/cursor.svg";
import drag from "../assets/drag.svg";
import teachable from "../assets/teachable.svg";
import star from "../assets/star.svg";
import soonaMedia from "../assets/soonaMedia.png";
import palmetto from "../assets/palmetto.png";
import soonamedia from "../assets/soonamedia.jpg";
import soona from "../assets/soona.svg";
import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";
import pal from "../assets/pal.svg";
import { BiChevronRight, BiLogoHeroku } from "react-icons/bi";
import {
  FaArrowUp,
  FaGoogle,
  FaInstagram,
  FaRedditSquare,
  FaSnapchat,
  FaTwitterSquare,
} from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineTikTok } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { RiPinterestLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import NavbarNew from "../components/NavbarNew";
import CaseStudiesPoster from "../components/CaseStudiesPoster";

export default function paidMedia() {
  const box = {
    heading: "Ready to maximize your media?",
    para: ["Let's talk about how we can optimize your funnel with a customer-first, data-driven approach."],
    button: "Book a Strategy Call"
  }
  const cards = [
    {
      img: search,
      title: "Paid Search",
      link: "ppc",
      description:
        "When your audience searches for solutions with the intent to buy, you show up in the right place at the right time.",
      cta: "Learn more",
    },
    {
      img: cursor,
      title: "Paid Social",
      link: "social-advertising",
      description:
        "Connect with your audience on the social platforms that matter to them.",
      cta: "Learn more",
    },
    {
      img: drag,
      title: "Display",
      link: "display",
      description:
        "Extend brand reach to your ideal customers by combining 1st Party Data, brand creative, and a spectrum of media channels.",
      cta: "Learn more",
    },
  ];
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#5A2AFF]">
        <NavbarNew />
      </div>

      <section>
        <div className="w-full h-auto mediabg  pb-15">
          <div className="flex flex-col lg:flex-row max-w-[1700px] mx-auto">
            <div className="order-2 sm:order-1 w-full lg:w-[60%] h-auto mt-10 md:mt-0 pt-14 px-4 lg:px-19 min-[120rem]:px-0">
              <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                PAID MEDIA
              </div>
              <h2 className="text-[22px] sm:text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-left text-[#ffffff] w-[90%] leading-tight lg:leading-[60px] mt-6 md:tracking-[-2.5px]">
                Audience-led campaigns that help you generate demand and <span className="text-[#ceff2a]">grow revenue.</span>
              </h2>
              <p className="text-[20px] sm:text-lg text-[#ffffff] mt-7 leading-[27px] max-w-[80%]">
                It’s time to move beyond simply driving traffic and start
                designing the right full-funnel media plan with the right
                strategy.
              </p>
              <Link to="/get-started-with-havit-growth">
                <button className="text-lg sm:text-xl cursor-pointer font-extrabold text-[#0C2233] bg-[#ceff2a] mt-5 px-8 py-5 rounded-md transition-transform duration-500 tilt-zoom">
                  Let's Talk
                </button>
              </Link>
            </div>

            <div className="order-2 sm:order-1 hidden w-full lg:w-[40%] h-1/2 pt-14 px-4 mt-18 md:mt-0  justify-center items-center">
              <img
                src={media7}
                alt="media7"
                loading="lazy"
                className="w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto pt-13 pb-20 px-4 max-w-[1700px] mx-auto min-[120rem]:px-0">
        <h2 className="text-[22px] lg:text-[48px] text-center font-semibold text-[#0C2233] w-[100%] leading-tight lg:leading-[60px] md:tracking-[-2.5px]">
          Media Strategy and Management
        </h2>
        <p className="text-[20px] sm:text-lg text-[#0C2233] mt-5 leading-[27px] text-center">
          We design, manage, and optimize campaigns, gather data, and adjust in
          real time across all paid platforms.
        </p>
        <div className="mx-auto p-4 px-0 pt-13 md:px-11 md:pl-15">
          <div className="flex flex-col md:flex-row gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-1 border border-gray-200 h-auto md:h-[400px] rounded-lg p-4 sm:p-6 pl-6 sm:pl-9 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={card.img}
                  alt="img"
                  className=" max-w-[50px] md:max-w-none"
                />
                <h2 className="text-[22px] sm:text-[27px] font-bold mt-3 text-gray-800">
                  {card.title}
                </h2>
                <p className="text-[16px] sm:text-[20px] text-[#0C2233] mt-3 sm:mt-4 leading-[24px] sm:leading-[27px]">
                  {card.description}
                </p>
                <Link
                  to={`/${card.link}`}
                  className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold mt-6 sm:mt-11 hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[18px] sm:hover:text-[21px]"
                >
                  {card.cta}
                  <span>
                    <BiChevronRight className="text-[20px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </Link>
                {index < cards.length - 1 && (
                  <div className="md:hidden border-t border-gray-200 mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full h-[520px] mediaLine pb-10 flex items-center justify-center flex-col gap-6">
        <img src={star} alt="star" loading="lazy" />
        <p className="md:text-[29px] text-lg text-center font-bold text-[#fffefb]">
          Tailored Digital Solutions <br />
        </p>
        <div className="flex items-center justify-center flex-col">
          <p className="text-[27px] text-lg text-center text-[#fffefb] px-19">
            Havit understood our unique business needs and crafted customized digital solutions that addressed our specific challenges. From SEO optimization to email marketing campaigns, their holistic approach has had a profound impact on our business growth. Their team’s commitment to understanding our goals and delivering measurable results sets them apart in the industry.
          </p>
          {/* <span className="text-[27px] font-semibold mt-2 text-[#0c2233] bg-[#cefd94]">
            ideas to test into.”
          </span> */}
        </div>

        <div className="flex items-center justify-center flex-col">
          <h2 className="text-[20px] font-semibold text-[#ffffff]">
            Moran Biton
          </h2>
          <h3 className="text-[20px] font-medium text-[#ffffff]">
            Founder and CEO of IDEEZA
          </h3>
        </div>
      </section>
      <section className="w-full pb-10 px-4 lg:px-20 h-auto max-w-[1700px] mx-auto min-[120rem]:px-0">
        <div className="w-full max-w-[1700px] mx-auto h-auto flex flex-col lg:flex-row p-1 px-0 min-[120rem]:px-0">
          <div className="h-full w-full lg:w-[50%] pt-10 lg:pt-32 order-2 lg:order-1">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[46px] font-semibold leading-snug sm:leading-tight lg:leading-[50px] tracking-tight lg:tracking-[-1px] text-[#0c2233] text-left">
              Build the right assets to maximize your media impact.
            </h2>
            <p className="text-[20px] sm:text-lg text-[#0C2233] mt-5 leading-[27px] lg:w-[87%]">
              You’re optimizing campaigns, pushing to reduce CAC, and tracking every critical performance metric — but is your creative being optimized with the same rigor? Havit-developed creative acts as a powerful growth lever, designed to amplify media performance and unlock better results.
            </p>
            <Link to={"/creative"}>
              <p className="flex items-center gap-1 text-[18px] lg:text-[19px] font-semibold mt-4 hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                Learn more about our creative approach
                <span>
                  <BiChevronRight className="text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </p>
            </Link>
          </div>
          <div className="h-full w-full lg:w-[50%] flex items-center justify-center px-4 lg:px-8 lg:pr-0 pt-10 lg:pt-16 order-1 lg:order-2">
            <img
              src={soonaMedia}
              alt="soonaMedia"
              loading="lazy"
              className="w-full max-w-md lg:max-w-none"
            />
          </div>
        </div>

        <div className="w-full max-w-[1700px] mx-auto h-auto flex flex-col lg:flex-row p-1 px-0 mt-10 lg:mt-0 min-[120rem]:px-0">
          <div className="h-full w-full lg:w-[50%] flex items-center justify-center px-4 lg:px-8 lg:pr-0 pt-10 lg:pt-16 order-1">
            <img
              src={soonaMedia}
              alt="soonaMedia"
              loading="lazy"
              className="w-full max-w-md lg:max-w-none"
            />
          </div>
          <div className="h-full w-full lg:w-[50%] pt-10 lg:pt-46 lg:pl-7 order-2">
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[46px] font-semibold leading-snug sm:leading-tight lg:leading-[50px] tracking-tight lg:tracking-[-1px] text-[#0c2233] text-left">
              Consistent learning and improvements
            </h2>
            <p className="text-[20px] sm:text-lg text-[#0C2233] mt-5 leading-[27px] lg:w-[87%]">
              The key to effectively measuring the performance of different
              marketing channels lies in regular reporting that uses a variety
              of different metrics.
            </p>
            <Link to={"/marketing-attribution"}>
              <p className="flex items-center gap-1 text-[18px] lg:text-[19px] font-semibold mt-4 hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                Learn more about our data solutions
                <span>
                  <BiChevronRight className="text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full  h-auto mediaLine1 pb-16 p-1 flex items-center justify-center flex-col ">
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[46px] font-semibold leading-snug sm:leading-tight lg:leading-[60px] mt-18 tracking-tight lg:tracking-[-1px] text-[#fffefb] text-center max-w-[1700px] mx-auto min-[120rem]:px-0">
          Our Platform Expertise
        </h2>
        <p className="text-[19px] text-[#fffefb] font-medium text-center w-[90%] md:w-[70%] lg:w-[52%] mt-4 ">
          We've tested on all of the major channels and lean on that knowledge
          to decide what and how we want to test and allocate resources to drive
          growth across brand and performance.
        </p>

        <div className="w-full max-w-[1700px] mx-auto h-auto hidden lg:flex justify-between pt-10 px-39 pr-65 min-[120rem]:px-0">
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaGoogle size={18} />
            GOOGLE
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <AiOutlineFacebook size={18} />
            FACEBOOK
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <AiOutlineTikTok size={18} />
            TIKTOK
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <BiLogoHeroku size={18} />
            ROKU
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaRedditSquare size={18} />
            REDDIT
          </div>
        </div>

        <div className="w-full max-w-[1700px] mx-auto grid grid-cols-2 gap-3 px-4 pt-10 lg:hidden min-[120rem]:px-0">
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaGoogle size={18} />
            GOOGLE
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <AiOutlineFacebook size={18} />
            FACEBOOK
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <AiOutlineTikTok size={18} />
            TIKTOK
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <BiLogoHeroku size={18} />
            ROKU
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaRedditSquare size={18} />
            REDDIT
          </div>
        </div>

        <div className="w-full max-w-[1700px] mx-auto h-auto hidden lg:flex justify-between pt-15 px-39 pr-69 min-[120rem]:px-0">
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaTwitterSquare size={18} />
            TWITTER
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FiYoutube size={18} />
            YOUTUBE
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <RiPinterestLine size={18} />
            PINTEREST
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <BiLogoHeroku size={18} />
            HULU
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            QUORA
          </div>
        </div>

        <div className="w-full max-w-[1700px] mx-auto grid grid-cols-2 gap-3 px-4 pt-4 lg:hidden min-[120rem]:px-0">
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaTwitterSquare size={18} />
            TWITTER
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FiYoutube size={18} />
            YOUTUBE
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <RiPinterestLine size={18} />
            PINTEREST
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <BiLogoHeroku size={18} />
            HULU
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            QUORA
          </div>
        </div>

        <div className="w-full max-w-[1700px] mx-auto h-auto hidden lg:flex justify-between pt-15 px-39 pr-69 min-[120rem]:px-0">
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaInstagram size={18} />
            INSTAGRAM
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaSnapchat size={18} />
            SNAPCHAT
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <CiLinkedin size={18} />
            LINKEDIN
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FiYoutube size={18} />
            VIDEO
          </div>
          <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaInstagram size={18} />
            PROGRAMMATIC
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-3 px-4 pt-4 lg:hidden">
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaInstagram size={18} />
            INSTAGRAM
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaSnapchat size={18} />
            SNAPCHAT
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <CiLinkedin size={18} />
            LINKEDIN
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FiYoutube size={18} />
            VIDEO
          </div>
          <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
            <FaInstagram size={18} />
            PROGRAMMATIC
          </div>
        </div>
        <Link to="/get-started-with-havit-growth">
          <button className="text-[#0C2233] cursor-pointer text-[18px] md:text-[22px] font-bold mt-8 lg:mt-14 p-4 bg-[#ceff2a] px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
            Book a Strategy Call
          </button>
        </Link>
      </section>
      <section className="w-full max-w-[1700px] mx-auto h-auto pb-16 flex items-center flex-col min-[120rem]:px-0">
        <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-24 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
          CASE STUDIES
        </div>
        <p className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[46px] font-semibold leading-snug sm:leading-tight lg:leading-[50px] tracking-tight lg:tracking-[-1px] text-[#0c2233] text-center w-[90%] md:w-[80%] lg:w-[70%] mt-6">
          We are proud to partner with clients of all stages, sizes and
          industries on meaningful growth strategies and execution.
        </p>
        <CaseStudiesPoster />

        <Link to={"/portfolios"}>
          <div className="w-max px-6 py-2 border-2 border-[#0C2233] text-[#0C2233] text-[18px] lg:text-[20px] font-semibold m-auto mt-8 lg:mt-10 transition-transform duration-500 tilt-zoom">
            View all case studies
          </div>
        </Link>
      </section>

      <section className="w-full h-[452px] mediaLine flex items-center justify-center flex-col gap-6 lg:gap-6">
        <p className="text-[18px] sm:text-[22px] lg:text-[29px] font-medium text-[#fffefb] px-4 text-center lg:px-0">
          "I view our partnership with Tuff as more like an extension of my
          team.
        </p>

        <div className="flex items-center justify-center flex-col px-4 lg:px-0 w-full max-w-[90%] lg:max-w-none">
          <p className="text-[16px] sm:text-[20px] lg:text-[27px] font-semibold text-[#0c2233] bg-[#cefd94] text-center leading-tight py-1 lg:py-0">
            We strategize together, ask tough questions, examine the results,
            optimize –
          </p>
          <span className="text-[16px] sm:text-[20px] lg:text-[27px] font-semibold mt-2 text-[#0c2233] bg-[#cefd94] text-center leading-tight py-1 lg:py-0">
            We strategize together, ask tough questions, examine the results,
            optimize –
          </span>
        </div>

        <img
          src={star}
          alt="star"
          loading="lazy"
          className="w-[30px] sm:w-[40px] lg:w-auto"
        />

        <div className="flex items-center justify-center flex-col">
          <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#ffffff]">
            Brad Veach
          </h2>
          <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-medium text-[#ffffff]">
            VP of Marketing at Thnks
          </h3>
        </div>
      </section>
      <FinalSection text={box} />
      <Footer />
    </>
  );
}
