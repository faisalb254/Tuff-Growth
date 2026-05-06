import React from 'react'
import Navbar from '../components/NavbarNew'
import Footer from '../components/Footer'
import Form from '../components/FormNew'

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
import { RxCross2 } from "react-icons/rx";
import { BiCheck } from "react-icons/bi";
import { Link } from 'react-router-dom'

export default function () {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <div className="w-full h-full  VideoLine pb-7.5">
                    <div className="w-full flex lg:flex-row flex-col lg:pt-45 max-w-[1700px] mx-auto ">
                        <div className="w-full lg:w-1/2 h-full flex flex-col  px-25 text-white min-[120rem]:px-0">
                            <h1 className='text-3xl md:text-6xl font-black w-full my-7.5 text-left'>
                                Creating a High-Performance Growth Future
                            </h1>
                            <p className=' text-2xl my-7.5'>
                                Short-term wins matter — but sustainable growth requires balance. The right mix of strategy, execution, and optimization helps drive immediate results while building long-term brand momentum.
                            </p>
                            <button className=' w-fit my-7.5 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                Let's talk
                            </button>
                        </div>
                        <div className="relative w-full h-full lg:w-1/2 max-w-[1700px] mx-auto flex justify-center items-center">
                            <img src={block2} alt="" className='w-1/4 lg:w-1/3 h-auto relative' />
                            <img src={block} alt="" className='w-1/4 lg:w-1/6 ml-8 mb-5 h-auto absolute' />
                            <img src={laptop} alt="" className='w-7/10 lg:w-full h-auto absolute' />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full max-w-[1700px] mx-auto min-[120rem]:px-0 h-auto pb-20 pt-20 flex items-center flex-col">
                    <div className="h-[45px] w-max px-[22px] bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                        FULL-FUNNEL GROWTH
                    </div>
                    <h2 className="text-[28px] text-[#0C2233] text-center mt-4 px-4 font-extrabold w-full lg:text-[42px] lg:w-[45%]">
                        Built for Speed. Designed for Results.
                    </h2>
                    <p className="text-[16px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[51%] lg:mt-5 lg:leading-[25px]">
                        Growth stalls when execution is slow or disconnected. A performance-led marketing function ensures campaigns move fast, teams stay aligned, and customers experience a seamless journey from first touch to conversion.
                    </p>

                    <div className="w-full h-auto pt-13 px-6 sm:px-10 md:px-14 lg:px-19 flex flex-wrap flex-col lg:flex-row gap-8 lg:gap-7 justify-center items-center ">

                        <div className="w-full lg:w-1/3 min-h-[200px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 ">
                            <img src={search} alt="Blackboard" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Paid Social
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Reach the right audiences with social campaigns designed to drive action — not just impressions. Strategy-led targeting ensures every dollar works harder toward measurable growth.
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
                                Display Advertising
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Stay top of mind with visually compelling display ads placed where your audience already spends time. Brand awareness and demand generation work best when supported by data-driven placement and creative.
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
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6 text-left">
                                CRO (Conversion Rate Optimization)
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Traffic means nothing without conversion. Identify friction points in the user journey and turn more visitors into customers through continuous testing and optimization.
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
                                Understand what’s actually driving revenue. Clear attribution connects spend to outcomes, helping smarter decisions across channels and budgets.
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
                        {/* <h2 className='my-4.5 font-black bg-[#CEFD94]'>
                            “Tuff has been an incredible value-add to our business.
                        </h2> */}
                        <h2 className=' my-4.5 font-black text-center text-white'>
                            “The team consistently delivered value, stayed responsive, and maintained a clear focus on growth at every stage.”
                        </h2>
                        <div className=" text-xl text-white my-4.5 flex flex-col justify-center items-center text-center">
                            {/* <img className='w-2/5' src={michael} alt="" /> */}
                            <h3 className=' font-bold text-center'>
                                — Client Feedback
                            </h3>
                            <p className='text-center'>(Brand-neutral, trust-focused tone)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full max-w-[1700px] mx-auto min-[120rem]:px-0 min-h-[2000px] md:min-h-[1280px] h-auto pb-7.5">
                    <div className="w-full h-full flex flex-col md:flex-row pt-20">
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center px-25 text-black">
                            <h1 className=' text-4xl font-black w-full my-7.5'>
                                Visual Callouts (Pain Points)
                            </h1>
                            <ul className="space-y-3 w-full my-4">
                                <li className="flex items-start gap-3">
                                    <RxCross2 className="text-black text-xl mt-0.5 flex-shrink-0" />
                                    <span className="text-black">Products pushed without context</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <RxCross2 className="text-black text-xl mt-0.5 flex-shrink-0" />
                                    <span className="text-black">Ads that don't align with intent</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <RxCross2 className="text-black text-xl mt-0.5 flex-shrink-0" />
                                    <span className="text-black">Budget wasted on low-impact placements</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <BiCheck className="text-black text-xl mt-0.5 flex-shrink-0" />
                                    <span className="text-black">Strategy-led creative</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <BiCheck className="text-black text-xl mt-0.5 flex-shrink-0" />
                                    <span className="text-black">Audience-aware messaging</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <BiCheck className="text-black text-xl mt-0.5 flex-shrink-0" />
                                    <span className="text-black">Data-backed distribution</span>
                                </li>
                            </ul>

                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <img src={img1} alt="" className='w-9/10 h-auto' />
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-col-reverse md:flex-row pt-20 px-25">
                        <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
                            <img src={img2} alt="" className='w-full h-auto  pl-10' />
                        </div>
                        <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-start  text-black">
                            <h1 className=' text-4xl font-black w-full mt-7.5 text-left'>
                                Connecting Data to Decisions
                            </h1>
                            <p className=' text-xl mt-7.5'>
                                Performance improves when teams can clearly see what’s working. Transparent reporting across channels highlights opportunities, uncovers inefficiencies, and supports smarter optimization over time.
                            </p>
                            <p className=' text-xl mt-7.5'>
                                SEO, PPC, and CRO insights combine to create a clearer picture of growth.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-auto flex flex-col justify-center items-start px-25 text-black">
                        <h1 className=' text-4xl font-black w-full mt-7.5 text-left'>
                            Make Upper-Funnel Assets Informative — Not Forgettable
                        </h1>
                        <p className=' text-xl mt-7.5'>
                            Awareness-stage assets should educate, inspire trust, and set expectations. When early messaging lacks clarity, downstream performance suffers.
                        </p>
                        <p className=' text-xl mt-2 text-left'>
                            Strong upper-funnel creative:
                        </p>
                        <ul className=" my-4">
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'> Builds familiarity</span>
                            </li>
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'> Answers early questions</span>
                            </li>
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'>Prepares users for conversion</span>
                            </li>
                        </ul>
                        {/* <p className="flex w-full my-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold ">
                                <span className=' flex hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]'>
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </span>
                            </p> */}
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full max-w-[1700px] mx-auto min-h-150 h-auto flex md:flex-row flex-col py-12.5 px-25 min-[120rem]:px-0">
                    <div className="w-full md:w-1/2 text-xl">
                        <h1 className=' text-5xl font-black my-5 text-left'>
                            How Your Growth Is Supported
                        </h1>
                        <p>
                            Every engagement begins with understanding goals, constraints, and growth opportunities. Execution follows a structured process designed to remove guesswork and improve outcomes.
                        </p>
                        <ul className=" my-4">
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'> Media planning aligned with business objectives</span>
                            </li>
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'> Audience research and segmentation</span>
                            </li>
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'>Insight-driven creative execution</span>
                            </li>
                            <li className=' flex items-center my-2.5'>
                                <LuCircleCheck />
                                <span className=' pl-2.5'>Continuous reporting and optimization</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 md:ml-30">
                        <img src={img3} className=' w-4/5' alt="" />
                    </div>
                </div>
            </section>

            <section >
                <div className="px-25 py-12.5 flex flex-col justify-center items-center Seolast min-[120rem]:px-0">
                    <div className="w-8/10 min-h-80 flex flex-col items-center justify-center text-2xl">
                        {/* <img src={stars} alt="" /> */}
                        {/* <h2 className='my-4.5 font-black bg-[#CEFD94] text-center'>
                            “Working with Tuff is truly a pleasure. Incredibly knowledgeable, thorough, kind, and diligent team members.
                        </h2> */}
                        <h2 className=' my-4.5 font-black text-center text-white'>
                            “The team brought clarity, precision, and consistency to our growth strategy.”
                        </h2>
                        <div className=" text-xl text-white my-4.5 flex flex-col justify-center items-center text-center">
                            {/* <img className='w-2/5' src={michael} alt="" /> */}
                            <h3 className=' font-bold text-center'>
                                — Client Leadership
                            </h3>
                            {/* <p>Head of Operations at Commonstock</p> */}
                        </div>
                    </div>
                    <div className=" w-7/10 text-white">
                        <h1 className=' text-center text-5xl font-black my-5'>
                            Ready to Build Smarter Growth?
                        </h1>
                        <p className=' text-center text-xl my-5'>
                            If current campaigns feel fragmented, underperforming, or difficult to scale — it’s time for a more structured approach.
                        </p>
                        <p className=' text-center text-xl my-5'>
                            Share a few details, and start the conversation.
                        </p>
                        <Form text="white" />
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}
