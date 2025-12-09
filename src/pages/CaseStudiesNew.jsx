import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import arifix from '../assets/Arifix.webp'
import clf from '../assets/CLF.webp'
import bdbe from '../assets/BDBE.webp'
import creasoft_c from '../assets/Creasoft_captial.webp'
import creasoft_i from '../assets/Creasoft_io.webp'
import unidraft from '../assets/UniDraft.webp'
import checkin from '../assets/Checkin.webp'
import nuthunt from '../assets/Nutty_Hunt.webp'
import temoc_img from '../assets/Temoc.webp'
import ldnio from '../assets/Ldnio.webp'
import peace from '../assets/Peace.webp'
import slipper from '../assets/Slipper.webp'
import tgr from '../assets/TGR.webp'
import tsy from '../assets/TSY.webp'
import zestoo from '../assets/Zestoo.webp'
import fgf_img from '../assets/FGF.webp'
import rfc_img from '../assets/RFC.webp'

export default function CaseStudiesNew() {
    // Portfolio data array
    const portfolioData = [
        {
            name: 'CheckIn',
            image: checkin,
            route: '/portfolios/checkin',
            filter: ['web and mobile app development', "marketing", "branding"]
        },
        
        {
            name: 'Ldnio',
            image: ldnio,
            route: '/portfolios/ldnio',
            filter: ['web and mobile app development', "marketing", "branding"]
        },
        
        {
            name: 'Zestoo',
            image: zestoo,
            route: '/portfolios/zestoo',
            filter: ['web and mobile app development', "marketing", "branding", "photography"]
        },
        {
            name: 'TGR',
            image: tgr,
            route: '/portfolios/tgr',
            filter: ["videography", "marketing", "branding"]
        },
        {
            name: 'Slipper',
            image: slipper,
            route: '/portfolios/slipper',
            filter: ["photography", "marketing", "branding"]
        },
        {
            name: 'Peace',
            image: peace,
            route: '/portfolios/peace',
            filter: ["marketing", "branding"]
        },
        {
            name: 'TSY',
            image: tsy,
            route: '/portfolios/tsy',
            filter: ['web and mobile app development', "marketing", "branding"]
        },
        {
            name: 'Nutty Hunt',
            image: nuthunt,
            route: '/portfolios/nuttyhunt',
            filter: ["branding", "marketing", "photography"]
        },
        {
            name: 'Temoc',
            image: temoc_img,
            route: '/portfolios/temoc',
            filter: ["web and mobile app development", "marketing", "branding"]
        },
        {
            name: 'FGF',
            image: fgf_img,
            route: '/portfolios/fgf',
            filter: ["branding", "marketing", "web and mobile app development", "photography", "videography"]
        },
        {
            name: 'Arifix',
            image: arifix,
            route: '/portfolios/arifix',
            filter: []
        },
        {
            name: 'CLF',
            image: clf,
            route: '/portfolios/clf',
            filter: []
        },
        {
            name: 'BDBE',
            image: bdbe,
            route: '/portfolios/bdbe',
            filter: []
        },
        {
            name: 'Creasoft Capital',
            image: creasoft_c,
            route: '/portfolios/creasoft_c',
            filter: []
        },
        {
            name: 'Creasoft IO',
            image: creasoft_i,
            route: '/portfolios/creasoft_i',
            filter: []
        },
        {
            name: 'UniDraft',
            image: unidraft,
            route: '/portfolios/unidraft',
            filter: []
        },
        {
            name: 'RFC',
            image: rfc_img,
            route: '/portfolios/rfc',
            filter: []
        },
    ]

    const [selectedFilter, setSelectedFilter] = useState('All')
    const [filteredPortfolios, setFilteredPortfolios] = useState(portfolioData)

    // Filter portfolios based on selectedFilter
    useEffect(() => {
        if (selectedFilter === 'All') {
            setFilteredPortfolios(portfolioData)
        } else {
            const filtered = portfolioData.filter(item => 
                item.filter.includes(selectedFilter)
            )
            setFilteredPortfolios(filtered)
        }
    }, [selectedFilter])


    const filters = [
        'All',
        'web and mobile app development',
        'photography',
        'videography',
        'marketing',
        'branding'
    ]

    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>
            <section className="pt-[135px] pb-10 px-6 flex justify-center items-center ">
                <div className="w-full max-w-[1600px] ">
                    {/* Filter Section */}
                    <div className="mb-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                        {filters.map((filter, index) => (
                            <button
                                key={index}
                                className={`px-6 py-2 bg-[#CEEF2A] rounded-[20px] text-sm font-semibold tracking-wide text-[#0C2233] hover:bg-[#CEFD94] transition-colors cursor-pointer ${selectedFilter === filter ? 'bg-[#CEFD94]' : ''}`}
                                onClick={() => setSelectedFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {filteredPortfolios.map((portfolio, index) => (
                            <Link
                                key={index}
                                to={portfolio.route}
                                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer aspect-square"
                            >
                                {/* Full-cover image */}
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    <img
                                        src={portfolio.image}
                                        alt={portfolio.name}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>


                                {/* Hover title overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <h3 className="text-lg font-semibold text-white text-center">
                                        {portfolio.name}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

