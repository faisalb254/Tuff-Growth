import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Author from '../components/Author'
import pfp from "../assets/adam.jpeg"
import ScrollButton from '../components/ScrollButton'

export default function Adam() {
    const writer = {
        author: "adam",
        fullname: "Adam Fricke",
        questions: [
            {
                heading: "Authenticity: A Critical Component for Effective Ad Creative in the AI Era",
                date: "May 23, 2024/in Creative",
                para: "Renogy approached Tuff to handle all of their SEO needs for their US and international websites. Tuff had previously been creating …"
            },
            {
                heading: "The Role of Storytelling in Marketing: Connecting with Your Target Audience",
                date: "September 19, 2023/in Content Strategy, Growth Marketing",
                para: "From ancient myths passed down through generations to the latest viral TikTok trend, quality storytelling is what captures the attention …"
            },
            {
                heading: "How to Set Up an A/B Test so You Get REAL Results",
                date: "December 5, 2022/in Creative",
                para: "When analyzing ad creative, it can be hard to tell which element really makes a piece resonate with the viewer. …"
            },
            {
                heading: "Ad Creative Types That Constantly Drive Performance (Regardless of Industry)",
                date: "April 12, 2022/in Creative",
                para: "Testing, testing, testing! As a creative team tucked inside a growth agency, we throw around that word a LOT. Especially …"
            },
            {
                heading: "The 5 Main Components of Effective TikTok Ad Creative",
                date: "February 28, 2022/in Creative",
                para: "TikTok…it’s a tough nut to crack. Not only because it’s notoriously the most ephemeral channel (who, who, WHO is responsible …"
            },
            {
                heading: "So….Is That Good? The Complete Guide to Benchmarking Ad Creative",
                date: "January 3, 2022/in Uncategorized",
                para: "Does it follow the brand book? Does it speak to the right audience? Does it abide by general design principles? …"
            },
            {
                heading: "Bow Down to Data: How We Use Metrics to Dictate Creative (+ Creative Analysis Templates)",
                date: "October 26, 2021/in Creative",
                para: "“Do you make creative?” This is the question (that we got over and over again) that planted the seed that …"
            },
            {
                heading: "Conducting A Content Inventory Audit With Quartiles [Free Template]",
                date: "December 6, 2022/in SEO, Content Strategy",
                para: "As a content marketer, it’s essential to know the ins and outs of your website content in order to create …"
            },
            {
                heading: "5 Tips for Making Great (and Cost Effective) Video Ad Creative",
                date: "September 8, 2021/in Creative, Winning new customers for your startup",
                para: "In two short words, we can sum up the whole point of this article: video performs. No matter if we’re …"
            },
            {
                heading: "The Beginner’s Guide to High-Performance, Channel-Specific Ad Creative",
                date: "August 11, 2021/in Creative, Transform clicks into results",
                para: "When balancing the main components of a growth marketing tactic (strategy + targeting + creative), there comes a time when …"
            },
            {
                heading: "They WANT to Hear From You: How to Use Email Drip Campaigns to Engage Your Best Customers",
                date: "July 21, 2021/in Email Marketing Strategies, Attract more engaged customers",
                para: "If you’ve been following Tuff for truly any amount of time, you know that we have a history of taking …"
            },

        ]
    };
    return (
        <>
            <ScrollButton />
            <div className="w-full lg:fixed top-0 z-50 bg-[#5A2AFF]">
                <Navbar />
            </div>
            <section className='flex flex-col w-full items-center'>
                <div className=" w-4/5 mt-20 flex flex-col items-center text-xl text-center pb-11 mb-10">
                    <div className="">
                        <img className="h-25 w-25 rounded-full" src={pfp} alt="" />
                    </div>
                    <h1 className="font-bold text-4xl pt-5">
                        About Adam Fricke
                    </h1>
                    <p className=' my-4.5'>
                        This author has not written his bio yet. <br />
                        But we are proud to say that Adam Fricke contributed 15 entries already.
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center text-xl text-center pb-11 mb-10">
                    <span className='font-bold text-lg mb-5'>Entries by Adam Fricke</span>
                    <Author writer={writer} />
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}
