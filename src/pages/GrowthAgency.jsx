import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import stars from '../assets/stars.svg'
import tech from '../assets/techcrunch.svg'
import greenbg from '../assets/green-block.png'
import img from '../assets/gwaimg.png'
import img1 from '../assets/gwaimg1.png'
import img2 from '../assets/gwaimg2.png'
import img3 from '../assets/gwaimg3.png'

import joyn from '../assets/joyn.svg'
import teach from '../assets/teach.svg'
import punch from '../assets/punch.svg'
import p from '../assets/p.svg'
import cabi from '../assets/cabi.svg'
import happy from '../assets/happy.svg'
import xendo from '../assets/xendo.svg'
import soonanew from '../assets/soonanew.svg'
import hustle from '../assets/hustlene.svg'
import akko from '../assets/akko.svg'
import koji from '../assets/kojinew.svg'
import comqi from '../assets/comqi.svg'
import multiverse from '../assets/multiverse.svg'
import thnks from '../assets/thnks.svg'
import aarp from '../assets/aarp.svg'
import brightwheel from '../assets/brightwheel.svg'

import jamie from "../assets/jamieicon.png"
import landy from "../assets/landyicon.png"
import brad from "../assets/bradicon.png"
import michael from "../assets/michaelicon.png"
import sashee from "../assets/sasheeicon.png"
import jordan from "../assets/jordanicon.png"
import laurens from "../assets/laurensicon.png"
import liliana from "../assets/lilianaicon.png"
import { BiCheck, BiChevronRight } from "react-icons/bi";
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom'

import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";
import soonamedia from "../assets/soonamedia.jpg";
import soona from "../assets/soona.svg";
import palmetto from "../assets/koji.png";
import pal from "../assets/soona.svg";




