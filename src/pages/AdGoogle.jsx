import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import img1 from '../assets/googleimg1.png'
import img2 from '../assets/googleimg2.png'
import img3 from '../assets/googleimg3.png'
import img4 from '../assets/googleimg4.svg'
import img5 from '../assets/googleimg5.png'
import { BiChevronRight } from "react-icons/bi";
import signal1 from '../assets/signal1.png'
import signal2 from '../assets/signal2.png'
import thnks from "../assets/THNKS-logo.svg"
import stars from '../assets/green-star.svg'
import brad from '../assets/bradicon.png'
import chris from '../assets/chrisicon.png'
import jesse from '../assets/jesseicon.png'
import adli from '../assets/adliicon.png'

import content1 from '../assets/contentimg1.jpg'
import img6 from '../assets/bingimg2.jpg'
import img7 from '../assets/bingimg3.jpg'
import img8 from '../assets/bingimg4.jpg'
import img9 from '../assets/bingimg5.jpg'
import img10 from '../assets/bingimg6.jpg'
import img11 from '../assets/bingimg7.jpg'
import { Link } from 'react-router-dom';

export default function AdGoogle() {
    const box = {
        heading: "Ready to grow?",
        para: ["Let’s chat briefly and get the ball rolling on the audit."],
        button: "Book a Strategy Call"
    }
    const faqs = [
        {
            question: "What does it cost to work with Tuff? ",
            answer:
                [
                    {
                        para: "As a leading Google advertising agency, our starting fee is $3,500 per month, but our contracts can vary depending on your account’s complexity and marketing budget. We specialize in helping early-stage startups and small businesses with Google Ads.",
                        type: "para"
                    },
                    {
                        para: "Our approach is tailored for teams looking to test and improve their performance, efficiently scale their ad campaigns, and ensure they’re getting the most out of their advertising budget. Compared to hiring an in-house team, our full-stack ad services are significantly more affordable, and we provide more support than working with a freelancer.",
                        type: "para"
                    }
                ],
        },
        {
            question: "Do you require a long-term contract?",
            answer:
                [
                    {
                        para: "As a growth marketing agency, we partner with businesses to drive and accelerate their growth through a combination of marketing strategies and tactics. Here’s how our typical process works with clients:",
                        type: "para"
                    },
                    {
                        para: "Initial Assessment: The process often begins with an in-depth assessment of your current marketing efforts, goals, and challenges. We work closely with you to understand your business, target audience, competitive landscape, and growth objectives.",
                        type: "list"
                    },
                    {
                        para: "Strategy Development: Based on the assessment, our team will formulate a comprehensive growth marketing strategy. This strategy outlines the overarching plan to achieve your goals, including specific tactics, channels, and timelines. The strategy may encompass various growth focuses, including content marketing, search engine optimization (SEO), email marketing, paid media, and performance creative.",
                        type: "list"
                    },
                    {
                        para: "Implementation: With the strategy in place, we start executing the plan and prioritized list of activities. This can involve creating and optimizing paid campaigns, producing high-quality content, conducting SEO audits, and managing website initiatives, among other tactics. We often utilize a mix of owned, earned, and paid media to reach the target audience.",
                        type: "list"
                    },
                    {
                        para: "Data Analytics and Tracking: A crucial aspect of growth marketing is data analysis and tracking. We plug into a number of different analytics tools to monitor the performance of marketing campaigns in real-time. This includes tracking website traffic, conversion rates, user engagement, revenue, and more. Data-driven insights help us make informed decisions and optimize campaigns for better results.",
                        type: "list"
                    },
                    {
                        para: "Continuous Optimization: At Tuff, we often say “growth is a process not an outcome” because it’s truly an iterative process. Our experts will continuously analyze the data and growth marketing metrics to identify areas for improvement. We adjust strategies, refine tactics, and optimize campaigns to maximize ROI and achieve your growth goals. This may involve A/B testing, conversion rate optimization, and other techniques.",
                        type: "list"
                    },
                    {
                        para: "Scaling: As successful strategies are identified and refined, we focus on scaling up the most effective campaigns and killing anything that isn’t working. This might involve increasing advertising budgets, expanding content production, or targeting new market segments to drive further growth.",
                        type: "list"
                    },
                    {
                        para: "Reporting and Communication: In addition to integrated Slack channels and weekly meetings, we provide regular reporting and updates on Google ads campaign performance, allowing you to track progress and understand the return on your marketing investment. We also work together on monthly recaps and quarterly planning sessions.",
                        type: "list"
                    },
                    {
                        para: "Simply speaking, as a growth marketing agency, we’re a strategic partner that leverages a combination of expertise, data analysis, and ongoing optimization to help businesses expand their reach, acquire new customers, and increase revenue. Our focus is on achieving measurable, sustainable growth for their clients.",
                        type: "list"
                    },
                ],
        },
        {
            question: "Do I need tracking setup or is that a separate fee? ",
            answer: [
                {
                    para: "We’re experts at a variety of growth marketing capabilities. We partner with clients to set the roadmap and then get to work experimenting with a variety of different tactics based on their goals.",
                    type: "para"
                },
                {
                    para: "Our list of tactics includes but is most certainly not limited to:",
                    type: "para"
                },
                {
                    para: "Paid Media",
                    type: "list"
                },
                {
                    para: "Video Marketing",
                    type: "list"
                },
                {
                    para: "Creative Testing",
                    type: "list"
                },
                {
                    para: "Performance Creative",
                    type: "list"
                },
                {
                    para: "Data & Analytics",
                    type: "list"
                },
                {
                    para: "SEO",
                    type: "list"
                },
                {
                    para: "Content Marketing",
                    type: "list"
                },
                {
                    para: "Conversion Rate Optimization",
                    type: "list"
                },
            ]
        },
        {
            question: "How quickly do you take over the Google ads account?  ",
            answer:
                [
                    {
                        para: "Many Google ads agencies typically price from a percentage of the ad spend they manage or a share of the revenue generated by their strategies. Both of these approaches are entirely valid. However, we’ve intentionally designed our pricing model differently: We utilize flat-fee retainers that are determined by the number of services, hours, and team we incorporate simultaneously.",
                        type: "para"
                    },
                    {
                        para: "Why did we choose this approach? Growth marketing is inherently unpredictable. Occasionally, even the most skilled growth marketers can anticipate that a combination of PPC, SEO content, and social advertising is the winning formula. Nevertheless, if one of these components fails to meet expectations, it’s not an indication of failure but rather a signal that it’s time to explore new avenues. Our process at Tuff is structured in a way that enables us to seamlessly introduce new services or team members, such as CRO (Conversion Rate Optimization) or creative development, without disruption until we discover the perfect mix for your needs.",
                        type: "para"
                    },
                ]
        },
    ];
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#5A2AFF]">
                <Navbar />
            </div>

            <section>
                <div className="googlebg w-full flex justify-center items-center md:pt-50 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className=' text-6xl font-black my-5'>
                                Amplify search results with a reliable Google Ads agency
                            </h1>
                            <p className=' text-xl my-5'>
                                Simply getting impressions and clicks doesn’t cut it. We focus on data and results-driven paid search campaigns to really make an impact. No fluff. Ever.
                            </p>
                            <Link to={"/get-started-with-tuff"}>
                                <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                    Let's talk
                                </button>
                            </Link>
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
                                Tuff is your Google Ads agency.
                            </h1>
                            <p className=' text-xl my-5'>
                                Grow your business and boost your results with the best Google Ads agency team handling your campaign strategy and execution. With over 8 years of experience, we’ve managed search campaigns for businesses of all sizes and budgets, covering competitor, branded, non-branded, Alpha Beta & Smart Broad, international, experimental, and various other campaigns types.
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
                                    Everything is organized in one place, daily communication, focused Google Ads strategy and execution, results delivered, progress is clear, and a sense of trust sets in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center py-20 homeImg2 text-white">
                    <div className=" w-9/10 flex flex-col justify-start items-center">
                        <span className='w-fit px-5 py-2.5 bg-[#CEFD94] text-black uppercase text-center font-black rounded-full my-5'>
                            GOOGLE ADS testimonial
                        </span>
                        <h2 className=' text-4xl font-black my-5'>
                            Startups, Scaleups, and Beyond
                        </h2>
                        <div className=" w-full p-12 glassbg border border-[rgb(255_255_255_/12%)] flex flex-col md:flex-row gap-5">
                            <div className="w-full md:w-1/2">
                                <div className="flex flex-col md:flex-row gap-2">
                                    <img src={thnks} alt="" />
                                    <img src={stars} alt="" />
                                </div>
                                <p className=' my-2.5 text-xl'>
                                    “The team at Tuff knows their stuff – and it’s precisely why they are not selling ‘magic’ or any kind of ‘mysterious sauce.’ Instead, they are betting on transparency and experimentation, and it seems to be working well: <strong>The agency was warmly recommended to TechCrunch multiple times via our growth marketing survey.”</strong>
                                </p>
                                <div className="flex gap-5">
                                    <img src={brad} alt="" className='w-1/5 md:w-1/10' />
                                    <div className="">
                                        <strong>Brad Veach</strong>
                                        <p>VP of Marketing at Thnks</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className=" w-full flex justify-center items-center py-20">
                    <div className=" w-9/10 flex flex-col justify-center md:flex-row gap-10">
                        <div className=" w-1/2">
                            <span className='w-fit px-5 py-2.5 bg-[#CEFD94] uppercase text-center font-black rounded-full my-5'>
                                Our process
                            </span>
                            <h2 className=' text-4xl font-black my-5'>
                                Here’s how we operate
                            </h2>
                            <p className=' text-xl'>
                                Our Google Ads management team will need access to your account for an audit. This audit takes about a week, and we’ll provide you with a detailed report. Afterward, we’ll schedule a session to walk you through our findings and recommendations.
                            </p>
                            <Link to={"/get-started-with-tuff"}>
                                <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                    Get Started with an Audit
                                </button>
                            </Link>
                        </div>
                        <div className=" w-1/2 text-3xl">
                            <div className=" my-5">
                                <span className=' text-[#0A91AB] font-black'>
                                    Step 1:
                                </span>
                                <strong>
                                    Begin Account Audit
                                </strong>
                                <p className=' my-5 text-xl'>
                                    Let’s dive into your Google Ads account with a full audit. We’ll analyze everything, provide a detailed report, and discuss our findings and recommendations in a dedicated session.
                                </p>
                            </div>
                            <div className=" my-5">
                                <span className=' text-[#0A91AB] font-black'>
                                    Step 2:
                                </span>
                                <strong>
                                    Define the Strategy
                                </strong>
                                <p className=' my-5 text-xl'>
                                    Based on our audit, we’ll propose a transparent, flat-rate plan for a focused 3-month project. Expect comprehensive improvements aimed at increasing traffic, impressions, and conversions.
                                </p>
                            </div>
                            <div className=" my-5">
                                <span className=' text-[#0A91AB] font-black'>
                                    Step 3:
                                </span>
                                <strong>
                                    Implement and Scale
                                </strong>
                                <p className=' my-5 text-xl'>
                                    Once agreed, we’ll implement the strategic improvements collaboratively. Our services, starting at $5,000/month, are designed to scale and adapt to your growing business needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=" w-full flex flex-col justify-start items-center googleadsbg text-white py-20 gap-5">
                    <h1 className=' w-2/3 font-black text-5xl'>
                        Want to see a sample Google Ads audit?
                    </h1>
                    <p className="text-xl w-3/4 text-center">
                        If you’re interested in getting a Google Ads audit from Tuff but want more information before reaching out, you can check out a sample of a recent audit to see what’s included and what to expect.
                    </p>
                    <p className="font-black text-xl">
                        Just enter your email below, and we’ll send you a sample Google Ads audit.
                    </p>
                    <div className="w-full md:w-1/2 p-12 glassbg border border-[rgb(255_255_255_/12%)] gap-5 flex flex-col">
                        <strong>
                            Email•
                        </strong>
                        <input className=' p-2.5 bg-white text-black' placeholder='email@.com' type="text" name="" id="" />
                        <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                            Email me an Audit
                        </button>
                    </div>
                    <p className="text-xl w-3/5 text-center">
                        Don’t worry, we won’t spam your inbox with sales attempts or drip campaigns. If you like what you see, feel free to reach out to us, and we can start an audit specifically for you.
                    </p>
                </div>
            </section>

            <section>
                <div className="w-full flex justify-center items-center py-20">
                    <div className="w-9/10">
                        <h1 className=' font-black text-5xl my-5'>
                            How we work together
                        </h1>
                        <p className=" text-xl w-2/3">
                            We’ve witnessed too many accounts just cruising on autopilot, wasting money on irrelevant terms that don’t really make a difference to the business. That’s why we’ve taken a different approach to digital marketing. When you partner with Tuff, here’s what you can count on:
                        </p>
                        <div className="flex flex-col lg:flex-row w-full my-10 gap-20 justify-center">
                            <div className="w-full  lg:w-1/4">
                                <img src={img3} alt="" />
                                <h3 className=' font-black text-2xl'>
                                    Expert Talent
                                </h3>
                                <p className=' text-xl'>
                                    Our performance media managers have an average of 10 years of experience – we’re experts at running Google ads.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/4">
                                <img src={img4} alt="" />
                                <h3 className=' font-black text-2xl'>
                                    Real-Time Reporting
                                </h3>
                                <p className=' text-xl'>
                                    With Looker, we create a dashboard to keep you updated on how your Google Ads campaigns are performing, so you’re always in the know.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/4">
                                <img src={img5} alt="" />
                                <h3 className=' font-black text-2xl'>
                                    Direct Access via Slack
                                </h3>
                                <p className=' text-xl'>
                                    You’ll get direct access to us on Slack, plus we’ll have bi-weekly meetings and monthly retrospectives, making us feel like an extension of your team.
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
                <div className="w-full flex justify-center items-center my-10">
                    <div className="w-9/10 flex flex-col justify-start items-center gap-5">
                        <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                            KNOWLEDGE BASE
                        </span>
                        <h2 className=' text-5xl font-black'>
                            RESOURCES
                        </h2>
                        <div className=" w-full flex justify-center items-center gap-5 flex-wrap">
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 min-h-[700px] sm:w-96">
                                <img className=' my-4' src={img6} alt="" />
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
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 min-h-[700px] sm:w-96">
                                <img className=' my-4' src={img7} alt="" />
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
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 min-h-[700px] sm:w-96">
                                <img className=' my-4' src={img8} alt="" />
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
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 min-h-[700px] sm:w-96">
                                <img className=' my-4' src={img9} alt="" />
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
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 min-h-[700px] sm:w-96">
                                <img className=' my-4' src={img10} alt="" />
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
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 min-h-[700px] sm:w-96">
                                <img className=' my-4' src={img11} alt="" />
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
                <div className=" w-full flex flex-col justify-center items-center">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-center text-[#0C2233] ">
                        FAQs
                    </h2>
                    <div className="w-full md:w-2/3">
                        <Faq faq={faqs} />
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full  homeImg3 flex items-center justify-center p-20 md:px-19">
                    <div className="w-[90%] md:w-full p-2.5 bg-[#5A2AFF] flex flex-col justify-center items-center text-center px-4">
                        <h2 className="text-[30px] sm:text-[32px] md:text-[42px] font-semibold text-[#FFFEFB] w-2/3">
                            Ready to grow?
                        </h2>
                        <p className="w-2/3 text-[18px] sm:text-[20px] md:text-[24px] font-medium mt-3 text-[#FFFEFB]">
                            Let’s chat briefly and get the ball rolling on the audit.
                        </p>
                        <Link to="/get-started-with-tuff">
                            <button className="text-[#0C2233] cursor-pointer text-[18px] md:text-[22px] font-bold mt-6 p-4 bg-[#ceff2a] px-8 rounded-[2px] tilt-zoom">
                                Book a strategy call
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
