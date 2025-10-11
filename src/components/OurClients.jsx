import React from 'react'
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

export default function OurClients() {
  return (
    <>
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
    </>
  )
}
