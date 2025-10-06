import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import FinalSection from '../components/FinalSection'
import img1 from '../assets/b2bimg1.png'
import img2 from '../assets/b2bimg2.png'
import img3 from '../assets/b2bimg3.png'
import img4 from '../assets/b2bimg4.png'
import seo from '../assets/paidsearch.svg'
import cro from '../assets/UserEx.svg'
import track from '../assets/track.svg'
import share from '../assets/share.svg'
import pic from '../assets/pic.svg'
import report from '../assets/report.svg'
import email from '../assets/email.svg'
import cursor from '../assets/cursor.svg'
import multiverse from '../assets/multiverse.svg'
import happy from '../assets/happy.svg'
import stars from '../assets/stars.svg'
import katie from '../assets/katieicon.png'
import jason from '../assets/jasonicon.png'
import { BiChevronRight } from "react-icons/bi";
import { FaLink } from "react-icons/fa";
import signal1 from '../assets/signal1.png'
import signal2 from '../assets/signal2.png'
import { Link } from 'react-router-dom'

import aarp from "../assets/aarp.svg";
// import multiverse from "../assets/multiverse.svg";
import punchbow from "../assets/punchbow.svg";
import soona from "../assets/soona.svg";
import teachable from "../assets/teachable.svg";
import thnks from "../assets/thnks.svg";



