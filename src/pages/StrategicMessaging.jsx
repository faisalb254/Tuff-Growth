import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { BiChevronRight } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import curve from "../assets/blue-curve.png"
import laptop from "../assets/laptop.png"
import strat from "../assets/strategyimg.png"
import laptop2 from "../assets/stratlaptop.png"
import stratpic1 from "../assets/stratpic1.png"
import stratpic2 from "../assets/stratpic2.png"
import stratpic3 from "../assets/stratpic3.png"
import stratbg from "../assets/stratbg.png"
import tab from "../assets/strattablet.jpg"
import rewire from "../assets/rewire.svg"
import { Link } from 'react-router-dom'

export default function StrategicMessaging() {
    const box = {
        heading: "It’s never been easier to reach your target audience. It’s never been harder to stand out.",
        para: ["In the .2 seconds you have to make an impression…do you?"],
        button: "Book a strategy call"
    }
    const faqs = [
        {
            question: "Customer Persona Research",
            img: stratpic1,
            answer:
                "How do we ensure your ad dollars go to those most likely to convert?",
            list: ["Persona development analysis"]
        },
        {
            question: "Value Props",
            img: stratpic2,
            answer:
                "What are your distinct value props? How can we deliver maximum value with a minimal character count?",
            list: ["Category and competitive positioning analysis", "Visual identity review"]
        },
        {
            question: "Messaging and Positioning",
            img: stratpic3,
            answer:
                "How is your company and website experienced by users? How can we reduce friction?",
            list: ["Wireframes and user flows audit", "Site optimization score"]
        }
    ];
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const [FaqImg, setImg] = useState(stratpic1);
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

            <section>
                <div className="w-full min-h-[90vh] GeoBg">
                    <div className="w-full h-full flex flex-col md:flex-row  pt-45">

                        {/* Left side (text) */}
                        <div className="w-full md:w-1/2 h-full flex flex-col pl-6 md:pl-15 text-white text-center md:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black w-full">
                                The unsung growth hero: messaging.
                            </h1>
                            <p className="my-4 text-base sm:text-lg">
                                We take a full-funnel, customer-first approach to messaging. That means your target audience receives a consistent and intentional experience, you achieve better creative output, and all together we see more consistency, smarter learnings, and maximum advocacy.
                            </p>
                            <button className="w-2/3 sm:w-1/3 py-3 sm:py-5 px-6 sm:px-8 text-lg sm:text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold mx-auto md:mx-0">
                                Let's talk
                            </button>
                        </div>

                        {/* Right side (images) */}
                        <div className="w-full md:w-1/2 flex justify-center items-center relative mt-8 md:mt-0">
                            <img src={curve} alt="" className="w-3/4 sm:w-2/3 h-auto relative" />
                            <img src={laptop} alt="" className="w-2/3 h-auto absolute" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="w-full min-h-[90vh] GeoBg">
                    <div className="w-full h-full flex pt-45">
                        <div className="w-1/2 h-full flex flex-col  pl-15 text-white">
                            <h1 className=' text-6xl font-black w-full'>
                                The unsung growth hero: messaging.
                            </h1>
                            <p className='my-4'>
                                We take a full-funnel, customer-first approach to messaging. That means your target audience receives a consistent and intentional experience, you achieve better creative output, and all together we see more consistency, smarter learnings, and maximum advocacy.
                            </p>
                            <button className='w-1/3 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                Let's talk
                            </button>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={curve} alt="" className='w-2/3 h-auto relative' />
                            <img src={laptop} alt="" className='w-1/2 h-auto absolute' />
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="w-full min-h-dvh flex flex-col justify-start items-center mt-10 px-4">
                <h1 className="font-black text-3xl sm:text-4xl md:text-5xl text-center">
                    Let’s go deep.
                </h1>

                <p className="w-full sm:w-3/4 md:w-1/2 text-center text-lg sm:text-xl my-6">
                    We’ve designed a repeatable process that ensures we’re rallying around the
                    same battle cry from the day we turn on campaigns.
                </p>

                <div className="w-full md:w-4/5 h-auto flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* FAQ Section */}
                    <div className="w-full md:w-1/2">
                        <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-center text-[#0C2233] mb-8">
                                FAQs
                            </h2>

                            <div>
                                {faqs.map((item, index) => {
                                    const isFirst = index === 0;

                                    return (
                                        <div
                                            key={index}
                                            className={`py-4 sm:py-5 md:py-6 ${isFirst ? "border-t border-black" : ""
                                                } border-b border-black`}
                                        >
                                            <div
                                                className="cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
                                                onClick={() => {
                                                    toggleFAQ(index);
                                                    setImg(item.img);
                                                }}
                                            >
                                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#0C2233]">
                                                    {item.question}
                                                </h3>
                                            </div>

                                            {openIndex === index && (
                                                <>
                                                    <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl my-5 text-gray-700">
                                                        {item.answer}
                                                    </p>
                                                    <ul>
                                                        {item.list.map((message, idx) => (
                                                            <li
                                                                className="flex text-base sm:text-lg md:text-xl items-center mb-2"
                                                                key={idx}
                                                            >
                                                                <span className="font-bold mr-2.5">
                                                                    <CiCircleCheck />
                                                                </span>
                                                                <span>{message}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center items-center relative">
                        <img
                            src={stratbg}
                            alt=""
                            className="w-2/3 sm:w-1/2 h-auto relative left-0 md:left-40"
                        />
                        <img
                            src={FaqImg}
                            alt=""
                            className="w-5/6 h-auto absolute"
                        />
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="w-full min-h-dvh flex flex-col justify-start items-center mt-10">
                    <h1 className=' font-black text-5xl'>Let’s go deep.</h1>
                    <p className=' w-1/2 text-center text-xl my-7.5'>We’ve designed a repeatable process that ensures we’re rallying around the same battle cry from the day we turn on campaigns.</p>
                    <div className="w-8/10 h-auto flex">
                        <div className="w-1/2">
                            <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10">
                                <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-center text-[#0C2233] mb-8">
                                    FAQs
                                </h2>
                                <div>
                                    {faqs.map((item, index) => {
                                        const isFirst = index === 0;
                                        const isLast = index === faqs.length - 1;

                                        return (
                                            <div
                                                key={index}
                                                className={`py-4 sm:py-5 md:py-6 ${isFirst ? "border-t border-black" : ""
                                                    } border-b border-black`}
                                            >
                                                <div
                                                    className="cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
                                                    onClick={() => {
                                                        toggleFAQ(index)
                                                        setImg(item.img)
                                                    }}
                                                >
                                                    <h3 className="text-base sm:text-lg md:text-[24px] lg:text-[28px] font-semibold text-[#0C2233]">
                                                        {item.question}
                                                    </h3>
                                                </div>
                                                {openIndex === index && (
                                                    <>
                                                        <p className="mt-3 sm:mt-4 text-xl my-5 text-gray-700  ">
                                                            {item.answer}
                                                        </p>
                                                        <ul>
                                                            {item.list.map((message, index) => (
                                                                <li className='flex text-xl items-center ' key={index}>
                                                                    <span className=' mb-3 font-bold mr-2.5'><CiCircleCheck /></span>
                                                                    <span>{message}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={stratbg} alt="" className='w-1/2 h-auto relative left-60' />
                            <img src={FaqImg} alt="" className='w-2/5 h-auto absolute' />
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="w-full h-[700px] md:h-[500px] flex justify-center items-center">
                    <div className="w-9/10 h-9/10 mediaLine1 -rotate-1 flex justify-center items-center">
                        <div className=" border border-white w-9/10 h-8/10 flex flex-col justify-center items-center text-white">
                            <h1 className=' text-5xl font-black'>The result:</h1>
                            <p className=' my-7.5 text-2xl text-center w-2/3'>Sharp alignment between strategists, campaign managers, analysts, creatives… a.k.a. every single human that touches your account.</p>
                            <button className='w-2/5 md:w-1/5 py-4 px-2 text-2xl text-black bg-[#dd4917] rounded-[4px] transition-all duration-500 tilt-zoom font-bold'>
                                Let's talk
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="w-full min-h-[90vh] flex flex-col md:flex-row items-center md:items-start pt-12 md:pt-35 px-6 md:px-15">

                    {/* Left side (text) */}
                    <div className="w-full md:w-1/2 flex flex-col text-black text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black w-full">
                            Our copywriters sit at the top of the chain of command.
                        </h1>

                        <p className="my-4 text-base sm:text-lg md:text-xl">
                            We’ve all seen it…
                        </p>
                        <p className="my-4 text-base sm:text-lg md:text-xl">
                            “Just have someone in marketing write it.”
                        </p>
                        <p className="my-4 text-base sm:text-lg md:text-xl">
                            Instead of leaving messaging fragmented, siloed, and franken-written, we empower our world-class writers to scrutinize every headline, ad creative, subject line, and CTA. That way, we smooth all friction and create a seamless, intentional experience that speeds up the path to conversion.
                        </p>

                        {/* Uncomment if you want button */}
                        {/* <button className="w-full sm:w-1/2 md:w-1/3 py-3 sm:py-5 px-6 sm:px-8 text-lg sm:text-xl md:text-2xl text-black bg-[#dd4917] rounded-md transition-all duration-500 tilt-zoom font-bold mx-auto md:mx-0">
        Let's talk
      </button> */}
                    </div>

                    {/* Right side (image) */}
                    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                        <img src={strat} alt="" className="w-4/5 sm:w-3/4 h-auto" />
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="w-full min-h-[90vh]">
                    <div className="w-full h-full flex pt-35">
                        <div className="w-1/2 h-full flex flex-col  pl-15 text-black">
                            <h1 className=' text-6xl font-black w-full'>
                                Our copywriters sit at the top of the chain of command.
                            </h1>
                            <p className='my-4 text-xl'>
                                We’ve all seen it…
                            </p>
                            <p className='my-4 text-xl'>
                                “Just have someone in marketing write it.”
                            </p>
                            <p className='my-4 text-xl'>
                                Instead of leaving messaging fragmented, siloed, and franken-written, we empower our world-class writers to scrutinize every headline, ad creative, subject line, and CTA. That way, we smooth all friction and create a seamless, intentional experience that speeds up the path to conversion.
                            </p>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={strat} alt="" className='w-3/4 h-auto' />
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="w-full min-h-dvh h-auto smoothline py-16 px-6 md:py-25 md:px-18">
                    <div className="space-y-16">

                        {/* Core Belief #1 */}
                        <div className="flex flex-col md:flex-row w-full gap-8">
                            <div className="w-full md:w-1/2 flex flex-col text-white">
                                <span className="bg-[#CEFD94] text-xs sm:text-sm w-fit px-4 py-2 rounded-full font-bold text-black">
                                    CORE BELIEF #1
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black my-3">
                                    If it doesn’t originate in a poignant pain point, it’s not a great value prop.
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl my-2.5">
                                    To get someone to stop their scroll, your copy has to be real.
                                </p>
                            </div>

                            <div className="w-full md:w-1/2 flex gap-4">
                                <div className="flex-1 border border-gray-500 flex flex-col justify-center items-start p-6 sm:p-8 text-white">
                                    <h3 className="text-xl sm:text-2xl font-black">Before Tuff</h3>
                                    <p className="text-base sm:text-lg md:text-xl">
                                        “An amazing, DIY course creation process.”
                                    </p>
                                </div>
                                <div className="flex-1 border border-gray-500 flex flex-col justify-center items-start p-6 sm:p-8 text-white">
                                    <h3 className="text-xl sm:text-2xl font-black">After Tuff</h3>
                                    <p className="text-base sm:text-lg md:text-xl">
                                        “An intuitive course creation process with zero overwhelm.”
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Core Belief #2 */}
                        <div className="flex flex-col-reverse md:flex-row w-full gap-8">
                            <div className="w-full md:w-1/2 flex gap-4">
                                <div className="flex-1 border border-gray-500 flex flex-col justify-center items-start p-6 sm:p-8 text-white">
                                    <h3 className="text-xl sm:text-2xl font-black">Before Tuff</h3>
                                    <p className="text-base sm:text-lg md:text-xl">
                                        “High-quality product photography designed to increase your conversion rates.”
                                    </p>
                                </div>
                                <div className="flex-1 border border-gray-500 flex flex-col justify-center items-start p-6 sm:p-8 text-white">
                                    <h3 className="text-xl sm:text-2xl font-black">After Tuff</h3>
                                    <p className="text-base sm:text-lg md:text-xl">
                                        “We don’t just make pretty photos. We hook you up with creative that works.”
                                    </p>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col text-white">
                                <span className="bg-[#CEFD94] text-xs sm:text-sm w-fit px-4 py-2 rounded-full font-bold text-black">
                                    CORE BELIEF #2
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black my-3">
                                    If it sounds weird spoken aloud, write it again.
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl my-2.5">
                                    To get someone to stop their scroll, your copy has to be human.
                                </p>
                            </div>
                        </div>

                        {/* Core Belief #3 */}
                        <div className="flex flex-col md:flex-row w-full gap-8">
                            <div className="w-full md:w-1/2 flex flex-col text-white">
                                <span className="bg-[#CEFD94] text-xs sm:text-sm w-fit px-4 py-2 rounded-full font-bold text-black">
                                    CORE BELIEF #3
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black my-3">
                                    If it’s not fun…why not?
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl my-2.5">
                                    To get someone to stop their scroll, your copy has to be fun.
                                </p>
                            </div>

                            <div className="w-full md:w-1/2 flex gap-4">
                                <div className="flex-1 border border-gray-500 flex flex-col justify-center items-start p-6 sm:p-8 text-white">
                                    <h3 className="text-xl sm:text-2xl font-black">Before Tuff</h3>
                                    <p className="text-base sm:text-lg md:text-xl">
                                        “A lucrative pipeline of entry-level software engineering talent.”
                                    </p>
                                </div>
                                <div className="flex-1 border border-gray-500 flex flex-col justify-center items-start p-6 sm:p-8 text-white">
                                    <h3 className="text-xl sm:text-2xl font-black">After Tuff</h3>
                                    <p className="text-base sm:text-lg md:text-xl">
                                        “Consistent access to hungry, diverse software engineering talent.”
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div className="w-full min-h-dvh flex flex-col my-10 justify-start items-center">
                    <span className="bg-[#CEFD94] text-sm w-fit p-3 rounded-full font-bold">
                        Case Study
                    </span>
                    <h1 className="text-5xl font-black my-7.5 text-center">
                        Proof? We got it.
                    </h1>

                    <div className="w-9/10 border border-black cursor-pointer">
                        <div className="p-6 md:p-12 flex flex-col md:flex-row">
                            {/* Left Side (Image) */}
                            <div className="w-full md:w-1/2 h-full md:mr-12 flex justify-center items-center">
                                <img src={tab} alt="Case study visual" className="w-full h-auto object-contain" />
                            </div>

                            {/* Right Side (Content) */}
                            <div className="w-full md:w-1/2 h-full flex flex-col mt-6 md:mt-0">
                                <img className="w-26 my-4" src={rewire} alt="Rewire Logo" />
                                <h2 className="text-2xl font-bold">
                                    Maximize ROI on Rewiring America’s Early Paid Advertising Efforts
                                </h2>
                                <p className="text-xl mb-12">
                                    Here’s how we supported Rewiring America: We helped them test and validate
                                    early paid advertising efforts by providing cross-functional support,
                                    including design, content creation, tracking, campaign management, and more.
                                </p>
                                <p className="flex items-center gap-1 text-[18px] font-semibold cursor-pointer transition-all duration-500 tilt-zoom hover:text-[21px] md:text-[19px] hover:text-[#FF6A39] w-fit">
                                    Read case studies
                                    <span>
                                        <BiChevronRight className="text-[24px] md:text-[30px]" />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="w-full min-h-[90vh]">
                    <div className="w-full h-full flex pt-10">
                        <div className="w-1/2 h-full flex flex-col  pl-15 text-black">
                            <span className='bg-[#CEFD94] text-sm w-fit p-3 rounded-full font-bold'>KELLY RYE, CREATIVE STRATEGIST</span>
                            <h1 className=' text-6xl font-black w-full'>
                                No Capes Required: The Secrets to Writing Great Hero Messages
                            </h1>
                            <p className='my-4'>
                                We’ll break down everything you need to know about a hero message including what it is, why it matters, and how we write hard-hitting hero messages for our partners.
                            </p>
                            <p className="flex items-center gap-1 text-[18px] font-semibold cursor-pointer transition-all duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39] w-fit">
                                Read post
                                <span>
                                    <BiChevronRight className="text-[24px]  lg:text-[30px] " />
                                </span>
                            </p>

                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={curve} alt="" className='w-2/3 h-auto relative' />
                            <img src={laptop2} alt="" className='w-1/4 h-auto absolute' />
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="w-full min-h-[90vh]">
                    <div className="w-full h-full flex flex-col md:flex-row pt-10">

                        {/* Left Side (Text) */}
                        <div className="w-full md:w-1/2 h-full flex flex-col px-6 md:pl-15 text-black">
                            <span className="bg-[#CEFD94] text-sm w-fit p-3 rounded-full font-bold">
                                KELLY RYE, CREATIVE STRATEGIST
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black w-full mt-4">
                                No Capes Required: The Secrets to Writing Great Hero Messages
                            </h1>
                            <p className="my-4 text-base md:text-lg">
                                We’ll break down everything you need to know about a hero message including
                                what it is, why it matters, and how we write hard-hitting hero messages for our partners.
                            </p>
                            <p className="flex items-center gap-1 text-[16px] md:text-[18px] font-semibold cursor-pointer transition-all duration-500 tilt-zoom hover:text-[19px] md:hover:text-[21px] hover:text-[#FF6A39] w-fit">
                                Read post
                                <span>
                                    <BiChevronRight className="text-[22px] md:text-[24px] lg:text-[30px]" />
                                </span>
                            </p>
                        </div>

                        {/* Right Side (Images) */}
                        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 relative">
                            <img src={curve} alt="" className="w-3/4 md:w-2/3 h-auto relative" />
                            <img src={laptop2} alt="" className="w-1/2 md:w-1/4 h-auto absolute" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full min-h-[77vh] homeImg3 flex items-center justify-center p-4 md:px-19">
                    <div className="w-full max-w-5xl bg-[#5A2AFF] flex flex-col justify-center items-center text-center px-4 py-10 rounded-lg">

                        {/* Heading */}
                        <h2 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-[#FFFEFB] leading-snug max-w-3xl">
                            It’s never been easier to reach your target audience. It’s never been harder to stand out.
                        </h2>

                        {/* Subtext */}
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium mt-4 text-[#FFFEFB] max-w-2xl">
                            In the .2 seconds you have to make an impression…do you?
                        </p>

                        {/* Button */}
                        <Link to="/get-started-with-tuff">
                            <button className="text-[#0C2233] cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-6 py-3 px-6 md:py-4 md:px-8 bg-[#ceff2a] rounded-[4px] tilt-zoom">
                                Book a Strategy Call
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
