import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import media1 from "../assets/mediaimg1.png"
import soonamedia from "../assets/soonamedia.jpg";
import img1 from "../assets/ownedmedia1.png"
import img2 from "../assets/ownedmedia2.png"
import img3 from "../assets/ownedmedia3.png"
import soona from "../assets/soona.svg";
import palmetto from "../assets/koji.png";
import pal from "../assets/soona.svg";
import search from "../assets/paidsearch.svg";
import cro from "../assets/ppc-cro.svg"
import stars from "../assets/stars.svg"
import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";
import { CiAt } from "react-icons/ci";
import { BiChevronRight } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { Link } from 'react-router-dom'

export default function OwnedMedia() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#5A2AFF]">
                <Navbar />
            </div>

            <section>
                <div className="w-full min-h-dvh bg-[#0c2233] pb-7.5">
                    <div className="w-full h-full flex flex-col justify-center items-center pt-10 md:pt-45">
                        <div className="w-full md:w-2/3 h-full flex flex-col items-center  pl-15 text-white">
                            <div className="h-[45px] w-max px-[22px] bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                OWNED MEDIA
                            </div>
                            <h1 className='text-3xl md:text-6xl text-center font-black w-full my-7.5'>
                                We help you make the customer journey as simple, clear, and efficient as possible.
                            </h1>
                            <p className=' text-2xl text-center my-7.5'>
                                Building a strong brand means putting customer needs at the center of what you do and ensuring a flawless experience along every touchpoint.
                            </p>
                            <button className='w-3/4 md:w-1/5 my-7.5 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                Let's talk
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={media1} alt="" className='w-7/10 md:w-full h-auto ' />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full min-h-dvh flex flex-col justify-center items-start mb-20">
                    <h1 className="text-3xl md:text-5xl w-full p-15 font-black text-center">
                        In our view, to drive growth, cross-functional collaboration is crucial to provide the best experience for the customer at every stage of the funnel.
                    </h1>
                    <div className="w-full flex flex-col md:flex-row flex-wrap justify-center items-center  gap-5">
                        <div className="w-7/10 md:w-1/5 border-2 border-[#0000001F]  px-7.5 pb-7.5 pt-2.5">
                            <img src={search} alt="Blackboard" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                SEO
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                We implement data-driven techniques that balance low-hanging fruit and long-term efforts to make your website an organic lead gen machine.
                            </p>
                            <span>
                                <Link to={"/seo"}>
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </Link>
                            </span>
                        </div>
                        <div className="w-7/10 md:w-1/5 border-2 border-[#0000001F]  px-7.5 pb-7.5 pt-2.5">
                            <span className=' text-7xl'>
                                <CiViewList />
                            </span>
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Content
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                We create and produce a running list of content types that fit into the site structure and that are designed for the key audience segments and focus keywords.
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
                        <div className="w-7/10 md:w-1/5 border-2 border-[#0000001F]   px-7.5 pb-7.5 pt-2.5">
                            <span className=' text-7xl'>
                                <CiAt />
                            </span>
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Email
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                We leverage our marketing expertise to consistently create relevant emails that resonate with consumers, drive leads, and converts for measurable revenue.
                            </p>
                            <span>
                                <Link to={"/email-marketing"}>
                                    <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                        Learn more
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </p>
                                </Link>
                            </span>
                        </div>
                        <div className="w-7/10 md:w-1/5 border-2 border-[#0000001F]   px-7.5 pb-7.5 pt-2.5">
                            <span className=' text-7xl'>
                                <img src={cro} alt="Blackboard" />
                            </span>
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                CRO
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                We optimize across your entire funnel using a customer-focused approach that puts the right message in front of the right person at the right time.
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
                    </div>
                </div>
            </section>
            <section >
                <div className="px-18 py-12.5 flex justify-center items-center Croline2">
                    <div className="w-8/10 min-h-80 flex flex-col items-center justify-center text-2xl">
                        <h2 className='w-full  text-center my-4.5 font-black  '>
                            <span className='bg-[#CEFD94]'>
                                “Tuff is an amazing team, extremely organized, and driven to produce results!
                            </span>
                        </h2>
                        <h2 className=' my-4.5 font-black text-center text-white'>
                            We have churned through multiple agencies in our lifetime, and have been so impressed by Tuff.”
                        </h2>
                        <div className=" text-xl text-white my-4.5 flex flex-col justify-center items-center text-center">
                            <img src={stars} alt="" />
                            {/* <img className='w-2/5' src={michael} alt="" /> */}
                            <h3 className=' font-bold text-center'>
                                Sashee Chandran
                            </h3>
                            <p>Founder and CEO at Tea Drops</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full min-h-[2000px] md:min-h-[1280px] h-auto pb-7.5">
                    <div className="w-full h-full flex flex-col md:flex-row pt-20">
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center pl-15 text-black">
                            <h1 className=' text-4xl font-black w-full my-7.5'>
                                Hone in on the right mix of paid and owned tactics that drive growth.
                            </h1>
                            <p className=' text-xl my-7.5'>
                                Our end-to-end approach drives alignment between paid media, owned media, and data resulting in higher performance and greater confidence in your ability to capitalize on both short-term wins and long-term performance.
                            </p>
                            <p className="flex w-full items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold ">
                                <Link to={"/paid-media"}>
                                    <span className=' flex hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom my-2.5 hover:text-[21px]'>
                                        Learn more about our paid media approach
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </span>
                                </Link>
                            </p>

                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={img1} alt="" className='w-9/10 h-auto' />
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-col-reverse md:flex-row pt-20">
                        <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
                            <img src={img2} alt="" className='w-full h-auto  pl-10' />
                        </div>
                        <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center px-15 text-black">
                            <h1 className=' text-4xl font-black w-full mt-7.5'>
                                We want to know and replicate what works.
                            </h1>
                            <p className=' text-xl mt-7.5'>
                                We use a variety of metrics to prove the efficacy of strategies and track full-funnel performance metrics. We take that data and make sure you understand what it’s telling you and how we can use it.
                            </p>
                            <p className="flex w-full items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold ">
                                <Link to={"/marketing-attribution"}>
                                    <span className=' flex hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom my-5 hover:text-[21px]'>
                                        Learn more about our data solutions
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col md:flex-row pt-20">
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center pl-15 text-black">
                            <h1 className=' text-4xl font-black w-full my-7.5'>
                                Amazing, platform-specific, on-trend creative
                            </h1>
                            <p className=' text-xl my-7.5'>
                                We’re a revenue and conversion-first agency. But great creative—from ads to emails to landing pages and beyond—is a critical part of the equation. We’ve got a Rolodex of photographers, videographers, and designers to quickly and efficiently produce great creative for paid and organic tactics.
                            </p>
                            <p className="flex w-full items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold ">
                                <Link to={"/creative"}>
                                    <span className=' flex hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom my-2.5 hover:text-[21px]'>
                                        Learn more about campaign creative
                                        <span>
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </span>
                                </Link>
                            </p>

                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={img3} alt="" className='w-9/10 h-auto' />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="creline h-auto w-full pt-4 pb-10">
                    <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-24 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                        CASE STUDIES
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <h2 className="text-[42px] md:w-1/2 flex items-center font-semibold text-white text-center mt-2">
                            We’re a trim-but-mighty team with a proven track record of helping companies—in nearly every industry at nearly every stage of growth—unlock their path to sustainable growth.
                        </h2>
                    </div>
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
                <div className="relative max-w-[95%] sm:max-w-[90%] md:max-w-[88%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-start">
                        <div className="space-y-6 sm:space-y-8 mt-16 sm:mt-24 lg:mt-15">
                            <div>
                                <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold text-black leading-tight`}>
                                    Get in Touch
                                </h1>
                            </div>

                            <div className={`space-y-3 text-black text-base sm:text-[17px] md:text-[19px]`}>
                                <p>
                                    Let’s talk about how we can optimize your funnel with a customer-first, data-driven approach.
                                </p>
                                {/* <p className="text-sm sm:text-base md:text-lg">
                                From there, we do an audit to figure out where we can have
                                the biggest impact and then build a tailored plan based on
                                our insights and customized to you. Last, we execute as a
                                team, putting high-level marketing strategies with expert
                                implementation.
                            </p> */}
                            </div>
                        </div>
                        <div className="">
                            <Form text="black" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
