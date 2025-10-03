import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import jamie from "../assets/jamieicon.png"
import landy from "../assets/landyicon.png"
import brad from "../assets/bradicon.png"
import michael from "../assets/michaelicon.png"
import sashee from "../assets/sasheeicon.png"
import jordan from "../assets/jordanicon.png"
import laurens from "../assets/laurensicon.png"
import liliana from "../assets/lilianaicon.png"
import img1 from "../assets/sampleimg1.svg"
import stars from "../assets/stars.svg"

import { Link } from 'react-router-dom'

export default function Sample() {
    const box = {
        heading: "Ready to grow?",
        para: ["Your compounding growth curve begins here."],
        button: "Book a Strategy Call"
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
                    font: "font-black",
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
                <div className="w-full  samplebg pb-7.5 flex flex-col justify-center items-center text-white gap-3">
                    <h1 className=' w-2/3 text-5xl font-black text-center'>
                        Download a Sample Growth Marketing Proposal
                    </h1>
                    <p className=' text-xl w-2/3 text-center'>
                        Fueled with the information you share with us in a 30-minute discovery call, and the accounts we get access to after, we put together a growth marketing proposal for us to review together that highlights where we think the biggest opportunities are.
                    </p>
                    <form className='h-18 py-2.5 flex flex-col md:flex-row gap-3' action="">
                        <input id='1' name='firstname' className=' text-black rounded-sm py-2 px-4 bg-white focus:outline-none focus:ring-0 focus:border-transparent' placeholder='First Name' type="text" required />
                        <input id='2' name='lastname' className=' text-black rounded-sm py-2 px-4 bg-white focus:outline-none focus:ring-0 focus:border-transparent' placeholder='Last Name' type="text" required />
                        <input id='3' name='workemail' className=' text-black rounded-sm py-2 px-4 bg-white focus:outline-none focus:ring-0 focus:border-transparent' placeholder='Word Email' type="text" required />
                        <button className='text-black py-2 px-4 bg-[#CEFD94] rounded-sm w-40 cursor-pointer'>
                            Access Now
                        </button>
                    </form>
                </div>
            </section>
            <section>
                <div className="py-12.5 flex justify-center items-center ">
                    <div className="w-8/10 flex flex-col lg:flex-row gap-3">
                        <div className="w-1/2">
                            <img src={img1} alt="" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-start gap-3">
                            <h1 className=' text-4xl font-black'>
                                What’s Inside
                            </h1>
                            <p className=' text-xl'>
                                This proposal gives details on how we execute tactics, our prioritization process, and what working together looks like.
                            </p>
                            <p className=' text-xl'>
                                While every client has unique goals and marketing needs, this sample proposal should give you insight into how we partner with clients to deliver meaningful results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col justify-start items-center gap-4 w-full">
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
            <FinalSection text={box} />
            <Footer />
        </>
    )
}
