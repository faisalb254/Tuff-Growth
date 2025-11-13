import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { BiHome, BiArrowBack } from 'react-icons/bi';

export default function NotFound() {
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section className="min-h-screen bg-[#1E1E1E] flex items-center justify-center pt-32 pb-20">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-14 text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-[#FF6A39] leading-none">
              404
            </h1>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Oops! Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-[#FFFEFB] max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off. Don't worry, 
              we'll help you get back on track to grow your business.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/">
              <button className="bg-[#FF6A39] text-black font-black text-lg px-8 py-4 rounded-[2px] hover:bg-[#ff8a5c] transition-colors duration-200 flex items-center gap-2 tilt-zoom cursor-pointer">
                <BiHome className="text-2xl" />
                Go to Homepage
              </button>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="border-2 border-[#CEFF2A] text-[#CEFF2A] font-semibold text-lg px-8 py-4 rounded-[2px] hover:bg-[#CEFF2A] hover:text-[#1E1E1E] transition-all duration-200 flex items-center gap-2 cursor-pointer">
              <BiArrowBack className="text-2xl" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="border-t-2 border-[#CEFF2A] pt-12">
            <p className="text-[#FFFEFB] text-base mb-6 font-semibold">
              Popular Pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link 
                to="/services" 
                className="text-[#FF6A39] hover:text-[#ff8a5c] font-medium transition-colors duration-200">
                Services
              </Link>
              <Link 
                to="/case-studies" 
                className="text-[#FF6A39] hover:text-[#ff8a5c] font-medium transition-colors duration-200">
                Case Studies
              </Link>
              <Link 
                to="/blog" 
                className="text-[#FF6A39] hover:text-[#ff8a5c] font-medium transition-colors duration-200">
                Blog
              </Link>
              <Link 
                to="/our-company" 
                className="text-[#FF6A39] hover:text-[#ff8a5c] font-medium transition-colors duration-200">
                Our Company
              </Link>
              <Link 
                to="/get-started-with-tuff" 
                className="text-[#FF6A39] hover:text-[#ff8a5c] font-medium transition-colors duration-200">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

