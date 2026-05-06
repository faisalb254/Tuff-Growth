import React from 'react'
import { Link } from 'react-router-dom'
import ldnioBanner from '../assets/Ldnio.webp'
import rfcBanner from '../assets/RFC.webp'
import ldnio from '../assets/Logo/LDNIO.png'
import rfc from '../assets/Logo/RFC.png'
import { FaArrowUp } from 'react-icons/fa'

export default function CaseStudiesPoster() {
    return (
        <>
            <div className="w-full h-auto max-w-[1700px] mx-auto flex flex-col lg:flex-row justify-between gap-8 px-4 sm:px-6 lg:px-19 pt-10 lg:pt-14 min-[120rem]:px-0">
                <div className="w-full lg:w-[48.7%] h-auto px-6 lg:px-12 pt-10 lg:pt-14 cursor-pointer pb-10 lg:pb-14 bg-[#FFFFFF]  rounded-[5px] border-2 border-gray-300">
                    <Link to="/portfolios/ldnio">
                        <img src={ldnioBanner} alt="ldnioBanner" loading="lazy" />
                        <img
                            src={ldnio}
                            alt="acreslogo"
                            loading="lazy"
                            className="mt-8 filter brightness-0 saturate-100"
                        />
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-black text-white w-max px-[10px] py-2 text-[16px] lg:text-[20px] font-semibold mt-6">
                                Data & Analytics
                            </div>
                            <div className="bg-black text-white w-max px-[10px] py-2 text-[16px] lg:text-[20px] font-semibold md:mt-6">
                                Media Strategy & Management
                            </div>
                        </div>
                        <h3 className="text-[16px] lg:text-[20px] font-semibold mt-2 text-black">
                            4 min read
                        </h3>
                        <p className="text-[20px] lg:text-[28px] font-semibold mt-2 leading-7 lg:leading-9 text-[#000000]">
                            Scaling Campaigns That Generate High-Value Customers for a Fintech
                            Client
                        </p>
                        <div>
                            <div className="w-full border-t-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] mt-9 gap-2 sm:gap-0">
                                <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                                    <FaArrowUp /> 272%
                                </h4>
                                <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                                    Increase in Active Monthly Subscriptions
                                </p>
                            </div>
                            <div className="w-full border-t-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] gap-2 sm:gap-0">
                                <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                                    <FaArrowUp /> 45%
                                </h4>
                                <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                                    Increase in Premium Subscriber Growth in Month 1
                                </p>
                            </div>
                            <div className="w-full border-t-2 border-b-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] gap-2 sm:gap-0">
                                <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                                    <FaArrowUp /> 31%
                                </h4>
                                <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                                    Increase in Lead to Premium Subscriber CVR in Three Months
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="w-full lg:w-[48.7%] h-auto px-6 lg:px-12 pt-10 lg:pt-14 cursor-pointer pb-10 lg:pb-14 bg-[#FFFFFF] border-2 border-gray-300 rounded-[5px]">
                    <img src={rfcBanner} alt="rfcBanner" loading="lazy" />
                    <img
                        src={rfc}
                        alt="rfcBanner"
                        loading="lazy"
                        className="mt-8 filter brightness-0 saturate-100"
                    />
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="bg-black text-white w-max px-[10px] py-2 text-[16px] lg:text-[20px] font-semibold mt-6">
                            SEO
                        </div>
                        <h3 className="text-[16px] lg:text-[20px] font-semibold mt-5 text-[#000000]">
                            5 min read
                        </h3>
                    </div>
                    <p className="text-[20px] lg:text-[28px] font-semibold mt-2 leading-7 lg:leading-9 text-[#000000]">
                        Achieving a 50% Surge in Organic Traffic within 60 Days, Reducing
                        Dependency on Paid Strategies
                    </p>
                    <div>
                        <div className="w-full border-t-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] mt-9 gap-2 sm:gap-0">
                            <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                                <FaArrowUp /> 57%
                            </h4>
                            <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                                Increase in non-branded clicks in 2 months
                            </p>
                        </div>
                        <div className="w-full border-t-2 border-b-2 flex flex-col sm:flex-row justify-between pt-1 py-5 border-[#000000] gap-2 sm:gap-0">
                            <h4 className="text-[16px] lg:text-[20px] font-semibold text-[#000000] flex items-center">
                                <FaArrowUp /> 113k
                            </h4>
                            <p className="text-[16px] lg:text-[20px] font-medium text-[#000000]">
                                ROI from targeted countries
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
