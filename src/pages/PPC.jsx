import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import lines from "../assets/green-line.png"
import block from "../assets/orange-block.png"
import laptop from "../assets/ppclaptop.png"
import laptop2 from "../assets/ppclaptop2.png"
import chart from "../assets/ppcchart.png"
import stars from "../assets/stars.svg"
import SeoTech from "../assets/SeoTech.svg";
import SeoCont from "../assets/SeoCont.svg";
import SeoRep from "../assets/SeoRep.svg";
import social from "../assets/ppc-social.svg";
import display from "../assets/ppc-display.svg";
import cro from "../assets/ppc-cro.svg";
import marketing from "../assets/ppc-marketing.svg";
import content from "../assets/ppc-content.svg";
import creative from "../assets/ppc-creative.svg";
import { Link } from 'react-router-dom'

export default function PPC() {
    const box = {
        heading: "Ready to elevate your brand AND drive results?",
        para: [""],
        button: "Book a Strategy Call"
    }
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        companyWebsite: "",
        companyStage: "",
        timeline: "",
        budget: "",
        message: "",
    });
    const stages = ["Seed", "Series A or higher", "Enterprise"];
    const [companyStage, setCompanyStage] = useState("");
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

            <section>
                <div className="w-full min-h-[70vh] GeoBg pb-7.5">
                    <div className="w-full h-full flex pt-45">
                        <div className="w-1/2 h-full flex flex-col  pl-15 text-white">
                            <h1 className=' text-6xl font-black w-full my-7.5'>
                                Unlock a quick yet lasting path to growth.
                            </h1>
                            <p className=' text-2xl my-7.5'>
                                We generate quality results for our clients – not just empty traffic and one-off wins.
                            </p>
                            <button className='w-1/3 my-7.5 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                Let's talk
                            </button>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={lines} alt="" className='w-2/3 h-auto relative' />
                            <img src={laptop} alt="" className='w-1/2 h-auto absolute' />
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="px-18 py-12.5 flex justify-center items-center">
                    <div className="w-8/10 h-[40vh] flex flex-col items-center justify-center text-2xl">
                        <img src={stars} alt="" />
                        <h2 className='my-2.5 font-black bg-[#CEFD94]'>
                            “I view our partnership with Tuff as more like an extension of my team.
                        </h2>
                        <h2 className=' my-2.5 font-black text-center'>
                            We strategize together, ask tough questions, examine the results, optimize – and it just keeps getting better. Exactly what I was looking for.”
                        </h2>
                        <div className=" text-xl">
                            <h3 className=' font-bold text-center'>
                                Brad Veach
                            </h3>
                            <p>VP of Marketing at THNKS</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full h-auto SeoBg pt-10 flex items-center flex-col">

                    <h2 className="text-3xl text-white text-center mt-4 px-4 font-black w-full lg:text-5xl lg:w-1/2">
                        Get best practices paired with constant iteration and testing new tactics, tools, and theories.
                    </h2>

                    <p className="text-[16px] text-white text-center font-normal mt-6 px-4 leading-[22px] w-full lg:text-[20px] lg:mt-8 lg:leading-[25px] lg:w-[53%]">
                        If your growth has stalled or hit a cap, a boilerplate campaign won’t help you unlock your next pocket of scale. While our process has been battle-tested, we customize our paid search solutions to your unique business through:
                    </p>

                    <div className="w-full flex flex-col gap-6 px-6 pb-20 pt-10 lg:flex-row lg:gap-0 lg:justify-between lg:px-20">
                        {/* Card 1 */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoTech} alt="SeoTech" />
                            <h2 className="text-[24px]  font-semibold mt-4 lg:text-[28px]">
                                Strategy
                            </h2>
                            <ul className=' list-disc pl-5 text-xl'>
                                <li className=' pt-2'>
                                    Understand intent at every stage of the funnel, on all platforms
                                </li>
                                <li className=' pt-2'>
                                    Allocate budget across priority platforms and audiences
                                </li>
                                <li className=' pt-2'>
                                    Utilize a audience-centric approach to match relevant user flows with the right content, collaborating with our CRO team
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoCont} alt="SeoCont" />
                            <h2 className="text-[24px]  font-semibold mt-4 lg:text-[28px]">
                                Measurement
                            </h2>
                            <ul className=' list-disc pl-5 text-xl'>
                                <li className=' pt-2'>
                                    Track cross-platform customer journey to drive top of the funnel awareness
                                </li>
                                <li className=' pt-2'>
                                    Leverage the most effective conversion events and tracking setup in platform
                                </li>
                                <li className=' pt-2'>
                                    Get customized analytics to show the brand and performance metrics that matter most
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="w-full p-6 bg-[#1F3343] rounded-[3px] border border-white lg:w-[31.5%] lg:p-8 mt-4 text-white">
                            <img src={SeoRep} alt="SeoRep" />
                            <h2 className="text-[24px] font-semibold mt-4 lg:text-[28px]">
                                Execution
                            </h2>
                            <ul className=' list-disc pl-5 text-xl'>
                                <li className=' pt-2'>
                                    Write ad copy and develop creative that converts
                                </li>
                                <li className=' pt-2'>
                                    Continually optimize finding opportunity audiences using the right balance of automation and management
                                </li>
                                <li className=' pt-2'>
                                    Consistently test and iterate on campaign structure to improve
                                </li>
                                <li className=' pt-2'>
                                    Lead quality assessment reports and actionable insights
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center pb-10">
                        <h2 className=" w-1/2 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[46px] font-semibold leading-snug sm:leading-tight lg:leading-[60px] mt-18 tracking-tight lg:tracking-[-1px] text-[#fffefb] text-center">
                            Our partners benefit from our extensive experience using the following platforms:
                        </h2>

                        <div className="w-full h-auto hidden lg:flex justify-between pt-10 px-39 pr-65">
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Google Merchant Center
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Google Data Studio
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Google Analytics
                            </div>
                            <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Search Console
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-3 px-4 pt-10 lg:hidden">
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Google Merchant Center
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Google Data Studio
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Google Analytics
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Microsoft Merchant Center
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Search Console
                            </div>
                        </div>

                        <div className="w-full h-auto hidden lg:flex justify-center  pt-15 px-39 pr-69">
                            <div className=" w-8/10 flex justify-between items-center">

                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                    Supermetrics
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                    SEM Rush
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                    FiveTran
                                </div>
                                <div className="h-[45px] w-max px-[22px] bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                    Microsoft Merchant Center
                                </div>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-3 px-4 pt-4 lg:hidden">
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Supermetrics
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                SEM Rush
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                FiveTran
                            </div>
                            <div className="h-[45px] w-full px-4 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                                Microsoft Merchant Center
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section>
                <div className="w-full flex flex-col my-15 justify-start items-center">
                    <div className="h-[45px] w-fit px-4 bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                        LET'S TALK
                    </div>
                    <h1 className='w-1/2 font-black my-4.5 text-5xl text-center'>
                        Learn more about a few of our team’s specialty areas
                    </h1>
                    <div className="bg-white w-3/5 rounded-[5px] border-[2px] border-gray-300 p-6 sm:p-8 md:p-9 mt-10 sm:mt-14 lg:mt-18">
                        <div className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                                <div>
                                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="First Name"
                                        className="w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Last Name"
                                        className="w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email Address"
                                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        placeholder="Company"
                                        className="w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                        Company Website
                                    </label>
                                    <input
                                        type="url"
                                        name="companyWebsite"
                                        value={formData.companyWebsite}
                                        onChange={handleInputChange}
                                        placeholder="Website"
                                        className="w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                    Company Stage
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {stages.map((stage) => {
                                        const isSelected = companyStage === stage;
                                        return (
                                            <button
                                                key={stage}
                                                type="button"
                                                onClick={() => handleStageClick(stage)}
                                                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border transition-all ${isSelected
                                                    ? "border-[#ceff2a] bg-[#ceff2a] text-[#0C2233]"
                                                    : "border-[#D9D9D9] bg-white text-[#0C2233] hover:bg-[#F5F5F5]"
                                                    }`}
                                            >
                                                <span
                                                    className={`w-4 h-4 flex items-center justify-center rounded-full border ${isSelected
                                                        ? "border-white bg-white text-[#0C2233]"
                                                        : "border-[#D9D9D9] bg-white text-transparent"
                                                        }`}
                                                >
                                                    {isSelected ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-3 w-3"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 111.414-1.414l3.543 3.543 7.543-7.543a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    ) : null}
                                                </span>
                                                {stage}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div>
                                <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                    Are you bootstrapped or have you raised funds?
                                </label>
                                <select
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleInputChange}
                                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                >
                                    <option value="Bootstrapped">Bootstrapped</option>
                                    <option value="Funded">Funded</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                    What is your timeline for working with us?
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                >
                                    <option value="0-10k">Need help now</option>
                                    <option value="10k-50k">Next 1-3 months</option>
                                    <option value="50k-100k">Exploring options</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                    What is your current monthly media budget?
                                </label>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg outline-none"
                                >
                                    <option value="">Select budget range</option>
                                    <option value="0-10k">$0 - $10K</option>
                                    <option value="10k-50k">$10K - $50K</option>
                                    <option value="50k-100k">$50K - $100K</option>
                                    <option value="100k+">$100K+</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="How can we help?"
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 resize-none"
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-[#ceff2a] text-[#0E2333] text-[18px] sm:text-[20px] md:text-[22px] font-bold py-3 sm:py-4 px-5 sm:px-6 rounded-[4px] transition-colors duration-200 hover:cursor-pointer tilt-zoom"
                            >
                                Let's Talk
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full min-h-[70vh] SeoBg pb-7.5">
                    <div className="w-full h-full flex pt-45">
                        <div className="w-1/2 h-full flex flex-col  pl-15 text-white">
                            <h1 className=' text-4xl font-black w-full my-7.5'>
                                Get a PPC team that has consistently delivered results.
                            </h1>
                            <p className=' text-xl my-7.5'>
                                Anyone can optimize a campaign. But what results in real growth is the ability to deeply understand what the numbers mean and then constantly iterate. Our team works hard, moves fast, and partners closely with you to test, learn, and validate what’s working and what’s not. Every adjustment to your PPC campaigns are based on opportunity, cost, ease, and value.
                            </p>
                            {/* <button className='w-1/3 my-7.5 py-5 px-8 text-2xl text-black bg-[#dd4917] rounded-[2px] transition-all duration-500 tilt-zoom font-bold'>
                                Let's talk
                            </button> */}
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={block} alt="" className='w-1/2 h-auto relative' />
                            <img src={laptop2} alt="" className='w-1/2 h-auto absolute' />
                        </div>
                    </div>
                    <div className="w-full h-full flex pt-45">
                        <div className="w-1/2 flex justify-center items-center">
                            {/* <img src={lines} alt="" className='w-2/3 h-auto relative' /> */}
                            <img src={chart} alt="" className='w-1/2 h-auto absolute pl-10' />
                        </div>
                        <div className="w-1/2 h-full flex flex-col  pl-15 text-white">
                            <h1 className=' text-4xl font-black w-full mt-7.5'>
                                Use Tuff to zero in on the right search approach, the right way, fast
                            </h1>
                            <p className=' text-2xl my-7.5'>
                                Your team, including investors, needs a clear search plan with the data to back it up. Proof of defined metrics, keyword forecasts, and industry insights coming together into a clear analysis and recommendation from our team of experts, are the quality insights you need to turn user intent into meaningful business results.
                            </p>
                            <p className=' text-2xl '>
                                Tuff will synthesize collected learnings in a way that’s easy for the whole team to understand and act upon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full h-auto pt-20 flex items-center flex-col">
                    <h2 className="text-[28px] text-[#0C2233] text-center mt-4 px-4 font-extrabold w-full lg:text-[42px] lg:w-[45%]">
                        Why Tuff
                    </h2>
                    <p className="text-[16px] text-center w-full px-6 font-normal text-[#0c2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[51%] lg:mt-5 lg:leading-[25px]">
                        We know how to give your unique voice a megaphone that helps the
                        right people find you and keep you top-of-mind.
                    </p>

                    <div className="w-full h-auto pt-13 px-6 sm:px-10 md:px-14 lg:px-19 flex flex-wrap flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center lg:items-start">
                        <div className="w-full lg:w-[31.5%] h-[44vh] mb-2 pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 ">
                            <img src={social} alt="Blackboard" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Paid Social
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Connect with your audience on the social platforms that matter to them.
                            </p>
                            <span>
                                <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </span>
                        </div>

                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={display} alt="Award" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Display
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Extend brand reach to your ideal customers by combining 1st Party Data, brand creative, and a spectrum of media channels.
                            </p>
                            <span>
                                <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </span>
                        </div>

                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={cro} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                CRO
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Identify the top converting user flows – and then optimize them.
                            </p>
                            <span>
                                <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </span>
                        </div>
                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={marketing} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Marketing Attribution
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Know what works and replicate that across the entire customer journey.
                            </p>
                            <span>
                                <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </span>
                        </div>
                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={content} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Content
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Create a strategy for new content creation and existing content improvement to capture demand across customer segments.
                            </p>
                            <span>
                                <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </span>
                        </div>
                        <div className="w-full lg:w-[31.5%] h-[44vh] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
                            <img src={creative} alt="List" />
                            <h2 className="text-[24px] font-bold text-[#0C2233] mt-6">
                                Creative
                            </h2>
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[25px]">
                                Test dozens of messages, monitor performance, and then adjust as needed.
                            </p>
                            <span>
                                <p className="flex mt-5 items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px]">
                                    Learn more
                                    <span>
                                        <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                                    </span>
                                </p>
                            </span>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="flex items-center justify-center pt-4">
                            <Link to="/get-started-with-tuff">
                                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#FF6A39] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                                    Let’s Talk
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className="px-18 py-12.5 flex justify-center items-center">
                    <div className="w-8/10 h-[40vh] flex flex-col items-center justify-center text-2xl">
                        <img src={stars} alt="" />
                        <h2 className='my-2.5 font-black bg-[#CEFD94]'>
                            “Tuff is an amazing team, extremely organized, and driven to produce results!
                        </h2>
                        <h2 className=' my-2.5 font-black text-center'>
                            We have churned through multiple agencies in our lifetime, and have been so impressed by Tuff.”
                        </h2>
                        <div className=" text-xl">
                            <h3 className=' font-bold text-center'>
                                Sashee Chandran
                            </h3>
                            <p>Founder and CEO at Tea Drops</p>
                        </div>
                    </div>
                </div>
            </section>
            <FinalSection text={box}/>
            <Footer />
        </>
    )
}
