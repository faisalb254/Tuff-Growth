import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import aSY from '../../assets/ASY.webp'

export default function ASY() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={aSY} brandname="ASY"/>
            </section>
            <Footer />
        </>
    )
}
