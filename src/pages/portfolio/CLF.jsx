import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import clf from '../../assets/CLF.webp'
import reel1 from '../../assets/clf_reel1.mp4'
import reel2 from '../../assets/clf_reel2.mp4'
import reel3 from '../../assets/clf_reel3.mp4'

export default function CLF() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <div className="mt-0 md:mt-13 relative">
                    <img src={clf} alt="CLF" className="w-full h-auto" />
                    <video
                        src={reel1}
                        autoPlay
                        loop
                        muted
                        className='absolute top-[27%] right-[60%] w-[11%] h-auto object-contain rounded-[13%] overflow-hidden'
                        style={{ maxHeight: '31%' }}
                    ></video>
                    <video
                        src={reel2}
                        autoPlay
                        loop
                        muted
                        className='absolute top-[27%] right-[49.5%] w-[11%] h-auto object-contain rounded-[13%] overflow-hidden'
                        style={{ maxHeight: '31%' }}
                    ></video>
                    <video
                        src={reel3}
                        autoPlay
                        loop
                        muted
                        className='absolute top-[27%] right-[39%] w-[11%] h-auto object-contain rounded-[13%] overflow-hidden'
                        style={{ maxHeight: '31%' }}
                    ></video>
                </div>
            </section>
            <Footer />
        </>
    )
}
