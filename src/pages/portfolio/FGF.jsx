import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import CaseFgf from '../case-studies/CaseFgf'
import fgf_img from '../../assets/FGF.webp'

export default function FGF() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={fgf_img} brandname="FGF"/>
            </section>
            <CaseFgf noNavbarFooter={true} />
            <Footer />
        </>
    )
}
