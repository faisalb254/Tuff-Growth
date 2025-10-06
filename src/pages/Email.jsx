import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import img from '../assets/emailimg.png'
import img1 from '../assets/emailimg1.png'
import img2 from '../assets/emailimg2.png'
import img3 from '../assets/emailimg3.jpg'
import nova from '../assets/nova.svg'
import stars from '../assets/stars.svg'
import joyn from '../assets/joyn.svg'
import teach from '../assets/teach.svg'
import punch from '../assets/punch.svg'
import p from '../assets/p.svg'
import cabi from '../assets/cabi.svg'
import happy from '../assets/happy.svg'
import xendo from '../assets/xendo.svg'
import soonanew from '../assets/soonanew.svg'
import hustle from '../assets/hustlene.svg'
import akko from '../assets/akko.svg'
import koji from '../assets/kojinew.svg'
import comqi from '../assets/comqi.svg'
import multiverse from '../assets/multiverse.svg'
import thnks from '../assets/thnks.svg'
import aarp from '../assets/aarp.svg'
import brightwheel from '../assets/brightwheel.svg'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Email() {
    const icons = [
        joyn, teach, punch, p, cabi, happy, xendo, soonanew, hustle, akko, koji, comqi, multiverse, thnks, aarp, brightwheel
    ];
    const box = {
        heading: "What does success look like to your company??",
        para: [""],
        button: "Book a strategy call"
    }
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <div className="ContentLine w-full flex justify-center items-center md:pt-50 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className=' text-6xl font-black my-5'>
                                Continue the conversation for better conversions.
                            </h1>
                            <p className=' text-xl my-5'>
                                We implement a proven, step-by-step process for writing and designing high-converting emails.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                Let's talk
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center pt-50 ">
                    <div className="w-9/10 flex flex-col justify-start items-center gap-10">
                        <h1 className=' w-full md:w-2/3 text-5xl font-black text-center'>
                            Maximize every step of the funnel with conversion-optimized emails.
                        </h1>
                        <p className=' text-xl text-center w-full md:w-[60%]'>
                            We’re a different, more efficient way to grow your company. By digging into the entire user journey, we can optimize tactics for your full funnel, including email, to increase conversion rates.
                        </p>
                        <div className=" w-full flex flex-col md:flex-row gap-10">
                            <div className="w-full md:w-1/2">
                                <div className=" my-5">
                                    <h2 className=' text-2xl font-black'>
                                        Data-driven user research
                                    </h2>
                                    <p className=' text-xl'>
                                        We analyze each piece of the email puzzle so we can spend our time focused on the areas with the highest impact on revenue.
                                    </p>
                                </div>
                                <div className=" my-5">
                                    <h2 className=' text-2xl font-black'>
                                        Conversion-optimized (everything)
                                    </h2>
                                    <p className=' text-xl'>
                                        We use our up-to-date email marketing expertise to quickly identify ways to improve conversion rates at every stage. Our tactics apply to DTC, B2B, mobile, SaaS, and more.
                                    </p>
                                </div>
                                <div className=" my-5">
                                    <h2 className=' text-2xl font-black'>
                                        Premium email execution
                                    </h2>
                                    <p className=' text-xl'>
                                        We can rewrite, redesign, and rebuild each email to focus on the most important CTA.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <img src={img2} alt="" className='w-7/10' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20 homeImg2">
                    <div className="w-9/10 flex flex-col justify-center items-center gap-10 text-white">
                        <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-5 mt-19 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                            Case Studies
                        </div>
                        <h2 className=' text-5xl font-black'>
                            Proof? We got it.
                        </h2>
                        <p className='w-full md:w-1/2 text-center text-xl'>
                            From big wins out the gate to strategic, measured long-term results, we couldn’t be more excited to talk about our clients’ successes.å
                        </p>
                        <div className=" w-full flex p-12 glassbg gap-10">
                            <div className="w-1/2 flex items-center">
                                <img src={img3} alt="" className=' '/>
                            </div>
                            <div className="w-full md:w-1/2">
                                <img src={nova} alt="" className=' w-1/2' />
                                <h2 className=' text-2xl font-black'>
                                    Overcoming Regulatory Roadblocks by Reimagining Paid Media Strategies for Fintech
                                </h2>
                                <ul className=' border-t border-[rgb(255_255_255_/_12%)] my-5'>
                                    <li className="border-b border-[rgb(255_255_255_/_12%)] py-5 text-xl flex justify-between">
                                        <div className=" font-black flex items-center">
                                            <span className=' text-[#CEFD94]'>
                                                <FaArrowDown />
                                            </span>
                                            55%
                                        </div>
                                        <p className=' '>
                                            Below Target CPA
                                        </p>
                                    </li>
                                    <li className="border-b border-[rgb(255_255_255_/_12%)] py-5 text-xl flex justify-between">
                                        <div className=" font-black flex items-center">
                                            <span className=' text-[#CEFD94]'>
                                                <FaArrowUp />
                                            </span>
                                            72%
                                        </div>
                                        <p className=' '>
                                            Increase in Total Conversions MoM
                                        </p>
                                    </li>
                                    <li className="border-b border-[rgb(255_255_255_/_12%)] py-5 text-xl flex justify-between">
                                        <div className=" font-black flex items-center">
                                            <span className=' text-[#CEFD94]'>
                                                <FaArrowUp />
                                            </span>
                                            111%
                                        </div>
                                        <p className=' '>
                                            Increase in Total Impressions MoM
                                        </p>
                                    </li>
                                    <li className="border-b border-[rgb(255_255_255_/_12%)] py-5 text-xl flex justify-between">
                                        <div className=" font-black flex items-center">
                                            <span className=' text-[#CEFD94]'>
                                                <FaArrowUp />
                                            </span>
                                            299%
                                        </div>
                                        <p className=' '>
                                            Increase in Conversions from Q4 → Q1*
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center pt-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2  ">
                            <h1 className=' text-5xl font-black my-5'>
                                Expert email strategy and execution built to grow your business.
                            </h1>
                            <p className=' text-xl my-5'>
                                Installs, sign-ups, trials, and demos mean nothing if you can’t keep your users. Which makes your email campaigns incredibly important. It’s your first impression. But, it’s also your opportunity to guide new users to take the action that will increase their lifetime value.
                            </p>
                            <p className=' text-xl my-5'>
                                We leverage our marketing expertise to consistently create relevant emails that resonate with consumers, drive leads, and converts for measurable revenue.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                Let's talk
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="md:px-18 py-12.5 flex justify-center items-center">
                    <div className="w-8/10 min-h-80 flex flex-col items-center justify-center text-2xl">
                        <img src={stars} alt="" />
                        <h2 className='w-full  text-center my-4.5 font-black  '>
                            <span className='bg-[#CEFD94]'>
                                “Very knowledgeable team at Tuff – fast moving with a get it done attitude.
                            </span>
                        </h2>
                        <h2 className=' my-4.5 font-black text-center '>
                            Looking forward to a continue partnership and future success.”
                        </h2>
                        <div className=" text-xl  my-4.5 flex flex-col justify-center items-center text-center">
                            {/* <img src={bradimg} alt="" /> */}
                            {/* <img className='w-2/5' src={michael} alt="" /> */}
                            <h3 className=' font-bold text-center'>
                                Jordan Bevans
                            </h3>
                            <p>Head of Strategic Projects, Visory HQ</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full h-fit flex flex-col justify-start items-center gap-10 pt-20 homeImg5">
                    <div className="w-9/10 flex flex-col justify-start items-center gap-5">
                        <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                            OUR COMPANY
                        </span>
                        <h2 className=' text-5xl font-black text-white'>
                            Trusted by kickass businesses
                        </h2>
                        <div className="flex gap-5 flex-wrap my-30 justify-center items-center">
                            {
                                icons.map((icon, idx) => (
                                    <div key={idx} className="w-full md:w-1/5 h-[200px] glassbg border border-[rgb(255_255_255_/_12%)] p-7.5 flex justify-center items-center">
                                        <img src={icon} alt="" className=' ' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col justify-center items-center py-20 gap-10">
                    <h2 className=' text-5xl font-black text-center w-1/3'>
                        Better email is rooted in better research.
                    </h2>
                    <p className=' w-3/5 text-xl text-center'>
                        Right out the gate, we dig deep into your existing data, snag actionable insights, and create an informed email strategy designed to convert.
                    </p>
                    <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                        <Link to={"/get-started-with-tuff"}>
                            See our approach
                        </Link>
                    </button>
                </div>
            </section>
            <Footer />
        </>
    )
}
