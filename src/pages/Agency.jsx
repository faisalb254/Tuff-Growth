import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Toc from '../components/Toc';
import RelatedPosts from '../components/RelatedPosts';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Banner from "../assets/agencybanner.jpg"
import Chart from "../assets/agencychart.png"


export default function Agency() {
    const table= ["What is a growth marketing agency?", "What is a growth marketing channel?", "What is growth marketing strategy?", "What does a growth marketer do?", "What does growth marketing mean to Tuff?"]
  return (
    <>
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
            <Toc table={table}/>
        </div>
        <div className="px-27  w-full">
            <span className='text-[16px]'>
                What is a Growth Marketing Agency?
            </span>
        </div>
        <div className="pt-10 w-[55%]">
            <h1  className='text-3xl sm:text-6xl w-full font-bold text-center'>
                What is a Growth Marketing Agency?
            </h1>
            <p className='text-xl text-center'>January 29, 2021/in Growth Marketing, Attract more engaged customers / <Link to={"/author/adam"}>by Adam Fricke</Link></p>
            <img className='my-2.5 py-2.5 h-auto w-full' src={Banner} alt=" banner" />
            <p>Picture this: you’re a founder or startup. You have product-market fit, your revenue has been steadily climbing as referrals from happy customers or clients do their thing. But you have aggressive growth plans and just aren’t quite sure if you should start with Facebook ads, a strong blog game, or affiliate marketing. You’ve also seen those amazing success stories about <span className="text-[#ff6b39] font-bold">TikTok</span> and <span className='text-[#ff6b39] font-bold'>YouTube ads</span> …but how do you know if it’s a safe bet for you?</p>
            <p className='my-4.5'>Enter: a growth marketing agency.</p>
            <div className="mt-21 mb-4.5">
                <h1 id='section-1' className='text-3xl sm:text-6xl w-full font-bold '>
                    What is a growth marketing agency?
                </h1>
                <p className=" my-4">
                    A <span className='text-[#ff6b39] font-bold'>growth marketing agency</span> helps organizations of all sizes create a marketing foundation with a strategic vision, a clear roadmap, and the ability to execute. Testing, optimizing, and testing again, we incrementally set and achieve tangible company growth goals, learning about what works and what we should ditch. And we do it all until you’re ready to hire in-house.
                </p>
                <p className="my-4">
                    Simple. Sort of. The catch is that while most growth marketing agencies have partnered with dozens of companies and have experience in a wide variety of channels, there’s no such thing as a growth marketing blueprint. Meaning, even if <span className='text-[#ff6b39] font-bold'>LinkedIn</span> has driven strong results for every B2B business we’ve ever partnered with, there’s absolutely no guarantee it’s going to work with the next one that walks through our proverbial doors.
                </p>
                <p className='my-4'>
                    At its core, a growth marketing agency comes with deep experience, hustle, and a scientific approach, but a healthy dose of “humble,” or a strong understanding that the first gut instinct might not work. What separates the great growth marketing agencies from the rest is the ego-less quick pivot and boundless energy and curiosity to find what works.
                </p>
            </div>
            <div className="mt-21 mb-4.5">
                <h1 id='section-2' className='text-3xl sm:text-6xl w-full font-bold '>
                    What is a growth marketing channel?
                </h1>
                <p className=" my-4">
                    A growth marketing channel is essentially the way people hear about you for the first time. 
                </p>
                <p className="my-4">
                    Zoom out far enough and it seems as though there’s a nearly infinite number of growth marketing channels. <span className='text-[#ff6b39] font-bold'>The quick-hitter core list</span>: Google, Facebook, LinkedIn, YouTube, Twitter, Bing, and TikTok. By no means is this list exhaustive, or even close to it, but it comprises the go-to channels that most growth marketers will put at the center of their strategies (at least until testing proves otherwise). The most important and fundamental thing to understand about growth marketing channels: not all channels are created equal. 
                </p>
            </div>
            <div className="mt-21 mb-4.5">
                <h1 id='section-3' className='text-3xl sm:text-6xl w-full font-bold '>
                    What is growth marketing strategy?
                </h1>
                <p className=" my-4">
                    A growth strategy is rigorous prioritization. It’s a high-level roadmap of all the channels and corresponding tactics you plan to execute to find the fastest, most efficient path to growth.  
                </p>
                <img src={Chart} alt="" />
                <p className="my-4">
                    It’s extremely important to note that a growth marketing strategy is by no means set in stone. Even if we know that TikTok has generated a low customer acquisition cost for many health and beauty industry clients we’ve worked with and read case studies about—so much so it’s at the top of our list—it’s never untouchable. A good growth strategy allows for evolution and changes over time. For example, if we were to begin to collect data, test a number of different audiences and tactics, and in the end, discover that our own TikTok campaigns are underperforming compared to the other two or three channels and tactics we’re trying, it’s axed. 
                </p>
                <p className="my-4">
                    A growth strategy is critical for companies looking to grow quickly and efficiently. With a growth strategy, we have a plan in place for systematically getting to work every day on the things that have the highest impact on your revenue. 
                </p>
                <p className="my-4">
                    Far too often founders or startups come to us already attempting to do too many things at once without truly attempting to understand their impact.
                </p>
                <p className="my-4">
                   Building a growth strategy helps us be extremely intentional about how to invest limited time and resources. It ensures we stay laser-focused on only the opportunities with the highest likelihood of producing meaningful results.
                </p>
            </div>
            <div className="mt-21 mb-4.5">
                <h1 id='section-4' className='text-3xl sm:text-6xl w-full font-bold '>
                    What does a growth marketer do?
                </h1>
                <p className=" my-4">
                    A growth marketer is at the helm of this ship. With guidance from the leadership team—often the founder themselves—the growth marketer creates a growth strategy that is actionable, goal-oriented, and laser focused on revenue.
                </p>
                <p className="my-4">
                    Then, executing themselves, or rallying a team of experts, a growth marketer is responsible for ensuring that everyone is on the same page, moving in the same direction, and that channels or tactics that are underperforming get optimized, restructured, or tossed out. 
                </p>
            </div>
            <div className="mt-21 mb-4.5">
                <h1 id='section-5' className='text-3xl sm:text-6xl w-full font-bold '>
                    What does growth marketing mean to Tuff?
                </h1>
                <p className=" my-4">
                    Here at Tuff we’d never claim to have some mysterious or special back-pocket tricks or secret sauce. Our formula is simple: finding the right balance of quick wins and long-term growth. And we never take our eyes off revenue: that’s our guiding light. Even if a channel is driving colossal amounts of traffic, if it isn’t converting, it’s on the chopping block 
                </p>
                <p className="my-4">
                    Arguably most importantly of all, we show our work. We walk our clients through every tactic we try and help them understand why we choose each channel. 
                </p>
                <p className="my-4">
                    Every time we fire up a partnership with a new client, it’s always defined by:
                </p>
            </div>
        </div>
    </section>
    <section className='pt-3 flex flex-col items-center text-xl w-full'>
        <div className="w-[55%]">
            <ul className=' list-disc pl-8'>
                <li className='mt-5'>Meeting consistently in small teams of two to four (always with a Growth Marketer in addition to one or more channel experts)</li>
                <li className='mt-5'>With weekly or bi-weekly team meetings</li>
                <li className='mt-5'>Following our <span className='text-[#ff6b39] font-bold'>growth framework</span></li>
                <li className='mt-5'>With consistent communication</li>
                <li className='mt-5'>Focused on shared goals</li>
                <li className='mt-5'>With rock solid execution</li>
            </ul>
            <p className="my-4">
               Think you might be in need of a growth marketing agency to level up your business and start showing the revenue you know you’re capable of? <span className='text-[#ff6b39] font-bold'>Let’s talk.</span>
             </p>
        </div>
    </section>
    <RelatedPosts/>
    <Newsletter/>
    
    <section>
      <Footer/>
    </section>
    </>
  )
}
