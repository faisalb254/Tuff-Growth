import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import continentaltravel from '../../assets/ContinentalTravel.webp'

export default function ContinentalTravel() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={continentaltravel} brandname="Continental Travel"/>
            </section>
            <Footer />
        </>
    )
}
