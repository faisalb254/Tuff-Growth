import React from 'react'

export default function Newsletter() {
  return (
    <div>
      <section>
            <div className="w-full h-auto lg:h-[77vh] flex items-center justify-center p-1 pt-10 lg:pt-0 md:px-10 lg:px-19 ">
              <div className="w-full md:w-[90%] lg:w-full h-auto lg:h-[360px]  flex flex-col justify-center border border-black items-center text-center px-4 sm:px-10 md:px-20 lg:px-92 py-10 lg:py-0">
                <span className=' font-bold bg-[#CEFD94] px-2 py-1 rounded-full mt-5'>Monthly Newsletter</span>
                <h2 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[52px] font-black ">
                  The Growth Note
                </h2>
                <p className=' text-2xl'>We’ll keep you in the loop on our best advice and strategies for social media marketing and growing a small business.</p>
                <div className="">
                    <input type="text" placeholder='Enter your email' className=' border border-black my-5 p-3 rounded-xl' name="" id="" />
                    <button className=' border border-black p-3 mx-2 bg-[#FF6A39] font-bold rounded-xl'>Join Newsletter</button>
                </div>
              </div>
            </div>
    </section>
    </div>
  )
}
