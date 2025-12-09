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
                        para: "Hiring a TikTok Ads agency is like gaining your own dedicated squad of platform experts, focused solely on making your business shine. They provide a range of essential services, including strategic campaign planning, crafting authentic, native video creative, optimizing performance metrics, precisely targeting your ideal audience, and ensuring full compliance with all of TikTok's guidelines.",
                        type: "para"
                    },
                    {
                        para: "So, why partner with a TikTok ads agency? If you're ready to maximize TikTok's advertising potential but lack the in-house expertise or resources, these agencies are essential partners. They possess comprehensive, platform-specific knowledge and will ensure you effectively reach your goals and connect with the right target audience on TikTok.",
                        type: "para"
                    }
                ],
        },
        {
            question: "What does a TikTok ads agency cost?",
            answer:
                [
                    {
                        para: "Hiring a TikTok ads agency involves costs that vary significantly, based on specific criteria. We recommend bearing these key factors in mind:",
                        type: "para"
                    },
                    {
                        para: "Advertising Budget: The size of your total ad budget significantly influences the final cost. Agencies usually charge more to manage and optimize larger TikTok advertising investments. This is often structured as a percentage-based fee directly tied to your overall ad spend.",
                        type: "list"
                    },
                    {
                        para: "Content and Cost: Impactful creative content is critical for achieving your desired results on TikTok. Therefore, while the cost will increase with the addition of creative development services, the enhanced performance usually provides a strong return on that investment.",
                        type: "list"
                    },
                    {
                        para: "Scope of Work: The level of campaign complexity directly affects the total cost. While simple campaigns with basic creative and targeting tend to be less expensive, highly intricate campaigns involving multiple formats, hyper-specific targeting, and substantial creative work will require a larger budget.",
                        type: "list"
                    },
                    {
                        para: "It is essential to have transparent discussions about your budget and campaign objectives with any prospective TikTok ads agency. Agencies like Havit are typically happy to generate a personalized proposal that aligns with your specific requirements and budget, giving you a clear forecast of costs and confirming goal alignment.",
                        type: "para"
                    },
                ],
        },
        {
            question: "Do you manage influencers and creative?",
            answer: [
                {
                    para: "While we do not handle influencer management at Havit, we maintain an extensive network of creators we utilize specifically for developing high-performing TikTok ad content. We also have a proven system for collaborating with your existing influencers to repurpose or generate new assets for advertising.",
                    type: "para"
                },
                {
                    para: "The most critical component of our success is our team's seamless integration with your in-house staff. This involves holding focused discussions and building strong working relationships with your creative and community/influencer managers, ensuring open communication, comprehensive support, and fostering vibrant creative energy.",
                    type: "para"
                },
            ]
        },
        {
            question: "How important is TikTok ad creative? ",
            answer:
                [
                    {
                        para: "Developing your brand story and conveying its worth quickly, in less than 15 seconds, requires effort, yet it remains fully attainable. Once you achieve this brevity, TikTok offers massive potential to catalyze your brand's expansion.",
                        type: "para"
                    },
                    {
                        para: "The cornerstone of successful TikTok advertising is truly inventive ad creative. Success depends not just on the content itself, but also on how seamlessly it blends with TikTok's culture, captures viewer attention, and generates engagement. Superior creative execution can drastically boost your ad performance, expanding your reach and securing your advertising goals.",
                        type: "para"
                    },
                    {
                        para: "Havit TikTok Ads team is continuously exploring and testing fresh creative concepts for our clients. If an approach doesn't perform, we quickly pivot and relentlessly experiment with new ideas until we uncover the successful formula. We consider your success our primary mission.",
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
                <div className="tiktokbg w-full flex justify-center items-center pt-10 lg:pt-20">
                    <div className="w-9/10 flex flex-col md:flex-row justify-center items-center gap-10">
                        <div className="w-full md:w-1/2 text-white ">
                            <h1 className='text-4xl md:text-6xl font-black my-5 text-left'>
                                Engaging Your Customers for Maximum Acquisition and Growth.
                            </h1>
                            <p className=' text-xl my-5'>
                                Diversify your marketing channels. Let us level up your acquisition efforts with precision-targeted campaigns on TikTok.
                            </p>
                            <p className=' text-xl my-5'>
                                Partner with Havit for TikTok Ad Success.
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
                                Partner with Havit for TikTok Ad Success.
                            </h1>
                            <p className=' text-xl my-5'>
                                Connect with your target audience on TikTok to build brand awareness and drive high-quality traffic directly to your site. Our experienced TikTok Ads agency team will help showcase your unique value proposition effectively.
                            </p>
                            {/* #FF6A39 */}
                            <span className=' flex text-xl font-black hover:text-[#FF6A39] tilt-zoom'>Havit is a remote growth marketing team for hire. Learn more
                                <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                            </span>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2">
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 md:w-96 ">
                                <img className=' w-12.5 h-12.5' src={signal1} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    Before Havit
                                </h2>
                                <p className=' text-xl my-4 text-[#0c2233]'>
                                    Unorganized accounts, missed deadlines, and inconsistent communication lead to a reliance on static reports without clear actions, making it extremely difficult to determine progress and creating significant team stress.
                                </p>
                            </div>
                            <div className=" border border-[rgb(0_0_0_/_12%)] p-7.5 w-72 md:w-96 ">
                                <img className=' w-12.5 h-12.5' src={signal2} alt="" />
                                <h2 className=' font-black text-xl my-5'>
                                    After Tuff
                                </h2>
                                <p className=' text-xl my-4 text-[#0c2233]'>
                                    With everything organized and daily communication in place, our focused Google Ads strategy leads directly to high-impact execution. Clear results are delivered, progress is transparent, and a foundation of trust is firmly established.
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
                        Ad creative plays the most critical role in on TikTok
                    </h2>
                    <p className=' text-xl text-center w-3/5'>
                        Success on TikTok creative hinges entirely on continuous iteration, testing, and optimization. Havit cuts through the noise by being ruthless about eliminating underperforming creative and prioritizing assets that deliver results. We avoid the delays and high costs of traditional creative agencies; instead, we receive brand-forward, high-impact video assets, built in a UGC style and perfectly mapped to each stage of our acquisition funnel on TikTok.
                    </p>
                    {/* <video
                        src={tiktokvideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: "80%", height: "auto" }}
                    /> */}
                    <span className=' p-5 border-white border-2 mt-10 font-black tilt-zoom text-center w-6/10'>
                        See examples of TikTok ad creative here
                    </span>
                </div>
            </section>
            <section>
                <div className=" w-full flex justify-center items-center py-20">
                    <div className="w-9/10 h-9/10 flex flex-col lg:flex-row gap-5">
                        <div className="w-full lg:w-1/2">
                            <img src={img3} alt="" className=" w-8/10 h-5/10" />
                            <h2 className=' text-4xl font-black my-5'>
                                Havit's approach to TikTok creative is both simple and highly effective.
                            </h2>
                            <p className=' text-xl'>
                                Over the last year, we've launched hundreds of TikTok ads.  our team possesses the deep knowledge required to craft assets that consistently drive traffic, conversions, and significant results for your brand.
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
                                    By being specific with audience profiles and campaign setup, we ensure a sharp, targeted focus for our message testing efforts.
                                </h3>
                            </div>
                            <div className=" my-5">
                                <span className=' px-5 py-2.5 bg-[#CEFD94] font-black rounded-full'>
                                    Step 2
                                </span>
                                <h3 className=' text-[28px] font-black my-5'>
                                    Focus on creating low-budget, channel-specific creative that maximizes impact through intentionally varied messaging.
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

            {/* <section>
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
            </section> */}
            <section>
                <div className="w-full flex justify-center items-center my-20">
                    <div className="w-9/10 flex flex-col justify-start items-center">
                        <h1 className=' text-4xl font-black w-full md:w-7/10 my-2.5 text-center'>
                            Achieve full-funnel growth by utilizing TikTok within your advertising strategy.
                        </h1>
                        <p className='w-full md:w-1/2 text-xl text-center'>
                            Irrespective of the role of TikTok in the media mix, there are 5 foundational principles of TikTok ads success:
                        </p>
                        <button className='bg-[#FF6A39] my-5 p-5 text-2xl text-black font-black'>
                            <Link to={"/get-started-with-tuff"}>Let's talk</Link>
                        </button>
                        <div className=" flex flex-wrap justify-evenly gap-8">
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)] text-left">
                                <img src={circletik} alt="" />
                                <span className=' my-2.5'>
                                    Deep understanding of your best audience segments
                                </span>
                            </div>
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)] text-left">
                                <img src={circletik} alt="" />
                                <span className=' my-2.5'>
                                    Proper campaign structure and campaign type
                                </span>
                            </div>
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)] text-left">
                                <img src={circletik} alt="" />
                                <span className=' my-2.5'>
                                    TikTok-specific assets with the right hook for each audience segment
                                </span>
                            </div>
                        </div>
                        <div className=" mt-10 flex flex-wrap justify-evenly  gap-8">
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)] text-left">
                                <img src={circletik} alt="" />
                                <span className=' my-2.5'>
                                    Clear user funnels and product flow
                                </span>
                            </div>
                            <div className="p-7.5 font-black text-xl sm:text-[28px] w-70 sm:w-96 h-60 border border-[rgb(0_0_0/12%)] text-left">
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
