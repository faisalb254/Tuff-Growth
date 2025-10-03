import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import chart from '../assets/frameworkchart.svg'
import signal1 from '../assets/signal1.png'
import signal2 from '../assets/signal2.png'
import bingimglast from '../assets/bingimglast.svg'
import Elle from '../assets/ellieicon.png'
import jack from '../assets/jackicon.png'
import kate from '../assets/kateicon.png'
import david from '../assets/davidicon.png'
import img3 from '../assets/linkedinimg3.jpg'
import img4 from '../assets/linkedinimg4.jpg'
import img5 from '../assets/linkedinimg5.jpg'
import img6 from '../assets/linkedinimg6.png'
import img1 from '../assets/careerimg1.png'
import img2 from '../assets/careerimg2.png'
import health from '../assets/health.svg'
import dental from '../assets/dental.svg'
import vision from '../assets/vision.svg'
import box from '../assets/box.svg'
import umbrella from '../assets/umbrella.svg'
import remote from '../assets/remote.svg'
import { FaLink } from "react-icons/fa";
import greenquote from '../assets/greenquote.svg'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom'

export default function GrowthFramework() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

            <section>
                <div className="tiktokbg w-full flex justify-center items-center pt-50">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className='text-4xl md:text-6xl font-black my-5'>
                                Get a Detailed Plan Using our Growth Marketing Framework
                            </h1>
                            <p className=' text-xl my-5'>
                                Early-stage businesses need a strategic vision and a roadmap. We partner with businesses of all sizes to help them identify their major growth channel and then scale it. This is our growth marketing framework.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                                <Link to={"/get-started-with-tuff"}>Let's talk</Link>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={chart} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10 ">
                        <div className="w-full md:w-1/2  ">
                            <h1 className='text-4xl font-black my-5'>
                                You need the long-term scalable growth channels to really build your business.
                            </h1>
                            <p className=' text-xl my-5'>
                                For most businesses, the big challenge is how to scale and which marketing channels will help you grow the fastest. With limited time, money, and people, you can’t afford to waste it on channels that are sub-optimal. We’ve worked with over fifty startups to help them with this using our growth marketing framework.
                            </p>
                            {/* #FF6A39 */}
                            <span className=' flex text-xl font-black hover:text-[#FF6A39] tilt-zoom'>Tuff is different - take a deeper look at how we like to work
                                <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                            </span>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2">
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 md:w-96 ">
                                <img className=' w-12.5 h-12.5' src={signal1} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    Before Tuff
                                </h2>
                                <p className=' text-xl my-4 text-[#0c2233]'>
                                    Lots of ideas but little action, things slip, limited communication, data not learnings, it’s tough to see where things stand, and people are stressed.
                                </p>
                            </div>
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 md:w-96 ">
                                <img className=' w-12.5 h-12.5' src={signal2} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    After Tuff
                                </h2>
                                <p className=' text-xl my-4 text-[#0c2233]'>
                                    A clear roadmap, daily communication, focused strategy and execution using a growth marketing framework, results delivered, an experimentation process, small tests with consistent earnings, and a sense of trust sets in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <section>
                <div className=" w-full flex justify-center items-center pt-50 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2  ">
                            <h1 className=' text-5xl font-black my-5'>
                                Get a Detailed Plan. Free of Charge.
                            </h1>
                            <p className=' text-xl my-5'>
                                Get ready to supercharge your growth marketing. Angela, Tuff’s Director of Growth, will analyze your accounts, businesses, and previous marketing tests and present your top growth opportunities in a PDF using our growth marketing framework. If nothing else, it’s an opportunity to think through ideas for your business, and we can leave it at that.
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
                            Resources
                        </h2>
                        <div className=" w-full flex gap-5 flex-wrap">
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72. sm:w-96">
                                <img className=' my-4' src={img3} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    CREATIVE
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    The Ultimate Guide to Maximizing Your Media Spend with Performance Ad Creative
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    Humans are inherently social creatures. We’ve survived and thrived for centuries, relying on one another to navigate the complexities of social interactions and decision-making. Take online reviews–we’ve all used them…
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={Elle} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Elle Ossello</strong>
                                        | January 25, 2023
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img4} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    TikTok Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    Want To Run TikTok Prospecting Campaigns That Convert? Try This! [Data Included]
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    What was once considered a platform for users to share silly, short-form videos that featured new dances and or lip-syncing trending audios in 2016 is now considered the top app for consumer spend in 2022.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={kate} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Kate Theobald</strong>
                                        | July 21, 2022
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img5} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    TikTok Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    Do Spark Ads Get Better Results on TikTok? (Yes, but it’s Complex)
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    With Facebook getting more challenging by the day, many advertisers and marketers are turning their attention to advertising on TikTok. It seems like every day there is another statistic about how TikTok is growing into a massive platform for not just Gen Z but Millennials and older generations as well.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={david} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>David Lawson</strong>
                                        | November 3, 2022
                                    </span>
                                </div>
                            </div>

                        </div>
                        <p className=' text-3xl font-black'>
                            Load More
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col justify-center items-center bg-[#0c2233] text-white py-20 gap-10">
                    <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                        BING ADS CASE STUDIES
                    </span>
                    <h2 className=' w-2/3 text-5xl font-black'>
                        Startups, Scale-ups, And Beyond
                    </h2>
                    <div className=" w-4/5 flex flex-col md:flex-row gap-4">
                        <img src={greenquote} alt="" className=" w-15 h-18" />
                        <div className="">
                            <p className="text-xl sm:text-2xl font-black">
                                “Working with the Tuff team is an absolute pleasure. They’re incredible sharp, goal oriented, and fantastic strategists. Most importantly: they get results! Everyone on the team is very personable and we always look forward to our meetings. Integrating the Tuff team has been one of the best decisions we’ve made and we are confident that we’ll do very well scaling up with their help.”
                            </p>
                            <p className="text-xl  font-black my-4">
                                Evan Huynh, Marketing Director, Renogy (View our reviews on Google & Facebook)
                            </p>
                        </div>
                    </div>
                    <div className=" w-4/5 flex flex-col md:flex-row gap-4">
                        <img src={greenquote} alt="" className=" w-15 h-18" />
                        <div className="">
                            <p className="text-xl sm:text-2xl font-black">
                                “The team at Tuff is very responsive and provides a wide gamut of marketing services like SEM, UX design and under-the-radar marketing channel insights. Great team to work with.”
                            </p>
                            <p className="text-xl  font-black my-4">
                                Luanne Bryant Director of Marketing, Xendoo (View our reviews on Google & Facebook)
                            </p>
                        </div>
                    </div>
                    <div className=" w-4/5 flex flex-col md:flex-row gap-4">
                        <img src={greenquote} alt="" className=" w-15 h-18" />
                        <div className="">
                            <p className="text-xl sm:text-2xl font-black">
                                “The Tuff team is made up of true pros. I am most impressed by their creativity – as it is so so rare to find creative, independent thinkers at an agency. They are always thinking of strategic ways to improve and always have the best interest of their clients in mind.”
                            </p>
                            <p className="text-xl  font-black my-4">
                                Brittany Murlas, Founder, Little Feminist (View our reviews on Google & Facebook)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col justify-center items-center py-20 gap-10">
                    <h2 className=' text-5xl font-black text-center w-1/3'>
                        We’d love to work with you.
                    </h2>
                    <p className=' w-3/5 text-xl text-center'>
                        We partner with small, dedicated teams to build intentional and sustainable growth. Let’s level up your business using our growth marketing framework together.
                    </p>
                    <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                        <Link to={"/get-started-with-tuff"}>
                            Book a strategy call
                        </Link>
                    </button>
                </div>
            </section>
            <Footer />
        </>
    )
}
