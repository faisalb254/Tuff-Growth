import React from 'react'
import { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";

export default function ScrollButton() {
    const [show, setShow] = useState(false)
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.screenY])
    return (
        <div className={`hidden md:block fixed bottom-0 right-0 transition-all duration-500 ${show ? " opacity-100" : "opacity-0"}`}>
            <button onClick={() => { scrollToTop() }} className='triangle w-25 h-25 bg-[#5A2AFF] text-white flex justify-center items-end pb-3 pl-7  hover:cursor-pointer'>
                <FaChevronUp />
            </button>
        </div>
    )
}
