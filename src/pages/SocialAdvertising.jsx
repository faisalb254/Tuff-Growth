import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import block from "../assets/green-block.png"
import phone from "../assets/advertisingphone.png"
import img1 from "../assets/advertisingimg.png"
import img2 from "../assets/advertisingimg2.png"
import soonamedia from "../assets/soonamedia.jpg";
import soona from "../assets/soona.svg";
import palmetto from "../assets/koji.png";
import pal from "../assets/soona.svg";
import stars from "../assets/stars.svg"
import SeoTech from "../assets/SeoTech.svg";
import SeoCont from "../assets/SeoCont.svg";
import SeoRep from "../assets/SeoRep.svg";
import social from "../assets/ppc-social.svg";
import display from "../assets/ppc-display.svg";
import cro from "../assets/ppc-cro.svg";
import marketing from "../assets/ppc-marketing.svg";
import content from "../assets/ppc-content.svg";
import creative from "../assets/ppc-creative.svg";
import { BiLogoHeroku } from "react-icons/bi";
import {
    FaRedditSquare,
    FaTwitterSquare,
} from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineTikTok } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { Link } from 'react-router-dom'
import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";

export default function SocialAdvertising() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        companyWebsite: "",
        companyStage: "",
        timeline: "",
        budget: "",
        message: "",
    });
    const stages = ["Seed", "Series A or higher", "Enterprise"];
    const [companyStage, setCompanyStage] = useState("");
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    const box = {
        heading: "Ready to elevate your brand AND drive results?",
        para: [""],
        button: "Book a Strategy Call"
    }
    return (

        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>

            <section>
                <div className="w-full min-h-dvh GeoBg pb-7.5">
                    <div className="w-full h-full flex pt-45">
                        <div className="w-1/2 h-full flex flex-col  pl-15 text-white">
                            <h1 className=' text-6xl font-black w-full my-7.5'>
                                Scale brand advertising, find new opportunities, and create a healthier media mix.
                            </h1>
                            <p className=' text-2xl my-7.5'>
                                We generate quality results for our clients – not just empty traffic and one-off wins.
                            </p>
                            <button className='w-1/3 my-7.5 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                Let's talk
                            </button>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={block} alt="" className='w-1/2 h-auto relative' />
                            <img src={phone} alt="" className='w-1/5 h-auto absolute' />
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="px-18 py-12.5 flex justify-center items-center">
                    <div className="w-8/10 h-[40vh] flex flex-col items-center justify-center text-2xl">
                        <img src={stars} alt="" />
                        <h2 className='my-2.5 font-black bg-[#CEFD94]'>
                            “Tuff has been an incredible value-add to our business.
                        </h2>
                        <h2 className=' my-2.5 font-black text-center'>
                            They’re effective, flexible, communicative, and bright. I feel like I have six other sets of eyes on the growth of my business at all times.”
                        </h2>
                        <div className=" text-xl">
                            <h3 className=' font-bold text-center'>
                                Michael Corrao
                            </h3>
                            <p>Co-Founder at the team Bootcamp</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full h-auto SeoBg pt-10 flex items-center flex-col">

                    <h2 className="text-3xl text-white text-center mt-4 px-4 font-black w-full lg:text-5xl lg:w-1/2">
                        Every campaign is tailored to your audience and unique media mix.
                    </h2>

                    <p className="text-[16px] text-white text-center font-normal mt-6 px-4 leading-[22px] w-full lg:text-[20px] lg:mt-8 lg:leading-[25px] lg:w-[53%]">
                        Consider us an extension of your team for data-driven campaigns, consistent testing, audience development, and business growth.
                    </p>

                    <div className="w-full flex flex-col gap-6 px-6 pb-20 pt-10 lg:flex-row lg:gap-0 lg:justify-between lg:px-20">
                        {/* Card 1 */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoTech} alt="SeoTech" />
                            <h2 className="text-[24px]  font-semibold mt-4 lg:text-[28px]">
                                Strategy
                            </h2>
                            <ul className=' list-disc pl-5 text-xl'>
                                <li className=' pt-2'>
                                    Understand intent at every stage of the funnel, on all platforms
                                </li>
                                <li className=' pt-2'>
                                    Allocate budget across priority platforms and audiences
                                </li>
                                <li className=' pt-2'>
                                    Utilize a audience-centric approach to match relevant user flows with the right content, collaborating with our CRO team
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoCont} alt="SeoCont" />
                            <h2 className="text-[24px]  font-semibold mt-4 lg:text-[28px]">
                                Measurement
                            </h2>
                            <ul className=' list-disc pl-5 text-xl'>
                                <li className=' pt-2'>
                                    Track cross-platform customer journey to drive top of the funnel awareness
                                </li>
                                <li className=' pt-2'>
                                    Leverage the most effective conversion events and tracking setup in platform
                                </li>
                                <li className=' pt-2'>
                                    Get customized analytics to show the brand and performance metrics that matter most
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoRep} alt="SeoRep" />
                            <h2 className="text-[24px] font-semibold mt-4 lg:text-[28px]">
                                Execution
                            </h2>
                            <ul className=' list-disc pl-5 text-xl'>
                                <li className=' pt-2'>
                                    Write ad copy and develop creative that converts
                                </li>
                                <li className=' pt-2'>
                                    Continually optimize finding opportunity audiences using the right balance of automation and management
                                </li>
                                <li className=' pt-2'>
                                    Consistently test and iterate on campaign structure to improve
                                </li>
                                <li className=' pt-2'>
                                    Lead quality assessment reports and actionable insights
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center pb-10">
                        <h2 className=" w-1/2 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[46px] font-semibold leading-snug sm:leading-tight lg:leading-[60px] mt-18 tracking-tight lg:tracking-[-1px] text-[#fffefb] text-center">
                            Our partners benefit from our extensive experience using the following platforms:
                        </h2>

                        <div className="w-full h-auto hidden lg:flex justify-between pt-10 px-39 pr-65">
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <AiOutlineFacebook size={18} />
                                FACEBOOK
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <AiOutlineTikTok size={18} />
                                TIKTOK
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <FaRedditSquare size={18} />
                                REDDIT
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <BiLogoHeroku size={18} />
                                ROKU
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-3 px-4 pt-10 lg:hidden">
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <AiOutlineFacebook size={18} />
                                FACEBOOK
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <AiOutlineTikTok size={18} />
                                TIKTOK
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <FaRedditSquare size={18} />
                                REDDIT
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <BiLogoHeroku size={18} />
                                ROKU
                            </div>
                        </div>

                        <div className="w-full h-auto hidden lg:flex justify-center  pt-15 px-39 pr-69">
                            <div className=" w-8/10 flex justify-between items-center">
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                    <FaTwitterSquare size={18} />
                                    TWITTER
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                    <FiYoutube size={18} />
                                    YOUTUBE
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                    <BiLogoHeroku size={18} />
                                    HULU
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                    QUORA
                                </div>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-3 px-4 pt-4 lg:hidden">
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <FaTwitterSquare size={18} />
                                TWITTER
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <FiYoutube size={18} />
                                YOUTUBE
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                <BiLogoHeroku size={18} />
                                HULU
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                QUORA
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div className="w-full min-h-[70vh] pb-7.5">
                    <div className="w-full h-full flex flex-wrap pt-45">
                        <div className="w-1/2 h-full flex flex-col  pl-15 text-black">
                            <h1 className=' text-4xl font-black w-full my-7.5'>
                                Move the needle with measurable results
                            </h1>
                            <p className=' text-xl my-7.5'>
                                Our data and analytics process allows us to prioritize high-impact campaigns to quickly drive R.O.I. and key learnings, then invest in additional campaigns to scale up what works. We use these insights to get the right message in front of the right audience and ultimately pinpoint the channels that will grow your specific audience and lead to conversions.
                            </p>
                            <Link to={"/services"}>
                                <p className="flex w-fit items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </Link>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={img1} alt="" className='w-2/5 h-auto absolute' />
                        </div>
                    </div>
                    <div className="w-full h-full flex pt-45">
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={img2} alt="" className='w-1/2 h-auto absolute pl-10' />
                        </div>
                        <div className="w-1/2 h-full flex flex-col  pr-15 text-black">
                            <h1 className=' text-4xl font-black w-full mt-7.5'>
                                Let’s ensure our upper funnel assets are inspiring and lower funnel are informative.
                            </h1>
                            <p className=' text-xl mt-7.5'>
                                Our creative strategists and campaign managers stay in a near constant state of curiosity and exploration (and reporting to you!) around what messaging, imagery, creator style, trends, and concepts are driving best performance. Asking things like: “Which ads are most efficiently driving clicks and conversions? What are the critical common threads between these assets? What are the patterns in the data telling us about what our audience needs to stop their scroll?”
                            </p>
                            <p className=' text-xl mt-2'>
                                Then, we make detailed, strategic recommendations about what to make next and which type of content to replicate our best-performing creative and constantly expand the “canon” of what works.
                            </p>
                            <Link to={"/our-company"}>
                                <p className="flex mt-5 w-fit items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="creline h-auto w-full pt-4 mt-40 pb-10">
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
                        <div className="w-max px-6 py-2 border-2 border-white text-[#FFFEFB] text-[18px] lg:text-[20px] font-semibold m-auto mt-10 transition-transform duration-500 tilt-zoom">
                            View all case studies
                        </div>
                    </Link>
                </div>
            </section>



            <section>
                <div className="w-full h-auto pt-20 flex items-center flex-col">
                    <div className="h-[45px] w-max px-[22px] bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                        FULL-FUNNEL GROWTH
                    </div>
                    <h2 className="text-[28px] text-[#0C2233] text-center mt-4 px-4 font-extrabold w-full lg:text-[42px] lg:w-[45%]">
                        Speed, collaboration, and customer focus
                    </h2>
                    <p className="text-[16px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[51%] lg:mt-5 lg:leading-[25px]">
                        With a solid lower-funnel marketing foundation, we’ll help you combine the best of traditional display and performance to drive growth across the entire customer journey.
                    </p>

                    <div className="w-full h-auto pt-13 px-6 sm:px-10 md:px-14 lg:px-19 flex flex-wrap flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start">
                        <div className="w-full lg:w-[31.5%] h-[44vh] mb-2 pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 ">
                            <img src={social} alt="Blackboard" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Paid Social
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Match search intent with the right keyword strategy and account management approach.
                            </p>
                            <span>
                                <Link to={"/ppc"}>
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </Link>
                            </span>
                        </div>

                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={display} alt="Award" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Display
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Extend brand reach to your ideal customers by combining 1st Party Data, brand creative, and a spectrum of media channels.
                            </p>
                            <span>
                                <Link to={"/display"}>
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </Link>
                            </span>
                        </div>

                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={cro} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                CRO
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Identify the top converting user flows – and then optimize those.
                            </p>
                            <span>
                                <Link to={"/cro"}>
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </Link>
                            </span>
                        </div>
                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={marketing} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Marketing Attribution
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Know what works and replicate that across the entire customer journey.
                            </p>
                            <span>
                                <Link to={"/marketing-attribution"}>
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </Link>
                            </span>
                        </div>
                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={content} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Content
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Create a strategy for new content creation and existing content improvement to capture demand across customer segments.
                            </p>
                            <span>
                                <Link to={"/content-strategy"}>
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </Link>
                            </span>
                        </div>
                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={creative} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Creative
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Test dozens of messages, monitor performance, and then adjust as needed.
                            </p>
                            <span>
                                <Link to={"/creative"}>
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="flex items-center justify-center pt-4">
                            <Link to="/get-started-with-tuff">
                                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#FF6A39] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                                    Let’s Talk
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className="px-18 py-12.5 flex justify-center items-center">
                    <div className="w-8/10 h-[40vh] flex flex-col items-center justify-center text-2xl">
                        <img src={stars} alt="" />
                        <h2 className='my-2.5 font-black bg-[#CEFD94]'>
                            “Great team to work with. Very experienced, quick to respond and always willing to pivot based on feedback.
                        </h2>
                        <h2 className=' my-2.5 font-black text-center'>
                            I have really enjoyed working with the Tuff team and have learned a ton from them!”
                        </h2>
                        <div className=" text-xl">
                            <h3 className=' font-bold text-center'>
                                Laurens Spethmann
                            </h3>
                            <p>
                                Growth Leader at Headway
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FinalSection text={box} />
            <Footer />
        </>
    )
}