export default function B2B() {
    const goals = [
        {
            img: cursor,
            title: "Pay Per Click",
            text: "Prioritizing high-impact PPC campaigns to drive quick wins then scale what works.",
            link: "ppc"
        },
        {
            img: share,
            title: "Social Advertising",
            text: "Campaigns build just for your audience that get clicks and ultimately revenue.",
            link: "social-advertising"
        },
        {
            img: seo,
            title: "Search Engine Optimization",
            text: "Ensuring you show up where it matters most.",
            link: "seo"
        },
        {
            img: track,
            title: "Tracking and Analytics ",
            text: "Making strategic decisions based on hard numbers.",
            link: "marketing-attribution"
        },
        {
            img: report,
            title: "Content Marketing",
            text: "Ranking higher and winning over your audience with a rock solid content strategy.",
            link: "content-strategy"
        },
        {
            img: email,
            title: "Email Marketing",
            text: "Ranking higher and winning over your audience with a rock solid content strategy.",
            link: "content-strategy"
        },
        {
            img: cro,
            title: "Conversion Rate Optimization",
            text: "Using data to improve conversion.",
            link: "cro"
        },
        {
            img: pic,
            title: "Ad Creative",
            text: "Creating sticky, scroll-stopping creative that smoothes their path to conversion.",
            link: "creative"
        },
    ]

    const box = {
        heading: "We’d love to work with you.",
        para: ["We partner with small, dedicated teams to build intentional and sustainable growth. Let’s level up your business with a digital marketing agency that delivers results."],
        button: "Book a strategy call"
    }
    const faqs = [
        {
            question: "What is a B2B digital marketing agency?",
            answer:
                [
                    {
                        para: "A B2B digital marketing agency is an organization that specializes in demand generation and account based marketing principles to drive revenue for organizations that sell to other businesses. A B2B digital marketing agency should have experience in paid social, paid search, conversion rate optimization, content marketing, tracking, ad creative, and more. Because B2B sales typically take longer, most organizations specializing in B2B digital marketing also have comprehensive measurement solutions to track and report the impact of their efforts.",
                        type: "para"
                    },

                ],
        },
        {
            question: "How much does B2B advertising cost?",
            answer:
                [
                    {
                        para: "There are many factors that impact B2B advertising: the industry you are advertising to, the channels you select, and the reachability of your target audience. Having a well defined ideal client profile (ICP) can help limit ad waste and ensure you are reaching and engaging the right individuals. However, the more specific you are in your advertising efforts, the cost to reach them in most instances increases. A primary example could be if you are trying to reach a seniority level of director or above: adding these filters on top of existing targeting could decrease your audience size and increase your ad costs. Typical programmatic B2B marketing has a cost per mille (CPM) between $10 – $35, and most ads on LinkedIn have a CPM of $75 – $200, depending on a variety of factors.",
                        type: "para"
                    },
                ],
        },
        {
            question: "How does a B2B agency differ from other marketing agencies?",
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
                        para: "Strategy Development: Based on the assessment, our team will formulate a comprehensive growth marketing strategy. This strategy outlines the overarching plan to achieve your goals, including specific tactics, channels, and timelines. The strategy may encompass various growth focuses, including content marketing, SEO, email marketing, paid media, and performance creative.",
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
                        para: "Reporting and Communication: In addition to integrated Slack channels and weekly meetings, we provide regular reporting and updates on campaign performance, allowing you to track progress and understand the return on their marketing investment. We also work together on monthly recaps and quarterly planning sessions.",
                        type: "list"
                    },
                    {
                        para: "Simply speaking, as a growth marketing agency, we’re a strategic partner that leverages a combination of expertise, data analysis, and ongoing optimization to help businesses expand their reach, acquire new customers, and increase revenue. Our focus is on achieving measurable, sustainable growth for their clients.",
                        type: "para"
                    },

                ]
        },
        {
            question: "Does a B2B agency offer demand generation services? ",
            answer:
                [
                    {
                        para: "Most B2B digital marketing agencies specialize in a mix of account based marketing and demand generation strategies. These strategies specialize in creating awareness of a particular business problem that an organization is trying to solve, and how their product or services can help resolve those pains. Demand generation is a full-funnel marketing approach that will lean on a mix of content marketing, awareness, use-case creation, and nurturing across various channels to engage a prospect from awareness through the decision and purchase stage of their buying journey.",
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
                <div className="VideoLine w-full flex flex-col justify-center items-center pt-10 md:pt-40 pb-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <span className=' px-5 py-2.5 bg-[#CEFD94] font-black text-center sm:text-xs rounded-full text-black'>
                                Full-Funnel B2B Digital Marketing Agency
                            </span>
                            <h1 className=' text-6xl font-black my-5'>
                                B2B Marketing That Drives Revenue
                            </h1>
                            <p className=' text-xl my-5'>
                                Generating leads that don’t turn into revenue? Struggling to perfect that hand off from marketing so sales? Want to implement an account based marketing strategy, but don’t know where to start?
                            </p>
                            <p className=' text-xl my-5'>
                                Good news: Tuff has been the go-to B2B digital marketing agency for dozens of scaleups and enterprise businesses over the last five years, generating inbound strategies that drive revenue, pipeline, and growth across the full-funnel.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                                Book a strategy call
                            </button>
                        </div>
                        <div className=" w-full md:w-1/3">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div
                        className="hidden lg:block w-full h-[120px]  overflow-hidden relative  top-20"
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
                <div className=" w-full flex justify-center items-center py-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10 ">
                        <div className="w-full md:w-1/2  ">
                            <h1 className='text-4xl font-black my-5'>
                                We’ll help you build an inbound strategy that fuels growth with a roadmap to grow your revenue.
                            </h1>
                            <p className=' text-xl my-5'>
                                B2B marketing is a complex puzzle of intricate, moving parts: demand signals, account orchestration, product initiatives, and more. You need more than an agency who executes awareness-based media: you need a partner who can sort through the pieces and assemble an interconnected, scalable strategy that prioritizes growth above all else.
                            </p>
                            {/* #FF6A39 */}
                            <span className=' flex text-xl font-black hover:text-[#FF6A39] tilt-zoom'>
                                Tuff is different - take a deeper look at how we like to work
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
                                    Limited visibility into results, slow communication, slow turnaround times, disparate creative and message strategies, media without measurement.
                                </p>
                            </div>
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 md:w-96 ">
                                <img className=' w-12.5 h-12.5' src={signal2} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    After Tuff
                                </h2>
                                <p className=' text-xl my-4 text-[#0c2233]'>
                                    Full-funnel measurement, frequent communication, full-service creative and paid support, holistic creative and paid strategies, measurement focused on business-KPIs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center MediaProcessLine py-20">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-start gap-10 text-white">
                        <div className=" w-full lg:w-1/2">
                            <div className="flex flex-col md:flex-row gap-5 py-5 border-b-2 border-[rgb(255_255_255_/_12%)]">
                                <img src={multiverse} alt="" />
                                <img src={stars} alt="" />
                            </div>
                            <p className=' text-2xl my-5'>
                                Tuff has truly been a strategic partner for Multiverse as we’ve built and scaled our B2B marketing across both our US & UK markets. The Tuff team’s ability to pivot and execute quickly has been a game-changer for us, enabling us to stay nimble and quickly adapt to feedback from the market. Tuff takes the time to understand our unique business challenges and key objectives, and their expertise in both leveraging data to achieve our KPIs and implementing testing and learning methodologies has been instrumental in driving our growth. <strong>Tuff provides invaluable support in executing across key growth marketing channels, and our partnership has allowed us to consistently scale & exceed our quarterly targets.</strong>
                            </p>
                            <div className="flex my-2.5 items-center gap-5">
                                <img src={katie} alt="" className='w-1/10' />
                                <div className="">
                                    <p className=' text-sm'>Katie Swoap McLane</p>
                                    <p className=' text-sm'>Global Director of Growth @ Multiverse</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-col md:flex-row gap-5 py-5 border-b-2 border-[rgb(255_255_255_/_12%)]">
                                <img src={happy} alt="" className=' h-9' />
                                <img src={stars} alt="" />
                            </div>
                            <p className=' text-2xl my-5'>
                                “Partnering with Tuff has been a game-changer for goHappy. From day one, they’ve felt like a true extension of our marketing team—proactive, collaborative, and fully invested in our success. <strong>They’ve earned our trust by constantly bringing fresh ideas to the table while staying laser-focused on the metrics that matter. But above all, they’re just plain fun to work with.”</strong>
                            </p>
                            <div className="flex my-2.5 items-center gap-5">
                                <img src={jason} alt="" className='w-1/10' />
                                <div className="">
                                    <p className=' text-sm'>Jason Deitz</p>
                                    <p className=' text-sm'>CMO @ goHappy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center py-10">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-black ">
                            <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Our Approach
                            </span>
                            <h1 className=' text-4xl font-black my-5'>
                                Your Plug-in B2B Growth Team Plan: Activate, Measure, Repeat.
                            </h1>
                            <p className=' text-xl my-5'>
                                You don’t need a 90-page slide deck to see if your B2B digital marketing agency is doing their job right. We keep it transparent: We plan based on aligned goals, activate on a 90-day growth strategy, and measure along the way to gauge effectiveness. At the end of the day, we’ll share exactly what worked, what didn’t, and why. So when we kick off our next plan, we’re iterating and growing with you as an extension of your team.
                            </p>
                            <span className=' flex text-xl font-black hover:text-[#FF6A39] tilt-zoom'>
                                Learn more about our process
                                <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                            </span>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2">
                            <img src={img3} alt="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className=' px-5 py-2.5 bg-[#CEFD94] my-5 font-black rounded-full text-black'>
                                Our Framework
                            </span>
                            <h2 className=' text-4xl my-5 font-black'>
                                This is the five-step growth marketing framework we use when approaching growth for any business.
                            </h2>
                            <p className=' text-xl my-5'>
                                Using this framework, we’ll help prioritize tactics based on return.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <div className=" mx-2">
                                    <Link to={"/ppc"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Paid Search
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/social-advertising"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Social Ads
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/creative"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Ad Creative
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/strategic-messaging"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Strategic Messaging
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/content-strategy"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Content Strategy
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/seo"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Technical SEO
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/marketing-attribution"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Data & Analytics
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/videomarketing"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Video Marketing
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/display"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Display Ads
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/youtube-ad-agency"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            YouTube Ads
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Email Marketing
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/linkedin-ad-agency"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            LinkedIn Ads
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/tiktok-ad-agency"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Tik Tok Ads
                                        </span>
                                    </Link>
                                </div>
                                <div className=" mx-2">
                                    <Link to={"/cro"}>
                                        <span className='flex gap-2 bg-[#FF6A39] py-1 px-2 font-black'>
                                            <FaLink />
                                            Conversion Rate Optimization
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2">
                            <img src={img4} alt="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className=' px-5 py-2.5 bg-[#CEFD94] my-5 font-black rounded-full text-black'>
                                B2B Digital Marketing Experts
                            </span>
                            <h2 className=' text-4xl my-5 font-black'>
                                Full-Funnel B2B Marketing Expertise
                            </h2>
                            <p className=' text-xl my-5'>
                                Taking principles from growth marketing strategies and account based marketing strategies, our team of strategists and channel-experts develop performance and brand creative, websites, paid media strategies, and content that drives revenue. We have full-stack skills and technical expertise, and we’re not afraid to get in the weeds. We’ll help you develop a strategy that prioritizes outcomes: not tactics.
                            </p>
                            <span className=' flex text-xl font-black hover:text-[#FF6A39] tilt-zoom'>
                                Learn more about our services
                                <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                            </span>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col justify-center items-center py-20">
                    <h2 className=' text-5xl font-black'>
                        You’ve got growth goals? We’ll build the roadmap.
                    </h2>
                    <p className=' text-xl text-center w-3/4'>
                        Hyper-growth businesses need a data-driven vision. More importantly, they need a clear, action-packed game plan. We partner with you to strategize, prioritize, link up cross-channel insights, and, ultimately, grow.
                    </p>
                    <div className="flex flex-wrap gap-10 my-10 justify-center items-center">
                        {
                            goals.map((goal, idx) => (
                                <div className="w-full md:w-1/5 border border-[rgb(0_0_0_/_12%)] p-7.5">
                                    <img src={goal.img} alt="" />
                                    <h3 className=' font-black text-xl'>
                                        {goal.title}
                                    </h3>
                                    <p className=' text-lg my-5'>
                                        {goal.text}
                                    </p>
                                    <Link to={`/${goal.link}`}>
                                        <span className=' flex text-xl font-black hover:text-[#FF6A39] tilt-zoom'>
                                            Learn more
                                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                        </span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center flex-col">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-center text-[#0C2233] ">
                        B2B digital marketing agency FAQs
                    </h2>
                    <div className="w-full md:w-2/3">
                        <Faq faq={faqs} />
                    </div>
                </div>
            </section>
            <FinalSection text={box} />
            <Footer />
        </>
    )
}
