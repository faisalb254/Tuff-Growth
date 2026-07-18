import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import skstones from '../../assets/SKStones.webp'

export default function SKStones() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={skstones} brandname="SK Stones"/>
            </section>
            <Footer />
        </>
    )
}
