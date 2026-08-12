import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import SalesLeadForm from '../components/SalesLeadForm'
import Footer from '../components/Footer'
import havitLogo from '../assets/HavitLogo.png'
import checkinLogo from '../assets/Logo/checkin.png'
import ldnioLogo from '../assets/Logo/LDNIO.png'
import tgrLogo from '../assets/Logo/TGR.png'
import rfcLogo from '../assets/Logo/RFC.png'
import fgfLogo from '../assets/Logo/FGF.png'

export default function ContactSales() {
    const points = [
        "A full audit of your current marketing performance",
        "A custom growth roadmap tailored to your goals",
        "Clear, upfront pricing with no surprises",
    ]

    const logos = [checkinLogo, ldnioLogo, tgrLogo, rfcLogo, fgfLogo]

    return (
        <>
            <div className="w-full bg-[#1E1E1E] py-5">
                <div className="max-w-[1700px] mx-auto px-5 md:px-16">
                    <Link to="/">
                        <img src={havitLogo} alt="Havit Growth" className="h-9 w-auto" />
                    </Link>
                </div>
            </div>

            <div className="w-full bg-[#fff]">
                <div className="max-w-[1700px] mx-auto px-5 md:px-16 py-10 md:py-16">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[#CEFF2A] bg-[#0C2233] inline-block px-3 py-1 rounded-[4px] font-bold text-sm mb-4">
                                HAVIT GROWTH
                            </h2>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C2233] leading-tight">
                                Let's Build Your Growth Engine
                            </h1>
                            <p className="text-lg sm:text-xl text-[#4a4a4a] mt-4">
                                Talk to our team about your goals — no pressure, no jargon, just a clear picture of how we can grow your revenue.
                            </p>

                            <div className="space-y-4 mt-8">
                                {points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-[#0C2233] mt-1 flex-shrink-0" size={20} />
                                        <p className="text-lg text-[#26272c]">{point}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <p className="text-sm font-semibold text-gray-500 mb-4">
                                    TRUSTED BY GROWING BRANDS
                                </p>
                                <div className="flex flex-wrap items-center gap-8">
                                    {logos.map((logo, index) => (
                                        <img
                                            key={index}
                                            src={logo}
                                            alt="client logo"
                                            className="h-8 w-auto object-contain filter grayscale opacity-70"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <SalesLeadForm />
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
