import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import Faq from '../components/Faq'
import stars from '../assets/stars.svg'
import bradimg from '../assets/bradimg.png'
import img1 from '../assets/performanceimg1.png'
import img2 from '../assets/performanceimg2.png'
import img3 from '../assets/performanceimg3.png'
import img4 from '../assets/performanceimg4.svg'
import img5 from '../assets/performanceimg5.png'
import img6 from '../assets/performanceimg6.jpg'
import img7 from '../assets/performanceimg7.jpg'
import img8 from '../assets/performanceimg8.jpg'
import img9 from '../assets/performanceimg9.jpg'
import img10 from '../assets/performanceimg10.jpg'
import img11 from '../assets/performanceimg11.jpg'


import aarp from "../assets/aarp.svg";
import multiverse from "../assets/multiverse.svg";
import punchbow from "../assets/punchbow.svg";
import soona from "../assets/soona.svg";
import teachable from "../assets/teachable.svg";
import thnks from "../assets/thnks.svg";


import search from '../assets/paidsearch.svg'
import data from '../assets/track.svg'
import cro from '../assets/UserEx.svg'
import rate from '../assets/report.svg'
import pic from '../assets/pic.svg'
import cursor from '../assets/cursor.svg'
import { BiCheck, BiChevronRight } from "react-icons/bi";

import { Link } from 'react-router-dom'