export default function GrowthAgency() {
    const icons = [
        joyn, teach, punch, p, cabi, happy, xendo, soonanew, hustle, akko, koji, comqi, multiverse, thnks, aarp, brightwheel
    ];
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
    const box = {
        heading: "What does success look like to your company??",
        para: [""],
        button: "Book a strategy call"
    }
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>

            <section>
                <div className="VideoLine w-full flex justify-center items-center pt-10 md:pt-45 pb-10 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                YOUR GROWTH AGENCY
                            </span>
                            <h1 className=' text-6xl font-black my-5'>
                                Let’s make your business and team a success.
                            </h1>
                            <p className=' text-xl my-5'>
                                Tuff is a team designed to seamlessly integrate into your businesses to help you experience real growth. We build custom teams that click into your business and act as an in-house growth marketing team. It’s time to move beyond simply running ads and start designing the right growth model with the right strategy.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                                Let's talk
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={greenbg} alt="" className=" absolute w-1/3" />
                            <img src={img} alt="" className=' w-1/2 relative left-15' />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="caseline h-auto w-full pt-4 pb-10">
                    <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#FF6A39] rounded-[20px] flex justify-center items-center px-5 mt-24 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                        STARTUPS, SCALE-UPS, AND BEYOND
                    </div>
                    <h2 className="text-[42px] font-semibold  text-center mt-2">
                        Positive outcomes for dozens of DTC, B2B, Fintech, SaaS, and eCommerce businesses.
                    </h2>
                    <div className="w-full h-auto  flex flex-col lg:flex-row justify-between px-4 lg:px-19 gap-6 lg:gap-0 pt-15">
                        <div className="h-auto w-full lg:w-[48.7%] px-6 lg:px-12 pt-8 lg:pt-12 bg-[#FFFFFF] border-2 border-[rgb(0_0_0_/_12%)]">
                            <img
                                src={soonamedia}
                                alt="soonamedia"
                                loading="lazy"
                                className="w-full "
                            />
                            <img
                                src={soona}
                                alt="soona"
                                loading="lazy"
                                className="mt-6 lg:mt-8 h-6 filter brightness-0 saturate-100"
                            />
                            <div className="w-full pt-6 lg:pt-9 flex flex-wrap gap-2 lg:gap-3 items-center">
                                <div className="text-[16px] lg:text-[20px] font-semibold text-[#FFFFFF] bg-black w-max px-[7px] lg:px-[9px] py-[5px] lg:py-[7px]">
                                    Ecommerce
                                </div>
                                <div className="text-[16px] lg:text-[20px] font-semibold text-[#FFFFFF] bg-black w-max px-[7px] lg:px-[9px] py-[5px] lg:py-[7px]">
                                    SMBs
                                </div>
                                <p className="text-black font-semibold text-[16px] lg:text-[20px]">
                                    5 min read
                                </p>
                            </div>
                            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-black leading-[28px] sm:leading-[32px] lg:leading-[36px] mt-4 lg:mt-5 w-full lg:w-[90%]">
                                Tackling Rising Acquisition Costs with an Ad Creative Testing
                                Framework
                            </p>
                            <div className="w-full pt-5 lg:pt-7 pr-0 lg:pr-4 pb-12 lg:pb-10">
                                {[
                                    {
                                        value: "1.4M",
                                        label: "Increase in Impressions",
                                        icon: chevUp,
                                    },
                                    { value: "45%", label: "Increase in CRV", icon: chevUp },
                                    {
                                        value: "57%+",
                                        label: "Increase in Total Sales",
                                        icon: chevUp,
                                    },
                                    { value: "$200+", label: "CPA", icon: chevDown },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="w-full h-[45px] lg:h-[55px] mt-2 border-t-2 border-[#000000] flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-1 w-[45%] lg:w-[40%]">
                                            <img
                                                src={item.icon}
                                                alt="icon"
                                                loading="lazy"
                                                className="w-[8%] lg:w-[6%]"
                                            />
                                            <h3 className="text-[16px] lg:text-[18px] sm:text-[20px] font-extrabold text-black">
                                                {item.value}
                                            </h3>
                                        </div>
                                        <div>
                                            <p className="text-[16px] lg:text-[18px] sm:text-[20px] font-normal text-black">
                                                {item.label}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="h-auto w-full lg:w-[48.7%] px-6 lg:px-12 pt-8 lg:pt-12 bg-[#FFFFFF] border-2 border-[rgb(0_0_0_/_12%)]">
                            <img
                                src={palmetto}
                                alt="palmetto"
                                loading="lazy"
                                className="w-full"
                            />
                            <img
                                src={pal}
                                alt="pal"
                                loading="lazy"
                                className="mt-6 lg:mt-8 h-6 filter brightness-0 saturate-100"
                            />
                            <div className="w-full pt-6 lg:pt-9 flex flex-wrap gap-2 lg:gap-3 items-center">
                                <div className="text-[16px] lg:text-[20px] font-semibold text-[#FFFFFF] bg-black w-max px-[7px] lg:px-[9px] py-[5px] lg:py-[7px]">
                                    Paid Media
                                </div>
                                <div className="text-[16px] lg:text-[20px] font-semibold text-[#FFFFFF] bg-black w-max px-[7px] lg:px-[9px] py-[5px] lg:py-[7px]">
                                    CRO
                                </div>
                                <p className="text-black font-semibold text-[16px] lg:text-[20px]">
                                    7 min read
                                </p>
                            </div>
                            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-black leading-[28px] sm:leading-[32px] lg:leading-[36px] mt-4 lg:mt-5 w-full lg:w-[90%]">
                                Developing an Inbound Pipeline to Scale Qualified Leads for B2B
                                Partner
                            </p>
                            <div className="w-full pt-5 lg:pt-7 pr-0 lg:pr-4 pb-12 lg:pb-10">
                                {[
                                    {
                                        value: "1.4M",
                                        label: "Increase in Impressions",
                                        icon: chevUp,
                                    },
                                    { value: "45%", label: "Increase in CRV", icon: chevUp },
                                    {
                                        value: "57%+",
                                        label: "Increase in Total Sales",
                                        icon: chevUp,
                                    },
                                    { value: "$200+", label: "CPA", icon: chevDown },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="w-full h-[45px] lg:h-[55px] mt-2 border-t-2 border-[#000000] flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-1 w-[45%] lg:w-[40%]">
                                            <img
                                                src={item.icon}
                                                alt="icon"
                                                loading="lazy"
                                                className="w-[8%] lg:w-[6%]"
                                            />
                                            <h3 className="text-[16px] lg:text-[18px] sm:text-[20px] font-extrabold text-black">
                                                {item.value}
                                            </h3>
                                        </div>
                                        <div>
                                            <p className="text-[16px] lg:text-[18px] sm:text-[20px] font-normal text-black">
                                                {item.label}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Link to={"/case-studies"}>
                        <div className="w-max px-6 py-2 border-2 border-black  text-[18px] lg:text-[20px] font-semibold m-auto mt-10 transition-transform duration-500 tilt-zoom">
                            View all case studies
                        </div>
                    </Link>
                </div>
            </section>
            <section>
                <div className="w-full mediaLine p-20 flex flex-col justify-start items-center text-white">
                    <div className="w-2/3 text-center font-black">
                        <span className='bg-[#CEFD94] text-center text-black text-2xl'>
                            “The team at Tuff knows their stuff – and it’s precisely why they are not selling ‘magic’ or any kind of ‘mysterious sauce.’
                        </span>
                    </div>
                    <div className="w-2/3 text-center font-black my-5">
                        <span className=' text-center text-2xl  '>
                            Instead, they are betting on transparency and experimentation, and it seems to be working well: The agency was warmly recommended to TechCrunch multiple times via our growth marketing survey.”
                        </span>
                    </div>
                    <img src={tech} alt="" className=' my-5' />
                    <strong className=' text-2xl'>
                        Tuff in Techcruch
                    </strong>
                    <strong className=' text-2xl'>
                        Full Article
                    </strong>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2">
                            <h2 className=' text-4xl font-black'>
                                Get ongoing growth strategy and execution with a plug-in team.
                            </h2>
                            <p className=' text-xl'>
                                As a growth agency, we’re experts at a variety of different acquisition and conversion tactics. We partner with clients to set the roadmap and then get to work experimenting with a variety of growth tactics based on your goals. You’ll work with a small, dedicated team of growth generalists and channel experts built to fit the needs of your growing business. Our list of services includes but is most certainly not limited to:
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
                        <div className="w-full md:w-1/2">
                            <img src={img1} alt="" />
                        </div>
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
            <section>
                <div className="w-full h-fit flex flex-col justify-start items-center gap-10 pt-20 homeImg5">
                    <div className="w-9/10 flex flex-col justify-start items-center gap-5">
                        <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                            OUR COMPANY
                        </span>
                        <h2 className=' text-5xl font-black text-white'>
                            Trusted by kickass businesses
                        </h2>
                        <div className="flex gap-5 flex-wrap my-30 justify-center items-center">
                            {
                                icons.map((icon, idx) => (
                                    <div key={idx} className="w-full md:w-1/5 h-[200px] glassbg border border-[rgb(255_255_255_/_12%)] p-7.5 flex justify-center items-center">
                                        <img src={icon} alt="" className=' ' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col justify-start items-center gap-10 pt-20">
                    <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                        OUR COMPANY
                    </span>
                    <h1 className=' text-5xl font-black w-2/3  text-center'>
                        Small teams of growth experts working directly with clients
                    </h1>
                    <p className=' text-xl w-2/3  text-center'>
                        We hire for two core roles at Tuff. We have growth marketers who are big-picture strategists as well as channel experts who are deeply experienced in a particular type of marketing. Each account we work with is paired with a growth marketer and then at least three to five different channel experts depending on what we’re testing. Your growth marketer is your map maker and wayfinder—keeping goals clearly defined and the whole team focused on creating the smartest path to growth. Your channel experts are the in-the-weeds, watching-every-dollar-spent efficiency finders and optimizers.
                    </p>
                    <Link to={"/how-it-works"}>
                        <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-xl font-black'>
                            Get to know us
                            <BiChevronRight />
                        </span>
                    </Link>
                    <img src={img3} alt="" />
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center  ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2  ">
                            <h1 className=' text-5xl font-black my-5'>
                                How we run our growth agency and work with clients
                            </h1>
                            <p className=' text-xl my-5'>
                                Our bread and butter is building efficient, holistic marketing strategies. We do this with our process. We stay hungry for research, then execute to a T, consistently optimizing and refining to find maximum efficiencies. We do this with our team. Egoless and curious, we share hypotheses and findings with your team and each other to find more streamlined paths to growth. Finally, we do this with our style. Radical transparency is the name of the game. We believe that collaboration and showing our work is the only real way to build foundations to trustworthy partnerships.
                            </p>
                            <Link to={"/how-it-works"}>
                                <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-xl font-black'>
                                    Learn more about how it works
                                    <BiChevronRight />
                                </span>
                            </Link>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex flex-col justify-start items-center py-20 gap-10">
                    <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                        Resources
                    </span>
                    <h2 className=' w-2/3 font-black text-5xl text-center'>
                        Reap the rewards of everything we’ve learned while helping companies find traction and scale.
                    </h2>
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-9/10 md:w-1/4 p-7.5 border border-[rgb(0_0_0_/_12%)]">
                            <h2 className=' text-3xl font-black '>
                                Resources
                            </h2>
                            <p className=' text-xl my-5'>
                                The latest growth, paid media, organic, and conversion tools, techniques and more.
                            </p>
                            <Link to={"/blog"}>
                                <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-xl font-black'>
                                    Dive into our Blog
                                    <BiChevronRight />
                                </span>
                            </Link>
                        </div>
                        <div className="w-9/10 md:w-1/4 p-7.5 border border-[rgb(0_0_0_/_12%)]">
                            <h2 className=' text-3xl font-black '>
                                Our Team
                            </h2>
                            <p className=' text-xl my-5'>
                                Ready to jump in and build a strong, purposeful partnership that can go the distance?
                            </p>
                            <Link to={"/our-company"}>
                                <span className=' flex my-5 items-center gap-2.5 hover:text-[#FF6A39] tilt-zoom transition-all duration-500 text-xl font-black'>
                                    Meet the Tuff team
                                    <BiChevronRight />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <FinalSection text={box} />
            <Footer />
        </>
    )
}
