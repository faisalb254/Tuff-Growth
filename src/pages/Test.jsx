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
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-center text-[#0C2233] mb-8">
            FAQs
          </h2>
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
                    <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base">
                      {item.answer}
                    </p>
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
