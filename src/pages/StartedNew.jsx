import React from "react"
import Navbar from "../components/NavbarNew"
import Footer from "../components/Footer"
import Form from "../components/FormNew"
import abode from "../assets/adobe.svg"
import cnn from "../assets/cnn.svg"
import intuit from "../assets/intuit.svg"
import linkedin from "../assets/linkedin.svg"
import sofi from "../assets/sofi.svg"
import action from "../assets/action.webp"
import audit from "../assets/audit.webp"
import quota from "../assets/quota.webp"

export default function StartedNew(props) {
  const image_section = [
    {
      image: audit,
      title: "Site Audit",
      description: "We analyze your site, your industry, and your competitors to show you the opportunities."
    },
    {
      image: action,
      title: "Action Plan",
      description: "Get a detailed execution plan for how we can achieve your goals."
    },
    {
      image: quota,
      title: "Quote",
      description: "We give you detailed pricing on how much it will cost and timelines."
    }
  ]
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-full max-w-[1700px] mx-auto px-5 md:px-25 min-[120rem]:px-0 bg-[#fff]">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 h-full">
            <Form />
          </div>
          <div className="w-full lg:w-1/2 h-full mt-18">
            <h2 className=" text-[#ceff2a] font-bold text-xl">
              NP Digital
            </h2>
            <h3 className=" my-2.5 text-4xl font-semibold">
              See How We Can Get You <span className="text-[#ceff2a]">More</span> Revenue
            </h3>
            <p className="text-xl text-[#26272c] my-3">
              SEO | AI | Content Marketing | Paid Media | CRO | Email | Social | Analytics | Programmatic | Creatives | Strategy | AI Solutions
            </p>
            <ul className="list-disc text-2xl text-[#26272c] my-3 space-y-2 pl-6 marker:text-[#ceff2a]">
              <li>
                <b>SEO & AI</b> – unlock more organic traffic from Google and from LLMs like ChatGPT, Perplexity, etc.
              </li>
              <li>
                <b>Content Marketing</b> – our team creates epic content that will get shared, get links, and attract traffic.
              </li>
              <li>
                <b>Paid Media</b> – effective paid strategies with clear ROI.
              </li>
              <li>
                <b>Email Marketing</b> – boost open rates and conversions with appealing but not forceful campaigns, 1:1 personalization, and automations.
              </li>
              <li>
                <b>CRO</b> – maximize website conversions and ROI.
              </li>
              <li>
                <b>Strategy</b> – orchestrate a marketing plan for impact and growth, powered by AI insights.
              </li>
              <li>
                <b>Creatives</b> – the power of storytelling and imagination transformed into videos and images that resonate with your audience and drive action.
              </li>
              <li>
                <b>AI Solutions</b> – end-to-end AI integration for analytics, automation, customer insights, and campaign optimization across all channels.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-5">
          <h2 className="text-3xl font-semibold text-center">
            Join Over <span className="text-[#ceff2a]"> 5,000 Companies </span> from Small Business to Enterprise
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-10 w-full">
            <img src={sofi} alt="sofi" className="w-full md:w-1/5 h-auto max-w-[120px] max-h-10" />
            <img src={cnn} alt="cnn" className="w-full md:w-1/5 h-auto max-w-[120px] max-h-10" />
            <img src={linkedin} alt="linkedin" className="w-full md:w-1/5 h-auto max-w-[120px] max-h-10" />
            <img src={abode} alt="abode" className="w-full md:w-1/5 h-auto max-w-[120px] max-h-10" />
            <img src={intuit} alt="intuit" className="w-full md:w-1/5 h-auto max-w-[120px] max-h-10" />
          </div>
        </div>
      </div>
      <div className="bg-[#f8f9fa] py-10">
        <div className="flex flex-col justify-center items-center my-5 gap-5 w-full max-w-[1700px] mx-auto">
          <h2 className="text-2xl md:text-5xl font-semibold text-center">
            Book a Call to Get Your Custom Strategy
          </h2>
          <div className="flex flex-col md:flex-row max-w-[1700px] mx-auto px-5 md:px-25 min-[120rem]:px-0 gap-5 my-10">
            {
              image_section.map((item, index) => (
                <div key={index} className="flex flex-col  justify-center items-center gap-5 h-auto">
                  <img src={item.image} alt={item.title} className="w-full h-auto max-h-[200px] 2xl:max-h-[300px]" />
                  <h3 className="text-2xl font-semibold text-center">{item.title}</h3>
                  <p className="text-xl text-center">{item.description}</p>
                </div>
              ))
            }
          </div>
          <button
            className={` text-[#0E2333] text-[18px] sm:text-[20px] md:text-[22px] font-bold py-3 sm:py-4 px-5 sm:px-8 rounded-[4px] transition-colors duration-200 hover:cursor-pointer tilt-zoom bg-[#ceff2a]`}
          >
            Book a Call
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

