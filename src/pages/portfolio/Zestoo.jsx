import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import CaseZestoo from '../case-studies/CaseZestoo'
import zestoo from '../../assets/Zestoo.webp'

export default function Zestoo() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={zestoo} brandname="Zestoo"/>
            </section>
            <CaseZestoo noNavbarFooter={true} />
            <Footer />
        </>
    )
}
