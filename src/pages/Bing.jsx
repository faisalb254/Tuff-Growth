import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import img1 from '../assets/bingimg1.svg'
import { BiChevronRight } from "react-icons/bi";
import signal1 from '../assets/signal1.png'
import signal2 from '../assets/signal2.png'
import greenquote from '../assets/greenquote.svg'
import bingimglast from '../assets/bingimglast.svg'
import chris from '../assets/chrisicon.png'
import jesse from '../assets/jesseicon.png'
import adli from '../assets/adliicon.png'
import img2 from '../assets/bingimg2.jpg'
import img3 from '../assets/bingimg3.jpg'
import img4 from '../assets/bingimg4.jpg'
import img5 from '../assets/bingimg5.jpg'
import img6 from '../assets/bingimg6.jpg'
import img7 from '../assets/bingimg7.jpg'


import { Link } from 'react-router-dom';


export default function Bing() {
    const box = {
        heading: "We’d love to work with you.",
        para: ["We partner with small, dedicated teams to build intentional and sustainable growth. Let’s level up your Bing Ads account together. Schedule time with Chris today and we’ll analyze your account and present your top growth opportunities in a PDF."],
        button: "Get a detailed Bings Ads Plan"
    }
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

            <section>
                <div className="ContentLine w-full flex justify-center items-center pt-50 pb-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className=' text-6xl font-black my-5'>
                                Work with Bing Ads Experts
                            </h1>
                            <p className=' text-xl my-5'>
                                Go past surface-level metrics. We create, perform and optimize data-driven experiments to scale your ROI.
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
                <div className=" w-full flex justify-center items-center py-20">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10 ">
                        <div className="w-full md:w-1/2  ">
                            <h1 className='text-4xl font-black my-5'>
                                Tuff is your Bing Ads agency.
                            </h1>
                            <p className=' text-xl my-5'>
                                Scale your PPC campaign results and grow your business with campaign strategy and execution from our experienced Bing Ads agency team.
                            </p>
                            {/* #FF6A39 */}
                            <span className=' flex text-xl font-black hover:text-[#FF6A39] tilt-zoom'>Tuff is different. Take a deeper look at how we like to work
                                <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                            </span>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2">
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 sm:w-96">
                                <img className=' w-12.5 h-12.5' src={signal1} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    Before Tuff
                                </h2>
                                <p className='my-4 text-[#0c2233] text-xl'>
                                    Accounts are unorganized, things slip, limited communication, all reports, and no action, it’s tough to see where things stand, and people are stressed.
                                </p>
                            </div>
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 sm:w-96">
                                <img className=' w-12.5 h-12.5' src={signal2} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    After Tuff
                                </h2>
                                <p className=' my-4 text-[#0c2233] text-xl'>
                                    Goals are aligned, everything is organized in one place, daily communication, focused Bing Ads strategy and execution, results delivered, progress is clear, and a sense of trust sets in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full homeImg2 py-20 flex justify-center items-center">
                    <div className="w-9/10 flex flex-col justify-start items-center text-white gap-5">
                        <h1 className=' w-2/3 text-5xl font-black text-center'>
                            We’ve got the right tricks, tools, and tactics.
                        </h1>
                        <div className="w-full flex flex-wrap justify-center items-center flex-col gap-5 md:flex-row">
                            <div className="w-full md:w-1/5 h-auto flex justify-center items-center flex-col flex-wrap gap-5 text-black">
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    Keyword research
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    Competitor research
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    Automated bid strategies
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    Granular & broad retargeting
                                </span>
                            </div>
                            <div className="w-full md:w-1/5 h-auto flex justify-center items-center flex-col flex-wrap gap-5 text-black">
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    Ad copy development
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    Budget pacing
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    Search term reporting
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    Quality score improvements
                                </span>
                            </div>
                            <div className="w-full md:w-1/5 h-auto flex justify-center items-center flex-col flex-wrap gap-5 text-black">
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    GTM setup
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    New beta releases
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    GA4 integration
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full'>
                                    Youtube ads campaign management
                                </span>
                            </div>
                            <div className="w-full md:w-1/5 h-auto flex justify-center items-center flex-col flex-wrap gap-5 text-black">
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] text-center font-black uppercase rounded-full'>
                                    Conversion tracking
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] text-center font-black uppercase rounded-full'>
                                    A/B testing
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] text-center font-black uppercase rounded-full'>
                                    Shopping feed optimizations
                                </span>
                                <span className='w-fit px-5 py-2.5 bg-[#CEFD94] text-center font-black uppercase rounded-full'>
                                    Display campaign management
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center pt-50 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2  ">
                            <h1 className=' text-6xl font-black my-5'>
                                We’d love to work with you.
                            </h1>
                            <p className=' text-xl my-5'>
                                Leverage the power of the world’s 2nd largest search engine & supercharge your Bing Ads account. Chris, Tuff’s Bing Ads Lead, will analyze your account and present your top growth opportunities in a PDF. This includes optimization tips, keyword refinements, and more. If nothing else, it’s an opportunity to think through ideas for your account, and we can leave it at that.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                Schedule a call with us
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={bingimglast} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center my-10">
                    <div className="w-9/10 flex flex-col justify-start items-center gap-5">
                        <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                            KNOWLEDGE BASE
                        </span>
                        <h2 className=' text-5xl font-black'>
                            RESOURCES
                        </h2>
                        <div className=" w-full flex justify-center items-center gap-5 flex-wrap">
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72. sm:w-96">
                                <img className=' my-4' src={img2} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    Bing Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    More Data, Better Results: How We’re Leveraging Google Analytics 4 To Drive Growth
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    Whether it’s optimizing paid spend, identifying the right channel mix, updating the user flow to improve CVR, pulling a creative analysis, implementing technical SEO fixes, or more, as a growth marketing agency, our entire team is in Google Analytics on a daily basis.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={chris} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Chris Alarcon</strong>
                                        | July 14, 2022
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img3} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    Bing Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    4 Reasons You Should Be Using Microsoft Ads For Your Business
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    Microsoft Ads, formerly known as Bing Ads, is the often overlooked PPC platform that many marketers and businesses treat as a lower-budget extension of their existing campaigns that are running on Google Ads.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={chris} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Chris Alarcon</strong>
                                        | July 22, 2020
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img4} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    Bing Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    The Art of Media Planning: Data-Driven Decisions to Own Every Stage of the Funnel
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    The term “full-funnel” has been a buzzword for years in advertising circles. It’s something that is referenced but not always put into practice. Full-funnel approaches to media planning are all hands on deck.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={jesse} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Jesse Nasadowski</strong>
                                        | May 26, 2023
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img5} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    Bing Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    Using Google Ads Automation to Scale Revenue for B2B, eCommerce, and DTC Brands
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    A challenging, but endlessly exciting, part of being a growth marketing agency is the fact that you have to constantly adapt to the ever-changing landscape of marketing in the digital age.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={jesse} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Jesse Nasadowski</strong>
                                        | February 18, 2022
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img6} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    Google Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    Capitalizing On Google Ads Automation Techniques To Scale Growth
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    Ever heard the word “automation” or phrase “machine learning” used in the context of advertising? Chances are that you have – especially in the last 5 – 10 years. But what exactly is it and how does it impact those trying to advertise online?
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={adli} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Adli Kilic</strong>
                                        | February 17, 2022
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img7} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    Google Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    How to Drive Better Strategic Decisions Using Google Analytics’ Attribution Models
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    The way the majority of marketers use Google Analytics’ attribution models to make strategic decisions is broken. I’m talking, “holy cow, this has major implications on our bottom line”, broken.
                                </p>
                                <div className="flex  items-center my-4">
                                    <img src={chris} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Chris Alarcon</strong>
                                        | January 19, 2022
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full flex flex-col justify-center items-center bg-[#0c2233] text-white py-20 gap-10">
                    <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                        BING ADS CASE STUDIES
                    </span>
                    <h2 className=' w-1/2 text-5xl font-black'>
                        Startups, Scale-ups, And Beyond
                    </h2>
                    <div className=" w-4/5 flex flex-col md:flex-row gap-4">
                        <img src={greenquote} alt="" className=" w-15 h-18" />
                        <div className="">
                            <p className="text-xl font-black">
                                “The entire team at Tuff has been incredible since day one. We were hesitant to have a team that was out of our office and especially across the country but it truly feels like she is a part of our company. She is always available when we need her and takes a true pride of ownership in everything she does. I highly recommend Ellen and the entire Tuff team!”
                            </p>
                            <p className="text-xl font-black my-4">
                                Carlos Saez, COO Property Force (View our reviews on Google & Facebook)
                            </p>
                        </div>
                    </div>
                    <div className=" w-4/5 flex flex-col md:flex-row gap-4">
                        <img src={greenquote} alt="" className=" w-15 h-18" />
                        <div className="">
                            <p className="text-xl font-black">
                                “We started with Tuff about six months ago and they have helped us out immensely! As a small company, Ellen and her team have helped increase our advertising presence at a reasonable rate which allows us to focus on other priorities. Highly recommend Tuff Marketing!”
                            </p>
                            <p className="text-xl font-black my-4">
                                Bjorn Bredeson, Marketing Manager, Rever (View our reviews on Google & Facebook)
                            </p>
                        </div>
                    </div>
                    <div className=" w-4/5 flex flex-col md:flex-row gap-4">
                        <img src={greenquote} alt="" className=" w-15 h-18" />
                        <div className="">
                            <p className="text-xl sm:text-2xl font-black">
                                “What I really love about Tuff is their ability to take the black box of PPC and simplify it into business speak that clients clearly understand and get excited about. They are extremely organized, always on time and get results.”
                            </p>
                            <p className="text-xl  font-black my-4">
                                Salomon Wancier, Owner, Suite Decisions (View our reviews on Google & Facebook)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center pt-50 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className=" w-full md:w-1/2">
                            <img src={bingimglast} alt="" />
                        </div>
                        <div className="w-full md:w-1/2  ">
                            <h1 className=' text-6xl font-black my-5'>
                                We’d love to work with you.
                            </h1>
                            <p className=' text-xl my-5'>
                                We partner with small, dedicated teams to build intentional and sustainable growth. Let’s level up your content strategy together. Schedule time with Nate today and we’ll analyze your account and present your top growth opportunities in a PDF.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                Let's talk
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <FinalSection text={box}/>
            <Footer />
        </>
    )
}
