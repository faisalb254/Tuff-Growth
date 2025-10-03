import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Author from '../components/Author'
import pfp from "../assets/derek-colmen.png"

export default function Derek() {
  const writer = {
    author: "derek",
    fullname: "Derek Coleman",
    questions: [
      {
        heading: "How We Outranked Home Depot for the #1 Position",
        date: "July 3, 2024/in SEO",
        para: "Renogy approached Tuff to handle all of their SEO needs for their US and international websites. Tuff had previously been creating …"
      },
      {
        heading: "Minimizing Risk in a Site Migration: A Data-Driven Approach to Sustainable Growth",
        date: "April 25, 2024/in SEO",
        para: "Renogy approached Tuff to handle all of their SEO needs for their US and international websites. Tuff had previously been creating …"
      },
      {
        heading: "Advanced Technical SEO Techniques to Propel Your Startup’s Organic Rankings",
        date: "January 16, 2024/in SEO",
        para: "As algorithms become smarter and competition stiffer, it’s no longer enough to just pepper your content with keywords and hope …"
      },
      {
        heading: "The Impact of Page Speed on SEO and Conversion Rates: Optimization Tips and Tools",
        date: "September 26, 2023/in CRO, SEO",
        para: "Page speed is one of the most important factors for scaleup brands’ growth in the digital era–especially SaaS brands. It …"
      },
      {
        heading: "Leveraging SEO to Maintain Growth in the Inflation Economy",
        date: "April 26, 2023.in SEO",
        para: "Data-Driven SEO: 5 Data Points for Your 2023 Marketing Plans 88% of marketers who have an SEO strategy will increase …"
      },
      {
        heading: "Level up your growth marketing strategies with ChatGPT: how to write AI prompts to get the best results",
        date: "April 6, 2023/in Growth Marketing",
        para: "Data-Driven SEO: 5 Data Points for Your 2023 Marketing Plans 88% of marketers who have an SEO strategy will increase …"
      },
      {
        heading: "How To Conduct A Time-Based Content Analysis [Free Template]",
        date: "December 6, 2022/in SEO, Content Strategy",
        para: "This post is #2 of a 2-part series on how to conduct a content analysis. In the first post, we …"
      },
      {
        heading: "Conducting A Content Inventory Audit With Quartiles [Free Template]",
        date: "December 6, 2022/in SEO, Content Strategy",
        para: "As a content marketer, it’s essential to know the ins and outs of your website content in order to create …"
      },
      {
        heading: "Compounding Growth: How We Increased Pathstream’s Non-Branded Organic Clicks 486%",
        date: "August 15, 2022/in SEO",
        para: "As a growth marketing agency, when we work with fast-growing startups like Pathstream, a VC-backed startup that offers certificate programs …"
      },
      {
        heading: "Small Pivot, BIG Results: How We Generated a 659% Increase in Non-Branded Organic Site Traffic for AKKO",
        date: "July 26, 2022/in SEO",
        para: "In most true SEO stories involving newer websites, results don’t come quickly. Sure, there was that one time we increased …"
      },

    ]
  };
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section className='flex flex-col w-full items-center'>
        <div className=" w-4/5 mt-20 flex flex-col items-center text-xl text-center pb-11 mb-10">
          <div className="">
            <img className="h-25 w-25 rounded-full" src={pfp} alt="" />
          </div>
          <h1 className="font-bold text-4xl pt-5">
            About Derek Coleman
          </h1>
          <p className=' my-4.5'>
            Derek is a digital marketer based in Boston, Massachusetts with almost a decade of hands-on SEO experience. He finds it meaningful, challenging, and exciting to develop, test, and implement new SEO strategies. When he's not auditing websites and optimizing content he's usually backpacking and exploring new cultures.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center text-xl text-center pb-11 mb-10">
          <span className='font-bold text-lg mb-5'>Entries by Derek Coleman</span>
          <Author writer={writer} />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
}
