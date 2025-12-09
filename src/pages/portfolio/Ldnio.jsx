import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import CaseLdnio from '../case-studies/CaseLdnio'
import ldnio from '../../assets/Ldnio.webp'

export default function Ldnio() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={ldnio} brandname="Ldnio"/>
            </section>
            <CaseLdnio noNavbarFooter={true} />
            <Footer />
        </>
    )
}
