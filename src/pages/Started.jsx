import React, { useState } from "react";
import Form from '../components/Form'
import { Download } from "lucide-react";
import Navbar from "../components/Navbar";
import OurClients from "../components/OurClients";
import Part from "../assets/part.png";
import Footer from "../components/Footer";

const TuffLandingSections = () => {


  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <div className="min-h-screen">
        <section>
          <div className="relative max-w-[95%] sm:max-w-[90%] md:max-w-[88%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-start">
              <div className="space-y-6 sm:space-y-8 mt-16 sm:mt-24 lg:mt-15">
                <div>
                  <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold text-black leading-tight`}>
                    Book a call with a growth strategist.
                  </h1>
                </div>

                <div className="space-y-3 text-[#0C2233] text-base sm:text-[17px] md:text-[19px]">
                  <p>
                    On our first call, we'll learn more about your growth goals,
                    share a bit about what we do and discuss how we like to
                    partner with clients to see if it might be a good fit.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg">
                    From there, we do an audit to figure out where we can have
                    the biggest impact and then build a tailored plan based on
                    our insights and customized to you. Last, we execute as a
                    team, putting high-level marketing strategies with expert
                    implementation.
                  </p>
                </div>
              </div>
              <div className="">
                <Form text="black" />
              </div>
            </div>
          </div>
        </section>
        <OurClients />
        <div className="py-30 bg-[#FFFCF8]">
          <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[65.5%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-[50%] flex items-center justify-center">
              <img
                src={Part}
                alt="Partnership Overview"
                className="relative z-10 w-24 sm:w-32 md:w-40 lg:w-48"
              />
            </div>

            <div className="w-full max-w-lg flex items-center flex-col gap-4 sm:gap-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0C2233]">
                Not ready to chat?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#0c2233]">
                Download a sample growth marketing proposal.
              </p>
              <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 border-2 border-[#0C2233] rounded text-base sm:text-lg md:text-xl text-[#0C2233] font-bold hover:bg-[#F5F7FA] transition hover:cursor-pointer tilt-zoom">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download sample proposal
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TuffLandingSections;
