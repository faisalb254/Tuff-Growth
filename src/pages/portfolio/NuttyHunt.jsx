import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import CaseNutty from '../case-studies/CaseNutty'
import nuthunt from '../../assets/Nutty_Hunt.webp'

export default function NuttyHunt() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={nuthunt} brandname="Nutty Hunt"/>
            </section>
            <CaseNutty noNavbarFooter={true} />
            <Footer />
        </>
    )
}
