import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import img1 from '../assets/technicalimg1.png'
import signal1 from '../assets/signal1.png'
import signal2 from '../assets/signal2.png'
import img3 from '../assets/technicalimg3.png'
import img2 from '../assets/technicalimg2.jpg'
import img4 from '../assets/technicalimg4.jpg'
import spencer from '../assets/spencericon.png'
import ethan from '../assets/ethanicon.jpeg'
import richard from '../assets/richardicon.png'
import chart from '../assets/technicalchart.svg'
import jamie from "../assets/jamieicon.png"
import landy from "../assets/landyicon.png"
import brad from "../assets/bradicon.png"
import michael from "../assets/michaelicon.png"
import sashee from "../assets/sasheeicon.png"
import jordan from "../assets/jordanicon.png"
import laurens from "../assets/laurensicon.png"
import liliana from "../assets/lilianaicon.png"
import stars from "../assets/stars.svg"
import content1 from '../assets/contentimg1.jpg'
import content from '../assets/contentimgtop.png'
import { BiChevronRight } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";
import bingimglast from '../assets/bingimglast.svg'

import { Link } from 'react-router-dom'
import FinalSection from '../components/FinalSection'


export default function ContentStrategy() {
    const box = {
        heading: "We’d love to work with you.",
        para: ["We partner with small, dedicated teams to build intentional and sustainable growth. Let’s level up your content strategy together. Schedule time with Derek today and we’ll analyze your account and present your top growth opportunities in a PDF."],
        button: "Book a strategy call"
    }
    const comments = [
        {
            first: {
                sentence1: {
                    font: "font-black",
                    text: "The Tuff team is truly in a league of their own – just genuinely good people who are unequivocally amazing at what they do."
                },
                sentence2: {
                    font: "",
                    text: `They are each so passionate and skilled in their respective crafts, and their ambition is contagious. Our meetings are the highlight of my week!`
                },
                image: jamie,
                name: "Jamie Ward",
                position: "Director of Growth at Sharetown"
            },
            second: {
                sentence1: {
                    font: "",
                    text: "We’ve been working with Ellen and the Tuff team for just over 7 months and have been impressed with their knowledge, attention to detail, professionalism and execution."
                },
                sentence2: {
                    font: "font-black",
                    text: `Tuff has been instrumental in helping us make a monumental jump in search ranking, as well as site traffic and leads generated through our site!`
                },
                image: landy,
                name: "Landy Kindle",
                position: "Tech Heads"
            },
        },
        {
            first: {
                sentence1: {
                    font: "",
                    text: "I view our partnership with Tuff as more like an extension of my team."
                },
                sentence2: {
                    font: "font-black",
                    text: `We strategize together, ask tough questions, examine the results, optimize – and it just keeps getting better. Exactly what I was looking for`
                },
                image: brad,
                name: "Brad Veach",
                position: "VP of Marketing at Thnks"
            },
            second: {
                sentence1: {
                    font: "",
                    text: "Tuff has been an incredible value-add to our business. They’re effective, flexible, communicative, and bright."
                },
                sentence2: {
                    font: "font-black",
                    text: `I feel like I have another set of 6+ eyes on the growth of my business at all times.”`
                },
                image: michael,
                name: "Michael Correo",
                position: "Co-founder, Team Bootcamp"
            },
        },
        {
            first: {
                sentence1: {
                    font: "font-black",
                    text: "Tuff is an amazing team, extremely organized, and driven to produce results!"
                },
                sentence2: {
                    font: "",
                    text: `We have churned through multiple agencies in our lifetime, and have been so impressed by Tuff.”`
                },
                image: sashee,
                name: "Sashee Chandran",
                position: "Founder and CEO at Tea Drops"
            },
            second: {
                sentence1: {
                    font: "font-black",
                    text: "Very knowledgeable team at Tuff – fast moving with a get it done attitude."
                },
                sentence2: {
                    font: "",
                    text: `Looking forward to a continued partnership and future success.`
                },
                image: jordan,
                name: "Jordan Bevans",
                position: "Head of Strategic Projects, Findex"
            },
        },
        {
            first: {
                sentence1: {
                    font: "font-black",
                    text: "Great team to work with. Very experienced, quick to respond and always willing to pivot based on feedback. "
                },
                sentence2: {
                    font: "",
                    text: `I have really enjoyed working with the Tuff team and have learned a ton from them!`
                },
                image: laurens,
                name: "Laurens Spethmann",
                position: "Growth Lead at Headway"
            },
            second: {
                sentence1: {
                    font: "",
                    text: "The entire Tuff Team is amazing, which is no surprise because their leadership is exceptional."
                },
                sentence2: {
                    font: "font-black",
                    text: `Ellen has put together one of the most amazing firms out there, and we are so happy to be working with TUFF.`
                },
                image: liliana,
                name: "Liliana Aide Monge",
                position: "Co-Founder at Sabio"
            },
        },
    ]
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>

            <section>
                <div className="VideoLine w-full flex justify-center items-center md:pt-45 pb-10 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className=' text-6xl font-black my-5'>
                                Partner with a Content Strategy Agency That Delivers
                            </h1>
                            <p className=' text-xl my-5'>
                                Create quality content that attracts, engages, and builds trust with your target customers.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                                Let's talk
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={content} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className=" w-full flex justify-center items-center py-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10 ">
                        <div className="w-full md:w-1/2  ">
                            <h1 className='text-4xl font-black my-5'>
                                Tuff is your content strategy agency.
                            </h1>
                            <p className=' text-xl my-5'>
                                Understand your audience’s needs, where your competition is winning, and areas where you have an opportunity to lead your industry. Consistently publish content that converts with help from our experienced content strategists.
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
                                    Inconsistently publishing content, lack of keyword focus, unclear communication, and lack of transparent results.
                                </p>
                            </div>
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 md:w-96 ">
                                <img className=' w-12.5 h-12.5' src={signal2} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    After Tuff
                                </h2>
                                <p className=' text-xl my-4 text-[#0c2233]'>
                                    Targeted editorial calendar, organized blog, daily communication, results delivered, progress is clear, and a sense of trust sets in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center py-10 mediaLine text-white">
                    <div className="w-9/10 flex flex-col items-center gap-10">
                        <h1 className=' text-6xl font-black'>
                            We’ve got the right tricks, tools, and tatics.
                        </h1>
                        <div className="w-full flex flex-col md:flex-row flex-wrap  text-xl">
                            <div className="w-full md:w-1/3">
                                <p className='flex items-center my-5'>
                                    <span className=' text-[#FF6a39]'>
                                        <IoMdCheckmark />
                                    </span>
                                    Keyword Research
                                </p>
                                <p className='flex items-center my-5'>
                                    <span className=' text-[#FF6a39]'>
                                        <IoMdCheckmark />
                                    </span>
                                    Customer Personas
                                </p>
                                <p className='flex items-center my-5'>
                                    <span className=' text-[#FF6a39]'>
                                        <IoMdCheckmark />
                                    </span>
                                    Editorial Calendar
                                </p>
                            </div>
                            <div className="w-full md:w-1/3">
                                <p className='flex items-center my-5'>
                                    <span className=' text-[#FF6a39]'>
                                        <IoMdCheckmark />
                                    </span>
                                    Blog Organization
                                </p>
                                <p className='flex items-center my-5'>
                                    <span className=' text-[#FF6a39]'>
                                        <IoMdCheckmark />
                                    </span>
                                    Title tags, meta descriptions, H1s
                                </p>
                                <p className='flex items-center my-5'>
                                    <span className=' text-[#FF6a39]'>
                                        <IoMdCheckmark />
                                    </span>
                                    New Keyword Plan
                                </p>
                            </div>
                            <div className="w-full md:w-1/3">
                                <p className='flex items-center my-5'>
                                    <span className=' text-[#FF6a39]'>
                                        <IoMdCheckmark />
                                    </span>
                                    Update Existing Content
                                </p>
                                <p className='flex items-center my-5'>
                                    <span className=' text-[#FF6a39]'>
                                        <IoMdCheckmark />
                                    </span>
                                    Consistent Reporting
                                </p>
                                <p className='flex items-center my-5'>
                                    <span className=' text-[#FF6a39]'>
                                        <IoMdCheckmark />
                                    </span>
                                    Analytics Tracking and Reports
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
                            <h1 className=' text-4xl font-black my-5'>
                                Get a Detailed Plan. Free of Charge.
                            </h1>
                            <p className=' text-xl my-5'>
                                Get ready to supercharge your content strategy. Derek, Tuff’s SEO Strategist, will analyze your content and present your top growth opportunities in a PDF. This includes audience research, keyword analysis, and more. If nothing else, it’s an opportunity to think through ideas for your account, and we can leave it at that.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                Lets Talk
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={bingimglast} alt="" />
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
                        <div className=" w-full p-12 glassbg border border-[rgb(255_255_255_/12%)] flex gap-5">
                            <div className="w-full md:w-1/2">
                                <img src={content1} alt="" />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <h2 className="text-4xl sm:text-5xl font-bold">
                                    Content Marketing Strategy Guide
                                </h2>
                                <p className=' font-black'>
                                    The not-so-secret sauce on how to create a content plan.
                                </p>
                                <button className='bg-[#FF6A39] w-full md:w-1/2 my-5 p-5 text-2xl text-black font-black cursor-pointer tilt-zoom'>
                                    Get the Guide
                                </button>
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
                            Resources
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
                <div className="flex flex-col justify-start items-center gap-4 w-full py-20">
                    <div className="h-[45px] w-fit px-4 bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                        TESTIMONIALS
                    </div>
                    <h1 className=' text-5xl text-center font-black w-4/5'>
                        We focus on finding traction and scale for brands, ideas, and campaigns for teams of all sizes.
                    </h1>
                    {
                        comments.map((comment, idx) => (
                            <div className=" w-9/10 flex flex-col md:flex-row gap-5 my-5">
                                <div className="w-full md:w-1/2 flex flex-col gap-5 ">
                                    <img className=' w-1/4' src={stars} alt="" />
                                    <p className=' text-2xl'>
                                        <span className={`${comment.first.sentence1.font}`}>"{comment.first.sentence1.text}</span> <span className={`${comment.first.sentence2.font}`}>{comment.first.sentence2.text}"</span>
                                    </p>
                                    <div className="flex gap-2 mt-4">
                                        <div className="w-18">
                                            <img className=' w-16 h-16' src={comment.first.image} alt="" />
                                        </div>
                                        <div className="w-2/3 flex flex-col justify-center">
                                            <p className="font-black">
                                                {comment.first.name}
                                            </p>
                                            <p className="">
                                                {comment.first.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col gap-5">
                                    <img className=' w-1/4' src={stars} alt="" />
                                    <p className=' text-2xl'>
                                        <span className={`${comment.second.sentence1.font}`}>"{comment.second.sentence1.text}</span> <span className={`${comment.second.sentence2.font}`}>{comment.second.sentence2.text}"</span>
                                    </p>
                                    <div className="flex gap-2 mt-4">
                                        <div className="w-18">
                                            <img className=' w-16 h-16' src={comment.second.image} alt="" />
                                        </div>
                                        <div className="w-2/3 flex flex-col justify-center">
                                            <p className="font-black">
                                                {comment.second.name}
                                            </p>
                                            <p className="">
                                                {comment.second.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <FinalSection text={box} />
            <Footer />
        </>
    )
}
