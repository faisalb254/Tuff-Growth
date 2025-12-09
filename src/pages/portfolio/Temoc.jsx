import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'
import CaseTemoc from '../case-studies/CaseTemoc'
import temoc_img from '../../assets/Temoc.webp'

export default function Temoc() {
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section>
                <Portfolio brandimg={temoc_img} brandname="Temoc"/>
            </section>
            <CaseTemoc noNavbarFooter={true} />
            <Footer />
        </>
    )
}
