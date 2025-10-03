import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img1 from '../assets/linkedinimg1.svg'
import img2 from '../assets/linkedinimg2.svg'
import { BiChevronRight } from "react-icons/bi";
import signal1 from '../assets/signal1.png'
import signal2 from '../assets/signal2.png'
import { IoIosCheckmark } from "react-icons/io";
import img3 from '../assets/linkedinimg3.jpg'
import img4 from '../assets/linkedinimg4.jpg'
import img5 from '../assets/linkedinimg5.jpg'
import img6 from '../assets/linkedinimg6.png'
import greenquote from '../assets/greenquote.svg'
import Elle from '../assets/ellieicon.png'
import jack from '../assets/jackicon.png'
import kate from '../assets/kateicon.png'
import david from '../assets/davidicon.png'
import { Link } from 'react-router-dom'
import FinalSection from '../components/FinalSection'


export default function Linkedin() {
    const box = {
        heading: "Ready to grow?",
        para: ["Your compounding growth curve begins here."],
        button: "Book a Strategy Call"
    }
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

            <section>
                <div className="ContentLine w-full flex justify-center items-center pt-50 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className=' text-6xl font-black my-5'>
                                Partner with Tuff as Your LinkedIn Ads Agency
                            </h1>
                            <p className=' text-xl my-5'>
                                LinkedIn’s B2B targeting is next level. From industry, to job seniority, to company, to groups, and specific job titles, ads can be served to the right professionals to increase reach, leads, and revenue.
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
                                We’ve got the right tricks, tools, and tactics to find your audience with LinkedIn Ads.
                            </h1>
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
                                    Confused about how it all works, crappy traffic, high CPCs, wasted spend, unclear communication, and lack of transparent results.
                                </p>
                            </div>
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 sm:w-96">
                                <img className=' w-12.5 h-12.5' src={signal2} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    After Tuff
                                </h2>
                                <p className=' my-4 text-[#0c2233] text-xl'>
                                    An organized roadmap, specific audiences, data-driven decisions, daily communication, results delivered, progress is clear, and a sense of trust sets in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full linkedinbg flex justify-center items-center text-white py-20">
                    <div className=" w-9/10 flex flex-col justify-center items-center gap-5">
                        <h1 className=' w-3/4 text-center font-black text-5xl'>
                            We have the tactics of a Fully Optimized and Data Driven LinkedIn Ads Strategy
                        </h1>
                        <div className=" w-full flex flex-col md:flex-row gap-5">
                            <div className="flex flex-col gap-5">
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Define great audiences
                                    </p>
                                </div>
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Write amazing LinkedIn Ads that compel your audience to act
                                    </p>
                                </div>
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Pick the right LinkedIn Ad format
                                    </p>
                                </div>
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Enable LinkedIn tracking for remarketing audiences
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Test / refine / test / refine / test / refine (iteration is ongoing)
                                    </p>
                                </div>
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Develop audiences and creative over time that drive the best results
                                    </p>
                                </div>
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Optimize for leads, website visits, and more.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Make LinkedIn a compliment to other digital channels
                                    </p>
                                </div>
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Analytics performance validation via UTMs
                                    </p>
                                </div>
                                <div className="w-2/3 text-xl flex ">
                                    <span className=' text-[#FF6A39] text-3xl font-black'>
                                        <IoIosCheckmark />
                                    </span>
                                    <p className=''>
                                        Audience exclusions
                                    </p>
                                </div>
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
                                Get a Detailed Plan. Free of Charge.
                            </h1>
                            <p className=' text-xl my-5'>
                                Ready to learn more about LinkedIn Ads and if they are right for your business? We’ll analyze your business and present your top growth opportunities in a PDF. This includes audience research, campaign analysis, and more. If nothing else, it’s an opportunity to think through ideas for your account, and we can leave it at that.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                Let's talk
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={img2} alt="" />
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
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col justify-center items-center bg-[#0c2233] text-white py-20 gap-10">
                    <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                        KNOWLEDGE BASE
                    </span>
                    <h2 className=' w-1/2 text-5xl font-black'>
                        Companies stick with Tuff.
                    </h2>
                    <p className=' w-2/3 text-xl text-center'>
                        Startups and B2B businesses have partnered with Tuff to increase leads, reach, and revenue with a data-driven social advertising strategy:
                    </p>
                    <div className=" w-4/5 flex flex-col md:flex-row gap-4">
                        <img src={greenquote} alt="" className=" w-15 h-18" />
                        <div className="">
                            <p className="text-xl sm:text-2xl font-black">
                                “Tuff has been a trusted partner of my company. They deliver quality work and clearly communicate what’s being done and when. I especially appreciate Tuff’s ability to manage projects from start-to-finish and provide guidance on how we can best achieve our goals. Tuff has proven to be an important strategic and tactical resource for us.”
                            </p>
                            <p className="text-xl  font-black my-4">
                                Geoff Duncan, CMO, Property Force (View our reviews on Google & Facebook)
                            </p>
                        </div>
                    </div>
                    <div className=" w-4/5 flex flex-col md:flex-row gap-4">
                        <img src={greenquote} alt="" className=" w-15 h-18" />
                        <div className="">
                            <p className="text-xl sm:text-2xl font-black">
                                “We started with Tuff about six months ago and they have helped us out immensely! As a small company, Ellen and her team have helped increase our advertising presence at a reasonable rate which allows us to focus on other priorities. Highly recommend Tuff Marketing!”
                            </p>
                            <p className="text-xl  font-black my-4">
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
                            <img src={img6} alt="" />
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
