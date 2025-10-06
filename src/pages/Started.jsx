import React, { useState } from "react";
import { Download } from "lucide-react";
import Navbar from "../components/Navbar";
import cl1 from "../assets/cl1.svg";
import cl2 from "../assets/cl2.svg";
import cl3 from "../assets/cl3.svg";
import cl4 from "../assets/cl4.svg";
import cl5 from "../assets/cl5.svg";
import cl6 from "../assets/cl6.svg";
import cl7 from "../assets/cl7.svg";
import cl8 from "../assets/cl8.svg";
import cl9 from "../assets/cl9.svg";
import cl10 from "../assets/cl10.svg";
import cl11 from "../assets/cl11.svg";
import cl12 from "../assets/cl12.svg";
import cl13 from "../assets/cl13.svg";
import cl14 from "../assets/cl14.svg";
import cl15 from "../assets/cl15.svg";
import cl16 from "../assets/cl16.svg";
import Part from "../assets/part.png";
import Footer from "../components/Footer";

const TuffLandingSections = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    companyWebsite: "",
    companyStage: "",
    timeline: "",
    budget: "",
    message: "",
  });
  const stages = ["Seed", "Series A or higher", "Enterprise"];
  const [companyStage, setCompanyStage] = useState("");

  const handleStageClick = (stage) => {
    if (companyStage === stage) {
      setCompanyStage("");
    } else {
      setCompanyStage(stage);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <div className="min-h-screen">
        <div className="relative contactbg overflow-hidden">
          <div className="relative max-w-[95%] sm:max-w-[90%] md:max-w-[88%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-start">
              <div className="space-y-6 sm:space-y-8 mt-16 sm:mt-24 lg:mt-15">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold text-[#0C2233] leading-tight">
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

              <div className="bg-white rounded-[5px] border-[2px] border-gray-300 p-6 sm:p-8 md:p-9 mt-10 sm:mt-14 lg:mt-18">
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                        className="w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                        Company Website
                      </label>
                      <input
                        type="url"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleInputChange}
                        placeholder="Website"
                        className="w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                      Company Stage
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {stages.map((stage) => {
                        const isSelected = companyStage === stage;
                        return (
                          <button
                            key={stage}
                            type="button"
                            onClick={() => handleStageClick(stage)}
                            className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                              isSelected
                                ? "border-[#ceff2a] bg-[#ceff2a] text-[#0C2233]"
                                : "border-[#D9D9D9] bg-white text-[#0C2233] hover:bg-[#F5F5F5]"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 flex items-center justify-center rounded-full border ${
                                isSelected
                                  ? "border-white bg-white text-[#0C2233]"
                                  : "border-[#D9D9D9] bg-white text-transparent"
                              }`}
                            >
                              {isSelected ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-3 w-3"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 111.414-1.414l3.543 3.543 7.543-7.543a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : null}
                            </span>
                            {stage}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                      Are you bootstrapped or have you raised funds?
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg outline-none"
                    >
                      <option value="Bootstrapped">Bootstrapped</option>
                      <option value="Funded">Funded</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                      What is your timeline for working with us?
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg outline-none"
                    >
                      <option value="0-10k">Need help now</option>
                      <option value="10k-50k">Next 1-3 months</option>
                      <option value="50k-100k">Exploring options</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                      What is your current monthly media budget?
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg outline-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="0-10k">$0 - $10K</option>
                      <option value="10k-50k">$10K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k+">$100K+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help?"
                      rows={4}
                      className="w-full px-3 sm:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#ceff2a] text-[#0E2333] text-[18px] sm:text-[20px] md:text-[22px] font-bold py-3 sm:py-4 px-5 sm:px-6 rounded-[4px] transition-colors duration-200 hover:cursor-pointer tilt-zoom"
                  >
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto homeImg1 pt-3 pb-24 ">
          <div className="h-[40px] w-max p-2 bg-[#ceff2a] m-auto rounded-[20px] flex justify-center items-center px-5 mt-26 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            OUR CLIENTS
          </div>
          <p className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#FFFEFB] leading-snug lg:leading-[3.5rem] mt-4 text-center">
            Trusted by kickass businesses
          </p>

          <div className="w-full h-auto flex justify-between flex-wrap px-7 md:px-19 pt-8 md:pt-13">
            {[
              cl1,
              cl2,
              cl3,
              cl4,
              cl5,
              cl6,
              cl7,
              cl8,
              cl9,
              cl10,
              cl11,
              cl12,
              cl13,
              cl14,
              cl15,
              cl16,
            ].map((logo, index) => (
              <div
                key={index}
                className="w-[48%] md:w-[23%] h-[143px] bg-[#DCD5F5] rounded-[5px] flex items-center justify-center mt-8"
              >
                <img
                  src={logo}
                  alt={`client-${index + 1}`}
                  loading="lazy"
                  className="filter brightness-0 saturate-100"
                />
              </div>
            ))}
          </div>
        </div>
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
