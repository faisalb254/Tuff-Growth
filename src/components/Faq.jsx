import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function Test(props) {
    const faqs = props.faq
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <section>
                <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10">
                    
                    <div>
                        {faqs.map((item, index) => {
                            const isFirst = index === 0;
                            const isLast = index === faqs.length - 1;

                            return (
                                <div
                                    key={index}
                                    className={`py-4 sm:py-5 md:py-6 ${isFirst ? "border-t border-black" : ""
                                        } border-b border-black`}
                                >
                                    <div
                                        className="cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <h3 className="text-base sm:text-lg md:text-[24px] lg:text-[28px] font-semibold text-[#0C2233]">
                                            {item.question}
                                        </h3>
                                        <span className="text-orange-500 text-[24px] sm:text-[26px] md:text-[28px]">
                                            {openIndex === index ? (
                                                <Minus size={28} />
                                            ) : (
                                                <Plus size={28} />
                                            )}
                                        </span>
                                    </div>
                                    {openIndex === index && (
                                        <div className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base space-y-2">
                                            {item.answer.map((ans, idx) => {
                                                if (ans.type === "para") {
                                                    return (
                                                        <p key={idx} className="mb-2 text-xl my-2.5 text-justify">
                                                            {ans.para}
                                                        </p>
                                                    );
                                                }

                                                if (ans.type === "list") {
                                                    return (
                                                        <ul key={idx} className="list-disc pl-5 text-xl my-2.5 text-justify">
                                                            <li>{ans.para}</li>
                                                        </ul>
                                                    );
                                                }
                                                if (ans.type === "link") {
                                                    return (
                                                        <span className=" text-[#FF6A39] text-xl font-black">
                                                            {ans.para}
                                                        </span>
                                                    );
                                                }

                                                return null; // fallback
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
