import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pfp from "../assets/resultblogpfp.jpeg"
import Author from '../components/Author'


export default function Hannah() {
  const writer = {
        author:"hannah",
        fullname:"Hannah Burks",
        questions:[
        {
            heading:"Balancing Brand and Performance in Your Creative Strategy",
            date: "November 11, 2024/in Creative",
            para:"Growing a successful brand means balancing long-term trust with short-term results. Brand marketing builds relationships and loyalty, while performance …"
        },
        {
            heading:"Brave New Cookieless World: 8 Strategies for Marketers",
            date: "January 23, 2024/in Paid Media",
            para:"*WARNING: The shift to a cookieless world is imminent.* Cookies—those pieces of data that anonymously store user information online—have long …"
        },
        {
            heading:"Optimizing Your Content Marketing Strategy for High-Quality Lead Generation",
            date: "June 22, 2023/in Content Strategy",
            para:"Content marketing strategy for lead generation is just a fancy way of saying “What should we write to get people …"
        },
        {
            heading:"How Performance Creative Generates Bold, Actionable Results for Growth Marketing",
            date: "January 9, 2023/in Creative",
            para:"Performance creative challenges marketers to dig deep into what makes ads “work” better than others. Through deliberate testing and tweaking …"
        }
    ]
    };
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#5A2AFF]">
        <Navbar />
      </div>
      <section className='flex flex-col w-full items-center'>  
        <div className=" w-4/5 mt-20 flex flex-col items-center text-xl text-center pb-11 mb-10">
          <div className="">
            <img className="h-25 w-25 rounded-full" src={pfp} alt="" />
          </div>
          <h1 className="font-bold text-4xl pt-5"> 
            About Hannah Burks
          </h1>
          <p className=' my-4.5'>
          Hey! I'm HB, the Head of Operations at Tuff. With a decade of experience across marketing and web, I specialize in complex problem-solving, strategic planning, and organic acquisition. My focus is on facilitating client growth, supporting our creative teams, and consistently improving efficiency across our org. Let's chat!
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center text-xl text-center pb-11 mb-10">
          <span className='font-bold text-lg mb-5'>Entries by Hannah Burks</span>
          <Author writer={writer}/>
        </div>
      </section> 
      <section>
        <Footer/>
      </section>
    </>
  )
}
