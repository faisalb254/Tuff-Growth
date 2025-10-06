import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import Faq from '../components/Faq'
import img1 from '../assets/youtubeimg1.png'
import img2 from '../assets/youtubeimg2.png'
import img3 from '../assets/youtubeimg3.png'
import img4 from '../assets/youtubeimg4.png'
import chart from '../assets/youtubechart.svg'
import stars from '../assets/stars.svg'
import shovel from '../assets/shovel.svg'
import heart from '../assets/heart.svg'
import koji from '../assets/koji.svg'
import personicon from '../assets/personbox.svg'
import { BiCheck, BiChevronRight } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Youtube() {
    const box = {
        heading: "Ready to supercharge your YouTube campaigns?",
        para: ["Showcase what makes you great with help from our experienced YouTube Ads agency team."],
        button: "Let's Talk"
    }
    const faqs = [
        {
            question: "What is a YouTube marketing agency?",
            answer:
                [
                    {
                        para: "Whether you’re embarking on your maiden YouTube campaign or seeking to enhance and expand your existing initiatives, collaborating with a seasoned agency can significantly expedite your progress. Partnering with a YouTube ads agency, such as Tuff, offers a multitude of services designed to empower clients in harnessing the platform’s marketing potential.",
                        type: "para"
                    },
                    {
                        para: "These encompass video production, audience growth strategies, predictive analysis, meticulous campaign strategizing, day-to-day campaign oversight, custom reporting, and a variety of other valuable services. With our extensive experience in navigating the intricate YouTube landscape, adeptly adapting to algorithm shifts, and deploying successful strategies, we are well-equipped to help our clients realize their marketing goals on this dynamic platform.",
                        type: "para"
                    }
                ],
        },
        {
            question: "Are YouTube ads effective at driving conversions? ",
            answer:
                [
                    {
                        para: "It’s crucial to grasp YouTube’s role within your overall media strategy to achieve strong outcomes on the platform. By considering your target audience and their varying levels of intent, YouTube can prove highly effective in boosting brand awareness and driving increased traffic to your website. Furthermore, for certain brands, YouTube can serve as a significant driver of last-click conversions on a large scale. Whether you’re utilizing the platform for brand visibility, performance, or a combination of both, having a well-defined measurement framework is imperative to gauge both campaign and marketing effectiveness.",
                        type: "para"
                    },
                    {
                        para: "In assessing the effectiveness of your YouTube campaigns at the top of the funnel, you’ll rely on key metrics such as CPV (Cost Per View) and impressions. You’ll also gauge overall brand lift and monitor any upticks in conversions stemming from direct and organic traffic. For evaluating YouTube campaign performance at the bottom of the funnel, especially when optimizing for conversions, you’ll examine metrics like conversion volume originating from YouTube. In addition, you’ll pay close attention to figures like CPC (Cost Per Click), CTR (Click-Through Rate), and CPA (Cost Per Acquisition).",
                        type: "para"
                    },

                ],
        },
        {
            question: "Does Tuff manage other channels or just YouTube? ",
            answer: [
                {
                    para: "Our team is actively overseeing campaigns on a wide array of platforms. When we craft channel selections and media plans for our clients, we meticulously consider their objectives, budget, and audience targeting. This thoughtful approach ensures that we curate the perfect blend of channels to cater to every stage of the customer journey. In addition to our proficiency in YouTube, Tuff is dedicated to the management and creation of ad content across numerous platforms, including Google Ads, TikTok, Reddit, Quora, Programmatic, Bing, Meta, and more. While we’re certainly capable of optimizing YouTube campaigns, our services extend beyond YouTube alone, encompassing comprehensive media strategy and management to meet our clients’ diverse marketing needs.",
                    type: "para"
                },
            ]
        },
        {
            question: "How important are video assets for YouTube ads?",
            answer:
                [
                    {
                        para: "To view a sample of YouTube creatives produced by the Tuff team, check out this YouTube ads",
                        type: "para"
                    },
                    {
                        para: "creative library here.",
                        type: "link"
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
                <div className="VideoLine w-full flex justify-center items-center pt-5 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className=' text-4xl md:text-6xl font-black my-5'>
                                Your YouTube Ads Agency
                            </h1>
                            <p className=' text-xl my-5'>
                                Fully managed YouTube ads strategy and execution from a team of media, data, and creative experts.
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
                <div className=" w-full flex justify-center items-center pt-5 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-black ">
                            <h1 className=' text-5xl font-black my-5'>
                                Video is no longer a nice option – it’s a necessity.
                            </h1>
                            <p className=' text-xl my-5'>
                                We have helped build and manage campaigns on YouTube for companies of nearly every size, vertical, and business model. By digging into the data surrounding your audience, we select the right ad formats for your business. Then, our in-house creative team and YouTube specialists work with you to create original, authoritative videos that get people to drive brand visibility, traffic, and overall conversion lift.
                            </p>
                            <span className=' flex text-xl font-black hover:text-[#FF6A39] tilt-zoom'>
                                Learn more about our Video Marketing services
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
                <div className="w-full flex justify-center items-center py-20 creline">
                    <div className="w-9/10 flex flex-col justify-center items-center gap-10 text-white">
                        <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full text-black'>
                            Case Studies
                        </span>
                        <h1 className=' text-5xl font-black my-5'>
                            Proof? We got it.
                        </h1>
                        <p className=' text-xl w-full md:w-1/2 text-center'>
                            From big wins out the gate to strategic, measured long-term results, we couldn’t be more excited to talk about our clients’ successes.
                        </p>
                        <div className="flex gap-5 text-2xl font-black">
                            <span className={` border-b-2 border-transparent cursor-pointer`}>
                                Koji
                            </span>
                            <span className={`border-b-2 border-transparent cursor-pointer`}>
                                Sabio
                            </span>
                            <span className={`border-b-2 border-transparent cursor-pointer`}>
                                Genomelink
                            </span>
                        </div>
                        <div className=" border-2 border-[rgb(255_255_255_/_15%)]   bg-[rgb(255_255_255_/_15%)] py-6 px-9 w-full flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 text-xl">
                                <img src={koji} alt="" />
                                <h3 className=' font-black my-5'>
                                    Koji is a digital storefront that makes it easy to sell to your audience through social media.
                                </h3>
                                <p className=' my-5'>
                                    Focusing on a Brand Awareness campaign optimized for efficient reach, we wanted low CPMs to get in front of as many eyeballs as possible. Targeting our Custom Intent audiences, we built around keywords and other factors. Here were the the results below after just TWO weeks of performance:
                                </p>
                                <div className='w-fit my-5 transition-all duration-200 cursor-pointer tilt-zoom hover:text-[#FF6a39] flex items-center gap-5'>
                                    Read More
                                    <BiChevronRight />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <img src={chart} alt="" />
                                <p className=' font-black my-10'>
                                    Organic leads saw an 81% increase compared to the average volume for the previous 4 months. We saw both brand lift and conversion lift.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="w-full flex justify-center items-center py-20">
                    <div className="w-9/10 flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-1/2">
                            <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                                KNOWLEDGE BASE
                            </span>
                            <h1 className=' text-5xl font-black my-5'>
                                Check out recent YouTube articles and case studies on the Tuff blog.
                            </h1>
                            <p className=' text-xl'>
                                After being the go-to YouTube agency for brands for the last 5 years, we’ve learned a thing or two about what works.
                            </p>
                            <ul className=' text-[16px] my-5'>
                                <li className=' flex items-center gap-2.5 my-2.5 bg-[#FF6A39] tilt-zoom px-2.5'>
                                    <strong><FaLink /></strong>
                                    Proving ROI on YouTube Awareness Campaigns for B2C SaaS brand
                                </li>
                                <li className=' flex items-center gap-2.5 my-2.5 bg-[#FF6A39] tilt-zoom px-2.5'>
                                    <strong><FaLink /></strong>
                                    Beyond Views: Understanding the Different Metrics for Measuring YouTube Ad Success
                                </li>
                                <li className=' flex items-center gap-2.5 my-2.5 bg-[#FF6A39] tilt-zoom px-2.5'>
                                    <strong><FaLink /></strong>
                                    Developing A Youtube Ads Strategy for Brand Awareness & Performance
                                </li>
                                <li className=' flex items-center gap-2.5 my-2.5 bg-[#FF6A39] tilt-zoom px-2.5'>
                                    <strong><FaLink /></strong>
                                    How Much Do YouTube Ads Cost? We Spent $500,000 To Find Out
                                </li>
                                <li className=' flex items-center gap-2.5 my-2.5 bg-[#FF6A39] tilt-zoom px-2.5'>
                                    <strong><FaLink /></strong>
                                    How To Build a YouTube Ad Strategy From Scratch
                                </li>
                                <li className=' flex items-center gap-2.5 my-2.5 bg-[#FF6A39] tilt-zoom px-2.5'>
                                    <strong><FaLink /></strong>
                                    Non-Branded Custom Intent Targeting on YouTube: Cut Your CPCs by 50%
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section >
                <div className="md:px-18 py-12.5 flex justify-center items-center Croline2">
                    <div className="w-8/10 min-h-80 flex flex-col items-center justify-center text-2xl">
                        <h2 className='w-full  text-center my-4.5 font-black  '>
                            <span className='bg-[#CEFD94]'>
                                “The entire Tuff team is amazing, which is no surprise because their leadership is exceptional.
                            </span>
                        </h2>
                        <h2 className=' my-4.5 font-black text-center text-white'>
                            They are always thinking of strategic ways to improve and always have the best interest of their clients in mind.”
                        </h2>
                        <div className=" text-xl text-white my-4.5 flex flex-col justify-center items-center text-center">
                            <img src={stars} alt="" />
                            {/* <img className='w-2/5' src={michael} alt="" /> */}
                            <h3 className=' font-bold text-center'>
                                Liliana Aide Monge
                            </h3>
                            <p>Co-founder, Sabio</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center py-20">
                    <div className="w-9/10 flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-1/2">
                            <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                                Principles of YouTube Success
                            </span>
                            <h1 className=' text-5xl font-black my-5'>
                                Check out recent YouTube articles and case studies on the Tuff blog.
                            </h1>
                            <p className=' text-xl'>
                                After being the go-to YouTube agency for brands for the last 5 years, we’ve learned a thing or two about what works.
                            </p>
                            <ul className=' text-xl my-5'>
                                <li className=' flex items-center gap-2.5 my-2.5'>
                                    <strong><FaRegCheckCircle /></strong>
                                    Deep understanding of your best audience segments
                                </li>
                                <li className=' flex items-center gap-2.5 my-2.5'>
                                    <strong><FaRegCheckCircle /></strong>
                                    Proper campaign structure and campaign type
                                </li>
                                <li className=' flex items-center gap-2.5 my-2.5'>
                                    <strong><FaRegCheckCircle /></strong>
                                    Youtube-specific assets with the right hook for each audience segment
                                </li>
                                <li className=' flex items-center gap-2.5 my-2.5'>
                                    <strong><FaRegCheckCircle /></strong>
                                    Clear user funnels and product flow
                                </li>
                                <li className=' flex items-center gap-2.5 my-2.5'>
                                    <strong><FaRegCheckCircle /></strong>
                                    Correct measurement framework, bespoke reporting, and analytics
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={img3} alt="" />
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

            <section>
                <div className="w-full flex justify-center items-center py-20">
                    <div className="w-9/10 flex flex-col justify-center items-center gap-5">
                        <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                            Why Tuff
                        </span>
                        <h2 className=' text-5xl font-black'>
                            Why work with us
                        </h2>
                        <div className="w-full text-xl flex flex-col md:flex-row gap-10 justify-center items-center">
                            <div className="w-full md:w-1/3 p-7.5 border-2 border-[rgb(0_0_0_/_12%)] h-[550px] md:h-[460px] flex flex-col gap-5">
                                <img src={shovel} alt="" className=" w-1/5" />
                                <h2 className=' text-2xl font-black'>
                                    Flexible & Scalable
                                </h2>
                                <p>
                                    Our unique operating model allows us to be flexible based on your needs. The way our process functions at Tuff allows us to seamlessly sub in new services or team members to try something new based on the current company stage and strategy.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 p-7.5 border-2 border-[rgb(0_0_0_/_12%)] h-[550px] md:h-[460px] flex flex-col gap-5">
                                <img src={heart} alt="" className=" w-1/5" />
                                <h2 className=' text-2xl font-black'>
                                    Flexible & Scalable
                                </h2>
                                <p>
                                    Our unique operating model allows us to be flexible based on your needs. The way our process functions at Tuff allows us to seamlessly sub in new services or team members to try something new based on the current company stage and strategy.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 p-7.5 border-2 border-[rgb(0_0_0_/_12%)] h-[550px] md:h-[460px] flex flex-col gap-5">
                                <img src={personicon} alt="" className=" w-1/5" />
                                <h2 className=' text-2xl font-black'>
                                    Experience & Expertise
                                </h2>
                                <p>
                                    Our paid media experts have on average 10 years experience—we know how to run ads, especially when it comes to YouTube.
                                </p>
                                <p>
                                    When you need to pivot or the data tells you to go in another direction we’re able to take you there faster than anyone else.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <FinalSection text={box} />
            <Footer />
        </>
    )
}

