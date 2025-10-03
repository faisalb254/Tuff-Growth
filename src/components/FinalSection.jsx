import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function FinalSection(props) {
    const [text, setText] = useState(props.text)
    return (
        <>
            <section>
                <div className="w-full  homeImg3 flex items-center justify-center p-10 md:px-19">
                    <div className=" w-full p-7.5 py-18.5 bg-[#510AA6] border-2 border-[rgb(255_255_255_/_12%)] flex flex-col justify-center items-center text-center ">
                        <h2 className="text-[30px] sm:text-[32px] md:text-[42px] font-semibold text-[#FFFEFB] w-2/3">
                            {text.heading}
                        </h2>
                        {text.para.map((item, idx) => (
                            <p key={idx} className="w-2/3 text-[18px] sm:text-[20px] md:text-[24px] font-medium mt-3 text-[#FFFEFB]">
                                {item}
                            </p>
                        ))}

                        <Link to="/get-started-with-tuff">
                            <button className="text-[#0C2233] cursor-pointer text-[18px] md:text-[22px] font-bold mt-6 p-4 bg-[#CEFF2A] px-8 rounded-[2px] tilt-zoom">
                                {text.button}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
