import React from 'react'
import { useState } from 'react';
import bg from "../assets/form-bg.svg"

export default function Form(props) {

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
            <div className="relative max-w-[95%] sm:max-w-[90%] md:max-w-[88%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-start">
                    <div className="space-y-6 sm:space-y-8 mt-16 sm:mt-24 lg:mt-15">
                        <div>
                            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-extrabold text-${props.text} leading-tight`}>
                                Get in Touch
                            </h1>
                        </div>

                        <div className={`space-y-3 text-${props.text} text-base sm:text-[17px] md:text-[19px]`}>
                            <p>
                               Let’s talk about how we can optimize your funnel with a customer-first, data-driven approach.
                            </p>
                            {/* <p className="text-sm sm:text-base md:text-lg">
                                From there, we do an audit to figure out where we can have
                                the biggest impact and then build a tailored plan based on
                                our insights and customized to you. Last, we execute as a
                                team, putting high-level marketing strategies with expert
                                implementation.
                            </p> */}
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
                                                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border transition-all ${isSelected
                                                        ? "border-[#ceff2a] bg-[#ceff2a] text-[#0C2233]"
                                                        : "border-[#D9D9D9] bg-white text-[#0C2233] hover:bg-[#F5F5F5]"
                                                    }`}
                                            >
                                                <span
                                                    className={`w-4 h-4 flex items-center justify-center rounded-full border ${isSelected
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
        </>
    )
}
