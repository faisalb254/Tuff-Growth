import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import rfc_img from '../../assets/RFC.webp'
import reel1 from '../../assets/rfc_reel1.mp4'
import reel2 from '../../assets/rfc_reel2.mp4'
import reel3 from '../../assets/rfc_reel3.mp4'
import reel4 from '../../assets/rfc_reel4.mp4'

export default function RFC() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <div className="mt-0 md:mt-13 relative">
                    <img src={rfc_img} alt="RFC" className="w-full h-auto" />
                    <video 
                        src={reel1} 
                        autoPlay 
                        loop 
                        muted 
                        className='absolute top-[5%] right-[37%] w-[12%] h-auto object-contain rounded-[13%] overflow-hidden'
                        style={{ maxHeight: '34%' }}
                    ></video>
                    <video 
                        src={reel2} 
                        autoPlay 
                        loop 
                        muted 
                        className='absolute top-[5%] right-[25.5%] w-[12%] h-auto object-contain rounded-[13%] overflow-hidden'
                        style={{ maxHeight: '34%' }}
                    ></video>
                    <video 
                        src={reel3} 
                        autoPlay 
                        loop 
                        muted 
                        className='absolute top-[5%] right-[14%] w-[12%] h-auto object-contain rounded-[13%] overflow-hidden'
                        style={{ maxHeight: '34%' }}
                    ></video>
                    <video 
                        src={reel4} 
                        autoPlay 
                        loop 
                        muted 
                        className='absolute top-[5%] right-[2.5%] w-[12%] h-auto object-contain rounded-[13%] overflow-hidden'
                        style={{ maxHeight: '34%' }}
                    ></video>
                </div>
            </section>
            <Footer />
        </>
    )
}
