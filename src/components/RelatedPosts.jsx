import React from 'react'
import post1 from "../assets/resultpost1.png"
import post2 from "../assets/resultpost2.jpg"
import post3 from "../assets/resultpost3.jpg"
import pfp1 from "../assets/resultpostpfp1.png"
import pfp2 from "../assets/resultpostpfp2.jpeg"
import pfp3 from "../assets/resultpfp3.png"

export default function RelatedPosts() {
  return (
    <div>
      <section className='w-full flex flex-col items-center'>
            <div className="w-4/5 ">
                <h1 className='sm:px-50 pt-20 pb-2.5 text-5xl font-bold text-center'>
                    Related Posts
                </h1>
                <div className="flex flex-col md:flex-row  w-full mt-7.5 p-6 gap-5">
                    <div className=" w-full md:w-1/3 min-h-[700px] border border-black mx-5 p-6 flex flex-col items-start">
                        <div className="w-full">
                            <img src={post1} alt="" />
                        </div>
                        <span className=' text-white bg-[#FF6A39] px-2 py-1 rounded-full mt-5'>GEO</span>
                        <p className='mt-5 font-bold text-xl'>
                            GEO, AEO, and LLM SEO: How AI Is Reshaping Search (And What Brands Should Do About It)
                        </p>
                        <p className='text-[17px]'>
                            We’re living in the AI era. From software and healthcare to data and other industries, AI is fueling technological disruption on a level unseen since the arrival of the personal…
                        </p>
                        <div className="flex items-center text-[14px]">
                            <img className='w-12.5 h-12.5 rounded-full hover:cursor-pointer' src={pfp1} alt="" />
                            <p><span className='font-bold'>Spencer Cappelli</span> | June 13, 2025</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 min-h-[700px] border border-black mx-5  p-6 flex flex-col items-start">
                        <div className="w-full">
                            <img src={post2} alt="" />
                        </div>
                        <span className=' text-white bg-[#FF6A39] px-2 py-1 rounded-full mt-5'>Growth Marketing</span>
                        <p className='mt-5 font-bold text-xl'>
                            Fueling Growth: Performance-Based Marketing for Growth-Driven Organizations
                        </p>
                        <p className='text-[17px]'>
                            Are you leading a growth-focused organization eager to boost your marketing outcomes? Whether you're a high-growth startup, a mid-market business, or an enterprise managing multiple business units, marketing that drives…
                        </p>
                        <div className="flex items-center text-[14px]">
                            <img className='w-12.5 h-12.5 rounded-full hover:cursor-pointer' src={pfp2} alt="" />
                            <p><span className='font-bold'>Ethan Broder </span>| May 20, 2025</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 min-h-[700px] border border-black mx-5 p-6 flex flex-col items-start">
                        <div className="w-full">
                            <img src={post3} alt="" />
                        </div>
                        <span className=' text-white bg-[#FF6A39] px-2 py-1 rounded-full mt-5'>Growth Marketing</span>
                        <p className='mt-5 font-bold text-xl'>
                            The 4 Essential Steps of Performance Marketing for Brands
                        </p>
                        <p className='text-[17px]'>
                            In working with hundreds of brands — from startup to enterprise — over the last half decade, we’ve found brand growth strategies can usually be distilled into one of three…
                        </p>
                        <div className="flex items-center text-[14px]">
                            <img className='w-12.5 h-12.5 rounded-full hover:cursor-pointer' src={pfp3} alt="" />
                            <p><span className='font-bold'>Richard Meyer </span>| May 13, 2025</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </section>
    </div>
  )
}
