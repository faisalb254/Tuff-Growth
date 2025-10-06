import React from "react";
import Navbar from "../components/Navbar";
import { ArrowRight } from "lucide-react";
import Guide1 from "../assets/Guide1.jpg";
import Guide2 from "../assets/Guide2.jpg";
import Guide3 from "../assets/Guide3.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FinalSection from "../components/FinalSection";

export default function Guides() {
  const box = {
        heading: "Ready to grow?",
        para: ["Your compounding growth curve begins here."],
        button: "Book a Strategy Call"
    }
  const guides = [
    {
      image: Guide1,
      title: "Paid Media Metrics & Benchmarks Resource Guide",
      description:
        "Changes in the macroeconomic environment over the past several months have impacted every corner of business...",
      link: "/guide-1",
    },
    {
      image: Guide2,
      title:
        "The Ultimate Guide to Maximizing Your Media Spend with Performance Ad Creative",
      description:
        "Over the years, we’ve seen the classic pitfall again and again: ad creative as a means to an end…",
      link: "/guide-2",
    },
    {
      image: Guide3,
      title: "Content Strategy Guide",
      description: "The not-so-secret sauce on how to create a content plan.",
      link: "/guide-3",
    },
  ];
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full guidebg pt-[145px] pb-10 md:pt-40">
          <div className="w-[90%] sm:w-[70%] lg:w-[33%] m-auto">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-[#ffffff] text-center">
              Guides
            </h2>
            <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-medium text-[#ffffff] text-center mt-2 leading-[22px] sm:leading-[26px] lg:leading-[30px]">
              Take a deep dive and get into the weeds with us! Get the
              step-by-step playbook on our most asked-for services.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[90%] md:w-[80%] lg:w-[66%] m-auto h-auto">
          <div className="py-8 md:py-12 pt-10 md:pt-17">
            <div className="max-w-6xl mx-auto grid gap-6">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="border-2 border-[#E0E0E0] rounded-[4px] p-4 sm:p-5 md:p-6 md:px-9 cursor-pointer h-auto md:h-[315px] bg-white"
                >
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <div className="pt-[10px] w-full md:w-[352px] flex items-center justify-center">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="max-w-full h-auto"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left mt-4 md:mt-0 px-2 md:px-0">
                      <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-extrabold text-[#0C2233] mb-3 md:mb-4">
                        {guide.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[#0C2233] mb-3 md:mb-4 leading-relaxed">
                        {guide.description}
                      </p>
                      <a
                        href={guide.link}
                        className="inline-flex items-center text-[16px] sm:text-[18px] md:text-[19px] font-bold text-[#0C2233] tilt-zoom hover:text-[#FF6A39]"
                      >
                        Read the Guide <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[95%] sm:w-[90%] md:w-[86%] m-auto mt-12 md:mt-19 h-auto md:h-[452px] bg-[#FFFCF8] border-2 border-[#E0E0E0] rounded-[4px] p-6 md:p-0">
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
      </section>

      <FinalSection text={box}/>
      <Footer />
    </>
  );
}
