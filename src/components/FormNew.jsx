import React from 'react'
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function FormNew(props) {
    const [isSubmitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "92",
        email: "",
        companyWebsite: "",
        monthlyBudget: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (formData) => {
        emailjs
            .send(
                "service_1udwocj",
                "template_q6nbx5r",
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    companyWebsite: formData.companyWebsite,
                    monthlyBudget: formData.monthlyBudget,
                    time: new Date().toLocaleString(),
                },
                "7k_x2dQ2dsURxw43d"
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                },
                (error) => {
                    console.error("Error:", error.text);
                }
            );
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate email
        if (!formData.email || !formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Validate phone (check if it's more than just country code "92")
        if (!formData.phone || formData.phone === "92" || formData.phone.length <= 2) {
            newErrors.phone = "Phone number is required";
        }

        // Validate first name
        if (!formData.firstName || !formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        // Validate last name
        if (!formData.lastName || !formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        // Validate monthly budget
        if (!formData.monthlyBudget || formData.monthlyBudget.trim() === "") {
            newErrors.monthlyBudget = "Monthly marketing budget is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitted) {
            return;
        }

        // Validate form before submitting
        if (!validateForm()) {
            return;
        }

        console.log("Submitted");
        setSubmitted(true);
        sendEmail(formData);
    };
    return (
        <>
            <div className="bg-white  rounded-[5px] border-[2px] border-gray-300 p-6 sm:p-8 md:p-9 mt-10 sm:mt-14 lg:mt-18">
                <div className="text-center text-3xl mb-5">
                    Let’s Grow Your Revenue!
                </div>
                <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        <div>
                            {/* <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                First Name *
                            </label> */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className={`w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] outline-none ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            {/* <label className="block text-[13px] sm:text-[14px] font-extrabold text-[#0C2233] mb-2">
                                Last Name *
                            </label> */}
                            <PhoneInput
                                country={"pk"}          // 🇵🇰 Default Pakistan
                                value={formData.phone}
                                onChange={(value) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        phone: value,
                                    }))
                                }
                                enableSearch={true}
                                countryCodeEditable={false}
                                containerClass="w-full"
                                inputStyle={{
                                    width: "100%",
                                    height: "52px",
                                    fontSize: "16px",
                                    border: errors.phone ? "2px solid #ef4444" : "2px solid #d1d5db",
                                    borderRadius: "5px",
                                }}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                className={`w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] outline-none ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className={`w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] outline-none ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            {/* <label className="block text-[13px] sm:text-[14px] font-extrabold 
                            text-[#0C2233] mb-2">
                                Company Website
                            </label> */}
                            <input
                                type="url"
                                name="companyWebsite"
                                value={formData.companyWebsite}
                                onChange={handleInputChange}
                                placeholder="Website Url"
                                className="w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] 
                                border-gray-300 outline-none"
                            />
                        </div>
                        <div>
                        <select
                            name="monthlyBudget"
                            value={formData.monthlyBudget}
                            onChange={handleInputChange}
                            className={`w-full px-3 sm:px-4 py-3 rounded-[5px] border-[2px] outline-none ${errors.monthlyBudget ? "border-red-500" : "border-gray-300"}`}
                        >
                            <option value="">Monthly Marketing Budget</option>
                            <option value="Under $750">Under $750</option>
                            <option value="$750 to $1,500">$750 to $1,500</option>
                            <option value="$1,500 to $5,000">$1,500 to $5,000</option>
                            <option value="$5,000 to $10,000">$5,000 to $10,000</option>
                            <option value="$10,000 to $25,000">$10,000 to $25,000</option>
                            <option value="$25,000 to $50,000">$25,000 to $50,000</option>
                            <option value="$50,000 to $100,000">$50,000 to $100,000</option>
                            <option value="Above $100,000">Above $100,000</option>
                        </select>
                        {errors.monthlyBudget && (
                            <p className="text-red-500 text-sm mt-1">{errors.monthlyBudget}</p>
                        )}
                        </div>
                    </div>
                    <div className="">
                        <p className="text-[11px] text-gray-500">
                        By clicking the button below, you consent for NP Digital and partners to use automated technology, including pre-recorded messages, cell phones and texts, and email to contact you at the number and email address provided. This includes if the number is currently on any Do Not Call Lists. This consent is not required to make a purchase. Privacy Policy.
                        </p>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className={`w-full  text-[#0E2333] text-[18px] sm:text-[20px] md:text-[22px] font-bold py-3 sm:py-4 px-5 sm:px-6 rounded-[4px] transition-colors duration-200 ${isSubmitted ? " bg-gray-200" : "hover:cursor-pointer tilt-zoom bg-[#ceff2a]"}`}
                    >
                        {isSubmitted ? "Thank you!" : "Book a Call"}
                    </button>
                </div>
            </div >
        </>
    )
}
