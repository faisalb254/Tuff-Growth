import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Blogdown from "../assets/Blogdown.svg";
import Blog1 from "../assets/Blog1.png";
import BlogW1 from "../assets/BlogW1.png";
import Blog2 from "../assets/Blog2.jpg";
import BlogW2 from "../assets/BlogW2.jpeg";
import Blog3 from "../assets/Blog3.jpg";
import BlogW3 from "../assets/BlogW3.png";
import Blog4 from "../assets/Blog4.png";
import BlogW4 from "../assets/BlogW4.png";
import Blog5 from "../assets/Blog5.jpg";
import BlogW5 from "../assets/BlogW5.jpeg";
import Blog6 from "../assets/Blog5.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    image: Blog1,
    tag: "GEO",
    title:
      "GEO, AEO, and LLM SEO: How AI Is Reshaping Search (And What Brands Should Do About It)",
    description:
      "We’re living in the AI era. From software and healthcare to data and other industries, AI is fueling technological disruption...",
    author: "Spencer Cappelli",
    date: "June 13, 2025",
    readTime: "8 Minute Read",
    authorImage: BlogW1,
  },
  {
    id: 2,
    image: Blog2,
    tag: "GROWTH MARKETING",
    title:
      "Fueling Growth: Performance-Based Marketing for Growth-Driven Organizations",
    description:
      "Are you leading a growth-focused organization eager to boost your marketing outcomes? Whether you’re a high-growth startup, a mid-market business, …",
    author: "Ethan Broder Growth Marketer",
    date: "May 20, 2025",
    readTime: "4 Minute Read",
    authorImage: BlogW2,
  },
  {
    id: 3,
    image: Blog3,
    tag: "GROWTH MARKETING",
    title: "The 4 Essential Steps of Performance Marketing for Brands",
    description:
      "In working with hundreds of brands — from startup to enterprise — over the last half decade, we’ve found brand …",
    author: "Richard Meyer Growth Marketer",
    date: "May 13, 2025",
    readTime: "7 Minute Read",
    authorImage: BlogW3,
  },
  {
    id: 4,
    image: Blog4,
    tag: "PAID MEDIA",
    title:
      "Preparing for a TikTok Ban: Strategies to Protect Campaigns and Budgets",
    description:
      "The potential U.S. ban of TikTok has dominated headlines for years. Most recently, in December 2024, the U.S. Court …",
    author: "Kate Theobald Social Ads Strategist",
    date: "December 18, 2024",
    readTime: "3 Minute Read",
    authorImage: BlogW4,
  },
  {
    id: 5,
    image: Blog5,
    tag: "CREATIVE",
    title: "Creative Testing at Scale: A Framework for Marketing Leaders",
    description:
      "Consumer behavior and ad platform algorithms never stop evolving. What drove engagement and conversions last month might not move the …",
    author: "Jack DiGregorio Social Ads Strategist",
    date: "December 5, 2024",
    readTime: "6 Minute Read",
    authorImage: BlogW5,
  },
];

const categories = [
  "All",
  "Content Strategy",
  "Technical SEO",
  "Email",
  "Ad Creative",
  "CRO",
  "Growth Marketing",
  "Social Ads",
  "Paid Search",
];

