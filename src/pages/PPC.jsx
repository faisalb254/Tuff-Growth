import Navbar from '../components/NavbarNew'
import Footer from '../components/Footer'
import Form from '../components/FormNew'
import FinalSection from '../components/FinalSection'
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import lines from "../assets/green-line.png"
import block from "../assets/orange-block.png"
import laptop from "../assets/ppclaptop.png"
import laptop2 from "../assets/ppclaptop2.png"
import chart from "../assets/ppcchart.png"
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
import { Link } from 'react-router-dom'

export default function PPC() {
    const box = {
        heading: "Ready to Elevate Your Brand and Drive Results?",
        para: ["Let’s build a PPC strategy designed for efficiency, scale, and measurable growth."],
        button: "Book a Strategy Call"
    }

    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>

            <section>
                <div className="w-full min-h-[70vh] GeoBg pb-7.5">
                    <div className="w-full h-full flex flex-col md:flex-row md:pt-45 max-w-[1700px] mx-auto min-[120rem]:px-0">
                        <div className="w-full md:w-1/2 h-full flex flex-col px-22 text-white min-[120rem]:px-0">
                            <h1 className='text-4xl md:text-6xl font-black w-full my-7.5 text-left'>
                                Unlock a Faster, Sustainable Path to Growth
                            </h1>
                            <p className=' text-2xl my-7.5'>
                                We design and execute performance-driven PPC strategies that help brands scale efficiently, reduce acquisition costs, and generate predictable revenue — without wasted spend or guesswork.
                            </p>
                            <button className='w-2/3 md:w-1/3 my-7.5 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                Let's talk
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={lines} alt="" className='w-2/3 h-auto relative' />
                            <img src={laptop} alt="" className='w-1/2 h-auto absolute' />
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="px-18 py-12.5 flex justify-center items-center">
                    <div className="w-8/10 flex flex-col items-center justify-center text-2xl">
                        {/* <h2 className='my-2.5 font-black bg-[#CEFD94]'>
                            “I view our partnership with Tuff as more like an extension of my team.
                        </h2> */}
                        <h2 className=' my-2.5 font-black text-center max-w-[1700px]'>
                            “We strategize together, ask the right questions, analyze the results, and continuously optimize. That’s how real growth happens.”
                        </h2>
                        <img src={stars} alt="" />
                        {/* <div className=" text-xl">
                            <h3 className=' font-bold text-center'>
                                Brad Veach
                            </h3>
                            <p>VP of Marketing at THNKS</p>
                        </div> */}
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full h-auto SeoBg pt-10 flex items-center flex-col">

                    <h2 className="text-3xl text-white text-center mt-4 px-4 font-black w-full lg:text-5xl lg:w-1/2">
                        Best Practices Backed by Constant Testing & Iteration
                    </h2>

                    <p className="text-[16px] text-white text-center font-normal mt-6 px-4 leading-[22px] w-full lg:text-[20px] lg:mt-8 lg:leading-[25px] lg:w-[53%]">
                        Growth doesn’t come from tactics alone — it comes from systems. At Havit, we combine proven PPC frameworks with continuous experimentation, testing new tools, strategies, and ideas to keep your campaigns ahead of the curve.
                    </p>

                    <div className="w-full max-w-[1700px] mx-auto flex flex-col gap-6 px-6 pb-20 pt-10 lg:flex-row lg:gap-0 lg:justify-between lg:px-20 min-[120rem]:px-0">
                        {/* Card 1 */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoTech} alt="SeoTech" />
                            <h2 className="text-[24px]  font-semibold mt-4 lg:text-[28px]">
                                Strategy
                            </h2>
                            <ul className=' list-disc pl-5 text-xl'>
                                <li className=' pt-2'>
                                    Deep business and audience understanding before launch
                                </li>
                                <li className=' pt-2'>
                                    Channel-specific planning across Google, Meta, and more
                                </li>
                                <li className=' pt-2'>
                                    Clear alignment between goals, messaging, and spend
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
                                    Full-funnel tracking and attribution setup
                                </li>
                                <li className=' pt-2'>
                                    Business-focused KPIs, not vanity metrics
                                </li>
                                <li className=' pt-2'>
                                    Transparent reporting with actionable insights
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
                                    High-intent keyword and audience targeting
                                </li>
                                <li className=' pt-2'>
                                    Conversion-focused ad structures
                                </li>
                                <li className=' pt-2'>
                                    Ongoing optimization to improve ROAS and reduce CAC
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center pb-10 w-full max-w-[1700px] mx-auto min-[120rem]:px-0">
                        <h2 className=" w-full md:w-1/2 text-[28px] sm:text-[36px] md:text-[42px] font-semibold leading-snug sm:leading-tight lg:leading-[60px] mt-18 tracking-tight lg:tracking-[-1px] text-[#fffefb] text-center">
                            Platforms We Actively Scale On
                        </h2>
                        <p className="text-[16px] text-white text-center font-normal mt-6 px-4 leading-[22px] w-full lg:text-[20px] lg:mt-8 lg:leading-[25px] lg:w-[53%]">
                            Our team has hands-on experience driving results across leading advertising platforms:
                        </p>
                        <div className="w-full h-auto hidden lg:flex justify-between pt-10 px-4 lg:px-8 xl:px-39 pr-4 lg:pr-8 xl:pr-65 flex-wrap gap-3">
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[14px] lg:text-[15px] font-semibold text-[#0C2233] whitespace-nowrap">
                                Google Search & Display
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[14px] lg:text-[15px] font-semibold text-[#0C2233] whitespace-nowrap">
                                Google Performance Max
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[14px] lg:text-[15px] font-semibold text-[#0C2233] whitespace-nowrap">
                                Google Analytics
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[14px] lg:text-[15px] font-semibold text-[#0C2233] whitespace-nowrap">
                                Meta Ads
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-3 px-4 pt-10 lg:hidden">
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[13px] sm:text-[15px] font-semibold text-[#0C2233] text-center">
                                Google Search & Display
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[13px] sm:text-[15px] font-semibold text-[#0C2233] text-center">
                                Google Performance Max
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[13px] sm:text-[15px] font-semibold text-[#0C2233] text-center">
                                Google Analytics
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[13px] sm:text-[15px] font-semibold text-[#0C2233] text-center">
                                Meta Ads
                            </div>
                        </div>

                        <div className="w-full h-auto hidden lg:flex justify-center pt-15 px-4 lg:px-8 xl:px-39 pr-4 lg:pr-8 xl:pr-69">
                            <div className="w-full max-w-[90%] flex justify-between items-center flex-wrap gap-3">
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[14px] lg:text-[15px] font-semibold text-[#0C2233] whitespace-nowrap">
                                    LinkedIn Ads
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[14px] lg:text-[15px] font-semibold text-[#0C2233] whitespace-nowrap">
                                    TikTok Ads
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[14px] lg:text-[15px] font-semibold text-[#0C2233] whitespace-nowrap">
                                    YouTube Ads
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[14px] lg:text-[15px] font-semibold text-[#0C2233] whitespace-nowrap">
                                    Microsoft Advertising
                                </div>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-3 px-4 pt-4 lg:hidden">
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[13px] sm:text-[15px] font-semibold text-[#0C2233] text-center">
                                LinkedIn Ads
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[13px] sm:text-[15px] font-semibold text-[#0C2233] text-center">
                                TikTok Ads
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[13px] sm:text-[15px] font-semibold text-[#0C2233] text-center">
                                YouTube Ads
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[13px] sm:text-[15px] font-semibold text-[#0C2233] text-center">
                                Microsoft Advertising
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section>
                <div className="w-full max-w-[1700px] mx-auto min-[120rem]:px-0 flex flex-col my-15 justify-start items-center">
                    <div className="h-[45px] w-fit px-4 bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                        LET'S TALK
                    </div>
                    <h1 className='w-full md:w-1/2 font-black my-4.5 text-5xl text-center'>
                        Explore Our Core Performance Expertise
                    </h1>
                    <p className='text-2xl text-center'>
                        Tell us about your business and goals — we’ll map the right PPC strategy for you.
                    </p>
                    <div className="">
                        <Form text="black" />
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full min-h-[70vh] SeoBg pb-7.5">
                    <div className="w-full h-full flex flex-col md:flex-row md:pt-45 max-w-[1700px] mx-auto min-[120rem]:px-0">
                        <div className="w-full md:w-1/2 h-full flex flex-col  px-20 text-white min-[120rem]:px-0">
                            <h1 className=' text-4xl font-black w-full mt-7.5 text-left'>
                                A PPC Team Built to Deliver Consistent Results
                            </h1>
                            <p className=' text-xl my-7.5'>
                                We go beyond traffic generation. Every campaign is built to attract the right users, convert them efficiently, and support long-term business growth.
                            </p>
                            <ul className=' list-disc pl-5 text-xl'>
                                <li className=' pt-2'>
                                    Lower acquisition costs
                                </li>
                                <li className=' pt-2'>
                                    Higher-quality leads
                                </li>
                                <li className=' pt-2'>
                                    Scalable campaign structures
                                </li>
                                <li className=' pt-2'>
                                    Clear performance accountability
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={block} alt="" className='w-1/2 h-auto relative' />
                            <img src={laptop2} alt="" className='w-2/3 md:w-1/2 h-auto absolute' />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col-reverse md:flex-row md:pt-45 max-w-[1700px] mx-auto min-[120rem]:px-0">
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            {/* <img src={lines} alt="" className='w-2/3 h-auto relative' /> */}
                            <img src={chart} alt="" className='w-2/3 h-auto pl-10' />
                        </div>
                        <div className="w-full md:w-1/2 h-full flex flex-col  pl-15 text-white mr-5">
                            <h1 className=' text-4xl font-black w-full mt-7.5 text-left'>
                                Precision Search, Built for Performance
                            </h1>
                            <p className=' text-2xl my-7.5'>
                                We focus on intent-first search strategies that connect your brand with customers actively looking for your solution.
                            </p>
                            <ul className=' list-disc pl-5 text-xl'>
                                <li className=' pt-2'>
                                    Keyword strategies aligned with buying behavior
                                </li>
                                <li className=' pt-2'>
                                    Data-backed bid optimization
                                </li>
                                <li className=' pt-2'>
                                    Conversion-focused landing page alignment
                                </li>
                                <li className=' pt-2'>
                                    Continuous testing to unlock incremental gains
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full h-auto pt-20 flex items-center flex-col">
                    <h2 className="text-[28px] text-[#0C2233] text-center mt-4 px-4 font-extrabold w-full lg:text-[42px] lg:w-[45%]">
                        Why Brands Choose Havit
                    </h2>
                    <p className="text-[16px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[51%] lg:mt-5 lg:leading-[25px]">
                        We’re not just managing ads — we’re managing growth.
                    </p>

                    <div className="w-full h-auto pt-13 px-6 sm:px-10 md:px-14 lg:px-19 max-w-[1700px] mx-auto min-[120rem]:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            <div className="flex flex-col pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 h-full">
                                <img src={social} alt="Paid Search" className="w-[70px] h-auto" />
                                <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                    Paid Search
                                </h2>
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px] flex-grow">
                                    Capture high-intent demand and convert it efficiently.
                                </p>
                                <span className="mt-auto">
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </span>
                            </div>

                            <div className="flex flex-col pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 h-full">
                                <img src={display} alt="Paid Social" className="w-[70px] h-auto" />
                                <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                    Paid Social
                                </h2>
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px] flex-grow">
                                    Scale reach and conversions across social platforms with precision targeting.
                                </p>
                                <span className="mt-auto">
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </span>
                            </div>

                            <div className="flex flex-col pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 h-full">
                                <img src={cro} alt="Display & Retargeting" className="w-[70px] h-auto" />
                                <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                    Display & Retargeting
                                </h2>
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px] flex-grow">
                                    Stay top-of-mind and re-engage high-value audiences.
                                </p>
                                <span className="mt-auto">
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </span>
                            </div>

                            <div className="flex flex-col pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 h-full">
                                <img src={marketing} alt="CRO & Attribution" className="w-[70px] h-auto" />
                                <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                    CRO & Attribution
                                </h2>
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px] flex-grow">
                                    Understand what's working, why it's working, and how to scale it.
                                </p>
                                <span className="mt-auto">
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </span>
                            </div>

                            <div className="flex flex-col pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 h-full">
                                <img src={creative} alt="Creative Performance" className="w-[70px] h-auto" />
                                <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                    Creative Performance
                                </h2>
                                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px] flex-grow">
                                    Ads designed to perform — not just look good.
                                </p>
                                <span className="mt-auto">
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="flex items-center justify-center pt-4">
                            <Link to="/get-started-with-havit-growth">
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
                    <div className="w-8/10 flex flex-col items-center justify-center text-2xl">
                        <h2 className='my-2.5 font-black text-center'>
                            “Havit is an incredibly organized, strategic, and results-driven team. Their focus on performance helped us unlock consistent growth.”
                        </h2>
                        {/* <h2 className=' my-2.5 font-black text-center'>
                            We have churned through multiple agencies in our lifetime, and have been so impressed by Tuff.”
                        </h2> */}
                        <img src={stars} alt="" />
                        {/* <div className=" text-xl">
                            <h3 className=' font-bold text-center'>
                                Sashee Chandran
                            </h3>
                            <p>Founder and CEO at Tea Drops</p>
                        </div> */}
                    </div>
                </div>
            </section>
            <FinalSection text={box} />
            <Footer />
        </>
    )
}
