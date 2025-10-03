import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'

import block from "../assets/green-square.png"
import block2 from "../assets/orange-square.png"
import laptop from "../assets/displaylaptop.png"
import social from "../assets/ppc-social.svg";
import display from "../assets/ppc-display.svg";
import search from "../assets/paidsearch.svg";
import marketing from "../assets/ppc-marketing.svg";
import { BiChevronRight } from "react-icons/bi";
import stars from "../assets/stars.svg"
import michael from "../assets/michael.png"
import img1 from "../assets/displayimg1.png"
import img2 from "../assets/displayimg2.png"
import img3 from "../assets/displayimg3.png"
import { LuCircleCheck } from "react-icons/lu";
import { Link } from 'react-router-dom'

export default function () {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <div className="w-full min-h-dvh VideoLine pb-7.5">
                    <div className="w-full h-full flex md:flex-row flex-col pt-45">
                        <div className="w-full md:w-1/2 h-full flex flex-col  pl-15 text-white">
                            <h1 className=' text-6xl font-black w-full my-7.5'>
                                Creating a different high-performance future
                            </h1>
                            <p className=' text-2xl my-7.5'>
                                Find the right balance of campaigns to encourage sales in the short term and build the brand in the long term.
                            </p>
                            <button className='w-1/3 my-7.5 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                Let's talk
                            </button>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={block2} alt="" className='w-1/4 md:w-1/3 h-auto relative' />
                            <img src={block} alt="" className='w-1/4 md:w-1/6 ml-8 mb-5 h-auto absolute' />
                            <img src={laptop} alt="" className='w-7/10 md:w-1/2 h-auto absolute' />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full h-auto pb-20 pt-20 flex items-center flex-col">
                    <div className="h-[45px] w-max px-[22px] bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                        FULL-FUNNEL GROWTH
                    </div>
                    <h2 className="text-[28px] text-[#0C2233] text-center mt-4 px-4 font-extrabold w-full lg:text-[42px] lg:w-[45%]">
                        Speed, collaboration, and customer focus
                    </h2>
                    <p className="text-[16px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[51%] lg:mt-5 lg:leading-[25px]">
                        With a solid lower-funnel marketing foundation, we’ll help you combine the best of traditional display and performance to drive growth across the entire customer journey.
                    </p>

                    <div className="w-full h-auto pt-13 px-6 sm:px-10 md:px-14 lg:px-19 flex flex-wrap flex-col lg:flex-row gap-8 lg:gap-7 justify-center items-center ">

                        <div className="w-full lg:w-1/3 min-h-[200px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 ">
                            <img src={search} alt="Blackboard" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Paid Social
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Match search intent with the right keyword strategy and account management approach.
                            </p>
                            <span>
                                <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </span>
                        </div>

                        <div className="w-full lg:w-1/3 min-h-[200px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={social} alt="Award" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Display
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Extend brand reach to your ideal customers by combining 1st Party Data, brand creative, and a spectrum of media channels.
                            </p>
                            <span>
                                <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </span>
                        </div>

                        <div className="w-full lg:w-1/3 min-h-[200px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={display} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                CRO
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Identify the top converting user flows – and then optimize those.
                            </p>
                            <span>
                                <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </span>
                        </div>
                        <div className="w-full lg:w-1/3 min-h-[200px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={marketing} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Marketing Attribution
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Know what works and replicate that across the entire customer journey.
                            </p>
                            <span>
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
            </section>
            <section >
                <div className="px-18 py-12.5 flex justify-center items-center Croline2">
                    <div className="w-8/10 min-h-80 flex flex-col items-center justify-center text-2xl">
                        <img src={stars} alt="" />
                        <h2 className='my-4.5 font-black bg-[#CEFD94]'>
                            “Tuff has been an incredible value-add to our business.
                        </h2>
                        <h2 className=' my-4.5 font-black text-center text-white'>
                            They’re effective, flexible, communicative, and bright. I feel like I have six other sets of eyes on the growth of my business at all times.”
                        </h2>
                        <div className=" text-xl text-white my-4.5 flex flex-col justify-center items-center text-center">
                            <img className='w-2/5' src={michael} alt="" />
                            <h3 className=' font-bold text-center'>
                                Michael Corrao
                            </h3>
                            <p>Co-Founder at the team Bootcamp</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full min-h-[2000px] md:min-h-[1280px] h-auto pb-7.5">
                    <div className="w-full h-full flex flex-col md:flex-row pt-20">
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center pl-15 text-black">
                            <h1 className=' text-4xl font-black w-full my-7.5'>
                                High-impact display ads designed for your audience
                            </h1>
                            <p className=' text-xl my-7.5'>
                                You’re doing everything you can to optimize your campaigns, pulling out all the stops to drive down CAC, and constantly monitoring your other business-critical metrics…but is your creative being held to the same standard? Tuff-developed creative is an integral growth lever that pulls its weight when it comes to performance.
                            </p>
                            <p className="flex w-full items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold ">
                                <span className=' flex hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]'>
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </span>
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
                                Let’s ensure our upper funnel assets are inspiring and lower funnel are informative.
                            </h1>
                            <p className=' text-xl mt-7.5'>
                                Our creative strategists and campaign managers stay in a near constant state of curiosity and exploration (and reporting to you!) around what messaging, imagery, creator style, trends, and concepts are driving best performance. Asking things like: “Which ads are most efficiently driving clicks and conversions? What are the critical common threads between these assets? What are the patterns in the data telling us about what our audience needs to stop their scroll?”
                            </p>
                            <p className=' text-xl mt-2'>
                                Then, we make detailed, strategic recommendations about what to make next and which type of content to replicate our best-performing creative and constantly expand the “canon” of what works.
                            </p>
                            <p className="flex w-full my-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold ">
                                <span className=' flex hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]'>
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full min-h-150 h-auto flex md:flex-row flex-col py-12.5 px-18">
                    <div className="w-full md:w-1/2 text-xl">
                        <h1 className=' text-5xl font-black my-5'>
                            How we support you
                        </h1>
                        <p>
                            Tuff is your partner every step of the way. We will work with you to understand your goals, audience, and market and develop a display strategy specific to your needs.
                        </p>
                        <ul className=" my-4">
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'> Paid media planning and buying on all platforms</span>
                            </li>
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'> Audience building, sizing, and targeting and retargeting</span>
                            </li>
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'>Tracking implementation and pixel configuration</span>
                            </li>
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'>Data driven reporting, insights, and analysis</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 ml-30">
                        <img src={img3} className=' w-4/5' alt="" />
                    </div>
                </div>
            </section>

            <section >
                <div className="px-18 py-12.5 flex flex-col justify-center items-center Seolast">
                    <div className="w-8/10 min-h-80 flex flex-col items-center justify-center text-2xl">
                        {/* <img src={stars} alt="" /> */}
                        <h2 className='my-4.5 font-black bg-[#CEFD94] text-center'>
                            “Working with Tuff is truly a pleasure. Incredibly knowledgeable, thorough, kind, and diligent team members.
                        </h2>
                        <h2 className=' my-4.5 font-black text-center text-white'>
                            They’ve been crucial partners in achieving our growth strategy.”
                        </h2>
                        <div className=" text-xl text-white my-4.5 flex flex-col justify-center items-center text-center">
                            <img className='w-2/5' src={michael} alt="" />
                            <h3 className=' font-bold text-center'>
                                Courtney Dunlevie
                            </h3>
                            <p>Head of Operations at Commonstock</p>
                        </div>
                    </div>
                    <Form text="white" />
                </div>
            </section>


            <Footer />
        </>
    )
}
