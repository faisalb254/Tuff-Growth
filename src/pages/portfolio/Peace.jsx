import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import CasePeaceSkin from '../case-studies/CasePeaceSkin'
import peace from '../../assets/Peace.webp'

export default function Peace() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={peace} brandname="Peace"/>
            </section>
            <CasePeaceSkin noNavbarFooter={true} />
            <Footer />
        </>
    )
}
