import React from 'react'
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SalesLeadForm() {
    const [isSubmitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "92",
        email: "",
        companyName: "",
        companyWebsite: "",
        monthlyBudget: "",
        message: "",
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
                    companyName: formData.companyName,
                    companyWebsite: formData.companyWebsite,
                    monthlyBudget: formData.monthlyBudget,
                    message: formData.message,
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

        if (!formData.firstName || !formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName || !formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email || !formData.email.trim()) {
            newErrors.email = "Work email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone || formData.phone === "92" || formData.phone.length <= 2) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.companyName || !formData.companyName.trim()) {
            newErrors.companyName = "Company name is required";
        }

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

        if (!validateForm()) {
            return;
        }

        setSubmitted(true);
        sendEmail(formData);
    };

    return (
        <div className="bg-white rounded-[8px] border-[2px] border-gray-200 p-6 sm:p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2233] mb-1">
                Talk to Sales
            </h2>
            <p className="text-[15px] text-gray-500 mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name *"
                            className={`w-full px-4 py-3 rounded-[5px] border-[2px] outline-none focus:border-[#0C2233] ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
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
                            placeholder="Last Name *"
                            className={`w-full px-4 py-3 rounded-[5px] border-[2px] outline-none focus:border-[#0C2233] ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Work Email *"
                            className={`w-full px-4 py-3 rounded-[5px] border-[2px] outline-none focus:border-[#0C2233] ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                    <div>
                        <PhoneInput
                            country={"pk"}
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
                                height: "50px",
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Company Name *"
                            className={`w-full px-4 py-3 rounded-[5px] border-[2px] outline-none focus:border-[#0C2233] ${errors.companyName ? "border-red-500" : "border-gray-300"}`}
                        />
                        {errors.companyName && (
                            <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="url"
                            name="companyWebsite"
                            value={formData.companyWebsite}
                            onChange={handleInputChange}
                            placeholder="Company Website"
                            className="w-full px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none focus:border-[#0C2233]"
                        />
                    </div>
                </div>

                <div>
                    <select
                        name="monthlyBudget"
                        value={formData.monthlyBudget}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-[5px] border-[2px] outline-none focus:border-[#0C2233] ${errors.monthlyBudget ? "border-red-500" : "border-gray-300"}`}
                    >
                        <option value="">Monthly Marketing Budget *</option>
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

                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="What are you looking to achieve? (optional)"
                        rows={3}
                        className="w-full px-4 py-3 rounded-[5px] border-[2px] border-gray-300 outline-none focus:border-[#0C2233] resize-none"
                    />
                </div>

                <p className="text-[11px] text-gray-500">
                    By submitting this form, you consent to Havit Growth contacting you about your inquiry via phone, email, or text.
                </p>

                <button
                    onClick={handleSubmit}
                    className={`w-full text-[#0E2333] text-[18px] sm:text-[20px] font-bold py-3 sm:py-4 px-5 rounded-[5px] transition-colors duration-200 ${isSubmitted ? "bg-gray-200" : "hover:cursor-pointer hover:opacity-90 bg-[#CEFF2A]"}`}
                >
                    {isSubmitted ? "Thank you! We'll be in touch." : "Talk to Sales"}
                </button>
            </div>
        </div>
    )
}
