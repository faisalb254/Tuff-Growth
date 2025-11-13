import React from 'react'
import advisory from "../assets/Logo/advisory-corp.png"
import alsaud from "../assets/Logo/al-saud.png"
import capital from "../assets/Logo/c-capital.png"
import checkin from "../assets/Logo/checkin.png"
import dispatch from "../assets/Logo/dispatch.png"
import fgf from "../assets/Logo/FGF.png"
import ideeza from "../assets/Logo/ideeza.png"
import idk from "../assets/Logo/idk.png"
import ldnio from "../assets/Logo/LDNIO.png"
import peace from "../assets/Logo/peace-skin.png"
import pixmo from "../assets/Logo/pixmo.png"
import rfc from "../assets/Logo/RFC.png"
import rm from "../assets/Logo/RM.png"
import santa from "../assets/Logo/santa_voyage.png"
import seee from "../assets/Logo/SEEE-tech.png"
import sk from "../assets/Logo/SK.png"
import slipper from "../assets/Logo/slipper.png"
import sonderblu from "../assets/Logo/sonderblu.png"
import space from "../assets/Logo/Space.png"
import tgr from "../assets/Logo/TGR.png"

export default function OurClients() {
  return (
    <>
      <div className="w-full h-auto homeImg1 pt-3 pb-24 ">
                <div className="text-[50px] w-max p-2  rounded-[20px]  mx-10 mt-26  font-semibold tracking-[1.5px] text-white">
                  Our Clients
                </div>
                <p className="text-[24px] bg-[#ceff2a] rounded-full px-6 m-auto w-fit sm:text-[32px] lg:text-[18px] font-semibold text-black leading-snug lg:leading-[3.5rem] mt-4 text-center">
                  Trusted by kickass businesses
                </p>
      
                <div className="w-full h-auto flex justify-between flex-wrap px-7 md:px-19 pt-8 md:pt-13">
                  {[
                    advisory,
                    alsaud,
                    capital,
                    checkin,
                    dispatch,
                    fgf,
                    ideeza,
                    idk,
                    ldnio,
                    peace,
                    pixmo,
                    rfc,
                    rm,
                    santa,
                    seee,
                    sk,
                    slipper,
                    sonderblu,
                    space,
                    tgr
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="w-[48%] md:w-[23%] h-[143px] bg-[#DCD5F5]/40 rounded-[5px] flex items-center justify-center mt-8"
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
