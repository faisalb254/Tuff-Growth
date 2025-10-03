import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FinalSection from '../components/FinalSection'
import Faq from '../components/Faq'
import img1 from '../assets/tiktokimg1.png'
import img2 from '../assets/tiktokimg2.svg'
import img3 from '../assets/tiktokimg3.png'
import img4 from '../assets/tiktokimg4.jpg'
import img5 from '../assets/tiktokimg5.jpg'
import img6 from '../assets/tiktokimg6.jpg'
import img7 from '../assets/tiktokimg7.jpg'
import img8 from '../assets/tiktokimg8.jpg'
import img9 from '../assets/tiktokimg9.jpg'
import circletik from '../assets/circletik.svg'
import { BiChevronRight } from "react-icons/bi";
import signal1 from '../assets/signal1.png'
import signal2 from '../assets/signal2.png'
import tiktokvideo from '../assets/tiktokvid.mp4'
import Elle from '../assets/ellieicon.png'
import jack from '../assets/jackicon.png'
import kate from '../assets/kateicon.png'
import david from '../assets/davidicon.png'
import { Link } from 'react-router-dom'


export default function Tiktok() {
    const box = {
        heading: "What does success look like for you on TikTok?",
        para: ["Get a fully managed TikTok ads strategy and execution from a team of media, data, and creative experts."],
        button: "Let's Talk"
    }
    const faqs = [
        {
            question: "What is a TikTok ads agency?",
            answer:
                [
                    {
                        para: "A TikTok ads agency is like having your very own squad of TikTok experts to help your business shine on the platform. These experts offer a bunch of helpful services, like coming up with strategic campaign ideas, creating platform-native videos, keeping an eye on your stats, finding your ideal audience, and making sure you play by TikTok’s rules.",
                        type: "para"
                    },
                    {
                        para: "So, why team up with a TikTok ads agency? Well, if you’re eager to make the most of TikTok’s advertising magic but don’t have all the know-how or resources in-house, these agencies are your go-to pals. They know TikTok inside and out, and they’ll help you reach your goals and connect with the right crowd on the platform.",
                        type: "para"
                    }
                ],
        },
        {
            question: "What does a TikTok ads agency cost?",
            answer:
                [
                    {
                        para: "When it comes to hiring a TikTok ads agency, the costs can vary significantly, influenced by various factors. Here are some key factors to bear in mind:",
                        type: "para"
                    },
                    {
                        para: "Advertising Budget: Your overall advertising budget plays a pivotal role in determining the total cost. Typically, the more you invest in TikTok advertising, the more the agency may charge for managing and optimizing your campaigns. Agencies frequently apply a percentage-based fee linked to your ad spend.",
                        type: "list"
                    },
                    {
                        para: "Creative Requirements: Effective creative content is essential on platforms like TikTok. It can significantly impact your results. While additional creative services may increase the overall cost, they are often well worth it to achieve the desired outcomes.",
                        type: "list"
                    },
                    {
                        para: "Campaign Complexity: The complexity of your advertising campaigns can also affect costs. If your campaigns are relatively simple, with straightforward ad creatives and minimal targeting, the cost may be on the lower side. However, for intricate campaigns involving various ad formats, precise targeting, and extensive creative work, the cost is likely to be higher.",
                        type: "list"
                    },
                    {
                        para: "It’s crucial to have open discussions about your budget and campaign objectives with the TikTok ads agency you’re considering. Most agencies, such as Tuff, are willing to provide a personalized proposal tailored to your specific needs and budget. This way, you can have a clear understanding of the expected costs and ensure they align with your advertising goals.",
                        type: "para"
                    },
                ],
        },
        {
            question: "Do you manage influencers and creative?",
            answer: [
                {
                    para: "While we don’t manage influencers at Tuff, we have an extensive network of creators we tap for TikTok ad creation and a proven process of working with your existing influencers to repurpose or create new content for ads.",
                    type: "para"
                },
                {
                    para: "The most important “ingredient” to getting this “recipe” right is our team’s ability to act like an extension of your in-house team; having dedicated conversations and building relationships with your creatives and community/influencer managers so that there’s open communication, tons of support, and big creative energy and fun.",
                    type: "para"
                },
            ]
        },
        {
            question: "How important is TikTok ad creative? ",
            answer:
                [
                    {
                        para: "Crafting your brand’s narrative and conveying its value in under 15 seconds may not be a walk in the park, but it’s entirely attainable. If you can unlock this secret, TikTok has the potential to become a powerful catalyst for your brand’s growth.",
                        type: "para"
                    },
                    {
                        para: "The crux of TikTok advertising success lies in the ingenuity of your ad creative. It’s not just about the content itself; it’s equally about how well it harmonizes with TikTok’s culture, seizes the viewer’s attention, and sparks interaction. A well-executed ad creative can supercharge your ad performance, expanding your reach and ultimately realizing your advertising objectives.",
                        type: "para"
                    },
                    {
                        para: "Here at Tuff, our TikTok Ads team is in a constant state of exploration, trying out fresh creative concepts for our clients. If something doesn’t click, we swiftly pivot and continue experimenting with novel ideas until we discover the winning formula. Your success is our mission!",
                        type: "para"
                    },
                ]
        },
    ];
    return (
        <>
            <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
                <Navbar />
            </div>

            <section>
                <div className="tiktokbg w-full flex justify-center items-center pt-50">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className='text-4xl md:text-6xl font-black my-5'>
                                The TikTok Ads Agency That Helps You Engage Customers at Every Stage of Their Journey, Maximizing Acquisition.
                            </h1>
                            <p className=' text-xl my-5'>
                                Diversify your channel mix with TikTok ads. Let’s level up your acquisition and awareness efforts with highly-targeted campaigns on TikTok.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                                <Link to={"/get-started-with-tuff"}>Let's talk</Link>
                            </button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20 ">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10 ">
                        <div className="w-full md:w-1/2  ">
                            <h1 className='text-4xl font-black my-5'>
                                Tuff is your TikTok Ads agency.
                            </h1>
                            <p className=' text-xl my-5'>
                                Reach your target audience on TikTok to build awareness and drive the right traffic to your site. Showcase what makes you great with help from our experienced TikTok Ads agency team.
                            </p>
                            {/* #FF6A39 */}
                            <span className=' flex text-xl font-black hover:text-[#FF6A39] tilt-zoom'>Tuff is a remote growth marketing team for hire. Learn more
                                <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                            </span>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2">
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 md:w-96 ">
                                <img className=' w-12.5 h-12.5' src={signal1} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    Before Tuff
                                </h2>
                                <p className=' text-xl my-4 text-[#0c2233]'>
                                    Accounts are unorganized, things slip, limited communication, all reports, and no action, it’s tough to see where things stand, and people are stressed.
                                </p>
                            </div>
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 md:w-96 ">
                                <img className=' w-12.5 h-12.5' src={signal2} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    After Tuff
                                </h2>
                                <p className=' text-xl my-4 text-[#0c2233]'>
                                    Everything is organized in one place, daily communication, focused Google Ads strategy and execution, results delivered, progress is clear, and a sense of trust sets in.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="adline w-full flex flex-col justify-start items-center gap-4 text-white py-20">
                    <div className="h-[45px] w-fit px-4 bg-[#CEFD94] rounded-[40px] flex items-center justify-center gap-1 text-[15px] font-semibold text-[#0C2233]">
                        Creative + Campaign Strategy
                    </div>
                    <h2 className=' text-4xl text-center font-black w-1/2'>
                        Ad creative is critical for success on TikTok.
                    </h2>
                    <p className=' text-xl text-center w-3/5'>
                        When it comes to developing ad creative for TikTok, it’s all about testing, testing, and testing again. Then testing some more. At Tuff, we’re ruthless about throwing out creative that’s not converting and making more of what is. So instead of relying on slow-moving and expensive creative agencies, we create UGC-forward, high-impact video assets designed for each stage of the customer journey on TikTok.
                    </p>
                    <video
                        src={tiktokvideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: "80%", height: "auto" }}
                    />
                    <span className=' p-5 border-white border-2 mt-10 font-black tilt-zoom text-center w-6/10'>
                        See examples of TikTok ad creative here
                    </span>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20">
                    <div className="w-9/10 h-9/10 flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <img src={img3} alt="" className=" w-8/10 h-6/10" />
                            <h2 className=' text-5xl font-black'>
                                Tuff’s approach to TikTok creative is simple and proven:
                            </h2>
                            <p className=' text-xl'>
                                This past year alone, we’ve launched hundreds of ads on TikTok and we’ve put each asset under a microscope.  We know how to create TikTok ads that drive traffic, conversions, and results for your brand.
                            </p>
                            <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                                Let's talk
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col">
                            <div className=" my-5">
                                <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                                    Step 1
                                </span>
                                <h3 className=' text-[28px] font-black my-5'>
                                    Get specific with audiences & campaign setup so we understand the focus of our message testing
                                </h3>
                            </div>
                            <div className=" my-5">
                                <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                                    Step 2
                                </span>
                                <h3 className=' text-[28px] font-black my-5'>
                                    Develop low-budget/high-impact channel-specific creative with intentional messaging variety
                                </h3>
                            </div>
                            <div className=" my-5">
                                <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                                    Step 3
                                </span>
                                <h3 className=' text-[28px] font-black my-5'>
                                    Launch
                                </h3>
                            </div>
                            <div className=" my-5">
                                <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                                    Step 4
                                </span>
                                <h3 className=' text-[28px] font-black my-5'>
                                    Measure, analyze, learn
                                </h3>
                            </div>
                            <div className=" my-5">
                                <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                                    Step 5
                                </span>
                                <h3 className=' text-[28px] font-black my-5'>
                                    Develop a new round of creative fueled by data-driven insights
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center my-10">
                    <div className="w-9/10 flex flex-col justify-start items-center gap-5">
                        <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                            KNOWLEDGE BASE
                        </span>
                        <h2 className=' text-5xl font-black'>
                            Resources
                        </h2>
                        <div className=" w-full flex justify-center items-center gap-5 flex-wrap">
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72. sm:w-96">
                                <img className=' my-4' src={img4} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    CREATIVE
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    The Ultimate Guide to Maximizing Your Media Spend with Performance Ad Creative
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    Humans are inherently social creatures. We’ve survived and thrived for centuries, relying on one another to navigate the complexities of social interactions and decision-making. Take online reviews–we’ve all used them…
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={Elle} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Elle Ossello</strong>
                                        | January 25, 2023
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img5} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    TikTok Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    Want To Run TikTok Prospecting Campaigns That Convert? Try This! [Data Included]
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    What was once considered a platform for users to share silly, short-form videos that featured new dances and or lip-syncing trending audios in 2016 is now considered the top app for consumer spend in 2022.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={kate} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Kate Theobald</strong>
                                        | July 21, 2022
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img6} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    TikTok Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    Do Spark Ads Get Better Results on TikTok? (Yes, but it’s Complex)
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    With Facebook getting more challenging by the day, many advertisers and marketers are turning their attention to advertising on TikTok. It seems like every day there is another statistic about how TikTok is growing into a massive platform for not just Gen Z but Millennials and older generations as well.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={david} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>David Lawson</strong>
                                        | November 3, 2022
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img7} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    TikTok Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    We Spent $100k on TikTok Video Ads in 30 Days and Pulled These Benchmarks
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    Having benchmark data for other TikTok video ads could be incredibly valuable for determining just how effective your campaigns are relative to the industry. It could also give you an idea of just how much TikTok ads cost so that you can plan properly.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={david} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>David Lawson</strong>
                                        | October 17, 2022
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img8} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    TikTok Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    TikTok Creative Best Practices: How to Make Great TikTok Creative [Updated]
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    In the past couple of years, TikTok has quickly become one of the top acquisition channels for startups and established brands. The platform now has 1 billion (with a B!) monthly active users total — Of which, the MAUs in the US have now passed 100 million, equaling 37% of America’s 267.6 million mobile internet users.
                                </p>
                                <div className="flex items-center my-4">
                                    <img src={kate} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Kate Theobald</strong>
                                        | July 21, 2022
                                    </span>
                                </div>
                            </div>
                            <div className="p-7.5 border border-[rgb(0_0_0_/_12%)] w-72 sm:w-96">
                                <img className=' my-4' src={img9} alt="" />
                                <span className=' my-4 px-5 py-2.5 bg-[#FF6A39] font-black rounded-full'>
                                    TikTok Ads
                                </span>
                                <div className=" my-4 text-xl font-black">
                                    Benchmarking TikTok Video Ad Hook Rates
                                </div>
                                <p className=' my-4 text-[16px]'>
                                    With attention spans shortening and the fast-paced world of social media speeding up, figuring out what type of marketing works for your audience can be tricky. As a growth marketing agency, we dissect all sorts of data points every day to single out which metric(s) will tell us what we need to know. The more specific we can get, the easier it is to improve what we have and plan out what we need.
                                </p>
                                <div className="flex  items-center my-4">
                                    <img src={jack} alt="" className=' w-1/10 m-2.5' />
                                    <span>
                                        <strong>Jack DiGregorio</strong>
                                        | July 6, 2022
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="w-full flex justify-center items-center bg-[#0c2233] text-white py-20">
                    <div className=" w-4/5 flex flex-col md:flex-row gap-4">
                        <img src={img2} alt="" className=" w-37.5 h-18" />
                        <div className="">
                            <p className="text-xl sm:text-3xl font-black">
                                “The team at Tuff knows their stuff – and it’s precisely why they are not selling ‘magic’ or any kind of ‘mysterious sauce.’ Instead, they are betting on transparency and experimentation, and it seems to be working well: The agency was warmly recommended to TechCrunch multiple times via our growth marketing survey.”
                            </p>
                            <p className="text-xl sm:text-3xl font-black my-4">
                                Tuff in Techcrunch, (Full Article)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full flex justify-center items-center my-20">
                    <div className="w-9/10 flex flex-col justify-start items-center">
                        <h1 className=' text-5xl font-black w-full md:w-1/2 my-2.5 text-center'>
                            Drive full-funnel growth with TikTok in your media mix.
                        </h1>
                        <p className='w-full md:w-1/2 text-xl text-center'>
                            Regardless of the role of TikTok in the media mix, there are 5 key principles of TikTok ad success:
                        </p>
                        <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                            <Link to={"/get-started-with-tuff"}>Let's talk</Link>
                        </button>
                        <div className=" flex flex-wrap justify-evenly  gap-8">
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)]">
                                <img src={circletik} alt="" />
                                <span className=' my-2.5'>
                                    Deep understanding of your best audience segments
                                </span>
                            </div>
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)]">
                                <img src={circletik} alt="" />
                                <span className=' my-2.5'>
                                    Proper campaign structure and campaign type
                                </span>
                            </div>
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)]">
                                <img src={circletik} alt="" />
                                <span className=' my-2.5'>
                                    TikTok-specific assets with the right hook for each audience segment
                                </span>
                            </div>
                        </div>
                        <div className=" mt-10 flex flex-wrap justify-evenly  gap-8">
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)]">
                                <img src={circletik} alt="" />
                                <span className=' my-2.5'>
                                    Clear user funnels and product flow
                                </span>
                            </div>
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)]">
                                <img src={circletik} alt="" />
                                <span className=' my-2.5'>
                                    Correct measurement framework, bespoke reporting, and analytics
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className=" w-full flex flex-col justify-center items-center">
                    <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-center text-[#0C2233] ">
                        FAQs
                    </h2>
                    <div className="w-full md:w-2/3">
                        <Faq faq={faqs} />
                    </div>
                </div>
            </section>
            <FinalSection text={box} />
            <Footer />
        </>
    )
}
