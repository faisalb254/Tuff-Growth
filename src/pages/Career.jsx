import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import img1 from '../assets/careerimg1.png'
import img2 from '../assets/careerimg2.png'
import health from '../assets/health.svg'
import dental from '../assets/dental.svg'
import vision from '../assets/vision.svg'
import box from '../assets/box.svg'
import umbrella from '../assets/umbrella.svg'
import remote from '../assets/remote.svg'
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Career() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

            <section>
                <div className="VideoLine w-full flex justify-center items-center md:pt-45 pb-10 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className=' text-6xl font-black my-5'>
                                Open Positions
                            </h1>
                            <p className=' text-xl my-5'>
                                Tuff is a growth marketing team working with clients to drive growth by creating, managing, measuring, and optimizing high-performing acquisition campaigns. We’re a fully remote and small team with opportunities for autonomy, ownership, and impact. We believe in a very high bar of customer experience, both for our clients and their customers and practice consistent and transparent communication.
                            </p>
                            <p className=' text-xl my-5'>
                                Our goal is to provide ourselves with the best possible benefits, tools to use, and environments to work in.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                                View our open positions
                            </button>
                        </div>
                        <div className=" w-full md:w-1/2">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center py-20">
                    <div className="w-9/10 flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-1/2">
                           
                            <h1 className=' text-5xl font-black my-5'>
                                Learn more about working with Tuff
                            </h1>
                            {/* <p className=' text-xl'>
                                After being the go-to YouTube agency for brands for the last 5 years, we’ve learned a thing or two about what works.
                            </p> */}
                            <ul className=' text-[16px] my-5'>
                                <li className=' flex w-fit items-center gap-2.5 my-2.5 bg-[#FF6A39] tilt-zoom px-2.5'>
                                    <strong><FaLink /></strong>
                                    How We’ve Connected Salary to Both Personal and Company Growth
                                </li>
                                <li className=' flex w-fit items-center gap-2.5 my-2.5 bg-[#FF6A39] tilt-zoom px-2.5'>
                                    <strong><FaLink /></strong>
                                    How We Created a Career Framework For Growth on a Small Team
                                </li>
                                <li className=' flex w-fit items-center gap-2.5 my-2.5 bg-[#FF6A39] tilt-zoom px-2.5'>
                                    <strong><FaLink /></strong>
                                    From 1,018 Applications to 2 New Tuff Team Members
                                </li>
                                
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center VideoLine2 py-20">
                    <div className="w-9/10 flex flex-col text-white items-center justify-center">
                        <h1 className=' text-5xl font-black'>
                            Benefits
                        </h1>
                        <div className=" w-3/4 my-5 flex flex-col md:flex-row flex-wrap justify-center gap-5">
                            <div className="w-full px-12 py-9 text-3xl flex flex-col items-center gap-5 glassbg border border-[rgb(255_255_255_/_12%)] font-black">
                                <img src={health} alt="" />
                                <h1>
                                    Health
                                </h1>
                            </div>
                            <div className="w-full px-12 py-9 text-3xl flex flex-col items-center gap-5 glassbg border border-[rgb(255_255_255_/_12%)] font-black">
                                <img src={dental} alt="" />
                                <h1>
                                    Dental
                                </h1>
                            </div>
                            <div className="w-full px-12 py-9 text-3xl flex flex-col items-center gap-5 glassbg border border-[rgb(255_255_255_/_12%)] font-black">
                                <img src={vision} alt="" />
                                <h1>
                                    Vision
                                </h1>
                            </div>
                            <div className="w-full px-12 py-9 text-3xl flex flex-col items-center gap-5 glassbg border border-[rgb(255_255_255_/_12%)] font-black">
                                <img src={remote} alt="" />
                                <h1>
                                    Remote
                                </h1>
                            </div>
                            <div className="w-full px-12 py-9 text-3xl flex flex-col items-center gap-5 glassbg border border-[rgb(255_255_255_/_12%)] font-black">
                                <img src={umbrella} alt="" />
                                <h1>
                                    Umbrella
                                </h1>
                            </div>
                            <div className="w-full px-12 py-9 text-3xl flex flex-col items-center gap-5 glassbg border border-[rgb(255_255_255_/_12%)] text-center font-black">
                                <img src={box} alt="" />
                                <h1>
                                    Office Allowance
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
