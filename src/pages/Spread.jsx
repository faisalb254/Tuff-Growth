import React from "react";
import Navbar from "../components/Navbar";
import FinalSection from '../components/FinalSection'
import { FaLink } from "react-icons/fa";
import Spread1 from "../assets/Spread1.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const spreads = [
  {
    id: 1,
    title: "Growth Marketing Framework",
    image: Spread1,
    description: "Prioritizing and tracking your growth marketing experiments",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 2,
    title: "Channel Projections for Experiments",
    image: Spread1,
    description:
      "Use for: Forecasting budget based on historical data and determining projected performance",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 3,
    title: "Growth Marketing Scorecard",
    image: Spread1,
    description:
      "Use for: Tracking results daily, weekly, and monthly in one shared spreadsheet",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 4,
    title: "UTM Generator for Campaigns (Tracking)",
    image: Spread1,
    description:
      "Use for: Understanding which campaigns are driving meaningful results",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 5,
    title: "Blog Post Traffic Tracker from Buffer (Content)",
    image: Spread1,
    description: "Use for: Knowing which posts are gaining the most traffic",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 6,
    title: "Budget Tracker for PPC Campaigns (Paid)",
    image: Spread1,
    description:
      "Use for: Creating an automated monthly budget pacing dashboard for Google Ads",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 7,
    title: "Influencer Marketing Template (Influencer)",
    image: Spread1,
    description:
      "Use for: Managing and tracking your Instagram influencer marketing campaign",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 8,
    title: "Email User Onboarding Flow (Email)",
    image: Spread1,
    description: "Use for: Building and visualizing your welcome email flow",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 9,
    title: "Google Ads Keyword Audit (Paid)",
    image: Spread1,
    description:
      "Use for: Efficiently auditing your PPC keywords & search queries to identify top performers based on ROAS.",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 10,
    title: "Value Props Exercise",
    image: Spread1,
    description:
      "We’re a revenue and conversion-first agency. But great creative—from ads to emails to landing pages and beyond—is a critical part of the equation.",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 11,
    title: "Facebook Ad Creative Analysis Spreadsheet",
    image: Spread1,
    description:
      "We’re a revenue and conversion-first agency. But great creative—from ads to emails to landing pages and beyond—is a critical part of the equation.",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 12,
    title: "Landing Page Testing Plan Timeline",
    image: Spread1,
    description:
      "When it comes to increasing the conversion rate for our clients, we’re often focused on implementing impactful changes to the layout, copy, and images used throughout various landing pages to help increase our number of conversions.",
    link: "#",
    aboutLink: "#",
  },
  {
    id: 12,
    title: "CRM Spreadsheet Hack",
    image: Spread1,
    description:
      "Housing your website signup leads for b2b and b2c businesses doesn’t have to be complicated and doesn’t mean you automatically need to upgrade to an expensive email service provider (esp) or customer relationship management (CRM) software.",
    link: "#",
    aboutLink: "#",
  },
];

export default function Spread() {
  const box = {
        heading: "Ready to grow?",
        para: ["Your compounding growth curve begins here."],
        button: "Book a Strategy Call"
    }
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full min-h-[60vh] guidebg pt-[100px] sm:pt-[120px] md:pt-1 flex items-center">
          <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[80%] m-auto">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[59px] font-extrabold text-[#ffffff] text-center leading-[38px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px]">
              13 Ready-to-Go Growth Marketing Spreadsheets Startups Can Use to
              Boost Productivity
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full min-h-screen pt-10 sm:pt-16 md:pt-20 px-4 sm:px-8 md:px-12 lg:px-19 pb-10 sm:pb-16 md:pb-20 flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start">
          {spreads.map((spread) => (
            <div
              key={spread.id}
              className="w-full sm:w-[80%] md:w-[48%] lg:w-[31.2%] p-5 sm:p-7 md:p-9 pb-8 sm:pb-10 md:pb-12 border-2 border-gray-200 rounded-[4px] bg-white"
            >
              <h2 className="text-xl sm:text-2xl md:text-[25px] font-extrabold text-[#0C2233] mb-5 sm:mb-7 md:mb-9">
                {spread.title}
              </h2>

              <div className="mb-4 sm:mb-5 md:mb-6">
                <img
                  src={spread.image}
                  alt="Growth Marketing Spreadsheet"
                  className="w-full border border-gray-200 rounded"
                />
              </div>

              <p className="text-sm sm:text-base md:text-[19px] text-[#0C2233] mb-3 sm:mb-4 md:mb-5">
                Use for:{" "}
                <span className="font-medium">{spread.description}</span>
              </p>

              <div className="mb-2 sm:mb-3 tilt-zoom">
                <a
                  href={spread.link}
                  className="inline-flex items-center text-[#FF6A39] font-bold text-[17px] sm:text-[18px] md:text-[19px]"
                >
                  <FaLink className="mr-2" />
                  Copy the Spreadsheet
                </a>
              </div>

              <div className="tilt-zoom hover:text-[#FF6A39]">
                <a
                  href={spread.aboutLink}
                  className=" font-semibold text-[18px] sm:text-[19px] md:text-[20px]"
                >
                  About this template
                </a>
              </div>
            </div>
          ))}

          <div className="w-[95%] sm:w-[90%] md:w-[100%] m-auto mt-12 md:mt-19 h-auto md:h-[452px] bg-[#FFFCF8] border-2 border-[#E0E0E0] rounded-[4px] p-6 md:p-0">
            <div className="w-full sm:w-[80%] md:w-[52%] m-auto">
              <div className="h-auto m-auto mt-8 md:mt-16 py-2 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-4 md:px-5 text-xs sm:text-sm font-semibold tracking-[1.2px] md:tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                MONTHLY NEWSLETTER
              </div>
              <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-extrabold text-[#0C2233] text-center mt-3">
                The Growth Note
              </h2>
              <p className="text-[16px] sm:text-[20px] md:text-[24px] font-medium text-[#0C2233] text-center mt-3 leading-[24px] sm:leading-[28px] md:leading-[30px]">
                We’ll keep you in the loop on our best advice and strategies for
                social media marketing and growing a small business.
              </p>
              <div className="w-full sm:w-[90%] md:w-[74%] h-auto md:h-[52px] m-auto mt-6 md:mt-11 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full md:w-[59.5%] px-4 h-[45px] md:h-full border border-gray-300 rounded-[3px] focus:ring-2"
                />
                <button className="w-full md:w-[37.5%] h-[45px] md:h-full bg-[#ceff2a] text-[#0E2333] text-[16px] sm:text-[18px] font-bold px-4 md:px-6 rounded-[3px] transition-colors duration-200">
                  Join Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinalSection text={box}/>
      <Footer />
    </>
  );
}
