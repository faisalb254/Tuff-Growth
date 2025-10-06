import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Toc({ table }) {

  const [show, setShow] = useState(true);

  return (
    <>
      <div className="w-full md:w-1/7 md:absolute z-30 border border-black/12 m-10">
        <div className="w-full flex flex-col p-2 max-h-[575px] overflow-x-hidden overflow-y-scroll">
          <button 
            onClick={() => setShow(!show)} 
            className="w-full flex items-center justify-between hover:cursor-pointer"
          >
            <span className=' font-bold text-lg'>Table of Content</span>
            {show ? <FaAngleDown /> : <FaAngleUp />}
          </button>

          <div className={`${show ? "" : "hidden"} mt-2`}>
            {table.map((item, index) => (
              <a href={`#section-${index+1}`}>
                  <p key={index} className="p-0.5 py-1.5 text-sm hover:cursor-pointer hover:bg-[#CEFD94]">
                    {item}
                  </p>
              </a>
            ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
