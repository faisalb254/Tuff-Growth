import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import creasoft_i from '../../assets/Creasoft_io.webp'

export default function Creasoft_i() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={creasoft_i} brandname="Creasoft IO"/>
            </section>
            <Footer />
        </>
    )
}
