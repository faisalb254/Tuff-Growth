import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import img1 from "../assets/startupimg1.png"
import img2 from "../assets/startupimg2.png"
import img3 from "../assets/startupimg3.png"
import brad from "../assets/bradvideo.png"
import rikin from "../assets/rikinvideo.png"
import olivia from "../assets/oliviavideo.png"
import img4 from "../assets/startupimg4.svg"
import position from "../assets/position.svg"
import user from "../assets/orange-user.svg"
import dollar from "../assets/dollar.svg"
import userbox from "../assets/userboxed.svg"
import message from "../assets/messaging.svg"
import orangelist from "../assets/orange-list.svg"
import images from "../assets/images.svg"
import greenat from "../assets/green-at.svg"
import chart from "../assets/chart.svg"
import analytic from "../assets/analytic.svg"
import plus from "../assets/plus-circle.svg"
import target from "../assets/target.svg"
import like from "../assets/thumbsup.svg"
import messenger from "../assets/messenger.svg"
import rocket from "../assets/rocket.svg"
import flask from "../assets/flask.svg"
import smile from "../assets/smile.svg"
import fire from "../assets/fire.svg"
import thnks from "../assets/THNKS-logo.svg"
import soona from "../assets/soona-logo.svg"
import stars from "../assets/green-star.svg"
import antica from "../assets/antica-logo.svg"

import { BiChevronRight } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";

import { Link } from 'react-router-dom'

