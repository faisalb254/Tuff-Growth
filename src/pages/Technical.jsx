import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
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

import { BiChevronRight } from "react-icons/bi";
import bingimglast from '../assets/bingimglast.svg'


import { Link } from 'react-router-dom'

export default function Technical() {
    const box = {
        heading: "We’d love to work with you.",
        para: ["We partner with small, dedicated teams to build intentional and sustainable growth. Let’s level up your technical SEO together. Schedule time with us today and we’ll analyze your website and present your top growth opportunities in a technical SEO strategy session."],
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
    const faqs = [
        {
            question: "What is technical SEO services?",
            answer:
                [
                    {
                        para: "In our perspective, Technical SEO aims to enhance your website’s technical components to facilitate a better understanding and more effective ranking by search engines. This ultimately results in improved search performance and an enhanced user experience.",
                        type: "para"
                    },
                    {
                        para: "Our technical SEO services encompass various crucial elements, such as evaluating website speed, ensuring mobile compatibility, assessing site structure and XML sitemaps, configuring the robots.txt file to control page crawling, securing HTTPS connections, overseeing canonical tags, implementing structured data (schema markup), and more.",
                        type: "para"
                    },
                    {
                        para: "OOur team starts with a comprehensive technical SEO audit to pinpoint significant issues and identify organic growth opportunities. We then consider keyword priorities and on-page optimizations to compile a list of priority enhancements based on their potential impact. These changes can be implemented directly on your website, with ongoing performance monitoring, or prepared for your developers to execute.",
                        type: "para"
                    },
                ],
        },
        {
            question: "How much does a technical SEO agency charge?",
            answer:
                [
                    {
                        para: "Technical SEO projects vary according to a company’s objectives, website, and internal team. To offer a rough estimate from Tuff, monthly SEO retainers can start at a few hundred dollars for startups with modest requirements and go up to several thousand dollars for larger companies with extensive needs. For one-time projects or audits, we determine a project fee based on the website’s page count and the intricacy of the work.",
                        type: "para"
                    },
                    {
                        para: "In broad terms, fundamental SEO services such as on-page optimization and keyword research tend to be more budget-friendly compared to comprehensive SEO strategies encompassing technical SEO, content development, link building, and continuous upkeep.",
                        type: "para"
                    },
                ],
        },
        {
            question: "Should I hire an SEO agency?",
            answer: [
                {
                    para: "Selecting the appropriate agency partner, whether for technical SEO or any growth-related objectives, stands as a pivotal step in achieving the desired outcomes.",
                    type: "para"
                },
                {
                    para: "Selecting the appropriate agency partner, whether for technical SEO or any growth-related objectives, stands as a pivotal step in achieving the desired outcomes.",
                    type: "para"
                },
                {
                    para: "And while engaging an SEO agency proves beneficial for numerous businesses, it doesn’t constitute a universal solution. Alternatively, you can explore the option of skilled contractors or freelancers for smaller websites or immediate problem-solving. In such cases, you may assume a more active role in management and guidance, which can be suitable when your technical SEO requirements are relatively straightforward.",
                    type: "para"
                },
                {
                    para: "Ultimately, the decision of whether to engage an SEO agency hinges on your individual circumstances, objectives, and available resources.",
                    type: "para"
                },
            ]
        },
        {
            question: "What distinguishes Tuff from other technical SEO agencies? ",
            answer:
                [
                    {
                        para: "Tuff stands out among technical SEO agencies due to our dedication to delivering long-term, high-quality results. Unlike some SEO agencies that focus solely on quick wins, we believe in the value of a comprehensive, data-driven approach. Our technical SEO audits are meticulously conducted to uncover deep-seated issues and potential growth opportunities. Our team of seasoned SEO professionals collaborates closely with partners to devise and implement tailored strategies aimed at significantly enhancing organic search performance over the long term.",
                        type: "para"
                    },

                ]
        },
        {
            question: "How do Tuff’s technical SEO specialists stay ahead in the ever-evolving SEO landscape? ",
            answer:
                [
                    {
                        para: "The SEO landscape is constantly evolving with frequent algorithm updates and new best practices. At Tuff, our technical SEO specialists are committed to staying ahead of the curve through continuous learning and adaptation. We invest in ongoing training, attend industry conferences, and engage with the SEO community to stay updated on the latest trends and technologies. This proactive approach enables us to provide our partners with up-to-date technical SEO expertise that yields tangible results, making us a reliable SEO partner for businesses looking to improve their online presence and achieve long-term growth.",
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
                <div className="VideoLine w-full flex justify-center items-center pt-45 pb-10 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                TECHNICAL SEO EXPERTS
                            </span>
                            <h1 className=' text-6xl font-black my-5'>
                                Tuff Growth: Technical SEO Agency
                            </h1>
                            <p className=' text-xl my-5'>
                                Optimize the infrastructure of your website and give your content the best chances to rank for relevant keywords with a strong technical SEO foundation.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
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
                <div className=" w-full flex justify-center items-center py-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10 ">
                        <div className="w-full md:w-1/2  ">
                            <h1 className='text-4xl font-black my-5'>
                                Tuff is your technical SEO agency.
                            </h1>
                            <p className=' text-xl my-5'>
                                Help search engines access, crawl, interpret, and index your website with technical SEO tactics that make a difference. We’ll help you build a strong technical foundation and rise to the top of search results pages with help from our experienced technical SEO team
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
                                    Help search engines access, crawl, interpret, and index your website with technical SEO tactics that make a difference. We’ll help you build a strong technical foundation and rise to the top of search results pages with help from our experienced technical SEO team.
                                </p>
                            </div>
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 md:w-96 ">
                                <img className=' w-12.5 h-12.5' src={signal2} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    After Tuff
                                </h2>
                                <p className=' text-xl my-4 text-[#0c2233]'>
                                    Technical factors are addressed to improve crawlability and rankings, prioritized technical SEO execution, daily communication, results delivered, progress is clear, and a sense of trust sets in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full pb-7.5 flex flex-col justify-center items-center gap-3">
                    <h1 className=' w-2/3 text-5xl font-black text-center'>
                        Download a Sample Growth Marketing Proposal
                    </h1>
                    <p className=' text-xl w-2/3 text-center'>
                        Fueled with the information you share with us in a 30-minute discovery call, and the accounts we get access to after, we put together a growth marketing proposal for us to review together that highlights where we think the biggest opportunities are.
                    </p>
                    <form className=' py-2.5 flex flex-col md:flex-row gap-3' action="">
                        <input id='1' name='firstname' className=' text-black rounded-sm py-2 px-4 bg-white border border-black focus:outline-none focus:ring-0 ' placeholder='First Name' type="text" required />
                        <input id='2' name='lastname' className=' text-black rounded-sm py-2 px-4 bg-white focus:outline-none border border-black focus:ring-0 ' placeholder='Last Name' type="text" required />
                        <input id='3' name='workemail' className=' text-black rounded-sm py-2 px-4 bg-white focus:outline-none focus:ring-0 border border-black' placeholder='Word Email' type="text" required />
                        <button className='text-black py-2 px-4 bg-[#CEFD94] rounded-sm w-40 cursor-pointer'>
                            Access Now
                        </button>
                    </form>
                </div>
            </section>


            <section>
                <div className="w-full flex justify-center items-center text-white technicalbg py-20">
                    <div className="w-9/10 flex flex-col md:flex-row gap-5">
                        <div className="w-1/2">
                            <h1 className=' font-black text-5xl'>
                                We’ve got the right tricks, tools, and tactics to help improve your technical SEO performance.
                            </h1>
                        </div>
                        <div className="w-1/2 flex flex-wrap gap-5 ">
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Structured Data Markup
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Heat Map Testing
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Robots.txt Files
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Image Optimization
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Backlink Analysis
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Mobile Optimization
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Redirect Implementation
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Redirect Implementation
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Automated bid strategies
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Site Speed  Optimization
                            </span>
                            <span className='w- px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                                Google Search Console Reports
                            </span>

                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className=" w-full flex justify-center items-center pt-50 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2  ">
                            <h1 className=' text-4xl font-black my-5'>
                                Team up with our growth marketers and deep squad of SEO specialists to unfurl your best, data-forward path to organic growth.
                            </h1>
                            <p className=' text-xl my-5'>
                                We’re ruthless with data, results, and prioritization. Our technical SEO audit process will help you identify technical issues that are affecting the website’s search engine rankings, user experience, and overall performance. By addressing these issues, we will improve the website’s visibility, attract more organic traffic, and ultimately achieve high rankings on key terms.
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
                <div className="w-full flex justify-center items-center py-20 bg-[#0c2233]">
                    <div className="w-9/10 flex flex-col justify-start items-center gap-10 text-white">
                        <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                            Process
                        </span>
                        <h2 className=' w-5/6 text-5xl font-black text-center'>
                            Decades of technical SEO knowledge. Packed into 30/60/90 day implementation sprints.
                        </h2>
                        <img src={chart} alt="" />
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
                                <div className="w-1/2 flex flex-col gap-5 ">
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
                                <div className="w-1/2 flex flex-col gap-5">
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
                <div className="w-full flex justify-center items-center flex-col">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-center text-[#0C2233] ">
                        FAQs
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