const articless = [
  {
    id: 1,
    image: Blog1,
    tag: "GEO",
    title:
      "GEO, AEO, and LLM SEO: How AI Is Reshaping Search (And What Brands Should Do About It)",
    date: "June 13, 2025",
    category: "Content Strategy",
  },
  {
    id: 2,
    image: Blog2,
    tag: "GROWTH MARKETING",
    title:
      "Fueling Growth: Performance-Based Marketing for Growth-Driven Organizations",
    date: "May 20, 2025",
    category: "Growth Marketing",
  },
  {
    id: 3,
    image: Blog3,
    tag: "PAID MEDIA",
    title:
      "Preparing for a TikTok Ban: Strategies to Protect Campaigns and Budgets",
    date: "May 16, 2025",
    category: "Paid Search",
  },
  {
    id: 4,
    image: Blog4,
    tag: "GROWTH MARKETING",
    title: "The 4 Essential Steps of Performance Marketing for Brands",
    date: "May 13, 2025",
    category: "Growth Marketing",
  },
  {
    id: 5,
    image: Blog5,
    tag: "CREATIVE",
    title: "Balancing Brand and Performance in Your Creative Strategy",
    date: "Nov 11, 2025",
    category: "Ad Creative",
  },
  {
    id: 6,
    image: Blog6,
    tag: "SEO",
    title: "SEO Brand and Steps of Performance Marketing",
    date: "Dec 11, 2025",
    category: "Technical SEO",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articless
      : articless.filter((a) => a.category === selectedCategory);
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>
      <section>
        <div className="w-full min-h-[78vh] guidebg pb-10 md:pb-0 pt-20 sm:pt-[120px] md:pt-31">
          <div className="w-[90%] sm:w-[85%] md:w-[80.5%] h-full m-auto flex flex-col lg:flex-row justify-between gap-8 pr-0 lg:pr-4">
            <div className="w-full lg:w-[49.5%] h-full pt-6 sm:pt-8 md:pt-9">
              <h2 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[59px] font-extrabold text-[#ffffff] leading-[32px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px]">
                Performance Marketing Insights
              </h2>
              <p className="text-[18px] sm:text-[22px] md:text-[24px] font-medium mt-4 sm:mt-5 mb-4 sm:mb-5 text-white">
                The latest trends, analytics, and strategies for growth.
              </p>
              <div>
                <a  href="#intro">
                  <img src={Blogdown} alt="Blogdown" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-[47.5%] h-full pb-8 sm:pb-10 lg:pb-13 bg-[#1F3343] border-2 border-[#3B4C5A] rounded-[4px]">
              <div className="w-[90%] sm:w-[85%] md:w-full m-auto px-4 sm:px-8 md:px-12">
                <div className="h-auto mt-6 sm:mt-8 md:mt-13 py-2 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-3 sm:px-4 md:px-5 text-[11px] sm:text-sm font-semibold tracking-[1px] sm:tracking-[1.2px] md:tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                  MONTHLY NEWSLETTER
                </div>
                <h2 className="text-[26px] sm:text-[36px] md:text-[24px] font-extrabold text-[#FFFFFF] mt-5">
                  The Growth Note
                </h2>
                <p className="text-[14px] sm:text-[18px] md:text-[19px] font-medium text-[#FFFFFF] mt-3 sm:mt-4 leading-[22px] sm:leading-[26px] md:leading-[30px]">
                  We’ll keep you in the loop on our best advice and strategies
                  for social media marketing and growing a small business.
                </p>
                <div className="w-full h-auto m-auto mt-5 sm:mt-6 md:mt-7 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full md:w-[56.5%] px-3 sm:px-4 h-[42px] sm:h-[45px] md:h-[52px] bg-white border border-gray-300 rounded-[3px] focus:ring-2"
                  />
                  <button className="w-full md:w-[38.5%] h-[42px] sm:h-[45px] md:h-[52px] bg-[#ceff2a] text-[#0E2333] text-[15px] sm:text-[17px] md:text-[18px] font-bold px-4 md:px-6 rounded-[3px] transition-colors duration-200">
                    Join Newsletter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="intro" className="w-full min-h-screen pt-10 sm:pt-16 md:pt-28 px-4 sm:px-8 md:px-27 pb-10 sm:pb-16 md:pb-20 gap-6 sm:gap-8">
          <div className="w-full bg-white py-8 pb-0 px-4 md:px-8 gap-6 mb-13">
            {articles.map((article) => (
              <div
                key={article.id}
                className="border-3 border-gray-200 rounded-[4px] flex flex-col md:flex-row items-start p-4 md:p-6 mt-4 bg-white"
              >
                <div className="w-full md:w-[27%] mb-4 md:mb-0 pr-0 sm:pr-2 md:pr-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-auto rounded"
                  />
                </div>
                <div className="w-full md:w-[73%] md:pl-6 flex flex-col justify-center mt-4 sm:mt-6 md:mt-8">
                  <div className="mb-2">
                    <span className="inline-block bg-[#FF6A39] text-white text-xs font-semibold px-4 sm:px-5 py-2 rounded-full">
                      {article.tag}
                    </span>
                  </div>
                  <h2 className="text-[#0C2233] font-extrabold text-base sm:text-lg md:text-[18px] leading-tight mt-2 sm:mt-3 mb-4">
                    {article.title}
                  </h2>
                  <p className="text-[#0C2233] text-sm sm:text-base mb-4 sm:mb-6">
                    {article.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <img
                        src={article.authorImage}
                        alt={article.author}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover"
                      />
                      <span className="text-[#0C2233] text-sm font-semibold">
                        {article.author}
                      </span>
                    </div>
                    <span className="text-[#0C2233] text-sm sm:text-[16px]">
                      {article.date}
                    </span>
                    <span className="text-[#0C2233] text-sm sm:text-[16px]">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="text-[#0C2233] font-extrabold text-base sm:text-lg md:text-[21px] text-center leading-tight mb-10 sm:mb-15">
            Load More
          </h2>
        </div>
      </section>

      <section>
        <div className="bg-[#0C2233] min-h-screen py-10 px-4 md:px-0">
          <div className="w-full md:w-[69.5%] mx-auto">
            <div className="w-full flex flex-wrap justify-center md:justify-between gap-4 mb-10 md:mb-18">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-white font-semibold ${selectedCategory === cat
                    ? "border-b-2 border-[#CEFD94] text-white"
                    : "text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="border border-[#3B4C5A] rounded-[3px] flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 sm:p-5 md:p-7 sm:pr-2 cursor-pointer bg-[#203444]"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full sm:w-[48.5%] rounded"
                  />
                  <div className="mt-3 sm:mt-0">
                    <span className="inline-block bg-[#FF6A39] text-white text-xs font-bold px-4 py-2 rounded-full mb-3">
                      {article.tag}
                    </span>
                    <h3 className="text-white font-extrabold text-[17px] sm:text-[18px] md:text-[19px] leading-tight mb-2">
                      {article.title}
                    </h3>
                    <p className="text-white text-xs sm:text-sm">
                      {article.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-[#FFFFFF] mt-6 sm:mt-7 font-extrabold text-base sm:text-lg md:text-[21px] text-center leading-tight">
              Load More
            </h2>
          </div>

          <div className="w-[95%] sm:w-[90%] md:w-[90%] mx-auto mt-10 md:mt-19 h-auto md:h-[452px] bg-[#203444] border-2 border-[#E0E0E0] rounded-[4px] p-4 sm:p-6 md:p-0">
            <div className="w-full sm:w-[80%] md:w-[52%] mx-auto">
              <div className="h-auto mx-auto mt-6 sm:mt-8 md:mt-16 py-2 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-3 sm:px-4 md:px-5 text-xs sm:text-sm font-semibold tracking-[1px] sm:tracking-[1.2px] md:tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
                MONTHLY NEWSLETTER
              </div>
              <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-extrabold text-[#FFFFFF] text-center mt-3 leading-[32px] sm:leading-[42px] md:leading-[70px]">
                The Growth Note
              </h2>
              <p className="text-[15px] sm:text-[18px] md:text-[24px] font-medium text-[#FFFFFF] text-center mt-3 leading-[22px] sm:leading-[26px] md:leading-[30px]">
                We’ll keep you in the loop on our best advice and strategies for
                social media marketing and growing a small business.
              </p>
              <div className="w-full h-[50px] sm:w-[90%] md:w-[74%] mx-auto mt-5 sm:mt-6 md:mt-11 flex flex-col md:flex-row items-center justify-center gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full md:w-[59.5%] bg-white px-4 h-[42px] sm:h-[45px] md:h-full border border-[#354755] rounded-[3px] focus:ring-2"
                />
                <button className="w-full md:w-[37.5%] h-[42px] sm:h-[45px] md:h-full bg-[#ceff2a] text-[#0E2333] text-[15px] sm:text-[17px] md:text-[18px] font-bold px-4 md:px-6 rounded-[3px] transition-colors duration-200">
                  Join Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-[57vh] flex items-center justify-center p-1 md:px-19">
          <div className="w-[90%] md:w-full h-[360px] flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-[30px] sm:text-[42px] md:text-[52px] font-semibold text-[#0C2233]">
              Ready to grow?
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium mt-3 text-[#0C2233]">
              Your compounding growth curve begins here.
            </p>
            <Link to="/get-started-with-tuff">
              <button className="text-[#0C2233] cursor-pointer text-[18px] md:text-[22px] font-bold mt-6 p-4 bg-[#ceff2a] px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                Book a Strategy Call
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