export default function Performance() {
    const box = {
        heading: "Ready to grow?",
        para: ["We’ll start with an in-depth assessment of your current performance marketing efforts, goals, and challenges. Based on the assessment, our team will formulate a comprehensive growth marketing strategy to review together with you and the team."],
        button: "Book a strategy call"
    }
    const box2 = {
        heading: "Book a call with a performance marketer.",
        para: ["We’ll learn more about your growth goals, share a bit about Tuff and how we like to partner with clients to see if it might be a good fit. From there, we do an audit to figure out where we can have the biggest impact."],
        button: "Talk to us"
    }

    const faqs = [
        {
            question: "Why choose Tuff as your performance marketing agency?",
            answer:
                [
                    {
                        para: "A performance marketing agency is your go-to team for getting real results throughout every step of your customer journey. Unlike traditional marketing agencies that charge based on ad spend, a performance marketing agency will typically work on a fixed fee or hourly basis.",
                        type: "para"
                    },
                    {
                        para: "What really sets a performance marketing agency apart is a focus on return. We keep a watchful eye on your investments, set clear standards to spot what’s not working, and create a culture of accountability. This means we’re not afraid to cut out underperforming efforts, which builds trust with our clients, opens the door for more investment, and proves the value of marketing to your whole business.",
                        type: "para"
                    },
                    {
                        para: "In a nutshell, a performance marketing agency is all about delivering measurable results, whether it’s more website traffic, increased conversion rates, or higher sales, all while keeping an eye on the cost-effectiveness of every campaign.",
                        type: "para"
                    },
                ],
        },
        {
            question: "How much does a performance marketing agency cost?",
            answer:
                [
                    {
                        para: "To give you a general idea, monthly costs for performance marketing agencies can vary. For smaller businesses with basic needs, it might start at a few hundred dollars per month, while larger enterprises with extensive marketing demands could pay several thousand dollars or more. Remember, it’s not just about the cost; it’s about the potential return on investment.",
                        type: "para"
                    },
                    {
                        para: "At Tuff, we approach pricing by considering several key factors:",
                        type: "para"
                    },
                    {
                        para: "Team: We assess how many experts and strategists are needed to achieve the best results for your account.",
                        type: "list"
                    },
                    {
                        para: "Hours: We determine how many hours are required each week for implementation and testing to optimize your campaigns.",
                        type: "list"
                    },
                    {
                        para: "Services: We look at the range of services we’re providing, including creative, media, content, and data services.",
                        type: "list"
                    },
                    {
                        para: "Ad Spend: We consider the number of marketing channels in your mix and the budget",
                        type: "list"
                    },
                    {
                        para: "With these factors in mind, Tuff tailors a flat fee retainer that aligns with your specific business, needs, and goals. We’re all about creating a plan that works for you and delivers the results you’re looking for.",
                        type: "para"
                    },

                ],
        },
        {
            question: "What exactly does a performance marketing agency do?",
            answer: [
                {
                    para: "A performance marketing agency, like Tuff, partners closely with your business to drive measurable results. We use data-driven strategies across paid media, SEO, email marketing, and conversion rate optimization (CRO) to attract qualified leads, grow your customer base, and increase your revenue. Our campaigns are carefully monitored and optimized continuously to ensure maximum ROI.",
                    type: "para"
                },
            ]
        },
        {
            question: "How do I measure the success of a performance marketing agency?",
            answer:
                [
                    {
                        para: "At Tuff, success is always tied directly to your business objectives and KPIs. Typical performance indicators include revenue growth, cost per acquisition (CPA), return on ad spend (ROAS), conversion rates, and customer lifetime value (LTV). We provide transparent, detailed reporting and dashboards to clearly show how our marketing efforts are impacting your bottom line.",
                        type: "para"
                    },
                ]
        },
        {
            question: "What channels do performance marketing agencies typically focus on?",
            answer:
                [
                    {
                        para: "Performance marketing agencies like Tuff typically focus on paid search (Google Ads), paid social (Facebook, Instagram, LinkedIn, TikTok), SEO, content marketing, email automation, and conversion rate optimization. Our team evaluates your business model, audience, and objectives to determine the best channel mix to achieve your specific growth targets.",
                        type: "para"
                    },
                ]
        },
    ];

    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>

            <section>
                <div className="VideoLine w-full flex flex-col justify-center items-center pt-40 md:pt-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className=' text-6xl font-black my-5'>
                                Chart your course, adapt, and thrive with an established performance marketing agency.
                            </h1>
                            <p className=' text-xl my-5'>
                                Tuff is your expert strategy, implementation, management, and performance marketing partner. Our primary objective centers around making marketing, across various digital advertising strategies and platforms, a significant catalyst for the growth of the companies we collaborate with.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                                Let's talk
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div
                        className="hidden lg:block w-full h-[120px]  overflow-hidden relative "
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex animate-slide-right whitespace-nowrap">
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    <img src={aarp} alt="img1" className="h-full w-auto mx-10" />
                                    <img
                                        src={multiverse}
                                        alt="img2"
                                        className="h-full w-auto mx-10"
                                    />
                                    <img
                                        src={punchbow}
                                        alt="img3"
                                        className="h-full w-auto mx-10"
                                    />
                                    <img src={soona} alt="img4" className="h-full w-auto mx-10" />
                                    <img
                                        src={teachable}
                                        alt="img5"
                                        className="h-full w-auto mx-10"
                                    />
                                    <img src={thnks} alt="img6" className="h-full w-auto mx-10" />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center py-20">
                    <div className="w-9/10 flex flex-col items-center gap-10">
                        <h2 className=' text-5xl font-black w-4/5 text-center'>
                            Helping clients at different stages with their unique performance marketing needs
                        </h2>
                        <p className=' text-xl text-center w-2/3 '>
                            Fast-paced businesses need a strategic partner who understands the unique needs and challenges of their brand. Connecting with customers through effective marketing strategies is crucial for driving traffic and leads.
                        </p>
                        <div className="w-full flex flex-col md:flex-row gap-5">
                            <div className="w-full md:w-1/3 p-7.5 border border-[rgb(0_0_0_/_12%)]">
                                <h2 className=' text-2xl font-black'>
                                    Agile way of working
                                </h2>
                                <p className=' text-xl my-2.5'>
                                    We have highly empowered, cross-functional agile performance marketing teams focused on rapid test and learn strategies and tactics.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 p-7.5 border border-[rgb(0_0_0_/_12%)]">
                                <h2 className=' text-2xl font-black'>
                                    Full funnel capabilities that meet marketings rhythms and demands
                                </h2>
                                <p className=' text-xl my-2.5'>
                                    With full funnel capabilities that meet marketing rhythms and demands, we leverage digital media to enhance marketing effectiveness through data-driven strategies, and have specialists in proven processes across owned, earned, and paid media to reach the target audience.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 p-7.5 border border-[rgb(0_0_0_/_12%)]">
                                <h2 className=' text-2xl font-black'>
                                    Return on investment mindset for clients
                                </h2>
                                <p className=' text-xl my-2.5'>
                                    We closely monitor client investments, put in place standards to identify those not generating value, and create a culture of accountability in which underperforming investments are scrapped.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="md:px-18 py-12.5 flex justify-center items-center Croline2">
                    <div className="w-8/10 min-h-80 flex flex-col items-center justify-center text-2xl">
                        <img src={stars} alt="" />
                        <h2 className='w-full  text-center my-4.5 font-black  '>
                            <span className='bg-[#CEFD94]'>
                                “I view our partnership with Tuff as more like an extension of my team.
                            </span>
                        </h2>
                        <h2 className=' my-4.5 font-black text-center text-white'>
                            We strategize together, ask tough questions, examine the results, optimize – and it just keeps getting better. Exactly what I was looking for in a performance marketing agency.”
                        </h2>
                        <div className=" text-xl text-white my-4.5 flex flex-col justify-center items-center text-center">
                            <img src={bradimg} alt="" />
                            {/* <img className='w-2/5' src={michael} alt="" /> */}
                            <h3 className=' font-bold text-center'>
                                Brad Veach
                            </h3>
                            <p>VP of Marketing at Thnks</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20">
                    <div className=" w-9/10 flex flex-col justify-start items-center gap-10">
                        <div className="flex">
                            <img src={img4} alt="" />
                        </div>
                        <img src={img5} alt="" className=' w-1/2' />
                        <h1 className=' text-5xl font-black w-full text-center'>
                            We’ve got you covered with a wide range of performance marketing experiences and knowledge:
                        </h1>
                        <div className="flex flex-wrap w-ful justify-center gap-5">
                            <div className="w-full md:w-1/4 border border-[rgb(0_0_0_/_12%)] p-7.5">
                                <img src={cursor} alt="" />
                                <h3 className=' text-2xl font-black my-5'>
                                    Paid Media
                                </h3>
                                <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-2xl font-black'>
                                    Learn More
                                    <BiChevronRight />
                                </span>
                            </div>
                            <div className="w-full md:w-1/4 border border-[rgb(0_0_0_/_12%)] p-7.5">
                                <img src={pic} alt="" />
                                <h3 className=' text-2xl font-black my-5'>
                                    Performance Creative
                                </h3>
                                <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-2xl font-black'>
                                    Learn More
                                    <BiChevronRight />
                                </span>
                            </div>
                            <div className="w-full md:w-1/4 border border-[rgb(0_0_0_/_12%)] p-7.5">
                                <img src={search} alt="" />
                                <h3 className=' text-2xl font-black my-5'>
                                    SEO
                                </h3>
                                <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-2xl font-black'>
                                    Learn More
                                    <BiChevronRight />
                                </span>
                            </div>
                            <div className="w-full md:w-1/4 border border-[rgb(0_0_0_/_12%)] p-7.5">
                                <img src={rate} alt="" />
                                <h3 className=' text-2xl font-black my-5'>
                                    Content Marketing
                                </h3>
                                <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-2xl font-black'>
                                    Learn More
                                    <BiChevronRight />
                                </span>
                            </div>
                            <div className="w-full md:w-1/4 border border-[rgb(0_0_0_/_12%)] p-7.5">
                                <img src={cro} alt="" />
                                <h3 className=' text-2xl font-black my-5'>
                                    Conversion Rate Optimization
                                </h3>
                                <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-2xl font-black'>
                                    Learn More
                                    <BiChevronRight />
                                </span>
                            </div>
                            <div className="w-full md:w-1/4 border border-[rgb(0_0_0_/_12%)] p-7.5">
                                <img src={data} alt="" />
                                <h3 className=' text-2xl font-black my-5'>
                                    Data & Analytics
                                </h3>
                                <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-2xl font-black'>
                                    Learn More
                                    <BiChevronRight />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FinalSection text={box} />
            <section>
                <div className="w-full flex justify-center items-center py-20">
                    <div className="w-9/10 flex flex-col items-center gap-10">
                        <h2 className=' text-5xl font-black'>
                            Accelerate your team’s potential
                        </h2>
                        <p className=' text-xl '>
                            Rapidly grow and validate marketing performance with Tuff.
                        </p>
                        <div className="w-full flex flex-col md:flex-row gap-5">
                            <div className="w-full md:w-1/3 p-7.5 border border-[rgb(0_0_0_/_12%)]">
                                <h2 className=' text-2xl font-black'>
                                    Collaborating with your team
                                </h2>
                                <p className=' text-xl my-2.5'>
                                    Our clients tell us their favorite part of a Tuff engagement is the results we drive by working side by side with your team. Whether it’s improved processes and collaboration, advice on hiring, or junior marketers leveling up their skills, you’ll notice a positive cultural shift.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 p-7.5 border border-[rgb(0_0_0_/_12%)]">
                                <h2 className=' text-2xl font-black'>
                                    Constantly iterating
                                </h2>
                                <p className=' text-xl my-2.5'>
                                    With full funnel capabilities that meet marketing rhythms and demands, we have specialists in proven processes across owned, earned, and paid media to reach the target audience.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 p-7.5 border border-[rgb(0_0_0_/_12%)]">
                                <h2 className=' text-2xl font-black'>
                                    Helping with talent
                                </h2>
                                <p className=' text-xl my-2.5'>
                                    Many business leaders over the years have looked to Tuff to provide coverage and the peace of mind that comes with trusted expert performance marketers. We’ll support you on your day-to-day or unique complex growth needs to give your team a measurable lift.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 pt-20">
                    <img src={img2} alt="" className='w-full md:w-1/3' />
                    <img src={img3} alt="" className='w-full md:w-1/3' />
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col justify-center items-center py-20">
                    <div className="w-8/10 min-h-80 flex flex-col items-center justify-center text-2xl">
                        <img src={stars} alt="" />
                        <h2 className='w-full  text-center my-4.5 font-black  '>
                            <span className='bg-[#CEFD94]'>
                                “Tuff has been an incredible value-add to our business.
                            </span>
                        </h2>
                        <h2 className=' my-4.5 font-black text-center '>
                            They’re effective, flexible, communicative, and bright. I feel like I have another set of 6+ eyes on the growth of my business at all times.”
                        </h2>
                        <div className=" text-xl  my-4.5 flex flex-col justify-center items-center text-center">

                            {/* <img className='w-2/5' src={michael} alt="" /> */}
                            <h3 className=' font-bold text-center'>
                                Michael Corrao
                            </h3>
                            <p>Co-Founder at the team Bootcamp</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col justify-start items-center py-20 homeImg2 text-white text-xl gap-10">
                    <h2 className=' font-black w-2/3 text-5xl text-center'>
                        We continuously learn new things, and share those things with you:
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-5">
                        <div className="w-2/3 md:w-1/4 glassbg border border-[rgb(255_255_255_/_12%)] p-7.5 cursor-pointer">
                            <img src={img6} alt="" />
                            <h2 className=' font-black my-5'>
                                Building an inbound pipeline in a new region with account-based marketing principles
                            </h2>
                        </div>
                        <div className="w-2/3 md:w-1/4 glassbg border border-[rgb(255_255_255_/_12%)] p-7.5 cursor-pointer">
                            <img src={img7} alt="" />
                            <h2 className=' font-black my-5'>
                                Building an inbound pipeline in a new region with account-based marketing principles
                            </h2>
                        </div>
                        <div className="w-2/3 md:w-1/4 glassbg border border-[rgb(255_255_255_/_12%)] p-7.5 cursor-pointer">
                            <img src={img8} alt="" />
                            <h2 className=' font-black my-5'>
                                Building an inbound pipeline in a new region with account-based marketing principles
                            </h2>
                        </div>
                        <div className="w-2/3 md:w-1/4 glassbg border border-[rgb(255_255_255_/_12%)] p-7.5 cursor-pointer">
                            <img src={img9} alt="" />
                            <h2 className=' font-black my-5'>
                                Building an inbound pipeline in a new region with account-based marketing principles
                            </h2>
                        </div>
                        <div className="w-2/3 md:w-1/4 glassbg border border-[rgb(255_255_255_/_12%)] p-7.5 cursor-pointer">
                            <img src={img10} alt="" />
                            <h2 className=' font-black my-5'>
                                Building an inbound pipeline in a new region with account-based marketing principles
                            </h2>
                        </div>
                        <div className="w-2/3 md:w-1/4 glassbg border border-[rgb(255_255_255_/_12%)] p-7.5 cursor-pointer">
                            <img src={img11} alt="" />
                            <h2 className=' font-black my-5'>
                                Building an inbound pipeline in a new region with account-based marketing principles
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center flex-col">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-center text-[#0C2233] ">
                        FAQs
                    </h2>
                    <div className="w-full md:w-2/3">
                        <Faq faq={faqs} />
                    </div>
                </div>
            </section>
            <FinalSection text={box2} />
            <Footer />
        </>
    )
}
