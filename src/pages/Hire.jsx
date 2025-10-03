import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Toc from '../components/Toc';
import RelatedPosts from '../components/RelatedPosts';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Banner from "../assets/hirebanner.jpg"
import ScrollButton from '../components/ScrollButton';

export default function Hire() {
    const table = ["Three Reasons You Should Hire an Agency", "Three Reasons You Should Definitely Not Hire a Growth Marketing Agency", "So, What’s The Verdict?"]
    return (
        <>
            {/* <ScrollButton/> */}
            <div className="w-full lg:fixed top-0 z-50 bg-[#5A2AFF]">
                <Navbar />
            </div>

            <section>
                <div className="px-12.5 pb-7 pt-17 bg-[#5A2AFF] text-white">
                    <div className="flex items-center ">
                        <Link to="/growth-marketing-resorces"><p className='w-17 h-4 text-[14px] mr-4 '>Rescorces</p></Link>
                        <Link to={"/blog"}><p className='w-15 h-4 text-[14px] border-l pl-3 mr-4 border-white'>Blogs</p></Link>
                        <Link to="/growth-marketing-guides"><p className='w-15 h-4 text-[14px] border-l pl-3 mr-4 border-white'>Guides</p></Link>
                        <p className='w-15 h-4 text-[14px] border-l pl-3 mr-4 border-white'><IoIosSearch /></p>
                    </div>
                </div>
            </section>
            <section className=' pt-3 flex flex-col items-center text-xl'>
                <div className="w-full md:sticky top-10  flex justify-end">
                    <Toc table={table} />
                </div>
                <div className="px-27 w-full">
                    <span className='text-[16px]'>
                        <Link className='text-[#ff6b39] font-bold'>Attract more engaged customers  </Link>
                        » You’re a Startup. Should You Hire a Growth Marketing Agency?
                    </span>
                </div>
                <div className="pt-10 w-[55%]">
                    <h1 className=' text-3xl md:text-6xl w-full font-bold text-center'>
                        You’re a Startup. Should You Hire a Growth Marketing Agency?
                    </h1>
                    <p className=' text-center'>
                        June 4, 2021/in Attract more engaged customers  / <Link to={"/adam"}>by Adam Fricke</Link>
                    </p>
                    <img className='my-2.5 py-2.5 h-auto w-full' src={Banner} alt=" banner" />
                    <p className='my-4.5'>
                        Hello, founder! If you identify as such, you’re already among our favorite types of people (along with the UPS guy and the barista with the good latte art).
                    </p>
                    <p className='my-4.5'>
                        Being a founder is a challenging, exhilarating, scrappy, rewarding, and sometimes painful endeavor. And one of the greatest strategic decisions you’re confronted with is which people are the most critical for you to have in your corner to help you navigate murky waters. Decision fatigue is a real, real thing and surrounding yourself with the right brains that have the insight, experience, compass, and know-how to help you steer your ship in the right direction can oftentimes mark the difference between success and failure.
                    </p>
                    <p className='my-4.5'>
                        So, it’s with this understanding that many fresh founders jump into our Let’s Talk form absolutely and irrevocably convinced that they need a <span className="text-[#ff6b39] font-bold"> growth marketing agency</span> to help them level up. Sometimes, we’ll hop on a <span className="text-[#ff6b39] font-bold">Discovery Call</span>, have a 30-minute conversation, and get incredibly fired up to send over a <span className="text-[#ff6b39] font-bold">Growth Marketing Proposal</span> with ideas for strategies and tactics that can put the wheels on your growth goals.
                    </p>
                    <p className='my-4.5'>
                        But truth be told, oftentimes we’ll talk to founders, hear their growth goals, and respond with a simple and unflinching “we’re not right for you.”
                    </p>
                    <p className='my-4.5'>
                        The more we have these conversations, the more the internal team at Tuff comes back together to really try to get to the root of the question: “if you’re an early-stage startup, should you hire a growth marketing agency?”
                    </p>
                    <h1 id='section-1' className='text-3xl md:text-6xl w-full font-bold mt-21'>
                        Three Reasons You Should Hire an Agency
                    </h1>
                    <p className='my-4.5'>
                        We’ve tirelessly and ceaselessly worked to build a website that is one major—and continually optimized—pitch for hiring us. Just check out the headline on <span className="text-[#ff6b39] font-bold">our homepage</span>: “Quick wins and long-term growth. No mysterious secret sauce.”
                    </p>
                    <h3 className="my-4 5 font-bold">
                        A Full, Diverse Team Has a Big-Picture Perspective
                    </h3>
                    <p className='my-4.5'>
                        When you hire a growth marketing agency, whether it’s Tuff or another like-minded growth marketing agency, the major, overarching benefit is that it (generally speaking) comes stacked with a full team that can get a holistic view of your business, collaborate to identify the best course of action, and delegate execution tasks to true channel experts.
                    </p>
                    <p className='my-4.5'>
                        We’ve structured the Tuff team around the most efficient way to identify strategic initiatives, outline tactics, execute them to a T, constantly monitor and optimize, deliver clear reports, and help you understand our (and your) actionable next steps while gleaning insights that can fuel your business growth in other ways.
                    </p>
                    <p className='my-4.5'>
                        So, again, “Quick wins and long-term growth. No mysterious secret sauce.”
                    </p>
                    <h3 className="my-4 5 font-bold">
                        Allocate and Reallocate Resources As You Learn
                    </h3>
                    <p className='my-4.5'>
                        While there are some agencies out there that charge a percentage of ad spend on a particular channel—known as <span className="text-[#ff6b39] font-bold">performance marketing agencies</span>—an agency that charges a retainer fee is built with the freedom to be adept. And as a founder, you know “adept” is the name of the game.
                    </p>
                    <p className='my-4.5'>
                        An agency team is stacked with both big-picture strategists and deeply experienced channel experts. So, here’s a scenario: you collaborate with your growth team and create your original <span className="text-[#ff6b39] font-bold">growth marketing strategy</span> around testing Google Ads, Facebook, and LinkedIn. You soon discover after a few weeks of testing and optimizing that LinkedIn is yielding a CAC that simply isn’t sustainable. A performance marketing agency might shrug and recommend reallocating the LinkedIn spend to Facebook. But a growth marketing agency like Tuff can sub in another channel expert (like on-site CRO, email, YouTube, etc.) and test a new channel without skipping a beat.
                    </p>
                    <h3 className="my-4 5 font-bold">
                        Team That’s “Been Around the Block” is Quick at Problem Solving
                    </h3>
                    <p className='my-4.5'>
                        With a diverse and deep agency team comes a wealth of resources, a large network, and a long history of experience.
                    </p>
                    <p className='my-4.5'>
                        Any growth marketer will tell you: growth isn’t linear. Nor is there any blueprint to follow. So when Facebook seems like a sure thing, then an unpredictable wrench like iOS 14 is thrown, a stacked team of social ads experts can beeline to their go-to resources, talk to other experts in their network, dig into their bag of “tricks,” and problem solve quicker and more efficiently than a generalist.
                    </p>
                    <p className='my-4.5'>
                        Additionally, especially for startups, the peaks and valleys—when it comes to revenue, leads, funding, and even general morale—can be very high and very low. A full agency team has the know-how and the insight to be able to say, “take a deep breath, we’ve seen this before, here are our actionable next steps.”
                    </p>
                    <h1 id='section-2' className='text-3xl md:text-6xl w-full font-bold mt-21'>
                        Three Reasons You Should Definitely Not Hire a Growth Marketing Agency
                    </h1>
                    <p className='my-4.5'>
                        For some founders, hiring an agency feels like a life raft: they come with the allure of having someone else, or a whole team of someone elses, to be beholden to investor pressure and growth goals. But, when your startup is moving a million miles an hour and any small decision can set off powerful reverberations across your company, stretching a thin budget to hire a full team simply doesn’t add up. The good news: there are lots of other awesome options.
                    </p>
                    <h3 className="my-4 5 font-bold">
                        A Scrappy Generalist Can Make a Bigger Mark
                    </h3>
                    <p className='my-4.5'>
                        Pulling a full-time smart marketing hustler that can squeeze the most out of a small budget and stay in lock step with everything else you have going on can be a huge asset. Plus, when you have someone in the trenches with you day in and day out, they’ll simply understand your business better than any agency could.
                    </p>
                    <p className='my-4.5'>
                        The caveat: it’s much, much easier to hire and subsequently part ways with an agency team. It happens more often than you think. (Side note, pro tip: look for agencies that don’t lock you into contracts). So when you hire someone to become part of your team, doing your due diligence and making sure they come with enough varied experience to make an impact over time is truly critical.
                    </p>
                    <h3 className="my-4 5 font-bold">
                        Most Agencies Aren’t Designed To Go From 0-60 (or 6,000)
                    </h3>
                    <p className='my-4.5'>
                        Simply, founders and startups who are in pre-launch stages have a LOT to learn. No matter how many user surveys you do, beta testers you work with, incubators you participate in, or mentors you have, growth isn’t linear. Nor is there any blueprint to follow. (Yes, I’m repeating myself).
                    </p>
                    <p className='my-4.5'>
                        Before you consider growth marketing, consider your stage. Are you still searching for traction? Paid acquisition channels might not be the right move. Instead, getting scrappier with influencers, networking, PR, and organic marketing can help you learn a lot (and quickly) without dropping bigger budgets on ad spend.
                    </p>
                    <p className='my-4.5'>
                        Plus, once you’re on the other side of your launch or you’ve found some sustainable traction, you’ll be able to get much more efficient with spend and make a much more significant impact.
                    </p>
                    <h3 className="my-4 5 font-bold">
                        There are Options Like Growth Guide
                    </h3>
                    <p className='my-4.5'>
                        When it all comes down to it, you’re in charge of your own destiny. That’s why we created Growth Guide. Instead of clicking into your business as a full growth marketing team (<span className="text-[#ff6b39] font-bold">we typically do</span>), we designed a two-month training program that provides founders with structured, in-depth courses on topics ranging from strategically choosing acquisition channels, to setting smart growth goals, to getting deep in the weeds with channel optimizations, and more. Each are taught by a seasoned Tuff expert. We also include weekly workshops on a variety of growth topics and tactical hours to give you hands-on help.
                    </p>
                    <p className='my-4.5'>
                        While Growth Guide certainly isn’t the only way to learn how to take growth marketing into your own hands as a founder, it is the only one (we’ve found!) that includes real hands-on help and heavy oversight to make sure you’re set off on the right path to traction, scalability, and beyond.
                    </p>
                </div>
            </section>
            <section className='flex justify-center text-xl'>
                <div className="pt-10 w-[55%]">
                    <h1 id='section-3' className='text-3xl w-full font-bold '>
                        So, What’s The Verdict?
                    </h1>
                    <p className='my-4.5'>
                        The ultimately frustrating (but only true) response: it depends. But, we’ve worked hard to help fledgling founders, <span className="text-[#ff6b39] font-bold">startups</span>, and <span className="text-[#ff6b39] font-bold">scale ups</span>, find pathways to real, sustainable growth.
                    </p>
                    <p className='my-4.5'>
                        Think you’re ready to enlist Tuff’s help?<span className="text-[#ff6b39] font-bold"> Let’s talk</span>
                    </p>

                </div>
            </section>
            <RelatedPosts />
            <Newsletter />
            <section>
                <Footer />
            </section>
        </>
    )
}