export default function StartUp() {
    const box = {
        heading: "Use Tuff to accelerate your compounding growth curve.",
        para: ["Before we even dive into sending you a proposal, we’re going to immerse ourselves in your accounts and resurface with all the right questions. We want to take the time to truly understand your business, your goals, and your brand. So, when our proposal lands on your desk, it’s going to be brimming with fantastic ideas."],
        button: "Book a intro call"
    }
    const [index, setIndex] = useState(0)
    const paragraphs = [
        {
            id: 0,
            para: [
                {
                    id: 1,
                    icons: userbox,
                    heading: "Persona Development",
                    p: "Understand specific audiences, where they spend their time and what they care about the most.",
                },
                {
                    id: 2,
                    icons: message,
                    heading: "Strategic Messaging",
                    p: "We create a clear, compelling positioning strategy for your startup that differentiates your product in the market and captures your unique value proposition.",
                },
            ]
        },
        {
            id: 1,
            para: [
                {
                    id: 1,
                    icons: orangelist,
                    heading: "Media Strategy & Plan",
                    p: "We plan, launch, manage, and optimize high-impact paid campaigns that drive conversions and expand your customer base.",
                },
                {
                    id: 2,
                    icons: images,
                    heading: "Performance Creative",
                    p: "We design visually compelling creative assets that encapsulate your brand and resonate with your audience.",
                },
            ]
        },
        {
            id: 2,
            para: [
                {
                    id: 1,
                    icons: chart,
                    heading: "User Flow",
                    p: "Understand specific audiences, where they spend their time and what they care about the most.",
                },
                {
                    id: 2,
                    icons: greenat,
                    heading: "Email Marketing",
                    p: "We design, write, and execute powerful email campaigns that keep user engaged and prompt them to take desired actions.",
                },
                {
                    id: 3,
                    icons: analytic,
                    heading: "Full Funnel Tracking and Analytics",
                    p: "We use data to understand the entire funnel and leverage these insights to optimize each tactic and campaign.",
                },
            ]
        },
    ]
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>

            <section>
                <div className="w-full min-h-[570px] h-auto lightbg pb-7.5">
                    <div className="w-full h-full flex flex-col md:flex-row lg:pt-45">
                        <div className="w-full md:w-1/2 h-full flex flex-col  px-15 text-black">
                            <h1 className='text-4xl lg:text-6xl font-black w-full my-7.5'>
                                Unlock the performance of your startup and team
                            </h1>
                            <p className=' text-xl my-7.5'>
                                We help startups grow with less hassle, risk, and cost by implementing high-impact strategies, teams, and campaigns to quickly drive results and key learnings. Once we’ve laid out a clear plan and testing framework, we’ll collaborate directly with you to drive meaningful outcomes.
                            </p>
                            <button className='w-full md:w-1/2 my-7.5 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                Book an intro call
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2 flex justify-center items-center">
                            <img src={img1} alt="" className='w-full h-auto' />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="mediaLine1 px-18 py-24 w-full">
                    <div className="flex flex-col justify-start items-center gap-4 text-white">
                        <div className="h-[45px] w-fit px-4 bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                            TESTIMONIALS
                        </div>
                        <h1 className=' text-5xl font-black'>
                            Grow your startup without the guesswork.
                        </h1>
                        <p className='text-xl'>Get the knowledge of top experts in growth strategy and execution.</p>
                    </div>
                    <div className="mt-20 w-full flex flex-col lg:justify-center lg:flex-row gap-20 text-white">
                        <div className=" w-full lg:w-1/3">
                            <div className="py-5 flex flex-col lg:flex-row gap-5 border-b-3 border-[rgb(255_255_255_/12%)]">
                                <img src={thnks} alt="" className='w-1/2 lg:w-auto'/>
                                <img src={stars} alt="" className='w-1/2 lg:w-auto'/>
                            </div>
                            <p className="mt-5 w-full text-lg">
                                “I view our partnership with Tuff as more like an extension of my team. <span className=' font-black'>We strategize together, ask tough questions, examine the results, optimize – and it just keeps getting better. Exactly what I was looking for.”</span>
                            </p>
                            <div className="flex gap-2 mt-4">
                                <div className="w-18">
                                    <img className=' w-16 h-16' src={brad} alt="" />
                                </div>
                                <div className="w-2/3 flex flex-col justify-center">
                                    <p className="font-black">
                                        Brad Veach
                                    </p>
                                    <p className="">
                                        VP of Marketing, Thnks
                                    </p>
                                    <Link className=' text-[#FF6A39]'>Watch client story</Link>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full lg:w-1/3">
                            <div className="py-5 flex flex-col lg:flex-row gap-5 border-b-3 border-[rgb(255_255_255_/12%)]">
                                <img src={soona} alt="" className='w-1/2 lg:w-auto'/>
                                <img src={stars} alt="" className='w-1/2 lg:w-auto'/>
                            </div>
                            <p className="mt-5 w-full text-lg">
                                <span className=' font-black'>“What’s great about Tuff is that we’ve been guided by them to seek bolder results.</span> Tuff has been great about being graceful with feedback while also making sure the insight that inspired an asset in the first place is still rooted in the data.”
                            </p>
                            <div className="flex gap-2 mt-4">
                                <div className="w-18">
                                    <img className=' w-16 h-16' src={rikin} alt="" />
                                </div>
                                <div className="w-2/3 flex flex-col justify-center">
                                    <p className="font-black">
                                        Rikin Diwan
                                    </p>
                                    <p className="">
                                        Chief Growth Officer, soona
                                    </p>
                                    <Link className=' text-[#FF6A39]'>Watch client story</Link>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full lg:w-1/3">
                            <div className="py-5 flex flex-col lg:flex-row gap-5 border-b-3 border-[rgb(255_255_255_/12%)]">
                                <img className='w-1/3 lg:w-auto lg:h-[33px]' src={antica} alt="" />
                                <img src={stars} alt="" className='w-1/2 lg:w-auto'/>
                            </div>
                            <p className="mt-5 w-full text-lg">
                                “I felt like Tuff really understood who our brand was, who we were trying to talk to, and what made us special. <span className=' font-black'>I’ve worked with partners where it took a couple months to ramp up or felt like there was a lot of back and forth to get started and Tuff has just hit the ground running.”</span>
                            </p>
                            <div className="flex gap-2 mt-4">
                                <div className="w-18">
                                    <img className=' w-16 h-16' src={olivia} alt="" />
                                </div>
                                <div className="w-2/3 flex flex-col justify-center">
                                    <p className="font-black">
                                        Olivia Hadreas
                                    </p>
                                    <p className="">
                                        Marketing Manager, Antica Farmacista
                                    </p>
                                    <Link className=' text-[#FF6A39]'>Watch client story</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full min-h-[670px] h-auto flex flex-col items-center justify-start mt-30">
                    <h1 className=' text-4xl font-black mb-10 text-center'>
                        What we bring to the table
                    </h1>
                    <div className=" flex flex-col lg:flex-row w-full h-full px-9 lg:px-18">
                        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:items-start h-full">
                            <div className={`${index === 0 ? "border-[#0A91AB]" : "border-white"} border-l-4 pl-4 mb-12 hover:cursor-pointer`} onClick={() => { setIndex(0) }}>
                                <span className=' flex items-center'>
                                    <img src={position} alt="" />
                                    <p className=' font-black text-2xl md:text-4xl'>Positioning</p>
                                </span>
                                <div className=" flex text-xs">
                                    <div className="flex items-center">
                                        <span className='mr-2 text-[#0A91AB]'><IoMdCheckmark /></span>
                                        <span className=' font-black mr-3'>Persona Development</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className='mr-2 text-[#0A91AB]'><IoMdCheckmark /></span>
                                        <span className=' font-black mr-3'>Strategic Messaging</span>
                                    </div>
                                </div>
                            </div>
                            <div className={`${index === 1 ? "border-[#FF6A39]" : "border-white"} border-l-4 pl-4 mb-12 hover:cursor-pointer`} onClick={() => { setIndex(1) }}>
                                <span className=' flex items-center'>
                                    <img src={user} alt="" />
                                    <p className=' font-black text-2xl md:text-4xl'>Acquisition</p>
                                </span>
                                <div className=" flex text-xs">
                                    <div className="flex items-center">
                                        <span className='mr-2 text-[#FF6A39]'><IoMdCheckmark /></span>
                                        <span className=' font-black mr-3'>Media Strategy & Plan</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className='mr-2 text-[#FF6A39]'><IoMdCheckmark /></span>
                                        <span className=' font-black mr-3'>Performance Creative</span>
                                    </div>
                                </div>
                            </div>
                            <div className={`${index === 2 ? "border-[#76B39D]" : "border-white"} border-l-4 pl-4 mb-12 hover:cursor-pointer`} onClick={() => { setIndex(2) }}>
                                <span className=' flex items-center'>
                                    <img src={dollar} alt="" />
                                    <p className=' font-black text-2xl md:text-4xl'>Conversion</p>
                                </span>
                                <div className=" flex text-xs">
                                    <div className="flex items-center">
                                        <span className='mr-2 text-[#76B39D]'><IoMdCheckmark /></span>
                                        <span className=' font-black mr-3'>User Flow</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className='mr-2 text-[#76B39D]'><IoMdCheckmark /></span>
                                        <span className=' font-black mr-3'>Email Marketing</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className='mr-2 text-[#76B39D]'><IoMdCheckmark /></span>
                                        <span className=' font-black mr-3'>Full Funnel Tracking and Analytics</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
                            <div className="w-full md:w-8/10 min-h-[500px] h-auto border-2 border-[rgb(0_0_0/12%)] p-6 md:p-12">
                                <div className=" mb-24">
                                    {
                                        paragraphs[index].para.map((item, idx) => (
                                            <div key={idx} className="">
                                                <div className=" text-2xl font-black flex">
                                                    <img src={item.icons} alt="" className=' mr-2.5' />
                                                    <h1>{item.heading}</h1>
                                                </div>
                                                <p className=' text-xl my-4'>
                                                    {item.p}
                                                </p>
                                            </div>

                                        ))
                                    }
                                </div>
                                <button className=' w-full py-2 cursor-pointer px-6 bg-[#FF6A39] text-center font-black text-xl'>
                                    Book an intro call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center flex-col md:py-24 md:px-18">
                    <div className="w-15 h-auto flex justify-center">
                        <img className="" src={plus} alt="" />
                    </div>
                    <h1 className=' w-full md:w-1/2 text-4xl font-black text-center'>
                        Plus, we know all the things that keep you (and other founders) up at night.
                    </h1>
                    <div className="w-full">
                        <div className="flex flex-col lg:flex-row justify-center items-center my-5">
                            <div className="border border-[rgb(0_0_0/12%)] w-9/10 md:w-[400px] h-30 p-8 flex items-center">
                                <p className='2/3 font-bold text-xl'>
                                    How to convert more visitors into customers
                                </p>
                                <img className='w-15 pl-2.5' src={target} alt="" />
                            </div>
                            <div className="border border-[rgb(0_0_0/12%)] w-9/10 md:w-[400px] h-30 mx-5 mt-5 lg:mt-0 p-8 flex items-center">
                                <p className='1/2 font-bold text-xl'>
                                    How to convince investors
                                </p>
                                <img className='w-15 pl-2.5' src={like} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center my-5">
                            <div className="border border-[rgb(0_0_0/12%)] w-9/10 md:w-[400px] h-30 p-8 flex items-center">
                                <p className='2/3 font-bold text-xl'>
                                    Nailing your value props and positioning
                                </p>
                                <img className='w-15 pl-2.5' src={messenger} alt="" />
                            </div>
                            <div className="border border-[rgb(0_0_0/12%)] w-9/10 md:w-[400px] h-30 mx-5 mt-5 lg:mt-0 p-8 flex items-center">
                                <p className='2/3 font-bold text-xl'>
                                    Hiring your first in-house marketer
                                </p>
                                <img className='w-15 pl-2.5' src={rocket} alt="" />
                            </div>
                            <div className="border border-[rgb(0_0_0/12%)] w-9/10 md:w-[400px] h-30 mt-5 lg:mt-0 p-8 flex">
                                <p className='2/3 font-bold text-xl'>
                                    Testing efficiently on new channels
                                </p>
                                <img className='w-15 pl-2.5' src={flask} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-center items-center my-5">
                            <div className="border border-[rgb(0_0_0/12%)] w-9/10 md:w-[400px] h-30 p-8 flex items-center">
                                <p className='2/3 font-bold text-xl'>
                                    Building a better product
                                </p>
                                <img className='w-15 pl-2.5' src={smile} alt="" />
                            </div>
                            <div className="border border-[rgb(0_0_0/12%)] w-9/10 md:w-[400px] h-30 mx-5 mt-5 lg:mt-0 p-8 flex items-center">
                                <p className='1/2 font-bold text-xl'>
                                    How to extend runway and reduce cash burn
                                </p>
                                <img className='w-15 pl-2.5' src={fire} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg-[#0c2233] py-36.5 px-9 md:px-18 text-white">
                    <div className="flex flex-col lg:flex-row w-full mb-24">
                        <div className="w-full lg:w-1/2">
                            <h1 className='text-3xl md:text-5xl font-black'>
                                A startup’s growth strategy should be in a league of its own.
                            </h1>
                            <p className=' text-xl my-4'>
                                We’ll bring in a full-stack growth team that will work seamlessly as an extension of your in-house marketing team. This means we’ll be doing things like quick message testing, crafting incredibly effective web pages, managing media, optimizing ads, developing content, and A/B testing.
                            </p>
                            <p className=' text-xl my-4'>
                                We’re all set to seamlessly join forces with your existing marketing team to support your overarching strategy and handle all the nitty-gritty execution.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row w-full mt-12">
                        <div className="w-full lg:w-1/2">
                            <img src={img3} alt="" />
                        </div>
                        <div className="w-full lg:w-1/2 pl-5">
                            <h1 className='text-3xl md:text-5xl font-black'>
                                Work with a team of strategic operators
                            </h1>
                            <p className=' text-xl my-4'>
                                You’re not just looking for individual specialists; you need a team that can link the pieces together and propel your growth to new heights. Each member of our team is a skilled pro with a proven history of real-world success. One thing that sets us apart is our commitment to open and real-time communication. We’re natural collaborators, and our communication toolbox is key to our successful teamwork. We have shared Slack channels with every client and rely on various resources like weekly calls, dashboards, and shared documents, monthly and quarterly planning all to ensure we’re always working in harmony and on the same page.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-12 px-9 md:px-18 flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 ">
                        <h1 className='font-black text-3xl md:text-5xl my-2.5'>
                            Simple, straightforward startup pricing for your growth and marketing needs.
                        </h1>
                        <p className=' text-xl my-2.5'>
                            If you want results from a growth team but lack the time internally, we’ve got your startup covered. Whether we’re trying out one channel or helping with various tactics like ad creative, landing pages, and content, we’re ready to be part of your team. And we’ll give you the data, evidence, and reports you need to impress investors and the board.
                        </p>
                        <span className='flex text-xl mt-10 font-black tilt-zoom hover:text-[#FF6A39]'>
                            Check out our pricing model for startups
                            <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                        </span>
                    </div>
                    <div className="w-full` md:w-1/2 ">
                        <img src={img4} alt="" />
                    </div>
                </div>
            </section>
            <FinalSection text={box} />
            <Footer />
        </>

    )
}
