import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import chart from '../assets/digitalchart.svg'
import bingimglast from '../assets/bingimglast.svg'
import digitallast from '../assets/digitallast.png'
import img3 from '../assets/technicalimg3.png'
import img2 from '../assets/technicalimg2.jpg'
import img4 from '../assets/technicalimg4.jpg'
import spencer from '../assets/spencericon.png'
import ethan from '../assets/ethanicon.jpeg'
import richard from '../assets/richardicon.png'
import { BiChevronRight } from "react-icons/bi";
import signal1 from '../assets/signal1.png'
import signal2 from '../assets/signal2.png'
import { Link } from 'react-router-dom'

export default function Digital() {
    const greens = [
        "Google Ads", "Facebook Ads", "Link Building", "Content Strategy", "Technical SEO", "Youtube Ads", "Retargeting Ads", "LinkedIn Ads", "Twitter Ads ", "Conversion Rate Optimization"
    ]
    const box = {
        heading: "We’d love to work with you.",
        para: ["We partner with small, dedicated teams to build intentional and sustainable growth. Let’s level up your business with a digital marketing agency that delivers results."],
        button: "Book a strategy call"
    }
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>

            <section>
                <div className="googlebg w-full flex justify-center items-center pt-50 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className=' text-6xl font-black my-5'>
                                Meet The Digital Marketing Agency That Commits
                            </h1>
                            <p className=' text-xl my-5'>
                                <span className='bg-[#CEFD94] text-black font-black'>
                                    “Not only are they a true pleasure to work with, they achieve phenomenal results. Highly recommend the team to people that are committed to growing their business. When you hire Tuff, prepare to hang on for a great ride.”
                                </span>
                            </p>
                            <p className=' text-sm'>
                                LIL ROBERTS, FOUNDER AT XENDOO
                            </p>
                            <Link to={"/get-started-with-tuff"}>
                                <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                    Let's talk
                                </button>
                            </Link>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={chart} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10 ">
                        <div className="w-full md:w-1/2  ">
                            <h1 className='text-4xl font-black my-5'>
                                Are you ready to find traction in scale with a digital marketing agency and a proven process?
                            </h1>
                            <p className=' text-xl my-5'>
                                If you’ve ever struggled with a lack of digital marketing focus in your business, or had a few failed attempts with outside resources and agencies, you’re not alone. We’ve partnered with 50+ startups and small businesses over the last four years to help them run digital marketing and growth experiments to find big wins. Now we want to help you.
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
                                    Tactics without clear goals, things slip, limited communication, lack of transparency, it’s tough to see where things stand, and people are running around like headless chickens.
                                </p>
                            </div>
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 sm:w-96">
                                <img className=' w-12.5 h-12.5' src={signal2} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    After Tuff
                                </h2>
                                <p className=' my-4 text-[#0c2233] text-xl'>
                                    A clear roadmap, daily communication, focused strategy and execution, a dedicated digital marketing agency, results delivered, organized around KPI’s, small tests with consistent earnings, and a sense of trust sets in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center text-white technicalbg py-20">
                    <div className="w-9/10 flex flex-col md:flex-row gap-5">
                        <div className="w-full md:w-1/2">
                            <h1 className=' font-black text-3xl sm:text-5xl'>
                                This is the five-step growth marketing framework we use when approaching growth for any business. Using this framework,we’ll help prioritize tactics based on return.
                            </h1>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center flex-wrap gap-5 ">
                            {
                                greens.map((green, idx) => (
                                    <span key={idx} className='w-fit h-14 flex justify-center items-center px-5  bg-[#CEFD94] font-black rounded-full text-black'>
                                        {green}
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=" w-full flex justify-center items-center pt-20 ">
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
                            STARTUPS, SCALE-UPS, AND BEYOND
                        </span>
                        <h2 className=' text-5xl font-black'>
                            Technical SEO Articles on Tuff
                        </h2>
                        <div className=" w-full flex justify-center gap-5 flex-wrap">
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72. sm:w-96">
                                <img className=' my-4' src={img3} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    GEO
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    GEO, AEO, and LLM SEO: How AI Is Reshaping Search (And What Brands Should Do About It)
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    We’re living in the AI era. From software and healthcare to data and other industries, AI is fueling technological disruption on a level unseen since the arrival of the personal…
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={spencer} alt="" className=' rounded-full w-1/10 m-2.5' />
                                    <span>
                                        <strong>Spencer Cappelli</strong>
                                        | June 13, 2025
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img2} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    Growth Marketing
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    Fueling Growth: Performance-Based Marketing for Growth-Driven Organizations
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    Are you leading a growth-focused organization eager to boost your marketing outcomes? Whether you're a high-growth startup, a mid-market business, or an enterprise managing multiple business units, marketing that drives…
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={ethan} alt="" className=' rounded-full w-1/10 m-2.5' />
                                    <span>
                                        <strong>Ethan Broder</strong>
                                        | May 20, 2025
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img4} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    Growth Marketing
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    The 4 Essential Steps of Performance Marketing for Brands
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    In working with hundreds of brands — from startup to enterprise — over the last half decade, we’ve found brand growth strategies can usually be distilled into one of three…
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={richard} alt="" className=' rounded-full w-1/10 m-2.5' />
                                    <span>
                                        <strong>Richard Meyer</strong>
                                        | May 13, 2025
                                    </span>
                                </div>
                            </div>

                        </div>
                        <p className=' text-2xl font-black'>Load More</p>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center pt-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className=" w-full md:w-1/2">
                            <img src={digitallast} alt="" />
                        </div>
                        <div className="w-full md:w-1/2  ">
                            <h1 className=' text-4xl font-black my-5'>
                                Meet the team = your new Digital Marketing Agency
                            </h1>
                            <p className=' text-xl my-5'>
                                As your business grows, so does the complexity of hiring the right people. With Tuff, you get a small, dedicated team built to fit your business needs. We are a team of adaptable growth marketers, search pros and technical specialists who help unlock growth through focused campaign strategy and execution.
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
