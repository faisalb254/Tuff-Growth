import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import CaseTgr from '../case-studies/CaseTgr'
import tgr from '../../assets/TGR.webp'

export default function TGR() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={tgr} brandname="TGR"/>
            </section>
            <CaseTgr noNavbarFooter={true} />
            <Footer />
        </>
    )
}
