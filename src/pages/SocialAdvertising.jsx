import React from "react";
import Navbar from '../components/NavbarNew'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import { BiChevronRight } from "react-icons/bi";
import block from "../assets/green-block.png"
import phone from "../assets/advertisingphone.png"
import img1 from "../assets/advertisingimg.png"
import img2 from "../assets/advertisingimg2.png"
import stars from "../assets/stars.svg"
import SeoTech from "../assets/SeoTech.svg";
import SeoCont from "../assets/SeoCont.svg";
import SeoRep from "../assets/SeoRep.svg";
import social from "../assets/ppc-social.svg";
import display from "../assets/ppc-display.svg";
import cro from "../assets/ppc-cro.svg";
import creative from "../assets/ppc-creative.svg";
import { Link } from 'react-router-dom'

export default function SocialAdvertising() {
    const box = {
        heading: "Ready to Elevate Your Brand and Drive Results?",
        para: ["Social advertising should support both immediate performance and long-term brand growth. A clear strategy, backed by testing and optimization, turns social platforms into predictable revenue channels."],
        button: "Book a Strategy Call"
    }
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>

            {/* Hero Section */}
            <section>
                <div className="w-full h-full GeoBg pb-10 ">
                    <div className="w-full flex flex-col md:flex-row pt-10 lg:pt-45 px-25 max-w-[1700px] mx-auto min-[120rem]:px-0">
                        <div className="w-full md:w-1/2 h-full flex flex-col my-5  text-white">
                            <h1 className='text-4xl md:text-6xl font-black w-full my-7.5 text-left'>
                                Scale Brand Advertising, Unlock New Opportunities, and Build a Healthier Media Mix
                            </h1>
                            <p className='text-2xl my-7.5'>
                                Social advertising should do more than generating impressions — it should drive measurable growth. When campaigns are built around the right audiences, platforms, and creative systems, social media becomes a powerful engine for demand, conversions, and long-term brand equity.
                            </p>
                            <Link to="/get-started-with-havit-growth">
                                <button className='my-7.5 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                    Let's Talk
                            </button>
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center relative">
                            <img src={block} alt="" className='w-1/2 h-auto relative' />
                            <img src={phone} alt="" className='w-1/3 md:w-1/3 h-auto absolute' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Built for Brands Section */}
            <section>
                <div className="px-25 py-12.5 flex justify-center items-center min-[120rem]:px-0">
                    <div className="w-9/10 md:w-8/10 flex flex-col items-center justify-center text-2xl">
                        <h2 className='my-2.5 font-black text-center text-3xl md:text-4xl'>
                            Built for Brands That Want Sustainable Growth
                        </h2>
                        <p className='my-2.5 text-center text-xl max-w-[1700px] mx-auto min-[120rem]:px-0'>
                            When social ads feel inconsistent, expensive, or unpredictable, the issue usually isn't the platform — it's the strategy behind it. A structured, audience-first approach helps reduce wasted spend, improve efficiency, and turn social channels into reliable growth drivers.
                        </p>
                        <img src={stars} alt="" />
                    </div>
                </div>
            </section>

            {/* Strategy, Measurement, Execution Cards */}
            <section>
                <div className="w-full h-auto SeoBg pt-10 flex items-center flex-col px-25 min-[120rem]:px-0">
                    <h2 className="text-3xl text-white text-center mt-4 px-4 font-black w-full lg:text-5xl lg:w-full md:w-1/2">
                        Every Campaign Is Tailored to Your Audience and Media Mix
                    </h2>
                    <p className="text-[16px] text-white text-center font-normal mt-6 px-4 leading-[22px] w-full lg:text-[20px] lg:mt-8 lg:leading-[25px] lg:w-[53%]">
                        No two businesses scale the same way. Effective social advertising starts by understanding who your audience is, how they behave across platforms, and what motivates them to take action.
                    </p>

                    <div className="w-full max-w-[1700px] mx-auto flex flex-col gap-6 px-6 pb-20 pt-10 lg:flex-row lg:gap-0 lg:justify-between lg:px-20">
                        {/* Card 1 - Strategy */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoTech} alt="Strategy" />
                            <h2 className="text-[24px] font-semibold mt-4 lg:text-[28px]">
                                Strategy
                            </h2>
                            <ul className='list-disc pl-5 text-xl'>
                                <li className='pt-2'>
                                    Clear audience segmentation based on intent and behavior
                                </li>
                                <li className='pt-2'>
                                    Platform-specific planning for Meta, TikTok, LinkedIn, and more
                                </li>
                                <li className='pt-2'>
                                    Messaging aligned with each stage of the customer journey
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 - Measurement */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoCont} alt="Measurement" />
                            <h2 className="text-[24px] font-semibold mt-4 lg:text-[28px]">
                                Measurement
                            </h2>
                            <ul className='list-disc pl-5 text-xl'>
                                <li className='pt-2'>
                                    Performance tracked across the full funnel
                                </li>
                                <li className='pt-2'>
                                    Focus on meaningful business metrics, not vanity numbers
                                </li>
                                <li className='pt-2'>
                                    Continuous insight into what's driving real results
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 - Execution */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoRep} alt="Execution" />
                            <h2 className="text-[24px] font-semibold mt-4 lg:text-[28px]">
                                Execution
                            </h2>
                            <ul className='list-disc pl-5 text-xl'>
                                <li className='pt-2'>
                                    Scroll-stopping creative built for social-first consumption
                                </li>
                                <li className='pt-2'>
                                    Structured testing to identify winning formats and messages
                                </li>
                                <li className='pt-2'>
                                    Ongoing optimization to improve efficiency and scalability
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Platforms Section */}
                    <div className="flex flex-col items-center pb-10">
                        <h2 className="w-full md:w-1/2 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[46px] font-semibold leading-snug sm:leading-tight lg:leading-[60px] mt-18 tracking-tight lg:tracking-[-1px] text-[#fffefb] text-center">
                            Platforms Powering High-Impact Social Campaigns
                        </h2>

                        <div className="w-full flex flex-wrap justify-center gap-3 px-4 pt-10">
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                META (FACEBOOK & INSTAGRAM)
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                TIKTOK
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                LINKEDIN
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                SNAPCHAT
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                PINTEREST
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                YOUTUBE
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Move the Needle Section */}
            <section>
                <div className="w-full min-h-[70vh] pb-7.5 px-25 min-[120rem]:px-0">
                    <div className="w-full h-full flex flex-col md:flex-row flex-wrap pt-10 md:pt-45 max-w-[1700px] mx-auto min-[120rem]:px-0">
                        <div className="w-full md:w-1/2 h-full flex flex-col text-black">
                            <h1 className='text-4xl font-black w-full my-7.5'>
                                Move the Needle With Measurable Results
                            </h1>
                            <p className='text-xl my-7.5'>
                                Social advertising works best when creative, targeting, and data move in sync. Campaigns designed with this alignment deliver stronger engagement, higher-quality leads, and improved return on ad spend.
                            </p>
                            <ul className='list-disc pl-5 text-xl'>
                                <li className='pt-2'>More relevant reach</li>
                                <li className='pt-2'>Stronger engagement rates</li>
                                <li className='pt-2'>Better conversion efficiency</li>
                                <li className='pt-2'>Scalable campaign performance</li>
                            </ul>
                            <Link to={"/services"}>
                                <p className="flex w-fit items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] mt-7">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={img1} alt="" className='w-2/3 h-auto' />
                        </div>
                    </div>

                    {/* Upper-Funnel Section */}
                    <div className="w-full h-full flex flex-col-reverse md:flex-row md:pt-10 px-25 min-[120rem]:px-0 max-w-[1700px] mx-auto">
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={img2} alt="" className='w-full h-auto px-10' />
                        </div>
                        <div className="w-full md:w-1/2 h-full flex flex-col  text-black">
                            <h1 className='text-4xl font-black w-full mt-7.5'>
                                Upper-Funnel Visibility That Feeds Lower-Funnel Performance
                            </h1>
                            <p className='text-xl mt-7.5'>
                                Strong performance starts at the top of the funnel. Educational, engaging, and brand-led creative builds trust early — making lower-funnel conversion campaigns more effective and less expensive over time.
                            </p>
                            <ul className='list-disc pl-5 text-xl mt-4'>
                                <li className='pt-2'>Awareness assets designed to educate and inspire</li>
                                <li className='pt-2'>Retargeting flows built on real user behavior</li>
                                <li className='pt-2'>Creative aligned with each funnel stage</li>
                            </ul>
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

            {/* Why Brands Choose Havit Section */}
            <section>
                <div className="w-full h-auto pt-20 flex items-center flex-col px-25 min-[120rem]:px-0 max-w-[1700px] mx-auto">
                    <div className="h-[45px] w-max px-[22px] bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                        FULL-FUNNEL GROWTH
                    </div>
                    <h2 className="text-[28px] text-[#0C2233] text-center mt-4 px-4 font-extrabold w-full lg:text-[42px] lg:w-[45%]">
                        Why Brands Choose Havit for Social Advertising
                    </h2>
                    <p className="text-[16px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[51%] lg:mt-5 lg:leading-[25px]">
                        Growth-focused brands need more than ad management — they need clarity, consistency, and accountability.
                    </p>

                    <div className="w-full h-auto pt-13 px-6 sm:px-10 md:px-14 lg:px-19 flex flex-wrap flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start">
                        <div className="w-full lg:w-[48%] mb-2 pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={social} alt="Paid Social" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Paid Social
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Campaigns built to attract, engage, and convert the right audiences.
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

                        <div className="w-full lg:w-[48%] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={creative} alt="Creative Performance" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Creative Performance
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Assets designed to perform in-feed, not just look good.
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

                        <div className="w-full lg:w-[48%] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={cro} alt="CRO Alignment" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                CRO Alignment
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Social traffic supported by conversion-optimized landing experiences.
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

                        <div className="w-full lg:w-[48%] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={display} alt="Attribution & Insights" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Attribution & Insights
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Clear understanding of what's working, why it's working, and where to scale.
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
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="flex items-center justify-center pt-4">
                            <Link to="/get-started-with-havit-growth">
                                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#FF6A39] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                                    Let's Talk
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section>
                <div className="px-18 py-12.5 flex justify-center items-center">
                    <div className="w-8/10 flex flex-col items-center justify-center text-2xl">
                        <h2 className='my-2.5 font-black text-center text-3xl'>
                            Proof Through Performance
                        </h2>
                        <p className='my-2.5 text-center text-xl'>
                            Results-focused teams value clarity, speed, and collaboration. Social advertising works best when feedback loops are tight and optimization is continuous.
                        </p>
                        <img src={stars} alt="" />
                    </div>
                </div>
            </section>

            {/* What This Supports Section */}
            <section>
                <div className="w-full py-10 bg-[#F5F5F5]">
                    <div className="flex flex-col items-center justify-center px-6">
                        <h3 className="text-[20px] font-bold text-[#0C2233] mb-4">
                            What This Supports
                            </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            <span className="px-4 py-2 bg-[#0C2233] text-white rounded-full text-sm font-medium">Paid Media</span>
                            <span className="px-4 py-2 bg-[#0C2233] text-white rounded-full text-sm font-medium">Social Advertising</span>
                            <span className="px-4 py-2 bg-[#0C2233] text-white rounded-full text-sm font-medium">Creative Strategy</span>
                            <span className="px-4 py-2 bg-[#0C2233] text-white rounded-full text-sm font-medium">Conversion Optimization</span>
                            <span className="px-4 py-2 bg-[#0C2233] text-white rounded-full text-sm font-medium">Growth Marketing</span>
                        </div>
                    </div>
                </div>
            </section>

            <FinalSection text={box} />
            <Footer />
        </>
    )
}
